import mosek
import numpy as np
import cvxpy as cvx

from typing import List, Tuple

from domain.exceptions.DistributionShapeError import DistributionShapeError
from domain.exceptions.MatrixNotSquareError import MatrixNotSquareError


# region module public functions
def mh_transition_matrix(A: np.ndarray, v_: np.ndarray, column_major_in: bool = False, column_major_out: bool = True) -> np.ndarray:
    """
    Constructs a transition matrix with desired distribution as steady state
    :param np.ndarray A: any symmetric adjacency matrix
    :param np.ndarray v_: a stochastic desired distribution vector
    :param bool column_major_in: indicates whether adj_matrix given in input is in row or column major form
    :param bool column_major_out: indicates whether to return transition_matrix output is in row or column major form
    :returns np.ndarray transition_matrix: unlabeled transition matrix
    """

    # Input checking
    if v_.shape[0] != A.shape[1]:
        raise DistributionShapeError("distribution shape: {}, proposal matrix shape: {}".format(ddv.shape, A.shape))
    if A.shape[0] != A.shape[1]:
        raise MatrixNotSquareError("rows: {}, columns: {}, expected square matrix".format(A.shape[0], A.shape[1]))

    if column_major_in:
        A = A.transpose()

    shape: Tuple[int, int] = A.shape
    size: int = A.shape[0]

    rw: np.ndarray = _construct_random_walk_matrix(A, shape, size)
    r: np.ndarray = _construct_rejection_matrix(v_, rw, shape, size)

    transition_matrix: np.ndarray = np.zeros(shape=shape)

    for i in range(size):
        for j in range(size):
            if i != j:
                transition_matrix[i, j] = rw[i, j] * min(1, r[i, j])
        # after defining all p[i, j] we can safely defined p[i, i], i.e.: define p[i, j] when i = j
        transition_matrix[i, i] = _mh_summation(rw, r, i)

    return transition_matrix.transpose() if column_major_out else transition_matrix
    # endregion


# region optimization
def optimal_mh_transition_matrix(A: np.ndarray, v_: np.ndarray) -> np.ndarray:
    """
    Constructs a transition matrix using metropolis-hastings.
    :param np.ndarray A: Symmetric stochastic adjency matrix previously optimized for the uniform distribution vector.
    :param np.ndarray v_: a stochastic desired distribution vector
    :returns np.ndarray T: Transition Markov Matrix for the desired, possibly non-uniform, distribution vector ddv.
    """
    return mh_transition_matrix(A, v_)


def adjency_matrix_sdp_optimization(A: np.ndarray) -> Tuple[float, np.ndarray]:
    """
    Constructs an optimized adjacency matrix
    :param List[List[int]] A: any symmetric adjacency matrix. Matrix a should have no transient states/absorbent nodes, but this is not enforced or verified.
    :returns  List[List[int]] adj_matrix_optimized: an optimized adjacency matrix for the uniform distribution vector u, whose entries have value 1/n, where n is shape of a.
    """
    # Allocate python variables
    n: int = A.shape[0]
    ones_vector: np.ndarray = np.ones(n)  # np.ones((3,1)) shape is (3, 1)... whereas np.ones(n) shape is (3,), the latter is closer to cvxpy representation of vector
    ones_matrix: np.ndarray = np.ones((n, n))
    zeros_matrix: np.ndarray = np.zeros((n, n))
    U: np.ndarray = np.ones((n, n)) / n

    # Specificy problem variables
    Aopt: cvx.Variable = cvx.Variable((n, n), symmetric=True)
    t: cvx.Variable = cvx.Variable()
    I: np.ndarray = np.identity(n)

    # Create constraints - Python @ is Matrix Multiplication (MatLab equivalent is *), # Python * is Element-Wise Multiplication (MatLab equivalent is .*)
    constraints = [
        Aopt >= 0,  # Aopt entries must be non-negative
        (Aopt @ ones_vector) == ones_vector,  # Aopt lines are stochastics, thus all entries in a line sum to one and are necessarely smaller than one
        cvx.multiply(Aopt, ones_matrix - A) == zeros_matrix,  # optimized matrix has no new connections. It may have less than original adjencency matrix
        (Aopt - U) >> (-t * I),  # eigenvalue lower bound, cvxpy does not accept chained constraints, e.g.: 0 <= x <= 1
        (Aopt - U) << (t * I)  # eigenvalue upper bound
    ]

    # Formulate and Solve Problem
    objective = cvx.Minimize(t)
    problem = cvx.Problem(objective, constraints)
    problem.solve(solver=cvx.MOSEK)

    return problem.value, Aopt.value
# endregion


# region helpers
def _construct_random_walk_matrix(adj_matrix: np.ndarray, shape: Tuple[int, int], size: int) -> np.ndarray:
    """
    Constructs a random walk over the adjacency matrix
    :param np.ndarray adj_matrix: any adjacency matrix
    :param Tuple[int, int] shape: size of adj_matrix #(lines, columns)
    :param int size: the number of lines/columns matrix has. These should match the tuple values.
    :returns np.ndarray rw: a random_walk over the adjacency matrix with uniform distribution
    """
    rw: np.ndarray = np.zeros(shape=shape)
    for i in range(size):
        degree: np.int32 = np.sum(adj_matrix[i, :])  # all possible states reachable from state i, including self
        for j in range(size):
            rw[i, j] = adj_matrix[i, j] / degree
    return rw


def _construct_rejection_matrix(ddv: np.array, rw: np.ndarray, shape: Tuple[int, int], size: int) -> np.ndarray:
    """
    Constructs a rejection matrix for the random walk
    :param np.ndarray ddv: a stochastic desired distribution vector
    :param np.ndarray rw: a random_walk over an adjacency matrix
    :param Tuple[int, int] shape: size of adj_matrix #(lines, columns)
    :param int size: #lines or #columns, for effeciency
    :returns np.ndarray r: a matrix containing acceptance/rejectance probabilities for the random walk
    """
    r = np.zeros(shape=shape)
    with np.errstate(divide='ignore', invalid='ignore'):
        for i in range(size):
            for j in range(size):
                r[i, j] = (ddv[j] * rw[j, i]) / (ddv[i] * rw[i, j])
    return r


def _mh_summation(rw: np.ndarray, r: np.ndarray, i: int) -> np.int32:
    """
    Performs summation of the m-h branch when indices of m[i, j] are the same, i.e.: when i=j
    :param np.ndarray rw: a random_walk over an adjacency matrix
    :param np.ndarray r: a matrix containing acceptance/rejectance probabilities for the random walk
    :param int i: a fixed row index to simulate a simulation function
    :returns float: pii, the probability of going from state i to j, where i = j
    """
    size: int = rw.shape[0]
    pii: np.int32 = rw[i, i]
    print("pii: {}".format(rw[i, i]))
    for k in range(size):
        pii += rw[i, k] * (1 - min(1, r[i, k]))
    return pii
# endregion
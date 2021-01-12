Search.setIndex({docnames:["app","app.domain","app.domain.helpers","app.utils","index","indices","notedocs","quickstartdocs","scriptdocs"],envversion:{"sphinx.domains.c":2,"sphinx.domains.changeset":1,"sphinx.domains.citation":1,"sphinx.domains.cpp":3,"sphinx.domains.index":1,"sphinx.domains.javascript":2,"sphinx.domains.math":2,"sphinx.domains.python":2,"sphinx.domains.rst":2,"sphinx.domains.std":1,"sphinx.ext.intersphinx":1,"sphinx.ext.todo":2,"sphinx.ext.viewcode":1,sphinx:56},filenames:["app.rst","app.domain.rst","app.domain.helpers.rst","app.utils.rst","index.rst","indices.rst","notedocs.rst","quickstartdocs.rst","scriptdocs.rst"],objects:{"":{app:[0,0,0,"-"],sample_scenario_fixer:[0,0,0,"-"]},"app.domain":{cluster_groups:[1,0,0,"-"],helpers:[2,0,0,"-"],master_servers:[1,0,0,"-"],network_nodes:[1,0,0,"-"]},"app.domain.cluster_groups":{Cluster:[1,1,1,""],HDFSCluster:[1,1,1,""],NewscastCluster:[1,1,1,""],SGCluster:[1,1,1,""],SGClusterExt:[1,1,1,""],SGClusterPerfect:[1,1,1,""]},"app.domain.cluster_groups.Cluster":{__init__:[1,2,1,""],_get_new_members:[1,2,1,""],_log_evaluation:[1,2,1,""],_members_view:[1,3,1,""],_membership_changed:[1,3,1,""],_recovery_epoch_calls:[1,3,1,""],_recovery_epoch_sum:[1,3,1,""],_set_fail:[1,2,1,""],_setup_epoch:[1,2,1,""],complain:[1,2,1,""],corruption_chances:[1,3,1,""],critical_size:[1,3,1,""],current_epoch:[1,3,1,""],evaluate:[1,2,1,""],execute_epoch:[1,2,1,""],file:[1,3,1,""],get_cluster_status:[1,2,1,""],get_node:[1,2,1,""],id:[1,3,1,""],maintain:[1,2,1,""],master:[1,3,1,""],members:[1,3,1,""],membership_maintenance:[1,2,1,""],nodes_execute:[1,2,1,""],original_size:[1,3,1,""],redundant_size:[1,3,1,""],route_part:[1,2,1,""],running:[1,3,1,""],set_replication_epoch:[1,2,1,""],spread_files:[1,2,1,""],sufficient_size:[1,3,1,""]},"app.domain.cluster_groups.HDFSCluster":{__init__:[1,2,1,""],data_node_heartbeats:[1,3,1,""],evaluate:[1,2,1,""],maintain:[1,2,1,""],membership_maintenance:[1,2,1,""],nodes_execute:[1,2,1,""],suspicious_nodes:[1,3,1,""]},"app.domain.cluster_groups.NewscastCluster":{__init__:[1,2,1,""],_setup_epoch:[1,2,1,""],evaluate:[1,2,1,""],execute_epoch:[1,2,1,""],log_aggregation:[1,2,1,""],nodes_execute:[1,2,1,""],spread_files:[1,2,1,""],wire_k_out:[1,2,1,""]},"app.domain.cluster_groups.SGCluster":{__init__:[1,2,1,""],_log_evaluation:[1,2,1,""],_normalize_avg_:[1,2,1,""],_pretty_print_eq_distr_table:[1,2,1,""],_timer:[1,3,1,""],_validate_transition_matrix:[1,2,1,""],add_cloud_reference:[1,2,1,""],avg_:[1,3,1,""],broadcast_transition_matrix:[1,2,1,""],create_and_bcast_new_transition_matrix:[1,2,1,""],cv_:[1,3,1,""],equal_distributions:[1,2,1,""],evaluate:[1,2,1,""],execute_epoch:[1,2,1,""],maintain:[1,2,1,""],membership_maintenance:[1,2,1,""],new_desired_distribution:[1,2,1,""],new_transition_matrix:[1,2,1,""],nodes_execute:[1,2,1,""],remove_cloud_reference:[1,2,1,""],select_fastest_topology:[1,2,1,""],spread_files:[1,2,1,""],v_:[1,3,1,""]},"app.domain.cluster_groups.SGClusterExt":{__init__:[1,2,1,""],_epoch_complaints:[1,3,1,""],complain:[1,2,1,""],complaint_threshold:[1,3,1,""],execute_epoch:[1,2,1,""],maintain:[1,2,1,""],nodes_complaints:[1,3,1,""],nodes_execute:[1,2,1,""],suspicious_nodes:[1,3,1,""]},"app.domain.cluster_groups.SGClusterPerfect":{__init__:[1,2,1,""],execute_epoch:[1,2,1,""],new_transition_matrix:[1,2,1,""],nodes_execute:[1,2,1,""],select_fastest_topology:[1,2,1,""]},"app.domain.helpers":{enums:[2,0,0,"-"],exceptions:[2,0,0,"-"],matlab_utils:[2,0,0,"-"],matrices:[2,0,0,"-"],smart_dataclasses:[2,0,0,"-"]},"app.domain.helpers.enums":{HttpCodes:[2,1,1,""],Status:[2,1,1,""]},"app.domain.helpers.enums.HttpCodes":{BAD_REQUEST:[2,3,1,""],DUMMY:[2,3,1,""],NOT_ACCEPTABLE:[2,3,1,""],NOT_FOUND:[2,3,1,""],OK:[2,3,1,""],SERVER_DOWN:[2,3,1,""],TIME_OUT:[2,3,1,""]},"app.domain.helpers.enums.Status":{OFFLINE:[2,3,1,""],ONLINE:[2,3,1,""],SUSPECT:[2,3,1,""]},"app.domain.helpers.exceptions":{DistributionShapeError:[2,4,1,""],IllegalArgumentError:[2,4,1,""],MatrixError:[2,4,1,""],MatrixNotSquareError:[2,4,1,""]},"app.domain.helpers.exceptions.DistributionShapeError":{__init__:[2,2,1,""]},"app.domain.helpers.exceptions.IllegalArgumentError":{__init__:[2,2,1,""]},"app.domain.helpers.exceptions.MatrixError":{__init__:[2,2,1,""]},"app.domain.helpers.exceptions.MatrixNotSquareError":{__init__:[2,2,1,""]},"app.domain.helpers.matlab_utils":{MatlabEngineContainer:[2,1,1,""]},"app.domain.helpers.matlab_utils.MatlabEngineContainer":{_LOCK:[2,3,1,""],__init__:[2,2,1,""],_instance:[2,3,1,""],eng:[2,3,1,""],get_instance:[2,2,1,""],matrix_global_opt:[2,2,1,""]},"app.domain.helpers.matrices":{_adjency_matrix_sdp_optimization:[2,5,1,""],_construct_random_walk_matrix:[2,5,1,""],_construct_rejection_matrix:[2,5,1,""],_get_diagonal_entry_probability_v1:[2,5,1,""],_get_diagonal_entry_probability_v2:[2,5,1,""],_metropolis_hastings:[2,5,1,""],get_mixing_rate:[2,5,1,""],is_connected:[2,5,1,""],is_symmetric:[2,5,1,""],make_connected:[2,5,1,""],new_go_transition_matrix:[2,5,1,""],new_mgo_transition_matrix:[2,5,1,""],new_mh_transition_matrix:[2,5,1,""],new_sdp_mh_transition_matrix:[2,5,1,""],new_symmetric_connected_matrix:[2,5,1,""],new_symmetric_matrix:[2,5,1,""],new_vector:[2,5,1,""]},"app.domain.helpers.smart_dataclasses":{FileBlockData:[2,1,1,""],FileData:[2,1,1,""],LoggingData:[2,1,1,""]},"app.domain.helpers.smart_dataclasses.FileBlockData":{__init__:[2,2,1,""],__str__:[2,2,1,""],can_replicate:[2,2,1,""],cluster_id:[2,3,1,""],data:[2,3,1,""],decrement_and_get_references:[2,2,1,""],id:[2,3,1,""],name:[2,3,1,""],number:[2,3,1,""],references:[2,3,1,""],replication_epoch:[2,3,1,""],set_replication_epoch:[2,2,1,""],sha256:[2,3,1,""],update_epochs_to_recover:[2,2,1,""]},"app.domain.helpers.smart_dataclasses.FileData":{__init__:[2,2,1,""],existing_replicas:[2,3,1,""],fclose:[2,2,1,""],fwrite:[2,2,1,""],jwrite:[2,2,1,""],logger:[2,3,1,""],name:[2,3,1,""],out_file:[2,3,1,""]},"app.domain.helpers.smart_dataclasses.LoggingData":{__init__:[2,2,1,""],_recursive_len:[2,2,1,""],blocks_corrupted:[2,3,1,""],blocks_existing:[2,3,1,""],blocks_lost:[2,3,1,""],blocks_moved:[2,3,1,""],cluster_size_am:[2,3,1,""],cluster_size_bm:[2,3,1,""],cluster_status_am:[2,3,1,""],cluster_status_bm:[2,3,1,""],convergence_set:[2,3,1,""],convergence_sets:[2,3,1,""],cswc:[2,3,1,""],delay_replication:[2,3,1,""],delay_suspects_detection:[2,3,1,""],initial_spread:[2,3,1,""],largest_convergence_window:[2,3,1,""],log_bandwidth_units:[2,2,1,""],log_corrupted_file_blocks:[2,2,1,""],log_existing_file_blocks:[2,2,1,""],log_fail:[2,2,1,""],log_lost_file_blocks:[2,2,1,""],log_lost_messages:[2,2,1,""],log_maintenance:[2,2,1,""],log_matrices_degrees:[2,2,1,""],log_off_nodes:[2,2,1,""],log_replication_delay:[2,2,1,""],log_suspicous_node_detection_delay:[2,2,1,""],log_topology_goal_performance:[2,2,1,""],matrices_nodes_degrees:[2,3,1,""],off_node_count:[2,3,1,""],register_convergence:[2,2,1,""],save_sets_and_reset:[2,2,1,""],successfull:[2,3,1,""],terminated:[2,3,1,""],terminated_messages:[2,3,1,""],topologies_goal_achieved:[2,3,1,""],topologies_goal_distance:[2,3,1,""],transmissions_failed:[2,3,1,""]},"app.domain.master_servers":{HDFSMaster:[1,1,1,""],Master:[1,1,1,""],NewscastMaster:[1,1,1,""],SGMaster:[1,1,1,""],_PersistentingDict:[1,6,1,""]},"app.domain.master_servers.HDFSMaster":{_process_simfile:[1,2,1,""]},"app.domain.master_servers.Master":{MAX_EPOCHS:[1,3,1,""],MAX_EPOCHS_PLUS_ONE:[1,3,1,""],__init__:[1,2,1,""],_create_network_nodes:[1,2,1,""],_new_cluster_group:[1,2,1,""],_new_network_node:[1,2,1,""],_process_simfile:[1,2,1,""],_split_files:[1,2,1,""],cluster_groups:[1,3,1,""],epoch:[1,3,1,""],execute_simulation:[1,2,1,""],find_online_nodes:[1,2,1,""],network_nodes:[1,3,1,""],origin:[1,3,1,""],sid:[1,3,1,""]},"app.domain.master_servers.NewscastMaster":{__init__:[1,2,1,""],_process_simfile:[1,2,1,""]},"app.domain.master_servers.SGMaster":{get_cloud_reference:[1,2,1,""]},"app.domain.network_nodes":{HDFSNode:[1,1,1,""],NewscastNode:[1,1,1,""],Node:[1,1,1,""],SGNode:[1,1,1,""],SGNodeExt:[1,1,1,""],_NetworkView:[1,6,1,""]},"app.domain.network_nodes.HDFSNode":{execute_epoch:[1,2,1,""],replicate_part:[1,2,1,""],update_status:[1,2,1,""]},"app.domain.network_nodes.NewscastNode":{__init__:[1,2,1,""],_merge:[1,2,1,""],_select_view:[1,2,1,""],add_neighbor:[1,2,1,""],aggregate:[1,2,1,""],aggregation_value:[1,3,1,""],execute_epoch:[1,2,1,""],get_degree:[1,2,1,""],get_node:[1,2,1,""],replicate_part:[1,2,1,""],shuffle:[1,2,1,""],shuffle_request:[1,2,1,""],update_status:[1,2,1,""],view:[1,3,1,""]},"app.domain.network_nodes.Node":{__init__:[1,2,1,""],discard_part:[1,2,1,""],execute_epoch:[1,2,1,""],files:[1,3,1,""],get_file_parts:[1,2,1,""],get_file_parts_count:[1,2,1,""],id:[1,3,1,""],is_suspect:[1,2,1,""],is_up:[1,2,1,""],receive_part:[1,2,1,""],replicate_part:[1,2,1,""],send_part:[1,2,1,""],status:[1,3,1,""],suspicious_replies:[1,3,1,""],update_status:[1,2,1,""],uptime:[1,3,1,""]},"app.domain.network_nodes.SGNode":{__init__:[1,2,1,""],clusters:[1,3,1,""],execute_epoch:[1,2,1,""],remove_file_routing:[1,2,1,""],replicate_part:[1,2,1,""],routing_table:[1,3,1,""],select_destination:[1,2,1,""],set_file_routing:[1,2,1,""]},"app.domain.network_nodes.SGNodeExt":{update_status:[1,2,1,""]},"app.environment_settings":{ATOL:[0,6,1,""],BLOCKS_COUNT:[0,6,1,""],BLOCKS_SIZE:[0,6,1,""],DEBUG:[0,6,1,""],DELIVER_CHANCE:[0,6,1,""],LOSS_CHANCE:[0,6,1,""],MATLAB_DIR:[0,6,1,""],MAX_REPLICATION_DELAY:[0,6,1,""],MIN_CONVERGENCE_THRESHOLD:[0,6,1,""],MIN_REPLICATION_DELAY:[0,6,1,""],MONTH_EPOCHS:[0,6,1,""],NEWSCAST_CACHE_SIZE:[0,6,1,""],OUTFILE_ROOT:[0,6,1,""],REPLICATION_LEVEL:[0,6,1,""],RESOURCES_ROOT:[0,6,1,""],RTOL:[0,6,1,""],SHARED_ROOT:[0,6,1,""],SIMULATION_ROOT:[0,6,1,""],get_disk_error_chances:[0,5,1,""],set_blocks_count:[0,5,1,""],set_blocks_size:[0,5,1,""],set_loss_chance:[0,5,1,""],set_replication_level:[0,5,1,""]},"app.hive_simulation":{__makedirs__:[0,5,1,""],_parallel_main:[0,5,1,""],_simulate:[0,5,1,""],_single_main:[0,5,1,""],_validate_simfile:[0,5,1,""],get_next_scenario:[0,5,1,""]},"app.mixing_rate_sampler":{_ResultsDict:[0,6,1,""],_SizeResultsDict:[0,6,1,""],main:[0,5,1,""]},"app.simfile_generator":{_in_yes_no:[0,5,1,""],_init_nodes_uptime:[0,5,1,""],_init_persisting_dict:[0,5,1,""],_input_bounded_float:[0,5,1,""],_input_bounded_integer:[0,5,1,""],_input_character_option:[0,5,1,""],_input_filename:[0,5,1,""],yield_label:[0,5,1,""]},"app.type_hints":{ClusterDict:[0,6,1,""],ClusterType:[0,6,1,""],HttpResponse:[0,6,1,""],MasterType:[0,6,1,""],NodeDict:[0,6,1,""],NodeType:[0,6,1,""],ReplicasDict:[0,6,1,""]},"app.utils":{convertions:[3,0,0,"-"],crypto:[3,0,0,"-"],randoms:[3,0,0,"-"]},"app.utils.convertions":{base64_bytelike_obj_to_bytes:[3,5,1,""],base64_string_to_bytes:[3,5,1,""],bytes_to_base64_string:[3,5,1,""],bytes_to_utf8string:[3,5,1,""],class_name_to_obj:[3,5,1,""],json_string_to_obj:[3,5,1,""],obj_to_json_string:[3,5,1,""],str_copy:[3,5,1,""],truncate_float_value:[3,5,1,""],utf8string_to_bytes:[3,5,1,""]},"app.utils.crypto":{sha256:[3,5,1,""]},"app.utils.randoms":{excluding_randrange:[3,5,1,""],random_index:[3,5,1,""]},app:{domain:[1,0,0,"-"],environment_settings:[0,0,0,"-"],hive_simulation:[0,0,0,"-"],mixing_rate_sampler:[0,0,0,"-"],sample_scenario_generator:[0,0,0,"-"],simfile_generator:[0,0,0,"-"],type_hints:[0,0,0,"-"],utils:[3,0,0,"-"]},sample_scenario_fixer:{__select_fastest_topology__:[0,5,1,""],__validate_mc__:[0,5,1,""]}},objnames:{"0":["py","module","Python module"],"1":["py","class","Python class"],"2":["py","method","Python method"],"3":["py","attribute","Python attribute"],"4":["py","exception","Python exception"],"5":["py","function","Python function"],"6":["py","data","Python data"]},objtypes:{"0":"py:module","1":"py:class","2":"py:method","3":"py:attribute","4":"py:exception","5":"py:function","6":"py:data"},terms:{"00920":4,"03869":[],"100":0,"1000":0,"10000000":0,"1007":[],"1048576":0,"1048576b":0,"128kb":0,"128mb":1,"12s":2,"131072":[],"131072b":0,"16384":[],"1801p":4,"1mb":[0,1],"200":2,"2019":4,"20971520b":0,"20mb":0,"21600":0,"256":[],"32768b":0,"32kb":0,"333":[],"360":8,"377":7,"3_50":[],"3rd":1,"400":2,"404":2,"406":2,"408":2,"4096":1,"480":8,"50009":4,"512kb":0,"521":2,"524288b":0,"642":[],"720":7,"978":[],"abstract":1,"boolean":2,"byte":[0,1,2,3],"case":2,"class":[0,1,2,3,8],"const":[],"default":[0,1,2,7,8],"enum":1,"final":1,"float":[0,1,2,3],"function":[0,1,2,3,7,8],"import":[1,2,3],"int":[0,1,2,3,8],"long":[6,8],"new":[1,2],"return":[0,1,2,3],"short":[1,8],"static":[0,2],"switch":[],"t\u00f6lgyesi":1,"transient":2,"true":[0,1,2],"try":[],"void":8,"while":[0,1],DFS:4,For:[0,1,7],GFS:1,IDE:7,IDEs:7,One:2,SCS:2,Such:0,The:[0,1,2,3,4,7,8],Their:[],There:[0,1],These:[0,1],Use:[1,2],Used:[0,1,2],Uses:3,With:0,__assign_disk_error_chance__:[],__can_exec_simfile__:[],__create_network_nodes__:[],__eq__:[],__get_diagonal_entry_prob:[],__get_diagonal_entry_probability_v2:[],__hash__:[],__init__:[1,2],__log_evaluation__:[],__makedirs__:0,__ne__:[],__new_cluster_group__:[],__new_network_node__:[],__process_simfile__:[],__select_fastest_topology__:0,__split_fil:[],__split_files__:[],__start_simulation__:[],__str__:2,__validate_mc__:0,_adjency_matrix_sdp_optim:2,_assign_disk_error_ch:[],_construct_random_walk_matrix:2,_construct_rejection_matrix:2,_create_network_nod:1,_epoch_complaint:1,_get_diagonal_entry_prob:[],_get_diagonal_entry_probability_v1:2,_get_diagonal_entry_probability_v2:2,_get_new_memb:1,_in_yes_no:0,_init_nodes_uptim:0,_init_persisting_dict:0,_input_bounded_float:0,_input_bounded_integ:0,_input_character_opt:0,_input_filenam:0,_instanc:2,_lock:2,_log_evalu:1,_members_view:1,_membership_chang:1,_membership_mainten:[],_merg:1,_metropolis_hast:2,_networkview:1,_new_cluster_group:1,_new_network_nod:1,_normalize_avg_:1,_parallel_main:0,_persistentingdict:1,_pretty_print_eq_distr_t:1,_process_simfil:1,_recovery_epoch_cal:1,_recovery_epoch_sum:1,_recursive_len:2,_resultsdict:0,_select_view:1,_set_fail:1,_setup_epoch:1,_simul:0,_single_main:0,_sizeresultsdict:0,_split_fil:1,_start_simul:[],_thread:2,_timer:1,_validate_simfil:0,_validate_transition_matrix:1,a_func:8,a_simulation_nam:0,about:1,abs:[],abs_toler:[],absolut:[0,1],absorb:2,accept:[0,1,2],access:[0,1,2,4],accord:1,accordingli:[0,7],accur:2,achiev:[1,2],achieved_go:2,acknowledg:2,acm:[],acquaint:1,across:[],act:[],action:[0,7],activ:1,actual:[0,1,2],adapt:4,adapta:1,add:[1,2],add_cloud_refer:1,add_neighbor:1,added:1,addit:[0,1,2],address:1,adjac:[1,2,8],adjenc:2,affect:1,affili:4,after:[0,1,2,7],afunc:0,again:3,against:1,age:1,aggreg:1,aggregation_valu:1,algorith:2,algorithm:[0,1,2,3,4],aliv:1,all:[0,1,2,8],allclos:1,allow:[1,2,4,6],allow_self_loop:2,allow_sloop:[2,8],along:[0,1,7],alreadi:[1,2],also:[0,1,2,7],alter:0,altern:[2,8],alwai:[1,2],amazon:1,among:[0,1,2,7],amount:[0,1,2,6],analysi:0,ancestor:[],ani:[0,1,2,3,6,7],anoth:[1,2],another_func:8,anotherfunc:0,answer:1,anyth:3,apach:[],api:7,app:[7,8],appear:[0,7],append:2,appli:[],applic:1,applicat:[],approach:1,appropri:1,approxim:[1,2],arbrirari:0,arg:[3,8],argument:[0,1,3,8],arrai:[],ask:0,assert:[0,1],assign:[1,2],assum:[0,1,2,3],assumpt:2,assur:1,assynchron:[],atol:[0,1],attempt:[1,2],attr:[0,1],attribut:[0,1,2],attributeerror:[3,7],authent:[1,3],automat:2,avail:[0,1,4,7,8],averag:[1,2],average_network_degre:[],averagefunct:1,avg_:1,avoid:[1,2],await:[],awar:[],back:2,backup:[1,4],bad:1,bad_request:[1,2],bank:1,base64:[2,3],base64_bytelike_obj_to_byt:3,base64_string_to_byt:3,base:[0,1,2,4],basi:[0,4],basic:1,batch:[],beat:1,becaus:[1,2,7],becom:1,been:[1,2],befor:[0,1,2,3,7],beggin:[1,2],behav:1,behavior:[0,1],behaviour:[1,2],being:[0,1,2],belong:[1,2,3],below:7,best:4,between:[0,1,2],bia:1,bianca:[],bidirect:2,big:1,bigger:[0,1,2,3],blacklist:1,blank:[0,8],block:[0,1,2],blocks_corrupt:2,blocks_count:0,blocks_exist:2,blocks_lost:2,blocks_mov:2,blocks_siz:0,bmibnb:[2,7],bodi:1,bool:[0,1,2],born:4,both:[0,1,7],broadcast:1,broadcast_transition_matrix:1,bsize:1,build:2,builtin:[2,3],bundl:7,bytes_to_base64_str:3,bytes_to_utf8str:3,bytesrepresent:[],cach:1,calcul:[1,2,3],calculat:2,call:[0,1,2],calle:2,caller:2,can:[0,1,2,3,6,7,8],can_repl:2,candid:1,cannot:1,captur:2,care:1,carri:[1,2],cast:1,caus:3,ceas:2,central:1,chain:0,chanc:[0,1],chang:[0,1,2],channel:3,charact:[0,2],check:[0,1,2,7],checksum:0,child:[],children:1,choos:7,chunk:1,clarif:2,class_nam:3,class_name_to_obj:3,clear:2,client:1,clock:1,clone:7,close:[0,1,2],closest:1,cloud:1,cluster:[0,1,2],cluster_class:1,cluster_group:[0,2,8],cluster_id:2,cluster_size_am:2,cluster_size_bm:2,cluster_status_am:2,cluster_status_bm:2,clusterdict:[0,1],clustertyp:[0,1],code:[0,1,2,3,6,7],collabor:1,collect:1,column:[1,2],column_major_out:2,com:7,combin:1,come:7,comma:8,command:[0,1,7],commonli:1,commun:3,compar:0,comparison:[0,1,2],compat:7,complain:1,complaine:1,complaint:1,complaint_threshold:1,complainte:1,complet:[1,6,7],complex:2,compon:2,comprehens:[],compromis:1,comput:[1,4],concaten:[1,2],conceal:0,concern:[1,2,7],condit:[1,7],confidenti:3,configur:[0,1],conflict:2,connect:[0,1,2],consecut:[0,2],consensu:[1,2],consequ:[0,2],consid:[0,1,2],consider:3,consist:[1,4],constant:0,constraint:7,construct:2,constructor:2,consum:[],contabil:1,contact:1,contain:[0,1,2],content:[1,2],control:[2,4],controversi:2,converg:[0,1,2],convergence_set:[0,2],convert:2,convex:[0,2,7],coordin:1,copi:[2,3],core:0,correct:1,correspond:[0,1],corrupt:[0,1,2],corruption_ch:1,could:[1,2],count:[1,2],counter:2,courier:[],cpu:6,creat:[0,1,2,7,8],create_and_bcast_new_transition_matrix:1,creation:2,critical_s:1,crop:1,cswc:2,current:[0,1,2,3,6],current_epoch:1,custom:0,cv_:[0,1],cvxgrp:[],cvxpy:[2,7],cycl:4,cyclic:3,data:[0,1,2,3],data_node_heartbeat:1,datafram:[0,1,2],date:[1,2],deal:7,debug:0,decid:[1,2],decim:[2,3],decreas:[1,2],decrement:2,decrement_and_get_refer:2,deep:3,deepcopi:3,defin:[0,1,2,3],definit:[2,7],degre:[1,2],delai:2,delay_repl:2,delay_suspects_detect:2,deleg:1,delet:[0,1],delimit:2,deliv:[0,1,2],deliver_ch:0,deliveri:1,demonstr:[0,7],denot:0,densiti:[1,2],depend:[1,2,7],descend:1,descret:[],describ:[0,2],descript:8,descriptor:1,deseri:3,design:1,desir:[0,1,2,7,8],destin:[0,1],detail:[1,7],detect:[1,2],detector:2,determin:1,develop:[0,4,7],deviat:0,dfs:1,diagon:[2,8],dict:[0,1,2],dictat:1,dictionari:[0,1,2],did:1,die:1,differ:[0,1,2,3,6],differenti:2,digest:[2,3],dimens:2,dimension:2,direct:[1,2],directli:2,directori:[0,8],discard:1,discard_part:1,disconnect:[1,2],discret:[0,1,8],disk:[0,1,2],displai:0,dissert:[1,4],dist:[],distanc:2,distance_magnitud:2,distribut:[0,1,2],distributionshapeerror:2,divid:[0,1],doc:[0,7],document:2,doe:[0,1,2,3],doi:[],domain:[0,3,8],dommain:1,don:0,done:[1,2],down:1,download:7,dsor:4,due:[0,1,2,4,6,7],dummi:2,durabl:[0,1],dure:[0,1,2,4,7],eaasier:[],each:[0,1,2,6,8],earli:1,earlier:1,easi:4,easier:7,edg:[1,2],edu:[],eea:4,effect:[1,2],effici:1,effort:1,eigenvalu:2,either:[0,7],eldest:1,element:[0,1,2,3],elimin:1,els:[1,2],empti:[1,2],emul:0,encapsul:2,encod:[1,2,3],end:[1,2],endpoint:1,enforc:2,enforce_loop:2,enforce_sloop:8,eng:2,engin:[2,4,7],engineerror:2,enough:1,ensur:[0,1],enter:[],entir:[1,2],entiti:1,entrant:2,entri:[0,1,2,8],enumer:2,envelop:2,environ:[0,1,2,7],environment_set:1,epoch:[0,1,2,7,8],equal:[0,1,2,3],equal_distribut:[0,1,2],equalil:1,equat:[],equilibrium:0,equival:[3,7],erasur:1,error:[0,1,2,3,7,8],essenti:[0,2],evalu:1,even:[],event:2,eventu:1,everi:[1,2],evict:[1,2],exactli:1,exampl:[0,1,2,3,7,8],except:[0,1],excess:1,exchang:1,exclud:0,excluding_randrang:3,exclusion_dict:[],execut:[0,1,2,8],execute_epoch:1,execute_simul:1,exist:[0,1,2,3,6],existing_replica:2,expect:[0,1,2,3],explain:7,explan:1,explicitli:[],express:2,extend:1,extens:[0,1,8],facilit:[1,4],fail:[0,1,2],failur:[0,2],fals:[0,1,2,8],fast08:[],fast:[2,6],faster:[1,2,7],fastest:[0,1],fault:2,faulti:1,favor:7,fbz_0134:0,fclose:2,few:[4,7],fid:1,field:[0,4],figur:2,file:[0,1,2,6,7,8],file_nam:1,fileblockdata:[0,1,2],filedata:[1,2],filenam:0,fill:[1,2],find:1,find_online_nod:1,find_replacement_nod:[],first:[0,1,2,8],five:1,fix:[0,1],flag:[0,1,7],float64:2,fname:1,focu:6,fold:1,folder:[0,1,7,8],follow:[0,1,2,7,8],forc:[1,8],force_sloop:2,form:[1,2,4],format:[1,3],former:1,formula:[0,1],forward:2,found:2,frame:0,franciscokloganb:7,free:7,fresh:1,fresh_replica:[],from:[0,1,2,3,7],full:1,fulli:[3,6],func:[],further:7,furthermor:[],futur:2,fwrite:2,gatewai:[],gener:[0,1,2,3,4,8],get:[0,1,2,3],get_cloud_refer:1,get_cluster_statu:1,get_degre:1,get_disk_error_ch:[0,1],get_epoch_statu:[],get_file_part:1,get_file_parts_count:1,get_inst:2,get_mixing_r:2,get_next_scenario:0,get_nod:1,get_random_member_nod:[],get_random_nod:[],get_statu:[],getinst:[],github:[0,7],give:1,given:[0,1,2,3,8],global:[2,7],goal:2,going:[1,2],gossip:1,grant:4,graph:2,group:[0,1,2],gsd:[],guarante:[1,2,7],guid:7,guidanc:[0,1,3,4],had:7,hadoop:1,hand:7,hard:3,has:[0,1,2],hash:[2,3],hashvalu:[1,3],hast:[0,2],have:[0,1,2,3,7,8],hdf:1,hdfscluster:[0,1],hdfsmaster:[0,1],hdfsnode:[0,1],health:[1,2],heartbeat:1,held:1,help:[2,7],helper:[0,1,8],henc:1,here:3,heurist:0,higher:7,highest:2,him:[],himself:1,his:[1,2],hive:[0,1,7],hive_id:[],hive_simul:[2,7,8],hiveclust:[],hiveclusterext:[],hiveclusterperfect:[],hivemast:[],hivenod:[],hivenodeext:[],hold:[0,2],host:1,hould:2,how:[0,1,2,8],howev:1,html:7,http:[1,2,7],httpcode:[0,1,2],httprespons:[0,1],idea:1,ideal:[1,6],identifi:[0,1,2,8],ignor:[1,8],illegalargumenterror:2,illustr:0,implement:[0,1,2,3,4,7],importerror:3,improv:6,includ:[0,1,2,3,7,8],increas:[],increment:2,independ:1,index:[1,2,3,5],indic:[0,1,2,8],individu:6,inesc:[],inf:2,infeas:2,infer:[],infin:2,infinit:1,inform:[0,1,2],inherit:2,initi:[0,1,2],initial_spread:2,input:[0,2,3,8],insert:[2,7],insid:[0,1,2,8],inspect:[2,7],instanc:[0,1,2],instanci:[2,3],instantan:1,instanti:[1,2],instead:[0,1,2],institut:4,instruct:[0,1,7],integ:[0,1],integr:[1,2,3],intent:1,interest:1,interfac:[1,7],interv:[0,3],invalid:[0,1,7],invoc:[],invok:[1,2,7],is_connect:2,is_fresh:1,is_suspect:1,is_symmetr:2,is_up:1,islic:0,isol:[],isr:4,issu:[1,7],ist:4,item:[0,2],iter:[0,1,3,7,8],itertool:0,its:2,itself:[],java:4,jelas:1,jetbrain:7,jneto:[],job:1,join:1,jpg:3,json:[0,1,2,3,7,8],json_str:3,json_string_to_obj:3,just:1,justif:2,jwrite:2,keep:2,kei:[0,1],kept:[1,2],keya:[],kick:1,kind:1,know:[1,2],known:[1,2,4],label:[0,1],lack:4,languag:4,larg:1,largest:2,largest_convergence_window:2,last:[0,1,8],later:1,latter:[1,7],launch:7,least:[0,1,2],led:[1,2],len:2,length:[1,2],less:[3,6],let:7,level:[1,2],librari:4,licens:2,lies:2,life:1,lifetim:0,like:[0,1,2,3,4,6],limit:1,line:[0,1,2,7],linear:2,link:[0,1,7],list:[0,1,2,3,8],live:1,load:1,local:1,locat:[0,1,2,7,8],lock:2,log:[0,1,2],log_aggreg:1,log_aggregation_cal:[],log_bandwidth_unit:2,log_corrupted_file_block:2,log_existing_file_block:2,log_fail:2,log_lost_file_block:2,log_lost_messag:2,log_mainten:2,log_matrices_degre:2,log_off_nod:2,log_replication_delai:2,log_suspicous_node_detection_delai:2,log_topology_avg_converg:[],log_topology_goal_perform:2,logger:[1,2],loggingdata:[0,1,2],logic:1,loop:[1,2],lose:[0,2],loss:[1,2],loss_chanc:0,lost:[0,1,2],lower_bound:0,lveiga:[],machin:[2,6,7],made:[1,2],magnitud:2,mai:[0,1,2],main:0,maintain:1,mainten:[1,2],major:2,make:[1,2],make_connect:2,manag:[1,2,8],mandatori:8,mani:[0,1,2,6,8],map:[1,2],mark:[0,1,8],markov:[0,1,2,8],master:[0,1,2,3,4],master_serv:[3,8],mastertyp:[0,1],match:[1,2],matlab:[0,2,7],matlab_dir:[0,2],matlab_util:1,matlabengin:[2,7],matlabenginecontain:[0,2,7],matlabscript:2,matric:[0,1,8],matrices_nodes_degre:2,matrix:[0,1,2,3],matrix_global_opt:2,matrixerror:2,matrixglobalopt:2,matrixnotsquareerror:2,max:0,max_epoch:[0,1],max_epochs_plus_on:1,max_replication_delai:0,max_view_s:1,maximum:[0,1],mean:[1,2],mechan:1,member:[1,2],member_id:1,member_uptim:1,memberhip:1,membership:[1,2],membership_mainten:1,mere:[],merg:1,messag:[0,1,2],metadata:[1,2],meth:[],method:[0,1,2,7],metropoli:[0,2],might:[1,2],min:1,min_convergence_threshold:[0,2],min_replication_delai:0,minimum:[0,1],minut:0,miscellan:0,mismatch:0,miss:1,mix:[0,1,2,8],mixing_rate_sampl:8,mixing_rate_sample_root:0,mod:[],mode:2,modif:2,modifi:[0,2],modul:[0,1,2,3,5,7,8],module_nam:3,monitor:[1,2],month:0,month_epoch:0,mopt:2,more:[1,2,6,7],mosek:[2,7],most:[1,2,4],move:2,msc:[0,7],msg:2,multi:[0,6],multipl:[0,1,2,6],multithread:[],must:[0,1,2,3,8],name:[0,1,2,3,8],namenod:1,navig:7,ndarrai:[0,1,2],necessar:1,need:[0,1,2,3,7],nef:0,neg:0,neighbor:0,neighor:[],neto:1,network:[0,1,2,6,8],network_nod:[0,2,8],network_s:[0,8],never:1,new_desired_distribut:1,new_go_transition_matrix:[0,2,8],new_mgo_transition_matrix:[0,2,8],new_mh_transition_matrix:[0,2,8],new_sdp_mh_transition_matrix:[0,2,8],new_symmetric_connected_matrix:2,new_symmetric_matrix:2,new_transition_matrix:1,new_vector:2,newli:[],newscast:1,newscast_cache_s:[0,1],newscastclust:[0,1],newscasterclust:1,newscastmast:[0,1],newscastnod:[0,1],next:[0,2,3],nid:1,node:[0,1,2],node_class:1,node_id:2,node_uptim:1,nodedict:[0,1],nodes_complaint:1,nodes_degre:2,nodes_execut:1,nodetyp:[0,1],non:[0,1,2,3,7],none:[0,1,2,3,8],normal:[1,2],not_accept:[1,2],not_found:2,notat:0,note:[1,3],noth:1,notimplementederror:1,now:[],number:[0,1,2,3,8],number_part:[],numpi:[0,1,2,4],obj:3,obj_to_json_str:3,object:[0,1,2,3],obtain:[0,1,2,3,7],occas:1,occur:[0,1,2],odd:1,off_nod:1,off_node_count:2,offer:[1,4,6],offici:[],offlin:[1,2],onc:2,one:[0,1,2,3,6,8],ones:[2,7],onli:[0,1,2,3],onlin:[1,2],open:[1,7],oper:[1,2],opportun:1,opt:[],optim:[0,1,2,4,7],option:[0,1,2,3,4,7,8],order:[0,1],ordereddict:0,org:7,origin:[1,2],original_s:1,other:[0,1,2,4,7,8],otherwis:[0,1,2,7],our:[0,1,2,4,6,7],out:[0,1,2,4],out_fil:[1,2],outfil:0,outfile_root:0,output:[0,1,2,8],over:[0,2],overal:7,overali:1,overlai:2,overrid:[1,2],overridden:1,overwrit:[1,2],own:[1,2,4],owner:2,p2p:[1,6],packag:7,pair:[0,1],panda:[0,2,4],paper:0,parallel:0,param:[1,2],paramet:[0,1,2,3],parent:1,part:[1,2],parti:1,partial:1,particip:[1,4],particular:1,parts_in_h:[],pass:[1,8],path:[0,1,3],pattern:8,pcount:1,pdf:[],peer:[1,2,4,6],peersim:1,per:[],percentag:1,perfect:2,perform:[0,1,2,6],period:1,perman:2,persist:[0,1,2],phase:1,pictur:0,ping:1,pip:7,place:[0,3],plai:[],plive:1,plu:1,point:[2,3],pointer:1,polut:2,ponder:1,pool:[0,7],posit:[0,2],possess:1,possibl:[0,1,2,6],posss:1,post:2,power:[1,4,7],pptx:0,predefin:[0,1],present:0,press:0,pretti:1,prevent:1,previou:[1,2,7],previous:[0,1],print:[0,1],probabl:[0,1,2],problem:[0,2,7],proce:0,process:[1,2,3,4],program:[2,6,7],project:[0,4,7],prompt:7,proper:1,properli:[0,7],properti:1,proposit:2,protocol:1,prototyp:[0,4],provid:[0,1,2],prune:1,psql:1,ptotal:1,puppet:1,purpos:[1,4,7],pycharm:7,python:[0,2,3,4,7,8],pythonapi:7,qualifi:3,queri:1,quick:7,quickli:4,r2020a:7,rais:[1,2,3,8],ram:2,ran:8,random:[0,1,2,8],random_index:3,random_walk:2,randomli:[1,3],rang:3,rare:1,rate:[0,1,2,8],raw:0,reach:[1,2],read:[0,1,7,8],read_siz:[],readabl:1,readili:4,real:1,realiz:1,reason:[1,6],reat:0,receiv:[1,2],receive_part:1,recent:[1,2,7],recept:1,recommend:[0,1,2,7],record:[0,2],recov:2,recoveri:[1,2],recovery_epoch:2,recruit:1,recus:2,reduc:1,redundant_s:1,refer:[1,2],referenc:[1,2],reflect:[1,3],refus:2,regard:[],regardless:1,regener:0,regist:[1,2],register_converg:2,registr:1,regular:1,reject:[0,2],rel:[0,1],relat:[0,2,3],relax:2,releas:[1,3,7],reliabl:1,remain:1,remot:1,remov:[0,1],remove_cloud_refer:1,remove_file_rout:1,replac:1,repli:[0,1],replic:[1,2],replica:[0,1,2],replicasdict:[0,1],replicate_part:1,replication_epoch:2,replication_level:[0,1],replier:1,repllica:[],report:[1,2],repositori:7,repres:[0,1,2,3,8],represent:[0,1,2,3],request:[0,1,2],requestor:1,requir:[0,1,7,8],research:[4,6,7],reset:[1,2],resil:1,resourc:0,resources_root:0,respect:[0,1,2],respond:7,respons:[1,2],restor:[1,2],result:[0,1,2,4,7],resum:[],retriev:1,retriv:1,retro:7,rlock:2,robot:4,role:[],root:7,round:3,rout:1,route_part:1,routing_t:1,row:[1,2],rtol:[0,1],rule:1,run:[0,1,2,6,7,8],safe:[1,2,7],said:4,same:[1,2],sampl:[0,1,8],save:0,save_sets_and_reset:2,scenario:[0,1,4],scienc:4,scientif:4,scipi:4,script:[0,2,7],scs:[],sdir:[],sdp:2,search:1,section:[7,8],secur:3,see:[0,1,2,7,8],seem:2,select:[0,1,3,7],select_destin:1,select_fastest_topolog:1,self:[1,2],semi:[2,7],semidefinit:2,send:[1,2],send_part:1,sender:1,senders_view:1,sens:1,sent:[1,2],seper:[2,8],sequenc:[0,2,3,7],seri:1,serial:3,server:[1,2],server_down:2,session:7,set:[0,1,2,4,8],set_blocks_count:0,set_blocks_s:0,set_file_rout:1,set_loss_ch:0,set_recovery_epoch:1,set_replication_epoch:[1,2],set_replication_level:0,setup:7,sgcluster:[0,1],sgclusterext:[0,1,8],sgclusterperfect:1,sgmaster:[0,1,8],sgnode:[0,1],sgnodeext:[0,1,8],sha256:[1,2,3],sha:[],shape:2,share:0,shareabl:2,shared_root:[0,1],should:[0,1,2,3,7,8],shuffl:1,shuffle_request:1,sid:[0,1],signatur:2,silent:1,silentri:[],sim_id:[1,2],simdirectori:[],simfil:0,simfile_gener:[7,8],simfile_nam:[0,1],similar:1,similarli:1,simplic:1,simul:[0,1,2,6,7,8],simulation_epoch:0,simulation_root:[0,8],simulationdata:[],simultan:[1,2],simuul:0,sinc:[0,1,2],singl:[0,2],singleton:[2,7],size:[0,1,2,3,8],size_am:2,size_bm:2,size_kei:[],skew:1,skip:7,slice:1,slightli:1,small:[0,1,2],smaller:[0,2],smart_dataclass:[0,1],sname:[],snippet:[0,3],softwar:7,sole:[],solut:1,solv:[0,7],solver:[2,7],some:[0,1,2,3,4,7],somehow:2,sometim:1,sooner:2,sourc:[0,1,2,3,7],space:8,spaceoverhead:1,special:7,specif:[1,2],specifi:[0,1,2,8],speed:6,split:1,sponsorship:4,spread:1,spread_fil:[1,2],squar:2,stabl:7,stack:0,start:[0,1,2,3,7],start_again:3,start_iter:8,state:[0,1,2,8],statement:6,stationari:1,statu:[1,2],status_am:2,status_bm:2,stdtype:[],steadi:[0,1,2,8],step:[0,1,2,3,7,8],still:1,stochast:[1,2,4],stop:[0,3],stop_again:3,storag:[0,1,2],store:[0,1,2,8],str:[0,1,2,3,8],str_copi:3,straight:2,strat:1,strategi:[1,2],stream:[1,2],string:[0,1,2,3,8],strongli:0,studi:[1,4],sub:[1,2],submit:4,subset:1,success:[1,2],successful:2,successfuli:1,successfulli:[1,2],suffer:[],sufficient_s:1,sum:[0,1,2],summat:2,supervis:[],support:[1,7],supress:0,suprress:[],sure:0,surpass:[],surviv:1,suspect:[1,2],suspici:[1,2],suspicion:2,suspicious_nod:1,suspicious_repli:1,swarm:[0,1,3,4],symmetr:[0,2],synchron:[],synthetiz:0,system:[0,1,2,8],tabl:1,tackl:7,take:[0,1,2,6,7],target:[1,2],target_distribut:1,task:[],techniqu:[1,2],temporar:1,termin:[0,1,2,7],terminated_messag:2,test01:7,test:[0,1,3,4,8],than:[0,1,2,3,6],thei:[0,1,2,3],them:1,theoret:1,theori:2,thesi:[0,7],thhe:[],thi:[0,1,2,3,4,6,7,8],thing:[],those:2,thread:[0,2,6,7,8],threadpoolexecutor:0,threads_count:[],three:1,threshold:[],through:[0,1,4,7],throughout:[1,2,4,7],thu:[0,1,2],thumb:1,time:[0,1,2,6,8],time_out:2,time_to_l:1,timer:[],todo:[],togeth:[],tol:2,toler:[0,1,2],took:2,topolog:[0,1,2],topologies_avg_converg:[],topologies_goal_achiev:2,topologies_goal_dist:2,toronto:[],total:0,toward:1,track:[1,2],tranist:[],transit:[1,2,8],transition_matrix:2,transition_vector:1,translat:[1,2],transmiss:2,transmissions_fail:2,transmit:2,transpar:7,tri:2,trigger:1,trulli:2,truncat:3,truncate_float_valu:3,trust:2,trustworthi:3,tupl:[0,2,8],turn:[1,2],two:[0,1,3,7],twofold:[],txt:7,type:[0,1,2,3,8],type_hint:1,typic:7,uid:[1,4],uncaught:0,under:[0,7],understand:2,undocu:0,unfeas:2,unfortun:7,uniform:[1,2],uniformli:[],union:[0,1,2,3],uniqu:[0,1,2],univers:4,unlabel:2,unless:[0,1,2,3,8],unlock:2,until:[1,2],updat:[1,2],update_epochs_to_recov:2,update_statu:1,update_view:[],update_view_respons:[],upload:1,upon:[0,1],upper_bound:0,uptim:[0,1],usag:2,use:[0,1,2,4,7,8],used:[0,1,2,3,4,7],useful:1,user:[0,1,2,4],usernam:[],uses:[0,1,2,7],using:[0,1,2,3,6,7],usual:0,utf8string_to_byt:3,utf:3,util:[0,2,6,7],uuid:[],valid:[0,1,2,3,7],valu:[0,1,2,3,8],valueerror:[1,2],variabl:[0,1,2],variou:[0,3],vector:[0,1,2,8],veri:7,verif:1,verifi:[0,1,2],version:[1,2,4,7],viabl:4,view:[0,1],view_buff:1,virtual:[1,7],visit:[],visual:1,volatil:2,wai:[0,1,2],walk:2,want:1,warn:0,well:[1,2,4],went:1,were:[1,2,7],wether:[1,2],what:[0,1],when:[0,1,2,3,7,8],where:[0,1,2,4,8],wherea:1,whether:2,which:[0,1,2,4,7,8],white_list:0,who:[1,2],whole:[],whose:[0,1,2,8],why:[1,6],wide:4,window:2,wire_k_out:1,wise:[1,2],wish:[0,2],within:[0,1,3],without:[0,1,3,8],won:3,work:[0,1,4,7],worker:1,workflow:7,world:1,would:[0,1,6,7],wourld:[],wrap:[0,2],wrapper:2,write:[1,4],written:[2,4],wrote:4,www:7,xml:[],yalmip:7,yes:0,yet:[0,1,2],yet_another_func:8,yetanotherfunc:0,yield:0,yield_label:0,you:[0,2,3,7],your:[0,2,7],zero:[1,2]},titles:["App Documentation","app.domain","app.domain.helpers","app.utils","Welcome to Hives - A P2P networking and distributed file system simulator","Indices","Notes","Quickstart","Scripts and Flags"],titleterms:{"enum":2,app:[0,1,2,3],cluster_group:1,compon:7,convert:3,crypto:3,disabl:7,distribut:4,document:0,domain:[1,2],environment_set:0,except:2,file:4,flag:8,futur:6,guidanc:[],helper:2,hive:4,hive_simul:0,indic:5,instal:7,licens:7,master_serv:1,matlab_util:2,matric:2,mixing_rate_sampl:0,network:4,network_nod:1,note:6,p2p:4,part:7,quickstart:7,random:3,releas:6,sample_scenario_fix:0,sample_scenario_gener:0,script:8,simfile_gener:0,simul:4,smart_dataclass:2,stochast:[],submodul:[0,1,2,3],subpackag:[0,1],swarm:[],system:4,technolog:7,type_hint:0,usag:7,util:3,welcom:4}})
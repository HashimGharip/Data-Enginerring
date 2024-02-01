/////////////////////////////////////////////////////////////
//
// pgAdmin 4 - PostgreSQL Tools
//
// Copyright (C) 2013 - 2024, The pgAdmin Development Team
// This software is released under the PostgreSQL Licence
//
//////////////////////////////////////////////////////////////

define(
  'pgadmin.browser.endpoints', [],
  function() {
    return {
            'static': '/static/<path:filename>',

      'kerberos.login': '/kerberos/login',

      'kerberos.logout': '/kerberos/logout',

      'kerberos.update_ticket': '/kerberos/update_ticket',

      'kerberos.validate_ticket': '/kerberos/validate_ticket',

      'oauth2.authorize': '/oauth2/authorize',

      'oauth2.logout': '/oauth2/logout',

      'webserver.login': '/webserver/login',

      'webserver.logout': '/webserver/logout',

      'about.index': '/about/',

      'authenticate.login': '/authenticate/login',

      'browser.index': '/browser/',

      'browser.nodes': '/browser/nodes/',

      'browser.check_corrupted_db_file': '/browser/check_corrupted_db_file',

      'browser.check_master_password': '/browser/master_password',

      'browser.set_master_password': '/browser/master_password',

      'browser.reset_master_password': '/browser/master_password',

      'NODE-server.connect_id': '/browser/server/connect/<int:gid>/<int:sid>',

      'NODE-server.connect_id': '/browser/server/connect/<int:gid>/<int:sid>',

      'NODE-server.connect_id': '/browser/server/connect/<int:gid>/<int:sid>',

      'dashboard.index': '/dashboard/',

      'dashboard.get_by_sever_id': '/dashboard/<int:sid>',

      'dashboard.get_by_database_id': '/dashboard/<int:sid>/<int:did>',

      'dashboard.dashboard_stats': '/dashboard/dashboard_stats',

      'dashboard.dashboard_stats_sid': '/dashboard/dashboard_stats/<int:sid>',

      'dashboard.dashboard_stats_did': '/dashboard/dashboard_stats/<int:sid>/<int:did>',

      'dashboard.activity': '/dashboard/activity/',

      'dashboard.get_activity_by_server_id': '/dashboard/activity/<int:sid>',

      'dashboard.get_activity_by_database_id': '/dashboard/activity/<int:sid>/<int:did>',

      'dashboard.locks': '/dashboard/locks/',

      'dashboard.get_locks_by_server_id': '/dashboard/locks/<int:sid>',

      'dashboard.get_locks_by_database_id': '/dashboard/locks/<int:sid>/<int:did>',

      'dashboard.prepared': '/dashboard/prepared/',

      'dashboard.get_prepared_by_server_id': '/dashboard/prepared/<int:sid>',

      'dashboard.get_prepared_by_database_id': '/dashboard/prepared/<int:sid>/<int:did>',

      'dashboard.config': '/dashboard/config/',

      'dashboard.get_config_by_server_id': '/dashboard/config/<int:sid>',

      'dashboard.check_system_statistics': '/dashboard/check_extension/system_statistics',

      'dashboard.check_system_statistics_sid': '/dashboard/check_extension/system_statistics/<int:sid>',

      'dashboard.check_system_statistics_did': '/dashboard/check_extension/system_statistics/<int:sid>/<int:did>',

      'dashboard.system_statistics': '/dashboard/system_statistics',

      'dashboard.system_statistics_sid': '/dashboard/system_statistics/<int:sid>',

      'dashboard.system_statistics_did': '/dashboard/system_statistics/<int:sid>/<int:did>',

      'help.static': '/help/help/<path:filename>',

      'misc.ping': '/misc/ping',

      'misc.index': '/misc/',

      'misc.cleanup': '/misc/cleanup',

      'misc.validate_binary_path': '/misc/validate_binary_path',

      'misc.log_heartbeat': '/misc/heartbeat/log',

      'misc.stop_heartbeat': '/misc/heartbeat/stop',

      'misc.get_heartbeat': '/misc/get_heartbeat/<int:sid>',

      'misc.upgrade_check': '/misc/upgrade_check',

      'bgprocess.status': '/misc/bgprocess/<pid>',

      'bgprocess.detailed_status': '/misc/bgprocess/<pid>/<int:out>/<int:err>/',

      'bgprocess.acknowledge': '/misc/bgprocess/<pid>',

      'bgprocess.list': '/misc/bgprocess/',

      'bgprocess.stop_process': '/misc/bgprocess/stop/<pid>',

      'bgprocess.update_cloud_details': '/misc/bgprocess/update_cloud_details/<pid>',

      'cloud.deploy_on_cloud': '/cloud/deploy',

      'cloud.update_cloud_server': '/cloud/update_cloud_server',

      'cloud.update_cloud_process': '/cloud/update_cloud_process/<sid>',

      'cloud.get_host_ip': '/cloud/get_host_ip/',

      'cloud.clear_cloud_session': '/cloud/clear_cloud_session/',

      'file_manager.init': '/file_manager/init',

      'file_manager.filemanager': '/file_manager/filemanager/<int:trans_id>/',

      'file_manager.index': '/file_manager/',

      'file_manager.delete_trans_id': '/file_manager/delete_trans_id/<int:trans_id>',

      'file_manager.save_last_dir': '/file_manager/save_last_dir/<int:trans_id>',

      'file_manager.save_file_dialog_view': '/file_manager/save_file_dialog_view/<int:trans_id>',

      'file_manager.save_show_hidden_file_option': '/file_manager/save_show_hidden_file_option/<int:trans_id>',

      'sql.format': '/misc/sql/format',

      'sql.format': '/misc/sql/format',

      'bgprocess.status': '/misc/bgprocess/<pid>',

      'bgprocess.detailed_status': '/misc/bgprocess/<pid>/<int:out>/<int:err>/',

      'bgprocess.acknowledge': '/misc/bgprocess/<pid>',

      'bgprocess.list': '/misc/bgprocess/',

      'bgprocess.stop_process': '/misc/bgprocess/stop/<pid>',

      'bgprocess.update_cloud_details': '/misc/bgprocess/update_cloud_details/<pid>',

      'cloud.deploy_on_cloud': '/cloud/deploy',

      'cloud.update_cloud_server': '/cloud/update_cloud_server',

      'cloud.update_cloud_process': '/cloud/update_cloud_process/<sid>',

      'cloud.get_host_ip': '/cloud/get_host_ip/',

      'cloud.clear_cloud_session': '/cloud/clear_cloud_session/',

      'azure.verify_credentials': '/azure/verify_credentials/',

      'azure.check_cluster_name_availability': '/azure/check_cluster_name_availability/',

      'azure.subscriptions': '/azure/subscriptions/',

      'azure.resource_groups': '/azure/resource_groups/<subscription_id>',

      'azure.regions': '/azure/regions/<subscription_id>',

      'azure.zone_redundant_ha_supported': '/azure/zone_redundant_ha_supported/<region_name>',

      'azure.db_versions': '/azure/db_versions/<availability_zone>',

      'azure.instance_types': '/azure/instance_types/<availability_zone>/<db_version>',

      'azure.availability_zones': '/azure/availability_zones/<region_name>',

      'azure.storage_types': '/azure/storage_types/<availability_zone>/<db_version>',

      'azure.get_azure_verification_codes': '/azure/get_azure_verification_codes/',

      'biganimal.verification': '/biganimal/verification/',

      'biganimal.verification_ack': '/biganimal/verification_ack/',

      'biganimal.regions': '/biganimal/regions/',

      'biganimal.db_types': '/biganimal/db_types/',

      'biganimal.db_versions': '/biganimal/db_versions/<cluster_type>/<pg_type>',

      'biganimal.instance_types': '/biganimal/instance_types/<region_id>/<provider_id>',

      'biganimal.volume_types': '/biganimal/volume_types/<region_id>/<provider_id>',

      'biganimal.volume_properties': '/biganimal/volume_properties/<region_id>/<provider_id>/<volume_type>',

      'biganimal.providers': '/biganimal/providers/<project_id>',

      'biganimal.projects': '/biganimal/projects/',

      'rds.db_versions': '/rds/db_versions/',

      'rds.verify_credentials': '/rds/verify_credentials/',

      'rds.db_instances': '/rds/db_instances/',

      'rds.regions': '/rds/regions/',

      'google.verify_credentials': '/google/verify_credentials/',

      'google.projects': '/google/projects/',

      'google.regions': '/google/regions/<project_id>',

      'google.database_versions': '/google/database_versions/',

      'google.instance_types': '/google/instance_types/<project_id>/<region>/<instance_class>',

      'google.availability_zones': '/google/availability_zones/<region>',

      'google.verification_ack': '/google/verification_ack',

      'google.callback': '/google/callback',

      'file_manager.init': '/file_manager/init',

      'file_manager.filemanager': '/file_manager/filemanager/<int:trans_id>/',

      'file_manager.index': '/file_manager/',

      'file_manager.delete_trans_id': '/file_manager/delete_trans_id/<int:trans_id>',

      'file_manager.save_last_dir': '/file_manager/save_last_dir/<int:trans_id>',

      'file_manager.save_file_dialog_view': '/file_manager/save_file_dialog_view/<int:trans_id>',

      'file_manager.save_show_hidden_file_option': '/file_manager/save_show_hidden_file_option/<int:trans_id>',

      'sql.format': '/misc/sql/format',

      'sql.format': '/misc/sql/format',

      'preferences.index': '/preferences/',

      'preferences.get_by_name': '/preferences/<module>/<preference>',

      'preferences.get_all': '/preferences/get_all',

      'preferences.get_all_cli': '/preferences/get_all_cli',

      'preferences.update_pref': '/preferences/update',

      'settings.store': '/settings/store/<setting>/<value>',

      'settings.store_bulk': '/settings/store',

      'settings.reset_layout': '/settings/layout',

      'settings.save_tree_state': '/settings/save_tree_state/',

      'settings.get_tree_state': '/settings/get_tree_state/',

      'settings.reset_tree_state': '/settings/reset_tree_state',

      'settings.save_file_format_setting': '/settings/save_file_format_setting/',

      'settings.get_file_format_setting': '/settings/get_file_format_setting/',

      'tools.initialize': '/tools/initialize/',

      'backup.create_server_job': '/backup/job/<int:sid>',

      'backup.create_object_job': '/backup/job/<int:sid>/object',

      'backup.utility_exists': '/backup/utility_exists/<int:sid>/<backup_obj_type>',

      'backup.objects': '/backup/objects/<int:sid>/<int:did>',

      'backup.schema_objects': '/backup/objects/<int:sid>/<int:did>/<int:scid>',

      'debugger.index': '/debugger/',

      'debugger.init_for_function': '/debugger/init/<node_type>/<int:sid>/<int:did>/<int:scid>/<int:fid>',

      'debugger.init_for_trigger': '/debugger/init/<node_type>/<int:sid>/<int:did>/<int:scid>/<int:fid>/<int:trid>',

      'debugger.direct': '/debugger/direct/<int:trans_id>',

      'debugger.initialize_target_for_function': '/debugger/initialize_target/<debug_type>/<int:trans_id>/<int:sid>/<int:did>/<int:scid>/<int:func_id>',

      'debugger.initialize_target_for_trigger': '/debugger/initialize_target/<debug_type>/<int:trans_id>/<int:sid>/<int:did>/<int:scid>/<int:func_id>/<int:tri_id>',

      'debugger.close': '/debugger/close/<int:trans_id>',

      'debugger.restart': '/debugger/restart/<int:trans_id>',

      'debugger.start_listener': '/debugger/start_listener/<int:trans_id>',

      'debugger.execute_query': '/debugger/execute_query/<int:trans_id>/<query_type>',

      'debugger.messages': '/debugger/messages/<int:trans_id>/',

      'debugger.start_execution': '/debugger/start_execution/<int:trans_id>/<int:port_num>',

      'debugger.set_breakpoint': '/debugger/set_breakpoint/<int:trans_id>/<int:line_no>/<int:set_type>',

      'debugger.clear_all_breakpoint': '/debugger/clear_all_breakpoint/<int:trans_id>',

      'debugger.deposit_value': '/debugger/deposit_value/<int:trans_id>',

      'debugger.select_frame': '/debugger/select_frame/<int:trans_id>/<int:frame_id>',

      'debugger.get_arguments': '/debugger/get_arguments/<int:sid>/<int:did>/<int:scid>/<int:func_id>',

      'debugger.set_arguments': '/debugger/set_arguments/<int:sid>/<int:did>/<int:scid>/<int:func_id>',

      'debugger.clear_arguments': '/debugger/clear_arguments/<int:sid>/<int:did>/<int:scid>/<int:func_id>',

      'debugger.poll_end_execution_result': '/debugger/poll_end_execution_result/<int:trans_id>/',

      'debugger.poll_result': '/debugger/poll_result/<int:trans_id>/',

      'erd.panel': '/erd/panel/<int:trans_id>',

      'erd.initialize': '/erd/initialize/<int:trans_id>/<int:sgid>/<int:sid>/<int:did>',

      'erd.prequisite': '/erd/prequisite/<int:trans_id>/<int:sgid>/<int:sid>/<int:did>',

      'erd.sql': '/erd/sql/<int:trans_id>/<int:sgid>/<int:sid>/<int:did>',

      'erd.close': '/erd/close/<int:trans_id>/<int:sgid>/<int:sid>/<int:did>',

      'grant_wizard.acl': '/grant_wizard/acl/<int:sid>/<int:did>/',

      'grant_wizard.objects': '/grant_wizard/<int:sid>/<int:did>/<int:node_id>/<node_type>/',

      'grant_wizard.apply': '/grant_wizard/<int:sid>/<int:did>/',

      'grant_wizard.modified_sql': '/grant_wizard/sql/<int:sid>/<int:did>/',

      'import_export.create_job': '/import_export/job/<int:sid>',

      'import_export.utility_exists': '/import_export/utility_exists/<int:sid>',

      'import_export.get_settings': '/import_export/get_settings/',

      'import_export_servers.get_servers': '/import_export_servers/get_servers',

      'import_export_servers.load_servers': '/import_export_servers/load_servers',

      'import_export_servers.save': '/import_export_servers/save',

      'maintenance.create_job': '/maintenance/job/<int:sid>/<int:did>',

      'maintenance.utility_exists': '/maintenance/utility_exists/<int:sid>',

      'psql.panel': '/psql/panel/<int:trans_id>',

      'restore.create_job': '/restore/job/<int:sid>',

      'restore.utility_exists': '/restore/utility_exists/<int:sid>',

      'schema_diff.initialize': '/schema_diff/initialize',

      'schema_diff.panel': '/schema_diff/panel/<int:trans_id>/<path:editor_title>',

      'schema_diff.servers': '/schema_diff/servers',

      'schema_diff.databases': '/schema_diff/databases/<int:sid>',

      'schema_diff.schemas': '/schema_diff/schemas/<int:sid>/<int:did>',

      'schema_diff.ddl_compare': '/schema_diff/ddl_compare/<int:trans_id>/<int:source_sid>/<int:source_did>/<int:source_scid>/<int:target_sid>/<int:target_did>/<int:target_scid>/<int:source_oid>/<int:target_oid>/<node_type>/<comp_status>/',

      'schema_diff.connect_server': '/schema_diff/server/connect/<int:sid>',

      'schema_diff.connect_database': '/schema_diff/database/connect/<int:sid>/<int:did>',

      'schema_diff.get_server': '/schema_diff/get_server/<int:sid>/<int:did>',

      'schema_diff.close': '/schema_diff/close/<int:trans_id>',

      'search_objects.search': '/search_objects/search/<int:sid>/<int:did>',

      'search_objects.types': '/search_objects/types/<int:sid>/<int:did>',

      'sqleditor.initialize_viewdata': '/sqleditor/initialize/viewdata/<int:trans_id>/<int:cmd_type>/<obj_type>/<int:sgid>/<int:sid>/<int:did>/<int:obj_id>',

      'sqleditor.initialize_sqleditor': '/sqleditor/initialize/sqleditor/<int:trans_id>/<int:sgid>/<int:sid>',

      'sqleditor.initialize_sqleditor_with_did': '/sqleditor/initialize/sqleditor/<int:trans_id>/<int:sgid>/<int:sid>/<int:did>',

      'sqleditor.filter_validate': '/sqleditor/filter/validate/<int:sid>/<int:did>/<int:obj_id>',

      'sqleditor.filter': '/sqleditor/filter',

      'sqleditor.panel': '/sqleditor/panel/<int:trans_id>',

      'sqleditor.close': '/sqleditor/close/<int:trans_id>',

      'sqleditor.update_sqleditor_connection': '/sqleditor/initialize/sqleditor/update_connection/<int:trans_id>/<int:sgid>/<int:sid>/<int:did>',

      'sqleditor.view_data_start': '/sqleditor/view_data/start/<int:trans_id>',

      'sqleditor.query_tool_start': '/sqleditor/query_tool/start/<int:trans_id>',

      'sqleditor.poll': '/sqleditor/poll/<int:trans_id>',

      'sqleditor.fetch': '/sqleditor/fetch/<int:trans_id>',

      'sqleditor.fetch_all': '/sqleditor/fetch/<int:trans_id>/<int:fetch_all>',

      'sqleditor.fetch_all_from_start': '/sqleditor/fetch_all_from_start/<int:trans_id>/<int:limit>',

      'sqleditor.save': '/sqleditor/save/<int:trans_id>',

      'sqleditor.inclusive_filter': '/sqleditor/filter/inclusive/<int:trans_id>',

      'sqleditor.exclusive_filter': '/sqleditor/filter/exclusive/<int:trans_id>',

      'sqleditor.remove_filter': '/sqleditor/filter/remove/<int:trans_id>',

      'sqleditor.set_limit': '/sqleditor/limit/<int:trans_id>',

      'sqleditor.cancel_transaction': '/sqleditor/cancel/<int:trans_id>',

      'sqleditor.get_object_name': '/sqleditor/object/get/<int:trans_id>',

      'sqleditor.auto_commit': '/sqleditor/auto_commit/<int:trans_id>',

      'sqleditor.auto_rollback': '/sqleditor/auto_rollback/<int:trans_id>',

      'sqleditor.autocomplete': '/sqleditor/autocomplete/<int:trans_id>',

      'sqleditor.load_file': '/sqleditor/load_file/',

      'sqleditor.save_file': '/sqleditor/save_file/',

      'sqleditor.query_tool_download': '/sqleditor/query_tool/download/<int:trans_id>',

      'sqleditor.connection_status': '/sqleditor/status/<int:trans_id>',

      'sqleditor.get_filter_data': '/sqleditor/filter_dialog/<int:trans_id>',

      'sqleditor.set_filter_data': '/sqleditor/filter_dialog/<int:trans_id>',

      'sqleditor.get_query_history': '/sqleditor/query_history/<int:trans_id>',

      'sqleditor.add_query_history': '/sqleditor/query_history/<int:trans_id>',

      'sqleditor.clear_query_history': '/sqleditor/query_history/<int:trans_id>',

      'sqleditor.get_macro': '/sqleditor/get_macros/<int:macro_id>/<int:trans_id>',

      'sqleditor.get_macros': '/sqleditor/get_macros/<int:trans_id>',

      'sqleditor.set_macros': '/sqleditor/set_macros/<int:trans_id>',

      'sqleditor.get_new_connection_data': '/sqleditor/new_connection_dialog/<int:sgid>/<int:sid>',

      'sqleditor.get_new_connection_servers': '/sqleditor/new_connection_dialog',

      'sqleditor.get_new_connection_database': '/sqleditor/new_connection_database/<int:sgid>/<int:sid>',

      'sqleditor.get_new_connection_user': '/sqleditor/new_connection_user/<int:sgid>/<int:sid>',

      'sqleditor._check_server_connection_status': '/sqleditor/get_server_connection/<int:sgid>/<int:sid>',

      'sqleditor.get_new_connection_role': '/sqleditor/new_connection_role/<int:sgid>/<int:sid>',

      'sqleditor.connect_server': '/sqleditor/connect_server/<int:sid>',

      'user_management.roles': '/user_management/role/',

      'user_management.role': '/user_management/role/<int:rid>',

      'user_management.users': '/user_management/user/',

      'user_management.user': '/user_management/user/<int:uid>',

      'security.login': '/login',

      'user_management.auth_sources': '/user_management/auth_sources/',

      'user_management.change_owner': '/user_management/change_owner',

      'user_management.shared_servers': '/user_management/shared_servers/<int:uid>',

      'user_management.admin_users': '/user_management/admin_users/<int:uid>',

      'user_management.save': '/user_management/save',

      'pgadmin.root': ''
    };
  });
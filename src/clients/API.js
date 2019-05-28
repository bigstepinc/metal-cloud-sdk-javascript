const JSONRPC = require("jsonrpc-bidirectional");

const ClientBase = {};
ClientBase.Plugins = require("./plugins");
ClientBase.Objects = require("../objects");
ClientBase.Utils = require("../Utils");

/**
 * Class representing the API Client.
 * @extends JSONRPC.Client
 */
module.exports =
class API extends JSONRPC.Client
{
	/**
	 * @param {string} strEndpointURL
	 */
	constructor(strEndpointURL)
	{
		super(strEndpointURL);

		this.addPlugin(new ClientBase.Plugins.ExceptionFilter(true));
		this.addPlugin(new ClientBase.Plugins.SerializeParameters());
		this.addPlugin(new ClientBase.Plugins.DeserializeOutput());
	}

	/**
	 * @protected
	 * @param {string} strFunctionName
	 * @param {Array} arrParams
	 */
	async rpc(strFunctionName, arrParams)
	{
		let fnCallback;

		if(arrParams.length && typeof arrParams[0] === "function")
		{
			fnCallback = arrParams.shift();
		}

		let objResult = await super.rpc(strFunctionName, arrParams);

		if(fnCallback)
		{
			const asyncCallbackWrapper = async(objResult) => fnCallback(objResult); 
			asyncCallbackWrapper(objResult);
		}

		return objResult;
	}

	
	// 246 functions available on endpoint.

	async cluster_create(strInfrastructureID, objCluster)
	{
		return await this.rpc("cluster_create", Array.prototype.slice.call(arguments));
	}

	async cluster_get(strClusterID, bAccessSaaSAPI = true, nAccessSaaSAPITimeoutSeconds = 10)
	{
		return await this.rpc("cluster_get", Array.prototype.slice.call(arguments));
	}

	async cluster_edit(strClusterID, objClusterOperation)
	{
		return await this.rpc("cluster_edit", Array.prototype.slice.call(arguments));
	}

	async cluster_stop(strClusterID)
	{
		return await this.rpc("cluster_stop", Array.prototype.slice.call(arguments));
	}

	async cluster_start(strClusterID)
	{
		return await this.rpc("cluster_start", Array.prototype.slice.call(arguments));
	}

	async cluster_delete(strClusterID)
	{
		return await this.rpc("cluster_delete", Array.prototype.slice.call(arguments));
	}

	async clusters(strInfrastructureID, arrClusterIDs = null, bAccessSaaSAPI = false, nAccessSaaSAPITimeoutSeconds = 10)
	{
		return await this.rpc("clusters", Array.prototype.slice.call(arguments));
	}

	async cluster_suspend(strClusterID)
	{
		return await this.rpc("cluster_suspend", Array.prototype.slice.call(arguments));
	}

	async cluster_password_change(strClusterID, strNewPassword)
	{
		return await this.rpc("cluster_password_change", Array.prototype.slice.call(arguments));
	}

	async cluster_public_key_get(strClusterID)
	{
		return await this.rpc("cluster_public_key_get", Array.prototype.slice.call(arguments));
	}

	async cluster_automatic_management_status_set(strClusterID, bStatus)
	{
		return await this.rpc("cluster_automatic_management_status_set", Array.prototype.slice.call(arguments));
	}

	async container_array_create(strInfrastructureID, objContainerArray)
	{
		return await this.rpc("container_array_create", Array.prototype.slice.call(arguments));
	}

	async container_array_get(strContainerArrayID)
	{
		return await this.rpc("container_array_get", Array.prototype.slice.call(arguments));
	}

	async container_array_edit(strContainerArrayID, objContainerArrayOperation, bKeepDetachingDrives = null)
	{
		return await this.rpc("container_array_edit", Array.prototype.slice.call(arguments));
	}

	async container_array_delete(strContainerArrayID)
	{
		return await this.rpc("container_array_delete", Array.prototype.slice.call(arguments));
	}

	async container_array_stop(strContainerArrayID)
	{
		return await this.rpc("container_array_stop", Array.prototype.slice.call(arguments));
	}

	async container_array_start(strContainerArrayID)
	{
		return await this.rpc("container_array_start", Array.prototype.slice.call(arguments));
	}

	async container_arrays(strInfrastructureID, arrContainerArrayIDs = null)
	{
		return await this.rpc("container_arrays", Array.prototype.slice.call(arguments));
	}

	async container_platform_container_arrays(strContainerPlatformID, arrContainerArrayIDs = null)
	{
		return await this.rpc("container_platform_container_arrays", Array.prototype.slice.call(arguments));
	}

	async container_array_containers(strContainerArrayID)
	{
		return await this.rpc("container_array_containers", Array.prototype.slice.call(arguments));
	}

	async container_cluster_create(strInfrastructureID, objContainerCluster)
	{
		return await this.rpc("container_cluster_create", Array.prototype.slice.call(arguments));
	}

	async container_cluster_get(strContainerClusterID, bAccessSaaSAPI = true, nAccessSaaSAPITimeoutSeconds = 10)
	{
		return await this.rpc("container_cluster_get", Array.prototype.slice.call(arguments));
	}

	async container_cluster_edit(strContainerClusterID, objContainerClusterOperation)
	{
		return await this.rpc("container_cluster_edit", Array.prototype.slice.call(arguments));
	}

	async container_cluster_stop(strContainerClusterID)
	{
		return await this.rpc("container_cluster_stop", Array.prototype.slice.call(arguments));
	}

	async container_cluster_start(strContainerClusterID)
	{
		return await this.rpc("container_cluster_start", Array.prototype.slice.call(arguments));
	}

	async container_cluster_delete(strContainerClusterID)
	{
		return await this.rpc("container_cluster_delete", Array.prototype.slice.call(arguments));
	}

	async container_clusters(strInfrastructureID, arrContainerClusterIDs = null)
	{
		return await this.rpc("container_clusters", Array.prototype.slice.call(arguments));
	}

	async container_cluster_suspend(strContainerClusterID)
	{
		return await this.rpc("container_cluster_suspend", Array.prototype.slice.call(arguments));
	}

	async container_cluster_automatic_management_status_set(strContainerClusterID, bStatus)
	{
		return await this.rpc("container_cluster_automatic_management_status_set", Array.prototype.slice.call(arguments));
	}

	async container_platform_create(strInfrastructureID, objContainerPlatform)
	{
		return await this.rpc("container_platform_create", Array.prototype.slice.call(arguments));
	}

	async container_platform_get(strContainerPlatformID)
	{
		return await this.rpc("container_platform_get", Array.prototype.slice.call(arguments));
	}

	async container_platform_edit(strContainerPlatformID, objContainerPlatformOperation, objServerTypeMatches = null)
	{
		return await this.rpc("container_platform_edit", Array.prototype.slice.call(arguments));
	}

	async container_platform_stop(strContainerPlatformID)
	{
		return await this.rpc("container_platform_stop", Array.prototype.slice.call(arguments));
	}

	async container_platform_start(strContainerPlatformID)
	{
		return await this.rpc("container_platform_start", Array.prototype.slice.call(arguments));
	}

	async container_platform_delete(strContainerPlatformID)
	{
		return await this.rpc("container_platform_delete", Array.prototype.slice.call(arguments));
	}

	async container_platforms(strInfrastructureID, arrContainerPlatformIDs = null)
	{
		return await this.rpc("container_platforms", Array.prototype.slice.call(arguments));
	}

	async container_platform_suspend(strContainerPlatformID)
	{
		return await this.rpc("container_platform_suspend", Array.prototype.slice.call(arguments));
	}

	async data_lake_create(strInfrastructureID, objDataLake)
	{
		return await this.rpc("data_lake_create", Array.prototype.slice.call(arguments));
	}

	async data_lake_get(strDataLakeID)
	{
		return await this.rpc("data_lake_get", Array.prototype.slice.call(arguments));
	}

	async data_lake_edit(strDataLakeID, objDataLakeOperation)
	{
		return await this.rpc("data_lake_edit", Array.prototype.slice.call(arguments));
	}

	async data_lake_stop(strDataLakeID)
	{
		return await this.rpc("data_lake_stop", Array.prototype.slice.call(arguments));
	}

	async data_lake_start(strDataLakeID)
	{
		return await this.rpc("data_lake_start", Array.prototype.slice.call(arguments));
	}

	async data_lake_delete(strDataLakeID)
	{
		return await this.rpc("data_lake_delete", Array.prototype.slice.call(arguments));
	}

	async data_lakes(strInfrastructureID, arrDataLakeIDs = null)
	{
		return await this.rpc("data_lakes", Array.prototype.slice.call(arguments));
	}

	async data_lake_krb_conf_download_url()
	{
		return await this.rpc("data_lake_krb_conf_download_url", Array.prototype.slice.call(arguments));
	}

	async datacenters(strUserID = null, bOnlyActive = false)
	{
		return await this.rpc("datacenters", Array.prototype.slice.call(arguments));
	}

	async events_delete(strInfrastructureID, arrEventIDs)
	{
		return await this.rpc("events_delete", Array.prototype.slice.call(arguments));
	}

	async fs_create(strFSURL, strType, strPermission = null)
	{
		return await this.rpc("fs_create", Array.prototype.slice.call(arguments));
	}

	async fs_delete(strFSURL, bRecursive = false)
	{
		return await this.rpc("fs_delete", Array.prototype.slice.call(arguments));
	}

	async fs_download_url(strFSURL)
	{
		return await this.rpc("fs_download_url", Array.prototype.slice.call(arguments));
	}

	async fs_info(strFSURL)
	{
		return await this.rpc("fs_info", Array.prototype.slice.call(arguments));
	}

	async fs_list(strFSURL)
	{
		return await this.rpc("fs_list", Array.prototype.slice.call(arguments));
	}

	async fs_move(strFSURL, strPathNew)
	{
		return await this.rpc("fs_move", Array.prototype.slice.call(arguments));
	}

	async fs_owner_set(strFSURL, strOwner)
	{
		return await this.rpc("fs_owner_set", Array.prototype.slice.call(arguments));
	}

	async fs_read(strFSURL, strEncoding, nOffset, nLength)
	{
		return await this.rpc("fs_read", Array.prototype.slice.call(arguments));
	}

	async fs_rename(strFSURL, strFilenameNew)
	{
		return await this.rpc("fs_rename", Array.prototype.slice.call(arguments));
	}

	async fs_truncate(strFSURL, nLengthNew = 0)
	{
		return await this.rpc("fs_truncate", Array.prototype.slice.call(arguments));
	}

	async fs_write(strFSURL, strContents, strEncoding, nOffset = null, bTruncate = true)
	{
		return await this.rpc("fs_write", Array.prototype.slice.call(arguments));
	}

	async fs_upload_url(strFSURL)
	{
		return await this.rpc("fs_upload_url", Array.prototype.slice.call(arguments));
	}

	async infrastructure_create(strUserID, objInfrastructure, strInfrastructureIDAsTemplate = null)
	{
		return await this.rpc("infrastructure_create", Array.prototype.slice.call(arguments));
	}

	async infrastructure_deploy(strInfrastructureID, objShutdownOptions = null, objDeployOptions = null, bAllowDataLoss = false, bSkipAnsible = false)
	{
		return await this.rpc("infrastructure_deploy", Array.prototype.slice.call(arguments));
	}

	async infrastructure_get(strInfrastructureID)
	{
		return await this.rpc("infrastructure_get", Array.prototype.slice.call(arguments));
	}

	async infrastructure_operation_cancel(strInfrastructureID)
	{
		return await this.rpc("infrastructure_operation_cancel", Array.prototype.slice.call(arguments));
	}

	async infrastructure_edit(strInfrastructureID, objInfrastructureOperation)
	{
		return await this.rpc("infrastructure_edit", Array.prototype.slice.call(arguments));
	}

	async infrastructure_deploy_options(strInfrastructureID, bReplaceServerTypes = false)
	{
		return await this.rpc("infrastructure_deploy_options", Array.prototype.slice.call(arguments));
	}

	async infrastructure_deploy_overview(strInfrastructureID, objDeployOptions = null)
	{
		return await this.rpc("infrastructure_deploy_overview", Array.prototype.slice.call(arguments));
	}

	async infrastructure_delete(strInfrastructureID)
	{
		return await this.rpc("infrastructure_delete", Array.prototype.slice.call(arguments));
	}

	async infrastructure_user_limits(strInfrastructureID)
	{
		return await this.rpc("infrastructure_user_limits", Array.prototype.slice.call(arguments));
	}

	async infrastructure_deploy_blockers(strInfrastructureID)
	{
		return await this.rpc("infrastructure_deploy_blockers", Array.prototype.slice.call(arguments));
	}

	async infrastructure_design_lock_set(strInfrastructureID, bLockStatus)
	{
		return await this.rpc("infrastructure_design_lock_set", Array.prototype.slice.call(arguments));
	}

	async infrastructure_deploy_shutdown_required(strInfrastructureID, strPowerCommand = "none", bOnlyPoweredOn = true)
	{
		return await this.rpc("infrastructure_deploy_shutdown_required", Array.prototype.slice.call(arguments));
	}

	async infrastructures(strUserID, arrInfrastructureIDs = null)
	{
		return await this.rpc("infrastructures", Array.prototype.slice.call(arguments));
	}

	async infrastructure_user_add(strInfrastructureID, strUserEmail, objInfrastructurePermissions = null, bCreateUserIfNotExists = false)
	{
		return await this.rpc("infrastructure_user_add", Array.prototype.slice.call(arguments));
	}

	async infrastructure_user_remove(strInfrastructureID, strUserID)
	{
		return await this.rpc("infrastructure_user_remove", Array.prototype.slice.call(arguments));
	}

	async infrastructure_user_update(strInfrastructureID, strUserEmail, objInfrastructurePermissions)
	{
		return await this.rpc("infrastructure_user_update", Array.prototype.slice.call(arguments));
	}

	async infrastructure_user_ssh_keys(strInfrastructureID)
	{
		return await this.rpc("infrastructure_user_ssh_keys", Array.prototype.slice.call(arguments));
	}

	async infrastructure_users(strInfrastructureID, arrUserIDs = null)
	{
		return await this.rpc("infrastructure_users", Array.prototype.slice.call(arguments));
	}

	async instance_server_power_set_batch(strInfrastructureID, arrInstanceIDs, strPowerCommand)
	{
		return await this.rpc("instance_server_power_set_batch", Array.prototype.slice.call(arguments));
	}

	async instance_server_power_get_batch(strInfrastructureID, arrInstanceIDs)
	{
		return await this.rpc("instance_server_power_get_batch", Array.prototype.slice.call(arguments));
	}

	async instance_edit(strInstanceID, objInstanceOperation)
	{
		return await this.rpc("instance_edit", Array.prototype.slice.call(arguments));
	}

	async instance_delete(strInstanceID, bKeepDetachingDrives)
	{
		return await this.rpc("instance_delete", Array.prototype.slice.call(arguments));
	}

	async instance_server_power_get(strInstanceID)
	{
		return await this.rpc("instance_server_power_get", Array.prototype.slice.call(arguments));
	}

	async instance_server_power_set(strInstanceID, strPowerCommand)
	{
		return await this.rpc("instance_server_power_set", Array.prototype.slice.call(arguments));
	}

	async instance_public_key_get(strInstanceID)
	{
		return await this.rpc("instance_public_key_get", Array.prototype.slice.call(arguments));
	}

	async instance_server_type_reservation_create(strInstanceID, bRecurring, nReservationCycleMonths, nInstallmentCycleMonths)
	{
		return await this.rpc("instance_server_type_reservation_create", Array.prototype.slice.call(arguments));
	}

	async instance_get(strInstanceID)
	{
		return await this.rpc("instance_get", Array.prototype.slice.call(arguments));
	}

	async instance_array_create(strInfrastructureID, objInstanceArray)
	{
		return await this.rpc("instance_array_create", Array.prototype.slice.call(arguments));
	}

	async instance_array_get(strInstanceArrayID)
	{
		return await this.rpc("instance_array_get", Array.prototype.slice.call(arguments));
	}

	async instance_array_edit(strInstanceArrayID, objInstanceArrayOperation, bSwapExistingInstancesHardware = false, bKeepDetachingDrives = null, objServerTypeMatches = null, arrInstancesToBeDeleted = null)
	{
		return await this.rpc("instance_array_edit", Array.prototype.slice.call(arguments));
	}

	async instance_array_delete(strInstanceArrayID)
	{
		return await this.rpc("instance_array_delete", Array.prototype.slice.call(arguments));
	}

	async instance_array_start(strInstanceArrayID)
	{
		return await this.rpc("instance_array_start", Array.prototype.slice.call(arguments));
	}

	async instance_arrays(strInfrastructureID, arrInstanceArrayIDs = null)
	{
		return await this.rpc("instance_arrays", Array.prototype.slice.call(arguments));
	}

	async instance_array_interface_attach_network(strInstanceArrayID, nInstanceArrayInterfaceIndex, strNetworkID)
	{
		return await this.rpc("instance_array_interface_attach_network", Array.prototype.slice.call(arguments));
	}

	async instance_array_interface_detach(strInstanceArrayID, nInstanceArrayInterfaceIndex)
	{
		return await this.rpc("instance_array_interface_detach", Array.prototype.slice.call(arguments));
	}

	async instance_array_instances(strInstanceArrayID, arrInstanceIDs = null)
	{
		return await this.rpc("instance_array_instances", Array.prototype.slice.call(arguments));
	}

	async instance_array_stop(strInstanceArrayID)
	{
		return await this.rpc("instance_array_stop", Array.prototype.slice.call(arguments));
	}

	async client_ip()
	{
		return await this.rpc("client_ip", Array.prototype.slice.call(arguments));
	}

	async subnet_create(strNetworkID, objSubnet)
	{
		return await this.rpc("subnet_create", Array.prototype.slice.call(arguments));
	}

	async subnet_get(strSubnetID)
	{
		return await this.rpc("subnet_get", Array.prototype.slice.call(arguments));
	}

	async subnet_delete(strSubnetID)
	{
		return await this.rpc("subnet_delete", Array.prototype.slice.call(arguments));
	}

	async subnets(strNetworkID, arrSubnetIDs = null)
	{
		return await this.rpc("subnets", Array.prototype.slice.call(arguments));
	}

	async network_create(strInfrastructureID, objNetwork)
	{
		return await this.rpc("network_create", Array.prototype.slice.call(arguments));
	}

	async network_get(strNetworkID)
	{
		return await this.rpc("network_get", Array.prototype.slice.call(arguments));
	}

	async network_edit(strNetworkID, objNetworkOperation)
	{
		return await this.rpc("network_edit", Array.prototype.slice.call(arguments));
	}

	async network_delete(strNetworkID)
	{
		return await this.rpc("network_delete", Array.prototype.slice.call(arguments));
	}

	async network_start(strNetworkID)
	{
		return await this.rpc("network_start", Array.prototype.slice.call(arguments));
	}

	async network_stop(strNetworkID)
	{
		return await this.rpc("network_stop", Array.prototype.slice.call(arguments));
	}

	async networks(strInfrastructureID, arrNetworkIDs = null)
	{
		return await this.rpc("networks", Array.prototype.slice.call(arguments));
	}

	async network_join(strNetworkID, strNetworkToBeDeletedID)
	{
		return await this.rpc("network_join", Array.prototype.slice.call(arguments));
	}

	async resource_utilization_summary(strUserIDOwner, strStartTimestamp, strEndTimestamp, arrInfrastructureIDs = null)
	{
		return await this.rpc("resource_utilization_summary", Array.prototype.slice.call(arguments));
	}

	async resource_utilization_detailed(strUserIDOwner, strStartTimestamp, strEndTimestamp, arrInfrastructureIDs = null)
	{
		return await this.rpc("resource_utilization_detailed", Array.prototype.slice.call(arguments));
	}

	async prices()
	{
		return await this.rpc("prices", Array.prototype.slice.call(arguments));
	}

	async prices_history(bExcludeFuturePrices = false, bOnlyActivePrices = false)
	{
		return await this.rpc("prices_history", Array.prototype.slice.call(arguments));
	}

	async server_type_get(strServerTypeID)
	{
		return await this.rpc("server_type_get", Array.prototype.slice.call(arguments));
	}

	async server_types(strDatacenterName = null, bOnlyAvailable = false)
	{
		return await this.rpc("server_types", Array.prototype.slice.call(arguments));
	}

	async server_type_matches(strInfrastructureID, objHardwareConfiguration, strInstanceArrayID = null, bAllowServerSwap = false)
	{
		return await this.rpc("server_type_matches", Array.prototype.slice.call(arguments));
	}

	async server_types_datacenter(strDatacenterName)
	{
		return await this.rpc("server_types_datacenter", Array.prototype.slice.call(arguments));
	}

	async server_types_match_hardware_configuration(strDatacenterName, objHardwareConfiguration)
	{
		return await this.rpc("server_types_match_hardware_configuration", Array.prototype.slice.call(arguments));
	}

	async server_type_reservation_create(strUserID, objReservation, nQuantity = 1)
	{
		return await this.rpc("server_type_reservation_create", Array.prototype.slice.call(arguments));
	}

	async server_type_reservation_get(nServerTypeReservationID)
	{
		return await this.rpc("server_type_reservation_get", Array.prototype.slice.call(arguments));
	}

	async server_type_reservation_edit(nServerTypeReservationID, objServerTypeReservation)
	{
		return await this.rpc("server_type_reservation_edit", Array.prototype.slice.call(arguments));
	}

	async user_server_type_reservations(strUserID)
	{
		return await this.rpc("user_server_type_reservations", Array.prototype.slice.call(arguments));
	}

	async user_server_type_reservations_unused(strUserID, strDatacenterName)
	{
		return await this.rpc("user_server_type_reservations_unused", Array.prototype.slice.call(arguments));
	}

	async shared_drive_create(strInfrastructureID, objSharedDrive)
	{
		return await this.rpc("shared_drive_create", Array.prototype.slice.call(arguments));
	}

	async shared_drive_edit(strSharedDriveID, objSharedDriveOperation)
	{
		return await this.rpc("shared_drive_edit", Array.prototype.slice.call(arguments));
	}

	async shared_drive_delete(strSharedDriveID)
	{
		return await this.rpc("shared_drive_delete", Array.prototype.slice.call(arguments));
	}

	async shared_drive_get(strSharedDriveID)
	{
		return await this.rpc("shared_drive_get", Array.prototype.slice.call(arguments));
	}

	async shared_drive_stop(strSharedDriveID)
	{
		return await this.rpc("shared_drive_stop", Array.prototype.slice.call(arguments));
	}

	async shared_drive_start(strSharedDriveID)
	{
		return await this.rpc("shared_drive_start", Array.prototype.slice.call(arguments));
	}

	async shared_drive_instance_arrays(strSharedDriveID)
	{
		return await this.rpc("shared_drive_instance_arrays", Array.prototype.slice.call(arguments));
	}

	async shared_drive_container_arrays(strSharedDriveID)
	{
		return await this.rpc("shared_drive_container_arrays", Array.prototype.slice.call(arguments));
	}

	async instance_array_shared_drives(strInstanceArrayID)
	{
		return await this.rpc("instance_array_shared_drives", Array.prototype.slice.call(arguments));
	}

	async shared_drives(strInfrastructureID, arrSharedDriveIDs = null)
	{
		return await this.rpc("shared_drives", Array.prototype.slice.call(arguments));
	}

	async search(strUserID, strKeywords, arrTables = null, objTablesColumns = null, strCollapseType = "array_subrows", arrOrderBy = [], arrLimit = null)
	{
		return await this.rpc("search", Array.prototype.slice.call(arguments));
	}

	async query(strUserID, strSQLQuery, strCollapseType = "array_subrows")
	{
		return await this.rpc("query", Array.prototype.slice.call(arguments));
	}

	async query_parse(strSQL)
	{
		return await this.rpc("query_parse", Array.prototype.slice.call(arguments));
	}

	async query_structured(strUserID, strTableName, objQueryConditions, strCollapseType = "array_subrows")
	{
		return await this.rpc("query_structured", Array.prototype.slice.call(arguments));
	}

	async drive_get(strDriveID)
	{
		return await this.rpc("drive_get", Array.prototype.slice.call(arguments));
	}

	async drive_edit(strDriveID, objDriveOperation)
	{
		return await this.rpc("drive_edit", Array.prototype.slice.call(arguments));
	}

	async drive_delete(strDriveID)
	{
		return await this.rpc("drive_delete", Array.prototype.slice.call(arguments));
	}

	async drive_attach_instance(strDriveID, strInstanceID)
	{
		return await this.rpc("drive_attach_instance", Array.prototype.slice.call(arguments));
	}

	async drive_detach_instance(strDriveID)
	{
		return await this.rpc("drive_detach_instance", Array.prototype.slice.call(arguments));
	}

	async instance_drives(strInstanceID)
	{
		return await this.rpc("instance_drives", Array.prototype.slice.call(arguments));
	}

	async drive_snapshot_get(strSnapshotID)
	{
		return await this.rpc("drive_snapshot_get", Array.prototype.slice.call(arguments));
	}

	async drive_snapshot_create(strDriveID)
	{
		return await this.rpc("drive_snapshot_create", Array.prototype.slice.call(arguments));
	}

	async drive_snapshot_rollback(strSnapshotID)
	{
		return await this.rpc("drive_snapshot_rollback", Array.prototype.slice.call(arguments));
	}

	async drive_snapshot_delete(strSnapshotID)
	{
		return await this.rpc("drive_snapshot_delete", Array.prototype.slice.call(arguments));
	}

	async drive_snapshots(strDriveID, arrSnapshotIDs = null)
	{
		return await this.rpc("drive_snapshots", Array.prototype.slice.call(arguments));
	}

	async volume_template_get(strVolumeTemplateID)
	{
		return await this.rpc("volume_template_get", Array.prototype.slice.call(arguments));
	}

	async volume_templates_public(arrVolumeTemplateIDs = null)
	{
		return await this.rpc("volume_templates_public", Array.prototype.slice.call(arguments));
	}

	async volume_templates_private(strUserID, arrVolumeTemplateIDs = null)
	{
		return await this.rpc("volume_templates_private", Array.prototype.slice.call(arguments));
	}

	async volume_templates(strUserID, arrVolumeTemplateIDs = null)
	{
		return await this.rpc("volume_templates", Array.prototype.slice.call(arguments));
	}

	async drive_array_create(strInfrastructureID, objDriveArray)
	{
		return await this.rpc("drive_array_create", Array.prototype.slice.call(arguments));
	}

	async drive_array_get(strDriveArrayID)
	{
		return await this.rpc("drive_array_get", Array.prototype.slice.call(arguments));
	}

	async drive_array_edit(strDriveArrayID, objDriveArrayOperation, objDriveArrayEditOptions = {"update_active_drives_size":false})
	{
		return await this.rpc("drive_array_edit", Array.prototype.slice.call(arguments));
	}

	async drive_array_delete(strDriveArrayID)
	{
		return await this.rpc("drive_array_delete", Array.prototype.slice.call(arguments));
	}

	async drive_array_stop(strDriveArrayID)
	{
		return await this.rpc("drive_array_stop", Array.prototype.slice.call(arguments));
	}

	async drive_array_start(strDriveArrayID)
	{
		return await this.rpc("drive_array_start", Array.prototype.slice.call(arguments));
	}

	async drive_array_drives(strDriveArrayID, arrDriveIDs = null)
	{
		return await this.rpc("drive_array_drives", Array.prototype.slice.call(arguments));
	}

	async drive_arrays(strInfrastructureID, arrDriveArrayIDs = null)
	{
		return await this.rpc("drive_arrays", Array.prototype.slice.call(arguments));
	}

	async user_create(strDisplayName, strLoginEmail, strRedirectURL = null, strAESKey = null)
	{
		return await this.rpc("user_create", Array.prototype.slice.call(arguments));
	}

	async user_get(strUserID)
	{
		return await this.rpc("user_get", Array.prototype.slice.call(arguments));
	}

	async user_update_language(strUserID, strLanguage)
	{
		return await this.rpc("user_update_language", Array.prototype.slice.call(arguments));
	}

	async user_franchise_get(strUserID)
	{
		return await this.rpc("user_franchise_get", Array.prototype.slice.call(arguments));
	}

	async throw_error(nErrorCode)
	{
		return await this.rpc("throw_error", Array.prototype.slice.call(arguments));
	}

	async user_api_key_regenerate(strUserID)
	{
		return await this.rpc("user_api_key_regenerate", Array.prototype.slice.call(arguments));
	}

	async user_authenticate_password(strLoginEmail, strPassword, strOneTimePassword = null, bRememberLogin = false, bTestCredentials = false, bRenewKerberosTicket = false)
	{
		return await this.rpc("user_authenticate_password", Array.prototype.slice.call(arguments));
	}

	async user_authenticate_api_key(strUserID, strAPIKey, strOneTimePassword = null, bRememberLogin = false)
	{
		return await this.rpc("user_authenticate_api_key", Array.prototype.slice.call(arguments));
	}

	async user_authenticate_password_encrypted(strLoginEmail, strAESCipherPassword, strRSACipherAESKey, strOneTimePassword = null, bRememberLogin = false, bTestCredentials = false, bRenewKerberosTicket = false)
	{
		return await this.rpc("user_authenticate_password_encrypted", Array.prototype.slice.call(arguments));
	}

	async user_authenticator_has(strUserID)
	{
		return await this.rpc("user_authenticator_has", Array.prototype.slice.call(arguments));
	}

	async user_delegate_add(strUserID, strDelegateUserEmail, bCreateUserIfNotExists = false)
	{
		return await this.rpc("user_delegate_add", Array.prototype.slice.call(arguments));
	}

	async user_delegate_remove(strUserID, strDelegateUserEmail)
	{
		return await this.rpc("user_delegate_remove", Array.prototype.slice.call(arguments));
	}

	async user_delegate_children(strUserID)
	{
		return await this.rpc("user_delegate_children", Array.prototype.slice.call(arguments));
	}

	async user_delegate_parents(strUserID)
	{
		return await this.rpc("user_delegate_parents", Array.prototype.slice.call(arguments));
	}

	async user_infrastructure_default_set(strUserID, strInfrastructureID)
	{
		return await this.rpc("user_infrastructure_default_set", Array.prototype.slice.call(arguments));
	}

	async user_infrastructure_default_unset(strUserID)
	{
		return await this.rpc("user_infrastructure_default_unset", Array.prototype.slice.call(arguments));
	}

	async user_cookie_session(bFetchUserLoginSessionData = false)
	{
		return await this.rpc("user_cookie_session", Array.prototype.slice.call(arguments));
	}

	async user_logout()
	{
		return await this.rpc("user_logout", Array.prototype.slice.call(arguments));
	}

	async user_limits(strUserID)
	{
		return await this.rpc("user_limits", Array.prototype.slice.call(arguments));
	}

	async user_change_password(strUserID, strNewPassword, strOldPassword = null)
	{
		return await this.rpc("user_change_password", Array.prototype.slice.call(arguments));
	}

	async user_change_password_encrypted(strUserID, strAESCipherPassword, strRSACipherAESKey, strOldPassword = null)
	{
		return await this.rpc("user_change_password_encrypted", Array.prototype.slice.call(arguments));
	}

	async user_prices_history(strUserID, bExcludeFuturePrices = false, bOnlyActivePrices = false, bExpandWithPrivateDatacenters = true)
	{
		return await this.rpc("user_prices_history", Array.prototype.slice.call(arguments));
	}

	async user_prices(strUserID)
	{
		return await this.rpc("user_prices", Array.prototype.slice.call(arguments));
	}

	async user_password_recovery(strLoginEmail, strRedirectURL = null, strAESKey = null)
	{
		return await this.rpc("user_password_recovery", Array.prototype.slice.call(arguments));
	}

	async user_create_retry_mail(strLoginEmail, strRedirectURL = null, strAESKey = null)
	{
		return await this.rpc("user_create_retry_mail", Array.prototype.slice.call(arguments));
	}

	async user_update_email(strUserID, strNewLoginEmail, strRedirectURL = null, strAESKey = null)
	{
		return await this.rpc("user_update_email", Array.prototype.slice.call(arguments));
	}

	async user_suspend_reasons(nUserID)
	{
		return await this.rpc("user_suspend_reasons", Array.prototype.slice.call(arguments));
	}

	async user_ssh_key_create(strUserID, strSSHKey)
	{
		return await this.rpc("user_ssh_key_create", Array.prototype.slice.call(arguments));
	}

	async user_ssh_keys(strUserID)
	{
		return await this.rpc("user_ssh_keys", Array.prototype.slice.call(arguments));
	}

	async user_ssh_key_delete(nSSHKeyID)
	{
		return await this.rpc("user_ssh_key_delete", Array.prototype.slice.call(arguments));
	}

	async data_lake_core_site_conf_download_url(strUserID, nDataLakeID)
	{
		return await this.rpc("data_lake_core_site_conf_download_url", Array.prototype.slice.call(arguments));
	}

	async container_get(strContainerID)
	{
		return await this.rpc("container_get", Array.prototype.slice.call(arguments));
	}

	async containers(strInfrastructureID)
	{
		return await this.rpc("containers", Array.prototype.slice.call(arguments));
	}

	async container_drives(strContainerID)
	{
		return await this.rpc("container_drives", Array.prototype.slice.call(arguments));
	}

	async container_array_shared_drives(strContainerArrayID)
	{
		return await this.rpc("container_array_shared_drives", Array.prototype.slice.call(arguments));
	}

	async container_logs(strContainerID, strSinceTimestamp = null, nLimitBytes = null)
	{
		return await this.rpc("container_logs", Array.prototype.slice.call(arguments));
	}

	async cluster_app(strClusterID, bAccessSaaSAPI = true, nAccessSaaSAPITimeoutSeconds = 10)
	{
		return await this.rpc("cluster_app", Array.prototype.slice.call(arguments));
	}

	async container_cluster_app(strContainerClusterID, bAccessSaaSAPI = true, nAccessSaaSAPITimeoutSeconds = 10)
	{
		return await this.rpc("container_cluster_app", Array.prototype.slice.call(arguments));
	}

	async container_array_drive_arrays(strContainerArrayID)
	{
		return await this.rpc("container_array_drive_arrays", Array.prototype.slice.call(arguments));
	}

	async drive_attach_container(strDriveID, strContainerID)
	{
		return await this.rpc("drive_attach_container", Array.prototype.slice.call(arguments));
	}

	async drive_detach_container(strDriveID)
	{
		return await this.rpc("drive_detach_container", Array.prototype.slice.call(arguments));
	}

	async datacenter_get(strUserID = null, strDatacenterName)
	{
		return await this.rpc("datacenter_get", Array.prototype.slice.call(arguments));
	}

	async license_types_for_volume_template(strVolumeTemplateID)
	{
		return await this.rpc("license_types_for_volume_template", Array.prototype.slice.call(arguments));
	}

	async user_get_brand(nUserID)
	{
		return await this.rpc("user_get_brand", Array.prototype.slice.call(arguments));
	}

	async ip_custom_reverse_records(strInfrastructureID)
	{
		return await this.rpc("ip_custom_reverse_records", Array.prototype.slice.call(arguments));
	}

	async ip_custom_reverse_record_remove(strInfrastructureID, strIPAddress)
	{
		return await this.rpc("ip_custom_reverse_record_remove", Array.prototype.slice.call(arguments));
	}

	async ip_custom_reverse_record_add(strInfrastructureID, strIPAddress, strSubdomainName, strRootDomain)
	{
		return await this.rpc("ip_custom_reverse_record_add", Array.prototype.slice.call(arguments));
	}

	async container_status(strContainerID)
	{
		return await this.rpc("container_status", Array.prototype.slice.call(arguments));
	}

	async container_array_status(strContainerArrayID)
	{
		return await this.rpc("container_array_status", Array.prototype.slice.call(arguments));
	}

	async dataset_create(strUserID, nTemporaryUploadID = null, objDataset)
	{
		return await this.rpc("dataset_create", Array.prototype.slice.call(arguments));
	}

	async dataset_publish(nDatasetID)
	{
		return await this.rpc("dataset_publish", Array.prototype.slice.call(arguments));
	}

	async dataset_unpublish(nDatasetID)
	{
		return await this.rpc("dataset_unpublish", Array.prototype.slice.call(arguments));
	}

	async dataset_edit(nDatasetID, nTemporaryUploadID = null, objChangedDataset)
	{
		return await this.rpc("dataset_edit", Array.prototype.slice.call(arguments));
	}

	async dataset_datapackage_get(nDatasetID)
	{
		return await this.rpc("dataset_datapackage_get", Array.prototype.slice.call(arguments));
	}

	async dataset_get(publishedDatasetID)
	{
		return await this.rpc("dataset_get", Array.prototype.slice.call(arguments));
	}

	async dataset_delete(nDatasetID)
	{
		return await this.rpc("dataset_delete", Array.prototype.slice.call(arguments));
	}

	async datacenter_datasets(strDatacenterLabel)
	{
		return await this.rpc("datacenter_datasets", Array.prototype.slice.call(arguments));
	}

	async user_datasets_managed(strUserIDOwner)
	{
		return await this.rpc("user_datasets_managed", Array.prototype.slice.call(arguments));
	}

	async dataset_subscription_create(strUserIDOwner, datasetID)
	{
		return await this.rpc("dataset_subscription_create", Array.prototype.slice.call(arguments));
	}

	async dataset_subscription_delete(strUserIDOwner, nDatasetSubscriptionID)
	{
		return await this.rpc("dataset_subscription_delete", Array.prototype.slice.call(arguments));
	}

	async user_dataset_subscriptions(strUserIDOwner)
	{
		return await this.rpc("user_dataset_subscriptions", Array.prototype.slice.call(arguments));
	}

	async server_instance_oob_allowed_ips(strInstanceID)
	{
		return await this.rpc("server_instance_oob_allowed_ips", Array.prototype.slice.call(arguments));
	}

	async server_instance_oob_allow_ip(strInstanceID, strAllowedIP)
	{
		return await this.rpc("server_instance_oob_allow_ip", Array.prototype.slice.call(arguments));
	}

	async server_instance_oob_disallow_ip(strInstanceID, strDisallowedIP)
	{
		return await this.rpc("server_instance_oob_disallow_ip", Array.prototype.slice.call(arguments));
	}

	async instance_array_drive_arrays(strInstanceArrayID)
	{
		return await this.rpc("instance_array_drive_arrays", Array.prototype.slice.call(arguments));
	}

	async infrastructure_lan_subnet_pools_available(nInfrastructureID)
	{
		return await this.rpc("infrastructure_lan_subnet_pools_available", Array.prototype.slice.call(arguments));
	}

	async infrastructure_lan_subnet_prefixes_available(nInfrastructureID)
	{
		return await this.rpc("infrastructure_lan_subnet_prefixes_available", Array.prototype.slice.call(arguments));
	}

	async dataset_readme_upload_url()
	{
		return await this.rpc("dataset_readme_upload_url", Array.prototype.slice.call(arguments));
	}

	async dataset_readme_download_url(nPublicDatasetID)
	{
		return await this.rpc("dataset_readme_download_url", Array.prototype.slice.call(arguments));
	}

	async dataset_readme_delete(nDatasetID)
	{
		return await this.rpc("dataset_readme_delete", Array.prototype.slice.call(arguments));
	}

	async drive_array_filesystem_types_available()
	{
		return await this.rpc("drive_array_filesystem_types_available", Array.prototype.slice.call(arguments));
	}

	async drive_array_block_sizes_available()
	{
		return await this.rpc("drive_array_block_sizes_available", Array.prototype.slice.call(arguments));
	}

	async cluster_instance_arrays(strClusterID, arrInstanceArrayIDs = null)
	{
		return await this.rpc("cluster_instance_arrays", Array.prototype.slice.call(arguments));
	}

	async container_cluster_container_arrays(strContainerClusterID, arrContainerArrayIDs = null)
	{
		return await this.rpc("container_cluster_container_arrays", Array.prototype.slice.call(arguments));
	}

	async threshold_create(strUserIDOwner, objThreshold)
	{
		return await this.rpc("threshold_create", Array.prototype.slice.call(arguments));
	}

	async thresholds(strUserIDOwner)
	{
		return await this.rpc("thresholds", Array.prototype.slice.call(arguments));
	}

	async threshold_edit(nThresholdID, objThresholdOperation)
	{
		return await this.rpc("threshold_edit", Array.prototype.slice.call(arguments));
	}

	async threshold_get(nThresholdID)
	{
		return await this.rpc("threshold_get", Array.prototype.slice.call(arguments));
	}

	async threshold_delete(nThresholdID)
	{
		return await this.rpc("threshold_delete", Array.prototype.slice.call(arguments));
	}

	async dataset_subscriptions(nDatasetID)
	{
		return await this.rpc("dataset_subscriptions", Array.prototype.slice.call(arguments));
	}

	async instance_rows(strUserID, arrInstanceIDs = null)
	{
		return await this.rpc("instance_rows", Array.prototype.slice.call(arguments));
	}

	async independent_instance_create(strUserIDOwner, strLabel, strDatacenterName, strServerTypeID, arrFirewallRules = [], strStorageType = "none", nStorageSizeMBytes = 0, strVolumeTemplateID = null)
	{
		return await this.rpc("independent_instance_create", Array.prototype.slice.call(arguments));
	}

	async independent_instance_delete(strInstanceID)
	{
		return await this.rpc("independent_instance_delete", Array.prototype.slice.call(arguments));
	}

	async independent_instance_storage_expand(strInstanceID, nStorageSizeMBytes)
	{
		return await this.rpc("independent_instance_storage_expand", Array.prototype.slice.call(arguments));
	}

	async instance_label_is_available_assert(strUserIDOwner, strInstanceLabel)
	{
		return await this.rpc("instance_label_is_available_assert", Array.prototype.slice.call(arguments));
	}

	async jwt_session_cookies_types_to_cookies_names()
	{
		return await this.rpc("jwt_session_cookies_types_to_cookies_names", Array.prototype.slice.call(arguments));
	}


}

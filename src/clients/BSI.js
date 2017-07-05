const JSONRPC = require("jsonrpc-bidirectional");

const ClientBase = {};
ClientBase.ExceptionFilter = require("../ExceptionFilter");
ClientBase.Objects = require("../objects");
ClientBase.Utils = require("../Utils");

/**
 * Class representing the BSI Client.
 * @extends JSONRPC.Client
 */
module.exports =
class BSI extends JSONRPC.Client
{
	/**
	 * @param {string} strEndpointURL
	 */
	constructor(strEndpointURL)
	{
		super(strEndpointURL);

		return new Promise(async (resolve) => {
			await this._init();
			resolve(this);
		});
	}

	/**
	 * Part of the constructor.
	 * @protected
	 */
	async _init()
	{
		this.addPlugin(new ClientBase.ExceptionFilter(true));

		if(BSI.arrFunctions === undefined || BSI.arrFunctions === null)
		{
			this._initMemberRPCFunctions(await this.rpcFunctions());
		}
	}

	/**
	 * Part of the constructor.
	 * @protected
	 * @param {Array} arrFunctions
	 */
	_initMemberRPCFunctions(arrFunctions)
	{
		this._arrFunctions = arrFunctions;

		for(let strFunctionName of this.arrFunctions)
		{
			BSI.prototype[strFunctionName] = function() {
				return this.rpc(strFunctionName, [].slice.call(arguments));
			};
		}
	}

	/**
	 * @protected
	 * @param {string} strFunctionName
	 * @param {Array} arrParams
	 */
	async rpc(strFunctionName, arrParams)
	{
		for(let index = 0; index < arrParams.length; index++)
		{
			if(arrParams[index] instanceof ClientBase.Objects.ObjectBase)
			{
				arrParams[index] = ClientBase.Utils.Serialize(arrParams[index]);
			}
		}

		let objResult = await super.rpc(strFunctionName, arrParams);

		if(objResult !== undefined && objResult !== null)
		{
			if(objResult.hasOwnProperty("type") &&
				ClientBase.Objects[objResult["type"]] !== undefined &&
				ClientBase.Objects[objResult["type"]].prototype instanceof ClientBase.Objects.ObjectBase)
			{
				objResult = ClientBase.Utils.Deserialize(
					ClientBase.Objects[objResult["type"]],
					objResult);
			}
			else
			{
				for(let objProperty in objResult)
				{
					if(objResult.hasOwnProperty(objProperty))
					{
						const objValue = objResult[objProperty];
						if(objValue !== undefined && objValue !== null)
						{
							if(objValue.hasOwnProperty("type") &&
								ClientBase.Objects[objValue["type"]] !== undefined &&
								ClientBase.Objects[objValue["type"]].prototype instanceof ClientBase.Objects.ObjectBase)
							{
								objResult[objProperty] = ClientBase.Utils.Deserialize(
									ClientBase.Objects[objValue["type"]],
									objValue);
							}
						}
					}
				}
			}
		}

		return objResult;
	}

	/**
	 * Enables static calling of functions from any scope.
	 * @param {string} strEndpointURL
	 */
	static singletonInit(strEndpointURL)
	{
		if(BSI.singleton)
		{
			throw new Error("BSI singleton already initialized.");
		}

		return new Promise(async (resolve) => {
			BSI.singleton = await new BSI(strEndpointURL);
			resolve(this);
		});
	}

	/**
	 * @returns {Array|null} _arrFunctions
	 */
	get arrFunctions()
	{
		return this._arrFunctions || null;
	}

	
	// 226 functions available on endpoint.

	cluster_create(strInfrastructureID, objCluster)
	{
		return this.rpc("cluster_create", Array.prototype.slice.call(arguments));
	}

	cluster_get(strClusterID, bAccessSaaSAPI = true, nAccessSaaSAPITimeoutSeconds = 10)
	{
		return this.rpc("cluster_get", Array.prototype.slice.call(arguments));
	}

	cluster_edit(strClusterID, objClusterOperation)
	{
		return this.rpc("cluster_edit", Array.prototype.slice.call(arguments));
	}

	cluster_stop(strClusterID)
	{
		return this.rpc("cluster_stop", Array.prototype.slice.call(arguments));
	}

	cluster_start(strClusterID)
	{
		return this.rpc("cluster_start", Array.prototype.slice.call(arguments));
	}

	cluster_delete(strClusterID)
	{
		return this.rpc("cluster_delete", Array.prototype.slice.call(arguments));
	}

	clusters(strInfrastructureID, arrClusterIDs = null, bAccessSaaSAPI = false, nAccessSaaSAPITimeoutSeconds = 10)
	{
		return this.rpc("clusters", Array.prototype.slice.call(arguments));
	}

	datacenters(strUserID = null, bOnlyActive = false)
	{
		return this.rpc("datacenters", Array.prototype.slice.call(arguments));
	}

	events_delete(strInfrastructureID, arrEventIDs)
	{
		return this.rpc("events_delete", Array.prototype.slice.call(arguments));
	}

	infrastructure_create(strUserID, objInfrastructure, strInfrastructureIDAsTemplate = null)
	{
		return this.rpc("infrastructure_create", Array.prototype.slice.call(arguments));
	}

	infrastructure_deploy(strInfrastructureID, objShutdownOptions = null, objDeployOptions = null, bAllowDataLoss = false, bSkipAnsible = false)
	{
		return this.rpc("infrastructure_deploy", Array.prototype.slice.call(arguments));
	}

	infrastructure_operation_cancel(strInfrastructureID)
	{
		return this.rpc("infrastructure_operation_cancel", Array.prototype.slice.call(arguments));
	}

	infrastructure_user_add(strInfrastructureID, strUserEmail, objInfrastructurePermissions = null, bCreateUserIfNotExists = false)
	{
		return this.rpc("infrastructure_user_add", Array.prototype.slice.call(arguments));
	}

	infrastructure_user_remove(strInfrastructureID, strUserID)
	{
		return this.rpc("infrastructure_user_remove", Array.prototype.slice.call(arguments));
	}

	infrastructure_user_update(strInfrastructureID, strUserEmail, objInfrastructurePermissions)
	{
		return this.rpc("infrastructure_user_update", Array.prototype.slice.call(arguments));
	}

	infrastructure_user_ssh_keys(strInfrastructureID)
	{
		return this.rpc("infrastructure_user_ssh_keys", Array.prototype.slice.call(arguments));
	}

	infrastructure_users(strInfrastructureID, arrUserIDs = null)
	{
		return this.rpc("infrastructure_users", Array.prototype.slice.call(arguments));
	}

	infrastructure_edit(strInfrastructureID, objInfrastructureOperation)
	{
		return this.rpc("infrastructure_edit", Array.prototype.slice.call(arguments));
	}

	infrastructure_deploy_options(strInfrastructureID, bReplaceServerTypes = false)
	{
		return this.rpc("infrastructure_deploy_options", Array.prototype.slice.call(arguments));
	}

	infrastructure_deploy_overview(strInfrastructureID, objDeployOptions = null)
	{
		return this.rpc("infrastructure_deploy_overview", Array.prototype.slice.call(arguments));
	}

	infrastructure_delete(strInfrastructureID)
	{
		return this.rpc("infrastructure_delete", Array.prototype.slice.call(arguments));
	}

	infrastructure_user_limits(strInfrastructureID)
	{
		return this.rpc("infrastructure_user_limits", Array.prototype.slice.call(arguments));
	}

	infrastructure_gui_settings_save(strInfrastructureID, objGUIProductSettings, arrPropertyNames)
	{
		return this.rpc("infrastructure_gui_settings_save", Array.prototype.slice.call(arguments));
	}

	instance_edit(strInstanceID, objInstanceOperation)
	{
		return this.rpc("instance_edit", Array.prototype.slice.call(arguments));
	}

	instance_delete(strInstanceID, bKeepDetachingDrives)
	{
		return this.rpc("instance_delete", Array.prototype.slice.call(arguments));
	}

	instance_array_instances(strInstanceArrayID, arrInstanceIDs = null)
	{
		return this.rpc("instance_array_instances", Array.prototype.slice.call(arguments));
	}

	instance_server_power_get(strInstanceID)
	{
		return this.rpc("instance_server_power_get", Array.prototype.slice.call(arguments));
	}

	instance_server_power_set(strInstanceID, strPowerCommand)
	{
		return this.rpc("instance_server_power_set", Array.prototype.slice.call(arguments));
	}

	instance_array_create(strInfrastructureID, objInstanceArray)
	{
		return this.rpc("instance_array_create", Array.prototype.slice.call(arguments));
	}

	instance_array_edit(strInstanceArrayID, objInstanceArrayOperation, bSwapExistingInstancesHardware = false, bKeepDetachingDrives = null, objServerTypeMatches = null, arrInstancesToBeDeleted = null)
	{
		return this.rpc("instance_array_edit", Array.prototype.slice.call(arguments));
	}

	instance_array_delete(strInstanceArrayID)
	{
		return this.rpc("instance_array_delete", Array.prototype.slice.call(arguments));
	}

	instance_array_stop(strInstanceArrayID)
	{
		return this.rpc("instance_array_stop", Array.prototype.slice.call(arguments));
	}

	instance_array_start(strInstanceArrayID)
	{
		return this.rpc("instance_array_start", Array.prototype.slice.call(arguments));
	}

	instance_arrays(strInfrastructureID, arrInstanceArrayIDs = null)
	{
		return this.rpc("instance_arrays", Array.prototype.slice.call(arguments));
	}

	instance_array_interface_attach_network(strInstanceArrayID, nInstanceArrayInterfaceIndex, strNetworkID)
	{
		return this.rpc("instance_array_interface_attach_network", Array.prototype.slice.call(arguments));
	}

	instance_array_interface_detach(strInstanceArrayID, nInstanceArrayInterfaceIndex)
	{
		return this.rpc("instance_array_interface_detach", Array.prototype.slice.call(arguments));
	}

	subnet_create(strNetworkID, objSubnet)
	{
		return this.rpc("subnet_create", Array.prototype.slice.call(arguments));
	}

	subnet_delete(strSubnetID)
	{
		return this.rpc("subnet_delete", Array.prototype.slice.call(arguments));
	}

	subnets(strNetworkID, arrSubnetIDs = null)
	{
		return this.rpc("subnets", Array.prototype.slice.call(arguments));
	}

	data_lake_create(strInfrastructureID, objDataLake)
	{
		return this.rpc("data_lake_create", Array.prototype.slice.call(arguments));
	}

	data_lake_get(strDataLakeID)
	{
		return this.rpc("data_lake_get", Array.prototype.slice.call(arguments));
	}

	data_lake_edit(strDataLakeID, objDataLakeOperation)
	{
		return this.rpc("data_lake_edit", Array.prototype.slice.call(arguments));
	}

	data_lake_stop(strDataLakeID)
	{
		return this.rpc("data_lake_stop", Array.prototype.slice.call(arguments));
	}

	data_lake_start(strDataLakeID)
	{
		return this.rpc("data_lake_start", Array.prototype.slice.call(arguments));
	}

	data_lake_delete(strDataLakeID)
	{
		return this.rpc("data_lake_delete", Array.prototype.slice.call(arguments));
	}

	data_lakes(strInfrastructureID, arrDataLakeIDs = null)
	{
		return this.rpc("data_lakes", Array.prototype.slice.call(arguments));
	}

	data_lake_krb_conf_download_url()
	{
		return this.rpc("data_lake_krb_conf_download_url", Array.prototype.slice.call(arguments));
	}

	network_create(strInfrastructureID, objNetwork)
	{
		return this.rpc("network_create", Array.prototype.slice.call(arguments));
	}

	network_edit(strNetworkID, objNetworkOperation)
	{
		return this.rpc("network_edit", Array.prototype.slice.call(arguments));
	}

	network_delete(strNetworkID)
	{
		return this.rpc("network_delete", Array.prototype.slice.call(arguments));
	}

	network_stop(strNetworkID)
	{
		return this.rpc("network_stop", Array.prototype.slice.call(arguments));
	}

	network_start(strNetworkID)
	{
		return this.rpc("network_start", Array.prototype.slice.call(arguments));
	}

	networks(strInfrastructureID, arrNetworkIDs = null)
	{
		return this.rpc("networks", Array.prototype.slice.call(arguments));
	}

	network_join(strNetworkID, strNetworkToBeDeletedID)
	{
		return this.rpc("network_join", Array.prototype.slice.call(arguments));
	}

	resource_utilization_summary(strUserIDOwner, strStartTimestamp, strEndTimestamp, arrInfrastructureIDs = null)
	{
		return this.rpc("resource_utilization_summary", Array.prototype.slice.call(arguments));
	}

	resource_utilization_detailed(strUserIDOwner, strStartTimestamp, strEndTimestamp, arrInfrastructureIDs = null)
	{
		return this.rpc("resource_utilization_detailed", Array.prototype.slice.call(arguments));
	}

	server_type_reservation_create(strUserID, objReservation)
	{
		return this.rpc("server_type_reservation_create", Array.prototype.slice.call(arguments));
	}

	server_type_reservation_get(nServerTypeReservationID)
	{
		return this.rpc("server_type_reservation_get", Array.prototype.slice.call(arguments));
	}

	server_type_reservation_edit(nServerTypeReservationID, objServerTypeReservation)
	{
		return this.rpc("server_type_reservation_edit", Array.prototype.slice.call(arguments));
	}

	user_server_type_reservations(strUserID)
	{
		return this.rpc("user_server_type_reservations", Array.prototype.slice.call(arguments));
	}

	instance_server_power_set_batch(strInfrastructureID, arrInstanceIDs, strPowerCommand)
	{
		return this.rpc("instance_server_power_set_batch", Array.prototype.slice.call(arguments));
	}

	instance_server_power_get_batch(strInfrastructureID, arrInstanceIDs)
	{
		return this.rpc("instance_server_power_get_batch", Array.prototype.slice.call(arguments));
	}

	infrastructure_deploy_shutdown_required(strInfrastructureID, strPowerCommand = "none", bOnlyPoweredOn = true)
	{
		return this.rpc("infrastructure_deploy_shutdown_required", Array.prototype.slice.call(arguments));
	}

	server_types(strDatacenterName = null)
	{
		return this.rpc("server_types", Array.prototype.slice.call(arguments));
	}

	server_type_matches(strInfrastructureID, objHardwareConfiguration, strInstanceArrayID = null, bAllowServerSwap = false)
	{
		return this.rpc("server_type_matches", Array.prototype.slice.call(arguments));
	}

	shared_drive_create(strInfrastructureID, objSharedDrive)
	{
		return this.rpc("shared_drive_create", Array.prototype.slice.call(arguments));
	}

	shared_drive_edit(strSharedDriveID, objSharedDriveOperation)
	{
		return this.rpc("shared_drive_edit", Array.prototype.slice.call(arguments));
	}

	shared_drive_delete(strSharedDriveID)
	{
		return this.rpc("shared_drive_delete", Array.prototype.slice.call(arguments));
	}

	shared_drive_stop(strSharedDriveID)
	{
		return this.rpc("shared_drive_stop", Array.prototype.slice.call(arguments));
	}

	shared_drive_start(strSharedDriveID)
	{
		return this.rpc("shared_drive_start", Array.prototype.slice.call(arguments));
	}

	shared_drive_instance_arrays(strSharedDriveID)
	{
		return this.rpc("shared_drive_instance_arrays", Array.prototype.slice.call(arguments));
	}

	instance_array_shared_drives(strInstanceArrayID)
	{
		return this.rpc("instance_array_shared_drives", Array.prototype.slice.call(arguments));
	}

	shared_drives(strInfrastructureID, arrSharedDriveIDs = null)
	{
		return this.rpc("shared_drives", Array.prototype.slice.call(arguments));
	}

	search(strUserID, strKeywords, arrTables = null, objTablesColumns = null, strCollapseType = "array_subrows", arrOrderBy = [], arrLimit = null)
	{
		return this.rpc("search", Array.prototype.slice.call(arguments));
	}

	query(strUserID, strSQLQuery, strCollapseType = "array_subrows")
	{
		return this.rpc("query", Array.prototype.slice.call(arguments));
	}

	drive_edit(strDriveID, objDriveOperation)
	{
		return this.rpc("drive_edit", Array.prototype.slice.call(arguments));
	}

	drive_delete(strDriveID)
	{
		return this.rpc("drive_delete", Array.prototype.slice.call(arguments));
	}

	drive_attach_instance(strDriveID, strInstanceID)
	{
		return this.rpc("drive_attach_instance", Array.prototype.slice.call(arguments));
	}

	drive_detach_instance(strDriveID)
	{
		return this.rpc("drive_detach_instance", Array.prototype.slice.call(arguments));
	}

	drive_snapshot_create(strDriveID)
	{
		return this.rpc("drive_snapshot_create", Array.prototype.slice.call(arguments));
	}

	drive_snapshot_rollback(strSnapshotID)
	{
		return this.rpc("drive_snapshot_rollback", Array.prototype.slice.call(arguments));
	}

	drive_snapshot_delete(strSnapshotID)
	{
		return this.rpc("drive_snapshot_delete", Array.prototype.slice.call(arguments));
	}

	drive_snapshots(strDriveID, arrSnapshotIDs = null)
	{
		return this.rpc("drive_snapshots", Array.prototype.slice.call(arguments));
	}

	volume_templates_public(arrVolumeTemplateIDs = null)
	{
		return this.rpc("volume_templates_public", Array.prototype.slice.call(arguments));
	}

	drive_array_create(strInfrastructureID, objDriveArray)
	{
		return this.rpc("drive_array_create", Array.prototype.slice.call(arguments));
	}

	drive_array_edit(strDriveArrayID, objDriveArrayOperation, objDriveArrayEditOptions = {"update_active_drives_size":false})
	{
		return this.rpc("drive_array_edit", Array.prototype.slice.call(arguments));
	}

	drive_array_delete(strDriveArrayID)
	{
		return this.rpc("drive_array_delete", Array.prototype.slice.call(arguments));
	}

	drive_array_stop(strDriveArrayID)
	{
		return this.rpc("drive_array_stop", Array.prototype.slice.call(arguments));
	}

	drive_array_start(strDriveArrayID)
	{
		return this.rpc("drive_array_start", Array.prototype.slice.call(arguments));
	}

	drive_array_drives(strDriveArrayID, arrDriveIDs = null)
	{
		return this.rpc("drive_array_drives", Array.prototype.slice.call(arguments));
	}

	drive_arrays(strInfrastructureID, arrDriveArrayIDs = null)
	{
		return this.rpc("drive_arrays", Array.prototype.slice.call(arguments));
	}

	user_create(strDisplayName, strLoginEmail, strRedirectURL = null, strAESKey = null)
	{
		return this.rpc("user_create", Array.prototype.slice.call(arguments));
	}

	user_get(strUserID)
	{
		return this.rpc("user_get", Array.prototype.slice.call(arguments));
	}

	infrastructures(strUserID, arrInfrastructureIDs = null)
	{
		return this.rpc("infrastructures", Array.prototype.slice.call(arguments));
	}

	user_authenticate_password(strLoginEmail, strPassword, strOneTimePassword = null, bRememberLogin = false, bTestCredentials = false, bRenewKerberosTicket = false)
	{
		return this.rpc("user_authenticate_password", Array.prototype.slice.call(arguments));
	}

	user_authenticate_api_key(strUserID, strAPIKey, strOneTimePassword = null, bRememberLogin = false)
	{
		return this.rpc("user_authenticate_api_key", Array.prototype.slice.call(arguments));
	}

	user_change_password(strUserID, strNewPassword, strOldPassword = null)
	{
		return this.rpc("user_change_password", Array.prototype.slice.call(arguments));
	}

	user_infrastructure_default_set(strUserID, strInfrastructureID)
	{
		return this.rpc("user_infrastructure_default_set", Array.prototype.slice.call(arguments));
	}

	user_infrastructure_default_unset(strUserID)
	{
		return this.rpc("user_infrastructure_default_unset", Array.prototype.slice.call(arguments));
	}

	user_ssh_key_create(strUserID, strSSHKey)
	{
		return this.rpc("user_ssh_key_create", Array.prototype.slice.call(arguments));
	}

	user_ssh_keys(strUserID)
	{
		return this.rpc("user_ssh_keys", Array.prototype.slice.call(arguments));
	}

	user_ssh_key_delete(nSSHKeyID)
	{
		return this.rpc("user_ssh_key_delete", Array.prototype.slice.call(arguments));
	}

	user_api_key_regenerate(strUserID)
	{
		return this.rpc("user_api_key_regenerate", Array.prototype.slice.call(arguments));
	}

	user_password_recovery(strLoginEmail, strRedirectURL = null, strAESKey = null)
	{
		return this.rpc("user_password_recovery", Array.prototype.slice.call(arguments));
	}

	user_create_retry_mail(strLoginEmail, strRedirectURL = null, strAESKey = null)
	{
		return this.rpc("user_create_retry_mail", Array.prototype.slice.call(arguments));
	}

	user_update_email(strUserID, strNewLoginEmail, strRedirectURL = null, strAESKey = null)
	{
		return this.rpc("user_update_email", Array.prototype.slice.call(arguments));
	}

	user_update_language(strUserID, strLanguage)
	{
		return this.rpc("user_update_language", Array.prototype.slice.call(arguments));
	}

	user_delegate_add(strUserID, strDelegateUserEmail, bCreateUserIfNotExists = false)
	{
		return this.rpc("user_delegate_add", Array.prototype.slice.call(arguments));
	}

	user_delegate_remove(strUserID, strDelegateUserEmail)
	{
		return this.rpc("user_delegate_remove", Array.prototype.slice.call(arguments));
	}

	user_delegate_children(strUserID)
	{
		return this.rpc("user_delegate_children", Array.prototype.slice.call(arguments));
	}

	user_delegate_parents(strUserID)
	{
		return this.rpc("user_delegate_parents", Array.prototype.slice.call(arguments));
	}

	user_cookie_session(bFetchUserLoginSessionData = false)
	{
		return this.rpc("user_cookie_session", Array.prototype.slice.call(arguments));
	}

	user_logout()
	{
		return this.rpc("user_logout", Array.prototype.slice.call(arguments));
	}

	user_gui_settings_save(strUserID, objGUIUserSettings, arrPropertyNames)
	{
		return this.rpc("user_gui_settings_save", Array.prototype.slice.call(arguments));
	}

	throw_error(nErrorCode)
	{
		return this.rpc("throw_error", Array.prototype.slice.call(arguments));
	}

	cluster_gui_settings_save(strClusterID, objGUIProductSettings, arrPropertyNames)
	{
		return this.rpc("cluster_gui_settings_save", Array.prototype.slice.call(arguments));
	}

	event_counters(strInfrastructureID)
	{
		return this.rpc("event_counters", Array.prototype.slice.call(arguments));
	}

	infrastructure_get(strInfrastructureID)
	{
		return this.rpc("infrastructure_get", Array.prototype.slice.call(arguments));
	}

	infrastructure_hang_until_touched(nInfrastructureID, strKnownValue)
	{
		return this.rpc("infrastructure_hang_until_touched", Array.prototype.slice.call(arguments));
	}

	instance_interface_ips(nInstanceInterfaceID)
	{
		return this.rpc("instance_interface_ips", Array.prototype.slice.call(arguments));
	}

	instance_get(strInstanceID)
	{
		return this.rpc("instance_get", Array.prototype.slice.call(arguments));
	}

	instance_array_get(strInstanceArrayID)
	{
		return this.rpc("instance_array_get", Array.prototype.slice.call(arguments));
	}

	instance_array_gui_settings_save(strInstanceArrayID, objGUIProductSettings, arrPropertyNames)
	{
		return this.rpc("instance_array_gui_settings_save", Array.prototype.slice.call(arguments));
	}

	subnet_get(strSubnetID)
	{
		return this.rpc("subnet_get", Array.prototype.slice.call(arguments));
	}

	data_lake_gui_settings_save(strDataLakeID, objGUIProductSettings, arrPropertyNames)
	{
		return this.rpc("data_lake_gui_settings_save", Array.prototype.slice.call(arguments));
	}

	monitoring_instance_measurement_value_get(nInstanceMeasurementID)
	{
		return this.rpc("monitoring_instance_measurement_value_get", Array.prototype.slice.call(arguments));
	}

	monitoring_instance_measurements_get_for_instance(nInstanceID, bIgnoreVirtualEthernetInterfaces = false)
	{
		return this.rpc("monitoring_instance_measurements_get_for_instance", Array.prototype.slice.call(arguments));
	}

	monitoring_instance_measurements_rendering_get(nInstanceID, arrMeasurements, objRenderingOptions = [], bEncodeBase64 = true)
	{
		return this.rpc("monitoring_instance_measurements_rendering_get", Array.prototype.slice.call(arguments));
	}

	monitoring_instance_interface_measurements_rendering_get(nInstanceInterfaceID, arrMeasurements, objRenderingOptions = [], bEncodeBase64 = true)
	{
		return this.rpc("monitoring_instance_interface_measurements_rendering_get", Array.prototype.slice.call(arguments));
	}

	monitoring_network_measurements_rendering_get(nNetworkID, strNetworkTrafficType, arrMeasurements, objRenderingOptions = [], bEncodeBase64 = true)
	{
		return this.rpc("monitoring_network_measurements_rendering_get", Array.prototype.slice.call(arguments));
	}

	network_get(strNetworkID)
	{
		return this.rpc("network_get", Array.prototype.slice.call(arguments));
	}

	network_gui_settings_save(strNetworkID, objGUIProductSettings, arrPropertyNames)
	{
		return this.rpc("network_gui_settings_save", Array.prototype.slice.call(arguments));
	}

	server_type_get(strServerTypeID)
	{
		return this.rpc("server_type_get", Array.prototype.slice.call(arguments));
	}

	server_type_available_server_count(strUserIDOwner, strDatacenterName, nServerTypeID, nMaximumResults)
	{
		return this.rpc("server_type_available_server_count", Array.prototype.slice.call(arguments));
	}

	shared_drive_get(strSharedDriveID)
	{
		return this.rpc("shared_drive_get", Array.prototype.slice.call(arguments));
	}

	shared_drive_gui_settings_save(strSharedDriveID, objGUIProductSettings, arrPropertyNames)
	{
		return this.rpc("shared_drive_gui_settings_save", Array.prototype.slice.call(arguments));
	}

	drive_get(strDriveID)
	{
		return this.rpc("drive_get", Array.prototype.slice.call(arguments));
	}

	drive_array_get(strDriveArrayID)
	{
		return this.rpc("drive_array_get", Array.prototype.slice.call(arguments));
	}

	drive_array_gui_settings_save(strDriveArrayID, objGUIProductSettings, arrPropertyNames)
	{
		return this.rpc("drive_array_gui_settings_save", Array.prototype.slice.call(arguments));
	}

	volume_template_get(strVolumeTemplateID)
	{
		return this.rpc("volume_template_get", Array.prototype.slice.call(arguments));
	}

	user_change_password_encrypted(strUserID, strAESCipherPassword, strRSACipherAESKey, strOldPassword = null)
	{
		return this.rpc("user_change_password_encrypted", Array.prototype.slice.call(arguments));
	}

	user_authenticate_password_encrypted(strLoginEmail, strAESCipherPassword, strRSACipherAESKey, strOneTimePassword = null, bRememberLogin = false, bTestCredentials = false, bRenewKerberosTicket = false)
	{
		return this.rpc("user_authenticate_password_encrypted", Array.prototype.slice.call(arguments));
	}

	transport_request_public_key(bGenerateNewIfNotFound = true)
	{
		return this.rpc("transport_request_public_key", Array.prototype.slice.call(arguments));
	}

	user_email_to_user_id(strLoginEmail)
	{
		return this.rpc("user_email_to_user_id", Array.prototype.slice.call(arguments));
	}

	instance_drives(strInstanceID)
	{
		return this.rpc("instance_drives", Array.prototype.slice.call(arguments));
	}

	infrastructure_deploy_blockers(strInfrastructureID)
	{
		return this.rpc("infrastructure_deploy_blockers", Array.prototype.slice.call(arguments));
	}

	cluster_suspend(strClusterID)
	{
		return this.rpc("cluster_suspend", Array.prototype.slice.call(arguments));
	}

	user_suspend_reasons(nUserID)
	{
		return this.rpc("user_suspend_reasons", Array.prototype.slice.call(arguments));
	}

	volume_templates_private(strUserID, arrVolumeTemplateIDs = null)
	{
		return this.rpc("volume_templates_private", Array.prototype.slice.call(arguments));
	}

	volume_templates(strUserID, arrVolumeTemplateIDs = null)
	{
		return this.rpc("volume_templates", Array.prototype.slice.call(arguments));
	}

	container_array_create(strInfrastructureID, objContainerArray)
	{
		return this.rpc("container_array_create", Array.prototype.slice.call(arguments));
	}

	container_array_get(strContainerArrayID)
	{
		return this.rpc("container_array_get", Array.prototype.slice.call(arguments));
	}

	container_array_edit(strContainerArrayID, objContainerArrayOperation)
	{
		return this.rpc("container_array_edit", Array.prototype.slice.call(arguments));
	}

	container_array_delete(strContainerArrayID)
	{
		return this.rpc("container_array_delete", Array.prototype.slice.call(arguments));
	}

	container_array_stop(strContainerArrayID)
	{
		return this.rpc("container_array_stop", Array.prototype.slice.call(arguments));
	}

	container_array_start(strContainerArrayID)
	{
		return this.rpc("container_array_start", Array.prototype.slice.call(arguments));
	}

	container_arrays(strInfrastructureID, arrContainerArrayIDs = null)
	{
		return this.rpc("container_arrays", Array.prototype.slice.call(arguments));
	}

	container_platform_create(strInfrastructureID, objContainerPlatform)
	{
		return this.rpc("container_platform_create", Array.prototype.slice.call(arguments));
	}

	container_platform_get(strContainerPlatformID)
	{
		return this.rpc("container_platform_get", Array.prototype.slice.call(arguments));
	}

	container_platform_edit(strContainerPlatformID, objContainerPlatformOperation, objServerTypeMatches = null)
	{
		return this.rpc("container_platform_edit", Array.prototype.slice.call(arguments));
	}

	container_platform_stop(strContainerPlatformID)
	{
		return this.rpc("container_platform_stop", Array.prototype.slice.call(arguments));
	}

	container_platform_start(strContainerPlatformID)
	{
		return this.rpc("container_platform_start", Array.prototype.slice.call(arguments));
	}

	container_platform_delete(strContainerPlatformID)
	{
		return this.rpc("container_platform_delete", Array.prototype.slice.call(arguments));
	}

	container_platforms(strInfrastructureID, arrContainerPlatformIDs = null)
	{
		return this.rpc("container_platforms", Array.prototype.slice.call(arguments));
	}

	container_platform_suspend(strContainerPlatformID)
	{
		return this.rpc("container_platform_suspend", Array.prototype.slice.call(arguments));
	}

	container_array_gui_settings_save(strContainerArrayID, objGUIProductSettings, arrPropertyNames)
	{
		return this.rpc("container_array_gui_settings_save", Array.prototype.slice.call(arguments));
	}

	container_platform_gui_settings_save(strContainerPlatformID, objGUIProductSettings, arrPropertyNames)
	{
		return this.rpc("container_platform_gui_settings_save", Array.prototype.slice.call(arguments));
	}

	container_platform_container_arrays(strContainerPlatformID, arrContainerArrayIDs = null)
	{
		return this.rpc("container_platform_container_arrays", Array.prototype.slice.call(arguments));
	}

	container_array_containers(strContainerArrayID, arrContainerLabels = null, bReturnFinishedContainers = true)
	{
		return this.rpc("container_array_containers", Array.prototype.slice.call(arguments));
	}

	container_array_containers_kill(strContainerArrayID, arrContainerLabels = null)
	{
		return this.rpc("container_array_containers_kill", Array.prototype.slice.call(arguments));
	}

	cluster_password_change(strClusterID, strNewPassword)
	{
		return this.rpc("cluster_password_change", Array.prototype.slice.call(arguments));
	}

	cluster_public_key_get(strClusterID)
	{
		return this.rpc("cluster_public_key_get", Array.prototype.slice.call(arguments));
	}

	container_platform_information(strContainerPlatformID)
	{
		return this.rpc("container_platform_information", Array.prototype.slice.call(arguments));
	}

	drive_snapshot_get(strSnapshotID)
	{
		return this.rpc("drive_snapshot_get", Array.prototype.slice.call(arguments));
	}

	container_array_completed_task_log(strContainerArrayID, strContainerLabel, strFileName, nReadLength)
	{
		return this.rpc("container_array_completed_task_log", Array.prototype.slice.call(arguments));
	}

	instance_public_key_get(strInstanceID)
	{
		return this.rpc("instance_public_key_get", Array.prototype.slice.call(arguments));
	}

	client_ip()
	{
		return this.rpc("client_ip", Array.prototype.slice.call(arguments));
	}

	query_parse(strSQL)
	{
		return this.rpc("query_parse", Array.prototype.slice.call(arguments));
	}

	query_structured(strUserID, strTableName, objQueryConditions, strCollapseType = "array_subrows")
	{
		return this.rpc("query_structured", Array.prototype.slice.call(arguments));
	}

	resource_utilization_summary_start_timestamp_default(strUserID)
	{
		return this.rpc("resource_utilization_summary_start_timestamp_default", Array.prototype.slice.call(arguments));
	}

	cluster_automatic_management_status_set(strClusterID, bStatus)
	{
		return this.rpc("cluster_automatic_management_status_set", Array.prototype.slice.call(arguments));
	}

	infrastructure_design_lock_set(strInfrastructureID, bLockStatus)
	{
		return this.rpc("infrastructure_design_lock_set", Array.prototype.slice.call(arguments));
	}

	instance_server_type_reservation_create(strInstanceID, bRecurring, nReservationCycleMonths, nInstallmentCycleMonths)
	{
		return this.rpc("instance_server_type_reservation_create", Array.prototype.slice.call(arguments));
	}

	prices()
	{
		return this.rpc("prices", Array.prototype.slice.call(arguments));
	}

	server_types_match_hardware_configuration(strDatacenterName, objHardwareConfiguration)
	{
		return this.rpc("server_types_match_hardware_configuration", Array.prototype.slice.call(arguments));
	}

	infrastructure_public_designs()
	{
		return this.rpc("infrastructure_public_designs", Array.prototype.slice.call(arguments));
	}

	server_type_available_server_count_batch(strUserIDOwner, strDatacenterName, arrServerTypeIDs, nMaximumResults, bIncludeReservedForUser = false, nInstanceArrayID = null)
	{
		return this.rpc("server_type_available_server_count_batch", Array.prototype.slice.call(arguments));
	}

	user_server_type_reservations_unused(strUserID, strDatacenterName)
	{
		return this.rpc("user_server_type_reservations_unused", Array.prototype.slice.call(arguments));
	}

	shared_drive_container_arrays(strSharedDriveID)
	{
		return this.rpc("shared_drive_container_arrays", Array.prototype.slice.call(arguments));
	}

	user_franchise_get(strUserID)
	{
		return this.rpc("user_franchise_get", Array.prototype.slice.call(arguments));
	}

	subnet_create_from_owned_subnet_pool(strNetworkID, objSubnet)
	{
		return this.rpc("subnet_create_from_owned_subnet_pool", Array.prototype.slice.call(arguments));
	}

	container_platform_hosts_cleanup(strContainerPlatformID)
	{
		return this.rpc("container_platform_hosts_cleanup", Array.prototype.slice.call(arguments));
	}

	user_authenticator_has(strUserID)
	{
		return this.rpc("user_authenticator_has", Array.prototype.slice.call(arguments));
	}

	server_types_datacenter(strDatacenterName)
	{
		return this.rpc("server_types_datacenter", Array.prototype.slice.call(arguments));
	}

	prices_history(bExcludeFuturePrices = false, bOnlyActivePrices = false)
	{
		return this.rpc("prices_history", Array.prototype.slice.call(arguments));
	}

	container_cluster_create(strInfrastructureID, objContainerCluster)
	{
		return this.rpc("container_cluster_create", Array.prototype.slice.call(arguments));
	}

	container_cluster_get(strContainerClusterID, bAccessSaaSAPI = true, nAccessSaaSAPITimeoutSeconds = 10)
	{
		return this.rpc("container_cluster_get", Array.prototype.slice.call(arguments));
	}

	container_cluster_edit(strContainerClusterID, objContainerClusterOperation)
	{
		return this.rpc("container_cluster_edit", Array.prototype.slice.call(arguments));
	}

	container_cluster_stop(strContainerClusterID)
	{
		return this.rpc("container_cluster_stop", Array.prototype.slice.call(arguments));
	}

	container_cluster_start(strContainerClusterID)
	{
		return this.rpc("container_cluster_start", Array.prototype.slice.call(arguments));
	}

	container_cluster_delete(strContainerClusterID)
	{
		return this.rpc("container_cluster_delete", Array.prototype.slice.call(arguments));
	}

	container_clusters(strInfrastructureID, arrContainerClusterIDs = null)
	{
		return this.rpc("container_clusters", Array.prototype.slice.call(arguments));
	}

	container_cluster_suspend(strContainerClusterID)
	{
		return this.rpc("container_cluster_suspend", Array.prototype.slice.call(arguments));
	}

	container_cluster_automatic_management_status_set(strContainerClusterID, bStatus)
	{
		return this.rpc("container_cluster_automatic_management_status_set", Array.prototype.slice.call(arguments));
	}

	container_cluster_gui_settings_save(strContainerClusterID, objGUIProductSettings, arrPropertyNames)
	{
		return this.rpc("container_cluster_gui_settings_save", Array.prototype.slice.call(arguments));
	}

	user_prices_history(strUserID, bExcludeFuturePrices = false, bOnlyActivePrices = false)
	{
		return this.rpc("user_prices_history", Array.prototype.slice.call(arguments));
	}

	user_prices(strUserID)
	{
		return this.rpc("user_prices", Array.prototype.slice.call(arguments));
	}

	fs_create(strFSURL, strType, strPermission = null)
	{
		return this.rpc("fs_create", Array.prototype.slice.call(arguments));
	}

	fs_delete(strFSURL, bRecursive = false)
	{
		return this.rpc("fs_delete", Array.prototype.slice.call(arguments));
	}

	fs_info(strFSURL)
	{
		return this.rpc("fs_info", Array.prototype.slice.call(arguments));
	}

	fs_list(strFSURL)
	{
		return this.rpc("fs_list", Array.prototype.slice.call(arguments));
	}

	fs_move(strFSURL, strPathNew)
	{
		return this.rpc("fs_move", Array.prototype.slice.call(arguments));
	}

	fs_owner_set(strFSURL, strOwner)
	{
		return this.rpc("fs_owner_set", Array.prototype.slice.call(arguments));
	}

	fs_read(strFSURL, strEncoding, nOffset, nLength)
	{
		return this.rpc("fs_read", Array.prototype.slice.call(arguments));
	}

	fs_rename(strFSURL, strFilenameNew)
	{
		return this.rpc("fs_rename", Array.prototype.slice.call(arguments));
	}

	fs_truncate(strFSURL, nLengthNew = 0)
	{
		return this.rpc("fs_truncate", Array.prototype.slice.call(arguments));
	}

	fs_write(strFSURL, strContents, strEncoding, nOffset = null, bTruncate = true)
	{
		return this.rpc("fs_write", Array.prototype.slice.call(arguments));
	}

	fs_download_url(strFSURL)
	{
		return this.rpc("fs_download_url", Array.prototype.slice.call(arguments));
	}

	fs_upload_url(strFSURL)
	{
		return this.rpc("fs_upload_url", Array.prototype.slice.call(arguments));
	}

	user_limits(strUserID)
	{
		return this.rpc("user_limits", Array.prototype.slice.call(arguments));
	}

	instance_monitoring_data_get(nInstanceID, nGranularityMinutes = 1, strTimestampStart = null, strTimestampEnd = null)
	{
		return this.rpc("instance_monitoring_data_get", Array.prototype.slice.call(arguments));
	}

	instance_array_monitoring_data_get(nInstanceArrayID, nGranularityMinutes = 1, strTimestampStart = null, strTimestampEnd = null)
	{
		return this.rpc("instance_array_monitoring_data_get", Array.prototype.slice.call(arguments));
	}

	container_platform_monitoring_data_get(nContainerPlatformID, nGranularityMinutes = 1, strTimestampStart = null, strTimestampEnd = null)
	{
		return this.rpc("container_platform_monitoring_data_get", Array.prototype.slice.call(arguments));
	}

	license_type_for_volume_template(strVolumeTemplateID)
	{
		return this.rpc("license_type_for_volume_template", Array.prototype.slice.call(arguments));
	}

	data_lake_core_site_conf_download_url(strUserID, nDataLakeID)
	{
		return this.rpc("data_lake_core_site_conf_download_url", Array.prototype.slice.call(arguments));
	}

	secure_gateway_authorize_resource(strResourceUrl)
	{
		return this.rpc("secure_gateway_authorize_resource", Array.prototype.slice.call(arguments));
	}


}

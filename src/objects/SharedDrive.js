const ObjectBase = require('./ObjectBase');

/**
 * A SharedDrive is a storage device mounted via iSCSI that is accessible to
 * multiple instance arrays.
 *
 * @class
 * @extends ObjectBase
 */
module.exports = 
class SharedDrive extends ObjectBase
{
	constructor()
	{
		super();

		const arrPropertyNames = Object.getOwnPropertyNames(Object.getPrototypeOf(this));
		arrPropertyNames.shift();

		for(let strProperty in arrPropertyNames)
		{
			if(arrPropertyNames.hasOwnProperty(strProperty))
			{
				const strPropertyProtected = "_" + arrPropertyNames[strProperty];
				this[strPropertyProtected] = this[arrPropertyNames[strProperty]];
			}
		}
	}

	/**
	 * The SharedDrive's label which is unique and it is used to form the
	 * shared_drive_subdomain. It is editable and can be used to call API functions.
	 */
	get shared_drive_label()
	{
		return (this._shared_drive_label !== undefined ? this._shared_drive_label : null);
	}

	set shared_drive_label(shared_drive_label)
	{
		this._shared_drive_label = shared_drive_label;
	}

	/**
	 * Automatically created based on shared_drive_label. It is a unique reference
	 * to the SharedDrive object.
	 */
	get shared_drive_subdomain()
	{
		return (this._shared_drive_subdomain !== undefined ? this._shared_drive_subdomain : null);
	}

	set shared_drive_subdomain(shared_drive_subdomain)
	{
		this._shared_drive_subdomain = shared_drive_subdomain;
	}

	/**
	 * The ID of the SharedDrive which can be used instead of the
	 * shared_drive_label or shared_drive_subdomain when calling the API functions.
	 * It is automatically generated and cannot be edited.
	 */
	get shared_drive_id()
	{
		return (this._shared_drive_id !== undefined ? this._shared_drive_id : null);
	}

	set shared_drive_id(shared_drive_id)
	{
		this._shared_drive_id = shared_drive_id;
	}

	/**
	 * Represents the capacity of the SharedDrive.
	 */
	get shared_drive_size_mbytes()
	{
		return (this._shared_drive_size_mbytes !== undefined ? this._shared_drive_size_mbytes : 2048);
	}

	set shared_drive_size_mbytes(shared_drive_size_mbytes)
	{
		this._shared_drive_size_mbytes = shared_drive_size_mbytes;
	}

	/**
	 * The storage type of the SharedDrive.
	 */
	get shared_drive_storage_type()
	{
		return (this._shared_drive_storage_type !== undefined ? this._shared_drive_storage_type : null);
	}

	set shared_drive_storage_type(shared_drive_storage_type)
	{
		this._shared_drive_storage_type = shared_drive_storage_type;
	}

	/**
	 * This feature is no longer available. The flag is ignored. Indicates if the
	 * instances attached to this SharedDrive will have GFS installed and that they
	 * will mount this SharedDrive (only supported for Centos 7.x).
	 */
	get shared_drive_has_gfs()
	{
		return (this._shared_drive_has_gfs !== undefined ? this._shared_drive_has_gfs : false);
	}

	set shared_drive_has_gfs(shared_drive_has_gfs)
	{
		this._shared_drive_has_gfs = shared_drive_has_gfs;
	}

	/**
	 * Represents the infrastructure ID to which the SharedDrive belongs.
	 */
	get infrastructure_id()
	{
		return (this._infrastructure_id !== undefined ? this._infrastructure_id : null);
	}

	set infrastructure_id(infrastructure_id)
	{
		this._infrastructure_id = infrastructure_id;
	}

	/**
	 * It shows the status of the SharedDrive.
	 */
	get shared_drive_service_status()
	{
		return (this._shared_drive_service_status !== undefined ? this._shared_drive_service_status : null);
	}

	set shared_drive_service_status(shared_drive_service_status)
	{
		this._shared_drive_service_status = shared_drive_service_status;
	}

	/**
	 * ISO 8601 timestamp which holds the date and time when the SharedDrive was
	 * created. Example format: 2013-11-29T13:00:01Z.
	 */
	get shared_drive_created_timestamp()
	{
		return (this._shared_drive_created_timestamp !== undefined ? this._shared_drive_created_timestamp : "0000-00-00T00:00:00Z");
	}

	set shared_drive_created_timestamp(shared_drive_created_timestamp)
	{
		this._shared_drive_created_timestamp = shared_drive_created_timestamp;
	}

	/**
	 * ISO 8601 timestamp which holds the date and time when the SharedDrive was
	 * edited. Example format: 2013-11-29T13:00:01Z.
	 */
	get shared_drive_updated_timestamp()
	{
		return (this._shared_drive_updated_timestamp !== undefined ? this._shared_drive_updated_timestamp : "0000-00-00T00:00:00Z");
	}

	set shared_drive_updated_timestamp(shared_drive_updated_timestamp)
	{
		this._shared_drive_updated_timestamp = shared_drive_updated_timestamp;
	}

	/**
	 * The operation type, operation status and modified SharedDrive object.
	 */
	get shared_drive_operation()
	{
		return (this._shared_drive_operation !== undefined ? this._shared_drive_operation : null);
	}

	set shared_drive_operation(shared_drive_operation)
	{
		this._shared_drive_operation = shared_drive_operation;
	}

	/**
	 * Reserved for GUI users.
	 */
	get shared_drive_gui_settings_json()
	{
		return (this._shared_drive_gui_settings_json !== undefined ? this._shared_drive_gui_settings_json : "");
	}

	set shared_drive_gui_settings_json(shared_drive_gui_settings_json)
	{
		this._shared_drive_gui_settings_json = shared_drive_gui_settings_json;
	}

	/**
	 *
	 */
	get shared_drive_credentials()
	{
		return (this._shared_drive_credentials !== undefined ? this._shared_drive_credentials : null);
	}

	set shared_drive_credentials(shared_drive_credentials)
	{
		this._shared_drive_credentials = shared_drive_credentials;
	}

	/**
	 * This property helps ensure that edit operations don’t overwrite other,
	 * more recent changes made to the same object. It gets updated automatically
	 * after each successful edit operation.
	 */
	get shared_drive_change_id()
	{
		return (this._shared_drive_change_id !== undefined ? this._shared_drive_change_id : null);
	}

	set shared_drive_change_id(shared_drive_change_id)
	{
		this._shared_drive_change_id = shared_drive_change_id;
	}

	/**
	 * Contains the attached InstanceArray IDs.
	 */
	get shared_drive_attached_instance_arrays()
	{
		return (this._shared_drive_attached_instance_arrays !== undefined ? this._shared_drive_attached_instance_arrays : []);
	}

	set shared_drive_attached_instance_arrays(shared_drive_attached_instance_arrays)
	{
		this._shared_drive_attached_instance_arrays = shared_drive_attached_instance_arrays;
	}

	/**
	 * Contains the attached ContainerArray IDs.
	 */
	get shared_drive_attached_container_arrays()
	{
		return (this._shared_drive_attached_container_arrays !== undefined ? this._shared_drive_attached_container_arrays : []);
	}

	set shared_drive_attached_container_arrays(shared_drive_attached_container_arrays)
	{
		this._shared_drive_attached_container_arrays = shared_drive_attached_container_arrays;
	}

	/**
	 * The schema type.
	 */
	get type()
	{
		return (this._type !== undefined ? this._type : null);
	}

	set type(type)
	{
		this._type = type;
	}

	/**
	 * The required JSON fields for deserialization.
	 *
	 * @returns {Array}
	 */
	static get JSONRequired()
	{
		return [

		];
	}
};
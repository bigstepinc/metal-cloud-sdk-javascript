const ObjectBase = require('./ObjectBase');

/**
 * SharedDriveOperation contains information regarding the changes that are to
 * be made to a product. Edit and deploy functions have to be called in order
 * to apply the changes. The operation type and status are unique to each
 * operation object.
 *
 * @class
 * @extends ObjectBase
 */
module.exports = 
class SharedDriveOperation extends ObjectBase
{
	constructor(shared_drive_label, shared_drive_change_id)
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

		for(let index = 0; index < 2; index++)
		{
			let arg = arguments[index];

			if(arg === undefined || arg === null)
				throw new Error("Invalid params in SharedDriveOperation constructor.");
		}

		this._shared_drive_label = shared_drive_label;
		this._shared_drive_change_id = shared_drive_change_id;
	}

	/**
	 * The status of the deploy process.
	 */
	get shared_drive_deploy_status()
	{
		return (this._shared_drive_deploy_status !== undefined ? this._shared_drive_deploy_status : null);
	}

	set shared_drive_deploy_status(shared_drive_deploy_status)
	{
		this._shared_drive_deploy_status = shared_drive_deploy_status;
	}

	/**
	 * The operation applied to the SharedDrive.
	 */
	get shared_drive_deploy_type()
	{
		return (this._shared_drive_deploy_type !== undefined ? this._shared_drive_deploy_type : null);
	}

	set shared_drive_deploy_type(shared_drive_deploy_type)
	{
		this._shared_drive_deploy_type = shared_drive_deploy_type;
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
	 * The SharedDrive's fully qualified subdomain name that specifies its location
	 * in the infrastructure. It is a unique reference to the SharedDrive object.
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
	 * The size of the SharedDrive.
	 */
	get shared_drive_size_mbytes()
	{
		return (this._shared_drive_size_mbytes !== undefined ? this._shared_drive_size_mbytes : null);
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
	 * ISO 8601 timestamp which holds the date and time when the SharedDrive was
	 * edited. Example format: 2013-11-29T13:00:01Z.
	 */
	get shared_drive_updated_timestamp()
	{
		return (this._shared_drive_updated_timestamp !== undefined ? this._shared_drive_updated_timestamp : null);
	}

	set shared_drive_updated_timestamp(shared_drive_updated_timestamp)
	{
		this._shared_drive_updated_timestamp = shared_drive_updated_timestamp;
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
	 * Reserved for GUI users.
	 */
	get shared_drive_gui_settings_json()
	{
		return (this._shared_drive_gui_settings_json !== undefined ? this._shared_drive_gui_settings_json : null);
	}

	set shared_drive_gui_settings_json(shared_drive_gui_settings_json)
	{
		this._shared_drive_gui_settings_json = shared_drive_gui_settings_json;
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
	 * The required JSON fields for deserialization.
	 *
	 * @returns {Array}
	 */
	static get JSONRequired()
	{
		return [
			"shared_drive_label",
			"shared_drive_change_id"
		];
	}
};
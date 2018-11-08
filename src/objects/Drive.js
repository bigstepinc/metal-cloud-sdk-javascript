const ObjectBase = require('./ObjectBase');

/**
 * A Drive is a storage device mounted via iSCSI.
 *
 * @class
 * @extends ObjectBase
 */
module.exports = 
class Drive extends ObjectBase
{
	constructor(drive_size_mbytes)
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

		if(drive_size_mbytes === undefined || drive_size_mbytes === null)
			throw new Error("Invalid param in Drive constructor.");

		this._drive_size_mbytes = drive_size_mbytes;
	}

	/**
	 * The Drive's label which is unique and it is used to form the
	 * drive_subdomain. It is editable and can be used to call API functions.
	 */
	get drive_label()
	{
		return (this._drive_label !== undefined ? this._drive_label : null);
	}

	set drive_label(drive_label)
	{
		this._drive_label = drive_label;
	}

	/**
	 * Automatically created based on drive_label. It is a unique reference to the
	 * Drive object.
	 */
	get drive_subdomain()
	{
		return (this._drive_subdomain !== undefined ? this._drive_subdomain : null);
	}

	set drive_subdomain(drive_subdomain)
	{
		this._drive_subdomain = drive_subdomain;
	}

	/**
	 * The ID of the Drive which can be used instead of the drive_label or
	 * drive_subdomain when calling the API functions. It is automatically
	 * generated and cannot be edited.
	 */
	get drive_id()
	{
		return (this._drive_id !== undefined ? this._drive_id : null);
	}

	set drive_id(drive_id)
	{
		this._drive_id = drive_id;
	}

	/**
	 * The ID of the Drive array.
	 */
	get drive_array_id()
	{
		return (this._drive_array_id !== undefined ? this._drive_array_id : null);
	}

	set drive_array_id(drive_array_id)
	{
		this._drive_array_id = drive_array_id;
	}

	/**
	 * Represents the associated instance's ID.
	 */
	get instance_id()
	{
		return (this._instance_id !== undefined ? this._instance_id : null);
	}

	set instance_id(instance_id)
	{
		this._instance_id = instance_id;
	}

	/**
	 * Represents the associated container's ID.
	 */
	get container_id()
	{
		return (this._container_id !== undefined ? this._container_id : null);
	}

	set container_id(container_id)
	{
		this._container_id = container_id;
	}

	/**
	 * Represents the capacity of the Drive.
	 */
	get drive_size_mbytes()
	{
		return (this._drive_size_mbytes !== undefined ? this._drive_size_mbytes : null);
	}

	set drive_size_mbytes(drive_size_mbytes)
	{
		this._drive_size_mbytes = drive_size_mbytes;
	}

	/**
	 * Represents the Drive’s type of storage.
	 */
	get drive_storage_type()
	{
		return (this._drive_storage_type !== undefined ? this._drive_storage_type : "iscsi_ssd");
	}

	set drive_storage_type(drive_storage_type)
	{
		this._drive_storage_type = drive_storage_type;
	}

	/**
	 * Represents the infrastructure ID to which the Drive belongs.
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
	 * Represents the volume template.
	 */
	get template_id_origin()
	{
		return (this._template_id_origin !== undefined ? this._template_id_origin : null);
	}

	set template_id_origin(template_id_origin)
	{
		this._template_id_origin = template_id_origin;
	}

	/**
	 * Information to connect via iSCSI or bootable drive associated credentials.
	 */
	get drive_credentials()
	{
		return (this._drive_credentials !== undefined ? this._drive_credentials : null);
	}

	set drive_credentials(drive_credentials)
	{
		this._drive_credentials = drive_credentials;
	}

	/**
	 * It shows the status of the Drive.
	 */
	get drive_service_status()
	{
		return (this._drive_service_status !== undefined ? this._drive_service_status : null);
	}

	set drive_service_status(drive_service_status)
	{
		this._drive_service_status = drive_service_status;
	}

	/**
	 * ISO 8601 timestamp which holds the date and time when the Drive was created.
	 * Example format: 2013-11-29T13:00:01Z.
	 */
	get drive_created_timestamp()
	{
		return (this._drive_created_timestamp !== undefined ? this._drive_created_timestamp : "0000-00-00T00:00:00Z");
	}

	set drive_created_timestamp(drive_created_timestamp)
	{
		this._drive_created_timestamp = drive_created_timestamp;
	}

	/**
	 * ISO 8601 timestamp which holds the date and time when the Drive was edited.
	 * Example format: 2013-11-29T13:00:01Z.
	 */
	get drive_updated_timestamp()
	{
		return (this._drive_updated_timestamp !== undefined ? this._drive_updated_timestamp : "0000-00-00T00:00:00Z");
	}

	set drive_updated_timestamp(drive_updated_timestamp)
	{
		this._drive_updated_timestamp = drive_updated_timestamp;
	}

	/**
	 * The operation type, operation status and modified Drive object.
	 */
	get drive_operation()
	{
		return (this._drive_operation !== undefined ? this._drive_operation : null);
	}

	set drive_operation(drive_operation)
	{
		this._drive_operation = drive_operation;
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
	 * This property helps ensure that edit operations don’t overwrite other,
	 * more recent changes made to the same object. It gets updated automatically
	 * after each successful edit operation.
	 */
	get drive_change_id()
	{
		return (this._drive_change_id !== undefined ? this._drive_change_id : null);
	}

	set drive_change_id(drive_change_id)
	{
		this._drive_change_id = drive_change_id;
	}

	/**
	 * OperatingSystem
	 */
	get drive_operating_system()
	{
		return (this._drive_operating_system !== undefined ? this._drive_operating_system : null);
	}

	set drive_operating_system(drive_operating_system)
	{
		this._drive_operating_system = drive_operating_system;
	}

	/**
	 * Drive file system information
	 */
	get drive_filesystem()
	{
		return (this._drive_filesystem !== undefined ? this._drive_filesystem : null);
	}

	set drive_filesystem(drive_filesystem)
	{
		this._drive_filesystem = drive_filesystem;
	}

	/**
	 * The required JSON fields for deserialization.
	 *
	 * @returns {Array}
	 */
	static get JSONRequired()
	{
		return [
			"drive_size_mbytes"
		];
	}
};
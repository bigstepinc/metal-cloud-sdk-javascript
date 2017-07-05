const ObjectBase = require('./ObjectBase');

/**
 * DriveOperation contains information regarding the changes that are to be
 * made to a product. Edit and deploy functions have to be called in order to
 * apply the changes. The operation type and status are unique to each
 * operation object.
 *
 * @class
 * @extends ObjectBase
 */
module.exports = 
class DriveOperation extends ObjectBase
{
	constructor(drive_label, drive_change_id)
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
				throw new Error("Invalid params in DriveOperation constructor.");
		}

		this._drive_label = drive_label;
		this._drive_change_id = drive_change_id;
	}

	/**
	 * The status of the deploy process.
	 */
	get drive_deploy_status()
	{
		return this._drive_deploy_status || null;
	}

	set drive_deploy_status(drive_deploy_status)
	{
		this._drive_deploy_status = drive_deploy_status;
	}

	/**
	 * The operation applied to the Drive.
	 */
	get drive_deploy_type()
	{
		return this._drive_deploy_type || null;
	}

	set drive_deploy_type(drive_deploy_type)
	{
		this._drive_deploy_type = drive_deploy_type;
	}

	/**
	 * The Drive's label which is unique and it is used to form the
	 * drive_subdomain. It is editable and can be used to call API functions.
	 */
	get drive_label()
	{
		return this._drive_label || null;
	}

	set drive_label(drive_label)
	{
		this._drive_label = drive_label;
	}

	/**
	 * The Drive's fully qualified subdomain name that specifies its location in
	 * the infrastructure. It is a unique reference to the Drive object.
	 */
	get drive_subdomain()
	{
		return this._drive_subdomain || null;
	}

	set drive_subdomain(drive_subdomain)
	{
		this._drive_subdomain = drive_subdomain;
	}

	/**
	 * The ID of the Drive array.
	 */
	get drive_array_id()
	{
		return this._drive_array_id || null;
	}

	set drive_array_id(drive_array_id)
	{
		this._drive_array_id = drive_array_id;
	}

	/**
	 * ISO 8601 timestamp which holds the date and time when the Drive was created.
	 * Example format: 2013-11-29T13:00:01Z.
	 */
	get drive_created_timestamp()
	{
		return this._drive_created_timestamp || null;
	}

	set drive_created_timestamp(drive_created_timestamp)
	{
		this._drive_created_timestamp = drive_created_timestamp;
	}

	/**
	 * The ID of the Drive which can be used instead of the drive_label or
	 * drive_subdomain when calling the API functions. It is automatically
	 * generated and cannot be edited.
	 */
	get drive_id()
	{
		return this._drive_id || null;
	}

	set drive_id(drive_id)
	{
		this._drive_id = drive_id;
	}

	/**
	 * The size of the Drive.
	 */
	get drive_size_mbytes()
	{
		return this._drive_size_mbytes || null;
	}

	set drive_size_mbytes(drive_size_mbytes)
	{
		this._drive_size_mbytes = drive_size_mbytes;
	}

	/**
	 * The storage type of the Drive.
	 */
	get drive_storage_type()
	{
		return this._drive_storage_type || null;
	}

	set drive_storage_type(drive_storage_type)
	{
		this._drive_storage_type = drive_storage_type;
	}

	/**
	 * The ID of the Drive's associated instance.
	 */
	get instance_id()
	{
		return this._instance_id || null;
	}

	set instance_id(instance_id)
	{
		this._instance_id = instance_id;
	}

	/**
	 * Represents the volume template.
	 */
	get template_id_origin()
	{
		return this._template_id_origin || null;
	}

	set template_id_origin(template_id_origin)
	{
		this._template_id_origin = template_id_origin;
	}

	/**
	 * ISO 8601 timestamp which holds the date and time when the Drive was edited.
	 * Example format: 2013-11-29T13:00:01Z.
	 */
	get drive_updated_timestamp()
	{
		return this._drive_updated_timestamp || null;
	}

	set drive_updated_timestamp(drive_updated_timestamp)
	{
		this._drive_updated_timestamp = drive_updated_timestamp;
	}

	/**
	 * The schema type.
	 */
	get type()
	{
		return this._type || null;
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
		return this._drive_change_id || null;
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
		return this._drive_operating_system || null;
	}

	set drive_operating_system(drive_operating_system)
	{
		this._drive_operating_system = drive_operating_system;
	}

	/**
	 * The required JSON fields for deserialization.
	 *
	 * @returns {Array}
	 */
	static get JSONRequired()
	{
		return [
			"drive_label",
			"drive_change_id"
		];
	}
};
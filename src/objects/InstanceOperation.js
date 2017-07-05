const ObjectBase = require('./ObjectBase');

/**
 * InstanceOperation contains information regarding the changes that are to be
 * made to a product. Edit and deploy functions have to be called in order to
 * apply the changes. The operation type and status are unique to each
 * operation object.
 *
 * @class
 * @extends ObjectBase
 */
module.exports = 
class InstanceOperation extends ObjectBase
{
	constructor(instance_label, instance_change_id)
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
				throw new Error("Invalid params in InstanceOperation constructor.");
		}

		this._instance_label = instance_label;
		this._instance_change_id = instance_change_id;
	}

	/**
	 * The operation applied to the instance.
	 */
	get instance_deploy_type()
	{
		return this._instance_deploy_type || null;
	}

	set instance_deploy_type(instance_deploy_type)
	{
		this._instance_deploy_type = instance_deploy_type;
	}

	/**
	 * The status of the deploy process.
	 */
	get instance_deploy_status()
	{
		return this._instance_deploy_status || null;
	}

	set instance_deploy_status(instance_deploy_status)
	{
		this._instance_deploy_status = instance_deploy_status;
	}

	/**
	 * The instance's label which is unique and it is used to form the
	 * instance_subdomain. Can be used to call API functions.
	 */
	get instance_label()
	{
		return this._instance_label || null;
	}

	set instance_label(instance_label)
	{
		this._instance_label = instance_label;
	}

	/**
	 * Automatically created based on instance_label. It is a unique reference to
	 * the Instance object.
	 */
	get instance_subdomain()
	{
		return this._instance_subdomain || null;
	}

	set instance_subdomain(instance_subdomain)
	{
		this._instance_subdomain = instance_subdomain;
	}

	/**
	 * The ID of the instance which can be used instead of the instance_label or
	 * instance_subdomain when calling the API functions.
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
	 * The ID of the InstanceArray.
	 */
	get instance_array_id()
	{
		return this._instance_array_id || null;
	}

	set instance_array_id(instance_array_id)
	{
		this._instance_array_id = instance_array_id;
	}

	/**
	 * ISO 8601 timestamp which holds the date and time when the instance was
	 * edited. Example format: 2013-11-29T13:00:01Z.
	 */
	get instance_updated_timestamp()
	{
		return this._instance_updated_timestamp || null;
	}

	set instance_updated_timestamp(instance_updated_timestamp)
	{
		this._instance_updated_timestamp = instance_updated_timestamp;
	}

	/**
	 * The ID of the associated server.
	 */
	get server_id()
	{
		return this._server_id || null;
	}

	set server_id(server_id)
	{
		this._server_id = server_id;
	}

	/**
	 * The instance's server_type_id.
	 */
	get server_type_id()
	{
		return this._server_type_id || null;
	}

	set server_type_id(server_type_id)
	{
		this._server_type_id = server_type_id;
	}

	/**
	 * The ID of the drive the instance boots from.
	 */
	get drive_id_bootable()
	{
		return this._drive_id_bootable || null;
	}

	set drive_id_bootable(drive_id_bootable)
	{
		this._drive_id_bootable = drive_id_bootable;
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
	get instance_change_id()
	{
		return this._instance_change_id || null;
	}

	set instance_change_id(instance_change_id)
	{
		this._instance_change_id = instance_change_id;
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
	 * The required JSON fields for deserialization.
	 *
	 * @returns {Array}
	 */
	static get JSONRequired()
	{
		return [
			"instance_label",
			"instance_change_id"
		];
	}
};
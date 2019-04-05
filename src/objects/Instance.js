const ObjectBase = require('./ObjectBase');

/**
 * An instance represents a single server and it allows performing certain
 * operations on the server which do not make sense at InstanceArray level or
 * are a better fit for individual management, for example rebooting a single
 * instance to not have to reboot an entire farm at the same time (to minimize
 * or eliminate downtime).
 *
 * @class
 * @extends ObjectBase
 */
module.exports = 
class Instance extends ObjectBase
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
	 * The instance's label which is unique and it is used to form the
	 * instance_subdomain. Can be used to call API functions.
	 */
	get instance_label()
	{
		return (this._instance_label !== undefined ? this._instance_label : null);
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
		return (this._instance_subdomain !== undefined ? this._instance_subdomain : null);
	}

	set instance_subdomain(instance_subdomain)
	{
		this._instance_subdomain = instance_subdomain;
	}

	/**
	 * Automatically created based on instance_id. It is a unique reference to the
	 * Instance object.
	 */
	get instance_subdomain_permanent()
	{
		return (this._instance_subdomain_permanent !== undefined ? this._instance_subdomain_permanent : null);
	}

	set instance_subdomain_permanent(instance_subdomain_permanent)
	{
		this._instance_subdomain_permanent = instance_subdomain_permanent;
	}

	/**
	 * The ID of the instance which can be used instead of the instance_label or
	 * instance_subdomain when calling the API functions.  It is automatically
	 * generated and cannot be edited.
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
	 * The ID of the InstanceArray.
	 */
	get instance_array_id()
	{
		return (this._instance_array_id !== undefined ? this._instance_array_id : null);
	}

	set instance_array_id(instance_array_id)
	{
		this._instance_array_id = instance_array_id;
	}

	/**
	 * The ID of the associated server.
	 */
	get server_id()
	{
		return (this._server_id !== undefined ? this._server_id : null);
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
		return (this._server_type_id !== undefined ? this._server_type_id : null);
	}

	set server_type_id(server_type_id)
	{
		this._server_type_id = server_type_id;
	}

	/**
	 * The status of the instance.
	 */
	get instance_service_status()
	{
		return (this._instance_service_status !== undefined ? this._instance_service_status : null);
	}

	set instance_service_status(instance_service_status)
	{
		this._instance_service_status = instance_service_status;
	}

	/**
	 * Credentials used to connect to the server through IPMI, iLO, SSH etc.
	 */
	get instance_credentials()
	{
		return (this._instance_credentials !== undefined ? this._instance_credentials : null);
	}

	set instance_credentials(instance_credentials)
	{
		this._instance_credentials = instance_credentials;
	}

	/**
	 * The operation type, operation status and modified instance object.
	 */
	get instance_operation()
	{
		return (this._instance_operation !== undefined ? this._instance_operation : null);
	}

	set instance_operation(instance_operation)
	{
		this._instance_operation = instance_operation;
	}

	/**
	 * An array of InstanceInterface objects indexed from 0 to 3.
	 */
	get instance_interfaces()
	{
		return (this._instance_interfaces !== undefined ? this._instance_interfaces : []);
	}

	set instance_interfaces(instance_interfaces)
	{
		this._instance_interfaces = instance_interfaces;
	}

	/**
	 * ISO 8601 timestamp which holds the date and time when the instance was
	 * created. Example format: 2013-11-29T13:00:01Z.
	 */
	get instance_created_timestamp()
	{
		return (this._instance_created_timestamp !== undefined ? this._instance_created_timestamp : "0000-00-00T00:00:00Z");
	}

	set instance_created_timestamp(instance_created_timestamp)
	{
		this._instance_created_timestamp = instance_created_timestamp;
	}

	/**
	 * ISO 8601 timestamp which holds the date and time when the instance was
	 * edited. Example format: 2013-11-29T13:00:01Z.
	 */
	get instance_updated_timestamp()
	{
		return (this._instance_updated_timestamp !== undefined ? this._instance_updated_timestamp : "0000-00-00T00:00:00Z");
	}

	set instance_updated_timestamp(instance_updated_timestamp)
	{
		this._instance_updated_timestamp = instance_updated_timestamp;
	}

	/**
	 * The ID of the drive the instance boots from.
	 */
	get drive_id_bootable()
	{
		return (this._drive_id_bootable !== undefined ? this._drive_id_bootable : null);
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
	get instance_change_id()
	{
		return (this._instance_change_id !== undefined ? this._instance_change_id : null);
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
		return (this._template_id_origin !== undefined ? this._template_id_origin : null);
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

		];
	}
};
const ObjectBase = require('./ObjectBase');

/**
 * IPOperation contains information regarding the changes that are to be made
 * to a product. Edit and deploy functions have to be called in order to apply
 * the changes. The operation type and status are unique to each operation object.
 *
 * @class
 * @extends ObjectBase
 */
module.exports = 
class IPOperation extends ObjectBase
{
	constructor(ip_label, ip_change_id)
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
				throw new Error("Invalid params in IPOperation constructor.");
		}

		this._ip_label = ip_label;
		this._ip_change_id = ip_change_id;
	}

	/**
	 * Represents the instance interface this IP address is bound to.
	 */
	get instance_interface_id()
	{
		return this._instance_interface_id || null;
	}

	set instance_interface_id(instance_interface_id)
	{
		this._instance_interface_id = instance_interface_id;
	}

	/**
	 * The status of the deploy process.
	 */
	get ip_deploy_status()
	{
		return this._ip_deploy_status || null;
	}

	set ip_deploy_status(ip_deploy_status)
	{
		this._ip_deploy_status = ip_deploy_status;
	}

	/**
	 * The operation applied to the IP.
	 */
	get ip_deploy_type()
	{
		return this._ip_deploy_type || null;
	}

	set ip_deploy_type(ip_deploy_type)
	{
		this._ip_deploy_type = ip_deploy_type;
	}

	/**
	 * The ID of the IP address. It can be used instead of the ip_label or
	 * subnet_subdomain when calling API functions. It is generated automatically
	 * and cannot be edited.
	 */
	get ip_id()
	{
		return this._ip_id || null;
	}

	set ip_id(ip_id)
	{
		this._ip_id = ip_id;
	}

	/**
	 * The type of the IP address.
	 */
	get ip_type()
	{
		return this._ip_type || null;
	}

	set ip_type(ip_type)
	{
		this._ip_type = ip_type;
	}

	/**
	 * The IP address in natural language.
	 */
	get ip_human_readable()
	{
		return this._ip_human_readable || null;
	}

	set ip_human_readable(ip_human_readable)
	{
		this._ip_human_readable = ip_human_readable;
	}

	/**
	 * Hexadecimal number representing an 128 or 32 bit unsigned integer.
	 */
	get ip_hex()
	{
		return this._ip_hex || null;
	}

	set ip_hex(ip_hex)
	{
		this._ip_hex = ip_hex;
	}

	/**
	 * The label of the IP. It is unique, and it is used to form the ip_subdomain.
	 * Can be used to call API functions.
	 */
	get ip_label()
	{
		return this._ip_label || null;
	}

	set ip_label(ip_label)
	{
		this._ip_label = ip_label;
	}

	/**
	 * Created automatically based on ip_label. It is a unique reference to the IP
	 * object.
	 */
	get ip_subdomain()
	{
		return this._ip_subdomain || null;
	}

	set ip_subdomain(ip_subdomain)
	{
		this._ip_subdomain = ip_subdomain;
	}

	/**
	 * Reserved for future use.
	 */
	get ip_lease_expires()
	{
		return this._ip_lease_expires || null;
	}

	set ip_lease_expires(ip_lease_expires)
	{
		this._ip_lease_expires = ip_lease_expires;
	}

	/**
	 * ISO 8601 timestamp which holds the date and time when the IP was edited.
	 * Example format: 2013-11-29T13:00:01Z.
	 */
	get ip_updated_timestamp()
	{
		return this._ip_updated_timestamp || null;
	}

	set ip_updated_timestamp(ip_updated_timestamp)
	{
		this._ip_updated_timestamp = ip_updated_timestamp;
	}

	/**
	 * Represents the Subnet this IP is allocated from.
	 */
	get subnet_id()
	{
		return this._subnet_id || null;
	}

	set subnet_id(subnet_id)
	{
		this._subnet_id = subnet_id;
	}

	/**
	 * The schema type
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
	get ip_change_id()
	{
		return this._ip_change_id || null;
	}

	set ip_change_id(ip_change_id)
	{
		this._ip_change_id = ip_change_id;
	}

	/**
	 * The required JSON fields for deserialization.
	 *
	 * @returns {Array}
	 */
	static get JSONRequired()
	{
		return [
			"ip_label",
			"ip_change_id"
		];
	}
};
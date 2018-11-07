const ObjectBase = require('./ObjectBase');

/**
 * An IP object contains information regarding an IP address.
 *
 * @class
 * @extends ObjectBase
 */
module.exports = 
class IP extends ObjectBase
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
	 * The ID of the IP address.
	 */
	get ip_id()
	{
		return (this._ip_id !== undefined ? this._ip_id : null);
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
		return (this._ip_type !== undefined ? this._ip_type : null);
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
		return (this._ip_human_readable !== undefined ? this._ip_human_readable : null);
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
		return (this._ip_hex !== undefined ? this._ip_hex : null);
	}

	set ip_hex(ip_hex)
	{
		this._ip_hex = ip_hex;
	}

	/**
	 * Reserved for future use.
	 */
	get ip_lease_expires()
	{
		return (this._ip_lease_expires !== undefined ? this._ip_lease_expires : null);
	}

	set ip_lease_expires(ip_lease_expires)
	{
		this._ip_lease_expires = ip_lease_expires;
	}

	/**
	 * Current Operation
	 */
	get ip_operation()
	{
		return (this._ip_operation !== undefined ? this._ip_operation : null);
	}

	set ip_operation(ip_operation)
	{
		this._ip_operation = ip_operation;
	}

	/**
	 * Represents the Subnet this IP is allocated from.
	 */
	get subnet_id()
	{
		return (this._subnet_id !== undefined ? this._subnet_id : null);
	}

	set subnet_id(subnet_id)
	{
		this._subnet_id = subnet_id;
	}

	/**
	 * Type of the network for which the Subnet is destined.
	 */
	get subnet_destination()
	{
		return (this._subnet_destination !== undefined ? this._subnet_destination : "wan");
	}

	set subnet_destination(subnet_destination)
	{
		this._subnet_destination = subnet_destination;
	}

	/**
	 * The gateway in natural language.
	 */
	get subnet_gateway_human_readable()
	{
		return (this._subnet_gateway_human_readable !== undefined ? this._subnet_gateway_human_readable : null);
	}

	set subnet_gateway_human_readable(subnet_gateway_human_readable)
	{
		this._subnet_gateway_human_readable = subnet_gateway_human_readable;
	}

	/**
	 * The netmask in natural language.
	 */
	get subnet_netmask_human_readable()
	{
		return (this._subnet_netmask_human_readable !== undefined ? this._subnet_netmask_human_readable : null);
	}

	set subnet_netmask_human_readable(subnet_netmask_human_readable)
	{
		this._subnet_netmask_human_readable = subnet_netmask_human_readable;
	}

	/**
	 * Represents the instance interface this IP address is bound to.
	 */
	get instance_interface_id()
	{
		return (this._instance_interface_id !== undefined ? this._instance_interface_id : null);
	}

	set instance_interface_id(instance_interface_id)
	{
		this._instance_interface_id = instance_interface_id;
	}

	/**
	 * The schema type
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
	get ip_change_id()
	{
		return (this._ip_change_id !== undefined ? this._ip_change_id : null);
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

		];
	}
};
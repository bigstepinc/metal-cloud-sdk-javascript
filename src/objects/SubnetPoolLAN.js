const ObjectBase = require('./ObjectBase');

/**
 *
 *
 * @class
 * @extends ObjectBase
 */
module.exports = 
class SubnetPoolLAN extends ObjectBase
{
	constructor(subnet_pool_lan_prefix_human_readable, subnet_pool_lan_netmask, subnet_pool_lan_type)
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

		for(let index = 0; index < 3; index++)
		{
			let arg = arguments[index];

			if(arg === undefined || arg === null)
				throw new Error("Invalid params in SubnetPoolLAN constructor.");
		}

		this._subnet_pool_lan_prefix_human_readable = subnet_pool_lan_prefix_human_readable;
		this._subnet_pool_lan_netmask = subnet_pool_lan_netmask;
		this._subnet_pool_lan_type = subnet_pool_lan_type;
	}

	/**
	 * the network prefix in human readable format.
	 */
	get subnet_pool_lan_prefix_human_readable()
	{
		return this._subnet_pool_lan_prefix_human_readable || null;
	}

	set subnet_pool_lan_prefix_human_readable(subnet_pool_lan_prefix_human_readable)
	{
		this._subnet_pool_lan_prefix_human_readable = subnet_pool_lan_prefix_human_readable;
	}

	/**
	 * the netmask value; ex: /32.
	 */
	get subnet_pool_lan_netmask()
	{
		return this._subnet_pool_lan_netmask || null;
	}

	set subnet_pool_lan_netmask(subnet_pool_lan_netmask)
	{
		this._subnet_pool_lan_netmask = subnet_pool_lan_netmask;
	}

	/**
	 * must be ipv4 or ipv6.
	 */
	get subnet_pool_lan_type()
	{
		return this._subnet_pool_lan_type || null;
	}

	set subnet_pool_lan_type(subnet_pool_lan_type)
	{
		this._subnet_pool_lan_type = subnet_pool_lan_type;
	}

	/**
	 * The start address of the Subnet pool range in dotted notation for IPv4 or
	 * full notation for IPv6.
	 */
	get subnet_pool_lan_range_start_human_readable()
	{
		return this._subnet_pool_lan_range_start_human_readable || null;
	}

	set subnet_pool_lan_range_start_human_readable(subnet_pool_lan_range_start_human_readable)
	{
		this._subnet_pool_lan_range_start_human_readable = subnet_pool_lan_range_start_human_readable;
	}

	/**
	 * The end address of the Subnet pool range in dotted notation for IPv4 or full
	 * notation for IPv6.
	 */
	get subnet_pool_lan_range_end_human_readable()
	{
		return this._subnet_pool_lan_range_end_human_readable || null;
	}

	set subnet_pool_lan_range_end_human_readable(subnet_pool_lan_range_end_human_readable)
	{
		this._subnet_pool_lan_range_end_human_readable = subnet_pool_lan_range_end_human_readable;
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
	 * The required JSON fields for deserialization.
	 *
	 * @returns {Array}
	 */
	static get JSONRequired()
	{
		return [
			"subnet_pool_lan_prefix_human_readable",
			"subnet_pool_lan_netmask",
			"subnet_pool_lan_type"
		];
	}
};
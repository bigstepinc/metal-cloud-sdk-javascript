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
	constructor(subnet_pool_lan_prefix_human_readable, subnet_pool_lan_prefix_size, subnet_pool_lan_type, subnets_prefix_size)
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

		for(let index = 0; index < 4; index++)
		{
			let arg = arguments[index];

			if(arg === undefined || arg === null)
				throw new Error("Invalid params in SubnetPoolLAN constructor.");
		}

		this._subnet_pool_lan_prefix_human_readable = subnet_pool_lan_prefix_human_readable;
		this._subnet_pool_lan_prefix_size = subnet_pool_lan_prefix_size;
		this._subnet_pool_lan_type = subnet_pool_lan_type;
		this._subnets_prefix_size = subnets_prefix_size;
	}

	/**
	 * The network prefix in human readable format.
	 */
	get subnet_pool_lan_prefix_human_readable()
	{
		return (this._subnet_pool_lan_prefix_human_readable !== undefined ? this._subnet_pool_lan_prefix_human_readable : null);
	}

	set subnet_pool_lan_prefix_human_readable(subnet_pool_lan_prefix_human_readable)
	{
		this._subnet_pool_lan_prefix_human_readable = subnet_pool_lan_prefix_human_readable;
	}

	/**
	 * The subnet pool prefix size value; ex: /24.
	 */
	get subnet_pool_lan_prefix_size()
	{
		return (this._subnet_pool_lan_prefix_size !== undefined ? this._subnet_pool_lan_prefix_size : null);
	}

	set subnet_pool_lan_prefix_size(subnet_pool_lan_prefix_size)
	{
		this._subnet_pool_lan_prefix_size = subnet_pool_lan_prefix_size;
	}

	/**
	 * Must be ipv4 or ipv6.
	 */
	get subnet_pool_lan_type()
	{
		return (this._subnet_pool_lan_type !== undefined ? this._subnet_pool_lan_type : null);
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
		return (this._subnet_pool_lan_range_start_human_readable !== undefined ? this._subnet_pool_lan_range_start_human_readable : null);
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
		return (this._subnet_pool_lan_range_end_human_readable !== undefined ? this._subnet_pool_lan_range_end_human_readable : null);
	}

	set subnet_pool_lan_range_end_human_readable(subnet_pool_lan_range_end_human_readable)
	{
		this._subnet_pool_lan_range_end_human_readable = subnet_pool_lan_range_end_human_readable;
	}

	/**
	 * The underyling subnets prefix size value; ex: /24.
	 */
	get subnets_prefix_size()
	{
		return (this._subnets_prefix_size !== undefined ? this._subnets_prefix_size : null);
	}

	set subnets_prefix_size(subnets_prefix_size)
	{
		this._subnets_prefix_size = subnets_prefix_size;
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
			"subnet_pool_lan_prefix_human_readable",
			"subnet_pool_lan_prefix_size",
			"subnet_pool_lan_type",
			"subnets_prefix_size"
		];
	}
};
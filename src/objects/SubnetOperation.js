const ObjectBase = require('./ObjectBase');

/**
 * SubnetOperation contains information regarding the changes that are to be
 * made to a product. Edit and deploy functions have to be called in order to
 * apply the changes. The operation type and status are unique to each
 * operation object.
 *
 * @class
 * @extends ObjectBase
 */
module.exports = 
class SubnetOperation extends ObjectBase
{
	constructor(subnet_label, subnet_type, network_id, subnet_prefix_size, subnet_destination, subnet_change_id)
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

		for(let index = 0; index < 6; index++)
		{
			let arg = arguments[index];

			if(arg === undefined || arg === null)
				throw new Error("Invalid params in SubnetOperation constructor.");
		}

		this._subnet_label = subnet_label;
		this._subnet_type = subnet_type;
		this._network_id = network_id;
		this._subnet_prefix_size = subnet_prefix_size;
		this._subnet_destination = subnet_destination;
		this._subnet_change_id = subnet_change_id;
	}

	/**
	 * The operation applied to the Subnet.
	 */
	get subnet_deploy_type()
	{
		return this._subnet_deploy_type || null;
	}

	set subnet_deploy_type(subnet_deploy_type)
	{
		this._subnet_deploy_type = subnet_deploy_type;
	}

	/**
	 * The status of the deploy process.
	 */
	get subnet_deploy_status()
	{
		return this._subnet_deploy_status || null;
	}

	set subnet_deploy_status(subnet_deploy_status)
	{
		this._subnet_deploy_status = subnet_deploy_status;
	}

	/**
	 * The Subnet's label which is unique and it is used to form the
	 * subnet_subdomain. Can be used to call API functions.
	 */
	get subnet_label()
	{
		return this._subnet_label || null;
	}

	set subnet_label(subnet_label)
	{
		this._subnet_label = subnet_label;
	}

	/**
	 * Automatically created based on subnet_label. It is a unique reference to the
	 * Subnet object.
	 */
	get subnet_subdomain()
	{
		return this._subnet_subdomain || null;
	}

	set subnet_subdomain(subnet_subdomain)
	{
		this._subnet_subdomain = subnet_subdomain;
	}

	/**
	 * The ID of the Subnet which can be used instead of the subnet_label or
	 * subnet_subdomain when calling the API functions. It is automatically
	 * generated and cannot be edited.
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
	 * The hexadecimal start address of the Subnet range.
	 */
	get subnet_range_start_hex()
	{
		return this._subnet_range_start_hex || null;
	}

	set subnet_range_start_hex(subnet_range_start_hex)
	{
		this._subnet_range_start_hex = subnet_range_start_hex;
	}

	/**
	 * The hexadecimal end address of the Subnet range.
	 */
	get subnet_range_end_hex()
	{
		return this._subnet_range_end_hex || null;
	}

	set subnet_range_end_hex(subnet_range_end_hex)
	{
		this._subnet_range_end_hex = subnet_range_end_hex;
	}

	/**
	 * The start address of the Subnet range in dotted notation for IPv4 or full
	 * notation for IPv6.
	 */
	get subnet_range_start_human_readable()
	{
		return this._subnet_range_start_human_readable || null;
	}

	set subnet_range_start_human_readable(subnet_range_start_human_readable)
	{
		this._subnet_range_start_human_readable = subnet_range_start_human_readable;
	}

	/**
	 * The end address of the Subnet range in dotted notation for IPv4 or full
	 * notation for IPv6.
	 */
	get subnet_range_end_human_readable()
	{
		return this._subnet_range_end_human_readable || null;
	}

	set subnet_range_end_human_readable(subnet_range_end_human_readable)
	{
		this._subnet_range_end_human_readable = subnet_range_end_human_readable;
	}

	/**
	 * The type of the Subnet.
	 */
	get subnet_type()
	{
		return this._subnet_type || null;
	}

	set subnet_type(subnet_type)
	{
		this._subnet_type = subnet_type;
	}

	/**
	 * The ID of the network to which the Subnet belongs.
	 */
	get network_id()
	{
		return this._network_id || null;
	}

	set network_id(network_id)
	{
		this._network_id = network_id;
	}

	/**
	 * The netmask in dotted notation for IPv4 or full notation for IPv6. IPv4
	 * example: "255.255.255.240"; IPv6 example: "
	 * ffff:ffff:ffff:ffff:0000:0000:0000:0000".
	 */
	get subnet_netmask_human_readable()
	{
		return this._subnet_netmask_human_readable || null;
	}

	set subnet_netmask_human_readable(subnet_netmask_human_readable)
	{
		this._subnet_netmask_human_readable = subnet_netmask_human_readable;
	}

	/**
	 * The gateway in dotted notation for IPv4 or full notation for IPv6.
	 */
	get subnet_gateway_human_readable()
	{
		return this._subnet_gateway_human_readable || null;
	}

	set subnet_gateway_human_readable(subnet_gateway_human_readable)
	{
		this._subnet_gateway_human_readable = subnet_gateway_human_readable;
	}

	/**
	 * The hexadecimal gateway.
	 */
	get subnet_gateway_hex()
	{
		return this._subnet_gateway_hex || null;
	}

	set subnet_gateway_hex(subnet_gateway_hex)
	{
		this._subnet_gateway_hex = subnet_gateway_hex;
	}

	/**
	 * Subnet prefix size, such as /30, /27, etc. For IPv4 subnets can be one of:
	 * 27, 28, 29, 30.
	 */
	get subnet_prefix_size()
	{
		return this._subnet_prefix_size || null;
	}

	set subnet_prefix_size(subnet_prefix_size)
	{
		this._subnet_prefix_size = subnet_prefix_size;
	}

	/**
	 * ISO 8601 timestamp which holds the date and time when the Subnet was edited.
	 * Example format: 2013-11-29T13:00:01Z.
	 */
	get subnet_updated_timestamp()
	{
		return this._subnet_updated_timestamp || null;
	}

	set subnet_updated_timestamp(subnet_updated_timestamp)
	{
		this._subnet_updated_timestamp = subnet_updated_timestamp;
	}

	/**
	 * Type of the network for which the Subnet is destined.
	 */
	get subnet_destination()
	{
		return this._subnet_destination || null;
	}

	set subnet_destination(subnet_destination)
	{
		this._subnet_destination = subnet_destination;
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
	get subnet_change_id()
	{
		return this._subnet_change_id || null;
	}

	set subnet_change_id(subnet_change_id)
	{
		this._subnet_change_id = subnet_change_id;
	}

	/**
	 * The required JSON fields for deserialization.
	 *
	 * @returns {Array}
	 */
	static get JSONRequired()
	{
		return [
			"subnet_label",
			"subnet_type",
			"network_id",
			"subnet_prefix_size",
			"subnet_destination",
			"subnet_change_id"
		];
	}
};
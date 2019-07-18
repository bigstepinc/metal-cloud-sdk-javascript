const ObjectBase = require('./ObjectBase');

/**
 * A Subnet is a subdivision of a network, a range of IP addresses minus the
 * first two and the last IP addresses (network, gateway, and broadcast, respectively).
 *
 * @class
 * @extends ObjectBase
 */
module.exports = 
class Subnet extends ObjectBase
{
	constructor(subnet_type, subnet_prefix_size)
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
				throw new Error("Invalid params in Subnet constructor.");
		}

		this._subnet_type = subnet_type;
		this._subnet_prefix_size = subnet_prefix_size;
	}

	/**
	 * The ID of the network to which the Subnet belongs.
	 */
	get network_id()
	{
		return (this._network_id !== undefined ? this._network_id : null);
	}

	set network_id(network_id)
	{
		this._network_id = network_id;
	}

	/**
	 * The Subnet's label which is unique and it is used to form the
	 * subnet_subdomain. Can be used to call API functions.
	 */
	get subnet_label()
	{
		return (this._subnet_label !== undefined ? this._subnet_label : null);
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
		return (this._subnet_subdomain !== undefined ? this._subnet_subdomain : null);
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
		return (this._subnet_id !== undefined ? this._subnet_id : null);
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
		return (this._subnet_range_start_hex !== undefined ? this._subnet_range_start_hex : null);
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
		return (this._subnet_range_end_hex !== undefined ? this._subnet_range_end_hex : null);
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
		return (this._subnet_range_start_human_readable !== undefined ? this._subnet_range_start_human_readable : null);
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
		return (this._subnet_range_end_human_readable !== undefined ? this._subnet_range_end_human_readable : null);
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
		return (this._subnet_type !== undefined ? this._subnet_type : null);
	}

	set subnet_type(subnet_type)
	{
		this._subnet_type = subnet_type;
	}

	/**
	 * The ID of the associated infrastructure.
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
	 * The netmask in dotted notation for IPv4 or full notation for IPv6. IPv4
	 * example: "255.255.255.240"; IPv6 example: "
	 * ffff:ffff:ffff:ffff:0000:0000:0000:0000".
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
	 * The gateway in dotted notation for IPv4 or full notation for IPv6.
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
	 * The hexadecimal gateway.
	 */
	get subnet_gateway_hex()
	{
		return (this._subnet_gateway_hex !== undefined ? this._subnet_gateway_hex : null);
	}

	set subnet_gateway_hex(subnet_gateway_hex)
	{
		this._subnet_gateway_hex = subnet_gateway_hex;
	}

	/**
	 * Subnet prefix size, such as /30, /27, etc. For IPv4 subnets can be one of:
	 * 27, 28, 29, 30. For IPv6 subnet can only be 64.
	 */
	get subnet_prefix_size()
	{
		return (this._subnet_prefix_size !== undefined ? this._subnet_prefix_size : null);
	}

	set subnet_prefix_size(subnet_prefix_size)
	{
		this._subnet_prefix_size = subnet_prefix_size;
	}

	/**
	 * The status of the Subnet.
	 */
	get subnet_service_status()
	{
		return (this._subnet_service_status !== undefined ? this._subnet_service_status : null);
	}

	set subnet_service_status(subnet_service_status)
	{
		this._subnet_service_status = subnet_service_status;
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
	 * ISO 8601 timestamp which holds the date and time when the Subnet was
	 * created. Example format: 2013-11-29T13:00:01Z.
	 */
	get subnet_created_timestamp()
	{
		return (this._subnet_created_timestamp !== undefined ? this._subnet_created_timestamp : "0000-00-00T00:00:00Z");
	}

	set subnet_created_timestamp(subnet_created_timestamp)
	{
		this._subnet_created_timestamp = subnet_created_timestamp;
	}

	/**
	 * ISO 8601 timestamp which holds the date and time when the Subnet was edited.
	 * Example format: 2013-11-29T13:00:01Z.
	 */
	get subnet_updated_timestamp()
	{
		return (this._subnet_updated_timestamp !== undefined ? this._subnet_updated_timestamp : "0000-00-00T00:00:00Z");
	}

	set subnet_updated_timestamp(subnet_updated_timestamp)
	{
		this._subnet_updated_timestamp = subnet_updated_timestamp;
	}

	/**
	 * The operation type, operation status and modified Subnet object.
	 */
	get subnet_operation()
	{
		return (this._subnet_operation !== undefined ? this._subnet_operation : null);
	}

	set subnet_operation(subnet_operation)
	{
		this._subnet_operation = subnet_operation;
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
	get subnet_change_id()
	{
		return (this._subnet_change_id !== undefined ? this._subnet_change_id : null);
	}

	set subnet_change_id(subnet_change_id)
	{
		this._subnet_change_id = subnet_change_id;
	}

	/**
	 * Specifies if subnet will be used for allocating IP addresses via DHCP
	 */
	get subnet_automatic_allocation()
	{
		return (this._subnet_automatic_allocation !== undefined ? this._subnet_automatic_allocation : true);
	}

	set subnet_automatic_allocation(subnet_automatic_allocation)
	{
		this._subnet_automatic_allocation = subnet_automatic_allocation;
	}

	/**
	 * The required JSON fields for deserialization.
	 *
	 * @returns {Array}
	 */
	static get JSONRequired()
	{
		return [
			"subnet_type",
			"subnet_prefix_size"
		];
	}
};
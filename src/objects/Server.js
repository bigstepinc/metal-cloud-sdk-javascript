const ObjectBase = require('./ObjectBase');

/**
 * Represents a server in a datacenter.
 *
 * @class
 * @extends ObjectBase
 */
module.exports = 
class Server extends ObjectBase
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
	 * The ID of the server. It is automatically generated and cannot be edited.
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
	 * Server UUID.
	 */
	get server_uuid()
	{
		return this._server_uuid || null;
	}

	set server_uuid(server_uuid)
	{
		this._server_uuid = server_uuid;
	}

	/**
	 * Full bandwidth available.
	 */
	get server_network_total_capacity_mbps()
	{
		return this._server_network_total_capacity_mbps || null;
	}

	set server_network_total_capacity_mbps(server_network_total_capacity_mbps)
	{
		this._server_network_total_capacity_mbps = server_network_total_capacity_mbps;
	}

	/**
	 * The server power status which can have one of the values:
	 * SERVER_POWER_STATUS_ON, SERVER_POWER_STATUS_OFF.
	 */
	get server_power_status()
	{
		return this._server_power_status || null;
	}

	set server_power_status(server_power_status)
	{
		this._server_power_status = server_power_status;
	}

	/**
	 * The cores of a CPU.
	 */
	get server_processor_core_count()
	{
		return this._server_processor_core_count || 1;
	}

	set server_processor_core_count(server_processor_core_count)
	{
		this._server_processor_core_count = server_processor_core_count;
	}

	/**
	 * The clock speed of a CPU.
	 */
	get server_processor_core_mhz()
	{
		return this._server_processor_core_mhz || 1000;
	}

	set server_processor_core_mhz(server_processor_core_mhz)
	{
		this._server_processor_core_mhz = server_processor_core_mhz;
	}

	/**
	 * The CPU count on the server.
	 */
	get server_processor_count()
	{
		return this._server_processor_count || 1;
	}

	set server_processor_count(server_processor_count)
	{
		this._server_processor_count = server_processor_count;
	}

	/**
	 * The RAM capacity.
	 */
	get server_ram_gbytes()
	{
		return this._server_ram_gbytes || 1;
	}

	set server_ram_gbytes(server_ram_gbytes)
	{
		this._server_ram_gbytes = server_ram_gbytes;
	}

	/**
	 * The minimum number of physical disks.
	 */
	get server_disk_count()
	{
		return this._server_disk_count || 0;
	}

	set server_disk_count(server_disk_count)
	{
		this._server_disk_count = server_disk_count;
	}

	/**
	 * The minimum size of a single disk.
	 */
	get server_disk_size_mbytes()
	{
		return this._server_disk_size_mbytes || 0;
	}

	set server_disk_size_mbytes(server_disk_size_mbytes)
	{
		this._server_disk_size_mbytes = server_disk_size_mbytes;
	}

	/**
	 * The type of physical disks.
	 */
	get server_disk_type()
	{
		return this._server_disk_type || "none";
	}

	set server_disk_type(server_disk_type)
	{
		this._server_disk_type = server_disk_type;
	}

	/**
	 * The name of the processor.
	 */
	get server_processor_name()
	{
		return this._server_processor_name || null;
	}

	set server_processor_name(server_processor_name)
	{
		this._server_processor_name = server_processor_name;
	}

	/**
	 * The name of the server.
	 */
	get server_product_name()
	{
		return this._server_product_name || null;
	}

	set server_product_name(server_product_name)
	{
		this._server_product_name = server_product_name;
	}

	/**
	 * The ID of the server type. See server_types() for more detalis.
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
	 * The ServerInterface objects.
	 */
	get server_interfaces()
	{
		return this._server_interfaces || null;
	}

	set server_interfaces(server_interfaces)
	{
		this._server_interfaces = server_interfaces;
	}

	/**
	 * The ServerDisk objects
	 */
	get server_disks()
	{
		return this._server_disks || null;
	}

	set server_disks(server_disks)
	{
		this._server_disks = server_disks;
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
const ObjectBase = require('./ObjectBase');

/**
 * A type of server available in a datacenter. Contains hardware information.
 *
 * @class
 * @extends ObjectBase
 */
module.exports = 
class ServerType extends ObjectBase
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
	 * The ID of the server type. It is automatically generated and cannot be
	 * edited.
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
	 * The name of the server type.
	 */
	get server_type_name()
	{
		return this._server_type_name || null;
	}

	set server_type_name(server_type_name)
	{
		this._server_type_name = server_type_name;
	}

	/**
	 * The label of the server type.
	 */
	get server_type_label()
	{
		return this._server_type_label || null;
	}

	set server_type_label(server_type_label)
	{
		this._server_type_label = server_type_label;
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
	 * The names of the server processors.
	 */
	get server_processor_names_json()
	{
		return this._server_processor_names_json || null;
	}

	set server_processor_names_json(server_processor_names_json)
	{
		this._server_processor_names_json = server_processor_names_json;
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
	 * Server type very general workload type.
	 */
	get server_class()
	{
		return this._server_class || "unknown";
	}

	set server_class(server_class)
	{
		this._server_class = server_class;
	}

	/**
	 * Specifies if the server_type is experimental and only developers have access
	 * to servers of this type.
	 */
	get server_type_is_experimental()
	{
		return this._server_type_is_experimental || false;
	}

	set server_type_is_experimental(server_type_is_experimental)
	{
		this._server_type_is_experimental = server_type_is_experimental;
	}

	/**
	 * Number of servers provisioned. Used only for infrastructure_deploy().
	 */
	get server_count()
	{
		return this._server_count || null;
	}

	set server_count(server_count)
	{
		this._server_count = server_count;
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
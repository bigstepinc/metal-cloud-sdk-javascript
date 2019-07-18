const ObjectBase = require('./ObjectBase');

/**
 * HardwareConfiguration holds the desired hardware configuration when trying
 * to find available servers for provisioning.
 *
 * @class
 * @extends ObjectBase
 */
module.exports = 
class HardwareConfiguration extends ObjectBase
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
	 * The minimum RAM capacity of each instance.
	 */
	get instance_array_ram_gbytes()
	{
		return (this._instance_array_ram_gbytes !== undefined ? this._instance_array_ram_gbytes : 0);
	}

	set instance_array_ram_gbytes(instance_array_ram_gbytes)
	{
		this._instance_array_ram_gbytes = instance_array_ram_gbytes;
	}

	/**
	 * The CPU count on each instance.
	 */
	get instance_array_processor_count()
	{
		return (this._instance_array_processor_count !== undefined ? this._instance_array_processor_count : 0);
	}

	set instance_array_processor_count(instance_array_processor_count)
	{
		this._instance_array_processor_count = instance_array_processor_count;
	}

	/**
	 * The minimum clock speed of a CPU.
	 */
	get instance_array_processor_core_mhz()
	{
		return (this._instance_array_processor_core_mhz !== undefined ? this._instance_array_processor_core_mhz : 0);
	}

	set instance_array_processor_core_mhz(instance_array_processor_core_mhz)
	{
		this._instance_array_processor_core_mhz = instance_array_processor_core_mhz;
	}

	/**
	 * The minimum cores of a CPU.
	 */
	get instance_array_processor_core_count()
	{
		return (this._instance_array_processor_core_count !== undefined ? this._instance_array_processor_core_count : 0);
	}

	set instance_array_processor_core_count(instance_array_processor_core_count)
	{
		this._instance_array_processor_core_count = instance_array_processor_core_count;
	}

	/**
	 * The minumim of total MHz of the instance.
	 */
	get instance_array_total_mhz()
	{
		return (this._instance_array_total_mhz !== undefined ? this._instance_array_total_mhz : 0);
	}

	set instance_array_total_mhz(instance_array_total_mhz)
	{
		this._instance_array_total_mhz = instance_array_total_mhz;
	}

	/**
	 * The maximum number of instances in an InstanceArray.
	 */
	get instance_array_instance_count()
	{
		return (this._instance_array_instance_count !== undefined ? this._instance_array_instance_count : 0);
	}

	set instance_array_instance_count(instance_array_instance_count)
	{
		this._instance_array_instance_count = instance_array_instance_count;
	}

	/**
	 * The minimum number of physical disks.
	 */
	get instance_array_disk_count()
	{
		return (this._instance_array_disk_count !== undefined ? this._instance_array_disk_count : 0);
	}

	set instance_array_disk_count(instance_array_disk_count)
	{
		this._instance_array_disk_count = instance_array_disk_count;
	}

	/**
	 * The minimum size of a single disk.
	 */
	get instance_array_disk_size_mbytes()
	{
		return (this._instance_array_disk_size_mbytes !== undefined ? this._instance_array_disk_size_mbytes : 0);
	}

	set instance_array_disk_size_mbytes(instance_array_disk_size_mbytes)
	{
		this._instance_array_disk_size_mbytes = instance_array_disk_size_mbytes;
	}

	/**
	 * The types of physical disks.
	 */
	get instance_array_disk_types()
	{
		return (this._instance_array_disk_types !== undefined ? this._instance_array_disk_types : null);
	}

	set instance_array_disk_types(instance_array_disk_types)
	{
		this._instance_array_disk_types = instance_array_disk_types;
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
const ObjectBase = require('./ObjectBase');

/**
 * InstanceArrayOperation contains information regarding the changes that are
 * to be made to a product. Edit and deploy functions have to be called in
 * order to apply the changes. The operation type and status are unique to each
 * operation object.
 *
 * @class
 * @extends ObjectBase
 */
module.exports = 
class InstanceArrayOperation extends ObjectBase
{
	constructor(instance_array_label, instance_array_change_id)
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
				throw new Error("Invalid params in InstanceArrayOperation constructor.");
		}

		this._instance_array_label = instance_array_label;
		this._instance_array_change_id = instance_array_change_id;
	}

	/**
	 * The status of the deploy process.
	 */
	get instance_array_deploy_status()
	{
		return this._instance_array_deploy_status || null;
	}

	set instance_array_deploy_status(instance_array_deploy_status)
	{
		this._instance_array_deploy_status = instance_array_deploy_status;
	}

	/**
	 * The operation applied to the InstanceArray.
	 */
	get instance_array_deploy_type()
	{
		return this._instance_array_deploy_type || null;
	}

	set instance_array_deploy_type(instance_array_deploy_type)
	{
		this._instance_array_deploy_type = instance_array_deploy_type;
	}

	/**
	 * The InstanceArray's unique label is used to create the
	 * instance_array_subdomain. It is editable and can be used to call API
	 * functions.
	 */
	get instance_array_label()
	{
		return this._instance_array_label || null;
	}

	set instance_array_label(instance_array_label)
	{
		this._instance_array_label = instance_array_label;
	}

	/**
	 * Automatically created based on instance_array_label. It is a unique
	 * reference to the InstanceArray object.
	 */
	get instance_array_subdomain()
	{
		return this._instance_array_subdomain || null;
	}

	set instance_array_subdomain(instance_array_subdomain)
	{
		this._instance_array_subdomain = instance_array_subdomain;
	}

	/**
	 * The ID of the InstanceArray which can be used instead of the
	 * instance_array_label or instance_array_subdomain when calling the API
	 * functions. It is automatically generated and cannot be edited.
	 */
	get instance_array_id()
	{
		return this._instance_array_id || null;
	}

	set instance_array_id(instance_array_id)
	{
		this._instance_array_id = instance_array_id;
	}

	/**
	 * The number of instances to be created on the InstanceArray.
	 */
	get instance_array_instance_count()
	{
		return this._instance_array_instance_count || null;
	}

	set instance_array_instance_count(instance_array_instance_count)
	{
		this._instance_array_instance_count = instance_array_instance_count;
	}

	/**
	 * If true and no Subnet has already been allocated, a public IPv4 will be
	 * allocated. If there are no Subnets with free IPs available, a public Subnet
	 * will be automatically created, as many times as needed.
	 */
	get instance_array_ipv4_subnet_create_auto()
	{
		return this._instance_array_ipv4_subnet_create_auto || null;
	}

	set instance_array_ipv4_subnet_create_auto(instance_array_ipv4_subnet_create_auto)
	{
		this._instance_array_ipv4_subnet_create_auto = instance_array_ipv4_subnet_create_auto;
	}

	/**
	 * Enable virtual interfaces
	 */
	get instance_array_virtual_interfaces_enabled()
	{
		return this._instance_array_virtual_interfaces_enabled || false;
	}

	set instance_array_virtual_interfaces_enabled(instance_array_virtual_interfaces_enabled)
	{
		this._instance_array_virtual_interfaces_enabled = instance_array_virtual_interfaces_enabled;
	}

	/**
	 * Automatically allocate IP addresses to child Instance's InstanceInterface
	 * elements.
	 */
	get instance_array_ip_allocate_auto()
	{
		return this._instance_array_ip_allocate_auto || null;
	}

	set instance_array_ip_allocate_auto(instance_array_ip_allocate_auto)
	{
		this._instance_array_ip_allocate_auto = instance_array_ip_allocate_auto;
	}

	/**
	 * The minimum RAM capacity of each instance.
	 */
	get instance_array_ram_gbytes()
	{
		return this._instance_array_ram_gbytes || null;
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
		return this._instance_array_processor_count || null;
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
		return this._instance_array_processor_core_mhz || null;
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
		return this._instance_array_processor_core_count || null;
	}

	set instance_array_processor_core_count(instance_array_processor_core_count)
	{
		this._instance_array_processor_core_count = instance_array_processor_core_count;
	}

	/**
	 * The minimum number of physical disks.
	 */
	get instance_array_disk_count()
	{
		return this._instance_array_disk_count || 0;
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
		return this._instance_array_disk_size_mbytes || 0;
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
		return this._instance_array_disk_types || [];
	}

	set instance_array_disk_types(instance_array_disk_types)
	{
		this._instance_array_disk_types = instance_array_disk_types;
	}

	/**
	 * ISO 8601 timestamp which holds the date and time when the InstanceArray was
	 * edited. Example format: 2013-11-29T13:00:01Z.
	 */
	get instance_array_updated_timestamp()
	{
		return this._instance_array_updated_timestamp || null;
	}

	set instance_array_updated_timestamp(instance_array_updated_timestamp)
	{
		this._instance_array_updated_timestamp = instance_array_updated_timestamp;
	}

	/**
	 * The Drive array ID associated to the InstanceArray.
	 */
	get drive_array_id_boot()
	{
		return this._drive_array_id_boot || null;
	}

	set drive_array_id_boot(drive_array_id_boot)
	{
		this._drive_array_id_boot = drive_array_id_boot;
	}

	/**
	 * Reserved for GUI users.
	 */
	get instance_array_gui_settings_json()
	{
		return this._instance_array_gui_settings_json || null;
	}

	set instance_array_gui_settings_json(instance_array_gui_settings_json)
	{
		this._instance_array_gui_settings_json = instance_array_gui_settings_json;
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
	get instance_array_change_id()
	{
		return this._instance_array_change_id || null;
	}

	set instance_array_change_id(instance_array_change_id)
	{
		this._instance_array_change_id = instance_array_change_id;
	}

	/**
	 * An array of InstanceArrayInterfaceOperation objects indexed from 0 to 3.
	 */
	get instance_array_interfaces()
	{
		return this._instance_array_interfaces || [];
	}

	set instance_array_interfaces(instance_array_interfaces)
	{
		this._instance_array_interfaces = instance_array_interfaces;
	}

	/**
	 * When set to false, all firewall rules on the server are removed and the
	 * firewall rules specified in the instance_array_firewall_rules property will
	 * no longer be applied on the server. When set to true, the firewall rules
	 * specified in the instance_array_firewall_rules property will be applied on
	 * the server.
	 */
	get instance_array_firewall_managed()
	{
		return this._instance_array_firewall_managed || null;
	}

	set instance_array_firewall_managed(instance_array_firewall_managed)
	{
		this._instance_array_firewall_managed = instance_array_firewall_managed;
	}

	/**
	 * Contains the firewall rules.
	 */
	get instance_array_firewall_rules()
	{
		return this._instance_array_firewall_rules || [];
	}

	set instance_array_firewall_rules(instance_array_firewall_rules)
	{
		this._instance_array_firewall_rules = instance_array_firewall_rules;
	}

	/**
	 * The volume template ID or name.
	 */
	get volume_template_id()
	{
		return this._volume_template_id || null;
	}

	set volume_template_id(volume_template_id)
	{
		this._volume_template_id = volume_template_id;
	}

	/**
	 * The required JSON fields for deserialization.
	 *
	 * @returns {Array}
	 */
	static get JSONRequired()
	{
		return [
			"instance_array_label",
			"instance_array_change_id"
		];
	}
};
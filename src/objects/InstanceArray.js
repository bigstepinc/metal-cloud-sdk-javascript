const ObjectBase = require('./ObjectBase');

/**
 * An InstanceArray is a group of instances which share the same workload (thus
 * enabling scalability). All instances are configured simultaneously through
 * their InstanceArray. Deploying an InstanceArray has the effect of allocating
 * servers to instances and activating network configurations.
 *
 * @class
 * @extends ObjectBase
 */
module.exports = 
class InstanceArray extends ObjectBase
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
		return this._instance_array_instance_count || 1;
	}

	set instance_array_instance_count(instance_array_instance_count)
	{
		this._instance_array_instance_count = instance_array_instance_count;
	}

	/**
	 * Automatically create or expand Subnet elements until the necessary IPv4
	 * addresses are allocated.
	 */
	get instance_array_ipv4_subnet_create_auto()
	{
		return this._instance_array_ipv4_subnet_create_auto || true;
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
		return this._instance_array_ip_allocate_auto || true;
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
		return this._instance_array_ram_gbytes || 1;
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
		return this._instance_array_processor_count || 1;
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
		return this._instance_array_processor_core_mhz || 1000;
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
		return this._instance_array_processor_core_count || 1;
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
	 * Represents the infrastructure ID to which the InstanceArray belongs.
	 */
	get infrastructure_id()
	{
		return this._infrastructure_id || null;
	}

	set infrastructure_id(infrastructure_id)
	{
		this._infrastructure_id = infrastructure_id;
	}

	/**
	 * The DriveArray from which the servers boot. If null, and the servers in the
	 * InstanceArray don't have local disks, then the instances will not boot even
	 * if DriveArray elements are attached.
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
	 * The status of the InstanceArray.
	 */
	get instance_array_service_status()
	{
		return this._instance_array_service_status || null;
	}

	set instance_array_service_status(instance_array_service_status)
	{
		this._instance_array_service_status = instance_array_service_status;
	}

	/**
	 * The operation type, operation status and modified InstanceArray object.
	 */
	get instance_array_operation()
	{
		return this._instance_array_operation || null;
	}

	set instance_array_operation(instance_array_operation)
	{
		this._instance_array_operation = instance_array_operation;
	}

	/**
	 * An array of InstanceArrayInterface objects indexed from 0 to 3.
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
	 * If not null, then the InstanceArray is part of the specified Cluster.
	 */
	get cluster_id()
	{
		return this._cluster_id || null;
	}

	set cluster_id(cluster_id)
	{
		this._cluster_id = cluster_id;
	}

	/**
	 *
	 */
	get cluster_role_group()
	{
		return this._cluster_role_group || "none";
	}

	set cluster_role_group(cluster_role_group)
	{
		this._cluster_role_group = cluster_role_group;
	}

	/**
	 * Reserved for GUI users.
	 */
	get instance_array_gui_settings_json()
	{
		return this._instance_array_gui_settings_json || "";
	}

	set instance_array_gui_settings_json(instance_array_gui_settings_json)
	{
		this._instance_array_gui_settings_json = instance_array_gui_settings_json;
	}

	/**
	 * ISO 8601 timestamp which holds the date and time when the InstanceArray was
	 * created. Example format: 2013-11-29T13:00:01Z.
	 */
	get instance_array_created_timestamp()
	{
		return this._instance_array_created_timestamp || "0000-00-00T00:00:00Z";
	}

	set instance_array_created_timestamp(instance_array_created_timestamp)
	{
		this._instance_array_created_timestamp = instance_array_created_timestamp;
	}

	/**
	 * ISO 8601 timestamp which holds the date and time when the InstanceArray was
	 * edited. Example format: 2013-11-29T13:00:01Z.
	 */
	get instance_array_updated_timestamp()
	{
		return this._instance_array_updated_timestamp || "0000-00-00T00:00:00Z";
	}

	set instance_array_updated_timestamp(instance_array_updated_timestamp)
	{
		this._instance_array_updated_timestamp = instance_array_updated_timestamp;
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
	 * When set to true, all firewall rules on the server are removed and the
	 * firewall rules specified in the instance_array_firewall_rules property are
	 * applied on the server. When set to false, the firewall rules specified in
	 * the instance_array_firewall_rules property are ignored. The feature only
	 * works for drives that are using a supported OS template.
	 */
	get instance_array_firewall_managed()
	{
		return this._instance_array_firewall_managed || true;
	}

	set instance_array_firewall_managed(instance_array_firewall_managed)
	{
		this._instance_array_firewall_managed = instance_array_firewall_managed;
	}

	/**
	 * Contains the firewall rules (an array of FirewallRule objects).
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
	 * The volume template ID (or name) to use if the servers in the InstanceArray
	 * have local disks.
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

		];
	}
};
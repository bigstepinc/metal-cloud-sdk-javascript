const ObjectBase = require('./ObjectBase');

/**
 * A centralised view of all child ContainerArray and Container products.
 *
 * @class
 * @extends ObjectBase
 */
module.exports = 
class ContainerPlatform extends ObjectBase
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
	 * The ContainerPlatform's unique label is used to create the
	 * container_platform_subdomain. It is editable and can be used to call API
	 * functions.
	 */
	get container_platform_label()
	{
		return (this._container_platform_label !== undefined ? this._container_platform_label : null);
	}

	set container_platform_label(container_platform_label)
	{
		this._container_platform_label = container_platform_label;
	}

	/**
	 * Automatically created based on container_platform_label. It is a unique
	 * reference to the ContainerPlatform object.
	 */
	get container_platform_subdomain()
	{
		return (this._container_platform_subdomain !== undefined ? this._container_platform_subdomain : null);
	}

	set container_platform_subdomain(container_platform_subdomain)
	{
		this._container_platform_subdomain = container_platform_subdomain;
	}

	/**
	 * The maximum number of hosts that should be used for all existing or future
	 * child ContainerArray products.
	 */
	get container_platform_maximum_hosts_count()
	{
		return (this._container_platform_maximum_hosts_count !== undefined ? this._container_platform_maximum_hosts_count : 10);
	}

	set container_platform_maximum_hosts_count(container_platform_maximum_hosts_count)
	{
		this._container_platform_maximum_hosts_count = container_platform_maximum_hosts_count;
	}

	/**
	 * The desired minimum number of hosts that should be used for all existing or
	 * future child ContainerArray products.
	 */
	get container_platform_minimum_hosts_count()
	{
		return (this._container_platform_minimum_hosts_count !== undefined ? this._container_platform_minimum_hosts_count : 0);
	}

	set container_platform_minimum_hosts_count(container_platform_minimum_hosts_count)
	{
		this._container_platform_minimum_hosts_count = container_platform_minimum_hosts_count;
	}

	/**
	 * The ID of the ContainerPlatform which can be used instead of the
	 * container_platform_label or container_platform_subdomain when calling the
	 * API functions. It is automatically generated and cannot be edited.
	 */
	get container_platform_id()
	{
		return (this._container_platform_id !== undefined ? this._container_platform_id : null);
	}

	set container_platform_id(container_platform_id)
	{
		this._container_platform_id = container_platform_id;
	}

	/**
	 * Represents the infrastructure ID to which the ContainerPlatform belongs.
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
	 * Represents the capacity of the Data Drive.
	 */
	get container_platform_data_drive_size_mbytes()
	{
		return (this._container_platform_data_drive_size_mbytes !== undefined ? this._container_platform_data_drive_size_mbytes : 102400);
	}

	set container_platform_data_drive_size_mbytes(container_platform_data_drive_size_mbytes)
	{
		this._container_platform_data_drive_size_mbytes = container_platform_data_drive_size_mbytes;
	}

	/**
	 * The status of the ContainerPlatform.
	 */
	get container_platform_service_status()
	{
		return (this._container_platform_service_status !== undefined ? this._container_platform_service_status : null);
	}

	set container_platform_service_status(container_platform_service_status)
	{
		this._container_platform_service_status = container_platform_service_status;
	}

	/**
	 * The operation type, operation status and modified ContainerPlatform object.
	 */
	get container_platform_operation()
	{
		return (this._container_platform_operation !== undefined ? this._container_platform_operation : null);
	}

	set container_platform_operation(container_platform_operation)
	{
		this._container_platform_operation = container_platform_operation;
	}

	/**
	 * Reserved for GUI users.
	 */
	get container_platform_gui_settings_json()
	{
		return (this._container_platform_gui_settings_json !== undefined ? this._container_platform_gui_settings_json : "");
	}

	set container_platform_gui_settings_json(container_platform_gui_settings_json)
	{
		this._container_platform_gui_settings_json = container_platform_gui_settings_json;
	}

	/**
	 * When set to true, all firewall rules on the underlying hosts are removed and
	 * the firewall rules specified in the instance_array_firewall_rules property
	 * are applied on the servers. When set to false, the firewall rules specified
	 * in the instance_array_firewall_rules property are ignored. The feature only
	 * works for drives that are using a supported OS template.
	 */
	get container_platform_firewall_managed()
	{
		return (this._container_platform_firewall_managed !== undefined ? this._container_platform_firewall_managed : true);
	}

	set container_platform_firewall_managed(container_platform_firewall_managed)
	{
		this._container_platform_firewall_managed = container_platform_firewall_managed;
	}

	/**
	 * Contains the hardware configuration for this ContainerPlatform.
	 */
	get container_platform_hardware_configuration()
	{
		return (this._container_platform_hardware_configuration !== undefined ? this._container_platform_hardware_configuration : null);
	}

	set container_platform_hardware_configuration(container_platform_hardware_configuration)
	{
		this._container_platform_hardware_configuration = container_platform_hardware_configuration;
	}

	/**
	 * Information about hosts regarding servers to allocate
	 */
	get container_platform_hosts()
	{
		return (this._container_platform_hosts !== undefined ? this._container_platform_hosts : []);
	}

	set container_platform_hosts(container_platform_hosts)
	{
		this._container_platform_hosts = container_platform_hosts;
	}

	/**
	 * Contains the firewall rules.
	 */
	get container_platform_firewall_rules()
	{
		return (this._container_platform_firewall_rules !== undefined ? this._container_platform_firewall_rules : []);
	}

	set container_platform_firewall_rules(container_platform_firewall_rules)
	{
		this._container_platform_firewall_rules = container_platform_firewall_rules;
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
	 * This property helps ensure that edit operations don't overwrite other, more
	 * recent changes made to the same object. It gets updated automatically after
	 * each successful edit operation.
	 */
	get container_platform_change_id()
	{
		return (this._container_platform_change_id !== undefined ? this._container_platform_change_id : null);
	}

	set container_platform_change_id(container_platform_change_id)
	{
		this._container_platform_change_id = container_platform_change_id;
	}

	/**
	 * Contains the resource report of the ContainerPlatform.
	 */
	get container_platform_resource_report()
	{
		return (this._container_platform_resource_report !== undefined ? this._container_platform_resource_report : null);
	}

	set container_platform_resource_report(container_platform_resource_report)
	{
		this._container_platform_resource_report = container_platform_resource_report;
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
const ObjectBase = require('./ObjectBase');

/**
 * ContainerPlatformOperation contains information regarding the changes that
 * are to be made to a product. Edit and deploy functions have to be called in
 * order to apply the changes. The operation type and status are unique to each
 * operation object.
 *
 * @class
 * @extends ObjectBase
 */
module.exports = 
class ContainerPlatformOperation extends ObjectBase
{
	constructor(container_platform_label, container_platform_change_id)
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
				throw new Error("Invalid params in ContainerPlatformOperation constructor.");
		}

		this._container_platform_label = container_platform_label;
		this._container_platform_change_id = container_platform_change_id;
	}

	/**
	 * The status of the deploy process.
	 */
	get container_platform_deploy_status()
	{
		return this._container_platform_deploy_status || null;
	}

	set container_platform_deploy_status(container_platform_deploy_status)
	{
		this._container_platform_deploy_status = container_platform_deploy_status;
	}

	/**
	 * The operation to be applied to the ContainerPlatform.
	 */
	get container_platform_deploy_type()
	{
		return this._container_platform_deploy_type || null;
	}

	set container_platform_deploy_type(container_platform_deploy_type)
	{
		this._container_platform_deploy_type = container_platform_deploy_type;
	}

	/**
	 * The ContainerPlatform's unique label is used to create the
	 * container_platform_subdomain. It is editable and can be used to call API
	 * functions.
	 */
	get container_platform_label()
	{
		return this._container_platform_label || null;
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
		return this._container_platform_subdomain || null;
	}

	set container_platform_subdomain(container_platform_subdomain)
	{
		this._container_platform_subdomain = container_platform_subdomain;
	}

	/**
	 * The desired maximum number of hosts that should be used for all existing or
	 * future child ContainerArray products.
	 */
	get container_platform_maximum_hosts_count()
	{
		return this._container_platform_maximum_hosts_count || 10;
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
		return this._container_platform_minimum_hosts_count || 0;
	}

	set container_platform_minimum_hosts_count(container_platform_minimum_hosts_count)
	{
		this._container_platform_minimum_hosts_count = container_platform_minimum_hosts_count;
	}

	/**
	 * Represents the capacity of the Data Drive.
	 */
	get container_platform_data_drive_size_mbytes()
	{
		return this._container_platform_data_drive_size_mbytes || 102400;
	}

	set container_platform_data_drive_size_mbytes(container_platform_data_drive_size_mbytes)
	{
		this._container_platform_data_drive_size_mbytes = container_platform_data_drive_size_mbytes;
	}

	/**
	 * The ID of the ContainerPlatform which can be used instead of the
	 * container_platform_label or container_platform_subdomain when calling the
	 * API functions. It is automatically generated and cannot be edited.
	 */
	get container_platform_id()
	{
		return this._container_platform_id || null;
	}

	set container_platform_id(container_platform_id)
	{
		this._container_platform_id = container_platform_id;
	}

	/**
	 * Contains the hardware configuration for this ContainerPlatform.
	 */
	get container_platform_hardware_configuration()
	{
		return this._container_platform_hardware_configuration || null;
	}

	set container_platform_hardware_configuration(container_platform_hardware_configuration)
	{
		this._container_platform_hardware_configuration = container_platform_hardware_configuration;
	}

	/**
	 * When set to false, all firewall rules on the underlying hosts are removed
	 * and the firewall rules specified in the container_platform_firewall_rules
	 * property will no longer be applied on the underlying hosts. When set to true,
	 *  the firewall rules specified in the container_platform_firewall_rules
	 * property will be applied on the underlying hosts.
	 */
	get container_platform_firewall_managed()
	{
		return this._container_platform_firewall_managed || null;
	}

	set container_platform_firewall_managed(container_platform_firewall_managed)
	{
		this._container_platform_firewall_managed = container_platform_firewall_managed;
	}

	/**
	 * Contains the firewall rules.
	 */
	get container_platform_firewall_rules()
	{
		return this._container_platform_firewall_rules || [];
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
		return this._type || null;
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
		return this._container_platform_change_id || null;
	}

	set container_platform_change_id(container_platform_change_id)
	{
		this._container_platform_change_id = container_platform_change_id;
	}

	/**
	 * The required JSON fields for deserialization.
	 *
	 * @returns {Array}
	 */
	static get JSONRequired()
	{
		return [
			"container_platform_label",
			"container_platform_change_id"
		];
	}
};
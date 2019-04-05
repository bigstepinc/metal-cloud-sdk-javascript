const ObjectBase = require('./ObjectBase');

/**
 * ContainerArrayOperation contains information regarding the changes that are
 * to be made to a product. Edit and deploy functions have to be called in
 * order to apply the changes. The operation type and status are unique to each
 * operation object.
 *
 * @class
 * @extends ObjectBase
 */
module.exports = 
class ContainerArrayOperation extends ObjectBase
{
	constructor(container_array_change_id, container_array_label)
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
				throw new Error("Invalid params in ContainerArrayOperation constructor.");
		}

		this._container_array_change_id = container_array_change_id;
		this._container_array_label = container_array_label;
	}

	/**
	 * The ID of the ContainerArray which can be used instead of the
	 * container_array_label or container_array_subdomain when calling the API
	 * functions. It is automatically generated and cannot be edited.
	 */
	get container_array_id()
	{
		return (this._container_array_id !== undefined ? this._container_array_id : null);
	}

	set container_array_id(container_array_id)
	{
		this._container_array_id = container_array_id;
	}

	/**
	 * This property helps ensure that edit operations don't overwrite other, more
	 * recent changes made to the same object. It gets updated automatically after
	 * each successful edit operation.
	 */
	get container_array_change_id()
	{
		return (this._container_array_change_id !== undefined ? this._container_array_change_id : null);
	}

	set container_array_change_id(container_array_change_id)
	{
		this._container_array_change_id = container_array_change_id;
	}

	/**
	 * The ContainerArray's unique label is used to create the
	 * container_array_subdomain. It is editable and can be used to call API
	 * functions.
	 */
	get container_array_label()
	{
		return (this._container_array_label !== undefined ? this._container_array_label : null);
	}

	set container_array_label(container_array_label)
	{
		this._container_array_label = container_array_label;
	}

	/**
	 * Automatically created based on container_array_label. It is a unique
	 * reference to the ContainerArray object.
	 */
	get container_array_subdomain()
	{
		return (this._container_array_subdomain !== undefined ? this._container_array_subdomain : null);
	}

	set container_array_subdomain(container_array_subdomain)
	{
		this._container_array_subdomain = container_array_subdomain;
	}

	/**
	 * The operation applied to the ContainerArray.
	 */
	get container_array_deploy_type()
	{
		return (this._container_array_deploy_type !== undefined ? this._container_array_deploy_type : null);
	}

	set container_array_deploy_type(container_array_deploy_type)
	{
		this._container_array_deploy_type = container_array_deploy_type;
	}

	/**
	 * The status of the deploy process.
	 */
	get container_array_deploy_status()
	{
		return (this._container_array_deploy_status !== undefined ? this._container_array_deploy_status : null);
	}

	set container_array_deploy_status(container_array_deploy_status)
	{
		this._container_array_deploy_status = container_array_deploy_status;
	}

	/**
	 * All ContainerArrayInterfaceOperation objects.
	 */
	get container_array_interfaces()
	{
		return (this._container_array_interfaces !== undefined ? this._container_array_interfaces : []);
	}

	set container_array_interfaces(container_array_interfaces)
	{
		this._container_array_interfaces = container_array_interfaces;
	}

	/**
	 * The resource requirements in terms of RAM for a Container of the
	 * ContainerArray.
	 */
	get container_array_ram_mbytes()
	{
		return (this._container_array_ram_mbytes !== undefined ? this._container_array_ram_mbytes : null);
	}

	set container_array_ram_mbytes(container_array_ram_mbytes)
	{
		this._container_array_ram_mbytes = container_array_ram_mbytes;
	}

	/**
	 * The resource requirements in terms of CPU cores for a Container of the
	 * ContainerArray.
	 */
	get container_array_processor_core_count()
	{
		return (this._container_array_processor_core_count !== undefined ? this._container_array_processor_core_count : null);
	}

	set container_array_processor_core_count(container_array_processor_core_count)
	{
		this._container_array_processor_core_count = container_array_processor_core_count;
	}

	/**
	 * The number of Containers of the ContainerArray.
	 */
	get container_array_container_count()
	{
		return (this._container_array_container_count !== undefined ? this._container_array_container_count : null);
	}

	set container_array_container_count(container_array_container_count)
	{
		this._container_array_container_count = container_array_container_count;
	}

	/**
	 * The Docker image of the ContainerArray.
	 */
	get container_array_application_image()
	{
		return (this._container_array_application_image !== undefined ? this._container_array_application_image : "bigstepinc/hello-world");
	}

	set container_array_application_image(container_array_application_image)
	{
		this._container_array_application_image = container_array_application_image;
	}

	/**
	 * Container entrypoint command override for the ContainerArray.
	 */
	get container_array_entrypoint_command_override()
	{
		return (this._container_array_entrypoint_command_override !== undefined ? this._container_array_entrypoint_command_override : []);
	}

	set container_array_entrypoint_command_override(container_array_entrypoint_command_override)
	{
		this._container_array_entrypoint_command_override = container_array_entrypoint_command_override;
	}

	/**
	 * Container entrypoint arguments for the ContainerArray.
	 */
	get container_array_entrypoint_args()
	{
		return (this._container_array_entrypoint_args !== undefined ? this._container_array_entrypoint_args : []);
	}

	set container_array_entrypoint_args(container_array_entrypoint_args)
	{
		this._container_array_entrypoint_args = container_array_entrypoint_args;
	}

	/**
	 * The ContainerArrayEnvironmentVariable objects of the ContainerArray.
	 */
	get container_array_environment_variables()
	{
		return (this._container_array_environment_variables !== undefined ? this._container_array_environment_variables : []);
	}

	set container_array_environment_variables(container_array_environment_variables)
	{
		this._container_array_environment_variables = container_array_environment_variables;
	}

	/**
	 * ContainerArrayConfigMap object.
	 */
	get container_array_config_map()
	{
		return (this._container_array_config_map !== undefined ? this._container_array_config_map : null);
	}

	set container_array_config_map(container_array_config_map)
	{
		this._container_array_config_map = container_array_config_map;
	}

	/**
	 * The ContainerArrayPortMapping objects of the ContainerArray.
	 */
	get container_array_port_mappings()
	{
		return (this._container_array_port_mappings !== undefined ? this._container_array_port_mappings : []);
	}

	set container_array_port_mappings(container_array_port_mappings)
	{
		this._container_array_port_mappings = container_array_port_mappings;
	}

	/**
	 * The ContainerArraySecret objects of the ContainerArray.
	 */
	get container_array_secrets()
	{
		return (this._container_array_secrets !== undefined ? this._container_array_secrets : []);
	}

	set container_array_secrets(container_array_secrets)
	{
		this._container_array_secrets = container_array_secrets;
	}

	/**
	 * The ContainerArrayVolatileVolume objects of the ContainerArray.
	 */
	get container_array_volatile_volumes()
	{
		return (this._container_array_volatile_volumes !== undefined ? this._container_array_volatile_volumes : []);
	}

	set container_array_volatile_volumes(container_array_volatile_volumes)
	{
		this._container_array_volatile_volumes = container_array_volatile_volumes;
	}

	/**
	 * The ContainerArrayPersistentVolume objects of the ContainerArray.
	 */
	get container_array_persistent_volumes()
	{
		return (this._container_array_persistent_volumes !== undefined ? this._container_array_persistent_volumes : []);
	}

	set container_array_persistent_volumes(container_array_persistent_volumes)
	{
		this._container_array_persistent_volumes = container_array_persistent_volumes;
	}

	/**
	 * ContainerArrayReadinessCheck object that asseses the readiness of the
	 * ContainerArray Containers.
	 */
	get container_array_readiness_check()
	{
		return (this._container_array_readiness_check !== undefined ? this._container_array_readiness_check : null);
	}

	set container_array_readiness_check(container_array_readiness_check)
	{
		this._container_array_readiness_check = container_array_readiness_check;
	}

	/**
	 * ContainerArrayLivenessCheck object that asseses the liveness of the
	 * ContainerArray Containers.
	 */
	get container_array_liveness_check()
	{
		return (this._container_array_liveness_check !== undefined ? this._container_array_liveness_check : null);
	}

	set container_array_liveness_check(container_array_liveness_check)
	{
		this._container_array_liveness_check = container_array_liveness_check;
	}

	/**
	 * Reserved for GUI users.
	 */
	get container_array_gui_settings_json()
	{
		return (this._container_array_gui_settings_json !== undefined ? this._container_array_gui_settings_json : null);
	}

	set container_array_gui_settings_json(container_array_gui_settings_json)
	{
		this._container_array_gui_settings_json = container_array_gui_settings_json;
	}

	/**
	 * ISO 8601 timestamp which holds the date and time when the ContainerArray was
	 * edited. Example format: 2013-11-29T13:00:01Z.
	 */
	get container_array_updated_timestamp()
	{
		return (this._container_array_updated_timestamp !== undefined ? this._container_array_updated_timestamp : null);
	}

	set container_array_updated_timestamp(container_array_updated_timestamp)
	{
		this._container_array_updated_timestamp = container_array_updated_timestamp;
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
			"container_array_change_id",
			"container_array_label"
		];
	}
};
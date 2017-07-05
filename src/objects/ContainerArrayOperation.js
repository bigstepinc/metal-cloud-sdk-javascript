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
	constructor(container_array_label, container_array_change_id)
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

		this._container_array_label = container_array_label;
		this._container_array_change_id = container_array_change_id;
	}

	/**
	 * The status of the deploy process.
	 */
	get container_array_deploy_status()
	{
		return this._container_array_deploy_status || null;
	}

	set container_array_deploy_status(container_array_deploy_status)
	{
		this._container_array_deploy_status = container_array_deploy_status;
	}

	/**
	 * The operation applied to the ContainerArray.
	 */
	get container_array_deploy_type()
	{
		return this._container_array_deploy_type || null;
	}

	set container_array_deploy_type(container_array_deploy_type)
	{
		this._container_array_deploy_type = container_array_deploy_type;
	}

	/**
	 * The ContainerArray's unique label is used to create the
	 * container_array_subdomain. It is editable and can be used to call API
	 * functions.
	 */
	get container_array_label()
	{
		return this._container_array_label || null;
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
		return this._container_array_subdomain || null;
	}

	set container_array_subdomain(container_array_subdomain)
	{
		this._container_array_subdomain = container_array_subdomain;
	}

	/**
	 * The ID of the ContainerArray which can be used instead of the
	 * container_array_label or container_array_subdomain when calling the API
	 * functions. It is automatically generated and cannot be edited.
	 */
	get container_array_id()
	{
		return this._container_array_id || null;
	}

	set container_array_id(container_array_id)
	{
		this._container_array_id = container_array_id;
	}

	/**
	 * The number of Container products to be created on the ContainerArray.
	 */
	get container_array_container_count()
	{
		return this._container_array_container_count || null;
	}

	set container_array_container_count(container_array_container_count)
	{
		this._container_array_container_count = container_array_container_count;
	}

	/**
	 * The minimum RAM capacity of each container.
	 */
	get container_array_ram_mbytes()
	{
		return this._container_array_ram_mbytes || null;
	}

	set container_array_ram_mbytes(container_array_ram_mbytes)
	{
		this._container_array_ram_mbytes = container_array_ram_mbytes;
	}

	/**
	 * The minimum cores of a CPU.
	 */
	get container_array_processor_core_count()
	{
		return this._container_array_processor_core_count || null;
	}

	set container_array_processor_core_count(container_array_processor_core_count)
	{
		this._container_array_processor_core_count = container_array_processor_core_count;
	}

	/**
	 * ISO 8601 timestamp which holds the date and time when the ContainerArray was
	 * edited. Example format: 2013-11-29T13:00:01Z.
	 */
	get container_array_updated_timestamp()
	{
		return this._container_array_updated_timestamp || null;
	}

	set container_array_updated_timestamp(container_array_updated_timestamp)
	{
		this._container_array_updated_timestamp = container_array_updated_timestamp;
	}

	/**
	 * All ContainerArrayInterfaceOperation objects with indexes 0 and 1.
	 */
	get container_array_interfaces()
	{
		return this._container_array_interfaces || [];
	}

	set container_array_interfaces(container_array_interfaces)
	{
		this._container_array_interfaces = container_array_interfaces;
	}

	/**
	 * The application image on Docker server that will be installed on the
	 * Container.
	 */
	get container_array_application_image()
	{
		return this._container_array_application_image || "bigstepinc/hello-world";
	}

	set container_array_application_image(container_array_application_image)
	{
		this._container_array_application_image = container_array_application_image;
	}

	/**
	 * The command that is executed when the Containers are deployed.
	 */
	get container_entrypoint_command_override()
	{
		return this._container_entrypoint_command_override || null;
	}

	set container_entrypoint_command_override(container_entrypoint_command_override)
	{
		this._container_entrypoint_command_override = container_entrypoint_command_override;
	}

	/**
	 * An array of strings that represents an alternative mode of specifying the
	 * command to run.
	 */
	get container_entrypoint_args()
	{
		return this._container_entrypoint_args || [];
	}

	set container_entrypoint_args(container_entrypoint_args)
	{
		this._container_entrypoint_args = container_entrypoint_args;
	}

	/**
	 * A list of services upon which this application depends.
	 */
	get container_dependencies()
	{
		return this._container_dependencies || [];
	}

	set container_dependencies(container_dependencies)
	{
		this._container_dependencies = container_dependencies;
	}

	/**
	 * ContainerURIs are archived assets that get downloaded before a Container is
	 * instantiated.
	 */
	get container_uris()
	{
		return this._container_uris || [];
	}

	set container_uris(container_uris)
	{
		this._container_uris = container_uris;
	}

	/**
	 * A list of parameters received in the key/value format, used to configure the
	 * docker image.
	 */
	get container_parameters()
	{
		return this._container_parameters || [];
	}

	set container_parameters(container_parameters)
	{
		this._container_parameters = container_parameters;
	}

	/**
	 * All ContainerEnvironmentVariable objects defined for the ContainerArray
	 * application.
	 */
	get container_environment_variables()
	{
		return this._container_environment_variables || [];
	}

	set container_environment_variables(container_environment_variables)
	{
		this._container_environment_variables = container_environment_variables;
	}

	/**
	 * All ContainerVolume objects defined for the ContainerArray application.
	 */
	get container_volumes()
	{
		return this._container_volumes || [];
	}

	set container_volumes(container_volumes)
	{
		this._container_volumes = container_volumes;
	}

	/**
	 * All ContainerVolume objects that represent persistent volumes defined for
	 * the ContainerArray application.
	 */
	get container_persistent_volumes()
	{
		return this._container_persistent_volumes || [];
	}

	set container_persistent_volumes(container_persistent_volumes)
	{
		this._container_persistent_volumes = container_persistent_volumes;
	}

	/**
	 * All ContainerHealthcheck objects defined for the ContainerArray application.
	 */
	get container_healthchecks()
	{
		return this._container_healthchecks || [];
	}

	set container_healthchecks(container_healthchecks)
	{
		this._container_healthchecks = container_healthchecks;
	}

	/**
	 * All ContainerPortMapping objects defined for the ContainerArray application.
	 */
	get container_port_mappings()
	{
		return this._container_port_mappings || [];
	}

	set container_port_mappings(container_port_mappings)
	{
		this._container_port_mappings = container_port_mappings;
	}

	/**
	 * Reserved for GUI users.
	 */
	get container_array_gui_settings_json()
	{
		return this._container_array_gui_settings_json || null;
	}

	set container_array_gui_settings_json(container_array_gui_settings_json)
	{
		this._container_array_gui_settings_json = container_array_gui_settings_json;
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
	 * This property helps ensure that edit operations don't overwrite other, more
	 * recent changes made to the same object. It gets updated automatically after
	 * each successful edit operation.
	 */
	get container_array_change_id()
	{
		return this._container_array_change_id || null;
	}

	set container_array_change_id(container_array_change_id)
	{
		this._container_array_change_id = container_array_change_id;
	}

	/**
	 * The required JSON fields for deserialization.
	 *
	 * @returns {Array}
	 */
	static get JSONRequired()
	{
		return [
			"container_array_label",
			"container_array_change_id"
		];
	}
};
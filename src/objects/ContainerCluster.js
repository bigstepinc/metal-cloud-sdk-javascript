const ObjectBase = require('./ObjectBase');

/**
 * A group of ContainerArray infrastructure elements preconfigured for specific
 * workloads or roles. Software (SaaS) is automatically installed.
 *
 * @class
 * @extends ObjectBase
 */
module.exports = 
class ContainerCluster extends ObjectBase
{
	constructor(container_cluster_type)
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

		if(container_cluster_type === undefined || container_cluster_type === null)
			throw new Error("Invalid param in ContainerCluster constructor.");

		this._container_cluster_type = container_cluster_type;
	}

	/**
	 * The ContainerCluster's unique label is used to create the
	 * container_cluster_subdomain. It is editable and can be used to call API
	 * functions.
	 */
	get container_cluster_label()
	{
		return (this._container_cluster_label !== undefined ? this._container_cluster_label : null);
	}

	set container_cluster_label(container_cluster_label)
	{
		this._container_cluster_label = container_cluster_label;
	}

	/**
	 * Automatically created based on container_cluster_label. It is a unique
	 * reference to the ContainerCluster object.
	 */
	get container_cluster_subdomain()
	{
		return (this._container_cluster_subdomain !== undefined ? this._container_cluster_subdomain : null);
	}

	set container_cluster_subdomain(container_cluster_subdomain)
	{
		this._container_cluster_subdomain = container_cluster_subdomain;
	}

	/**
	 * The ID of the ContainerCluster which can be used instead of the
	 * container_cluster_label or container_cluster_subdomain when calling the API
	 * functions. It is automatically generated and cannot be edited.
	 */
	get container_cluster_id()
	{
		return (this._container_cluster_id !== undefined ? this._container_cluster_id : null);
	}

	set container_cluster_id(container_cluster_id)
	{
		this._container_cluster_id = container_cluster_id;
	}

	/**
	 * Represents the ID of the Infrastructure to which the ContainerCluster
	 * belongs.
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
	 * Represents the ID of the ContainerPlatform to which the ContainerCluster
	 * belongs.
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
	 * Type of the ContainerCluster. This property is not editable.
	 */
	get container_cluster_type()
	{
		return (this._container_cluster_type !== undefined ? this._container_cluster_type : null);
	}

	set container_cluster_type(container_cluster_type)
	{
		this._container_cluster_type = container_cluster_type;
	}

	/**
	 * The status of the ContainerCluster.
	 */
	get container_cluster_service_status()
	{
		return (this._container_cluster_service_status !== undefined ? this._container_cluster_service_status : null);
	}

	set container_cluster_service_status(container_cluster_service_status)
	{
		this._container_cluster_service_status = container_cluster_service_status;
	}

	/**
	 * The software version of the application installed on the cluster.
	 */
	get container_cluster_software_version()
	{
		return (this._container_cluster_software_version !== undefined ? this._container_cluster_software_version : null);
	}

	set container_cluster_software_version(container_cluster_software_version)
	{
		this._container_cluster_software_version = container_cluster_software_version;
	}

	/**
	 * Specifies if the ContainerCluster will be automatically managed or not.
	 */
	get container_cluster_automatic_management()
	{
		return (this._container_cluster_automatic_management !== undefined ? this._container_cluster_automatic_management : true);
	}

	set container_cluster_automatic_management(container_cluster_automatic_management)
	{
		this._container_cluster_automatic_management = container_cluster_automatic_management;
	}

	/**
	 * Information about the instances and the ContainerCluster software.
	 */
	get container_cluster_app()
	{
		return (this._container_cluster_app !== undefined ? this._container_cluster_app : null);
	}

	set container_cluster_app(container_cluster_app)
	{
		this._container_cluster_app = container_cluster_app;
	}

	/**
	 * The operation type, operation status and modified ContainerCluster object.
	 */
	get container_cluster_operation()
	{
		return (this._container_cluster_operation !== undefined ? this._container_cluster_operation : null);
	}

	set container_cluster_operation(container_cluster_operation)
	{
		this._container_cluster_operation = container_cluster_operation;
	}

	/**
	 * Reserved for GUI users.
	 */
	get container_cluster_gui_settings_json()
	{
		return (this._container_cluster_gui_settings_json !== undefined ? this._container_cluster_gui_settings_json : "");
	}

	set container_cluster_gui_settings_json(container_cluster_gui_settings_json)
	{
		this._container_cluster_gui_settings_json = container_cluster_gui_settings_json;
	}

	/**
	 * Information about connections between the current ContainerCluster and other
	 * clusters.
	 */
	get container_cluster_connections()
	{
		return (this._container_cluster_connections !== undefined ? this._container_cluster_connections : []);
	}

	set container_cluster_connections(container_cluster_connections)
	{
		this._container_cluster_connections = container_cluster_connections;
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
	 * This property helps ensure that edit operations don’t overwrite other,
	 * more recent changes made to the same object. It gets updated automatically
	 * after each successful edit operation.
	 */
	get container_cluster_change_id()
	{
		return (this._container_cluster_change_id !== undefined ? this._container_cluster_change_id : null);
	}

	set container_cluster_change_id(container_cluster_change_id)
	{
		this._container_cluster_change_id = container_cluster_change_id;
	}

	/**
	 * The required JSON fields for deserialization.
	 *
	 * @returns {Array}
	 */
	static get JSONRequired()
	{
		return [
			"container_cluster_type"
		];
	}
};
const ObjectBase = require('./ObjectBase');

/**
 * ContainerClusterOperation contains information regarding the changes that
 * are to be made to a product. Edit and deploy functions have to be called in
 * order to apply the changes. The operation type and status are unique to each
 * operation object.
 *
 * @class
 * @extends ObjectBase
 */
module.exports = 
class ContainerClusterOperation extends ObjectBase
{
	constructor(container_cluster_label, container_cluster_change_id)
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
				throw new Error("Invalid params in ContainerClusterOperation constructor.");
		}

		this._container_cluster_label = container_cluster_label;
		this._container_cluster_change_id = container_cluster_change_id;
	}

	/**
	 * The status of the deploy process.
	 */
	get container_cluster_deploy_status()
	{
		return (this._container_cluster_deploy_status !== undefined ? this._container_cluster_deploy_status : null);
	}

	set container_cluster_deploy_status(container_cluster_deploy_status)
	{
		this._container_cluster_deploy_status = container_cluster_deploy_status;
	}

	/**
	 * The operation applied to the ContainerCluster.
	 */
	get container_cluster_deploy_type()
	{
		return (this._container_cluster_deploy_type !== undefined ? this._container_cluster_deploy_type : null);
	}

	set container_cluster_deploy_type(container_cluster_deploy_type)
	{
		this._container_cluster_deploy_type = container_cluster_deploy_type;
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
	 * reference to the ContainerCluster object..
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
	 * The installed ContainerCluster software version.
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
	 * The required JSON fields for deserialization.
	 *
	 * @returns {Array}
	 */
	static get JSONRequired()
	{
		return [
			"container_cluster_label",
			"container_cluster_change_id"
		];
	}
};
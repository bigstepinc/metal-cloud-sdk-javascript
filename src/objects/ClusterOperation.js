const ObjectBase = require('./ObjectBase');

/**
 * ClusterOperation contains information regarding the changes that are to be
 * made to a product. Edit and deploy functions have to be called in order to
 * apply the changes. The operation type and status are unique to each
 * operation object.
 *
 * @class
 * @extends ObjectBase
 */
module.exports = 
class ClusterOperation extends ObjectBase
{
	constructor(cluster_label, cluster_change_id)
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
				throw new Error("Invalid params in ClusterOperation constructor.");
		}

		this._cluster_label = cluster_label;
		this._cluster_change_id = cluster_change_id;
	}

	/**
	 * The status of the deploy process.
	 */
	get cluster_deploy_status()
	{
		return (this._cluster_deploy_status !== undefined ? this._cluster_deploy_status : null);
	}

	set cluster_deploy_status(cluster_deploy_status)
	{
		this._cluster_deploy_status = cluster_deploy_status;
	}

	/**
	 * The operation applied to the Cluster.
	 */
	get cluster_deploy_type()
	{
		return (this._cluster_deploy_type !== undefined ? this._cluster_deploy_type : null);
	}

	set cluster_deploy_type(cluster_deploy_type)
	{
		this._cluster_deploy_type = cluster_deploy_type;
	}

	/**
	 * The Cluster's unique label is used to create the cluster_subdomain. It is
	 * editable and can be used to call API functions.
	 */
	get cluster_label()
	{
		return (this._cluster_label !== undefined ? this._cluster_label : null);
	}

	set cluster_label(cluster_label)
	{
		this._cluster_label = cluster_label;
	}

	/**
	 * Automatically created based on cluster_label. It is a unique reference to
	 * the Cluster object..
	 */
	get cluster_subdomain()
	{
		return (this._cluster_subdomain !== undefined ? this._cluster_subdomain : null);
	}

	set cluster_subdomain(cluster_subdomain)
	{
		this._cluster_subdomain = cluster_subdomain;
	}

	/**
	 * The ID of the Cluster which can be used instead of the cluster_label or
	 * cluster_subdomain when calling the API functions. It is automatically
	 * generated and cannot be edited.
	 */
	get cluster_id()
	{
		return (this._cluster_id !== undefined ? this._cluster_id : null);
	}

	set cluster_id(cluster_id)
	{
		this._cluster_id = cluster_id;
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
	 * Cluster services as assigned to each instance
	 */
	get cluster_service_assignment()
	{
		return (this._cluster_service_assignment !== undefined ? this._cluster_service_assignment : {});
	}

	set cluster_service_assignment(cluster_service_assignment)
	{
		this._cluster_service_assignment = cluster_service_assignment;
	}

	/**
	 * This property helps ensure that edit operations don’t overwrite other,
	 * more recent changes made to the same object. It gets updated automatically
	 * after each successful edit operation.
	 */
	get cluster_change_id()
	{
		return (this._cluster_change_id !== undefined ? this._cluster_change_id : null);
	}

	set cluster_change_id(cluster_change_id)
	{
		this._cluster_change_id = cluster_change_id;
	}

	/**
	 * The installed cluster software version.
	 */
	get cluster_software_version()
	{
		return (this._cluster_software_version !== undefined ? this._cluster_software_version : null);
	}

	set cluster_software_version(cluster_software_version)
	{
		this._cluster_software_version = cluster_software_version;
	}

	/**
	 * Specifies if the cluster will be automatically managed or not.
	 */
	get cluster_automatic_management()
	{
		return (this._cluster_automatic_management !== undefined ? this._cluster_automatic_management : true);
	}

	set cluster_automatic_management(cluster_automatic_management)
	{
		this._cluster_automatic_management = cluster_automatic_management;
	}

	/**
	 * Information about connections between the current Cluster and other clusters.
	 */
	get cluster_connections()
	{
		return (this._cluster_connections !== undefined ? this._cluster_connections : []);
	}

	set cluster_connections(cluster_connections)
	{
		this._cluster_connections = cluster_connections;
	}

	/**
	 * The required JSON fields for deserialization.
	 *
	 * @returns {Array}
	 */
	static get JSONRequired()
	{
		return [
			"cluster_label",
			"cluster_change_id"
		];
	}
};
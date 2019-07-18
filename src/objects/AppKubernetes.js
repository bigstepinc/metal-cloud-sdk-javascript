const ObjectBase = require('./ObjectBase');

/**
 * Kubernetes cluster.
 *
 * @class
 * @extends ObjectBase
 */
module.exports = 
class AppKubernetes extends ObjectBase
{
	constructor(kubernetes_nodes)
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

		if(kubernetes_nodes === undefined || kubernetes_nodes === null)
			throw new Error("Invalid param in AppKubernetes constructor.");

		this._kubernetes_nodes = kubernetes_nodes;
	}

	/**
	 *
	 */
	get kubernetes_nodes()
	{
		return (this._kubernetes_nodes !== undefined ? this._kubernetes_nodes : []);
	}

	set kubernetes_nodes(kubernetes_nodes)
	{
		this._kubernetes_nodes = kubernetes_nodes;
	}

	/**
	 * The admin username on the cluster.
	 */
	get admin_username()
	{
		return (this._admin_username !== undefined ? this._admin_username : null);
	}

	set admin_username(admin_username)
	{
		this._admin_username = admin_username;
	}

	/**
	 * The initial admin password on the cluster.
	 */
	get admin_initial_password()
	{
		return (this._admin_initial_password !== undefined ? this._admin_initial_password : null);
	}

	set admin_initial_password(admin_initial_password)
	{
		this._admin_initial_password = admin_initial_password;
	}

	/**
	 * Cluster software available versions.
	 */
	get cluster_software_available_versions()
	{
		return (this._cluster_software_available_versions !== undefined ? this._cluster_software_available_versions : []);
	}

	set cluster_software_available_versions(cluster_software_available_versions)
	{
		this._cluster_software_available_versions = cluster_software_available_versions;
	}

	/**
	 * The software version detected on the cluster.
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
			"kubernetes_nodes"
		];
	}
};
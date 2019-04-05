const ObjectBase = require('./ObjectBase');

/**
 * An object which has instance labels as keys and AppElasticsearchContainer
 * objects as values.
 *
 * @class
 * @extends ObjectBase
 */
module.exports = 
class AppElasticsearchContainer extends ObjectBase
{
	constructor(elasticsearch_node)
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

		if(elasticsearch_node === undefined || elasticsearch_node === null)
			throw new Error("Invalid param in AppElasticsearchContainer constructor.");

		this._elasticsearch_node = elasticsearch_node;
	}

	/**
	 * The AppElasticsearchContainerInstance object which represents the Master.
	 */
	get elasticsearch_node()
	{
		return (this._elasticsearch_node !== undefined ? this._elasticsearch_node : []);
	}

	set elasticsearch_node(elasticsearch_node)
	{
		this._elasticsearch_node = elasticsearch_node;
	}

	/**
	 * The connection strings to the ElasticsearchContainer app.
	 */
	get connection_strings()
	{
		return (this._connection_strings !== undefined ? this._connection_strings : []);
	}

	set connection_strings(connection_strings)
	{
		this._connection_strings = connection_strings;
	}

	/**
	 * Cluster software available versions.
	 */
	get container_cluster_software_available_versions()
	{
		return (this._container_cluster_software_available_versions !== undefined ? this._container_cluster_software_available_versions : []);
	}

	set container_cluster_software_available_versions(container_cluster_software_available_versions)
	{
		this._container_cluster_software_available_versions = container_cluster_software_available_versions;
	}

	/**
	 * The software version detected on the container cluster.
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
	 * Array of compatible and connectable clusters.
	 */
	get connectable_container_clusters()
	{
		return (this._connectable_container_clusters !== undefined ? this._connectable_container_clusters : []);
	}

	set connectable_container_clusters(connectable_container_clusters)
	{
		this._connectable_container_clusters = connectable_container_clusters;
	}

	/**
	 * The default username.
	 */
	get username()
	{
		return (this._username !== undefined ? this._username : null);
	}

	set username(username)
	{
		this._username = username;
	}

	/**
	 * The default password.
	 */
	get password()
	{
		return (this._password !== undefined ? this._password : null);
	}

	set password(password)
	{
		this._password = password;
	}

	/**
	 * The name of the cluster.
	 */
	get cluster_name()
	{
		return (this._cluster_name !== undefined ? this._cluster_name : null);
	}

	set cluster_name(cluster_name)
	{
		this._cluster_name = cluster_name;
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
			"elasticsearch_node"
		];
	}
};
const ObjectBase = require('./ObjectBase');

/**
 * An object which has instance labels as keys and AppZookeeperInstance objects
 * as values.
 *
 * @class
 * @extends ObjectBase
 */
module.exports = 
class AppZookeeper extends ObjectBase
{
	constructor(zookeeper_nodes)
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

		if(zookeeper_nodes === undefined || zookeeper_nodes === null)
			throw new Error("Invalid param in AppZookeeper constructor.");

		this._zookeeper_nodes = zookeeper_nodes;
	}

	/**
	 * The AppZookeeperInstance object which represents the Master.
	 */
	get zookeeper_nodes()
	{
		return this._zookeeper_nodes || [];
	}

	set zookeeper_nodes(zookeeper_nodes)
	{
		this._zookeeper_nodes = zookeeper_nodes;
	}

	/**
	 * The connection strings to the Zookeeper app.
	 */
	get zookeeper_connection_strings()
	{
		return this._zookeeper_connection_strings || [];
	}

	set zookeeper_connection_strings(zookeeper_connection_strings)
	{
		this._zookeeper_connection_strings = zookeeper_connection_strings;
	}

	/**
	 * Cluster software available versions.
	 */
	get container_cluster_software_available_versions()
	{
		return this._container_cluster_software_available_versions || [];
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
		return this._container_cluster_software_version || null;
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
		return this._connectable_container_clusters || [];
	}

	set connectable_container_clusters(connectable_container_clusters)
	{
		this._connectable_container_clusters = connectable_container_clusters;
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
	 * The required JSON fields for deserialization.
	 *
	 * @returns {Array}
	 */
	static get JSONRequired()
	{
		return [
			"zookeeper_nodes"
		];
	}
};
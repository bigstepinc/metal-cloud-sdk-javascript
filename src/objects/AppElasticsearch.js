const ObjectBase = require('./ObjectBase');

/**
 * An object which has instance labels as keys and AppElasticsearchInstance
 * objects as values.
 *
 * @class
 * @extends ObjectBase
 */
module.exports = 
class AppElasticsearch extends ObjectBase
{
	constructor(nodes)
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

		if(nodes === undefined || nodes === null)
			throw new Error("Invalid param in AppElasticsearch constructor.");

		this._nodes = nodes;
	}

	/**
	 * The AppElasticsearchInstance objects, part of the nodes group.
	 */
	get nodes()
	{
		return (this._nodes !== undefined ? this._nodes : []);
	}

	set nodes(nodes)
	{
		this._nodes = nodes;
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
	 * Array of compatible and connectable clusters.
	 */
	get connectable_clusters()
	{
		return (this._connectable_clusters !== undefined ? this._connectable_clusters : []);
	}

	set connectable_clusters(connectable_clusters)
	{
		this._connectable_clusters = connectable_clusters;
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
			"nodes"
		];
	}
};
const ObjectBase = require('./ObjectBase');

/**
 * An object which has instance labels as keys and AppDatastaxInstance objects
 * as values.
 *
 * @class
 * @extends ObjectBase
 */
module.exports = 
class AppDatastax extends ObjectBase
{
	constructor(seeds, nodes)
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
				throw new Error("Invalid params in AppDatastax constructor.");
		}

		this._seeds = seeds;
		this._nodes = nodes;
	}

	/**
	 * The AppDatastaxInstance objects.
	 */
	get seeds()
	{
		return this._seeds || [];
	}

	set seeds(seeds)
	{
		this._seeds = seeds;
	}

	/**
	 * The AppDatastaxInstance objects.
	 */
	get nodes()
	{
		return this._nodes || [];
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
		return this._cluster_software_available_versions || [];
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
		return this._cluster_software_version || null;
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
		return this._connectable_clusters || [];
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
			"seeds",
			"nodes"
		];
	}
};
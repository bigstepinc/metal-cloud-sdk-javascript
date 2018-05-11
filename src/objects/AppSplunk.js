const ObjectBase = require('./ObjectBase');

/**
 * An object which has instance labels as keys and AppSplunkInstance objects as
 * values. AppSplunkInstance objects are divided into search heads and indexers.
 *
 * @class
 * @extends ObjectBase
 */
module.exports = 
class AppSplunk extends ObjectBase
{
	constructor(searchHeads, indexers)
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
				throw new Error("Invalid params in AppSplunk constructor.");
		}

		this._searchHeads = searchHeads;
		this._indexers = indexers;
	}

	/**
	 * The AppSplunkInstance objects, part of the search head group.
	 */
	get searchHeads()
	{
		return this._searchHeads || [];
	}

	set searchHeads(searchHeads)
	{
		this._searchHeads = searchHeads;
	}

	/**
	 * The AppSplunkInstance objects, part of the indexers group.
	 */
	get indexers()
	{
		return this._indexers || [];
	}

	set indexers(indexers)
	{
		this._indexers = indexers;
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
			"searchHeads",
			"indexers"
		];
	}
};
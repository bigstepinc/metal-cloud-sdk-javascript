const ObjectBase = require('./ObjectBase');

/**
 * An object which has instance labels as keys and AppZoomdataInstance objects
 * as values.
 *
 * @class
 * @extends ObjectBase
 */
module.exports = 
class AppZoomdata extends ObjectBase
{
	constructor(zoomdata_node)
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

		if(zoomdata_node === undefined || zoomdata_node === null)
			throw new Error("Invalid param in AppZoomdata constructor.");

		this._zoomdata_node = zoomdata_node;
	}

	/**
	 * The AppZoomdataInstance object which represents the Master.
	 */
	get zoomdata_node()
	{
		return this._zoomdata_node || [];
	}

	set zoomdata_node(zoomdata_node)
	{
		this._zoomdata_node = zoomdata_node;
	}

	/**
	 * The URL to access Zoomdata.
	 */
	get zoomdata_url()
	{
		return this._zoomdata_url || null;
	}

	set zoomdata_url(zoomdata_url)
	{
		this._zoomdata_url = zoomdata_url;
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
			"zoomdata_node"
		];
	}
};
const ObjectBase = require('./ObjectBase');

/**
 * An object which has instance labels as keys and AppMesosInstance objects as values.
 *
 * @class
 * @extends ObjectBase
 */
module.exports = 
class AppMesos extends ObjectBase
{
	constructor(mesos_headnodes, mesos_slavenodes)
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
				throw new Error("Invalid params in AppMesos constructor.");
		}

		this._mesos_headnodes = mesos_headnodes;
		this._mesos_slavenodes = mesos_slavenodes;
	}

	/**
	 * The AppMesosInstance objects.
	 */
	get mesos_headnodes()
	{
		return (this._mesos_headnodes !== undefined ? this._mesos_headnodes : []);
	}

	set mesos_headnodes(mesos_headnodes)
	{
		this._mesos_headnodes = mesos_headnodes;
	}

	/**
	 * The AppMesosInstance objects.
	 */
	get mesos_slavenodes()
	{
		return (this._mesos_slavenodes !== undefined ? this._mesos_slavenodes : []);
	}

	set mesos_slavenodes(mesos_slavenodes)
	{
		this._mesos_slavenodes = mesos_slavenodes;
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
			"mesos_headnodes",
			"mesos_slavenodes"
		];
	}
};
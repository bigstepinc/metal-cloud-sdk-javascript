const ObjectBase = require('./ObjectBase');

/**
 * An object which has instance labels as keys and AppHortonworksInstance
 * objects as values. AppHortonworksInstance objects are divided into head
 * nodes and data nodes.
 *
 * @class
 * @extends ObjectBase
 */
module.exports = 
class AppHortonworks extends ObjectBase
{
	constructor(hortonworks_masternodes, hortonworks_slavenodes)
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
				throw new Error("Invalid params in AppHortonworks constructor.");
		}

		this._hortonworks_masternodes = hortonworks_masternodes;
		this._hortonworks_slavenodes = hortonworks_slavenodes;
	}

	/**
	 * The AppHortonworksInstance objects, part of the head nodes group.
	 */
	get hortonworks_masternodes()
	{
		return this._hortonworks_masternodes || [];
	}

	set hortonworks_masternodes(hortonworks_masternodes)
	{
		this._hortonworks_masternodes = hortonworks_masternodes;
	}

	/**
	 * The AppHortonworksInstance objects, part of the data nodes group.
	 */
	get hortonworks_slavenodes()
	{
		return this._hortonworks_slavenodes || [];
	}

	set hortonworks_slavenodes(hortonworks_slavenodes)
	{
		this._hortonworks_slavenodes = hortonworks_slavenodes;
	}

	/**
	 * The admin username on the cluster.
	 */
	get admin_username()
	{
		return this._admin_username || null;
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
		return this._admin_initial_password || null;
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
			"hortonworks_masternodes",
			"hortonworks_slavenodes"
		];
	}
};
const ObjectBase = require('./ObjectBase');

/**
 * An object which has instance labels as keys and AppStreamSets objects as values.
 *
 * @class
 * @extends ObjectBase
 */
module.exports = 
class AppStreamSets extends ObjectBase
{
	constructor(streamsets_node)
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

		if(streamsets_node === undefined || streamsets_node === null)
			throw new Error("Invalid param in AppStreamSets constructor.");

		this._streamsets_node = streamsets_node;
	}

	/**
	 * The AppStreamSetsInstance object.
	 */
	get streamsets_node()
	{
		return this._streamsets_node || [];
	}

	set streamsets_node(streamsets_node)
	{
		this._streamsets_node = streamsets_node;
	}

	/**
	 * Container cluster software available versions.
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
	 * The connection strings to the StreamSets app.
	 */
	get streamsets_connection_string()
	{
		return this._streamsets_connection_string || [];
	}

	set streamsets_connection_string(streamsets_connection_string)
	{
		this._streamsets_connection_string = streamsets_connection_string;
	}

	/**
	 * The default username.
	 */
	get streamsets_admin_username()
	{
		return this._streamsets_admin_username || null;
	}

	set streamsets_admin_username(streamsets_admin_username)
	{
		this._streamsets_admin_username = streamsets_admin_username;
	}

	/**
	 * The default password.
	 */
	get streamsets_admin_password()
	{
		return this._streamsets_admin_password || null;
	}

	set streamsets_admin_password(streamsets_admin_password)
	{
		this._streamsets_admin_password = streamsets_admin_password;
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
			"streamsets_node"
		];
	}
};
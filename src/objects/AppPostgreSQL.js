const ObjectBase = require('./ObjectBase');

/**
 * An object which has instance labels as keys and AppPostgreSQL objects as values.
 *
 * @class
 * @extends ObjectBase
 */
module.exports = 
class AppPostgreSQL extends ObjectBase
{
	constructor(postgresql_node)
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

		if(postgresql_node === undefined || postgresql_node === null)
			throw new Error("Invalid param in AppPostgreSQL constructor.");

		this._postgresql_node = postgresql_node;
	}

	/**
	 * The AppPostgreSQLInstance object which represents the Master.
	 */
	get postgresql_node()
	{
		return (this._postgresql_node !== undefined ? this._postgresql_node : []);
	}

	set postgresql_node(postgresql_node)
	{
		this._postgresql_node = postgresql_node;
	}

	/**
	 * The connection strings to the PostgreSQL app.
	 */
	get postgresql_connection_strings()
	{
		return (this._postgresql_connection_strings !== undefined ? this._postgresql_connection_strings : []);
	}

	set postgresql_connection_strings(postgresql_connection_strings)
	{
		this._postgresql_connection_strings = postgresql_connection_strings;
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
	get postgresql_username()
	{
		return (this._postgresql_username !== undefined ? this._postgresql_username : null);
	}

	set postgresql_username(postgresql_username)
	{
		this._postgresql_username = postgresql_username;
	}

	/**
	 * The default password.
	 */
	get postgresql_password()
	{
		return (this._postgresql_password !== undefined ? this._postgresql_password : null);
	}

	set postgresql_password(postgresql_password)
	{
		this._postgresql_password = postgresql_password;
	}

	/**
	 * The name of the database.
	 */
	get postgresql_database()
	{
		return (this._postgresql_database !== undefined ? this._postgresql_database : null);
	}

	set postgresql_database(postgresql_database)
	{
		this._postgresql_database = postgresql_database;
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
			"postgresql_node"
		];
	}
};
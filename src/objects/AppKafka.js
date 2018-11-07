const ObjectBase = require('./ObjectBase');

/**
 * An object which has instance labels as keys and AppKafkaInstance objects as values.
 *
 * @class
 * @extends ObjectBase
 */
module.exports = 
class AppKafka extends ObjectBase
{
	constructor(kafka_brokers)
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

		if(kafka_brokers === undefined || kafka_brokers === null)
			throw new Error("Invalid param in AppKafka constructor.");

		this._kafka_brokers = kafka_brokers;
	}

	/**
	 * The AppKafkaInstance object which represents the Master.
	 */
	get kafka_brokers()
	{
		return (this._kafka_brokers !== undefined ? this._kafka_brokers : []);
	}

	set kafka_brokers(kafka_brokers)
	{
		this._kafka_brokers = kafka_brokers;
	}

	/**
	 * The connection strings to the Kafka brokers.
	 */
	get kafka_brokers_connection_strings()
	{
		return (this._kafka_brokers_connection_strings !== undefined ? this._kafka_brokers_connection_strings : []);
	}

	set kafka_brokers_connection_strings(kafka_brokers_connection_strings)
	{
		this._kafka_brokers_connection_strings = kafka_brokers_connection_strings;
	}

	/**
	 * The URL to access Kafka Manager.
	 */
	get kafka_manager_url()
	{
		return (this._kafka_manager_url !== undefined ? this._kafka_manager_url : null);
	}

	set kafka_manager_url(kafka_manager_url)
	{
		this._kafka_manager_url = kafka_manager_url;
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
			"kafka_brokers"
		];
	}
};
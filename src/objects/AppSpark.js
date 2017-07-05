const ObjectBase = require('./ObjectBase');

/**
 * An object which has instance labels as keys and AppSparkInstance objects as values.
 *
 * @class
 * @extends ObjectBase
 */
module.exports = 
class AppSpark extends ObjectBase
{
	constructor(spark_master, spark_workers)
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
				throw new Error("Invalid params in AppSpark constructor.");
		}

		this._spark_master = spark_master;
		this._spark_workers = spark_workers;
	}

	/**
	 * The AppSparkInstance object which represents the Master.
	 */
	get spark_master()
	{
		return this._spark_master || [];
	}

	set spark_master(spark_master)
	{
		this._spark_master = spark_master;
	}

	/**
	 * The AppSparkInstance objects.
	 */
	get spark_workers()
	{
		return this._spark_workers || [];
	}

	set spark_workers(spark_workers)
	{
		this._spark_workers = spark_workers;
	}

	/**
	 * The URL to access Spark Master.
	 */
	get spark_master_url()
	{
		return this._spark_master_url || null;
	}

	set spark_master_url(spark_master_url)
	{
		this._spark_master_url = spark_master_url;
	}

	/**
	 * The URL to access the Spark Master Web UI.
	 */
	get spark_master_web_ui_url()
	{
		return this._spark_master_web_ui_url || null;
	}

	set spark_master_web_ui_url(spark_master_web_ui_url)
	{
		this._spark_master_web_ui_url = spark_master_web_ui_url;
	}

	/**
	 * The URL to access Jupyter.
	 */
	get jupyter_url()
	{
		return this._jupyter_url || null;
	}

	set jupyter_url(jupyter_url)
	{
		this._jupyter_url = jupyter_url;
	}

	/**
	 * The default Jupyter password.
	 */
	get jupyter_password()
	{
		return this._jupyter_password || null;
	}

	set jupyter_password(jupyter_password)
	{
		this._jupyter_password = jupyter_password;
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
			"spark_master",
			"spark_workers"
		];
	}
};
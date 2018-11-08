const ObjectBase = require('./ObjectBase');

/**
 * Information about the ContainerCluster's Containers and its application.
 *
 * @class
 * @extends ObjectBase
 */
module.exports = 
class ContainerClusterApp extends ObjectBase
{
	constructor(container_cluster_app)
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

		if(container_cluster_app === undefined || container_cluster_app === null)
			throw new Error("Invalid param in ContainerClusterApp constructor.");

		this._container_cluster_app = container_cluster_app;
	}

	/**
	 * The ContainerCluster's Containers and application information.
	 */
	get container_cluster_app()
	{
		return (this._container_cluster_app !== undefined ? this._container_cluster_app : null);
	}

	set container_cluster_app(container_cluster_app)
	{
		this._container_cluster_app = container_cluster_app;
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
			"container_cluster_app"
		];
	}
};
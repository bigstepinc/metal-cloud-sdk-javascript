const ObjectBase = require('./ObjectBase');

/**
 * Information about the Cluster's Instances and its application.
 *
 * @class
 * @extends ObjectBase
 */
module.exports = 
class ClusterApp extends ObjectBase
{
	constructor(cluster_app)
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

		if(cluster_app === undefined || cluster_app === null)
			throw new Error("Invalid param in ClusterApp constructor.");

		this._cluster_app = cluster_app;
	}

	/**
	 * The Cluster's Instances and application information.
	 */
	get cluster_app()
	{
		return (this._cluster_app !== undefined ? this._cluster_app : null);
	}

	set cluster_app(cluster_app)
	{
		this._cluster_app = cluster_app;
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
			"cluster_app"
		];
	}
};
const ObjectBase = require('./ObjectBase');

/**
 * A Cluster Connection object.
 *
 * @class
 * @extends ObjectBase
 */
module.exports = 
class ClusterConnection extends ObjectBase
{
	constructor(cluster_id)
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

		if(cluster_id === undefined || cluster_id === null)
			throw new Error("Invalid param in ClusterConnection constructor.");

		this._cluster_id = cluster_id;
	}

	/**
	 * Represents the target cluster ID of the connection.
	 */
	get cluster_id()
	{
		return (this._cluster_id !== undefined ? this._cluster_id : null);
	}

	set cluster_id(cluster_id)
	{
		this._cluster_id = cluster_id;
	}

	/**
	 * The schema type.
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
			"cluster_id"
		];
	}
};
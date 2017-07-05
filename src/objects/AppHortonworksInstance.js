const ObjectBase = require('./ObjectBase');

/**
 * Details about the Instance object specific to Hortonworks. The information
 * presented here is obtained by interrogating the Hortonworks API. Backward
 * compatibility object will not be ensured when the underlying Hortonworks API changes.
 *
 * @class
 * @extends ObjectBase
 */
module.exports = 
class AppHortonworksInstance extends ObjectBase
{
	constructor()
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
	}

	/**
	 * The instance ID of the node
	 */
	get instance_id()
	{
		return this._instance_id || null;
	}

	set instance_id(instance_id)
	{
		this._instance_id = instance_id;
	}

	/**
	 * The instance label of the node
	 */
	get instance_label()
	{
		return this._instance_label || null;
	}

	set instance_label(instance_label)
	{
		this._instance_label = instance_label;
	}

	/**
	 * The subdomain of the node
	 */
	get instance_hostname()
	{
		return this._instance_hostname || null;
	}

	set instance_hostname(instance_hostname)
	{
		this._instance_hostname = instance_hostname;
	}

	/**
	 * The cluster UI url of the node
	 */
	get instance_cluster_url()
	{
		return this._instance_cluster_url || null;
	}

	set instance_cluster_url(instance_cluster_url)
	{
		this._instance_cluster_url = instance_cluster_url;
	}

	/**
	 * The health status of the node
	 */
	get instance_health()
	{
		return this._instance_health || null;
	}

	set instance_health(instance_health)
	{
		this._instance_health = instance_health;
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

		];
	}
};
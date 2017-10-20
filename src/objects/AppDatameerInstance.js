const ObjectBase = require('./ObjectBase');

/**
 * Details about the Datameer instances.
 *
 * @class
 * @extends ObjectBase
 */
module.exports = 
class AppDatameerInstance extends ObjectBase
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
	 * The host IP address.
	 */
	get ipAddress()
	{
		return this._ipAddress || null;
	}

	set ipAddress(ipAddress)
	{
		this._ipAddress = ipAddress;
	}

	/**
	 * The URL of the Datameer GUI.
	 */
	get url()
	{
		return this._url || null;
	}

	set url(url)
	{
		this._url = url;
	}

	/**
	 * The ID of the instance associated with the node.
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
	 * The label of the instance associated with the node.
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
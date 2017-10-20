const ObjectBase = require('./ObjectBase');

/**
 *
 *
 * @class
 * @extends ObjectBase
 */
module.exports = 
class InstanceReport extends ObjectBase
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
	 *
	 */
	get sshConnectivity()
	{
		return this._sshConnectivity || "n/a";
	}

	set sshConnectivity(sshConnectivity)
	{
		this._sshConnectivity = sshConnectivity;
	}

	/**
	 *
	 */
	get sshAuthentication()
	{
		return this._sshAuthentication || "n/a";
	}

	set sshAuthentication(sshAuthentication)
	{
		this._sshAuthentication = sshAuthentication;
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
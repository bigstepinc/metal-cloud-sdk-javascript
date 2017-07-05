const ObjectBase = require('./ObjectBase');

/**
 * Shared drive credentials for each instance attached to it.
 *
 * @class
 * @extends ObjectBase
 */
module.exports = 
class SharedDriveCredentials extends ObjectBase
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
	 * The target IQN.
	 */
	get target_iqn()
	{
		return this._target_iqn || null;
	}

	set target_iqn(target_iqn)
	{
		this._target_iqn = target_iqn;
	}

	/**
	 *
	 */
	get storage_ip_address()
	{
		return this._storage_ip_address || null;
	}

	set storage_ip_address(storage_ip_address)
	{
		this._storage_ip_address = storage_ip_address;
	}

	/**
	 *
	 */
	get storage_port()
	{
		return this._storage_port || null;
	}

	set storage_port(storage_port)
	{
		this._storage_port = storage_port;
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
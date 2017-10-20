const ObjectBase = require('./ObjectBase');

/**
 * Target IQN, IP address, port number and the LUN ID.
 *
 * @class
 * @extends ObjectBase
 */
module.exports = 
class iSCSI extends ObjectBase
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
	 * IQN of target iSCSI.
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
	 * iSCSI server IP address.
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
	 * Server listening port number.
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
	 * Storage LUN ID.
	 */
	get lun_id()
	{
		return this._lun_id || null;
	}

	set lun_id(lun_id)
	{
		this._lun_id = lun_id;
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
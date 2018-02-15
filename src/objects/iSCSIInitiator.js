const ObjectBase = require('./ObjectBase');

/**
 * Initiator IQN, username and password and other iSCSI connection details.
 *
 * @class
 * @extends ObjectBase
 */
module.exports = 
class iSCSIInitiator extends ObjectBase
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
	 * The iSCSI username.
	 */
	get username()
	{
		return this._username || null;
	}

	set username(username)
	{
		this._username = username;
	}

	/**
	 * The iSCSI initial password.
	 */
	get password()
	{
		return this._password || null;
	}

	set password(password)
	{
		this._password = password;
	}

	/**
	 * IQN of initiator iSCSI.
	 */
	get initiator_iqn()
	{
		return this._initiator_iqn || null;
	}

	set initiator_iqn(initiator_iqn)
	{
		this._initiator_iqn = initiator_iqn;
	}

	/**
	 * IPv4 gateway in decimal dotted notation.
	 */
	get gateway()
	{
		return this._gateway || null;
	}

	set gateway(gateway)
	{
		this._gateway = gateway;
	}

	/**
	 * IPv4 dotted decimal notation netmask.
	 */
	get netmask()
	{
		return this._netmask || null;
	}

	set netmask(netmask)
	{
		this._netmask = netmask;
	}

	/**
	 * iSCSI client IP address.
	 */
	get initiator_ip_address()
	{
		return this._initiator_ip_address || null;
	}

	set initiator_ip_address(initiator_ip_address)
	{
		this._initiator_ip_address = initiator_ip_address;
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
const ObjectBase = require('./ObjectBase');

/**
 * IPMI credentials. Intelligent Platform Management Interface is a set of
 * computer interface specifications for an autonomous computer subsystem that
 * provides management and monitoring capabilities independently of the host
 * system's CPU, firmware (BIOS or UEFI) and operating system.
 *
 * @class
 * @extends ObjectBase
 */
module.exports = 
class IPMI extends ObjectBase
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
	 * IP address for the IPMI.
	 */
	get ip_address()
	{
		return (this._ip_address !== undefined ? this._ip_address : null);
	}

	set ip_address(ip_address)
	{
		this._ip_address = ip_address;
	}

	/**
	 * The IPMI version.
	 */
	get version()
	{
		return (this._version !== undefined ? this._version : null);
	}

	set version(version)
	{
		this._version = version;
	}

	/**
	 * The username for the IPMI.
	 */
	get username()
	{
		return (this._username !== undefined ? this._username : null);
	}

	set username(username)
	{
		this._username = username;
	}

	/**
	 * The initial password for the IPMI.
	 */
	get initial_password()
	{
		return (this._initial_password !== undefined ? this._initial_password : null);
	}

	set initial_password(initial_password)
	{
		this._initial_password = initial_password;
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

		];
	}
};
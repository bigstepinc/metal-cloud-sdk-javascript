const ObjectBase = require('./ObjectBase');

/**
 * RDP credentials for the installed OS.
 *
 * @class
 * @extends ObjectBase
 */
module.exports = 
class RDP extends ObjectBase
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
	 * The port used to connect through RDP.
	 */
	get port()
	{
		return this._port || null;
	}

	set port(port)
	{
		this._port = port;
	}

	/**
	 * Administrator account. Only defined for Drives created from a template with
	 * an installed OS.
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
	 * Administrator account's initial password. Only defined for Drives created
	 * from a template with an installed OS.
	 */
	get initial_password()
	{
		return this._initial_password || null;
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
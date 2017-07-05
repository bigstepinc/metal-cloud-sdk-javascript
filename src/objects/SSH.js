const ObjectBase = require('./ObjectBase');

/**
 * SSH credentials for the installed OS.
 *
 * @class
 * @extends ObjectBase
 */
module.exports = 
class SSH extends ObjectBase
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
	 * The port used to connect through SSH.
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
	 * The SSH keys (SSHKey objects) of all the users that had access to the Drive
	 * when disk space was allocated. Applicable only to Linux OS's created from a
	 * Linux template.
	 */
	get initial_ssh_keys()
	{
		return this._initial_ssh_keys || {};
	}

	set initial_ssh_keys(initial_ssh_keys)
	{
		this._initial_ssh_keys = initial_ssh_keys;
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
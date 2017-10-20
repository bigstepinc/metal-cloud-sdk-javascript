const ObjectBase = require('./ObjectBase');

/**
 * An object with the required information to obtain the authentication ticket
 * from Kerberos SPNEGO.
 *
 * @class
 * @extends ObjectBase
 */
module.exports = 
class Kerberos extends ObjectBase
{
	constructor(username)
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

		if(username === undefined || username === null)
			throw new Error("Invalid param in Kerberos constructor.");

		this._username = username;
	}

	/**
	 * A Bigstep user's account ID prefixed with the letter "k". For example: k123.
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
	 * Bigstep users may log in using their account password, as the DataLake HDFS
	 * Kerberos service is integrated with Bigstep Metal Cloud (also for admin
	 * rights). This will always be null. Reserved for future use.
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
	 * The Kerberos realm.
	 */
	get realm()
	{
		return this._realm || null;
	}

	set realm(realm)
	{
		this._realm = realm;
	}

	/**
	 * Schema type.
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
			"username"
		];
	}
};
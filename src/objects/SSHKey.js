const ObjectBase = require('./ObjectBase');

/**
 * Represents a SSH key added by a user
 *
 * @class
 * @extends ObjectBase
 */
module.exports = 
class SSHKey extends ObjectBase
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
	 * An ID to represent the SSH key
	 */
	get user_ssh_key_id()
	{
		return (this._user_ssh_key_id !== undefined ? this._user_ssh_key_id : null);
	}

	set user_ssh_key_id(user_ssh_key_id)
	{
		this._user_ssh_key_id = user_ssh_key_id;
	}

	/**
	 * The ID of the user to which the SSH key belongs.
	 */
	get user_id()
	{
		return (this._user_id !== undefined ? this._user_id : null);
	}

	set user_id(user_id)
	{
		this._user_id = user_id;
	}

	/**
	 * A public key in OpenSSH format.
	 */
	get user_ssh_key()
	{
		return (this._user_ssh_key !== undefined ? this._user_ssh_key : null);
	}

	set user_ssh_key(user_ssh_key)
	{
		this._user_ssh_key = user_ssh_key;
	}

	/**
	 * Represents the date and time when the SSH key was created in ISO-8601, UTC
	 * timezone format.
	 */
	get user_ssh_key_created_timestamp()
	{
		return (this._user_ssh_key_created_timestamp !== undefined ? this._user_ssh_key_created_timestamp : null);
	}

	set user_ssh_key_created_timestamp(user_ssh_key_created_timestamp)
	{
		this._user_ssh_key_created_timestamp = user_ssh_key_created_timestamp;
	}

	/**
	 * The SSH key status.
	 */
	get user_ssh_key_status()
	{
		return (this._user_ssh_key_status !== undefined ? this._user_ssh_key_status : "active");
	}

	set user_ssh_key_status(user_ssh_key_status)
	{
		this._user_ssh_key_status = user_ssh_key_status;
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
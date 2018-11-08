const ObjectBase = require('./ObjectBase');

/**
 * Login session.
 *
 * @class
 * @extends ObjectBase
 */
module.exports = 
class CookieLogin extends ObjectBase
{
	constructor(user_id_bsi)
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

		if(user_id_bsi === undefined || user_id_bsi === null)
			throw new Error("Invalid param in CookieLogin constructor.");

		this._user_id_bsi = user_id_bsi;
	}

	/**
	 * Contains null for not authenticated sessions.
	 */
	get user_id_bsi()
	{
		return (this._user_id_bsi !== undefined ? this._user_id_bsi : null);
	}

	set user_id_bsi(user_id_bsi)
	{
		this._user_id_bsi = user_id_bsi;
	}

	/**
	 * True if user_id_bsi contains an authenticated user ID.
	 */
	get is_logged_in()
	{
		return (this._is_logged_in !== undefined ? this._is_logged_in : null);
	}

	set is_logged_in(is_logged_in)
	{
		this._is_logged_in = is_logged_in;
	}

	/**
	 * The schema type.
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
			"user_id_bsi"
		];
	}
};
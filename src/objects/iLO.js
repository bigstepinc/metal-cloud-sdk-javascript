const ObjectBase = require('./ObjectBase');

/**
 * iLO control panel credentials. iLO is a control panel for HP servers. The
 * iLO card has a separate network connection and its own IP address.
 *
 * @class
 * @extends ObjectBase
 */
module.exports = 
class iLO extends ObjectBase
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
	 * URL for the server's administration interface.
	 */
	get control_panel_url()
	{
		return this._control_panel_url || null;
	}

	set control_panel_url(control_panel_url)
	{
		this._control_panel_url = control_panel_url;
	}

	/**
	 * The username for the server's administration interface.
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
	 * The initial password for the server's administration interface.
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
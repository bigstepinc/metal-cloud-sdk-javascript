const ObjectBase = require('./ObjectBase');

/**
 * Information needed to connect to the server via Guacamole
 *
 * @class
 * @extends ObjectBase
 */
module.exports = 
class RemoteConsole extends ObjectBase
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
	 * Protocol available. This property is not editable.
	 */
	get remote_protocol()
	{
		return this._remote_protocol || null;
	}

	set remote_protocol(remote_protocol)
	{
		this._remote_protocol = remote_protocol;
	}

	/**
	 * Tunnel path URL. This property is not editable.
	 */
	get tunnel_path_url()
	{
		return this._tunnel_path_url || null;
	}

	set tunnel_path_url(tunnel_path_url)
	{
		this._tunnel_path_url = tunnel_path_url;
	}

	/**
	 * Query string. This property is not editable.
	 */
	get remote_control_panel_url()
	{
		return this._remote_control_panel_url || null;
	}

	set remote_control_panel_url(remote_control_panel_url)
	{
		this._remote_control_panel_url = remote_control_panel_url;
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
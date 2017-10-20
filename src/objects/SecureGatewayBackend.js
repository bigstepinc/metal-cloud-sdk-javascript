const ObjectBase = require('./ObjectBase');

/**
 * Contains information regarding the backend proxied by secure gateway
 *
 * @class
 * @extends ObjectBase
 */
module.exports = 
class SecureGatewayBackend extends ObjectBase
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
	 * The name of the backend
	 */
	get name()
	{
		return this._name || null;
	}

	set name(name)
	{
		this._name = name;
	}

	/**
	 * The IP of the backend
	 */
	get ip()
	{
		return this._ip || null;
	}

	set ip(ip)
	{
		this._ip = ip;
	}

	/**
	 * The port of the backend
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
	 * Should Secure Gateway send probes to check if this backend is working?
	 */
	get check_enabled()
	{
		return this._check_enabled || null;
	}

	set check_enabled(check_enabled)
	{
		this._check_enabled = check_enabled;
	}

	/**
	 * Should Secure Gateway send SSL encrypted requests to the backend?
	 */
	get ssl_enabled()
	{
		return this._ssl_enabled || null;
	}

	set ssl_enabled(ssl_enabled)
	{
		this._ssl_enabled = ssl_enabled;
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
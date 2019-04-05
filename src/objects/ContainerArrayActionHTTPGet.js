const ObjectBase = require('./ObjectBase');

/**
 * ContainerArray action that uses HTTP Get requests to asses the readiness or
 * liveness of the Containers.
 *
 * @class
 * @extends ObjectBase
 */
module.exports = 
class ContainerArrayActionHTTPGet extends ObjectBase
{
	constructor(action_port)
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

		if(action_port === undefined || action_port === null)
			throw new Error("Invalid param in ContainerArrayActionHTTPGet constructor.");

		this._action_port = action_port;
	}

	/**
	 * Path to acccess on the HTTP server.
	 */
	get action_path()
	{
		return (this._action_path !== undefined ? this._action_path : "/");
	}

	set action_path(action_path)
	{
		this._action_path = action_path;
	}

	/**
	 * Port to access on the Container.
	 */
	get action_port()
	{
		return (this._action_port !== undefined ? this._action_port : null);
	}

	set action_port(action_port)
	{
		this._action_port = action_port;
	}

	/**
	 * Host name to connect to. Defaults to the Container IP.
	 */
	get action_host()
	{
		return (this._action_host !== undefined ? this._action_host : null);
	}

	set action_host(action_host)
	{
		this._action_host = action_host;
	}

	/**
	 * Scheme to use for connecting to the host.
	 */
	get action_scheme()
	{
		return (this._action_scheme !== undefined ? this._action_scheme : "HTTP");
	}

	set action_scheme(action_scheme)
	{
		this._action_scheme = action_scheme;
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
			"action_port"
		];
	}
};
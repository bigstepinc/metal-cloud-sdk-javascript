const ObjectBase = require('./ObjectBase');

/**
 * Secure gateway proxy mapping with metadata
 *
 * @class
 * @extends ObjectBase
 */
module.exports = 
class SecureGatewayProxy extends ObjectBase
{
	constructor(name, mode, host, backend_balance_strategy, backend_servers)
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

		for(let index = 0; index < 5; index++)
		{
			let arg = arguments[index];

			if(arg === undefined || arg === null)
				throw new Error("Invalid params in SecureGatewayProxy constructor.");
		}

		this._name = name;
		this._mode = mode;
		this._host = host;
		this._backend_balance_strategy = backend_balance_strategy;
		this._backend_servers = backend_servers;
	}

	/**
	 * The proxy name.
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
	 * The proxy protocol: HTTP/TCP
	 */
	get mode()
	{
		return this._mode || null;
	}

	set mode(mode)
	{
		this._mode = mode;
	}

	/**
	 * The start port of the range that the proxy listens to
	 */
	get start_port()
	{
		return this._start_port || null;
	}

	set start_port(start_port)
	{
		this._start_port = start_port;
	}

	/**
	 * The end port of the range that the proxy listens to
	 */
	get end_port()
	{
		return this._end_port || null;
	}

	set end_port(end_port)
	{
		this._end_port = end_port;
	}

	/**
	 * The value of the Host header
	 */
	get host()
	{
		return this._host || null;
	}

	set host(host)
	{
		this._host = host;
	}

	/**
	 * Should Secure Gateway listen for SSL connections
	 */
	get frontend_ssl_enabled()
	{
		return this._frontend_ssl_enabled || null;
	}

	set frontend_ssl_enabled(frontend_ssl_enabled)
	{
		this._frontend_ssl_enabled = frontend_ssl_enabled;
	}

	/**
	 * Should Secure Gateway authenthicate users that want to connect to it?
	 */
	get frontend_authorization_enabled()
	{
		return this._frontend_authorization_enabled || null;
	}

	set frontend_authorization_enabled(frontend_authorization_enabled)
	{
		this._frontend_authorization_enabled = frontend_authorization_enabled;
	}

	/**
	 * List of client IPs allowed to connect to the secure gateway
	 */
	get frontend_allowed_client_ips()
	{
		return this._frontend_allowed_client_ips || [];
	}

	set frontend_allowed_client_ips(frontend_allowed_client_ips)
	{
		this._frontend_allowed_client_ips = frontend_allowed_client_ips;
	}

	/**
	 * The strategy used to balance the backends: leastconn / roundrobin
	 */
	get backend_balance_strategy()
	{
		return this._backend_balance_strategy || null;
	}

	set backend_balance_strategy(backend_balance_strategy)
	{
		this._backend_balance_strategy = backend_balance_strategy;
	}

	/**
	 * An array listing the backends that are proxied by this proxy
	 */
	get backend_servers()
	{
		return this._backend_servers || [];
	}

	set backend_servers(backend_servers)
	{
		this._backend_servers = backend_servers;
	}

	/**
	 * The id of the service asociated with this proxy
	 */
	get destination_id()
	{
		return this._destination_id || null;
	}

	set destination_id(destination_id)
	{
		this._destination_id = destination_id;
	}

	/**
	 * The type of service that the secure gateway proxies
	 */
	get destination_discriminator()
	{
		return this._destination_discriminator || null;
	}

	set destination_discriminator(destination_discriminator)
	{
		this._destination_discriminator = destination_discriminator;
	}

	/**
	 * The infrastructure id asociated with this proxy
	 */
	get infrastructure_id()
	{
		return this._infrastructure_id || null;
	}

	set infrastructure_id(infrastructure_id)
	{
		this._infrastructure_id = infrastructure_id;
	}

	/**
	 * The schema type.
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
			"name",
			"mode",
			"host",
			"backend_balance_strategy",
			"backend_servers"
		];
	}
};
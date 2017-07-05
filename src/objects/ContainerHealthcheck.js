const ObjectBase = require('./ObjectBase');

/**
 * A ContainerHealthcheck is an array of checks to be performed on running
 * Containers to determine if they are operating as expected.
 *
 * @class
 * @extends ObjectBase
 */
module.exports = 
class ContainerHealthcheck extends ObjectBase
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
	 * Protocol of the requests to be performed.
	 */
	get protocol()
	{
		return this._protocol || "HTTP";
	}

	set protocol(protocol)
	{
		this._protocol = protocol;
	}

	/**
	 * Path to endpoint exposed by the Container that will provide health status.
	 * Only used when the protocol is HTTP.
	 */
	get path()
	{
		return this._path || "/";
	}

	set path(path)
	{
		this._path = path;
	}

	/**
	 * Health check failures are ignored within this number of seconds of the
	 * Container being started or until the Container becomes healthy for the first
	 * time.
	 */
	get grace_period_seconds()
	{
		return this._grace_period_seconds || 15;
	}

	set grace_period_seconds(grace_period_seconds)
	{
		this._grace_period_seconds = grace_period_seconds;
	}

	/**
	 * Number of seconds to wait between health checks.
	 */
	get interval_seconds()
	{
		return this._interval_seconds || 10;
	}

	set interval_seconds(interval_seconds)
	{
		this._interval_seconds = interval_seconds;
	}

	/**
	 *  Index in this app's ports array to be used for health requests. An index is
	 * used so the app can use random ports, like "[0, 0, 0]" for example, and
	 * Containers could be started with port environment variables like $PORT1.
	 */
	get port_index()
	{
		return this._port_index || 0;
	}

	set port_index(port_index)
	{
		this._port_index = port_index;
	}

	/**
	 * Number of seconds after which a health check is considered a failure
	 * regardless of the response.
	 */
	get timeout_seconds()
	{
		return this._timeout_seconds || 20;
	}

	set timeout_seconds(timeout_seconds)
	{
		this._timeout_seconds = timeout_seconds;
	}

	/**
	 * Number of consecutive health check failures after which the unhealthy task
	 * should be killed.
	 */
	get max_consecutive_failures()
	{
		return this._max_consecutive_failures || 3;
	}

	set max_consecutive_failures(max_consecutive_failures)
	{
		this._max_consecutive_failures = max_consecutive_failures;
	}

	/**
	 * Command to run in order to determine the health of a task. Only used when
	 * the protocol is COMMAND
	 */
	get command()
	{
		return this._command || "";
	}

	set command(command)
	{
		this._command = command;
	}

	/**
	 * Ignore HTTP informational status codes 100 to 199.
	 */
	get ignore_http_1xx()
	{
		return this._ignore_http_1xx || false;
	}

	set ignore_http_1xx(ignore_http_1xx)
	{
		this._ignore_http_1xx = ignore_http_1xx;
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

		];
	}
};
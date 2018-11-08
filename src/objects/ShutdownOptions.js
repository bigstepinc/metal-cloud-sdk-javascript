const ObjectBase = require('./ObjectBase');

/**
 * Configures soft shutdown timeout options and gives a chance to allow or
 * disallow hard shutdowns. Note that the operating systems must honor ACPI commands.
 *
 * @class
 * @extends ObjectBase
 */
module.exports = 
class ShutdownOptions extends ObjectBase
{
	constructor(hard_shutdown_after_timeout, attempt_soft_shutdown)
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

		for(let index = 0; index < 2; index++)
		{
			let arg = arguments[index];

			if(arg === undefined || arg === null)
				throw new Error("Invalid params in ShutdownOptions constructor.");
		}

		this._hard_shutdown_after_timeout = hard_shutdown_after_timeout;
		this._attempt_soft_shutdown = attempt_soft_shutdown;
	}

	/**
	 * The timeout can be configured with this object's
	 * soft_shutdown_timeout_seconds property. If false, the
	 * infrastructure_deploy() call will hang if at least a required server is
	 * still powered on. The servers may be powered off manually using
	 * instance_server_power_set().
	 */
	get hard_shutdown_after_timeout()
	{
		return (this._hard_shutdown_after_timeout !== undefined ? this._hard_shutdown_after_timeout : null);
	}

	set hard_shutdown_after_timeout(hard_shutdown_after_timeout)
	{
		this._hard_shutdown_after_timeout = hard_shutdown_after_timeout;
	}

	/**
	 * An ACPI soft shutdown command will be sent to corresponding servers. If
	 * false, a hard shutdown is executed.
	 */
	get attempt_soft_shutdown()
	{
		return (this._attempt_soft_shutdown !== undefined ? this._attempt_soft_shutdown : null);
	}

	set attempt_soft_shutdown(attempt_soft_shutdown)
	{
		this._attempt_soft_shutdown = attempt_soft_shutdown;
	}

	/**
	 * When the timeout expires, if hard_shutdown_after_timeout is true, then a
	 * hard power off will be attempted. Specifying a long timeout such as 1 day
	 * will block edits or deploying other new edits on infrastructure elements
	 * until the timeout expires or the servers are powered off. The servers may be
	 * powered off manually using instance_server_power_set().
	 */
	get soft_shutdown_timeout_seconds()
	{
		return (this._soft_shutdown_timeout_seconds !== undefined ? this._soft_shutdown_timeout_seconds : 120);
	}

	set soft_shutdown_timeout_seconds(soft_shutdown_timeout_seconds)
	{
		this._soft_shutdown_timeout_seconds = soft_shutdown_timeout_seconds;
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
			"hard_shutdown_after_timeout",
			"attempt_soft_shutdown"
		];
	}
};
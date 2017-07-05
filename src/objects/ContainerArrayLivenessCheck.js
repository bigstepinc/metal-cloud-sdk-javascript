const ObjectBase = require('./ObjectBase');

/**
 * ContainerArray check to perform in order to asses the liveness of its Containers.
 *
 * @class
 * @extends ObjectBase
 */
module.exports = 
class ContainerArrayLivenessCheck extends ObjectBase
{
	constructor(check_action_type, check_action)
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
				throw new Error("Invalid params in ContainerArrayLivenessCheck constructor.");
		}

		this._check_action_type = check_action_type;
		this._check_action = check_action;
	}

	/**
	 * ContainerArrayLivenessCheck action type to perform.
	 */
	get check_action_type()
	{
		return this._check_action_type || null;
	}

	set check_action_type(check_action_type)
	{
		this._check_action_type = check_action_type;
	}

	/**
	 * ContainerArrayLivenessCheck action to perform.
	 */
	get check_action()
	{
		return this._check_action || null;
	}

	set check_action(check_action)
	{
		this._check_action = check_action;
	}

	/**
	 * Number of seconds after the Container has started before the
	 * ContainerArrayLivenessCheck is initiated.
	 */
	get check_delay_seconds()
	{
		return this._check_delay_seconds || 10;
	}

	set check_delay_seconds(check_delay_seconds)
	{
		this._check_delay_seconds = check_delay_seconds;
	}

	/**
	 * Time interval between consecutive ContainerArrayLivenessChecks in seconds.
	 * Minimum value is 1.
	 */
	get check_interval_seconds()
	{
		return this._check_interval_seconds || 10;
	}

	set check_interval_seconds(check_interval_seconds)
	{
		this._check_interval_seconds = check_interval_seconds;
	}

	/**
	 * Number of seconds after which the ContainerArrayLivenessCheck times out.
	 * Minimum value is 1.
	 */
	get check_timeout_seconds()
	{
		return this._check_timeout_seconds || 1;
	}

	set check_timeout_seconds(check_timeout_seconds)
	{
		this._check_timeout_seconds = check_timeout_seconds;
	}

	/**
	 * Minimum consecutive failures for the ContainerArrayLivenessCheck to be
	 * considered failed after having succeeded. Minimum value is 1.
	 */
	get check_failure_threshold()
	{
		return this._check_failure_threshold || 3;
	}

	set check_failure_threshold(check_failure_threshold)
	{
		this._check_failure_threshold = check_failure_threshold;
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
			"check_action_type",
			"check_action"
		];
	}
};
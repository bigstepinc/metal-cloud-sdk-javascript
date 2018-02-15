const ObjectBase = require('./ObjectBase');

/**
 * Threshold represents a certain property that if exceeded an infrastructure
 * owner would be notified.
 *
 * @class
 * @extends ObjectBase
 */
module.exports = 
class Threshold extends ObjectBase
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
	 * The ID of the Threshold
	 */
	get threshold_id()
	{
		return this._threshold_id || null;
	}

	set threshold_id(threshold_id)
	{
		this._threshold_id = threshold_id;
	}

	/**
	 * The ID of the user
	 */
	get user_id()
	{
		return this._user_id || null;
	}

	set user_id(user_id)
	{
		this._user_id = user_id;
	}

	/**
	 * The ID of the infrastructure
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
	 * The currency for the amount is the same as the pricing currency for the
	 * user's franchise
	 */
	get threshold_cost()
	{
		return this._threshold_cost || 0;
	}

	set threshold_cost(threshold_cost)
	{
		this._threshold_cost = threshold_cost;
	}

	/**
	 * The period of time that must pass before another warning is issued
	 */
	get threshold_action_repeat_interval()
	{
		return this._threshold_action_repeat_interval || "never";
	}

	set threshold_action_repeat_interval(threshold_action_repeat_interval)
	{
		this._threshold_action_repeat_interval = threshold_action_repeat_interval;
	}

	/**
	 * How is the threshold calculated
	 */
	get threshold_type()
	{
		return this._threshold_type || "infrastructure_ondemand_and_metered_costs";
	}

	set threshold_type(threshold_type)
	{
		this._threshold_type = threshold_type;
	}

	/**
	 * What action to be taken when the threshold is exceeded
	 */
	get threshold_action()
	{
		return this._threshold_action || "email";
	}

	set threshold_action(threshold_action)
	{
		this._threshold_action = threshold_action;
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
const ObjectBase = require('./ObjectBase');

/**
 * Threshold represents a certain property that if reached an infrastructure
 * owner would be notified.
 *
 * @class
 * @extends ObjectBase
 */
module.exports = 
class Threshold extends ObjectBase
{
	constructor(infrastructure_id, threshold_value, threshold_unit)
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

		for(let index = 0; index < 3; index++)
		{
			let arg = arguments[index];

			if(arg === undefined || arg === null)
				throw new Error("Invalid params in Threshold constructor.");
		}

		this._infrastructure_id = infrastructure_id;
		this._threshold_value = threshold_value;
		this._threshold_unit = threshold_unit;
	}

	/**
	 * The ID of the Threshold
	 */
	get threshold_id()
	{
		return (this._threshold_id !== undefined ? this._threshold_id : null);
	}

	set threshold_id(threshold_id)
	{
		this._threshold_id = threshold_id;
	}

	/**
	 * The ID of the user that owns the threshold
	 */
	get user_id_owner()
	{
		return (this._user_id_owner !== undefined ? this._user_id_owner : null);
	}

	set user_id_owner(user_id_owner)
	{
		this._user_id_owner = user_id_owner;
	}

	/**
	 * The ID of the infrastructure
	 */
	get infrastructure_id()
	{
		return (this._infrastructure_id !== undefined ? this._infrastructure_id : null);
	}

	set infrastructure_id(infrastructure_id)
	{
		this._infrastructure_id = infrastructure_id;
	}

	/**
	 * The ID of the network
	 */
	get network_id()
	{
		return (this._network_id !== undefined ? this._network_id : null);
	}

	set network_id(network_id)
	{
		this._network_id = network_id;
	}

	/**
	 * A string which provides a description of the threshold.
	 */
	get threshold_description()
	{
		return (this._threshold_description !== undefined ? this._threshold_description : "");
	}

	set threshold_description(threshold_description)
	{
		this._threshold_description = threshold_description;
	}

	/**
	 * The value for the threshold
	 */
	get threshold_value()
	{
		return (this._threshold_value !== undefined ? this._threshold_value : null);
	}

	set threshold_value(threshold_value)
	{
		this._threshold_value = threshold_value;
	}

	/**
	 * The measurement unit associated with the threshold value
	 */
	get threshold_unit()
	{
		return (this._threshold_unit !== undefined ? this._threshold_unit : null);
	}

	set threshold_unit(threshold_unit)
	{
		this._threshold_unit = threshold_unit;
	}

	/**
	 * The period of time in hours that must pass before another warning is issued.
	 * For a one time warning, null is required
	 */
	get threshold_action_repeat_interval_hours()
	{
		return (this._threshold_action_repeat_interval_hours !== undefined ? this._threshold_action_repeat_interval_hours : 0);
	}

	set threshold_action_repeat_interval_hours(threshold_action_repeat_interval_hours)
	{
		this._threshold_action_repeat_interval_hours = threshold_action_repeat_interval_hours;
	}

	/**
	 * How is the threshold calculated
	 */
	get threshold_type()
	{
		return (this._threshold_type !== undefined ? this._threshold_type : "infrastructure_on_demand_and_metered_costs");
	}

	set threshold_type(threshold_type)
	{
		this._threshold_type = threshold_type;
	}

	/**
	 * What action to be taken when the threshold is reached
	 */
	get threshold_action()
	{
		return (this._threshold_action !== undefined ? this._threshold_action : "email");
	}

	set threshold_action(threshold_action)
	{
		this._threshold_action = threshold_action;
	}

	/**
	 * Defines whether the event must be triggered when the measured value is
	 * greater than or less than the threshold_value
	 */
	get threshold_bound_type()
	{
		return (this._threshold_bound_type !== undefined ? this._threshold_bound_type : "upper");
	}

	set threshold_bound_type(threshold_bound_type)
	{
		this._threshold_bound_type = threshold_bound_type;
	}

	/**
	 * Defines the destination for the threshold value. It can be seen as a subtype
	 * of the threshold_type
	 */
	get threshold_value_destination()
	{
		return (this._threshold_value_destination !== undefined ? this._threshold_value_destination : "infrastructure_total_costs");
	}

	set threshold_value_destination(threshold_value_destination)
	{
		this._threshold_value_destination = threshold_value_destination;
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
			"infrastructure_id",
			"threshold_value",
			"threshold_unit"
		];
	}
};
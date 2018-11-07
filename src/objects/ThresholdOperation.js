const ObjectBase = require('./ObjectBase');

/**
 * ThresholdOperation contains information regarding the changes that are to be
 * made to a threshold
 *
 * @class
 * @extends ObjectBase
 */
module.exports = 
class ThresholdOperation extends ObjectBase
{
	constructor(threshold_description, threshold_value, threshold_action_repeat_interval_hours, threshold_action, threshold_bound_type, threshold_value_destination)
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

		for(let index = 0; index < 6; index++)
		{
			let arg = arguments[index];

			if(arg === undefined || arg === null)
				throw new Error("Invalid params in ThresholdOperation constructor.");
		}

		this._threshold_description = threshold_description;
		this._threshold_value = threshold_value;
		this._threshold_action_repeat_interval_hours = threshold_action_repeat_interval_hours;
		this._threshold_action = threshold_action;
		this._threshold_bound_type = threshold_bound_type;
		this._threshold_value_destination = threshold_value_destination;
	}

	/**
	 * A string which provides a description of the threshold.
	 */
	get threshold_description()
	{
		return (this._threshold_description !== undefined ? this._threshold_description : null);
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
	 * The period of time in hours that must pass before another warning is issued.
	 * For a one time warning, null is required
	 */
	get threshold_action_repeat_interval_hours()
	{
		return (this._threshold_action_repeat_interval_hours !== undefined ? this._threshold_action_repeat_interval_hours : null);
	}

	set threshold_action_repeat_interval_hours(threshold_action_repeat_interval_hours)
	{
		this._threshold_action_repeat_interval_hours = threshold_action_repeat_interval_hours;
	}

	/**
	 * What action to be taken when the threshold is reached
	 */
	get threshold_action()
	{
		return (this._threshold_action !== undefined ? this._threshold_action : null);
	}

	set threshold_action(threshold_action)
	{
		this._threshold_action = threshold_action;
	}

	/**
	 * Defines whether the event must be triggered when the measured value is
	 * greater than or less than the threashold_value
	 */
	get threshold_bound_type()
	{
		return (this._threshold_bound_type !== undefined ? this._threshold_bound_type : null);
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
		return (this._threshold_value_destination !== undefined ? this._threshold_value_destination : null);
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
			"threshold_description",
			"threshold_value",
			"threshold_action_repeat_interval_hours",
			"threshold_action",
			"threshold_bound_type",
			"threshold_value_destination"
		];
	}
};
const ObjectBase = require('./ObjectBase');

/**
 * Cost details for resources like instances, Drives and Subnets.
 *
 * @class
 * @extends ObjectBase
 */
module.exports = 
class ReportUtilization extends ObjectBase
{
	constructor(quantity, measurement_unit, cost, cost_currency)
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

		for(let index = 0; index < 4; index++)
		{
			let arg = arguments[index];

			if(arg === undefined || arg === null)
				throw new Error("Invalid params in ReportUtilization constructor.");
		}

		this._quantity = quantity;
		this._measurement_unit = measurement_unit;
		this._cost = cost;
		this._cost_currency = cost_currency;
	}

	/**
	 * The amount of a resource used to calculate the costs.
	 */
	get quantity()
	{
		return this._quantity || null;
	}

	set quantity(quantity)
	{
		this._quantity = quantity;
	}

	/**
	 * The measurement unit used to calculate the costs.
	 */
	get measurement_unit()
	{
		return this._measurement_unit || null;
	}

	set measurement_unit(measurement_unit)
	{
		this._measurement_unit = measurement_unit;
	}

	/**
	 * The costs of a certain resource for a period of time.
	 */
	get cost()
	{
		return this._cost || null;
	}

	set cost(cost)
	{
		this._cost = cost;
	}

	/**
	 * The currency used to calculate the costs.
	 */
	get cost_currency()
	{
		return this._cost_currency || null;
	}

	set cost_currency(cost_currency)
	{
		this._cost_currency = cost_currency;
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
			"quantity",
			"measurement_unit",
			"cost",
			"cost_currency"
		];
	}
};
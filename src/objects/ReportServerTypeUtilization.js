const ObjectBase = require('./ObjectBase');

/**
 * Cost details for a server type reservation.
 *
 * @class
 * @extends ObjectBase
 */
module.exports = 
class ReportServerTypeUtilization extends ObjectBase
{
	constructor(cost, cost_currency, server_type_name, server_type_reservation_id, created_timestamp, start_timestamp, end_timestamp)
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

		for(let index = 0; index < 7; index++)
		{
			let arg = arguments[index];

			if(arg === undefined || arg === null)
				throw new Error("Invalid params in ReportServerTypeUtilization constructor.");
		}

		this._cost = cost;
		this._cost_currency = cost_currency;
		this._server_type_name = server_type_name;
		this._server_type_reservation_id = server_type_reservation_id;
		this._created_timestamp = created_timestamp;
		this._start_timestamp = start_timestamp;
		this._end_timestamp = end_timestamp;
	}

	/**
	 * The costs of a server reservation for a period of time.
	 */
	get cost()
	{
		return (this._cost !== undefined ? this._cost : null);
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
		return (this._cost_currency !== undefined ? this._cost_currency : null);
	}

	set cost_currency(cost_currency)
	{
		this._cost_currency = cost_currency;
	}

	/**
	 * The name of the server type.
	 */
	get server_type_name()
	{
		return (this._server_type_name !== undefined ? this._server_type_name : null);
	}

	set server_type_name(server_type_name)
	{
		this._server_type_name = server_type_name;
	}

	/**
	 * The ID of the server type reservation.
	 */
	get server_type_reservation_id()
	{
		return (this._server_type_reservation_id !== undefined ? this._server_type_reservation_id : null);
	}

	set server_type_reservation_id(server_type_reservation_id)
	{
		this._server_type_reservation_id = server_type_reservation_id;
	}

	/**
	 * Date and time when the server reservation was created.
	 */
	get created_timestamp()
	{
		return (this._created_timestamp !== undefined ? this._created_timestamp : null);
	}

	set created_timestamp(created_timestamp)
	{
		this._created_timestamp = created_timestamp;
	}

	/**
	 * Date and time when the server reservation becomes active. It is an hour
	 * later than created_timestamp.
	 */
	get start_timestamp()
	{
		return (this._start_timestamp !== undefined ? this._start_timestamp : null);
	}

	set start_timestamp(start_timestamp)
	{
		this._start_timestamp = start_timestamp;
	}

	/**
	 * Date and time when the server reservation expires.
	 */
	get end_timestamp()
	{
		return (this._end_timestamp !== undefined ? this._end_timestamp : null);
	}

	set end_timestamp(end_timestamp)
	{
		this._end_timestamp = end_timestamp;
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
			"cost",
			"cost_currency",
			"server_type_name",
			"server_type_reservation_id",
			"created_timestamp",
			"start_timestamp",
			"end_timestamp"
		];
	}
};
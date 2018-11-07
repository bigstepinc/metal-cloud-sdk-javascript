const ObjectBase = require('./ObjectBase');

/**
 * Contains the total costs for servers, Drives, Subnets, internet traffic and
 * server reservations.
 *
 * @class
 * @extends ObjectBase
 */
module.exports = 
class ReportResourceUtilizationSummary extends ObjectBase
{
	constructor(resource_utilization, internet, resource_reservation_installments, infrastructure_ids, start_timestamp, end_timestamp)
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
				throw new Error("Invalid params in ReportResourceUtilizationSummary constructor.");
		}

		this._resource_utilization = resource_utilization;
		this._internet = internet;
		this._resource_reservation_installments = resource_reservation_installments;
		this._infrastructure_ids = infrastructure_ids;
		this._start_timestamp = start_timestamp;
		this._end_timestamp = end_timestamp;
	}

	/**
	 * All the detailed costs for Drives, instances and Subnets.
	 */
	get resource_utilization()
	{
		return (this._resource_utilization !== undefined ? this._resource_utilization : null);
	}

	set resource_utilization(resource_utilization)
	{
		this._resource_utilization = resource_utilization;
	}

	/**
	 * All the detailed costs for internet traffic.
	 */
	get internet()
	{
		return (this._internet !== undefined ? this._internet : null);
	}

	set internet(internet)
	{
		this._internet = internet;
	}

	/**
	 * All the detailed costs for server type reservations.
	 */
	get resource_reservation_installments()
	{
		return (this._resource_reservation_installments !== undefined ? this._resource_reservation_installments : null);
	}

	set resource_reservation_installments(resource_reservation_installments)
	{
		this._resource_reservation_installments = resource_reservation_installments;
	}

	/**
	 * The infrastructure IDs for the involved infrastructures.
	 */
	get infrastructure_ids()
	{
		return (this._infrastructure_ids !== undefined ? this._infrastructure_ids : []);
	}

	set infrastructure_ids(infrastructure_ids)
	{
		this._infrastructure_ids = infrastructure_ids;
	}

	/**
	 * ISO 8601 timestamp which holds the start date and time for calculating the
	 * costs of the resource usage.
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
	 * ISO 8601 timestamp which holds the end date and time for calculating the
	 * costs of the resource usage.
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
			"resource_utilization",
			"internet",
			"resource_reservation_installments",
			"infrastructure_ids",
			"start_timestamp",
			"end_timestamp"
		];
	}
};
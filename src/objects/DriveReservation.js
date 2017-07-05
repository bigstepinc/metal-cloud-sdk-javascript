const ObjectBase = require('./ObjectBase');

/**
 * Represents a reservation created with a specific drive capacity.
 *
 * @class
 * @extends ObjectBase
 */
module.exports = 
class DriveReservation extends ObjectBase
{
	constructor(drive_size_mbytes)
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

		if(drive_size_mbytes === undefined || drive_size_mbytes === null)
			throw new Error("Invalid param in DriveReservation constructor.");

		this._drive_size_mbytes = drive_size_mbytes;
	}

	/**
	 * Represents the user ID who has the reservation.
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
	 * Date and time when the reservation was created. Is an ISO 8601 timestamp
	 * using UTC time. Example format: 2013-11-29T13:00:01Z.
	 */
	get resource_reservation_created_timestamp()
	{
		return this._resource_reservation_created_timestamp || null;
	}

	set resource_reservation_created_timestamp(resource_reservation_created_timestamp)
	{
		this._resource_reservation_created_timestamp = resource_reservation_created_timestamp;
	}

	/**
	 * Number of months in a reservation cycle.
	 */
	get resource_reservation_cycle_months()
	{
		return this._resource_reservation_cycle_months || null;
	}

	set resource_reservation_cycle_months(resource_reservation_cycle_months)
	{
		this._resource_reservation_cycle_months = resource_reservation_cycle_months;
	}

	/**
	 * Number of months in a reservation installment cycle.
	 */
	get resource_reservation_installment_cycle_months()
	{
		return this._resource_reservation_installment_cycle_months || null;
	}

	set resource_reservation_installment_cycle_months(resource_reservation_installment_cycle_months)
	{
		this._resource_reservation_installment_cycle_months = resource_reservation_installment_cycle_months;
	}

	/**
	 * Date and time when the reservation expires. Is an ISO 8601 timestamp using
	 * UTC time. Example format: 2013-11-29T13:00:01Z.
	 */
	get resource_reservation_end_timestamp()
	{
		return this._resource_reservation_end_timestamp || null;
	}

	set resource_reservation_end_timestamp(resource_reservation_end_timestamp)
	{
		this._resource_reservation_end_timestamp = resource_reservation_end_timestamp;
	}

	/**
	 * The cost of the reserved resource for a 30-day period.
	 */
	get resource_reservation_price()
	{
		return this._resource_reservation_price || null;
	}

	set resource_reservation_price(resource_reservation_price)
	{
		this._resource_reservation_price = resource_reservation_price;
	}

	/**
	 * The currency used to calculate the price.
	 */
	get resource_reservation_price_currency()
	{
		return this._resource_reservation_price_currency || null;
	}

	set resource_reservation_price_currency(resource_reservation_price_currency)
	{
		this._resource_reservation_price_currency = resource_reservation_price_currency;
	}

	/**
	 * If true, the reservation is automatically renewed for another cycle when
	 * reaching its expiration date.
	 */
	get resource_reservation_recurring()
	{
		return this._resource_reservation_recurring || true;
	}

	set resource_reservation_recurring(resource_reservation_recurring)
	{
		this._resource_reservation_recurring = resource_reservation_recurring;
	}

	/**
	 * Date and time when the reservation becomes active. It is an hour later than
	 * resource_reservation_created_timestamp. Is an ISO 8601 timestamp using UTC
	 * time. Example format: 2013-11-29T13:00:01Z.
	 */
	get resource_reservation_start_timestamp()
	{
		return this._resource_reservation_start_timestamp || null;
	}

	set resource_reservation_start_timestamp(resource_reservation_start_timestamp)
	{
		this._resource_reservation_start_timestamp = resource_reservation_start_timestamp;
	}

	/**
	 * This value overwrites the on-demand price when costs are calculated. If it
	 * is 0, using this resource will register no on-demand costs.
	 */
	get resource_utilization_price()
	{
		return this._resource_utilization_price || null;
	}

	set resource_utilization_price(resource_utilization_price)
	{
		this._resource_utilization_price = resource_utilization_price;
	}

	/**
	 * The currency used to calculate the price for a single unit of time.
	 */
	get resource_utilization_price_currency()
	{
		return this._resource_utilization_price_currency || null;
	}

	set resource_utilization_price_currency(resource_utilization_price_currency)
	{
		this._resource_utilization_price_currency = resource_utilization_price_currency;
	}

	/**
	 * The unit of time measured in seconds.
	 */
	get resource_utilization_price_unit_seconds()
	{
		return this._resource_utilization_price_unit_seconds || null;
	}

	set resource_utilization_price_unit_seconds(resource_utilization_price_unit_seconds)
	{
		this._resource_utilization_price_unit_seconds = resource_utilization_price_unit_seconds;
	}

	/**
	 * The ID of the reservation.
	 */
	get drive_reservation_id()
	{
		return this._drive_reservation_id || null;
	}

	set drive_reservation_id(drive_reservation_id)
	{
		this._drive_reservation_id = drive_reservation_id;
	}

	/**
	 * Represents the reserved Drive capacity.
	 */
	get drive_size_mbytes()
	{
		return this._drive_size_mbytes || null;
	}

	set drive_size_mbytes(drive_size_mbytes)
	{
		this._drive_size_mbytes = drive_size_mbytes;
	}

	/**
	 * Represents the reserved Drive’s type of storage.
	 */
	get drive_storage_type()
	{
		return this._drive_storage_type || "iscsi_ssd";
	}

	set drive_storage_type(drive_storage_type)
	{
		this._drive_storage_type = drive_storage_type;
	}

	/**
	 * All the DriveReservationInstallment objects associated with the reservation.
	 */
	get resource_reservation_installments()
	{
		return this._resource_reservation_installments || [];
	}

	set resource_reservation_installments(resource_reservation_installments)
	{
		this._resource_reservation_installments = resource_reservation_installments;
	}

	/**
	 * The status of the reservation.
	 */
	get resource_reservation_status()
	{
		return this._resource_reservation_status || null;
	}

	set resource_reservation_status(resource_reservation_status)
	{
		this._resource_reservation_status = resource_reservation_status;
	}

	/**
	 * The datacenter on which the reservation is made.
	 */
	get datacenter_name()
	{
		return this._datacenter_name || null;
	}

	set datacenter_name(datacenter_name)
	{
		this._datacenter_name = datacenter_name;
	}

	/**
	 * The user plan type based on wich the reservation is made.
	 */
	get user_plan_type()
	{
		return this._user_plan_type || "vanilla";
	}

	set user_plan_type(user_plan_type)
	{
		this._user_plan_type = user_plan_type;
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
			"drive_size_mbytes"
		];
	}
};
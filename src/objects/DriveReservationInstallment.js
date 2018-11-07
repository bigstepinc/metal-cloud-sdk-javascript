const ObjectBase = require('./ObjectBase');

/**
 * Represents a cyclical installment of a reservation created with a specific
 * Drive capacity.
 *
 * @class
 * @extends ObjectBase
 */
module.exports = 
class DriveReservationInstallment extends ObjectBase
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
	 * The ID of the reservation.
	 */
	get drive_reservation_id()
	{
		return (this._drive_reservation_id !== undefined ? this._drive_reservation_id : null);
	}

	set drive_reservation_id(drive_reservation_id)
	{
		this._drive_reservation_id = drive_reservation_id;
	}

	/**
	 * The ID of the reservation installment.
	 */
	get drive_reservation_installment_id()
	{
		return (this._drive_reservation_installment_id !== undefined ? this._drive_reservation_installment_id : null);
	}

	set drive_reservation_installment_id(drive_reservation_installment_id)
	{
		this._drive_reservation_installment_id = drive_reservation_installment_id;
	}

	/**
	 * Date and time when the reservation installment was created. Is an ISO 8601
	 * timestamp using UTC time. Example format: 2013-11-29T13:00:01Z.
	 */
	get resource_reservation_installment_created_timestamp()
	{
		return (this._resource_reservation_installment_created_timestamp !== undefined ? this._resource_reservation_installment_created_timestamp : null);
	}

	set resource_reservation_installment_created_timestamp(resource_reservation_installment_created_timestamp)
	{
		this._resource_reservation_installment_created_timestamp = resource_reservation_installment_created_timestamp;
	}

	/**
	 * Date and time when the reservation becomes active. Is an ISO 8601 timestamp
	 * using UTC time. Example format: 2013-11-29T13:00:01Z.
	 */
	get resource_reservation_installment_start_timestamp()
	{
		return (this._resource_reservation_installment_start_timestamp !== undefined ? this._resource_reservation_installment_start_timestamp : null);
	}

	set resource_reservation_installment_start_timestamp(resource_reservation_installment_start_timestamp)
	{
		this._resource_reservation_installment_start_timestamp = resource_reservation_installment_start_timestamp;
	}

	/**
	 * Date and time when the reservation installment expires. Is an ISO 8601
	 * timestamp using UTC time. Example format: 2013-11-29T13:00:01Z.
	 */
	get resource_reservation_installment_end_timestamp()
	{
		return (this._resource_reservation_installment_end_timestamp !== undefined ? this._resource_reservation_installment_end_timestamp : null);
	}

	set resource_reservation_installment_end_timestamp(resource_reservation_installment_end_timestamp)
	{
		this._resource_reservation_installment_end_timestamp = resource_reservation_installment_end_timestamp;
	}

	/**
	 * The costs of all the reserved resources for the duration of the installment.
	 */
	get resource_reservation_installment_price()
	{
		return (this._resource_reservation_installment_price !== undefined ? this._resource_reservation_installment_price : null);
	}

	set resource_reservation_installment_price(resource_reservation_installment_price)
	{
		this._resource_reservation_installment_price = resource_reservation_installment_price;
	}

	/**
	 * The currency used to calculate the price.
	 */
	get resource_reservation_installment_price_currency()
	{
		return (this._resource_reservation_installment_price_currency !== undefined ? this._resource_reservation_installment_price_currency : null);
	}

	set resource_reservation_installment_price_currency(resource_reservation_installment_price_currency)
	{
		this._resource_reservation_installment_price_currency = resource_reservation_installment_price_currency;
	}

	/**
	 * The status of the reservation installment.
	 */
	get resource_reservation_installment_status()
	{
		return (this._resource_reservation_installment_status !== undefined ? this._resource_reservation_installment_status : null);
	}

	set resource_reservation_installment_status(resource_reservation_installment_status)
	{
		this._resource_reservation_installment_status = resource_reservation_installment_status;
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

		];
	}
};
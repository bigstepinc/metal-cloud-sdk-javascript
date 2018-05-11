const ObjectBase = require('./ObjectBase');

/**
 * All the detailed costs for server reservations.
 *
 * @class
 * @extends ObjectBase
 */
module.exports = 
class ReportReservationInstallments extends ObjectBase
{
	constructor(server_types)
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

		if(server_types === undefined || server_types === null)
			throw new Error("Invalid param in ReportReservationInstallments constructor.");

		this._server_types = server_types;
	}

	/**
	 * ReportServerTypeUtilization objects. The costs for all the servers.
	 */
	get server_types()
	{
		return this._server_types || [];
	}

	set server_types(server_types)
	{
		this._server_types = server_types;
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
			"server_types"
		];
	}
};
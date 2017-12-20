const ObjectBase = require('./ObjectBase');

/**
 * A blacklisted LAN IP range.
 *
 * @class
 * @extends ObjectBase
 */
module.exports = 
class BlacklistedLANIPRange extends ObjectBase
{
	constructor(blacklisted_range_start_human_readable, blacklisted_range_end_human_readable)
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
				throw new Error("Invalid params in BlacklistedLANIPRange constructor.");
		}

		this._blacklisted_range_start_human_readable = blacklisted_range_start_human_readable;
		this._blacklisted_range_end_human_readable = blacklisted_range_end_human_readable;
	}

	/**
	 * The start address of the blacklisted LAN IP range.
	 */
	get blacklisted_range_start_human_readable()
	{
		return this._blacklisted_range_start_human_readable || null;
	}

	set blacklisted_range_start_human_readable(blacklisted_range_start_human_readable)
	{
		this._blacklisted_range_start_human_readable = blacklisted_range_start_human_readable;
	}

	/**
	 * The end address of the blacklisted LAN IP range.
	 */
	get blacklisted_range_end_human_readable()
	{
		return this._blacklisted_range_end_human_readable || null;
	}

	set blacklisted_range_end_human_readable(blacklisted_range_end_human_readable)
	{
		this._blacklisted_range_end_human_readable = blacklisted_range_end_human_readable;
	}

	/**
	 * Description regarding the use of the blacklist.
	 */
	get blacklisted_range_description()
	{
		return this._blacklisted_range_description || null;
	}

	set blacklisted_range_description(blacklisted_range_description)
	{
		this._blacklisted_range_description = blacklisted_range_description;
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
			"blacklisted_range_start_human_readable",
			"blacklisted_range_end_human_readable"
		];
	}
};
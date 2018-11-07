const ObjectBase = require('./ObjectBase');

/**
 * A reserved LAN IP range.
 *
 * @class
 * @extends ObjectBase
 */
module.exports = 
class ReservedLANIPRange extends ObjectBase
{
	constructor(reserved_range_start_human_readable, reserved_range_end_human_readable)
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
				throw new Error("Invalid params in ReservedLANIPRange constructor.");
		}

		this._reserved_range_start_human_readable = reserved_range_start_human_readable;
		this._reserved_range_end_human_readable = reserved_range_end_human_readable;
	}

	/**
	 * The start address of the reserved LAN IP range.
	 */
	get reserved_range_start_human_readable()
	{
		return (this._reserved_range_start_human_readable !== undefined ? this._reserved_range_start_human_readable : null);
	}

	set reserved_range_start_human_readable(reserved_range_start_human_readable)
	{
		this._reserved_range_start_human_readable = reserved_range_start_human_readable;
	}

	/**
	 * The end address of the reserved LAN IP range.
	 */
	get reserved_range_end_human_readable()
	{
		return (this._reserved_range_end_human_readable !== undefined ? this._reserved_range_end_human_readable : null);
	}

	set reserved_range_end_human_readable(reserved_range_end_human_readable)
	{
		this._reserved_range_end_human_readable = reserved_range_end_human_readable;
	}

	/**
	 * Description regarding the use of the reserved range.
	 */
	get reserved_range_description()
	{
		return (this._reserved_range_description !== undefined ? this._reserved_range_description : null);
	}

	set reserved_range_description(reserved_range_description)
	{
		this._reserved_range_description = reserved_range_description;
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
			"reserved_range_start_human_readable",
			"reserved_range_end_human_readable"
		];
	}
};
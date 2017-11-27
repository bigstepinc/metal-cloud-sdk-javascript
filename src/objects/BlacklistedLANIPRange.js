const ObjectBase = require('./ObjectBase');

/**
 *
 *
 * @class
 * @extends ObjectBase
 */
module.exports = 
class BlacklistedLANIPRange extends ObjectBase
{
	constructor(range_start_human_readable, range_end_human_readable)
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

		this._range_start_human_readable = range_start_human_readable;
		this._range_end_human_readable = range_end_human_readable;
	}

	/**
	 * The start address of the blacklisted range
	 */
	get range_start_human_readable()
	{
		return this._range_start_human_readable || null;
	}

	set range_start_human_readable(range_start_human_readable)
	{
		this._range_start_human_readable = range_start_human_readable;
	}

	/**
	 * The end address of the blacklisted range
	 */
	get range_end_human_readable()
	{
		return this._range_end_human_readable || null;
	}

	set range_end_human_readable(range_end_human_readable)
	{
		this._range_end_human_readable = range_end_human_readable;
	}

	/**
	 * Comment describing the use of the blacklist
	 */
	get comment()
	{
		return this._comment || null;
	}

	set comment(comment)
	{
		this._comment = comment;
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
			"range_start_human_readable",
			"range_end_human_readable"
		];
	}
};
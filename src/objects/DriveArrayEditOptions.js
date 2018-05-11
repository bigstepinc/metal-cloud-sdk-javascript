const ObjectBase = require('./ObjectBase');

/**
 * Available properties for the drive_array_edit function.
 *
 * @class
 * @extends ObjectBase
 */
module.exports = 
class DriveArrayEditOptions extends ObjectBase
{
	constructor(update_active_drives_size)
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

		if(update_active_drives_size === undefined || update_active_drives_size === null)
			throw new Error("Invalid param in DriveArrayEditOptions constructor.");

		this._update_active_drives_size = update_active_drives_size;
	}

	/**
	 * If true, active Drives will be resized to the new drive_size_mbytes_default
	 * property of the parent DriveArray.
	 */
	get update_active_drives_size()
	{
		return this._update_active_drives_size || null;
	}

	set update_active_drives_size(update_active_drives_size)
	{
		this._update_active_drives_size = update_active_drives_size;
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
			"update_active_drives_size"
		];
	}
};
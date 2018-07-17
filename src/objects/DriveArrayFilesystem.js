const ObjectBase = require('./ObjectBase');

/**
 * Contains details about the file system of the Drives belonging to a DriveArray.
 *
 * @class
 * @extends ObjectBase
 */
module.exports = 
class DriveArrayFilesystem extends ObjectBase
{
	constructor(drive_array_filesystem_type_default, drive_array_filesystem_block_size_bytes_default)
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
				throw new Error("Invalid params in DriveArrayFilesystem constructor.");
		}

		this._drive_array_filesystem_type_default = drive_array_filesystem_type_default;
		this._drive_array_filesystem_block_size_bytes_default = drive_array_filesystem_block_size_bytes_default;
	}

	/**
	 * The file system type of the Drives belonging to a DriveArray.
	 */
	get drive_array_filesystem_type_default()
	{
		return this._drive_array_filesystem_type_default || null;
	}

	set drive_array_filesystem_type_default(drive_array_filesystem_type_default)
	{
		this._drive_array_filesystem_type_default = drive_array_filesystem_type_default;
	}

	/**
	 * The file system block size of the Drives belonging to a DriveArray.
	 */
	get drive_array_filesystem_block_size_bytes_default()
	{
		return this._drive_array_filesystem_block_size_bytes_default || null;
	}

	set drive_array_filesystem_block_size_bytes_default(drive_array_filesystem_block_size_bytes_default)
	{
		this._drive_array_filesystem_block_size_bytes_default = drive_array_filesystem_block_size_bytes_default;
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
			"drive_array_filesystem_type_default",
			"drive_array_filesystem_block_size_bytes_default"
		];
	}
};
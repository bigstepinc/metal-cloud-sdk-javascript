const ObjectBase = require('./ObjectBase');

/**
 * Contains details about the file system of a Drive.
 *
 * @class
 * @extends ObjectBase
 */
module.exports = 
class DriveFilesystem extends ObjectBase
{
	constructor(drive_filesystem_type, drive_filesystem_block_size_bytes)
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
				throw new Error("Invalid params in DriveFilesystem constructor.");
		}

		this._drive_filesystem_type = drive_filesystem_type;
		this._drive_filesystem_block_size_bytes = drive_filesystem_block_size_bytes;
	}

	/**
	 * The file system type of the Drive.
	 */
	get drive_filesystem_type()
	{
		return this._drive_filesystem_type || null;
	}

	set drive_filesystem_type(drive_filesystem_type)
	{
		this._drive_filesystem_type = drive_filesystem_type;
	}

	/**
	 * The file system block size of the Drive.
	 */
	get drive_filesystem_block_size_bytes()
	{
		return this._drive_filesystem_block_size_bytes || null;
	}

	set drive_filesystem_block_size_bytes(drive_filesystem_block_size_bytes)
	{
		this._drive_filesystem_block_size_bytes = drive_filesystem_block_size_bytes;
	}

	/**
	 * The path where the Drive is or will be mounted.
	 */
	get drive_filesystem_mount_path()
	{
		return this._drive_filesystem_mount_path || null;
	}

	set drive_filesystem_mount_path(drive_filesystem_mount_path)
	{
		this._drive_filesystem_mount_path = drive_filesystem_mount_path;
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
			"drive_filesystem_type",
			"drive_filesystem_block_size_bytes"
		];
	}
};
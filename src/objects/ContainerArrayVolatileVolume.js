const ObjectBase = require('./ObjectBase');

/**
 * ContainerArray volatile storage resource.
 *
 * @class
 * @extends ObjectBase
 */
module.exports = 
class ContainerArrayVolatileVolume extends ObjectBase
{
	constructor(volatile_volume_name, volatile_volume_type, volatile_volume_mount_path)
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

		for(let index = 0; index < 3; index++)
		{
			let arg = arguments[index];

			if(arg === undefined || arg === null)
				throw new Error("Invalid params in ContainerArrayVolatileVolume constructor.");
		}

		this._volatile_volume_name = volatile_volume_name;
		this._volatile_volume_type = volatile_volume_type;
		this._volatile_volume_mount_path = volatile_volume_mount_path;
	}

	/**
	 * Volatile volume name.
	 */
	get volatile_volume_name()
	{
		return this._volatile_volume_name || null;
	}

	set volatile_volume_name(volatile_volume_name)
	{
		this._volatile_volume_name = volatile_volume_name;
	}

	/**
	 * Volatile volume type.
	 */
	get volatile_volume_type()
	{
		return this._volatile_volume_type || null;
	}

	set volatile_volume_type(volatile_volume_type)
	{
		this._volatile_volume_type = volatile_volume_type;
	}

	/**
	 * Volatile volume container mount path.
	 */
	get volatile_volume_mount_path()
	{
		return this._volatile_volume_mount_path || null;
	}

	set volatile_volume_mount_path(volatile_volume_mount_path)
	{
		this._volatile_volume_mount_path = volatile_volume_mount_path;
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
			"volatile_volume_name",
			"volatile_volume_type",
			"volatile_volume_mount_path"
		];
	}
};
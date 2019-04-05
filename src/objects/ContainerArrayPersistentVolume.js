const ObjectBase = require('./ObjectBase');

/**
 * ContainerArray persistent storage resource.
 *
 * @class
 * @extends ObjectBase
 */
module.exports = 
class ContainerArrayPersistentVolume extends ObjectBase
{
	constructor(persistent_volume_name, persistent_volume_type, persistent_volume_mount_path)
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
				throw new Error("Invalid params in ContainerArrayPersistentVolume constructor.");
		}

		this._persistent_volume_name = persistent_volume_name;
		this._persistent_volume_type = persistent_volume_type;
		this._persistent_volume_mount_path = persistent_volume_mount_path;
	}

	/**
	 * Persistent volume name.
	 */
	get persistent_volume_name()
	{
		return (this._persistent_volume_name !== undefined ? this._persistent_volume_name : null);
	}

	set persistent_volume_name(persistent_volume_name)
	{
		this._persistent_volume_name = persistent_volume_name;
	}

	/**
	 * Persistent volume type.
	 */
	get persistent_volume_type()
	{
		return (this._persistent_volume_type !== undefined ? this._persistent_volume_type : null);
	}

	set persistent_volume_type(persistent_volume_type)
	{
		this._persistent_volume_type = persistent_volume_type;
	}

	/**
	 * Persistent volume container mount path.
	 */
	get persistent_volume_mount_path()
	{
		return (this._persistent_volume_mount_path !== undefined ? this._persistent_volume_mount_path : null);
	}

	set persistent_volume_mount_path(persistent_volume_mount_path)
	{
		this._persistent_volume_mount_path = persistent_volume_mount_path;
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
			"persistent_volume_name",
			"persistent_volume_type",
			"persistent_volume_mount_path"
		];
	}
};
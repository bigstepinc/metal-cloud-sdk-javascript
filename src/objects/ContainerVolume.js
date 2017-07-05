const ObjectBase = require('./ObjectBase');

/**
 * A ContainerVolume is a group of properties that describe a volume mounting
 * point for Docker containers.
 *
 * @class
 * @extends ObjectBase
 */
module.exports = 
class ContainerVolume extends ObjectBase
{
	constructor(container_path)
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

		if(container_path === undefined || container_path === null)
			throw new Error("Invalid param in ContainerVolume constructor.");

		this._container_path = container_path;
	}

	/**
	 * Container mount point.
	 */
	get container_path()
	{
		return this._container_path || null;
	}

	set container_path(container_path)
	{
		this._container_path = container_path;
	}

	/**
	 * FMDL Storage path.
	 */
	get host_path()
	{
		return this._host_path || "";
	}

	set host_path(host_path)
	{
		this._host_path = host_path;
	}

	/**
	 * The size of the persistent volume in MiBs
	 */
	get container_volume_size_mbytes()
	{
		return this._container_volume_size_mbytes || 0;
	}

	set container_volume_size_mbytes(container_volume_size_mbytes)
	{
		this._container_volume_size_mbytes = container_volume_size_mbytes;
	}

	/**
	 * Volume mount mode: readonly(RO) or readwrite(RW). Currently, RW is the only
	 * possible value for persistent volumes.
	 */
	get mode()
	{
		return this._mode || "RO";
	}

	set mode(mode)
	{
		this._mode = mode;
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
			"container_path"
		];
	}
};
const ObjectBase = require('./ObjectBase');

/**
 *
 *
 * @class
 * @extends ObjectBase
 */
module.exports = 
class ServerDisk extends ObjectBase
{
	constructor()
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
	}

	/**
	 * The type of physical disk.
	 */
	get server_disk_type()
	{
		return (this._server_disk_type !== undefined ? this._server_disk_type : null);
	}

	set server_disk_type(server_disk_type)
	{
		this._server_disk_type = server_disk_type;
	}

	/**
	 *
	 */
	get server_disk_size_gb()
	{
		return (this._server_disk_size_gb !== undefined ? this._server_disk_size_gb : null);
	}

	set server_disk_size_gb(server_disk_size_gb)
	{
		this._server_disk_size_gb = server_disk_size_gb;
	}

	/**
	 * The schema type
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

		];
	}
};
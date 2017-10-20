const ObjectBase = require('./ObjectBase');

/**
 * Contains details about the operating system of a Drive.
 *
 * @class
 * @extends ObjectBase
 */
module.exports = 
class OperatingSystem extends ObjectBase
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
	 * The operating system type. For example, Ubuntu or CentOS.
	 */
	get operating_system_type()
	{
		return this._operating_system_type || null;
	}

	set operating_system_type(operating_system_type)
	{
		this._operating_system_type = operating_system_type;
	}

	/**
	 * The version of the operating system.
	 */
	get operating_system_version()
	{
		return this._operating_system_version || null;
	}

	set operating_system_version(operating_system_version)
	{
		this._operating_system_version = operating_system_version;
	}

	/**
	 *
	 */
	get operating_system_architecture()
	{
		return this._operating_system_architecture || null;
	}

	set operating_system_architecture(operating_system_architecture)
	{
		this._operating_system_architecture = operating_system_architecture;
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

		];
	}
};
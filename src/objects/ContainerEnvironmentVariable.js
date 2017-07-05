const ObjectBase = require('./ObjectBase');

/**
 * A ContainerEnvironmentVariable is a key value pair that gets added to the
 * environment variables of the Container process to start.
 *
 * @class
 * @extends ObjectBase
 */
module.exports = 
class ContainerEnvironmentVariable extends ObjectBase
{
	constructor(key, value)
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
				throw new Error("Invalid params in ContainerEnvironmentVariable constructor.");
		}

		this._key = key;
		this._value = value;
	}

	/**
	 * The key name.
	 */
	get key()
	{
		return this._key || null;
	}

	set key(key)
	{
		this._key = key;
	}

	/**
	 * The value defined for the key.
	 */
	get value()
	{
		return this._value || null;
	}

	set value(value)
	{
		this._value = value;
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
			"key",
			"value"
		];
	}
};
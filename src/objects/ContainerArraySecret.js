const ObjectBase = require('./ObjectBase');

/**
 * ContainerArray sensitive data to be stored encrypted and made available to
 * the containers in plaintext.
 *
 * @class
 * @extends ObjectBase
 */
module.exports = 
class ContainerArraySecret extends ObjectBase
{
	constructor(secret_name, secret_data_base64)
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
				throw new Error("Invalid params in ContainerArraySecret constructor.");
		}

		this._secret_name = secret_name;
		this._secret_data_base64 = secret_data_base64;
	}

	/**
	 * Secret name.
	 */
	get secret_name()
	{
		return this._secret_name || null;
	}

	set secret_name(secret_name)
	{
		this._secret_name = secret_name;
	}

	/**
	 * Base64 encoded plaintext data.
	 */
	get secret_data_base64()
	{
		return this._secret_data_base64 || null;
	}

	set secret_data_base64(secret_data_base64)
	{
		this._secret_data_base64 = secret_data_base64;
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
			"secret_name",
			"secret_data_base64"
		];
	}
};
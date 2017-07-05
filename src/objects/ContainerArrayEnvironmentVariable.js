const ObjectBase = require('./ObjectBase');

/**
 * ContainerArray environment variable.
 *
 * @class
 * @extends ObjectBase
 */
module.exports = 
class ContainerArrayEnvironmentVariable extends ObjectBase
{
	constructor(environment_variable_name, environment_variable_value)
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
				throw new Error("Invalid params in ContainerArrayEnvironmentVariable constructor.");
		}

		this._environment_variable_name = environment_variable_name;
		this._environment_variable_value = environment_variable_value;
	}

	/**
	 * Environment variable name.
	 */
	get environment_variable_name()
	{
		return this._environment_variable_name || null;
	}

	set environment_variable_name(environment_variable_name)
	{
		this._environment_variable_name = environment_variable_name;
	}

	/**
	 * Environment variable value.
	 */
	get environment_variable_value()
	{
		return this._environment_variable_value || null;
	}

	set environment_variable_value(environment_variable_value)
	{
		this._environment_variable_value = environment_variable_value;
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
			"environment_variable_name",
			"environment_variable_value"
		];
	}
};
const ObjectBase = require('./ObjectBase');

/**
 * All the detailed costs for Drives, Instances and Subnets.
 *
 * @class
 * @extends ObjectBase
 */
module.exports = 
class ReportResourceUtilization extends ObjectBase
{
	constructor(drives, instances, subnets)
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
				throw new Error("Invalid params in ReportResourceUtilization constructor.");
		}

		this._drives = drives;
		this._instances = instances;
		this._subnets = subnets;
	}

	/**
	 *
	 */
	get drives()
	{
		return (this._drives !== undefined ? this._drives : null);
	}

	set drives(drives)
	{
		this._drives = drives;
	}

	/**
	 *
	 */
	get instances()
	{
		return (this._instances !== undefined ? this._instances : null);
	}

	set instances(instances)
	{
		this._instances = instances;
	}

	/**
	 *
	 */
	get subnets()
	{
		return (this._subnets !== undefined ? this._subnets : null);
	}

	set subnets(subnets)
	{
		this._subnets = subnets;
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
			"drives",
			"instances",
			"subnets"
		];
	}
};
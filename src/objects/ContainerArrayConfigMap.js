const ObjectBase = require('./ObjectBase');

/**
 * ContainerArray config map resource.
 *
 * @class
 * @extends ObjectBase
 */
module.exports = 
class ContainerArrayConfigMap extends ObjectBase
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
	 * ContainerArray config map values
	 */
	get config_map_data()
	{
		return (this._config_map_data !== undefined ? this._config_map_data : []);
	}

	set config_map_data(config_map_data)
	{
		this._config_map_data = config_map_data;
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

		];
	}
};
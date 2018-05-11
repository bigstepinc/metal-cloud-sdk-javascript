const ObjectBase = require('./ObjectBase');

/**
 * Information needed to connect to the Container.
 *
 * @class
 * @extends ObjectBase
 */
module.exports = 
class ContainerCredentials extends ObjectBase
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
	 * Information needed to connect to the container via RemoteConsole
	 */
	get remote_console()
	{
		return this._remote_console || null;
	}

	set remote_console(remote_console)
	{
		this._remote_console = remote_console;
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
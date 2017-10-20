const ObjectBase = require('./ObjectBase');

/**
 * A ContainerArrayState contains the state of the ContainerArray.
 *
 * @class
 * @extends ObjectBase
 */
module.exports = 
class ContainerArrayState extends ObjectBase
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
	 * The number of running containers.
	 */
	get state_containers_running()
	{
		return this._state_containers_running || null;
	}

	set state_containers_running(state_containers_running)
	{
		this._state_containers_running = state_containers_running;
	}

	/**
	 * The number of running containers that passed the readiness check.
	 */
	get state_containers_ready()
	{
		return this._state_containers_ready || null;
	}

	set state_containers_ready(state_containers_ready)
	{
		this._state_containers_ready = state_containers_ready;
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

		];
	}
};
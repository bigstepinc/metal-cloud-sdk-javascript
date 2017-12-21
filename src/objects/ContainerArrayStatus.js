const ObjectBase = require('./ObjectBase');

/**
 * A ContainerArrayStatus contains the status of the ContainerArray.
 *
 * @class
 * @extends ObjectBase
 */
module.exports = 
class ContainerArrayStatus extends ObjectBase
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
	get status_containers_running()
	{
		return this._status_containers_running || null;
	}

	set status_containers_running(status_containers_running)
	{
		this._status_containers_running = status_containers_running;
	}

	/**
	 * The number of running containers that passed the readiness check.
	 */
	get status_containers_ready()
	{
		return this._status_containers_ready || null;
	}

	set status_containers_ready(status_containers_ready)
	{
		this._status_containers_ready = status_containers_ready;
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
const ObjectBase = require('./ObjectBase');

/**
 * ContainerArray action that uses tests the state of TCP sockets to asses the
 * readiness or liveness of the Containers.
 *
 * @class
 * @extends ObjectBase
 */
module.exports = 
class ContainerArrayActionTCPSocket extends ObjectBase
{
	constructor(action_port)
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

		if(action_port === undefined || action_port === null)
			throw new Error("Invalid param in ContainerArrayActionTCPSocket constructor.");

		this._action_port = action_port;
	}

	/**
	 * Port to access on the Container.
	 */
	get action_port()
	{
		return (this._action_port !== undefined ? this._action_port : null);
	}

	set action_port(action_port)
	{
		this._action_port = action_port;
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
			"action_port"
		];
	}
};
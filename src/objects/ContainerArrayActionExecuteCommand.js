const ObjectBase = require('./ObjectBase');

/**
 * ContainerArray action that executes a command on the Containers to asses
 * their readiness or liveness.
 *
 * @class
 * @extends ObjectBase
 */
module.exports = 
class ContainerArrayActionExecuteCommand extends ObjectBase
{
	constructor(action_command)
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

		if(action_command === undefined || action_command === null)
			throw new Error("Invalid param in ContainerArrayActionExecuteCommand constructor.");

		this._action_command = action_command;
	}

	/**
	 * Command to execute on the Containers. The command is not executed using a
	 * shell and the root of each Container (/) is used as working directory. An
	 * exit status of 0 is treated as healthy and non-zero as unhealthy
	 */
	get action_command()
	{
		return (this._action_command !== undefined ? this._action_command : []);
	}

	set action_command(action_command)
	{
		this._action_command = action_command;
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
			"action_command"
		];
	}
};
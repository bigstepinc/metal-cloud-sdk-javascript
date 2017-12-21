const ObjectBase = require('./ObjectBase');

/**
 * Contains information about how access permissions propagate to new servers.
 *
 * @class
 * @extends ObjectBase
 */
module.exports = 
class InfrastructurePermissions extends ObjectBase
{
	constructor(infrastructure_user_allow_ssh_keys)
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

		if(infrastructure_user_allow_ssh_keys === undefined || infrastructure_user_allow_ssh_keys === null)
			throw new Error("Invalid param in InfrastructurePermissions constructor.");

		this._infrastructure_user_allow_ssh_keys = infrastructure_user_allow_ssh_keys;
	}

	/**
	 *  If true, the user's SSH keys are added automatically to newly created
	 * Drives that use an existing public Linux template. Only owners or owner
	 * delegates can affect this setting.
	 */
	get infrastructure_user_allow_ssh_keys()
	{
		return this._infrastructure_user_allow_ssh_keys || null;
	}

	set infrastructure_user_allow_ssh_keys(infrastructure_user_allow_ssh_keys)
	{
		this._infrastructure_user_allow_ssh_keys = infrastructure_user_allow_ssh_keys;
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
			"infrastructure_user_allow_ssh_keys"
		];
	}
};
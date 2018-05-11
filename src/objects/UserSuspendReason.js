const ObjectBase = require('./ObjectBase');

/**
 * A group of InstanceArray and DriveArray infrastructure elements
 * preconfigured for specific workloads or roles. Software (SaaS) is
 * automatically installed for new instances. The preinstalled software is
 * informed when instances are made available or removed.
 *
 * @class
 * @extends ObjectBase
 */
module.exports = 
class UserSuspendReason extends ObjectBase
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
	 *
	 */
	get user_suspend_reason_id()
	{
		return this._user_suspend_reason_id || null;
	}

	set user_suspend_reason_id(user_suspend_reason_id)
	{
		this._user_suspend_reason_id = user_suspend_reason_id;
	}

	/**
	 *
	 */
	get user_id()
	{
		return this._user_id || null;
	}

	set user_id(user_id)
	{
		this._user_id = user_id;
	}

	/**
	 *
	 */
	get user_suspend_reason_public_comment()
	{
		return this._user_suspend_reason_public_comment || null;
	}

	set user_suspend_reason_public_comment(user_suspend_reason_public_comment)
	{
		this._user_suspend_reason_public_comment = user_suspend_reason_public_comment;
	}

	/**
	 * ISO 8601 timestamp which holds the date and time when the user suspend
	 * reason was added.
	 */
	get user_suspend_reason_created_timestamp()
	{
		return this._user_suspend_reason_created_timestamp || null;
	}

	set user_suspend_reason_created_timestamp(user_suspend_reason_created_timestamp)
	{
		this._user_suspend_reason_created_timestamp = user_suspend_reason_created_timestamp;
	}

	/**
	 * ISO 8601 timestamp which holds the date and time when the user suspend
	 * reason was ended.
	 */
	get user_suspend_reason_end_timestamp()
	{
		return this._user_suspend_reason_end_timestamp || null;
	}

	set user_suspend_reason_end_timestamp(user_suspend_reason_end_timestamp)
	{
		this._user_suspend_reason_end_timestamp = user_suspend_reason_end_timestamp;
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
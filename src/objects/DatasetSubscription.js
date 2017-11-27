const ObjectBase = require('./ObjectBase');

/**
 * A subscription to a Dataset.
 *
 * @class
 * @extends ObjectBase
 */
module.exports = 
class DatasetSubscription extends ObjectBase
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
	 * The Dataset for which the subscription was created.
	 */
	get dataset()
	{
		return this._dataset || null;
	}

	set dataset(dataset)
	{
		this._dataset = dataset;
	}

	/**
	 * The ID of the user that owns the dataset subscription.
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
	 * The ID of the dataset subscription.
	 */
	get dataset_subscription_id()
	{
		return this._dataset_subscription_id || null;
	}

	set dataset_subscription_id(dataset_subscription_id)
	{
		this._dataset_subscription_id = dataset_subscription_id;
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
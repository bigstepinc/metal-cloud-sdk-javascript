const ObjectBase = require('./ObjectBase');

/**
 * Details about the Instance object specific to Exasol.
 *
 * @class
 * @extends ObjectBase
 */
module.exports = 
class AppExasolInstance extends ObjectBase
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
	 * The initial admin username on the interface of the cluter.
	 */
	get admin_username()
	{
		return this._admin_username || null;
	}

	set admin_username(admin_username)
	{
		this._admin_username = admin_username;
	}

	/**
	 * The initial admin password on the interface of the cluster.
	 */
	get admin_initial_password()
	{
		return this._admin_initial_password || null;
	}

	set admin_initial_password(admin_initial_password)
	{
		this._admin_initial_password = admin_initial_password;
	}

	/**
	 * The IP for the interface of the cluster.
	 */
	get exaoperation_ip()
	{
		return this._exaoperation_ip || null;
	}

	set exaoperation_ip(exaoperation_ip)
	{
		this._exaoperation_ip = exaoperation_ip;
	}

	/**
	 * The ID of the instance associated with the node.
	 */
	get instance_id()
	{
		return this._instance_id || null;
	}

	set instance_id(instance_id)
	{
		this._instance_id = instance_id;
	}

	/**
	 * The label of the instance associated with the node.
	 */
	get instance_label()
	{
		return this._instance_label || null;
	}

	set instance_label(instance_label)
	{
		this._instance_label = instance_label;
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
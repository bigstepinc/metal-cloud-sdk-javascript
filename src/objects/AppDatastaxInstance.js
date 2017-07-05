const ObjectBase = require('./ObjectBase');

/**
 * Details about the Instance object specific to Datastax.
 *
 * @class
 * @extends ObjectBase
 */
module.exports = 
class AppDatastaxInstance extends ObjectBase
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
	 * The initial admin username on the opscenter interface of the cluster.
	 */
	get opscenter_username()
	{
		return this._opscenter_username || null;
	}

	set opscenter_username(opscenter_username)
	{
		this._opscenter_username = opscenter_username;
	}

	/**
	 * The initial admin password on the opscenter interface of the cluster.
	 */
	get opscenter_initial_password()
	{
		return this._opscenter_initial_password || null;
	}

	set opscenter_initial_password(opscenter_initial_password)
	{
		this._opscenter_initial_password = opscenter_initial_password;
	}

	/**
	 * The IP for the opscenter interface of the cluster.
	 */
	get opscenter_ip()
	{
		return this._opscenter_ip || null;
	}

	set opscenter_ip(opscenter_ip)
	{
		this._opscenter_ip = opscenter_ip;
	}

	/**
	 * The URL for the RPC of the node.
	 */
	get rpc_url()
	{
		return this._rpc_url || null;
	}

	set rpc_url(rpc_url)
	{
		this._rpc_url = rpc_url;
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
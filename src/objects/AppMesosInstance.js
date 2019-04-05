const ObjectBase = require('./ObjectBase');

/**
 * Details about the Instance object specific to Mesos.
 *
 * @class
 * @extends ObjectBase
 */
module.exports = 
class AppMesosInstance extends ObjectBase
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
	 * The initial admin username for the Mesos interface of the cluster.
	 */
	get admin_username()
	{
		return (this._admin_username !== undefined ? this._admin_username : null);
	}

	set admin_username(admin_username)
	{
		this._admin_username = admin_username;
	}

	/**
	 * The initial admin password for the Mesos interface of the cluster.
	 */
	get admin_initial_password()
	{
		return (this._admin_initial_password !== undefined ? this._admin_initial_password : null);
	}

	set admin_initial_password(admin_initial_password)
	{
		this._admin_initial_password = admin_initial_password;
	}

	/**
	 * The IP of the Mesos interface of the cluster.
	 */
	get mesos_ip()
	{
		return (this._mesos_ip !== undefined ? this._mesos_ip : null);
	}

	set mesos_ip(mesos_ip)
	{
		this._mesos_ip = mesos_ip;
	}

	/**
	 * The Mesos version installed on the cluster.
	 */
	get mesos_version()
	{
		return (this._mesos_version !== undefined ? this._mesos_version : null);
	}

	set mesos_version(mesos_version)
	{
		this._mesos_version = mesos_version;
	}

	/**
	 * The IP of the Marathon interface of the cluster.
	 */
	get marathon_ip()
	{
		return (this._marathon_ip !== undefined ? this._marathon_ip : null);
	}

	set marathon_ip(marathon_ip)
	{
		this._marathon_ip = marathon_ip;
	}

	/**
	 * The Marathon version installed on the cluster.
	 */
	get marathon_version()
	{
		return (this._marathon_version !== undefined ? this._marathon_version : null);
	}

	set marathon_version(marathon_version)
	{
		this._marathon_version = marathon_version;
	}

	/**
	 * The ID of the instance associated with the node.
	 */
	get instance_id()
	{
		return (this._instance_id !== undefined ? this._instance_id : null);
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
		return (this._instance_label !== undefined ? this._instance_label : null);
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

		];
	}
};
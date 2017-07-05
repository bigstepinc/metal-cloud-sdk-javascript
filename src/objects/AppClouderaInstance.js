const ObjectBase = require('./ObjectBase');

/**
 * Details about the Instance object specific to Cloudera. The information
 * presented here is obtained by interrogating the Cloudera API. Backward
 * compatibility object will not be ensured when the underlying Cloudera API changes.
 *
 * @class
 * @extends ObjectBase
 */
module.exports = 
class AppClouderaInstance extends ObjectBase
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
	 * The name of the role. Optional when creating a role. If not specified, a
	 * name will be automatically generated for the role.
	 */
	get name()
	{
		return this._name || null;
	}

	set name(name)
	{
		this._name = name;
	}

	/**
	 *  The commission state of this role.
	 */
	get commissionState()
	{
		return this._commissionState || null;
	}

	set commissionState(commissionState)
	{
		this._commissionState = commissionState;
	}

	/**
	 * The high-level health status of this role.
	 */
	get healthSummary()
	{
		return this._healthSummary || null;
	}

	set healthSummary(healthSummary)
	{
		this._healthSummary = healthSummary;
	}

	/**
	 * Link into the Cloudera Manager web UI for this specific role.
	 */
	get roleUrl()
	{
		return this._roleUrl || null;
	}

	set roleUrl(roleUrl)
	{
		this._roleUrl = roleUrl;
	}

	/**
	 * The host IP address.
	 */
	get ipAddress()
	{
		return this._ipAddress || null;
	}

	set ipAddress(ipAddress)
	{
		this._ipAddress = ipAddress;
	}

	/**
	 * The amount of physical RAM on this host, in bytes.
	 */
	get totalPhysMemBytes()
	{
		return this._totalPhysMemBytes || null;
	}

	set totalPhysMemBytes(totalPhysMemBytes)
	{
		this._totalPhysMemBytes = totalPhysMemBytes;
	}

	/**
	 * The ID of the Instance associated with the node
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
	 * The label of the Instance associated with the node
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
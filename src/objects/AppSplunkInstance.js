const ObjectBase = require('./ObjectBase');

/**
 * Details about the Instance object specific to Splunk. The infromation
 * presented here is obtained by interrogating the Splunk API. Backward
 * compatibility object will not be ensured when the underlying Splunk API changes.
 *
 * @class
 * @extends ObjectBase
 */
module.exports = 
class AppSplunkInstance extends ObjectBase
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
	 * The initial admin username on the instance.
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
	 * The initial admin password on the instance.
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
	 * The admin interface URL.
	 */
	get url()
	{
		return this._url || null;
	}

	set url(url)
	{
		this._url = url;
	}

	/**
	 * Percentage of time CPU is running in system mode and user mode.
	 */
	get cpu_total_pct()
	{
		return this._cpu_total_pct || null;
	}

	set cpu_total_pct(cpu_total_pct)
	{
		this._cpu_total_pct = cpu_total_pct;
	}

	/**
	 * Total physical memory available.
	 */
	get mem_total_gb()
	{
		return this._mem_total_gb || null;
	}

	set mem_total_gb(mem_total_gb)
	{
		this._mem_total_gb = mem_total_gb;
	}

	/**
	 * Percentage of used physical memory.
	 */
	get mem_used_pct()
	{
		return this._mem_used_pct || null;
	}

	set mem_used_pct(mem_used_pct)
	{
		this._mem_used_pct = mem_used_pct;
	}

	/**
	 * Globally unique identifier for this server.
	 */
	get guid()
	{
		return this._guid || null;
	}

	set guid(guid)
	{
		this._guid = guid;
	}

	/**
	 * Type of Splunk Enterprise license. Can be one of: "Enterprise", "Forwarder",
	 * "Free", "Invalid", "Trial". After installation the license type is "Trial".
	 */
	get activeLicenseGroup()
	{
		return this._activeLicenseGroup || null;
	}

	set activeLicenseGroup(activeLicenseGroup)
	{
		this._activeLicenseGroup = activeLicenseGroup;
	}

	/**
	 * All the active keys for the current license.
	 */
	get licenseKeys()
	{
		return this._licenseKeys || null;
	}

	set licenseKeys(licenseKeys)
	{
		this._licenseKeys = licenseKeys;
	}

	/**
	 * Specifies the status of the license, which can be either "OK" or "Expired".
	 */
	get licenseState()
	{
		return this._licenseState || null;
	}

	set licenseState(licenseState)
	{
		this._licenseState = licenseState;
	}

	/**
	 * Software version number.
	 */
	get version()
	{
		return this._version || null;
	}

	set version(version)
	{
		this._version = version;
	}

	/**
	 * The total size of logs that can be indexed in one day using the current
	 * license.
	 */
	get license_quota_gb()
	{
		return this._license_quota_gb || null;
	}

	set license_quota_gb(license_quota_gb)
	{
		this._license_quota_gb = license_quota_gb;
	}

	/**
	 * The percentage of the total size of logs which was used .
	 */
	get license_used_pct()
	{
		return this._license_used_pct || null;
	}

	set license_used_pct(license_used_pct)
	{
		this._license_used_pct = license_used_pct;
	}

	/**
	 * Total disk capacity. It might take a while until the property is populated.
	 */
	get storage_capacity_gb()
	{
		return this._storage_capacity_gb || null;
	}

	set storage_capacity_gb(storage_capacity_gb)
	{
		this._storage_capacity_gb = storage_capacity_gb;
	}

	/**
	 * Percentage of used disk capacity. It might take a while until the property
	 * is populated.
	 */
	get storage_used_pct()
	{
		return this._storage_used_pct || null;
	}

	set storage_used_pct(storage_used_pct)
	{
		this._storage_used_pct = storage_used_pct;
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
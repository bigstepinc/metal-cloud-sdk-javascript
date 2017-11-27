const ObjectBase = require('./ObjectBase');

/**
 * InfrastructureOperation contains information regarding the changes that are
 * to be made to a product. Edit and deploy functions have to be called in
 * order to apply the changes. The operation type and status are unique to each
 * operation object.
 *
 * @class
 * @extends ObjectBase
 */
module.exports = 
class InfrastructureOperation extends ObjectBase
{
	constructor(infrastructure_label)
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

		if(infrastructure_label === undefined || infrastructure_label === null)
			throw new Error("Invalid param in InfrastructureOperation constructor.");

		this._infrastructure_label = infrastructure_label;
	}

	/**
	 * The status of the deploy process.
	 */
	get infrastructure_deploy_status()
	{
		return this._infrastructure_deploy_status || null;
	}

	set infrastructure_deploy_status(infrastructure_deploy_status)
	{
		this._infrastructure_deploy_status = infrastructure_deploy_status;
	}

	/**
	 * The operation applied to the infrastructure.
	 */
	get infrastructure_deploy_type()
	{
		return this._infrastructure_deploy_type || null;
	}

	set infrastructure_deploy_type(infrastructure_deploy_type)
	{
		this._infrastructure_deploy_type = infrastructure_deploy_type;
	}

	/**
	 * The infrastructure's unique subdomain label is used to create the
	 * infrastructure_subdomain. Can be used to call API functions.
	 */
	get infrastructure_label()
	{
		return this._infrastructure_label || null;
	}

	set infrastructure_label(infrastructure_label)
	{
		this._infrastructure_label = infrastructure_label;
	}

	/**
	 * Automatically created based on infrastructure_label. It is a unique
	 * reference to the Infrastructure object.
	 */
	get infrastructure_subdomain()
	{
		return this._infrastructure_subdomain || null;
	}

	set infrastructure_subdomain(infrastructure_subdomain)
	{
		this._infrastructure_subdomain = infrastructure_subdomain;
	}

	/**
	 * If null, this property will default to the first array element returned by
	 * datacenters(). It is read-only for infrastructures with
	 * infrastructure_service_status = SERVICE_STATUS_ACTIVE.
	 */
	get datacenter_name()
	{
		return this._datacenter_name || null;
	}

	set datacenter_name(datacenter_name)
	{
		this._datacenter_name = datacenter_name;
	}

	/**
	 * The ID of the infrastructure which can be used instead of the
	 * infrastructure_label when calling the API functions.
	 */
	get infrastructure_id()
	{
		return this._infrastructure_id || null;
	}

	set infrastructure_id(infrastructure_id)
	{
		this._infrastructure_id = infrastructure_id;
	}

	/**
	 * The owner's user ID.
	 */
	get user_id_owner()
	{
		return this._user_id_owner || null;
	}

	set user_id_owner(user_id_owner)
	{
		this._user_id_owner = user_id_owner;
	}

	/**
	 * ISO 8601 timestamp which holds the date and time when the infrastructure was
	 * edited. Example format: 2013-11-29T13:00:01Z.
	 */
	get infrastructure_updated_timestamp()
	{
		return this._infrastructure_updated_timestamp || null;
	}

	set infrastructure_updated_timestamp(infrastructure_updated_timestamp)
	{
		this._infrastructure_updated_timestamp = infrastructure_updated_timestamp;
	}

	/**
	 * Reserved for GUI users.
	 */
	get infrastructure_gui_settings_json()
	{
		return this._infrastructure_gui_settings_json || null;
	}

	set infrastructure_gui_settings_json(infrastructure_gui_settings_json)
	{
		this._infrastructure_gui_settings_json = infrastructure_gui_settings_json;
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
	 * If the operation is ongoing, it uniquely identifies the current deploy
	 * operation. If the operation is finished, it uniquely identifies the deploy
	 * operation of the entire infrastructure, at the time of this change.
	 */
	get infrastructure_deploy_id()
	{
		return this._infrastructure_deploy_id || null;
	}

	set infrastructure_deploy_id(infrastructure_deploy_id)
	{
		this._infrastructure_deploy_id = infrastructure_deploy_id;
	}

	/**
	 * This property helps ensure that edit operations don’t overwrite other,
	 * more recent changes made to the same object. It gets updated automatically
	 * after each successful edit operation.
	 */
	get infrastructure_change_id()
	{
		return this._infrastructure_change_id || null;
	}

	set infrastructure_change_id(infrastructure_change_id)
	{
		this._infrastructure_change_id = infrastructure_change_id;
	}

	/**
	 * Notifies the Sales team about additional customer private datacenter needs.
	 */
	get infrastructure_private_datacenters_json()
	{
		return this._infrastructure_private_datacenters_json || null;
	}

	set infrastructure_private_datacenters_json(infrastructure_private_datacenters_json)
	{
		this._infrastructure_private_datacenters_json = infrastructure_private_datacenters_json;
	}

	/**
	 * The subnet pool used on this infrastructure to allocate private IPs
	 */
	get subnet_pool_lan()
	{
		return this._subnet_pool_lan || null;
	}

	set subnet_pool_lan(subnet_pool_lan)
	{
		this._subnet_pool_lan = subnet_pool_lan;
	}

	/**
	 * Contains the blacklisted LAN IP ranges on the infrastructure.
	 */
	get infrastructure_blacklisted_lan_ip_ranges()
	{
		return this._infrastructure_blacklisted_lan_ip_ranges || [];
	}

	set infrastructure_blacklisted_lan_ip_ranges(infrastructure_blacklisted_lan_ip_ranges)
	{
		this._infrastructure_blacklisted_lan_ip_ranges = infrastructure_blacklisted_lan_ip_ranges;
	}

	/**
	 * The required JSON fields for deserialization.
	 *
	 * @returns {Array}
	 */
	static get JSONRequired()
	{
		return [
			"infrastructure_label"
		];
	}
};
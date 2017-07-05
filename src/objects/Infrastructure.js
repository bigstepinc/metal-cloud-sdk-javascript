const ObjectBase = require('./ObjectBase');

/**
 * An infrastructure is the parent object for InstanceArrays, Instances,
 * Clusters, Networks, Subnets, DriveArrays, Drives and DataLakes and their relationships.
 *
 * @class
 * @extends ObjectBase
 */
module.exports = 
class Infrastructure extends ObjectBase
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
	 * The infrastructure's unique label is used to create the
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
	 * Read-only for infrastructures with infrastructure_service_status =
	 * SERVICE_STATUS_ACTIVE. Use datacenters() to obtain a list of possible values.
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
	 * The owner's email.
	 */
	get user_email_owner()
	{
		return this._user_email_owner || null;
	}

	set user_email_owner(user_email_owner)
	{
		this._user_email_owner = user_email_owner;
	}

	/**
	 * Reserved for GUIs.
	 */
	get infrastructure_touch_unixtime()
	{
		return this._infrastructure_touch_unixtime || null;
	}

	set infrastructure_touch_unixtime(infrastructure_touch_unixtime)
	{
		this._infrastructure_touch_unixtime = infrastructure_touch_unixtime;
	}

	/**
	 * The status of the infrastructure.
	 */
	get infrastructure_service_status()
	{
		return this._infrastructure_service_status || null;
	}

	set infrastructure_service_status(infrastructure_service_status)
	{
		this._infrastructure_service_status = infrastructure_service_status;
	}

	/**
	 * The operation type, operation status and modified Infrastructure object.
	 */
	get infrastructure_operation()
	{
		return this._infrastructure_operation || null;
	}

	set infrastructure_operation(infrastructure_operation)
	{
		this._infrastructure_operation = infrastructure_operation;
	}

	/**
	 * ISO 8601 timestamp which holds the date and time when the infrastructure was
	 * created. Example format: 2013-11-29T13:00:01Z.
	 */
	get infrastructure_created_timestamp()
	{
		return this._infrastructure_created_timestamp || "0000-00-00T00:00:00Z";
	}

	set infrastructure_created_timestamp(infrastructure_created_timestamp)
	{
		this._infrastructure_created_timestamp = infrastructure_created_timestamp;
	}

	/**
	 * ISO 8601 timestamp which holds the date and time when the infrastructure was
	 * edited. Example format: 2013-11-29T13:00:01Z.
	 */
	get infrastructure_updated_timestamp()
	{
		return this._infrastructure_updated_timestamp || "0000-00-00T00:00:00Z";
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
		return this._infrastructure_gui_settings_json || "";
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
	 * The deploy which resulted in the currently provisioned state.
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
	 * This property is used to prevent edits, reverts and deploys on the
	 * infrastructure.
	 */
	get infrastructure_design_is_locked()
	{
		return this._infrastructure_design_is_locked || false;
	}

	set infrastructure_design_is_locked(infrastructure_design_is_locked)
	{
		this._infrastructure_design_is_locked = infrastructure_design_is_locked;
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
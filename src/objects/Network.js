const ObjectBase = require('./ObjectBase');

/**
 * A Network object contains information regarding a network, including type,
 * parent Infrastructure and creation time.
 *
 * @class
 * @extends ObjectBase
 */
module.exports = 
class Network extends ObjectBase
{
	constructor(network_type)
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

		if(network_type === undefined || network_type === null)
			throw new Error("Invalid param in Network constructor.");

		this._network_type = network_type;
	}

	/**
	 * The network's label which is unique and it is used to form the
	 * network_subdomain. Can be used to call API functions.
	 */
	get network_label()
	{
		return this._network_label || null;
	}

	set network_label(network_label)
	{
		this._network_label = network_label;
	}

	/**
	 * Automatically created based on network_label. It is a unique reference to
	 * the Network object.
	 */
	get network_subdomain()
	{
		return this._network_subdomain || null;
	}

	set network_subdomain(network_subdomain)
	{
		this._network_subdomain = network_subdomain;
	}

	/**
	 * Represents the ID of the network which can be used instead of the
	 * network_label or network_subdomain when calling the API functions.  It is
	 * automatically generated and cannot be edited.
	 */
	get network_id()
	{
		return this._network_id || null;
	}

	set network_id(network_id)
	{
		this._network_id = network_id;
	}

	/**
	 * The network type.
	 */
	get network_type()
	{
		return this._network_type || null;
	}

	set network_type(network_type)
	{
		this._network_type = network_type;
	}

	/**
	 * Represents the infrastructure ID to which the network belongs.
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
	 * It shows the status of the network.
	 */
	get network_service_status()
	{
		return this._network_service_status || null;
	}

	set network_service_status(network_service_status)
	{
		this._network_service_status = network_service_status;
	}

	/**
	 * The operation type, operation status and modified Network object.
	 */
	get network_operation()
	{
		return this._network_operation || null;
	}

	set network_operation(network_operation)
	{
		this._network_operation = network_operation;
	}

	/**
	 * ISO 8601 timestamp which holds the date and time when the network was
	 * created. Example format: 2013-11-29T13:00:01Z.
	 */
	get network_created_timestamp()
	{
		return this._network_created_timestamp || "0000-00-00T00:00:00Z";
	}

	set network_created_timestamp(network_created_timestamp)
	{
		this._network_created_timestamp = network_created_timestamp;
	}

	/**
	 * ISO 8601 timestamp which holds the date and time when the network was
	 * edited. Example format: 2013-11-29T13:00:01Z.
	 */
	get network_updated_timestamp()
	{
		return this._network_updated_timestamp || "0000-00-00T00:00:00Z";
	}

	set network_updated_timestamp(network_updated_timestamp)
	{
		this._network_updated_timestamp = network_updated_timestamp;
	}

	/**
	 * Reserved for GUI users.
	 */
	get network_gui_settings_json()
	{
		return this._network_gui_settings_json || "";
	}

	set network_gui_settings_json(network_gui_settings_json)
	{
		this._network_gui_settings_json = network_gui_settings_json;
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
	get network_change_id()
	{
		return this._network_change_id || null;
	}

	set network_change_id(network_change_id)
	{
		this._network_change_id = network_change_id;
	}

	/**
	 * The network suspend status.
	 */
	get network_suspend_status()
	{
		return this._network_suspend_status || null;
	}

	set network_suspend_status(network_suspend_status)
	{
		this._network_suspend_status = network_suspend_status;
	}

	/**
	 * The required JSON fields for deserialization.
	 *
	 * @returns {Array}
	 */
	static get JSONRequired()
	{
		return [
			"network_type"
		];
	}
};
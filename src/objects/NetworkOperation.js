const ObjectBase = require('./ObjectBase');

/**
 * NetworkOperation contains information regarding the changes that are to be
 * made to a product. Edit and deploy functions have to be called in order to
 * apply the changes. The operation type and status are unique to each
 * operation object.
 *
 * @class
 * @extends ObjectBase
 */
module.exports = 
class NetworkOperation extends ObjectBase
{
	constructor(network_label, network_change_id)
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

		for(let index = 0; index < 2; index++)
		{
			let arg = arguments[index];

			if(arg === undefined || arg === null)
				throw new Error("Invalid params in NetworkOperation constructor.");
		}

		this._network_label = network_label;
		this._network_change_id = network_change_id;
	}

	/**
	 * The status of the deploy process.
	 */
	get network_deploy_status()
	{
		return (this._network_deploy_status !== undefined ? this._network_deploy_status : null);
	}

	set network_deploy_status(network_deploy_status)
	{
		this._network_deploy_status = network_deploy_status;
	}

	/**
	 * The operation applied to the network.
	 */
	get network_deploy_type()
	{
		return (this._network_deploy_type !== undefined ? this._network_deploy_type : null);
	}

	set network_deploy_type(network_deploy_type)
	{
		this._network_deploy_type = network_deploy_type;
	}

	/**
	 * The network's label which is unique and it is used to form the
	 * network_subdomain. Can be used to call API functions.
	 */
	get network_label()
	{
		return (this._network_label !== undefined ? this._network_label : null);
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
		return (this._network_subdomain !== undefined ? this._network_subdomain : null);
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
		return (this._network_id !== undefined ? this._network_id : null);
	}

	set network_id(network_id)
	{
		this._network_id = network_id;
	}

	/**
	 * ISO 8601 timestamp which holds the date and time when the network was
	 * edited. Example format: 2013-11-29T13:00:01Z.
	 */
	get network_updated_timestamp()
	{
		return (this._network_updated_timestamp !== undefined ? this._network_updated_timestamp : null);
	}

	set network_updated_timestamp(network_updated_timestamp)
	{
		this._network_updated_timestamp = network_updated_timestamp;
	}

	/**
	 * The network type.
	 */
	get network_type()
	{
		return (this._network_type !== undefined ? this._network_type : null);
	}

	set network_type(network_type)
	{
		this._network_type = network_type;
	}

	/**
	 * Reserved for GUI users.
	 */
	get network_gui_settings_json()
	{
		return (this._network_gui_settings_json !== undefined ? this._network_gui_settings_json : "");
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
		return (this._type !== undefined ? this._type : null);
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
		return (this._network_change_id !== undefined ? this._network_change_id : null);
	}

	set network_change_id(network_change_id)
	{
		this._network_change_id = network_change_id;
	}

	/**
	 * This property specify whether the allocation of the private IPS is done
	 * automatically or manually.
	 */
	get network_lan_autoallocate_ips()
	{
		return (this._network_lan_autoallocate_ips !== undefined ? this._network_lan_autoallocate_ips : false);
	}

	set network_lan_autoallocate_ips(network_lan_autoallocate_ips)
	{
		this._network_lan_autoallocate_ips = network_lan_autoallocate_ips;
	}

	/**
	 * The required JSON fields for deserialization.
	 *
	 * @returns {Array}
	 */
	static get JSONRequired()
	{
		return [
			"network_label",
			"network_change_id"
		];
	}
};
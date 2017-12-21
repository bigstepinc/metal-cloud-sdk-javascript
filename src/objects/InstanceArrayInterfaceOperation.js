const ObjectBase = require('./ObjectBase');

/**
 * InstanceArrayInterfaceOperation contains information regarding the changes
 * that are to be made to a product. Edit and deploy functions have to be
 * called in order to apply the changes. The operation type and status are
 * unique to each operation object.
 *
 * @class
 * @extends ObjectBase
 */
module.exports = 
class InstanceArrayInterfaceOperation extends ObjectBase
{
	constructor(instance_array_interface_id, instance_array_interface_change_id)
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
				throw new Error("Invalid params in InstanceArrayInterfaceOperation constructor.");
		}

		this._instance_array_interface_id = instance_array_interface_id;
		this._instance_array_interface_change_id = instance_array_interface_change_id;
	}

	/**
	 * The instance_array_interface's label which is unique and it is used to form
	 * the instance_array_interface_subdomain. Can be used to call API functions.
	 */
	get instance_array_interface_label()
	{
		return this._instance_array_interface_label || null;
	}

	set instance_array_interface_label(instance_array_interface_label)
	{
		this._instance_array_interface_label = instance_array_interface_label;
	}

	/**
	 * Automatically created based on instance_array_interface_label. It is a
	 * unique reference to the InstanceArrayInterface object.
	 */
	get instance_array_interface_subdomain()
	{
		return this._instance_array_interface_subdomain || null;
	}

	set instance_array_interface_subdomain(instance_array_interface_subdomain)
	{
		this._instance_array_interface_subdomain = instance_array_interface_subdomain;
	}

	/**
	 * The status of the deploy process.
	 */
	get instance_array_interface_deploy_status()
	{
		return this._instance_array_interface_deploy_status || null;
	}

	set instance_array_interface_deploy_status(instance_array_interface_deploy_status)
	{
		this._instance_array_interface_deploy_status = instance_array_interface_deploy_status;
	}

	/**
	 * The operation applied to InstanceArray interface.
	 */
	get instance_array_interface_deploy_type()
	{
		return this._instance_array_interface_deploy_type || null;
	}

	set instance_array_interface_deploy_type(instance_array_interface_deploy_type)
	{
		this._instance_array_interface_deploy_type = instance_array_interface_deploy_type;
	}

	/**
	 * The ID of the InstanceArray interface.
	 */
	get instance_array_interface_id()
	{
		return this._instance_array_interface_id || null;
	}

	set instance_array_interface_id(instance_array_interface_id)
	{
		this._instance_array_interface_id = instance_array_interface_id;
	}

	/**
	 * The ID of the InstanceArray that the interface belongs to.
	 */
	get instance_array_id()
	{
		return this._instance_array_id || null;
	}

	set instance_array_id(instance_array_id)
	{
		this._instance_array_id = instance_array_id;
	}

	/**
	 * The ID of the network to which the InstanceArray interface is attached.
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
	 * Array of interface indexes which are part of a link aggregation together
	 * with this interface. The current interface is never included in this array,
	 * even if part of a link aggregation.
	 */
	get instance_array_interface_lagg_indexes()
	{
		return this._instance_array_interface_lagg_indexes || [];
	}

	set instance_array_interface_lagg_indexes(instance_array_interface_lagg_indexes)
	{
		this._instance_array_interface_lagg_indexes = instance_array_interface_lagg_indexes;
	}

	/**
	 * ISO 8601 timestamp which holds the date and time when the InstanceArray
	 * interface was edited. Example format: 2013-11-29T13:00:01Z.
	 */
	get instance_array_interface_updated_timestamp()
	{
		return this._instance_array_interface_updated_timestamp || null;
	}

	set instance_array_interface_updated_timestamp(instance_array_interface_updated_timestamp)
	{
		this._instance_array_interface_updated_timestamp = instance_array_interface_updated_timestamp;
	}

	/**
	 * Shows the index of the interface. Numbering starts at 0.
	 */
	get instance_array_interface_index()
	{
		return this._instance_array_interface_index || null;
	}

	set instance_array_interface_index(instance_array_interface_index)
	{
		this._instance_array_interface_index = instance_array_interface_index;
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
	get instance_array_interface_change_id()
	{
		return this._instance_array_interface_change_id || null;
	}

	set instance_array_interface_change_id(instance_array_interface_change_id)
	{
		this._instance_array_interface_change_id = instance_array_interface_change_id;
	}

	/**
	 * The required JSON fields for deserialization.
	 *
	 * @returns {Array}
	 */
	static get JSONRequired()
	{
		return [
			"instance_array_interface_id",
			"instance_array_interface_change_id"
		];
	}
};
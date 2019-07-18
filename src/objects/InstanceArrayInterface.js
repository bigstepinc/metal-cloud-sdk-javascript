const ObjectBase = require('./ObjectBase');

/**
 * An InstanceArray interface is used to attach all the corresponding instance
 * interfaces to a network.
 *
 * @class
 * @extends ObjectBase
 */
module.exports = 
class InstanceArrayInterface extends ObjectBase
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
	 * The instance_array_interface's label which is unique and it is used to form
	 * the instance_array_interface_subdomain. Can be used to call API functions.
	 */
	get instance_array_interface_label()
	{
		return (this._instance_array_interface_label !== undefined ? this._instance_array_interface_label : null);
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
		return (this._instance_array_interface_subdomain !== undefined ? this._instance_array_interface_subdomain : null);
	}

	set instance_array_interface_subdomain(instance_array_interface_subdomain)
	{
		this._instance_array_interface_subdomain = instance_array_interface_subdomain;
	}

	/**
	 * The ID of the InstanceArray interface.
	 */
	get instance_array_interface_id()
	{
		return (this._instance_array_interface_id !== undefined ? this._instance_array_interface_id : null);
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
		return (this._instance_array_id !== undefined ? this._instance_array_id : null);
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
		return (this._network_id !== undefined ? this._network_id : null);
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
		return (this._instance_array_interface_lagg_indexes !== undefined ? this._instance_array_interface_lagg_indexes : []);
	}

	set instance_array_interface_lagg_indexes(instance_array_interface_lagg_indexes)
	{
		this._instance_array_interface_lagg_indexes = instance_array_interface_lagg_indexes;
	}

	/**
	 * Shows the index of the interface. Numbering starts at 0.
	 */
	get instance_array_interface_index()
	{
		return (this._instance_array_interface_index !== undefined ? this._instance_array_interface_index : null);
	}

	set instance_array_interface_index(instance_array_interface_index)
	{
		this._instance_array_interface_index = instance_array_interface_index;
	}

	/**
	 * The status of the InstanceArray interface.
	 */
	get instance_array_interface_service_status()
	{
		return (this._instance_array_interface_service_status !== undefined ? this._instance_array_interface_service_status : null);
	}

	set instance_array_interface_service_status(instance_array_interface_service_status)
	{
		this._instance_array_interface_service_status = instance_array_interface_service_status;
	}

	/**
	 * The operation type, operation status and modified InstanceArray Interface
	 * object.
	 */
	get instance_array_interface_operation()
	{
		return (this._instance_array_interface_operation !== undefined ? this._instance_array_interface_operation : null);
	}

	set instance_array_interface_operation(instance_array_interface_operation)
	{
		this._instance_array_interface_operation = instance_array_interface_operation;
	}

	/**
	 * ISO 8601 timestamp which holds the date and time when the InstanceArray
	 * interface was created. Example format: 2013-11-29T13:00:01Z.
	 */
	get instance_array_interface_created_timestamp()
	{
		return (this._instance_array_interface_created_timestamp !== undefined ? this._instance_array_interface_created_timestamp : "0000-00-00T00:00:00Z");
	}

	set instance_array_interface_created_timestamp(instance_array_interface_created_timestamp)
	{
		this._instance_array_interface_created_timestamp = instance_array_interface_created_timestamp;
	}

	/**
	 * ISO 8601 timestamp which holds the date and time when the InstanceArray
	 * interface was edited. Example format: 2013-11-29T13:00:01Z.
	 */
	get instance_array_interface_updated_timestamp()
	{
		return (this._instance_array_interface_updated_timestamp !== undefined ? this._instance_array_interface_updated_timestamp : "0000-00-00T00:00:00Z");
	}

	set instance_array_interface_updated_timestamp(instance_array_interface_updated_timestamp)
	{
		this._instance_array_interface_updated_timestamp = instance_array_interface_updated_timestamp;
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
	get instance_array_interface_change_id()
	{
		return (this._instance_array_interface_change_id !== undefined ? this._instance_array_interface_change_id : null);
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

		];
	}
};
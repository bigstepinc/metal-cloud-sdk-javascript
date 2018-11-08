const ObjectBase = require('./ObjectBase');

/**
 * A ContainerArrayInterface is used to attach all the corresponding container
 * host interfaces to networks.
 *
 * @class
 * @extends ObjectBase
 */
module.exports = 
class ContainerArrayInterface extends ObjectBase
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
	 * The container_array_interface's label which is unique and it is used to form
	 * the container_array_interface_subdomain. Can be used to call API functions.
	 */
	get container_array_interface_label()
	{
		return (this._container_array_interface_label !== undefined ? this._container_array_interface_label : null);
	}

	set container_array_interface_label(container_array_interface_label)
	{
		this._container_array_interface_label = container_array_interface_label;
	}

	/**
	 * Automatically created based on container_array_interface_label. It is a
	 * unique reference to the ContainerArrayInterface object.
	 */
	get container_array_interface_subdomain()
	{
		return (this._container_array_interface_subdomain !== undefined ? this._container_array_interface_subdomain : null);
	}

	set container_array_interface_subdomain(container_array_interface_subdomain)
	{
		this._container_array_interface_subdomain = container_array_interface_subdomain;
	}

	/**
	 * The ID of the ContainerArray interface.
	 */
	get container_array_interface_id()
	{
		return (this._container_array_interface_id !== undefined ? this._container_array_interface_id : null);
	}

	set container_array_interface_id(container_array_interface_id)
	{
		this._container_array_interface_id = container_array_interface_id;
	}

	/**
	 * The ID of the ContainerArray that the interface belongs to.
	 */
	get container_array_id()
	{
		return (this._container_array_id !== undefined ? this._container_array_id : null);
	}

	set container_array_id(container_array_id)
	{
		this._container_array_id = container_array_id;
	}

	/**
	 * The ID of the network to which the ContainerArray interface is attached.
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
	 * Shows the index of the interface. Numbering starts at 0. There are 2
	 * interfaces for ContainerArray, with indexes 0 and 1.
	 */
	get container_array_interface_index()
	{
		return (this._container_array_interface_index !== undefined ? this._container_array_interface_index : null);
	}

	set container_array_interface_index(container_array_interface_index)
	{
		this._container_array_interface_index = container_array_interface_index;
	}

	/**
	 * The status of the ContainerArray interface.
	 */
	get container_array_interface_service_status()
	{
		return (this._container_array_interface_service_status !== undefined ? this._container_array_interface_service_status : null);
	}

	set container_array_interface_service_status(container_array_interface_service_status)
	{
		this._container_array_interface_service_status = container_array_interface_service_status;
	}

	/**
	 * The operation type, operation status and modified ContainerArray Interface
	 * object.
	 */
	get container_array_interface_operation()
	{
		return (this._container_array_interface_operation !== undefined ? this._container_array_interface_operation : null);
	}

	set container_array_interface_operation(container_array_interface_operation)
	{
		this._container_array_interface_operation = container_array_interface_operation;
	}

	/**
	 * ISO 8601 timestamp which holds the date and time when the ContainerArray
	 * interface was created. Example format: 2013-11-29T13:00:01Z.
	 */
	get container_array_interface_created_timestamp()
	{
		return (this._container_array_interface_created_timestamp !== undefined ? this._container_array_interface_created_timestamp : "0000-00-00T00:00:00Z");
	}

	set container_array_interface_created_timestamp(container_array_interface_created_timestamp)
	{
		this._container_array_interface_created_timestamp = container_array_interface_created_timestamp;
	}

	/**
	 * ISO 8601 timestamp which holds the date and time when the ContainerArray
	 * interface was edited. Example format: 2013-11-29T13:00:01Z.
	 */
	get container_array_interface_updated_timestamp()
	{
		return (this._container_array_interface_updated_timestamp !== undefined ? this._container_array_interface_updated_timestamp : "0000-00-00T00:00:00Z");
	}

	set container_array_interface_updated_timestamp(container_array_interface_updated_timestamp)
	{
		this._container_array_interface_updated_timestamp = container_array_interface_updated_timestamp;
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
	get container_array_interface_change_id()
	{
		return (this._container_array_interface_change_id !== undefined ? this._container_array_interface_change_id : null);
	}

	set container_array_interface_change_id(container_array_interface_change_id)
	{
		this._container_array_interface_change_id = container_array_interface_change_id;
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
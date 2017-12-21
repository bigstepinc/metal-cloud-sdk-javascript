const ObjectBase = require('./ObjectBase');

/**
 * ContainerArrayInterfaceOperation contains information regarding the changes
 * that are to be made to a product. Edit and deploy functions have to be
 * called in order to apply the changes. The operation type and status are
 * unique to each operation object.
 *
 * @class
 * @extends ObjectBase
 */
module.exports = 
class ContainerArrayInterfaceOperation extends ObjectBase
{
	constructor(container_array_interface_id, container_array_interface_change_id)
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
				throw new Error("Invalid params in ContainerArrayInterfaceOperation constructor.");
		}

		this._container_array_interface_id = container_array_interface_id;
		this._container_array_interface_change_id = container_array_interface_change_id;
	}

	/**
	 * The container_array_interface's label which is unique and it is used to form
	 * the container_array_interface_subdomain. Can be used to call API functions.
	 */
	get container_array_interface_label()
	{
		return this._container_array_interface_label || null;
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
		return this._container_array_interface_subdomain || null;
	}

	set container_array_interface_subdomain(container_array_interface_subdomain)
	{
		this._container_array_interface_subdomain = container_array_interface_subdomain;
	}

	/**
	 * The status of the deploy process.
	 */
	get container_array_interface_deploy_status()
	{
		return this._container_array_interface_deploy_status || null;
	}

	set container_array_interface_deploy_status(container_array_interface_deploy_status)
	{
		this._container_array_interface_deploy_status = container_array_interface_deploy_status;
	}

	/**
	 * The operation applied to ContainerArray interface.
	 */
	get container_array_interface_deploy_type()
	{
		return this._container_array_interface_deploy_type || null;
	}

	set container_array_interface_deploy_type(container_array_interface_deploy_type)
	{
		this._container_array_interface_deploy_type = container_array_interface_deploy_type;
	}

	/**
	 * The ID of the ContainerArray interface.
	 */
	get container_array_interface_id()
	{
		return this._container_array_interface_id || null;
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
		return this._container_array_id || null;
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
		return this._network_id || null;
	}

	set network_id(network_id)
	{
		this._network_id = network_id;
	}

	/**
	 * ISO 8601 timestamp which holds the date and time when the ContainerArray
	 * interface was edited. Example format: 2013-11-29T13:00:01Z.
	 */
	get container_array_interface_updated_timestamp()
	{
		return this._container_array_interface_updated_timestamp || null;
	}

	set container_array_interface_updated_timestamp(container_array_interface_updated_timestamp)
	{
		this._container_array_interface_updated_timestamp = container_array_interface_updated_timestamp;
	}

	/**
	 * Shows the index of the interface. Numbering starts at 0. There are 2
	 * interfaces for ContainerArray, with indexes 0 and 1.
	 */
	get container_array_interface_index()
	{
		return this._container_array_interface_index || null;
	}

	set container_array_interface_index(container_array_interface_index)
	{
		this._container_array_interface_index = container_array_interface_index;
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
	get container_array_interface_change_id()
	{
		return this._container_array_interface_change_id || null;
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
			"container_array_interface_id",
			"container_array_interface_change_id"
		];
	}
};
const ObjectBase = require('./ObjectBase');

/**
 * A ContainerInterface is used to attach all the corresponding Container host
 * interfaces to networks.
 *
 * @class
 * @extends ObjectBase
 */
module.exports = 
class ContainerInterfaceOperation extends ObjectBase
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
	 * The ID of the ContainerInterface.
	 */
	get container_interface_id()
	{
		return (this._container_interface_id !== undefined ? this._container_interface_id : null);
	}

	set container_interface_id(container_interface_id)
	{
		this._container_interface_id = container_interface_id;
	}

	/**
	 * This property helps ensure that edit operations don’t overwrite other,
	 * more recent changes made to the same object. It gets updated automatically
	 * after each successful edit operation.
	 */
	get container_interface_change_id()
	{
		return (this._container_interface_change_id !== undefined ? this._container_interface_change_id : null);
	}

	set container_interface_change_id(container_interface_change_id)
	{
		this._container_interface_change_id = container_interface_change_id;
	}

	/**
	 * The ID of the network to which the ContainerInterface is attached.
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
	 * The ContainerInterface's label which is unique and it is used to form the
	 * container_interface_subdomain. Can be used to call API functions.
	 */
	get container_interface_label()
	{
		return (this._container_interface_label !== undefined ? this._container_interface_label : null);
	}

	set container_interface_label(container_interface_label)
	{
		this._container_interface_label = container_interface_label;
	}

	/**
	 * Automatically created based on container_array_interface_label. It is a
	 * unique reference to the ContainerArrayInterface object.
	 */
	get container_interface_subdomain()
	{
		return (this._container_interface_subdomain !== undefined ? this._container_interface_subdomain : null);
	}

	set container_interface_subdomain(container_interface_subdomain)
	{
		this._container_interface_subdomain = container_interface_subdomain;
	}

	/**
	 * The operation applied to ContainerInterface.
	 */
	get container_interface_deploy_type()
	{
		return (this._container_interface_deploy_type !== undefined ? this._container_interface_deploy_type : null);
	}

	set container_interface_deploy_type(container_interface_deploy_type)
	{
		this._container_interface_deploy_type = container_interface_deploy_type;
	}

	/**
	 * The status of the deploy process.
	 */
	get container_interface_deploy_status()
	{
		return (this._container_interface_deploy_status !== undefined ? this._container_interface_deploy_status : null);
	}

	set container_interface_deploy_status(container_interface_deploy_status)
	{
		this._container_interface_deploy_status = container_interface_deploy_status;
	}

	/**
	 * Shows the index of the interface. Numbering starts at 0. There are 2
	 * interfaces for Container, with indexes 0 and 1.
	 */
	get container_interface_index()
	{
		return (this._container_interface_index !== undefined ? this._container_interface_index : null);
	}

	set container_interface_index(container_interface_index)
	{
		this._container_interface_index = container_interface_index;
	}

	/**
	 * ISO 8601 timestamp which holds the date and time when the ContainerInterface
	 * was edited. Example format: 2013-11-29T13:00:01Z.
	 */
	get container_interface_updated_timestamp()
	{
		return (this._container_interface_updated_timestamp !== undefined ? this._container_interface_updated_timestamp : "0000-00-00T00:00:00Z");
	}

	set container_interface_updated_timestamp(container_interface_updated_timestamp)
	{
		this._container_interface_updated_timestamp = container_interface_updated_timestamp;
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
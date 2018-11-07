const ObjectBase = require('./ObjectBase');

/**
 * Instance interfaces are created automatically when instances are created.
 * Subnets are added on networks and then IP addresses are associated
 * automatically or manually through the API to instance interfaces.
 *
 * @class
 * @extends ObjectBase
 */
module.exports = 
class InstanceInterface extends ObjectBase
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
	 * The instance_interface's label which is unique and it is used to form the
	 * instance_interface_subdomain. Can be used to call API functions.
	 */
	get instance_interface_label()
	{
		return (this._instance_interface_label !== undefined ? this._instance_interface_label : null);
	}

	set instance_interface_label(instance_interface_label)
	{
		this._instance_interface_label = instance_interface_label;
	}

	/**
	 * Automatically created based on instance_interface_label. It is a unique
	 * reference to the InstanceInterface object.
	 */
	get instance_interface_subdomain()
	{
		return (this._instance_interface_subdomain !== undefined ? this._instance_interface_subdomain : null);
	}

	set instance_interface_subdomain(instance_interface_subdomain)
	{
		this._instance_interface_subdomain = instance_interface_subdomain;
	}

	/**
	 * The ID of the instance interface.
	 */
	get instance_interface_id()
	{
		return (this._instance_interface_id !== undefined ? this._instance_interface_id : null);
	}

	set instance_interface_id(instance_interface_id)
	{
		this._instance_interface_id = instance_interface_id;
	}

	/**
	 * The ID of the instance to which the interface belongs.
	 */
	get instance_id()
	{
		return (this._instance_id !== undefined ? this._instance_id : null);
	}

	set instance_id(instance_id)
	{
		this._instance_id = instance_id;
	}

	/**
	 * The ID of the network to which the instance's interface is connected.
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
	get instance_interface_lagg_indexes()
	{
		return (this._instance_interface_lagg_indexes !== undefined ? this._instance_interface_lagg_indexes : []);
	}

	set instance_interface_lagg_indexes(instance_interface_lagg_indexes)
	{
		this._instance_interface_lagg_indexes = instance_interface_lagg_indexes;
	}

	/**
	 * Shows the index of the interface. Numbering starts at 0.
	 */
	get instance_interface_index()
	{
		return (this._instance_interface_index !== undefined ? this._instance_interface_index : null);
	}

	set instance_interface_index(instance_interface_index)
	{
		this._instance_interface_index = instance_interface_index;
	}

	/**
	 * Shows the capacity of the instance.
	 */
	get instance_interface_capacity_mbps()
	{
		return (this._instance_interface_capacity_mbps !== undefined ? this._instance_interface_capacity_mbps : null);
	}

	set instance_interface_capacity_mbps(instance_interface_capacity_mbps)
	{
		this._instance_interface_capacity_mbps = instance_interface_capacity_mbps;
	}

	/**
	 * The status of the instance interface.
	 */
	get instance_interface_service_status()
	{
		return (this._instance_interface_service_status !== undefined ? this._instance_interface_service_status : null);
	}

	set instance_interface_service_status(instance_interface_service_status)
	{
		this._instance_interface_service_status = instance_interface_service_status;
	}

	/**
	 * The corresponding ServerInterface object.
	 */
	get server_interface()
	{
		return (this._server_interface !== undefined ? this._server_interface : null);
	}

	set server_interface(server_interface)
	{
		this._server_interface = server_interface;
	}

	/**
	 * The operation type, operation status and modified Instance Interface object.
	 */
	get instance_interface_operation()
	{
		return (this._instance_interface_operation !== undefined ? this._instance_interface_operation : null);
	}

	set instance_interface_operation(instance_interface_operation)
	{
		this._instance_interface_operation = instance_interface_operation;
	}

	/**
	 * All IP objects from the instance interface.
	 */
	get instance_interface_ips()
	{
		return (this._instance_interface_ips !== undefined ? this._instance_interface_ips : []);
	}

	set instance_interface_ips(instance_interface_ips)
	{
		this._instance_interface_ips = instance_interface_ips;
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
	 * This value helps check against edit requests on expired objects.
	 */
	get instance_interface_change_id()
	{
		return (this._instance_interface_change_id !== undefined ? this._instance_interface_change_id : null);
	}

	set instance_interface_change_id(instance_interface_change_id)
	{
		this._instance_interface_change_id = instance_interface_change_id;
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
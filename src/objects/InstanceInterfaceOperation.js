const ObjectBase = require('./ObjectBase');

/**
 * InstanceInterfaceOperation contains information regarding the changes that
 * are to be made to a product. Edit and deploy functions have to be called in
 * order to apply the changes. The operation type and status are unique to each
 * operation object.
 *
 * @class
 * @extends ObjectBase
 */
module.exports = 
class InstanceInterfaceOperation extends ObjectBase
{
	constructor(instance_interface_change_id)
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

		if(instance_interface_change_id === undefined || instance_interface_change_id === null)
			throw new Error("Invalid param in InstanceInterfaceOperation constructor.");

		this._instance_interface_change_id = instance_interface_change_id;
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
	 * The status of the deploy process.
	 */
	get instance_interface_deploy_status()
	{
		return (this._instance_interface_deploy_status !== undefined ? this._instance_interface_deploy_status : null);
	}

	set instance_interface_deploy_status(instance_interface_deploy_status)
	{
		this._instance_interface_deploy_status = instance_interface_deploy_status;
	}

	/**
	 * The operation applied to instance interface.
	 */
	get instance_interface_deploy_type()
	{
		return (this._instance_interface_deploy_type !== undefined ? this._instance_interface_deploy_type : null);
	}

	set instance_interface_deploy_type(instance_interface_deploy_type)
	{
		this._instance_interface_deploy_type = instance_interface_deploy_type;
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
			"instance_interface_change_id"
		];
	}
};
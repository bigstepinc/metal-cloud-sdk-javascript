const ObjectBase = require('./ObjectBase');

/**
 * A Container is a child product of the ContainerArray and represents a
 * compute node.
 *
 * @class
 * @extends ObjectBase
 */
module.exports = 
class ContainerOperation extends ObjectBase
{
	constructor(container_label)
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

		if(container_label === undefined || container_label === null)
			throw new Error("Invalid param in ContainerOperation constructor.");

		this._container_label = container_label;
	}

	/**
	 * The ID of the Container which can be used instead of the container_label or
	 * container_subdomain when calling the API functions. It is automatically
	 * generated and cannot be edited.
	 */
	get container_id()
	{
		return this._container_id || null;
	}

	set container_id(container_id)
	{
		this._container_id = container_id;
	}

	/**
	 * This property helps ensure that edit operations don’t overwrite other,
	 * more recent changes made to the same object. It gets updated automatically
	 * after each successful edit operation.
	 */
	get container_change_id()
	{
		return this._container_change_id || null;
	}

	set container_change_id(container_change_id)
	{
		this._container_change_id = container_change_id;
	}

	/**
	 * The Container's unique label is used to create the container_subdomain. It
	 * is editable and can be used to call API functions.
	 */
	get container_label()
	{
		return this._container_label || null;
	}

	set container_label(container_label)
	{
		this._container_label = container_label;
	}

	/**
	 * Automatically created based on container_label. It is a unique reference to
	 * the Container object.
	 */
	get container_subdomain()
	{
		return this._container_subdomain || null;
	}

	set container_subdomain(container_subdomain)
	{
		this._container_subdomain = container_subdomain;
	}

	/**
	 * The operation applied to the Container.
	 */
	get container_deploy_type()
	{
		return this._container_deploy_type || null;
	}

	set container_deploy_type(container_deploy_type)
	{
		this._container_deploy_type = container_deploy_type;
	}

	/**
	 * The status of the deploy process.
	 */
	get container_deploy_status()
	{
		return this._container_deploy_status || null;
	}

	set container_deploy_status(container_deploy_status)
	{
		this._container_deploy_status = container_deploy_status;
	}

	/**
	 * All ContainerInterfaceOperation objects.
	 */
	get container_interfaces()
	{
		return this._container_interfaces || [];
	}

	set container_interfaces(container_interfaces)
	{
		this._container_interfaces = container_interfaces;
	}

	/**
	 * ISO 8601 timestamp which holds the date and time when the Container was
	 * edited. Example format: 2013-11-29T13:00:01Z.
	 */
	get container_updated_timestamp()
	{
		return this._container_updated_timestamp || null;
	}

	set container_updated_timestamp(container_updated_timestamp)
	{
		this._container_updated_timestamp = container_updated_timestamp;
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
	 * The required JSON fields for deserialization.
	 *
	 * @returns {Array}
	 */
	static get JSONRequired()
	{
		return [
			"container_label"
		];
	}
};
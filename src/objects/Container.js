const ObjectBase = require('./ObjectBase');

/**
 * A Container is a child product of the ContainerArray and represents a
 * compute node.
 *
 * @class
 * @extends ObjectBase
 */
module.exports = 
class Container extends ObjectBase
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
	 * The Container is a child of a ContainerArray.
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
	 * Represents the infrastructure ID to which the Container belongs.
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
	 * Automatically created based on container_label. It is a unique reference to
	 * the Container object to be used within the ContainerPlatform network.
	 */
	get container_subdomain_internal()
	{
		return this._container_subdomain_internal || null;
	}

	set container_subdomain_internal(container_subdomain_internal)
	{
		this._container_subdomain_internal = container_subdomain_internal;
	}

	/**
	 * The status of the Container.
	 */
	get container_service_status()
	{
		return this._container_service_status || null;
	}

	set container_service_status(container_service_status)
	{
		this._container_service_status = container_service_status;
	}

	/**
	 * The operation type, operation status and modified Container object.
	 */
	get container_operation()
	{
		return this._container_operation || null;
	}

	set container_operation(container_operation)
	{
		this._container_operation = container_operation;
	}

	/**
	 * Credentials used to connect to the Container.
	 */
	get container_credentials()
	{
		return this._container_credentials || null;
	}

	set container_credentials(container_credentials)
	{
		this._container_credentials = container_credentials;
	}

	/**
	 * All ContainerInterface objects.
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
	 * The index of the Container within the ContainerArray.
	 */
	get container_index()
	{
		return this._container_index || null;
	}

	set container_index(container_index)
	{
		this._container_index = container_index;
	}

	/**
	 * ISO 8601 timestamp which holds the date and time when the Container was
	 * created. Example format: 2013-11-29T13:00:01Z.
	 */
	get container_created_timestamp()
	{
		return this._container_created_timestamp || "0000-00-00T00:00:00Z";
	}

	set container_created_timestamp(container_created_timestamp)
	{
		this._container_created_timestamp = container_created_timestamp;
	}

	/**
	 * ISO 8601 timestamp which holds the date and time when the Container was
	 * edited. Example format: 2013-11-29T13:00:01Z.
	 */
	get container_updated_timestamp()
	{
		return this._container_updated_timestamp || "0000-00-00T00:00:00Z";
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

		];
	}
};
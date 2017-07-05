const ObjectBase = require('./ObjectBase');

/**
 * ContainerArray port resource that facilitates inter-container and external communication.
 *
 * @class
 * @extends ObjectBase
 */
module.exports = 
class ContainerArrayPortMapping extends ObjectBase
{
	constructor(port_mapping_name, port_mapping_container_port)
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
				throw new Error("Invalid params in ContainerArrayPortMapping constructor.");
		}

		this._port_mapping_name = port_mapping_name;
		this._port_mapping_container_port = port_mapping_container_port;
	}

	/**
	 * Port resource name.
	 */
	get port_mapping_name()
	{
		return this._port_mapping_name || null;
	}

	set port_mapping_name(port_mapping_name)
	{
		this._port_mapping_name = port_mapping_name;
	}

	/**
	 * Port the application inside the container listens to. May be used for
	 * inter-container communication.
	 */
	get port_mapping_container_port()
	{
		return this._port_mapping_container_port || null;
	}

	set port_mapping_container_port(port_mapping_container_port)
	{
		this._port_mapping_container_port = port_mapping_container_port;
	}

	/**
	 * Port the container must be accessible on from external sources. May be used
	 * for external communication.
	 */
	get port_mapping_service_port()
	{
		return this._port_mapping_service_port || null;
	}

	set port_mapping_service_port(port_mapping_service_port)
	{
		this._port_mapping_service_port = port_mapping_service_port;
	}

	/**
	 * Port communication protocol.
	 */
	get port_mapping_protocol()
	{
		return this._port_mapping_protocol || "TCP";
	}

	set port_mapping_protocol(port_mapping_protocol)
	{
		this._port_mapping_protocol = port_mapping_protocol;
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
			"port_mapping_name",
			"port_mapping_container_port"
		];
	}
};
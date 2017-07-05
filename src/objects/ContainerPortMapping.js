const ObjectBase = require('./ObjectBase');

/**
 * A ContainerPortMapping is a group of required port resources and properties
 * statically configured in containers.
 *
 * @class
 * @extends ObjectBase
 */
module.exports = 
class ContainerPortMapping extends ObjectBase
{
	constructor(container_port)
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

		if(container_port === undefined || container_port === null)
			throw new Error("Invalid param in ContainerPortMapping constructor.");

		this._container_port = container_port;
	}

	/**
	 * The port the application listens to inside of the container.
	 */
	get container_port()
	{
		return this._container_port || null;
	}

	set container_port(container_port)
	{
		this._container_port = container_port;
	}

	/**
	 * Random port from the range included in the resource offer.
	 */
	get host_port()
	{
		return this._host_port || 0;
	}

	set host_port(host_port)
	{
		this._host_port = host_port;
	}

	/**
	 * Helper port intended for doing service discovery using a well-known port per
	 * service.
	 */
	get service_port()
	{
		return this._service_port || null;
	}

	set service_port(service_port)
	{
		this._service_port = service_port;
	}

	/**
	 * The protocol used.
	 */
	get protocol()
	{
		return this._protocol || "tcp";
	}

	set protocol(protocol)
	{
		this._protocol = protocol;
	}

	/**
	 * A list of labels (string keys and string values).
	 */
	get labels()
	{
		return this._labels || {"applicationProtocol":"unknown"};
	}

	set labels(labels)
	{
		this._labels = labels;
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
			"container_port"
		];
	}
};
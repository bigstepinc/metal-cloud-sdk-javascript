const ObjectBase = require('./ObjectBase');

/**
 * A Container represents an application instance.
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
	 * The label is used to uniquely identify a certain Container. It is
	 * automatically generated and cannot be edited.
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
	 * The ID of the parent ContainerArray.
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
	 * The host on which the Container was created.
	 */
	get container_host()
	{
		return this._container_host || null;
	}

	set container_host(container_host)
	{
		this._container_host = container_host;
	}

	/**
	 * The random host ports allocated by Marathon, mapped to the 8091 port that
	 * the Container listens to and to the port mappings defined by the user.
	 */
	get container_ports()
	{
		return this._container_ports || [];
	}

	set container_ports(container_ports)
	{
		this._container_ports = container_ports;
	}

	/**
	 * ISO 8601 timestamp which holds the date and time when the Container was
	 * staged. Example format: 2013-11-29T13:00:01Z.
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
	 * started. Example format: 2013-11-29T13:00:01Z.
	 */
	get container_started_timestamp()
	{
		return this._container_started_timestamp || "0000-00-00T00:00:00Z";
	}

	set container_started_timestamp(container_started_timestamp)
	{
		this._container_started_timestamp = container_started_timestamp;
	}

	/**
	 * ISO 8601 timestamp which holds the date and time of the Container version.
	 * Example format: 2013-11-29T13:00:01Z.
	 */
	get container_version()
	{
		return this._container_version || "0000-00-00T00:00:00Z";
	}

	set container_version(container_version)
	{
		this._container_version = container_version;
	}

	/**
	 * The current status of the Container.
	 */
	get container_status()
	{
		return this._container_status || null;
	}

	set container_status(container_status)
	{
		this._container_status = container_status;
	}

	/**
	 * The files of the Container.
	 */
	get container_files()
	{
		return this._container_files || [];
	}

	set container_files(container_files)
	{
		this._container_files = container_files;
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
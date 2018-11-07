const ObjectBase = require('./ObjectBase');

/**
 * A ContainerStatus contains the status of the Container.
 *
 * @class
 * @extends ObjectBase
 */
module.exports = 
class ContainerStatus extends ObjectBase
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
	 * The phase of the Container.
	 */
	get status_phase()
	{
		return (this._status_phase !== undefined ? this._status_phase : null);
	}

	set status_phase(status_phase)
	{
		this._status_phase = status_phase;
	}

	/**
	 * A brief message that indicates details about the reason that led the
	 * Container into the current state.
	 */
	get status_reason()
	{
		return (this._status_reason !== undefined ? this._status_reason : null);
	}

	set status_reason(status_reason)
	{
		this._status_reason = status_reason;
	}

	/**
	 * A human readable message that indicates details about the reason that led
	 * the Container into the current state.
	 */
	get status_message()
	{
		return (this._status_message !== undefined ? this._status_message : null);
	}

	set status_message(status_message)
	{
		this._status_message = status_message;
	}

	/**
	 * RFC3339 timestamp which holds the date and time when the Container was
	 * started. Example format: 2013-11-29T13:00:01Z.
	 */
	get status_started_timestamp()
	{
		return (this._status_started_timestamp !== undefined ? this._status_started_timestamp : null);
	}

	set status_started_timestamp(status_started_timestamp)
	{
		this._status_started_timestamp = status_started_timestamp;
	}

	/**
	 * The public IP address of the host the Container was scheduled on in natural
	 * language.
	 */
	get status_host_ip_public_human_readable()
	{
		return (this._status_host_ip_public_human_readable !== undefined ? this._status_host_ip_public_human_readable : null);
	}

	set status_host_ip_public_human_readable(status_host_ip_public_human_readable)
	{
		this._status_host_ip_public_human_readable = status_host_ip_public_human_readable;
	}

	/**
	 * The Container private IP address in natural language.
	 */
	get status_container_ip_private_human_readable()
	{
		return (this._status_container_ip_private_human_readable !== undefined ? this._status_container_ip_private_human_readable : null);
	}

	set status_container_ip_private_human_readable(status_container_ip_private_human_readable)
	{
		this._status_container_ip_private_human_readable = status_container_ip_private_human_readable;
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
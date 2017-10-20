const ObjectBase = require('./ObjectBase');

/**
 * A ContainerState contains the state of the Container.
 *
 * @class
 * @extends ObjectBase
 */
module.exports = 
class ContainerState extends ObjectBase
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
	get state_phase()
	{
		return this._state_phase || null;
	}

	set state_phase(state_phase)
	{
		this._state_phase = state_phase;
	}

	/**
	 * A brief message that indicates details about the reason that led the
	 * Container into the current state.
	 */
	get state_reason()
	{
		return this._state_reason || null;
	}

	set state_reason(state_reason)
	{
		this._state_reason = state_reason;
	}

	/**
	 * A human readable message that indicates details about the reason that led
	 * the Container into the current state.
	 */
	get state_message()
	{
		return this._state_message || null;
	}

	set state_message(state_message)
	{
		this._state_message = state_message;
	}

	/**
	 * RFC3339 timestamp which holds the date and time when the Container was
	 * started. Example format: 2013-11-29T13:00:01Z.
	 */
	get state_started_timestamp()
	{
		return this._state_started_timestamp || null;
	}

	set state_started_timestamp(state_started_timestamp)
	{
		this._state_started_timestamp = state_started_timestamp;
	}

	/**
	 * The public IP address of the host the Container was scheduled on in natural
	 * language.
	 */
	get state_host_ip_public_human_readable()
	{
		return this._state_host_ip_public_human_readable || null;
	}

	set state_host_ip_public_human_readable(state_host_ip_public_human_readable)
	{
		this._state_host_ip_public_human_readable = state_host_ip_public_human_readable;
	}

	/**
	 * The Container private IP address in natural language.
	 */
	get state_container_ip_private_human_readable()
	{
		return this._state_container_ip_private_human_readable || null;
	}

	set state_container_ip_private_human_readable(state_container_ip_private_human_readable)
	{
		this._state_container_ip_private_human_readable = state_container_ip_private_human_readable;
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
const ObjectBase = require('./ObjectBase');

/**
 * Datacenter with physical resources which may be allocated to infrastructures.
 *
 * @class
 * @extends ObjectBase
 */
module.exports = 
class Datacenter extends ObjectBase
{
	constructor(datacenter_name, datacenter_display_name)
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
				throw new Error("Invalid params in Datacenter constructor.");
		}

		this._datacenter_name = datacenter_name;
		this._datacenter_display_name = datacenter_display_name;
	}

	/**
	 * Uniquely identifies a datacenter.
	 */
	get datacenter_name()
	{
		return this._datacenter_name || null;
	}

	set datacenter_name(datacenter_name)
	{
		this._datacenter_name = datacenter_name;
	}

	/**
	 * The owner's user ID. Null represents a publicly available datacenter. If a
	 * user ID is specified, the datacenter is private.
	 */
	get user_id()
	{
		return this._user_id || null;
	}

	set user_id(user_id)
	{
		this._user_id = user_id;
	}

	/**
	 * Datacenter name for user interfaces.
	 */
	get datacenter_display_name()
	{
		return this._datacenter_display_name || null;
	}

	set datacenter_display_name(datacenter_display_name)
	{
		this._datacenter_display_name = datacenter_display_name;
	}

	/**
	 * Default datacenter for some internal logic.
	 */
	get datacenter_is_master()
	{
		return this._datacenter_is_master || false;
	}

	set datacenter_is_master(datacenter_is_master)
	{
		this._datacenter_is_master = datacenter_is_master;
	}

	/**
	 * Infrastructures and some resources are read-only for API requests while the
	 * parent datacenter is in maintenance mode.
	 */
	get datacenter_is_maintenance()
	{
		return this._datacenter_is_maintenance || false;
	}

	set datacenter_is_maintenance(datacenter_is_maintenance)
	{
		this._datacenter_is_maintenance = datacenter_is_maintenance;
	}

	/**
	 *
	 */
	get datacenter_type()
	{
		return this._datacenter_type || "metal_cloud";
	}

	set datacenter_type(datacenter_type)
	{
		this._datacenter_type = datacenter_type;
	}

	/**
	 * ISO 8601 timestamp which holds the date and time when the datacenter was
	 * created through the API. Example format: 2013-11-29T13:00:01Z.
	 */
	get datacenter_created_timestamp()
	{
		return this._datacenter_created_timestamp || "0000-00-00T00:00:00Z";
	}

	set datacenter_created_timestamp(datacenter_created_timestamp)
	{
		this._datacenter_created_timestamp = datacenter_created_timestamp;
	}

	/**
	 * True for datacenters which are under construction, beeing phased out, are to
	 * be avoided temporarily, or no longer exist.
	 */
	get datacenter_hidden()
	{
		return this._datacenter_hidden || false;
	}

	set datacenter_hidden(datacenter_hidden)
	{
		this._datacenter_hidden = datacenter_hidden;
	}

	/**
	 * The schema type
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
			"datacenter_name",
			"datacenter_display_name"
		];
	}
};
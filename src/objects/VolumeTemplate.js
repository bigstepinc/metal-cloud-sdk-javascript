const ObjectBase = require('./ObjectBase');

/**
 * A template can be created based on a drive and it has the same
 * characteristics and holds the same information as the parent drive.
 *
 * @class
 * @extends ObjectBase
 */
module.exports = 
class VolumeTemplate extends ObjectBase
{
	constructor(volume_template_label, volume_template_size_mbytes)
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
				throw new Error("Invalid params in VolumeTemplate constructor.");
		}

		this._volume_template_label = volume_template_label;
		this._volume_template_size_mbytes = volume_template_size_mbytes;
	}

	/**
	 * The ID of the volume template.
	 */
	get volume_template_id()
	{
		return this._volume_template_id || null;
	}

	set volume_template_id(volume_template_id)
	{
		this._volume_template_id = volume_template_id;
	}

	/**
	 * The volume template's unique label. It is editable and can be used to call
	 * API functions.
	 */
	get volume_template_label()
	{
		return this._volume_template_label || null;
	}

	set volume_template_label(volume_template_label)
	{
		this._volume_template_label = volume_template_label;
	}

	/**
	 * The volume template's display name.
	 */
	get volume_template_display_name()
	{
		return this._volume_template_display_name || null;
	}

	set volume_template_display_name(volume_template_display_name)
	{
		this._volume_template_display_name = volume_template_display_name;
	}

	/**
	 * Size of the template.
	 */
	get volume_template_size_mbytes()
	{
		return this._volume_template_size_mbytes || null;
	}

	set volume_template_size_mbytes(volume_template_size_mbytes)
	{
		this._volume_template_size_mbytes = volume_template_size_mbytes;
	}

	/**
	 * An arbitrary UTF-8 string which provides a description of the template.
	 */
	get volume_template_description()
	{
		return this._volume_template_description || "";
	}

	set volume_template_description(volume_template_description)
	{
		this._volume_template_description = volume_template_description;
	}

	/**
	 * Date and time of the template's creation. ISO 8601 timestamp. Example
	 * format: 2013-11-29T13:00:01Z
	 */
	get volume_template_created_timestamp()
	{
		return this._volume_template_created_timestamp || null;
	}

	set volume_template_created_timestamp(volume_template_created_timestamp)
	{
		this._volume_template_created_timestamp = volume_template_created_timestamp;
	}

	/**
	 * User owner ID.
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
	 * OperatingSystem
	 */
	get volume_template_operating_system()
	{
		return this._volume_template_operating_system || null;
	}

	set volume_template_operating_system(volume_template_operating_system)
	{
		this._volume_template_operating_system = volume_template_operating_system;
	}

	/**
	 * http(s) template base URL.
	 */
	get volume_template_repo_url()
	{
		return this._volume_template_repo_url || null;
	}

	set volume_template_repo_url(volume_template_repo_url)
	{
		this._volume_template_repo_url = volume_template_repo_url;
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
			"volume_template_label",
			"volume_template_size_mbytes"
		];
	}
};
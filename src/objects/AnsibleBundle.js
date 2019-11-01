const ObjectBase = require('./ObjectBase');

/**
 * An Ansible bundle contains an Ansible project as a single archive file,
 * usually .zip
 *
 * @class
 * @extends ObjectBase
 */
module.exports = 
class AnsibleBundle extends ObjectBase
{
	constructor(ansible_bundle_archive_filename)
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

		if(ansible_bundle_archive_filename === undefined || ansible_bundle_archive_filename === null)
			throw new Error("Invalid param in AnsibleBundle constructor.");

		this._ansible_bundle_archive_filename = ansible_bundle_archive_filename;
	}

	/**
	 * Unique Ansible bundle ID.
	 */
	get ansible_bundle_id()
	{
		return (this._ansible_bundle_id !== undefined ? this._ansible_bundle_id : null);
	}

	set ansible_bundle_id(ansible_bundle_id)
	{
		this._ansible_bundle_id = ansible_bundle_id;
	}

	/**
	 * Owner. Delegates of this user can manage his Ansible bundles as well. When
	 * null, defaults to the API authenticated user.
	 */
	get user_id_owner()
	{
		return (this._user_id_owner !== undefined ? this._user_id_owner : null);
	}

	set user_id_owner(user_id_owner)
	{
		this._user_id_owner = user_id_owner;
	}

	/**
	 * The user which last updated the bundle.
	 */
	get user_id_authenticated()
	{
		return (this._user_id_authenticated !== undefined ? this._user_id_authenticated : null);
	}

	set user_id_authenticated(user_id_authenticated)
	{
		this._user_id_authenticated = user_id_authenticated;
	}

	/**
	 *
	 */
	get ansible_bundle_type()
	{
		return (this._ansible_bundle_type !== undefined ? this._ansible_bundle_type : "post_deploy");
	}

	set ansible_bundle_type(ansible_bundle_type)
	{
		this._ansible_bundle_type = ansible_bundle_type;
	}

	/**
	 * For example: ansible_install_some_stuff.zip
	 */
	get ansible_bundle_archive_filename()
	{
		return (this._ansible_bundle_archive_filename !== undefined ? this._ansible_bundle_archive_filename : null);
	}

	set ansible_bundle_archive_filename(ansible_bundle_archive_filename)
	{
		this._ansible_bundle_archive_filename = ansible_bundle_archive_filename;
	}

	/**
	 * ZIP archive in base64 format.
	 */
	get ansible_bundle_archive_contents_base64()
	{
		return (this._ansible_bundle_archive_contents_base64 !== undefined ? this._ansible_bundle_archive_contents_base64 : null);
	}

	set ansible_bundle_archive_contents_base64(ansible_bundle_archive_contents_base64)
	{
		this._ansible_bundle_archive_contents_base64 = ansible_bundle_archive_contents_base64;
	}

	/**
	 * Date and time of the Ansible bundle's creation.
	 */
	get ansible_bundle_created_timestamp()
	{
		return (this._ansible_bundle_created_timestamp !== undefined ? this._ansible_bundle_created_timestamp : null);
	}

	set ansible_bundle_created_timestamp(ansible_bundle_created_timestamp)
	{
		this._ansible_bundle_created_timestamp = ansible_bundle_created_timestamp;
	}

	/**
	 * Date and time of the Ansible bundle's update (replace).
	 */
	get ansible_bundle_updated_timestamp()
	{
		return (this._ansible_bundle_updated_timestamp !== undefined ? this._ansible_bundle_updated_timestamp : null);
	}

	set ansible_bundle_updated_timestamp(ansible_bundle_updated_timestamp)
	{
		this._ansible_bundle_updated_timestamp = ansible_bundle_updated_timestamp;
	}

	/**
	 * The schema type
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
			"ansible_bundle_archive_filename"
		];
	}
};
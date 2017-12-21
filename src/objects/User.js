const ObjectBase = require('./ObjectBase');

/**
 * This object's properties describe user account specifications.
 *
 * @class
 * @extends ObjectBase
 */
module.exports = 
class User extends ObjectBase
{
	constructor(user_id, user_display_name, user_email)
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

		for(let index = 0; index < 3; index++)
		{
			let arg = arguments[index];

			if(arg === undefined || arg === null)
				throw new Error("Invalid params in User constructor.");
		}

		this._user_id = user_id;
		this._user_display_name = user_display_name;
		this._user_email = user_email;
	}

	/**
	 * The ID of the user.
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
	 * The user's region. It links the user to a company with which he is making
	 * business legally.
	 */
	get franchise()
	{
		return this._franchise || null;
	}

	set franchise(franchise)
	{
		this._franchise = franchise;
	}

	/**
	 * The user's name.
	 */
	get user_display_name()
	{
		return this._user_display_name || null;
	}

	set user_display_name(user_display_name)
	{
		this._user_display_name = user_display_name;
	}

	/**
	 * The user's email.
	 */
	get user_email()
	{
		return this._user_email || null;
	}

	set user_email(user_email)
	{
		this._user_email = user_email;
	}

	/**
	 * Date and time of the user's creation.
	 */
	get user_created_timestamp()
	{
		return this._user_created_timestamp || null;
	}

	set user_created_timestamp(user_created_timestamp)
	{
		this._user_created_timestamp = user_created_timestamp;
	}

	/**
	 * Date and time of the user's last login.
	 */
	get user_last_login_timestamp()
	{
		return this._user_last_login_timestamp || null;
	}

	set user_last_login_timestamp(user_last_login_timestamp)
	{
		this._user_last_login_timestamp = user_last_login_timestamp;
	}

	/**
	 * Counts the failed authentication attempts since the user's last login.
	 */
	get user_auth_failed_attempts_since_last_login()
	{
		return this._user_auth_failed_attempts_since_last_login || null;
	}

	set user_auth_failed_attempts_since_last_login(user_auth_failed_attempts_since_last_login)
	{
		this._user_auth_failed_attempts_since_last_login = user_auth_failed_attempts_since_last_login;
	}

	/**
	 * Indicates if a user's change of password has been required or not.
	 */
	get user_password_change_required()
	{
		return this._user_password_change_required || null;
	}

	set user_password_change_required(user_password_change_required)
	{
		this._user_password_change_required = user_password_change_required;
	}

	/**
	 * Authenticator shared secret. Base 32 string. null by default. Use
	 * user_authenticate_password() to obtain an object containing the
	 * authenticator's shared secret (note this also requires having the
	 * authenticator already set up).
	 */
	get user_authenticator_secret_base32()
	{
		return this._user_authenticator_secret_base32 || null;
	}

	set user_authenticator_secret_base32(user_authenticator_secret_base32)
	{
		this._user_authenticator_secret_base32 = user_authenticator_secret_base32;
	}

	/**
	 * A mandatory authenticator means that a logged-on user without an
	 * authenticator would be forced to setup an authenticator in the GUI (there's
	 * no API enforcement).
	 */
	get user_authenticator_is_mandatory()
	{
		return this._user_authenticator_is_mandatory || false;
	}

	set user_authenticator_is_mandatory(user_authenticator_is_mandatory)
	{
		this._user_authenticator_is_mandatory = user_authenticator_is_mandatory;
	}

	/**
	 * This flag forces a logged-on user to setup a new authenticator in the GUI,
	 * replacing the old one (there's no API enforcement).
	 */
	get user_authenticator_must_change()
	{
		return this._user_authenticator_must_change || false;
	}

	set user_authenticator_must_change(user_authenticator_must_change)
	{
		this._user_authenticator_must_change = user_authenticator_must_change;
	}

	/**
	 * ISO 8601 timestamp which holds the date and time when an authenticator was
	 * created or removed. Example format: 2013-11-29T13:00:01Z.
	 */
	get user_authenticator_created_timestamp()
	{
		return this._user_authenticator_created_timestamp || "1970-01-01T00:00:00Z";
	}

	set user_authenticator_created_timestamp(user_authenticator_created_timestamp)
	{
		this._user_authenticator_created_timestamp = user_authenticator_created_timestamp;
	}

	/**
	 * The email status.
	 */
	get user_email_status()
	{
		return this._user_email_status || null;
	}

	set user_email_status(user_email_status)
	{
		this._user_email_status = user_email_status;
	}

	/**
	 * Indicates if a user is blocked or not.
	 */
	get user_blocked()
	{
		return this._user_blocked || null;
	}

	set user_blocked(user_blocked)
	{
		this._user_blocked = user_blocked;
	}

	/**
	 * User's API key. null by default. Use user_authenticate_password() to obtain
	 * an object containing the API key.
	 */
	get user_api_key()
	{
		return this._user_api_key || null;
	}

	set user_api_key(user_api_key)
	{
		this._user_api_key = user_api_key;
	}

	/**
	 *
	 */
	get user_access_level()
	{
		return this._user_access_level || "customer";
	}

	set user_access_level(user_access_level)
	{
		this._user_access_level = user_access_level;
	}

	/**
	 * Indicates if a user is billable or not.
	 */
	get user_is_billable()
	{
		return this._user_is_billable || null;
	}

	set user_is_billable(user_is_billable)
	{
		this._user_is_billable = user_is_billable;
	}

	/**
	 * Indicates if a user is suspended or not.
	 */
	get user_is_suspended()
	{
		return this._user_is_suspended || null;
	}

	set user_is_suspended(user_is_suspended)
	{
		this._user_is_suspended = user_is_suspended;
	}

	/**
	 * User’s updated language which should respect the ISO 639-1 format (2
	 * letter code. Examples: "en", "ro", "fr", "jp").
	 */
	get user_language()
	{
		return this._user_language || "en";
	}

	set user_language(user_language)
	{
		this._user_language = user_language;
	}

	/**
	 * User's parent delegates. Contains User objects
	 */
	get user_delegate_parents()
	{
		return this._user_delegate_parents || [];
	}

	set user_delegate_parents(user_delegate_parents)
	{
		this._user_delegate_parents = user_delegate_parents;
	}

	/**
	 * User's children delegates. Contains User objects
	 */
	get user_delegate_children()
	{
		return this._user_delegate_children || [];
	}

	set user_delegate_children(user_delegate_children)
	{
		this._user_delegate_children = user_delegate_children;
	}

	/**
	 * The current default infrastructure ID.
	 */
	get user_infrastructure_id_default()
	{
		return this._user_infrastructure_id_default || null;
	}

	set user_infrastructure_id_default(user_infrastructure_id_default)
	{
		this._user_infrastructure_id_default = user_infrastructure_id_default;
	}

	/**
	 * User GUI settings.
	 */
	get user_gui_settings_json()
	{
		return this._user_gui_settings_json || "";
	}

	set user_gui_settings_json(user_gui_settings_json)
	{
		this._user_gui_settings_json = user_gui_settings_json;
	}

	/**
	 * Internal property. Indicates if this is a test account.
	 */
	get user_is_test_account()
	{
		return this._user_is_test_account || false;
	}

	set user_is_test_account(user_is_test_account)
	{
		this._user_is_test_account = user_is_test_account;
	}

	/**
	 * Internal property. Indicates if the user should be ignored in usage reports.
	 */
	get user_exclude_from_reports()
	{
		return this._user_exclude_from_reports || false;
	}

	set user_exclude_from_reports(user_exclude_from_reports)
	{
		this._user_exclude_from_reports = user_exclude_from_reports;
	}

	/**
	 * Used to group users based on their brand.
	 */
	get user_brand()
	{
		return this._user_brand || null;
	}

	set user_brand(user_brand)
	{
		this._user_brand = user_brand;
	}

	/**
	 * Determines if the user is a brand manager. Direct delegates will be asigned
	 * to the same brand.
	 */
	get user_is_brand_manager()
	{
		return this._user_is_brand_manager || false;
	}

	set user_is_brand_manager(user_is_brand_manager)
	{
		this._user_is_brand_manager = user_is_brand_manager;
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
			"user_id",
			"user_display_name",
			"user_email"
		];
	}
};
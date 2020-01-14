const ObjectBase = require("./ObjectBase");


module.exports = 
class User extends ObjectBase
{
	/**
	 * @protected
	 * 
	 * @returns {{description: string, type: string, properties: Object<propertyName, {type: string|string[], description: string, required: boolean, enum: undefined|string[], items: undefined|{description: string, type: string}, default: string|number|null|boolean, pattern: string|undefined, minLength: number|undefined, maxLength: string|undefined, readonly: boolean|undefined, required: boolean|undefined}>}}
	 */
	_schemaDefinition()
	{
		return {
			"description": "This object's properties describe user account specifications.",
			"type": "object",
			"properties": {
				"user_id": {
					"type": [
						"integer",
						"null",
						"string"
					],
					"description": "The ID of the user.",
					"required": true
				},
				"franchise": {
					"type": "string",
					"description": "The user's region. It links the user to a company with which he is making business legally.",
					"required": true,
					"readonly": true
				},
				"user_display_name": {
					"type": "string",
					"description": "The user's name.",
					"required": true
				},
				"user_email": {
					"type": "string",
					"description": "The user's email.",
					"required": true
				},
				"user_created_timestamp": {
					"type": [
						"string",
						"null"
					],
					"description": "Date and time of the user's creation.",
					"default": null,
					"readonly": true
				},
				"user_last_login_timestamp": {
					"type": [
						"string",
						"null"
					],
					"description": "Date and time of the user's last login.",
					"default": null,
					"readonly": true
				},
				"user_auth_failed_attempts_since_last_login": {
					"type": [
						"integer",
						"null"
					],
					"description": "Counts the failed authentication attempts since the user's last login.",
					"default": null,
					"readonly": true
				},
				"user_password_change_required": {
					"type": [
						"boolean",
						"null"
					],
					"description": "Indicates if a user's change of password has been required or not.",
					"default": null,
					"readonly": true
				},
				"user_authenticator_secret_base32": {
					"type": [
						"string",
						"null"
					],
					"description": "Authenticator shared secret. Base 32 string. <code>null</code> by default. Use <code>user_authenticate_password()</code> to obtain an object containing the authenticator's shared secret (note this also requires having the authenticator already set up).",
					"default": null,
					"readonly": true
				},
				"user_authenticator_is_mandatory": {
					"type": "boolean",
					"description": "A mandatory authenticator means that a logged-on user without an authenticator would be forced to setup an authenticator in the GUI (there's no API enforcement).",
					"default": false,
					"readonly": true
				},
				"user_authenticator_must_change": {
					"type": "boolean",
					"description": "This flag forces a logged-on user to setup a new authenticator in the GUI, replacing the old one (there's no API enforcement).",
					"default": false,
					"readonly": true
				},
				"user_authenticator_created_timestamp": {
					"type": "string",
					"description": "ISO 8601 timestamp which holds the date and time when an authenticator was created or removed. Example format: 2013-11-29T13:00:01Z.",
					"default": "1970-01-01T00:00:00Z",
					"readonly": true
				},
				"user_email_status": {
					"enum": [
						"verified",
						"not_verified"
					],
					"type": [
						"string",
						"null"
					],
					"description": "The email status.",
					"default": null,
					"readonly": true
				},
				"user_blocked": {
					"type": [
						"boolean",
						"null"
					],
					"description": "Indicates if a user is blocked or not.",
					"default": null,
					"readonly": true
				},
				"user_api_key": {
					"type": [
						"string",
						"null"
					],
					"description": "User's API key. <code>null</code> by default. Use <code>user_authenticate_password()</code> to obtain an object containing the API key.",
					"default": null,
					"readonly": true
				},
				"user_access_level": {
					"type": "string",
					"description": "",
					"default": "customer",
					"readonly": true
				},
				"user_is_billable": {
					"type": [
						"boolean",
						"null"
					],
					"description": "Indicates if a user is billable or not.",
					"default": null
				},
				"user_is_suspended": {
					"type": [
						"boolean",
						"null"
					],
					"description": "Indicates if a user is suspended or not.",
					"default": null
				},
				"user_language": {
					"type": "string",
					"description": "User\u2019s updated language which should respect the ISO 639-1 format (2 letter code. Examples: \"en\", \"ro\", \"fr\", \"jp\").",
					"default": "en"
				},
				"user_delegate_parents": {
					"type": "array",
					"description": "User's parent delegates. Contains <a:schema>User<\/a:schema> objects",
					"items": {
						"description": "Contains User objects without \"user_delegate_parents\" and \"user_delegate_children\"",
						"type": "User"
					},
					"readonly": true
				},
				"user_delegate_children": {
					"type": "array",
					"description": "User's children delegates. Contains <a:schema>User</a:schema> objects",
					"items": {
						"description": "Contains User objects without \"user_delegate_parents\" and \"user_delegate_children\"",
						"type": "User"
					},
					"readonly": true
				},
				"user_infrastructure_id_default": {
					"type": [
						"integer",
						"null"
					],
					"description": "The current default infrastructure ID.",
					"default": null
				},
				"user_gui_settings_json": {
					"type": [
						"string",
						"null"
					],
					"description": "User GUI settings.",
					"default": "",
					"readonly": true
				},
				"user_is_test_account": {
					"type": [
						"boolean",
						"null"
					],
					"description": "Internal property. Indicates if this is a test account.",
					"default": false,
					"readonly": true
				},
				"user_exclude_from_reports": {
					"type": [
						"boolean",
						"null"
					],
					"description": "Internal property. Indicates if the user should be ignored in usage reports.",
					"default": false,
					"readonly": true
				},
				"user_brand": {
					"type": "string",
					"description": "Used to group users based on their brand."
				},
				"user_is_brand_manager": {
					"type": "boolean",
					"description": "Determines if the user is a brand manager. Direct delegates will be asigned to the same brand.",
					"default": false
				},
				"user_is_datastore_publisher": {
					"type": "boolean",
					"description": "Determines if the user is a datastore publisher.",
					"default": false
				},
				"type": {
					"type": "string",
					"description": "The schema type",
					"enum": [
						"User"
					],
					"readonly": true
				}
			}
		};
	}
};

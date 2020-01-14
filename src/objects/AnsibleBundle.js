const ObjectBase = require("./ObjectBase");


module.exports = 
class AnsibleBundle extends ObjectBase
{
	/**
	 * @protected
	 * 
	 * @returns {{description: string, type: string, properties: Object<propertyName, {type: string|string[], description: string, required: boolean, enum: undefined|string[], items: undefined|{description: string, type: string}, default: string|number|null|boolean, pattern: string|undefined, minLength: number|undefined, maxLength: string|undefined, readonly: boolean|undefined, required: boolean|undefined}>}}
	 */
	_schemaDefinition()
	{
		return {
			"description": "An Ansible bundle contains an Ansible project as a single archive file, usually .zip",
			"type": "object",
			"properties": {
				"ansible_bundle_id": {
					"type": [
						"integer",
						"null"
					],
					"description": "Unique Ansible bundle ID.",
					"required": false,
					"default": null
				},
				"user_id_owner": {
					"type": [
						"integer",
						"null"
					],
					"description": "Owner. Delegates of this user can manage his Ansible bundles as well. When null, defaults to the API authenticated user.",
					"required": false,
					"readonly": false,
					"default": null
				},
				"user_id_authenticated": {
					"type": [
						"integer",
						"null"
					],
					"description": "The user which last updated the bundle.",
					"required": false,
					"default": null,
					"readonly": true
				},
				"ansible_bundle_title": {
					"type": "string",
					"description": "For example: Hello World!",
					"required": false,
					"default": "No title specified"
				},
				"ansible_bundle_description": {
					"type": [
						"string",
						"null"
					],
					"description": "",
					"required": false,
					"default": null
				},
				"ansible_bundle_type": {
					"enum": [
						"pre_deploy",
						"post_deploy"
					],
					"type": "string",
					"description": "",
					"required": true
				},
				"ansible_bundle_archive_filename": {
					"type": "string",
					"description": "For example: ansible_install_some_stuff.zip",
					"required": true
				},
				"ansible_bundle_archive_contents_base64": {
					"type": [
						"string",
						"null"
					],
					"description": "ZIP archive in base64 format.",
					"required": false,
					"default": null
				},
				"ansible_bundle_created_timestamp": {
					"type": [
						"string",
						"null"
					],
					"description": "Date and time of the Ansible bundle's creation.",
					"default": null,
					"readonly": true
				},
				"ansible_bundle_updated_timestamp": {
					"type": [
						"string",
						"null"
					],
					"description": "Date and time of the Ansible bundle's update (replace).",
					"default": null,
					"readonly": true
				},
				"type": {
					"type": "string",
					"description": "The schema type",
					"enum": [
						"AnsibleBundle"
					],
					"readonly": true
				}
			}
		};
	}
};

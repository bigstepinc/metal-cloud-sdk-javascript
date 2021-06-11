const ObjectBase = require("../ObjectBase");

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
				"ansible_bundle_archive_filename": {
					"type": "string",
					"description": "For example: ansible_install_some_stuff.zip",
					"maxLength": 200,
					"minLength": 1,
					"required": true
				},
				"ansible_bundle_archive_contents_base64": {
					"type": [
						"string",
						"null"
					],
					"description": "ZIP archive in base64 format.",
					"maxLength": 67108864,
					"minLength": 4,
					"required": false,
					"default": null
				},
				"type": {
					"type": "string",
					"description": "The schema type",
					"enum": [
						"AnsibleBundle"
					],
					"readonly": false
				}
			}
		};
	}
};

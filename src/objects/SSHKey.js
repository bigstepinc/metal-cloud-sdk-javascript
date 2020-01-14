const ObjectBase = require("./ObjectBase");


module.exports = 
class SSHKey extends ObjectBase
{
	/**
	 * @protected
	 * 
	 * @returns {{description: string, type: string, properties: Object<propertyName, {type: string|string[], description: string, required: boolean, enum: undefined|string[], items: undefined|{description: string, type: string}, default: string|number|null|boolean, pattern: string|undefined, minLength: number|undefined, maxLength: string|undefined, readonly: boolean|undefined, required: boolean|undefined}>}}
	 */
	_schemaDefinition()
	{
		return {
			"description": "Represents a SSH key added by a user",
			"type": "object",
			"properties": {
				"user_ssh_key_id": {
					"type": [
						"integer",
						"null"
					],
					"description": "An ID to represent the SSH key",
					"default": null,
					"readonly": true
				},
				"user_id": {
					"type": [
						"integer",
						"null",
						"string"
					],
					"description": "The ID of the user to which the SSH key belongs.",
					"default": null,
					"readonly": true
				},
				"user_ssh_key": {
					"type": [
						"string",
						"null"
					],
					"description": "A public key in OpenSSH format.",
					"default": null,
					"readonly": true
				},
				"user_ssh_key_created_timestamp": {
					"type": [
						"string",
						"null"
					],
					"description": "Represents the date and time when the SSH key was created in ISO-8601, UTC timezone format.",
					"default": null,
					"readonly": true
				},
				"user_ssh_key_status": {
					"enum": [
						"active",
						"deleted"
					],
					"type": [
						"string",
						"null"
					],
					"description": "The SSH key status.",
					"default": "active",
					"readonly": true
				},
				"type": {
					"type": "string",
					"description": "The schema type",
					"enum": [
						"SSHKey"
					],
					"readonly": true
				}
			}
		};
	}
};

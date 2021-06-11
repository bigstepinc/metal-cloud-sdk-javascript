const ObjectBase = require("../ObjectBase");

module.exports = 
class SSH extends ObjectBase
{
	/**
	 * @protected
	 * 
	 * @returns {{description: string, type: string, properties: Object<propertyName, {type: string|string[], description: string, required: boolean, enum: undefined|string[], items: undefined|{description: string, type: string}, default: string|number|null|boolean, pattern: string|undefined, minLength: number|undefined, maxLength: string|undefined, readonly: boolean|undefined, required: boolean|undefined}>}}
	 */
	_schemaDefinition()
	{
		return {
			"description": "SSH credentials for the installed OS.",
			"type": "object",
			"properties": {
				"port": {
					"type": [
						"integer",
						"null"
					],
					"description": "The port used to connect through SSH.",
					"minimum": 1,
					"maximum": 65535,
					"required": true,
					"readonly": true
				},
				"username": {
					"type": [
						"string",
						"null"
					],
					"required": true,
					"description": "Administrator account. Only defined for Drives created from a template with an installed OS.",
					"readonly": true
				},
				"initial_password": {
					"type": [
						"string",
						"null"
					],
					"required": true,
					"description": "Administrator account's initial password. Only defined for Drives created from a template with an installed OS.",
					"readonly": true
				},
				"initial_ssh_keys": {
					"description": "The SSH keys (<a:schema>SSHKey<\/a:schema> objects) of all the users that had access to the <a:schema>Drive<\/a:schema> when disk space was allocated. Applicable only to Linux OS's created from a Linux template.",
					"type": "object",
					"additionalProperties": {
						"type": "array",
						"items": {
							"description": "The user's SSH key.",
							"type": "SSHKey"
						},
						"description": "All the SSH keys of users which had access to the Drive when it was deployed. The SSH keys are grouped by the user's email address.",
						"required": true,
						"readonly": true
					}
				},
				"type": {
					"type": "string",
					"description": "The schema type",
					"enum": [
						"SSH"
					],
					"readonly": true
				}
			}
		};
	}
};

const ObjectBase = require("../ObjectBase");

module.exports = 
class SCPResourceLocation extends ObjectBase
{
	/**
	 * @protected
	 * 
	 * @returns {{description: string, type: string, properties: Object<propertyName, {type: string|string[], description: string, required: boolean, enum: undefined|string[], items: undefined|{description: string, type: string}, default: string|number|null|boolean, pattern: string|undefined, minLength: number|undefined, maxLength: string|undefined, readonly: boolean|undefined, required: boolean|undefined}>}}
	 */
	_schemaDefinition()
	{
		return {
			"description": "A file path and SSH client connection options for use with Secure Copy Protocol (SCP).",
			"type": "object",
			"properties": {
				"path": {
					"type": "string",
					"description": "For example: /home/someuser/.ssh/id_rsa.pub. Template-like variables are supported: /home/${{instance_credentials_user}}/.ssh/id_rsa.pub",
					"required": true,
					"minLength": 1,
					"maxLength": 8192
				},
				"ssh_target": {
					"type": "SSHClientOptions",
					"description": "SSH client options such as the host, port, user, password, private keys, etc.",
					"required": true
				},
				"type": {
					"type": "string",
					"description": "The schema type",
					"enum": [
						"SCPResourceLocation"
					],
					"readonly": false,
					"required": true
				}
			}
		};
	}
};

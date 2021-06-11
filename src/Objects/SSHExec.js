const ObjectBase = require("../ObjectBase");

module.exports = 
class SSHExec extends ObjectBase
{
	/**
	 * @protected
	 * 
	 * @returns {{description: string, type: string, properties: Object<propertyName, {type: string|string[], description: string, required: boolean, enum: undefined|string[], items: undefined|{description: string, type: string}, default: string|number|null|boolean, pattern: string|undefined, minLength: number|undefined, maxLength: string|undefined, readonly: boolean|undefined, required: boolean|undefined}>}}
	 */
	_schemaDefinition()
	{
		return {
			"description": "Execute a command on a remote server using the SSH exec functionality (not through a shell).",
			"type": "object",
			"properties": {
				"command": {
					"type": "string",
					"description": "Command line with arguments. For example: curl --help",
					"required": true
				},
				"ssh_target": {
					"type": "SSHClientOptions",
					"description": "SSH client options such as the host, port, user, password, private keys, etc.",
					"required": true
				},
				"timeout": {
					"type": "integer",
					"description": "Timeout in seconds. If the command does not finish within the alloted time the SSH connection is terminated.",
					"required": false,
					"readonly": false,
					"default": 1800
				},
				"type": {
					"type": "string",
					"description": "The schema type",
					"enum": [
						"SSHExec"
					],
					"readonly": false
				}
			}
		};
	}
};

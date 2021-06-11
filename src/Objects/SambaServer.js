const ObjectBase = require("../ObjectBase");

module.exports = 
class SambaServer extends ObjectBase
{
	/**
	 * @protected
	 * 
	 * @returns {{description: string, type: string, properties: Object<propertyName, {type: string|string[], description: string, required: boolean, enum: undefined|string[], items: undefined|{description: string, type: string}, default: string|number|null|boolean, pattern: string|undefined, minLength: number|undefined, maxLength: string|undefined, readonly: boolean|undefined, required: boolean|undefined}>}}
	 */
	_schemaDefinition()
	{
		return {
			"description": "Samba server connection information.",
			"type": "object",
			"properties": {
				"samba_server_hostname": {
					"type": [
						"string",
						"null"
					],
					"description": "Samba server's hostname.",
					"required": false,
					"readonly": false
				},
				"samba_server_windows_kit_share_name": {
					"type": [
						"string",
						"null"
					],
					"description": "Samba server's Windows kit share name.",
					"required": false,
					"readonly": false
				},
				"samba_server_ip": {
					"type": "string",
					"description": "Samba server's ip.",
					"required": true,
					"readonly": false
				},
				"samba_server_username": {
					"type": "string",
					"description": "Samba server's username.",
					"required": true,
					"readonly": false
				},
				"samba_server_password": {
					"type": "string",
					"description": "Samba server's password.",
					"required": true,
					"readonly": false
				},
				"type": {
					"type": "string",
					"description": "The schema type",
					"enum": [
						"SambaServer"
					],
					"readonly": true
				}
			}
		};
	}
};

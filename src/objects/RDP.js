const ObjectBase = require("./ObjectBase");


module.exports = 
class RDP extends ObjectBase
{
	/**
	 * @protected
	 * 
	 * @returns {{description: string, type: string, properties: Object<propertyName, {type: string|string[], description: string, required: boolean, enum: undefined|string[], items: undefined|{description: string, type: string}, default: string|number|null|boolean, pattern: string|undefined, minLength: number|undefined, maxLength: string|undefined, readonly: boolean|undefined, required: boolean|undefined}>}}
	 */
	_schemaDefinition()
	{
		return {
			"description": "RDP credentials for the installed OS.",
			"type": "object",
			"properties": {
				"port": {
					"type": [
						"integer",
						"null"
					],
					"description": "The port used to connect through RDP.",
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
				"type": {
					"type": "string",
					"description": "The schema type",
					"enum": [
						"RDP"
					],
					"readonly": true
				}
			}
		};
	}
};

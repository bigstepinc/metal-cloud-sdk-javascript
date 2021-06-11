const ObjectBase = require("../ObjectBase");

module.exports = 
class WebProxy extends ObjectBase
{
	/**
	 * @protected
	 * 
	 * @returns {{description: string, type: string, properties: Object<propertyName, {type: string|string[], description: string, required: boolean, enum: undefined|string[], items: undefined|{description: string, type: string}, default: string|number|null|boolean, pattern: string|undefined, minLength: number|undefined, maxLength: string|undefined, readonly: boolean|undefined, required: boolean|undefined}>}}
	 */
	_schemaDefinition()
	{
		return {
			"description": "Web proxy connection information.",
			"type": "object",
			"properties": {
				"web_proxy_server_ip": {
					"type": "string",
					"description": "Web proxy's server IP.",
					"pattern": "^([0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3})$",
					"required": true,
					"readonly": false
				},
				"web_proxy_server_port": {
					"type": "integer",
					"description": "Web proxy's port.",
					"minimum": 1,
					"maximum": 65535,
					"required": true,
					"readonly": false
				},
				"web_proxy_username": {
					"type": [
						"string",
						"null"
					],
					"description": "Web proxy's username.",
					"required": false,
					"readonly": false
				},
				"web_proxy_password": {
					"type": [
						"string",
						"null"
					],
					"description": "Web proxy's password.",
					"required": false,
					"readonly": false
				},
				"type": {
					"type": "string",
					"description": "The schema type",
					"enum": [
						"WebProxy"
					],
					"readonly": true
				}
			}
		};
	}
};

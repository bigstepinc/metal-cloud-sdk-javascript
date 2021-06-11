const ObjectBase = require("../ObjectBase");

module.exports = 
class SecureGatewayBackend extends ObjectBase
{
	/**
	 * @protected
	 * 
	 * @returns {{description: string, type: string, properties: Object<propertyName, {type: string|string[], description: string, required: boolean, enum: undefined|string[], items: undefined|{description: string, type: string}, default: string|number|null|boolean, pattern: string|undefined, minLength: number|undefined, maxLength: string|undefined, readonly: boolean|undefined, required: boolean|undefined}>}}
	 */
	_schemaDefinition()
	{
		return {
			"description": "Contains information regarding the backend proxied by secure gateway",
			"type": "object",
			"properties": {
				"name": {
					"type": [
						"string"
					],
					"description": "The name of the backend"
				},
				"ip": {
					"type": [
						"string"
					],
					"description": "The IP of the backend"
				},
				"port": {
					"type": [
						"integer"
					],
					"description": "The port of the backend"
				},
				"check_enabled": {
					"type": [
						"boolean"
					],
					"description": "Should Secure Gateway send probes to check if this backend is working?"
				},
				"ssl_enabled": {
					"type": [
						"boolean"
					],
					"description": "Should Secure Gateway send SSL encrypted requests to the backend?"
				},
				"type": {
					"type": "string",
					"description": "The schema type",
					"enum": [
						"SecureGatewayBackend"
					],
					"readonly": true
				}
			}
		};
	}
};

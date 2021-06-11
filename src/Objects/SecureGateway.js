const ObjectBase = require("../ObjectBase");

module.exports = 
class SecureGateway extends ObjectBase
{
	/**
	 * @protected
	 * 
	 * @returns {{description: string, type: string, properties: Object<propertyName, {type: string|string[], description: string, required: boolean, enum: undefined|string[], items: undefined|{description: string, type: string}, default: string|number|null|boolean, pattern: string|undefined, minLength: number|undefined, maxLength: string|undefined, readonly: boolean|undefined, required: boolean|undefined}>}}
	 */
	_schemaDefinition()
	{
		return {
			"description": "Secure gateway instance metadata",
			"type": "object",
			"properties": {
				"domain": {
					"type": "string",
					"description": "The DNS domain pointing to a secure gateway cluster",
					"required": true
				},
				"VRRPIP": {
					"type": "string",
					"description": "VRRP IP pointing to secure gateway cluster",
					"required": true
				},
				"datacenterName": {
					"type": "string",
					"description": "The datacenter used for this secure gateway cluster",
					"required": true
				},
				"SSLCrtFilePath": {
					"type": "string",
					"description": "The path where SSL certificate is stored",
					"required": true
				},
				"type": {
					"type": "string",
					"description": "The schema type.",
					"enum": [
						"SecureGateway"
					],
					"readonly": true
				},
				"ID": {
					"type": [
						"integer",
						"null"
					],
					"description": "The ID of the server. It is automatically generated and cannot be edited.",
					"default": null,
					"readonly": true
				},
				"reservedPorts": {
					"type": "array",
					"description": "An array with all the reserved ports",
					"readonly": true
				},
				"peers": {
					"type": "array",
					"items": {
						"description": "",
						"type": "SecureGatewayPeer"
					},
					"description": "An array with all the peers",
					"readonly": true
				}
			}
		};
	}
};

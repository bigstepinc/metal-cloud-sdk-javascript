const ObjectBase = require("./ObjectBase");


module.exports = 
class SecureGatewayPeer extends ObjectBase
{
	/**
	 * @protected
	 * 
	 * @returns {{description: string, type: string, properties: Object<propertyName, {type: string|string[], description: string, required: boolean, enum: undefined|string[], items: undefined|{description: string, type: string}, default: string|number|null|boolean, pattern: string|undefined, minLength: number|undefined, maxLength: string|undefined, readonly: boolean|undefined, required: boolean|undefined}>}}
	 */
	_schemaDefinition()
	{
		return {
			"description": "Secure gateway node metadata",
			"type": "object",
			"properties": {
				"name": {
					"type": "string",
					"description": "Node name. It's how haproxy finds nodes in a cluster",
					"required": true
				},
				"IP": {
					"type": "string",
					"description": "Node IP. It's how ansible connects to each pear",
					"required": true
				},
				"port": {
					"type": "integer",
					"description": "The port used by haproxy peers to sync stick tables",
					"required": true
				},
				"privateSSHKey": {
					"type": "string",
					"description": "SSH private key used to allow BSI to connect with ansible",
					"required": true
				},
				"type": {
					"type": "string",
					"description": "The schema type.",
					"enum": [
						"SecureGatewayPeer"
					],
					"readonly": true
				}
			}
		};
	}
};

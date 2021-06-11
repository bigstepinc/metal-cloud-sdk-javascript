const ObjectBase = require("../ObjectBase");

module.exports = 
class SecureGatewayProxy extends ObjectBase
{
	/**
	 * @protected
	 * 
	 * @returns {{description: string, type: string, properties: Object<propertyName, {type: string|string[], description: string, required: boolean, enum: undefined|string[], items: undefined|{description: string, type: string}, default: string|number|null|boolean, pattern: string|undefined, minLength: number|undefined, maxLength: string|undefined, readonly: boolean|undefined, required: boolean|undefined}>}}
	 */
	_schemaDefinition()
	{
		return {
			"description": "Secure gateway proxy mapping with metadata",
			"type": "object",
			"properties": {
				"name": {
					"type": "string",
					"description": "The proxy name.",
					"required": true
				},
				"mode": {
					"type": "string",
					"description": "The proxy protocol: HTTP/TCP",
					"required": true,
					"enum": [
						"HTTP",
						"TCP"
					]
				},
				"start_port": {
					"type": [
						"integer"
					],
					"description": "The start port of the range that the proxy listens to",
					"readonly": true
				},
				"end_port": {
					"type": [
						"integer"
					],
					"description": "The end port of the range that the proxy listens to",
					"readonly": true
				},
				"host": {
					"type": "string",
					"description": "The value of the Host header",
					"required": true
				},
				"frontend_ssl_enabled": {
					"type": [
						"boolean"
					],
					"description": "Should Secure Gateway listen for SSL connections"
				},
				"frontend_authorization_enabled": {
					"type": [
						"boolean"
					],
					"description": "Should Secure Gateway authenthicate users that want to connect to it?"
				},
				"frontend_allowed_client_ips": {
					"type": [
						"array"
					],
					"description": "List of client IPs allowed to connect to the secure gateway"
				},
				"backend_balance_strategy": {
					"type": "string",
					"description": "The strategy used to balance the backends: leastconn / roundrobin",
					"required": true,
					"enum": [
						"leastconnections",
						"roundrobin"
					]
				},
				"backend_servers": {
					"required": true,
					"type": [
						"array"
					],
					"description": "An array listing the backends that are proxied by this proxy",
					"items": {
						"description": "A proxied backend",
						"type": "SecureGatewayBackend"
					}
				},
				"destination_id": {
					"type": [
						"integer",
						"null"
					],
					"description": "The id of the service asociated with this proxy"
				},
				"destination_discriminator": {
					"type": [
						"string",
						"null"
					],
					"enum": [
						"instance",
						"instance_array",
						"custom_group"
					],
					"description": "The type of service that the secure gateway proxies"
				},
				"infrastructure_id": {
					"type": [
						"integer",
						"null"
					],
					"description": "The infrastructure id asociated with this proxy"
				},
				"type": {
					"type": "string",
					"description": "The schema type.",
					"enum": [
						"SecureGatewayProxy"
					],
					"readonly": true
				}
			}
		};
	}
};

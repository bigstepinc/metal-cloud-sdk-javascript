const ObjectBase = require("../ObjectBase");

module.exports = 
class IP extends ObjectBase
{
	/**
	 * @protected
	 * 
	 * @returns {{description: string, type: string, properties: Object<propertyName, {type: string|string[], description: string, required: boolean, enum: undefined|string[], items: undefined|{description: string, type: string}, default: string|number|null|boolean, pattern: string|undefined, minLength: number|undefined, maxLength: string|undefined, readonly: boolean|undefined, required: boolean|undefined}>}}
	 */
	_schemaDefinition()
	{
		return {
			"description": "An IP object contains information regarding an IP address.",
			"type": "object",
			"properties": {
				"ip_id": {
					"type": [
						"integer",
						"null"
					],
					"description": "The ID of the IP address.",
					"default": null,
					"readonly": true
				},
				"ip_type": {
					"enum": [
						"ipv4",
						"ipv6"
					],
					"type": [
						"string",
						"null"
					],
					"description": "The type of the IP address.",
					"default": null,
					"readonly": true
				},
				"ip_human_readable": {
					"type": [
						"string",
						"null"
					],
					"description": "The IP address in natural language.",
					"default": null,
					"readonly": true
				},
				"ip_hex": {
					"type": [
						"string",
						"null"
					],
					"description": "Hexadecimal number representing an 128 or 32 bit unsigned integer.",
					"default": null,
					"readonly": true
				},
				"ip_lease_expires": {
					"type": [
						"string",
						"null"
					],
					"description": "Reserved for future use.",
					"default": null,
					"readonly": true
				},
				"ip_operation": {
					"type": "IPOperation",
					"description": "Current Operation"
				},
				"ip_is_primary": {
					"type": "boolean",
					"description": "Primary IPs are the ones served by DHCP.",
					"readonly": true
				},
				"subnet_id": {
					"type": [
						"integer",
						"null",
						"string"
					],
					"description": "Represents the Subnet this IP is allocated from.",
					"default": null,
					"readonly": true
				},
				"subnet_destination": {
					"enum": [
						"wan",
						"lan",
						"san"
					],
					"type": "string",
					"description": "Type of the network for which the Subnet is destined.",
					"default": "wan",
					"readonly": true
				},
				"subnet_gateway_human_readable": {
					"type": [
						"string",
						"null"
					],
					"description": "The gateway in natural language.",
					"default": null,
					"readonly": true
				},
				"subnet_netmask_human_readable": {
					"type": [
						"string",
						"null"
					],
					"description": "The netmask in natural language.",
					"default": null,
					"readonly": true
				},
				"instance_interface_id": {
					"type": [
						"integer",
						"null"
					],
					"description": "Represents the instance interface this IP address is bound to.",
					"default": null,
					"readonly": true
				},
				"ip_is_system_reserved": {
					"type": "boolean",
					"description": "Extra IPs allocated by our system for internal use by switches.",
					"readonly": true
				},
				"type": {
					"type": "string",
					"description": "The schema type",
					"enum": [
						"IP"
					],
					"readonly": true
				},
				"ip_change_id": {
					"type": [
						"integer",
						"null"
					],
					"description": "This property helps ensure that edit operations don\u2019t overwrite other, more recent changes made to the same object. It gets updated automatically after each successful edit operation.",
					"default": null,
					"required": true
				}
			}
		};
	}
};

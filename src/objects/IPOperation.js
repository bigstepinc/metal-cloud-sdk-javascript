const ObjectBase = require("./ObjectBase");


module.exports = 
class IPOperation extends ObjectBase
{
	/**
	 * @protected
	 * 
	 * @returns {{description: string, type: string, properties: Object<propertyName, {type: string|string[], description: string, required: boolean, enum: undefined|string[], items: undefined|{description: string, type: string}, default: string|number|null|boolean, pattern: string|undefined, minLength: number|undefined, maxLength: string|undefined, readonly: boolean|undefined, required: boolean|undefined}>}}
	 */
	_schemaDefinition()
	{
		return {
			"type": "object",
			"description": "IPOperation contains information regarding the changes that are to be made to a product. Edit and deploy functions have to be called in order to apply the changes. The operation type and status are unique to each operation object.",
			"properties": {
				"instance_interface_id": {
					"type": [
						"integer",
						"null"
					],
					"description": "Represents the instance interface this IP address is bound to.",
					"default": null,
					"readonly": true
				},
				"ip_deploy_status": {
					"type": [
						"string",
						"null"
					],
					"enum": [
						"not_started",
						"ongoing",
						"finished"
					],
					"description": "The status of the deploy process.",
					"readonly": true
				},
				"ip_deploy_type": {
					"type": [
						"string",
						"null"
					],
					"enum": [
						"create",
						"delete",
						"edit",
						"start",
						"stop"
					],
					"description": "The operation applied to the IP.",
					"readonly": true
				},
				"ip_id": {
					"type": [
						"integer",
						"null"
					],
					"description": "The ID of the IP address. It can be used instead of the <code>ip_label<\/code> or <code>subnet_subdomain<\/code> when calling API functions. It is generated automatically and cannot be edited.",
					"readonly": true
				},
				"ip_type": {
					"type": "string",
					"enum": [
						"ipv4",
						"ipv6"
					],
					"description": "The type of the IP address.",
					"readonly": true
				},
				"ip_human_readable": {
					"type": [
						"string",
						"null"
					],
					"description": "The IP address in natural language.",
					"readonly": true
				},
				"ip_hex": {
					"type": [
						"string",
						"null"
					],
					"description": "Hexadecimal number representing an 128 or 32 bit unsigned integer.",
					"readonly": true
				},
				"ip_label": {
					"type": "string",
					"description": "The label of the IP. It is unique, and it is used to form the <code>ip_subdomain<\/code>. Can be used to call API functions.",
					"minLength": 1,
					"maxLength": 63,
					"required": true,
					"pattern": "^[a-zA-Z]{1,1}[a-zA-Z0-9-]{0,61}[a-zA-Z0-9]{1,1}|[a-zA-Z]{1,1}$"
				},
				"ip_subdomain": {
					"type": [
						"string",
						"null"
					],
					"description": "Created automatically based on <code>ip_label<\/code>. It is a unique reference to the IP object.",
					"readonly": true
				},
				"ip_lease_expires": {
					"type": [
						"string",
						"null"
					],
					"description": "Reserved for future use.",
					"readonly": true
				},
				"ip_updated_timestamp": {
					"type": [
						"string",
						"null"
					],
					"description": "ISO 8601 timestamp which holds the date and time when the IP was edited. Example format: 2013-11-29T13:00:01Z.",
					"readonly": true
				},
				"subnet_id": {
					"type": [
						"integer",
						"string",
						"null"
					],
					"description": "Represents the Subnet this IP is allocated from.",
					"readonly": true
				},
				"type": {
					"type": "string",
					"description": "The schema type",
					"enum": [
						"IPOperation"
					],
					"readonly": true
				},
				"ip_change_id": {
					"type": "integer",
					"description": "This property helps ensure that edit operations don’t overwrite other, more recent changes made to the same object. It gets updated automatically after each successful edit operation.",
					"required": true
				}
			},
			"additionalProperties": false
		};
	}
};

const ObjectBase = require("../ObjectBase");

module.exports = 
class SubnetOperation extends ObjectBase
{
	/**
	 * @protected
	 * 
	 * @returns {{description: string, type: string, properties: Object<propertyName, {type: string|string[], description: string, required: boolean, enum: undefined|string[], items: undefined|{description: string, type: string}, default: string|number|null|boolean, pattern: string|undefined, minLength: number|undefined, maxLength: string|undefined, readonly: boolean|undefined, required: boolean|undefined}>}}
	 */
	_schemaDefinition()
	{
		return {
			"description": "SubnetOperation contains information regarding the changes that are to be made to a product. Edit and deploy functions have to be called in order to apply the changes. The operation type and status are unique to each operation object.",
			"type": "object",
			"properties": {
				"subnet_deploy_type": {
					"enum": [
						"create",
						"edit",
						"delete",
						"start",
						"stop"
					],
					"type": [
						"string",
						"null"
					],
					"description": "The operation applied to the Subnet.",
					"readonly": true
				},
				"subnet_deploy_status": {
					"enum": [
						"not_started",
						"ongoing",
						"finished"
					],
					"type": [
						"string",
						"null"
					],
					"description": "The status of the deploy process.",
					"readonly": true
				},
				"subnet_label": {
					"type": "string",
					"description": "The Subnet's label which is unique and it is used to form the <code>subnet_subdomain<\/code>. Can be used to call API functions.",
					"minLength": 1,
					"maxLength": 63,
					"required": true,
					"pattern": "^[a-zA-Z]{1,1}[a-zA-Z0-9-]{0,61}[a-zA-Z0-9]{1,1}|[a-zA-Z]{1,1}$"
				},
				"subnet_subdomain": {
					"type": [
						"string",
						"null"
					],
					"description": "Automatically created based on <code>subnet_label<\/code>. It is a unique reference to the Subnet object.",
					"readonly": true
				},
				"subnet_id": {
					"type": [
						"integer",
						"null",
						"string"
					],
					"description": "The ID of the Subnet which can be used instead of the <code>subnet_label<\/code> or <code>subnet_subdomain<\/code> when calling the API functions. It is automatically generated and cannot be edited.",
					"readonly": true
				},
				"subnet_range_start_hex": {
					"type": [
						"string",
						"null"
					],
					"description": "The hexadecimal start address of the Subnet range.",
					"readonly": true
				},
				"subnet_range_end_hex": {
					"type": [
						"string",
						"null"
					],
					"description": "The hexadecimal end address of the Subnet range.",
					"readonly": true
				},
				"subnet_range_start_human_readable": {
					"type": [
						"string",
						"null"
					],
					"description": "The start address of the Subnet range in dotted notation for IPv4 or full notation for IPv6.",
					"readonly": true
				},
				"subnet_range_end_human_readable": {
					"type": [
						"string",
						"null"
					],
					"description": "The end address of the Subnet range in dotted notation for IPv4 or full notation for IPv6.",
					"readonly": true
				},
				"subnet_type": {
					"enum": [
						"ipv4",
						"ipv6"
					],
					"type": "string",
					"description": "The type of the Subnet.",
					"required": true
				},
				"network_id": {
					"type": [
						"integer",
						"null",
						"string"
					],
					"description": "The ID of the network to which the Subnet belongs.",
					"required": true
				},
				"subnet_netmask_human_readable": {
					"type": [
						"string",
						"null"
					],
					"description": "The netmask in dotted notation for IPv4 or full notation for IPv6. IPv4 example: \"255.255.255.240\"; IPv6 example: \" ffff:ffff:ffff:ffff:0000:0000:0000:0000\".",
					"readonly": true
				},
				"subnet_gateway_human_readable": {
					"type": [
						"string",
						"null"
					],
					"description": "The gateway in dotted notation for IPv4 or full notation for IPv6.",
					"readonly": true
				},
				"subnet_gateway_hex": {
					"type": [
						"string",
						"null"
					],
					"description": "The hexadecimal gateway.",
					"readonly": true
				},
				"subnet_prefix_size": {
					"type": "integer",
					"description": "Subnet prefix size, such as \/30, \/27, etc. For IPv4 subnets can be one of: <code>27<\/code>, <code>28<\/code>, <code>29<\/code>, <code>30<\/code>.",
					"required": true
				},
				"subnet_updated_timestamp": {
					"type": [
						"string",
						"null"
					],
					"description": "ISO 8601 timestamp which holds the date and time when the Subnet was edited. Example format: 2013-11-29T13:00:01Z.",
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
					"required": true
				},
				"type": {
					"type": "string",
					"description": "The schema type.",
					"enum": [
						"SubnetOperation"
					],
					"readonly": true
				},
				"subnet_change_id": {
					"type": "integer",
					"description": "This property helps ensure that edit operations don’t overwrite other, more recent changes made to the same object. It gets updated automatically after each successful edit operation.",
					"required": true
				}
			}
		};
	}
};

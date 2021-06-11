const ObjectBase = require("../ObjectBase");

module.exports = 
class Subnet extends ObjectBase
{
	/**
	 * @protected
	 * 
	 * @returns {{description: string, type: string, properties: Object<propertyName, {type: string|string[], description: string, required: boolean, enum: undefined|string[], items: undefined|{description: string, type: string}, default: string|number|null|boolean, pattern: string|undefined, minLength: number|undefined, maxLength: string|undefined, readonly: boolean|undefined, required: boolean|undefined}>}}
	 */
	_schemaDefinition()
	{
		return {
			"description": "A Subnet is a subdivision of a network, a range of IP addresses minus the first two and the last IP addresses (network, gateway, and broadcast, respectively).",
			"type": "object",
			"properties": {
				"network_id": {
					"type": [
						"integer",
						"string"
					],
					"description": "The ID of the network to which the Subnet belongs.",
					"required": false,
					"readonly": true
				},
				"subnet_label": {
					"type": [
						"string",
						"null"
					],
					"description": "The Subnet's label which is unique and it is used to form the <code>subnet_subdomain<\/code>. Can be used to call API functions.",
					"maxLength": 63,
					"required": false,
					"pattern": "^[a-zA-Z]{1,1}[a-zA-Z0-9-]{0,61}[a-zA-Z0-9]{1,1}|[a-zA-Z]{1,1}$",
					"default": null
				},
				"subnet_subdomain": {
					"type": [
						"string",
						"null"
					],
					"description": "Automatically created based on <code>subnet_label<\/code>. It is a unique reference to the Subnet object.",
					"default": null,
					"readonly": true
				},
				"subnet_id": {
					"type": [
						"integer",
						"null",
						"string"
					],
					"description": "The ID of the Subnet which can be used instead of the <code>subnet_label<\/code> or <code>subnet_subdomain<\/code> when calling the API functions. It is automatically generated and cannot be edited.",
					"default": null,
					"readonly": true
				},
				"subnet_range_start_hex": {
					"type": [
						"string",
						"null"
					],
					"description": "The hexadecimal start address of the Subnet range.",
					"default": null,
					"readonly": true
				},
				"subnet_range_end_hex": {
					"type": [
						"string",
						"null"
					],
					"description": "The hexadecimal end address of the Subnet range.",
					"default": null,
					"readonly": true
				},
				"subnet_range_start_human_readable": {
					"type": [
						"string",
						"null"
					],
					"description": "The start address of the Subnet range in dotted notation for IPv4 or full notation for IPv6.",
					"default": null,
					"readonly": true
				},
				"subnet_range_end_human_readable": {
					"type": [
						"string",
						"null"
					],
					"description": "The end address of the Subnet range in dotted notation for IPv4 or full notation for IPv6.",
					"default": null,
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
				"infrastructure_id": {
					"type": [
						"integer",
						"null",
						"string"
					],
					"description": "The ID of the associated infrastructure.",
					"default": null,
					"readonly": true
				},
				"cluster_id": {
					"type": [
						"integer",
						"null",
						"string"
					],
					"description": "The ID of a cluster in the same infrastructure. This property is reserved for subnets with subnet_automatic_allocation=0, subnet_destination='wan' and (for now) subnet_type='ipv4'.",
					"default": null
				},
				"subnet_netmask_human_readable": {
					"type": [
						"string",
						"null"
					],
					"description": "The netmask in dotted notation for IPv4 or full notation for IPv6. IPv4 example: \"255.255.255.240\"; IPv6 example: \" ffff:ffff:ffff:ffff:0000:0000:0000:0000\".",
					"default": null,
					"readonly": true
				},
				"subnet_gateway_human_readable": {
					"type": [
						"string",
						"null"
					],
					"description": "The gateway in dotted notation for IPv4 or full notation for IPv6.",
					"default": null,
					"readonly": true
				},
				"subnet_gateway_hex": {
					"type": [
						"string",
						"null"
					],
					"description": "The hexadecimal gateway.",
					"default": null,
					"readonly": true
				},
				"subnet_prefix_size": {
					"type": "integer",
					"description": "Subnet prefix size, such as \/30, \/27, etc. For IPv4 subnets can be one of: <code>27<\/code>, <code>28<\/code>, <code>29<\/code>, <code>30<\/code>. For IPv6 subnet can only be <code>64<\/code>.",
					"required": true
				},
				"subnet_service_status": {
					"enum": [
						"ordered",
						"active",
						"suspended",
						"stopped",
						"deleted"
					],
					"type": [
						"string",
						"null"
					],
					"description": "The status of the Subnet.",
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
				"subnet_override_vlan_id": {
					"type": [
						"integer",
						"null"
					],
					"description": "The ipv4 vlan that should override the default from the WAN Network",
					"default": null
				},
				"subnet_created_timestamp": {
					"type": [
						"string",
						"null"
					],
					"description": "ISO 8601 timestamp which holds the date and time when the Subnet was created. Example format: 2013-11-29T13:00:01Z.",
					"default": "0000-00-00T00:00:00Z",
					"readonly": true
				},
				"subnet_updated_timestamp": {
					"type": [
						"string",
						"null"
					],
					"description": "ISO 8601 timestamp which holds the date and time when the Subnet was edited. Example format: 2013-11-29T13:00:01Z.",
					"default": "0000-00-00T00:00:00Z",
					"readonly": true
				},
				"subnet_operation": {
					"type": [
						"SubnetOperation",
						"null"
					],
					"description": "The operation type, operation status and modified Subnet object.",
					"default": null,
					"readonly": true
				},
				"subnet_from_subnet_pool_forced_only": {
					"type": "boolean",
					"description": "Specifies if the subnet is allocated from a forced only subnet pool",
					"readonly": true
				},
				"type": {
					"type": "string",
					"description": "The schema type.",
					"enum": [
						"Subnet"
					],
					"readonly": true
				},
				"subnet_change_id": {
					"type": [
						"integer",
						"null"
					],
					"description": "This property helps ensure that edit operations don\u2019t overwrite other, more recent changes made to the same object. It gets updated automatically after each successful edit operation.",
					"default": null,
					"required": true
				},
				"subnet_automatic_allocation": {
					"type": "boolean",
					"description": "Specifies if subnet will be used for allocating IP addresses via DHCP",
					"default": true,
					"required": true
				}
			}
		};
	}
};

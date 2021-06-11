const ObjectBase = require("../ObjectBase");

module.exports = 
class SubnetPoolLAN extends ObjectBase
{
	/**
	 * @protected
	 * 
	 * @returns {{description: string, type: string, properties: Object<propertyName, {type: string|string[], description: string, required: boolean, enum: undefined|string[], items: undefined|{description: string, type: string}, default: string|number|null|boolean, pattern: string|undefined, minLength: number|undefined, maxLength: string|undefined, readonly: boolean|undefined, required: boolean|undefined}>}}
	 */
	_schemaDefinition()
	{
		return {
			"description": "",
			"type": "object",
			"properties": {
				"subnet_pool_lan_prefix_human_readable": {
					"description": "The network prefix in human readable format.",
					"type": "string",
					"required": true
				},
				"subnet_pool_lan_prefix_size": {
					"description": "The subnet pool prefix size value; ex: \/24.",
					"type": "integer",
					"required": true
				},
				"subnet_pool_lan_type": {
					"description": "Must be <code>ipv4<\/code> or <code>ipv6<\/code>.",
					"type": "string",
					"required": true,
					"enum": [
						"ipv4",
						"ipv6"
					]
				},
				"subnet_pool_lan_range_start_human_readable": {
					"type": [
						"string",
						"null"
					],
					"description": "The start address of the Subnet pool range in dotted notation for IPv4 or full notation for IPv6.",
					"default": null
				},
				"subnet_pool_lan_range_end_human_readable": {
					"type": [
						"string",
						"null"
					],
					"description": "The end address of the Subnet pool range in dotted notation for IPv4 or full notation for IPv6.",
					"default": null
				},
				"subnets_prefix_size": {
					"description": "The underyling subnets prefix size value; ex: \/24.",
					"type": "integer",
					"required": true
				},
				"type": {
					"type": "string",
					"description": "The schema type.",
					"enum": [
						"SubnetPoolLAN"
					],
					"readonly": true
				}
			}
		};
	}
};

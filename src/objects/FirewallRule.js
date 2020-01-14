const ObjectBase = require("./ObjectBase");


module.exports = 
class FirewallRule extends ObjectBase
{
	/**
	 * @protected
	 * 
	 * @returns {{description: string, type: string, properties: Object<propertyName, {type: string|string[], description: string, required: boolean, enum: undefined|string[], items: undefined|{description: string, type: string}, default: string|number|null|boolean, pattern: string|undefined, minLength: number|undefined, maxLength: string|undefined, readonly: boolean|undefined, required: boolean|undefined}>}}
	 */
	_schemaDefinition()
	{
		return {
			"description": "A Firewall rule.",
			"type": "object",
			"properties": {
				"firewall_rule_description": {
					"type": "string",
					"default": "Rule description.",
					"description": "Describes the FirewallRule.",
					"maxLength": 100,
					"minLength": 1,
					"pattern": "^[^<>'\"&\\$\\r\\n`%]*$",
					"required": true
				},
				"firewall_rule_port_range_start": {
					"type": [
						"integer",
						"null"
					],
					"description": "The port range start of the firewall rule. When null, no ports are being taken into consideration when applying the firewall rule.",
					"minimum": 1,
					"maximum": 65535,
					"default": null,
					"required": true
				},
				"firewall_rule_port_range_end": {
					"type": [
						"integer",
						"null"
					],
					"description": "The port range end of the firewall rule. When null, no ports are being taken into consideration when applying the firewall rule.",
					"minimum": 1,
					"maximum": 65535,
					"default": null,
					"required": true
				},
				"firewall_rule_source_ip_address_range_start": {
					"type": [
						"string",
						"null"
					],
					"description": "The IP address range start of the firewall rule. When null, no source IP address is taken into consideration when applying the firewall rule.",
					"default": null,
					"required": true
				},
				"firewall_rule_source_ip_address_range_end": {
					"type": [
						"string",
						"null"
					],
					"description": "The IP address range end of the firewall rule. When null, no source IP address is taken into consideration when applying the firewall rule.",
					"default": null,
					"required": true
				},
				"firewall_rule_destination_ip_address_range_start": {
					"type": [
						"string",
						"null"
					],
					"description": "The IP address range start of the firewall rule. When null, no destination IP address is taken into consideration when applying the firewall rule.",
					"default": null,
					"required": true
				},
				"firewall_rule_destination_ip_address_range_end": {
					"type": [
						"string",
						"null"
					],
					"description": "The IP address range end of the firewall rule. When null, no destination IP address is taken into consideration when applying the firewall rule.",
					"default": null,
					"required": true
				},
				"firewall_rule_protocol": {
					"enum": [
						"all",
						"icmp",
						"tcp",
						"udp"
					],
					"type": "string",
					"description": "The protocol of the firewall rule.",
					"default": "all",
					"required": true
				},
				"firewall_rule_ip_address_type": {
					"enum": [
						"ipv4",
						"ipv6"
					],
					"type": "string",
					"description": "The IP address type of the firewall rule.",
					"required": true
				},
				"firewall_rule_enabled": {
					"type": "boolean",
					"description": "Specifies if the firewall rule will be applied or not.",
					"default": true,
					"required": true
				},
				"type": {
					"type": "string",
					"description": "The schema type.",
					"enum": [
						"FirewallRule"
					],
					"readonly": true
				}
			}
		};
	}
};

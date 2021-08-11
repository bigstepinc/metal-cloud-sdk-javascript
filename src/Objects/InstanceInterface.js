const ObjectBase = require("../ObjectBase");

module.exports = 
class InstanceInterface extends ObjectBase
{
	/**
	 * @protected
	 * 
	 * @returns {{description: string, type: string, properties: Object<propertyName, {type: string|string[], description: string, required: boolean, enum: undefined|string[], items: undefined|{description: string, type: string}, default: string|number|null|boolean, pattern: string|undefined, minLength: number|undefined, maxLength: string|undefined, readonly: boolean|undefined, required: boolean|undefined}>}}
	 */
	_schemaDefinition()
	{
		return {
			"description": "Instance interfaces are created automatically when instances are created. Subnets are added on networks and then IP addresses are associated automatically or manually through the API to instance interfaces.",
			"type": "object",
			"properties": {
				"instance_interface_label": {
					"type": [
						"null",
						"string"
					],
					"description": "The instance_interface's label which is unique and it is used to form the <code>instance_interface_subdomain<\/code>. Can be used to call API functions.",
					"required": false,
					"readonly": true,
					"default": null
				},
				"instance_interface_subdomain": {
					"type": [
						"string",
						"null"
					],
					"description": "Automatically created based on <code>instance_interface_label<\/code>. It is a unique reference to the InstanceInterface object.",
					"default": null,
					"readonly": true
				},
				"instance_interface_id": {
					"type": [
						"integer",
						"null"
					],
					"description": "The ID of the instance interface.",
					"default": null,
					"readonly": true
				},
				"instance_id": {
					"type": [
						"integer",
						"null",
						"string"
					],
					"description": "The ID of the instance to which the interface belongs.",
					"default": null,
					"readonly": true
				},
				"network_id": {
					"type": [
						"integer",
						"null",
						"string"
					],
					"description": "The ID of the network to which the instance's interface is connected.",
					"default": null,
					"readonly": true
				},
				"instance_interface_lagg_indexes": {
					"type": "array",
					"description": "Array of interface indexes which are part of a link aggregation together with this interface. The current interface is never included in this array, even if part of a link aggregation.",
					"default": [
						
					],
					"readonly": true
				},
				"instance_interface_index": {
					"type": [
						"integer",
						"null"
					],
					"description": "Shows the index of the interface. Numbering starts at 0.",
					"default": null,
					"readonly": true
				},
				"instance_interface_capacity_mbps": {
					"type": [
						"integer",
						"null"
					],
					"description": "Shows the capacity of the instance.",
					"default": null,
					"readonly": true
				},
				"instance_interface_service_status": {
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
					"description": "The status of the instance interface.",
					"default": null,
					"readonly": true
				},
				"server_interface": {
					"type": "ServerInterface",
					"description": "The corresponding <a:schema>ServerInterface<\/a:schema> object.",
					"readonly": true
				},
				"instance_interface_operation": {
					"type": [
						"InstanceInterfaceOperation",
						"null"
					],
					"description": "The operation type, operation status and modified Instance Interface object.",
					"default": null,
					"readonly": true
				},
				"instance_interface_ips": {
					"type": "array",
					"description": "All <a:schema>IP<\/a:schema> objects from the instance interface.",
					"items": {
						"description": "",
						"type": "IP"
					},
					"readonly": true
				},
				"type": {
					"type": "string",
					"description": "The schema type.",
					"enum": [
						"InstanceInterface"
					],
					"readonly": true
				},
				"instance_interface_change_id": {
					"type": [
						"integer",
						"null"
					],
					"description": "This value helps check against edit requests on expired objects.",
					"default": null,
					"required": true
				},
				"instance_interface_acl_identifier": {
					"type": [
						"integer",
						"null"
					],
					"description": "Instance interface acl identifier",
					"default": null
				},
				"instance_interface_gui_settings_json": {
					"type": [
						"null",
						"string"
					],
					"description": "instance_interface_gui_settings_json",
					"default": null
				},
				"instance_interface_updated_timestamp": {
					"type": [
						"null",
						"string"
					],
					"description": "instance_interface_updated_timestamp",
					"default": null
				},
				"instance_interface_san_ip_human_readable": {
					"type": [
						"null",
						"string"
					],
					"description": "instance_interface_san_ip_human_readable",
					"default": null
				},
				"dns_subdomain_permanent_id": {
					"type": [
						"null",
						"integer"
					],
					"description": "dns_subdomain_permanent_id",
					"default": null
				},
				"infrastructure_id": {
					"type": [
						"null",
						"integer"
					],
					"description": "infrastructure_id",
					"default": null
				},
				"instance_interface_san_netmask_human_readable": {
					"type": [
						"null",
						"string"
					],
					"description": "instance_interface_san_netmask_human_readable",
					"default": null
				},
				"instance_interface_force_quarantine_during_deploy": {
					"type": "boolean",
					"description": "instance_interface_force_quarantine_during_deploy",
					"default": false,
					"required": false
				},
				"instance_interface_dirty_bit": {
					"type": "boolean",
					"description": "instance_interface_dirty_bit",
					"default": false,
					"required": false
				},
				"instance_interface_is_api_private": {
					"type": "boolean",
					"description": "instance_interface_is_api_private",
					"default": false,
					"required": false
				},
				"instance_interface_subdomain_permanent": {
					"type": [
						"null",
						"string"
					],
					"description": "instance_interface_subdomain_permanent",
					"default": null,
					"required": false
				},
				"server_interface_id": {
					"type": [
						"null",
						"integer"
					],
					"description": "server_interface_id",
					"default": null,
					"required": false
				},
				"instance_interface_san_gateway_human_readable": {
					"type": [
						"null",
						"string"
					],
					"description": "instance_interface_san_gateway_human_readable",
					"default": null,
					"required": false
				},
				"network_equipment_subnet_pool_san_id": {
					"type": [
						"null",
						"integer"
					],
					"description": "network_equipment_subnet_pool_san_id",
					"default": null,
					"required": false
				},
				"instance_interface_created_timestamp": {
					"type": "string",
					"description": "instance_interface_created_timestamp",
					"default": null
				},
				"instance_interface_vlan_identifier": {
					"type": [
						"null",
						"integer"
					],
					"description": "instance_interface_vlan_identifier",
					"default": null,
					"required": false
				},
				"dns_subdomain_id": {
					"type": [
						"null",
						"integer"
					],
					"description": "dns_subdomain_id",
					"default": null,
					"required": false
				},
				"instance_interface_subnet_pool_san_index": {
					"type": [
						"null",
						"integer"
					],
					"description": "instance_interface_subnet_pool_san_index",
					"default": null,
					"required": false
				}
			}
		};
	}
};

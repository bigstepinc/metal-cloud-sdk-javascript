const ObjectBase = require("./ObjectBase");


module.exports = 
class InstanceArrayOperation extends ObjectBase
{
	/**
	 * @protected
	 * 
	 * @returns {{description: string, type: string, properties: Object<propertyName, {type: string|string[], description: string, required: boolean, enum: undefined|string[], items: undefined|{description: string, type: string}, default: string|number|null|boolean, pattern: string|undefined, minLength: number|undefined, maxLength: string|undefined, readonly: boolean|undefined, required: boolean|undefined}>}}
	 */
	_schemaDefinition()
	{
		return {
			"description": "InstanceArrayOperation contains information regarding the changes that are to be made to a product. Edit and deploy functions have to be called in order to apply the changes. The operation type and status are unique to each operation object.",
			"type": "object",
			"properties": {
				"instance_array_deploy_status": {
					"enum": [
						"not_started",
						"ongoing",
						"finished"
					],
					"type": "string",
					"description": "The status of the deploy process.",
					"readonly": true
				},
				"instance_array_boot_method": {
					"enum": [
						"pxe_iscsi",
						"local_drives"
					],
					"type": "string",
					"default": "pxe_iscsi",
					"description": "Determines wether the server will boot from local drives or from NAS over iSCSI."
				},
				"instance_array_deploy_type": {
					"enum": [
						"create",
						"delete",
						"edit",
						"start",
						"stop",
						"suspend"
					],
					"type": [
						"string",
						"null"
					],
					"description": "The operation applied to the InstanceArray.",
					"readonly": true
				},
				"instance_array_label": {
					"type": "string",
					"description": "The InstanceArray's unique label is used to create the <code>instance_array_subdomain<\/code>. It is editable and can be used to call API functions.",
					"minLength": 1,
					"maxLength": 63,
					"required": true,
					"pattern": "^[a-zA-Z]{1,1}[a-zA-Z0-9-]{0,61}[a-zA-Z0-9]{1,1}|[a-zA-Z]{1,1}$"
				},
				"instance_array_subdomain": {
					"type": [
						"string",
						"null"
					],
					"description": "Automatically created based on <code>instance_array_label<\/code>. It is a unique reference to the InstanceArray object.",
					"readonly": true
				},
				"instance_array_id": {
					"type": [
						"integer",
						"null",
						"string"
					],
					"description": "The ID of the InstanceArray which can be used instead of the <code>instance_array_label<\/code> or <code>instance_array_subdomain<\/code> when calling the API functions. It is automatically generated and cannot be edited.",
					"readonly": true
				},
				"instance_array_instance_count": {
					"type": "integer",
					"description": "The number of instances to be created on the InstanceArray.",
					"minimum": 0
				},
				"instance_array_ipv4_subnet_create_auto": {
					"type": "boolean",
					"description": "If <code>true<\/code> and no Subnet has already been allocated, a public IPv4 will be allocated. If there are no Subnets with free IPs available, a public Subnet will be automatically created, as many times as needed."
				},
				"instance_array_virtual_interfaces_enabled": {
					"type": "boolean",
					"description": "Enable virtual interfaces"
				},
				"instance_array_ip_allocate_auto": {
					"type": "boolean",
					"description": "Automatically allocate IP addresses to child Instance's InstanceInterface elements."
				},
				"instance_array_ram_gbytes": {
					"type": "integer",
					"minimum": 0,
					"maximum": 1024,
					"description": "The minimum RAM capacity of each instance."
				},
				"instance_array_processor_count": {
					"type": "integer",
					"minimum": 0,
					"maximum": 16,
					"description": "The CPU count on each instance."
				},
				"instance_array_processor_core_mhz": {
					"type": "integer",
					"minimum": 0,
					"maximum": 16000,
					"description": "The minimum clock speed of a CPU."
				},
				"instance_array_processor_core_count": {
					"type": "integer",
					"minimum": 0,
					"maximum": 500,
					"description": "The minimum cores of a CPU."
				},
				"instance_array_disk_count": {
					"type": "integer",
					"minimum": 0,
					"maximum": 500,
					"description": "The minimum number of physical disks.",
					"default": 0
				},
				"instance_array_disk_size_mbytes": {
					"type": "integer",
					"minimum": 0,
					"maximum": 4194304,
					"description": "The minimum size of a single disk.",
					"default": 0
				},
				"instance_array_disk_types": {
					"type": [
						"array",
						"null"
					],
					"description": "The types of physical disks.",
					"default": [
						
					]
				},
				"instance_array_updated_timestamp": {
					"type": [
						"string",
						"null"
					],
					"description": "ISO 8601 timestamp which holds the date and time when the InstanceArray was edited. Example format: 2013-11-29T13:00:01Z.",
					"readonly": true
				},
				"drive_array_id_boot": {
					"type": [
						"integer",
						"null",
						"string"
					],
					"description": "The Drive array ID associated to the InstanceArray."
				},
				"instance_array_gui_settings_json": {
					"type": "string",
					"description": "Reserved for GUI users.",
					"readonly": true
				},
				"type": {
					"type": "string",
					"description": "The schema type.",
					"enum": [
						"InstanceArrayOperation"
					],
					"readonly": true
				},
				"instance_array_change_id": {
					"type": "integer",
					"description": "This property helps ensure that edit operations don’t overwrite other, more recent changes made to the same object. It gets updated automatically after each successful edit operation.",
					"required": true
				},
				"instance_array_interfaces": {
					"type": "array",
					"items": {
						"description": "InstanceArrayInterfaceOperation objects",
						"type": "InstanceArrayInterfaceOperation"
					},
					"description": "An array of <a:schema>InstanceArrayInterfaceOperation<\/a:schema> objects indexed from 0 to 3.",
					"default": [
						
					]
				},
				"instance_array_firewall_managed": {
					"type": "boolean",
					"description": "When set to false, all firewall rules on the server are removed and the firewall rules specified in the instance_array_firewall_rules property will no longer be applied on the server. When set to true, the firewall rules specified in the instance_array_firewall_rules property will be applied on the server."
				},
				"instance_array_firewall_rules": {
					"type": [
						"array",
						"null"
					],
					"items": {
						"type": "FirewallRule",
						"description": "Contains the firewall rules."
					},
					"default": null,
					"description": "Contains the firewall rules (an array of <a:schema>FirewallRule<\/a:schema> objects). When creating a new InstanceArray, if null, default firewall rules are applied (allow any source ICMP, any private IPv4, and others)."
				},
				"volume_template_id": {
					"type": [
						"integer",
						"null",
						"string"
					],
					"description": "The volume template ID or name. ",
					"default": null
				}
			}
		};
	}
};

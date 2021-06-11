const ObjectBase = require("../ObjectBase");

module.exports = 
class ContainerPlatform extends ObjectBase
{
	/**
	 * @protected
	 * 
	 * @returns {{description: string, type: string, properties: Object<propertyName, {type: string|string[], description: string, required: boolean, enum: undefined|string[], items: undefined|{description: string, type: string}, default: string|number|null|boolean, pattern: string|undefined, minLength: number|undefined, maxLength: string|undefined, readonly: boolean|undefined, required: boolean|undefined}>}}
	 */
	_schemaDefinition()
	{
		return {
			"description": "A centralised view of all child ContainerArray and Container products.",
			"type": "object",
			"properties": {
				"container_platform_label": {
					"type": [
						"string",
						"null"
					],
					"description": "The ContainerPlatform's unique label is used to create the <code>container_platform_subdomain<\/code>. It is editable and can be used to call API functions.",
					"minLength": 1,
					"maxLength": 63,
					"required": false,
					"pattern": "^[a-zA-Z]{1,1}[a-zA-Z0-9-]{0,61}[a-zA-Z0-9]{1,1}|[a-zA-Z]{1,1}$",
					"default": null
				},
				"container_platform_subdomain": {
					"type": [
						"string",
						"null"
					],
					"description": "Automatically created based on <code>container_platform_label<\/code>. It is a unique reference to the ContainerPlatform object.",
					"default": null,
					"readonly": true
				},
				"container_platform_maximum_hosts_count": {
					"type": [
						"integer",
						"string"
					],
					"description": "The maximum number of hosts that should be used for all existing or future child ContainerArray products.",
					"required": false,
					"readonly": false,
					"default": 10
				},
				"container_platform_minimum_hosts_count": {
					"type": [
						"integer",
						"string"
					],
					"description": "The desired minimum number of hosts that should be used for all existing or future child ContainerArray products.",
					"required": false,
					"readonly": false,
					"default": 0
				},
				"container_platform_id": {
					"type": [
						"integer",
						"null",
						"string"
					],
					"description": "The ID of the ContainerPlatform which can be used instead of the <code>container_platform_label<\/code> or <code>container_platform_subdomain<\/code> when calling the API functions. It is automatically generated and cannot be edited.",
					"default": null,
					"readonly": true
				},
				"infrastructure_id": {
					"type": [
						"integer",
						"null",
						"string"
					],
					"description": "Represents the infrastructure ID to which the ContainerPlatform belongs.",
					"default": null,
					"readonly": true
				},
				"container_platform_data_drive_size_mbytes": {
					"type": "integer",
					"minimum": 40960,
					"maximum": 3072000,
					"default": 102400,
					"description": "Represents the capacity of the Data Drive.",
					"required": true
				},
				"container_platform_service_status": {
					"enum": [
						"ordered",
						"active",
						"stopped",
						"deleted",
						"suspended"
					],
					"type": [
						"string",
						"null"
					],
					"description": "The status of the ContainerPlatform.",
					"default": null,
					"readonly": true
				},
				"container_platform_operation": {
					"type": [
						"ContainerPlatformOperation",
						"null"
					],
					"description": "The operation type, operation status and modified ContainerPlatform object.",
					"default": null,
					"readonly": true
				},
				"container_platform_gui_settings_json": {
					"type": "string",
					"description": "Reserved for GUI users.",
					"default": "",
					"readonly": true
				},
				"container_platform_firewall_managed": {
					"type": "boolean",
					"description": "When set to true, all firewall rules on the underlying hosts are removed and the firewall rules specified in the instance_array_firewall_rules property are applied on the servers. When set to false, the firewall rules specified in the instance_array_firewall_rules property are ignored. The feature only works for drives that are using a supported OS template.",
					"default": true
				},
				"container_platform_hardware_configuration": {
					"type": [
						"array",
						"null"
					],
					"description": "Contains the hardware configuration for this ContainerPlatform.",
					"default": null
				},
				"container_platform_hosts": {
					"type": [
						"array",
						"null"
					],
					"description": "Information about hosts regarding servers to allocate"
				},
				"container_platform_firewall_rules": {
					"type": "array",
					"items": {
						"type": "FirewallRule",
						"description": "Contains the firewall rules."
					},
					"default": [
						
					],
					"description": "Contains the firewall rules."
				},
				"type": {
					"type": "string",
					"description": "The schema type",
					"enum": [
						"ContainerPlatform"
					],
					"readonly": true
				},
				"container_platform_change_id": {
					"type": [
						"integer",
						"null"
					],
					"description": "This property helps ensure that edit operations don't overwrite other, more recent changes made to the same object. It gets updated automatically after each successful edit operation.",
					"default": null,
					"required": true
				},
				"container_platform_resource_report": {
					"type": [
						"array",
						"null"
					],
					"description": "Contains the resource report of the ContainerPlatform.",
					"default": null,
					"required": false,
					"readonly": true
				}
			}
		};
	}
};

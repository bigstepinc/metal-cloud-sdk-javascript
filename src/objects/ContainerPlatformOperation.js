const ObjectBase = require("./ObjectBase");


module.exports = 
class ContainerPlatformOperation extends ObjectBase
{
	/**
	 * @protected
	 * 
	 * @returns {{description: string, type: string, properties: Object<propertyName, {type: string|string[], description: string, required: boolean, enum: undefined|string[], items: undefined|{description: string, type: string}, default: string|number|null|boolean, pattern: string|undefined, minLength: number|undefined, maxLength: string|undefined, readonly: boolean|undefined, required: boolean|undefined}>}}
	 */
	_schemaDefinition()
	{
		return {
			"description": "ContainerPlatformOperation contains information regarding the changes that are to be made to a product. Edit and deploy functions have to be called in order to apply the changes. The operation type and status are unique to each operation object.",
			"type": "object",
			"properties": {
				"container_platform_deploy_status": {
					"enum": [
						"not_started",
						"ongoing",
						"finished"
					],
					"type": "string",
					"description": "The status of the deploy process.",
					"readonly": true
				},
				"container_platform_deploy_type": {
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
					"description": "The operation to be applied to the ContainerPlatform.",
					"readonly": true
				},
				"container_platform_label": {
					"type": "string",
					"description": "The ContainerPlatform's unique label is used to create the <code>container_platform_subdomain<\/code>. It is editable and can be used to call API functions.",
					"minLength": 1,
					"maxLength": 63,
					"required": true,
					"pattern": "^[a-zA-Z]{1,1}[a-zA-Z0-9-]{0,61}[a-zA-Z0-9]{1,1}|[a-zA-Z]{1,1}$"
				},
				"container_platform_subdomain": {
					"type": [
						"string",
						"null"
					],
					"description": "Automatically created based on <code>container_platform_label<\/code>. It is a unique reference to the ContainerPlatform object.",
					"readonly": true
				},
				"container_platform_maximum_hosts_count": {
					"type": [
						"integer",
						"string"
					],
					"description": "The desired maximum number of hosts that should be used for all existing or future child ContainerArray products.",
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
				"container_platform_data_drive_size_mbytes": {
					"type": "integer",
					"minimum": 40960,
					"maximum": 3072000,
					"default": 102400,
					"description": "Represents the capacity of the Data Drive.",
					"required": true
				},
				"container_platform_id": {
					"type": [
						"integer",
						"null",
						"string"
					],
					"description": "The ID of the ContainerPlatform which can be used instead of the <code>container_platform_label<\/code> or <code>container_platform_subdomain<\/code> when calling the API functions. It is automatically generated and cannot be edited.",
					"readonly": true
				},
				"container_platform_hardware_configuration": {
					"type": [
						"array",
						"null"
					],
					"description": "Contains the hardware configuration for this ContainerPlatform.",
					"default": null
				},
				"container_platform_firewall_managed": {
					"type": "boolean",
					"description": "When set to false, all firewall rules on the underlying hosts are removed and the firewall rules specified in the container_platform_firewall_rules property will no longer be applied on the underlying hosts. When set to true, the firewall rules specified in the container_platform_firewall_rules property will be applied on the underlying hosts."
				},
				"container_platform_firewall_rules": {
					"type": "array",
					"items": {
						"type": "FirewallRule",
						"description": "Contains the firewall rules."
					},
					"description": "Contains the firewall rules."
				},
				"type": {
					"type": "string",
					"description": "The schema type",
					"enum": [
						"ContainerPlatformOperation"
					],
					"readonly": true
				},
				"container_platform_change_id": {
					"type": "integer",
					"description": "This property helps ensure that edit operations don't overwrite other, more recent changes made to the same object. It gets updated automatically after each successful edit operation.",
					"required": true
				}
			}
		};
	}
};

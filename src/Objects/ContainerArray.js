const ObjectBase = require("../ObjectBase");

module.exports = 
class ContainerArray extends ObjectBase
{
	/**
	 * @protected
	 * 
	 * @returns {{description: string, type: string, properties: Object<propertyName, {type: string|string[], description: string, required: boolean, enum: undefined|string[], items: undefined|{description: string, type: string}, default: string|number|null|boolean, pattern: string|undefined, minLength: number|undefined, maxLength: string|undefined, readonly: boolean|undefined, required: boolean|undefined}>}}
	 */
	_schemaDefinition()
	{
		return {
			"description": "A ContainerArray is a group of containers which share the same workload (thus enabling scalability).",
			"type": "object",
			"properties": {
				"container_array_id": {
					"type": [
						"integer",
						"null",
						"string"
					],
					"description": "The ID of the ContainerArray which can be used instead of the <code>container_array_label<\/code> or <code>container_array_subdomain<\/code> when calling the API functions. It is automatically generated and cannot be edited.",
					"default": null,
					"readonly": true
				},
				"container_array_change_id": {
					"type": [
						"integer",
						"null"
					],
					"description": "This property helps ensure that edit operations don\u2019t overwrite other, more recent changes made to the same object. It gets updated automatically after each successful edit operation.",
					"default": null,
					"required": true
				},
				"container_cluster_id": {
					"type": "integer",
					"description": "The ContainerArray is a child of a ContainerCluster.",
					"readonly": true
				},
				"infrastructure_id": {
					"type": [
						"integer",
						"null",
						"string"
					],
					"description": "Represents the infrastructure ID to which the ContainerArray belongs.",
					"default": null,
					"readonly": true
				},
				"container_array_label": {
					"type": [
						"string",
						"null"
					],
					"description": "The ContainerArray's unique label is used to create the <code>container_array_subdomain<\/code>. It is editable and can be used to call API functions.",
					"minLength": 1,
					"maxLength": 63,
					"required": false,
					"pattern": "^[a-zA-Z]{1,1}[a-zA-Z0-9-]{0,61}[a-zA-Z0-9]{1,1}|[a-zA-Z]{1,1}$",
					"default": null
				},
				"container_array_subdomain": {
					"type": [
						"string",
						"null"
					],
					"description": "Automatically created based on <code>container_array_label<\/code>. It is a unique reference to the ContainerArray object.",
					"default": null,
					"readonly": true
				},
				"container_array_subdomain_internal": {
					"type": [
						"string",
						"null"
					],
					"description": "Automatically created based on <code>container_array_id<\/code>. It is a unique reference to the ContainerArray object to be used within the ContainerPlatform network.",
					"default": null,
					"readonly": true
				},
				"container_array_load_balancer_subdomain_internal": {
					"type": [
						"string",
						"null"
					],
					"description": "Automatically created based on <code>container_array_id<\/code>. It is a unique reference to the load balancer of the ContainerArray object to be used within the ContainerPlatform network.",
					"default": null,
					"readonly": true
				},
				"container_array_service_status": {
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
					"description": "The status of the ContainerArray.",
					"default": null,
					"readonly": true
				},
				"container_cluster_role_group": {
					"type": "string",
					"description": "",
					"enum": [
						"none",
						"spark_master",
						"spark_workers",
						"zookeeper_nodes",
						"kafka_brokers",
						"zoomdata_node",
						"postgresql_node",
						"sparksql_node",
						"elasticsearch_node",
						"streamsets_node"
					],
					"default": "none",
					"readonly": true
				},
				"container_array_operation": {
					"type": [
						"ContainerArrayOperation",
						"null"
					],
					"description": "The operation type, operation status and modified ContainerArray object.",
					"default": null,
					"readonly": true
				},
				"container_array_interfaces": {
					"type": "array",
					"items": {
						"description": "ContainerArrayInterface objects",
						"type": "ContainerArrayInterface"
					},
					"description": "All <a:schema>ContainerArrayInterface<\/a:schema> objects.",
					"default": [
						
					],
					"readonly": true
				},
				"container_array_ram_mbytes": {
					"type": "integer",
					"minimum": 32,
					"maximum": 30720,
					"description": "The resource requirements in terms of RAM for a Container of the ContainerArray.",
					"default": 1024
				},
				"container_array_processor_core_count": {
					"type": "number",
					"minimum": 0.1,
					"maximum": 16,
					"description": "The resource requirements in terms of CPU cores for a Container of the ContainerArray.",
					"default": 1
				},
				"container_array_container_count": {
					"type": "integer",
					"description": "The number of Containers of the ContainerArray.",
					"minimum": 0,
					"maximum": 64,
					"default": 1
				},
				"container_array_application_image": {
					"type": [
						"string",
						"null"
					],
					"description": "The Docker image of the ContainerArray.",
					"default": "bigstepinc\/hello-world",
					"pattern": "^(([a-zA-Z0-9]|[a-zA-Z0-9][a-zA-Z0-9-]*[a-zA-Z0-9])(\\.([a-zA-Z0-9]|[a-zA-Z0-9][a-zA-Z0-9-]*[a-zA-Z0-9]))*(\\:[0-9]+)?\\/)?([a-z0-9]+(([._]|__|[-]*)[a-z0-9]+)*)(\\/[a-z0-9]+(([._]|__|[-]*)*[a-z0-9]+)*)*(\\:[\\w][\\w.-]{0,127})?(\\@[A-Za-z][A-Za-z0-9]*(?:[-_+.][A-Za-z][A-Za-z0-9]*)*[:][[:xdigit:]]{32,})?$",
					"readonly": false
				},
				"container_array_entrypoint_command_override": {
					"type": "array",
					"items": {
						"description": "An array of strings.",
						"type": "string"
					},
					"description": "Container entrypoint command override for the ContainerArray.",
					"default": [
						
					]
				},
				"container_array_entrypoint_args": {
					"type": "array",
					"items": {
						"description": "An array of strings.",
						"type": "string"
					},
					"description": "Container entrypoint arguments for the ContainerArray.",
					"default": [
						
					]
				},
				"container_array_environment_variables": {
					"type": "array",
					"items": {
						"description": "ContainerArrayEnvironmentVariable objects",
						"type": "ContainerArrayEnvironmentVariable"
					},
					"description": "The <a:schema>ContainerArrayEnvironmentVariable<\/a:schema> objects of the ContainerArray.",
					"default": [
						
					],
					"readonly": false
				},
				"container_array_port_mappings": {
					"type": "array",
					"items": {
						"description": "ContainerArrayPortMapping objects",
						"type": "ContainerArrayPortMapping"
					},
					"description": "The <a:schema>ContainerArrayPortMapping<\/a:schema> objects of the ContainerArray.",
					"default": [
						
					],
					"readonly": false
				},
				"container_array_config_map": {
					"type": [
						"ContainerArrayConfigMap",
						"null"
					],
					"description": "<a:schema>ContainerArrayConfigMap<\/a:schema> object.",
					"default": null,
					"readonly": false
				},
				"container_array_secrets": {
					"type": "array",
					"items": {
						"description": "ContainerArraySecret objects",
						"type": "ContainerArraySecret"
					},
					"description": "The <a:schema>ContainerArraySecret<\/a:schema> objects of the ContainerArray.",
					"default": [
						
					],
					"readonly": false
				},
				"container_array_volatile_volumes": {
					"type": "array",
					"items": {
						"description": "ContainerArrayVolatileVolume objects",
						"type": "ContainerArrayVolatileVolume"
					},
					"description": "The <a:schema>ContainerArrayVolatileVolume<\/a:schema> objects of the ContainerArray.",
					"default": [
						
					],
					"readonly": false
				},
				"container_array_persistent_volumes": {
					"type": "array",
					"items": {
						"description": "ContainerArrayPersistentVolume objects",
						"type": "ContainerArrayPersistentVolume"
					},
					"description": "The <a:schema>ContainerArrayPersistentVolume<\/a:schema> objects of the ContainerArray.",
					"default": [
						
					],
					"readonly": false
				},
				"container_array_readiness_check": {
					"type": [
						"ContainerArrayReadinessCheck",
						"null"
					],
					"description": "<a:schema>ContainerArrayReadinessCheck<\/a:schema> object that asseses the readiness of the ContainerArray Containers.",
					"default": null,
					"readonly": false
				},
				"container_array_liveness_check": {
					"type": [
						"ContainerArrayLivenessCheck",
						"null"
					],
					"description": "<a:schema>ContainerArrayLivenessCheck<\/a:schema> object that asseses the liveness of the ContainerArray Containers.",
					"default": null,
					"readonly": false
				},
				"container_array_gui_settings_json": {
					"type": "string",
					"description": "Reserved for GUI users.",
					"default": "",
					"readonly": true
				},
				"container_array_created_timestamp": {
					"type": [
						"string",
						"null"
					],
					"description": "ISO 8601 timestamp which holds the date and time when the ContainerArray was created. Example format: 2013-11-29T13:00:01Z.",
					"default": "0000-00-00T00:00:00Z",
					"readonly": true
				},
				"container_array_updated_timestamp": {
					"type": [
						"string",
						"null"
					],
					"description": "ISO 8601 timestamp which holds the date and time when the ContainerArray was edited. Example format: 2013-11-29T13:00:01Z.",
					"default": "0000-00-00T00:00:00Z",
					"readonly": true
				},
				"type": {
					"type": "string",
					"description": "The schema type.",
					"enum": [
						"ContainerArray"
					],
					"readonly": true
				}
			}
		};
	}
};

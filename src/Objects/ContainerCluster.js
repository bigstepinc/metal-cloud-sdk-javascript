const ObjectBase = require("../ObjectBase");

module.exports = 
class ContainerCluster extends ObjectBase
{
	/**
	 * @protected
	 * 
	 * @returns {{description: string, type: string, properties: Object<propertyName, {type: string|string[], description: string, required: boolean, enum: undefined|string[], items: undefined|{description: string, type: string}, default: string|number|null|boolean, pattern: string|undefined, minLength: number|undefined, maxLength: string|undefined, readonly: boolean|undefined, required: boolean|undefined}>}}
	 */
	_schemaDefinition()
	{
		return {
			"description": "A group of ContainerArray infrastructure elements preconfigured for specific workloads or roles. Software (SaaS) is automatically installed.",
			"type": "object",
			"properties": {
				"container_cluster_label": {
					"type": [
						"string",
						"null"
					],
					"description": "The ContainerCluster's unique label is used to create the <code>container_cluster_subdomain<\/code>. It is editable and can be used to call API functions.",
					"minLength": 1,
					"maxLength": 63,
					"required": false,
					"pattern": "^[a-zA-Z]{1,1}[a-zA-Z0-9-]{0,61}[a-zA-Z0-9]{1,1}|[a-zA-Z]{1,1}$",
					"default": null
				},
				"container_cluster_subdomain": {
					"type": [
						"string",
						"null"
					],
					"description": "Automatically created based on <code>container_cluster_label<\/code>. It is a unique reference to the ContainerCluster object.",
					"default": null,
					"readonly": true
				},
				"container_cluster_id": {
					"type": [
						"integer",
						"null",
						"string"
					],
					"description": "The ID of the ContainerCluster which can be used instead of the <code>container_cluster_label<\/code> or <code>container_cluster_subdomain<\/code> when calling the API functions. It is automatically generated and cannot be edited.",
					"default": null,
					"readonly": true
				},
				"infrastructure_id": {
					"type": [
						"integer",
						"null",
						"string"
					],
					"description": "Represents the ID of the Infrastructure to which the ContainerCluster belongs.",
					"default": null,
					"readonly": true
				},
				"container_platform_id": {
					"type": [
						"integer",
						"null",
						"string"
					],
					"description": "Represents the ID of the ContainerPlatform to which the ContainerCluster belongs."
				},
				"container_cluster_type": {
					"enum": [
						"vanilla",
						"spark",
						"zookeeper",
						"kafka",
						"zoomdata",
						"postgresql",
						"sparksql",
						"elasticsearch",
						"streamsets"
					],
					"type": "string",
					"description": "Type of the ContainerCluster. This property is not editable.",
					"required": true
				},
				"container_cluster_service_status": {
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
					"description": "The status of the ContainerCluster.",
					"default": null,
					"readonly": true
				},
				"container_cluster_software_version": {
					"type": [
						"string",
						"null"
					],
					"description": "The software version of the application installed on the cluster.",
					"required": false
				},
				"container_cluster_automatic_management": {
					"type": "boolean",
					"description": "Specifies if the ContainerCluster will be automatically managed or not.",
					"default": true
				},
				"container_cluster_app": {
					"type": [
						"AppSpark",
						"AppZookeeper",
						"AppKafka",
						"AppZoomdata",
						"AppPostgreSQL",
						"AppSparkSQL",
						"AppElasticsearchContainer",
						"AppStreamSets",
						"null"
					],
					"description": "Information about the instances and the ContainerCluster software.",
					"default": null,
					"readonly": true
				},
				"container_cluster_operation": {
					"type": [
						"ContainerClusterOperation",
						"null"
					],
					"description": "The operation type, operation status and modified ContainerCluster object.",
					"default": null,
					"readonly": true
				},
				"container_cluster_gui_settings_json": {
					"type": "string",
					"description": "Reserved for GUI users.",
					"default": "",
					"readonly": true
				},
				"container_cluster_connections": {
					"type": "array",
					"items": {
						"type": "ClusterConnection",
						"description": "A Cluster Connection object."
					},
					"default": [
						
					],
					"description": "Information about connections between the current ContainerCluster and other clusters.",
					"readonly": true
				},
				"type": {
					"type": "string",
					"description": "The schema type",
					"enum": [
						"ContainerCluster"
					],
					"readonly": true
				},
				"container_cluster_change_id": {
					"type": [
						"integer",
						"null"
					],
					"description": "This property helps ensure that edit operations don\u2019t overwrite other, more recent changes made to the same object. It gets updated automatically after each successful edit operation.",
					"default": null
				}
			}
		};
	}
};

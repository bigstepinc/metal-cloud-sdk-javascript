const ObjectBase = require("../ObjectBase");

module.exports = 
class ContainerClusterOperation extends ObjectBase
{
	/**
	 * @protected
	 * 
	 * @returns {{description: string, type: string, properties: Object<propertyName, {type: string|string[], description: string, required: boolean, enum: undefined|string[], items: undefined|{description: string, type: string}, default: string|number|null|boolean, pattern: string|undefined, minLength: number|undefined, maxLength: string|undefined, readonly: boolean|undefined, required: boolean|undefined}>}}
	 */
	_schemaDefinition()
	{
		return {
			"description": "ContainerClusterOperation contains information regarding the changes that are to be made to a product. Edit and deploy functions have to be called in order to apply the changes. The operation type and status are unique to each operation object.",
			"type": "object",
			"properties": {
				"container_cluster_deploy_status": {
					"enum": [
						"not_started",
						"ongoing",
						"finished"
					],
					"type": "string",
					"description": "The status of the deploy process.",
					"readonly": true
				},
				"container_cluster_deploy_type": {
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
					"description": "The operation applied to the ContainerCluster.",
					"readonly": true
				},
				"container_cluster_label": {
					"type": "string",
					"description": "The ContainerCluster's unique label is used to create the <code>container_cluster_subdomain<\/code>. It is editable and can be used to call API functions.",
					"minLength": 1,
					"maxLength": 63,
					"required": true,
					"pattern": "^[a-zA-Z]{1,1}[a-zA-Z0-9-]{0,61}[a-zA-Z0-9]{1,1}|[a-zA-Z]{1,1}$"
				},
				"container_cluster_subdomain": {
					"type": [
						"string",
						"null"
					],
					"description": "Automatically created based on <code>container_cluster_label<\/code>. It is a unique reference to the ContainerCluster object..",
					"readonly": true
				},
				"container_cluster_id": {
					"type": [
						"integer",
						"null",
						"string"
					],
					"description": "The ID of the ContainerCluster which can be used instead of the <code>container_cluster_label<\/code> or <code>container_cluster_subdomain<\/code> when calling the API functions. It is automatically generated and cannot be edited.",
					"readonly": true
				},
				"container_cluster_change_id": {
					"type": "integer",
					"description": "This property helps ensure that edit operations don’t overwrite other, more recent changes made to the same object. It gets updated automatically after each successful edit operation.",
					"required": true
				},
				"container_cluster_software_version": {
					"type": [
						"string",
						"null"
					],
					"description": "The installed ContainerCluster software version."
				},
				"container_cluster_automatic_management": {
					"type": "boolean",
					"description": "Specifies if the ContainerCluster will be automatically managed or not.",
					"default": true
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
						"ContainerClusterOperation"
					],
					"readonly": true
				}
			}
		};
	}
};

const ObjectBase = require("../ObjectBase");

module.exports = 
class Cluster extends ObjectBase
{
	/**
	 * @protected
	 * 
	 * @returns {{description: string, type: string, properties: Object<propertyName, {type: string|string[], description: string, required: boolean, enum: undefined|string[], items: undefined|{description: string, type: string}, default: string|number|null|boolean, pattern: string|undefined, minLength: number|undefined, maxLength: string|undefined, readonly: boolean|undefined, required: boolean|undefined}>}}
	 */
	_schemaDefinition()
	{
		return {
			"description": "A group of InstanceArray and DriveArray infrastructure elements preconfigured for specific workloads or roles. Software (SaaS) is automatically installed for new instances. The preinstalled software is informed when instances are made available or removed.",
			"type": "object",
			"properties": {
				"cluster_label": {
					"type": [
						"string",
						"null"
					],
					"description": "The Cluster's unique label is used to create the <code>cluster_subdomain<\/code>. It is editable and can be used to call API functions.",
					"minLength": 1,
					"maxLength": 63,
					"required": false,
					"pattern": "^[a-zA-Z]{1,1}[a-zA-Z0-9-]{0,61}[a-zA-Z0-9]{1,1}|[a-zA-Z]{1,1}$",
					"default": null
				},
				"cluster_subdomain": {
					"type": [
						"string",
						"null"
					],
					"description": "Automatically created based on <code>cluster_label<\/code>. It is a unique reference to the Cluster object.",
					"default": null,
					"readonly": true
				},
				"cluster_subdomain_permanent": {
					"type": [
						"string",
						"null"
					],
					"description": "Automatically created based on <code>cluster_id<\/code>. It is a unique reference to the Cluster object that never changes, so it can be trusted in various configs. Starting with clusters created and deployed using API v3.2.0 it points to all the child instances in DNS.",
					"default": null,
					"readonly": true
				},
				"cluster_id": {
					"type": [
						"integer",
						"null",
						"string"
					],
					"description": "The ID of the Cluster which can be used instead of the <code>cluster_label<\/code> or <code>cluster_subdomain<\/code> when calling the API functions. It is automatically generated and cannot be edited.",
					"default": null,
					"readonly": true
				},
				"infrastructure_id": {
					"type": [
						"integer",
						"null",
						"string"
					],
					"description": "Represents the infrastructure ID to which the Cluster belongs.",
					"default": null,
					"readonly": true
				},
				"cluster_type": {
					"enum": [
						"vanilla",
						"splunk",
						"elasticsearch_legacy",
						"elasticsearch",
						"cloudera",
						"couchbase",
						"datameer",
						"datastax",
						"exasol",
						"mesos",
						"mapr_legacy",
						"mapr",
						"kubernetes",
						"mysql_percona",
						"tableau",
						"hortonworks",
						"vmware_vsphere"
					],
					"type": "string",
					"description": "Type of the Cluster. This property is not editable.",
					"required": true
				},
				"cluster_service_status": {
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
					"description": "The status of the Cluster.",
					"default": null,
					"readonly": true
				},
				"cluster_software_version": {
					"type": [
						"string",
						"null"
					],
					"description": "The installed cluster software version.",
					"required": false
				},
				"cluster_service_assignment": {
					"type": "object",
					"additionalProperties": true,
					"description": "Cluster services as assigned to each instance",
					"required": false
				},
				"cluster_automatic_management": {
					"type": "boolean",
					"description": "Specifies if the cluster will be automatically managed or not.",
					"default": true
				},
				"cluster_app": {
					"type": [
						"AppSplunk",
						"AppElasticsearch",
						"AppElasticsearchLegacy",
						"AppCloudera",
						"AppDatastax",
						"AppCouchbase",
						"AppDatameer",
						"AppMapRLegacy",
						"AppMapR",
						"AppKubernetes",
						"AppMysqlPercona",
						"AppExasol",
						"AppMesos",
						"AppTableau",
						"AppHortonworks",
						"AppVMwarevSphere",
						"null"
					],
					"description": "Information about the instances and the Cluster software.",
					"default": null,
					"readonly": true
				},
				"cluster_operation": {
					"type": [
						"ClusterOperation",
						"null"
					],
					"description": "The operation type, operation status and modified Cluster object.",
					"default": null,
					"readonly": true
				},
				"cluster_gui_settings_json": {
					"type": "string",
					"description": "Reserved for GUI users.",
					"default": "",
					"readonly": true
				},
				"cluster_connections": {
					"type": "array",
					"items": {
						"type": "ClusterConnection",
						"description": "A Cluster Connection object."
					},
					"default": [
						
					],
					"description": "Information about connections between the current Cluster and other clusters.",
					"readonly": true
				},
				"cluster_ssh_management_public_key": {
					"type": [
						"string",
						"null"
					],
					"description": "The public SSH key used for managing the Cluster.",
					"default": null,
					"readonly": true
				},
				"type": {
					"type": "string",
					"description": "The schema type",
					"enum": [
						"Cluster"
					],
					"readonly": true
				},
				"cluster_change_id": {
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

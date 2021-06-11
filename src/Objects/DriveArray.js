const ObjectBase = require("../ObjectBase");

module.exports = 
class DriveArray extends ObjectBase
{
	/**
	 * @protected
	 * 
	 * @returns {{description: string, type: string, properties: Object<propertyName, {type: string|string[], description: string, required: boolean, enum: undefined|string[], items: undefined|{description: string, type: string}, default: string|number|null|boolean, pattern: string|undefined, minLength: number|undefined, maxLength: string|undefined, readonly: boolean|undefined, required: boolean|undefined}>}}
	 */
	_schemaDefinition()
	{
		return {
			"description": "A DriveArray is a collection of storage devices mounted via iSCSI.",
			"type": "object",
			"properties": {
				"drive_array_label": {
					"type": [
						"string",
						"null"
					],
					"description": "The Drive array's unique label is used to create the <code>drive_array_subdomain<\/code>. It is editable and can be used to call API functions.",
					"minLength": 1,
					"maxLength": 63,
					"required": false,
					"pattern": "^[a-zA-Z]{1,1}[a-zA-Z0-9-]{0,61}[a-zA-Z0-9]{1,1}|[a-zA-Z]{1,1}$",
					"default": null
				},
				"drive_array_subdomain": {
					"type": [
						"string",
						"null"
					],
					"description": "Automatically created based on <code>drive_array_label<\/code>. It is a unique reference to the Drive array object.",
					"default": null,
					"readonly": true
				},
				"drive_array_id": {
					"type": [
						"integer",
						"null",
						"string"
					],
					"description": "The ID of the Drive array which can be used instead of the <code>drive_array_label<\/code> or <code>drive_array_subdomain<\/code> when calling the API functions. It is automatically generated and cannot be edited.",
					"default": null,
					"readonly": true
				},
				"volume_template_id": {
					"type": [
						"integer",
						"null",
						"string"
					],
					"description": "The volume template ID or name. At the moment, the available templates are <code>\"ubuntu14-04\"<\/code>, <code>\"ubuntu16-04\"<\/code>, <code>\"centos6-5\"<\/code>, <code>\"centos6-6\"<\/code>, <code>\"centos6-8\"<\/code>, <code>\"centos6-9\"<\/code>, <code>\"centos71v1\"<\/code>, <code>\"centos7-2\"<\/code>, and <code>\"centos7-3\"<\/code>",
					"default": null
				},
				"drive_array_storage_type": {
					"enum": [
						"iscsi_ssd",
						"iscsi_hdd",
						"dummy",
						null
					],
					"type": [
						"string",
						"null"
					],
					"description": "",
					"default": null
				},
				"drive_array_count": {
					"type": "integer",
					"description": "The Drive count on the Drive array.",
					"minimum": 0,
					"maximum": 1000,
					"default": 1
				},
				"drive_size_mbytes_default": {
					"type": "integer",
					"description": "The capacity of each Drive in MBytes.",
					"minimum": 1024,
					"maximum": 2046976,
					"default": 40960
				},
				"drive_array_expand_with_instance_array": {
					"type": "boolean",
					"description": "If true, the Drive array and the InstanceArray expand simultaneously. If not enough Drives are available, new Drives will be created automatically and attached.",
					"default": true
				},
				"infrastructure_id": {
					"type": [
						"integer",
						"null",
						"string"
					],
					"description": "The infrastructure ID to which the Drive array belongs.",
					"default": null,
					"readonly": true
				},
				"instance_array_id": {
					"type": [
						"integer",
						"null",
						"string"
					],
					"description": "The InstanceArray ID to which the Drive array is attached.",
					"default": null
				},
				"container_array_id": {
					"type": [
						"integer",
						"null",
						"string"
					],
					"description": "The ContainerArray ID to which the Drive array is attached.",
					"default": null
				},
				"drive_array_service_status": {
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
					"description": "The status of the Drive array.",
					"default": null,
					"readonly": true
				},
				"drive_array_operation": {
					"type": [
						"DriveArrayOperation",
						"null"
					],
					"description": "The operation type, operation status and modified Drive array object.",
					"default": null,
					"readonly": true
				},
				"cluster_id": {
					"type": [
						"integer",
						"null"
					],
					"description": "If not <code>null<\/code>, then the InstanceArray is part of the specified Cluster.",
					"default": null,
					"readonly": true
				},
				"container_cluster_id": {
					"type": [
						"integer",
						"null"
					],
					"description": "If not <code>null<\/code>, then the InstanceArray is part of the specified ContainerCluster.",
					"default": null,
					"readonly": true
				},
				"cluster_role_group": {
					"type": "string",
					"description": "",
					"enum": [
						"none",
						"cloudera_headnodes",
						"cloudera_datanodes",
						"splunk_searchheads",
						"splunk_indexers",
						"elasticsearch_nodes",
						"elasticsearch_masternodes",
						"elasticsearch_datanodes",
						"couchbase_nodes",
						"datameer_nodes",
						"datastax_seeds",
						"datastax_nodes",
						"exasol_license_servers",
						"exasol_nodes",
						"mesos_headnodes",
						"mesos_slavenodes",
						"kubernetes_master",
						"kubernetes_node",
						"mapr_masternodes",
						"mapr_slavenodes",
						"mapr_nodes",
						"tableau_nodes",
						"hortonworks_masternodes",
						"hortonworks_slavenodes",
						"spark_master",
						"spark_workers",
						"zookeeper_nodes",
						"kafka_brokers",
						"zoomdata_node",
						"postgresql_node",
						"sparksql_node",
						"mysql_percona_nodes",
						"vsphere_master",
						"vsphere_worker"
					],
					"default": "none",
					"readonly": true
				},
				"drive_array_gui_settings_json": {
					"type": "string",
					"description": "Reserved for GUI users.",
					"default": "",
					"readonly": true
				},
				"drive_array_created_timestamp": {
					"type": [
						"string",
						"null"
					],
					"description": "ISO 8601 timestamp which holds the date and time when the Drive array was created. Example format: 2013-11-29T13:00:01Z.",
					"default": "0000-00-00T00:00:00Z",
					"readonly": true
				},
				"drive_array_updated_timestamp": {
					"type": [
						"string",
						"null"
					],
					"description": "ISO 8601 timestamp which holds the date and time when the Drive array was edited. Example format: 2013-11-29T13:00:01Z.",
					"default": "0000-00-00T00:00:00Z",
					"readonly": true
				},
				"license_utilization_type": {
					"enum": [
						"demand",
						"subscription"
					],
					"type": [
						"string",
						"null"
					],
					"description": "License utilization type for the license.",
					"default": "subscription"
				},
				"type": {
					"type": "string",
					"description": "The schema type.",
					"enum": [
						"DriveArray"
					],
					"readonly": true
				},
				"drive_array_change_id": {
					"type": [
						"integer",
						"null"
					],
					"description": "This property helps ensure that edit operations don\u2019t overwrite other, more recent changes made to the same object. It gets updated automatically after each successful edit operation.",
					"default": null,
					"required": true
				},
				"drive_array_filesystem": {
					"type": [
						"DriveArrayFilesystem",
						"null"
					],
					"description": "Drive array file system information",
					"default": null
				},
				"drive_array_tags": {
					"type": "array",
					"items": {
						"type": "string",
						"description": ""
					},
					"description": "List of tags representative for the DriveArray.",
					"default": [
						
					],
					"required": false
				}
			}
		};
	}
};

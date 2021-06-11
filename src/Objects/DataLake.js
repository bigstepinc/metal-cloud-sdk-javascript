const ObjectBase = require("../ObjectBase");

module.exports = 
class DataLake extends ObjectBase
{
	/**
	 * @protected
	 * 
	 * @returns {{description: string, type: string, properties: Object<propertyName, {type: string|string[], description: string, required: boolean, enum: undefined|string[], items: undefined|{description: string, type: string}, default: string|number|null|boolean, pattern: string|undefined, minLength: number|undefined, maxLength: string|undefined, readonly: boolean|undefined, required: boolean|undefined}>}}
	 */
	_schemaDefinition()
	{
		return {
			"description": "A DataLake is a network file system or distributed file system for holding large amounts of data.",
			"type": "object",
			"properties": {
				"data_lake_label": {
					"type": [
						"string",
						"null"
					],
					"description": "Read-only property which defaults to a value derived from the datacenter name. The datacenter is inherited from the parent infrastructure.",
					"default": null,
					"minLength": 1,
					"maxLength": 63,
					"pattern": "^[a-zA-Z]{1,1}[a-zA-Z0-9-]{0,61}[a-zA-Z0-9]{1,1}|[a-zA-Z]{1,1}$",
					"required": false
				},
				"data_lake_subdomain": {
					"type": [
						"string",
						"null"
					],
					"description": "Automatically created based on <code>data_lake_label<\/code>. It is a unique reference to the DataLake object.",
					"default": null,
					"readonly": true
				},
				"data_lake_id": {
					"type": [
						"integer",
						"null",
						"string"
					],
					"description": "The ID of the DataLake which can be used instead of the <code>data_lake_label<\/code> or <code>data_lake_subdomain<\/code> when calling the API functions. It is automatically generated and cannot be edited.",
					"default": null,
					"readonly": true
				},
				"data_lake_type": {
					"enum": [
						"hdfs"
					],
					"type": "string",
					"description": "File system or protocol type.",
					"default": "hdfs",
					"readonly": true
				},
				"infrastructure_id": {
					"type": [
						"integer",
						"null",
						"string"
					],
					"description": "The infrastructure ID to which the DataLake belongs.",
					"default": null,
					"readonly": true
				},
				"data_lake_service_status": {
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
					"description": "The status of the DataLake.",
					"default": null,
					"readonly": true
				},
				"data_lake_credentials": {
					"type": [
						"DataLakeCredentials",
						"null"
					],
					"description": "Information needed to connect to the HDFS File System.",
					"default": null,
					"readonly": true
				},
				"data_lake_operation": {
					"type": [
						"DataLakeOperation",
						"null"
					],
					"description": "The operation type, operation status and modified DataLake object.",
					"default": null,
					"readonly": true
				},
				"data_lake_gui_settings_json": {
					"type": "string",
					"description": "Reserved for GUI users.",
					"default": "",
					"readonly": true
				},
				"data_lake_created_timestamp": {
					"type": [
						"string",
						"null"
					],
					"description": "ISO 8601 timestamp which holds the date and time when the DataLake was created. Example format: 2013-11-29T13:00:01Z.",
					"default": "0000-00-00T00:00:00Z",
					"readonly": true
				},
				"data_lake_updated_timestamp": {
					"type": [
						"string",
						"null"
					],
					"description": "ISO 8601 timestamp which holds the date and time when the DataLake was edited. Example format: 2013-11-29T13:00:01Z.",
					"default": "0000-00-00T00:00:00Z",
					"readonly": true
				},
				"type": {
					"type": "string",
					"description": "The schema type.",
					"enum": [
						"DataLake"
					],
					"readonly": true
				},
				"data_lake_change_id": {
					"type": [
						"integer",
						"null"
					],
					"description": "This property helps ensure that edit operations don\u2019t overwrite other, more recent changes made to the same object. It gets updated automatically after each successful edit operation.",
					"default": null,
					"required": true
				}
			}
		};
	}
};

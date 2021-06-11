const ObjectBase = require("../ObjectBase");

module.exports = 
class Drive extends ObjectBase
{
	/**
	 * @protected
	 * 
	 * @returns {{description: string, type: string, properties: Object<propertyName, {type: string|string[], description: string, required: boolean, enum: undefined|string[], items: undefined|{description: string, type: string}, default: string|number|null|boolean, pattern: string|undefined, minLength: number|undefined, maxLength: string|undefined, readonly: boolean|undefined, required: boolean|undefined}>}}
	 */
	_schemaDefinition()
	{
		return {
			"description": "A Drive is a storage device mounted via iSCSI.",
			"type": "object",
			"properties": {
				"drive_label": {
					"type": [
						"string",
						"null"
					],
					"description": "The Drive's label which is unique and it is used to form the <code>drive_subdomain<\/code>. It is editable and can be used to call API functions.",
					"minLength": 1,
					"maxLength": 63,
					"required": false,
					"pattern": "^[a-zA-Z]{1,1}[a-zA-Z0-9-]{0,61}[a-zA-Z0-9]{1,1}|[a-zA-Z]{1,1}$",
					"default": null
				},
				"drive_subdomain": {
					"type": [
						"string",
						"null"
					],
					"description": "Automatically created based on <code>drive_label<\/code>. It is a unique reference to the Drive object.",
					"default": null,
					"readonly": true
				},
				"drive_id": {
					"type": [
						"integer",
						"null",
						"string"
					],
					"description": "The ID of the Drive which can be used instead of the <code>drive_label<\/code> or <code>drive_subdomain<\/code> when calling the API functions. It is automatically generated and cannot be edited.",
					"default": null,
					"readonly": true
				},
				"drive_array_id": {
					"type": [
						"integer",
						"null",
						"string"
					],
					"description": "The ID of the Drive array.",
					"default": null,
					"readonly": true
				},
				"instance_id": {
					"type": [
						"integer",
						"null",
						"string"
					],
					"description": "Represents the associated instance's ID.",
					"default": null,
					"readonly": true
				},
				"container_id": {
					"type": [
						"integer",
						"null",
						"string"
					],
					"description": "Represents the associated container's ID.",
					"default": null,
					"readonly": true
				},
				"drive_size_mbytes": {
					"type": "integer",
					"minimum": 1024,
					"maximum": 2046976,
					"description": "Represents the capacity of the Drive.",
					"required": true
				},
				"drive_storage_type": {
					"enum": [
						"iscsi_ssd",
						"iscsi_hdd",
						"dummy"
					],
					"type": "string",
					"description": "Represents the Drive\u2019s type of storage.",
					"default": "iscsi_ssd"
				},
				"infrastructure_id": {
					"type": [
						"integer",
						"null",
						"string"
					],
					"description": "Represents the infrastructure ID to which the Drive belongs.",
					"default": null,
					"readonly": true
				},
				"template_id_origin": {
					"type": [
						"integer",
						"null"
					],
					"description": "Represents the volume template.",
					"default": null,
					"readonly": true
				},
				"drive_credentials": {
					"type": [
						"DriveCredentials",
						"null"
					],
					"description": "Information to connect via iSCSI or bootable drive associated credentials.",
					"default": null,
					"readonly": true
				},
				"drive_service_status": {
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
					"description": "It shows the status of the Drive.",
					"default": null,
					"readonly": true
				},
				"drive_created_timestamp": {
					"type": [
						"string",
						"null"
					],
					"description": "ISO 8601 timestamp which holds the date and time when the Drive was created. Example format: 2013-11-29T13:00:01Z.",
					"default": "0000-00-00T00:00:00Z",
					"readonly": true
				},
				"drive_updated_timestamp": {
					"type": [
						"string",
						"null"
					],
					"description": "ISO 8601 timestamp which holds the date and time when the Drive was edited. Example format: 2013-11-29T13:00:01Z.",
					"default": "0000-00-00T00:00:00Z",
					"readonly": true
				},
				"drive_operation": {
					"type": [
						"DriveOperation",
						"null"
					],
					"description": "The operation type, operation status and modified Drive object.",
					"default": null,
					"readonly": true
				},
				"type": {
					"type": "string",
					"description": "The schema type.",
					"enum": [
						"Drive"
					],
					"readonly": true
				},
				"drive_change_id": {
					"type": [
						"integer",
						"null"
					],
					"description": "This property helps ensure that edit operations don\u2019t overwrite other, more recent changes made to the same object. It gets updated automatically after each successful edit operation.",
					"default": null,
					"required": true
				},
				"drive_operating_system": {
					"type": [
						"OperatingSystem",
						"null"
					],
					"description": "OperatingSystem",
					"default": null,
					"readonly": true
				},
				"drive_filesystem": {
					"type": [
						"DriveFilesystem",
						"null"
					],
					"description": "Ignored if the <code>drive_service_status</code> property is <code>SERVICE_STATUS_ACTIVE</code>",
					"default": null
				}
			}
		};
	}
};

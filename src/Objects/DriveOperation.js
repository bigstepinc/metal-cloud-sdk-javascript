const ObjectBase = require("../ObjectBase");

module.exports = 
class DriveOperation extends ObjectBase
{
	/**
	 * @protected
	 * 
	 * @returns {{description: string, type: string, properties: Object<propertyName, {type: string|string[], description: string, required: boolean, enum: undefined|string[], items: undefined|{description: string, type: string}, default: string|number|null|boolean, pattern: string|undefined, minLength: number|undefined, maxLength: string|undefined, readonly: boolean|undefined, required: boolean|undefined}>}}
	 */
	_schemaDefinition()
	{
		return {
			"description": "DriveOperation contains information regarding the changes that are to be made to a product. Edit and deploy functions have to be called in order to apply the changes. The operation type and status are unique to each operation object.",
			"type": "object",
			"properties": {
				"drive_deploy_status": {
					"enum": [
						"not_started",
						"ongoing",
						"finished"
					],
					"type": [
						"string",
						"null"
					],
					"description": "The status of the deploy process.",
					"readonly": true
				},
				"drive_deploy_type": {
					"enum": [
						"create",
						"edit",
						"delete",
						"start",
						"stop"
					],
					"type": [
						"string",
						"null"
					],
					"description": "The operation applied to the Drive.",
					"readonly": true
				},
				"drive_label": {
					"type": "string",
					"description": "The Drive's label which is unique and it is used to form the <code>drive_subdomain<\/code>. It is editable and can be used to call API functions.",
					"minLength": 1,
					"maxLength": 63,
					"required": true,
					"pattern": "^[a-zA-Z]{1,1}[a-zA-Z0-9-]{0,61}[a-zA-Z0-9]{1,1}|[a-zA-Z]{1,1}$"
				},
				"drive_subdomain": {
					"type": [
						"string",
						"null"
					],
					"description": "The Drive's fully qualified subdomain name that specifies its location in the infrastructure. It is a unique reference to the Drive object.",
					"readonly": true
				},
				"drive_array_id": {
					"type": [
						"integer",
						"null",
						"string"
					],
					"description": "The ID of the Drive array.",
					"readonly": true
				},
				"drive_created_timestamp": {
					"type": "string",
					"description": "ISO 8601 timestamp which holds the date and time when the Drive was created. Example format: 2013-11-29T13:00:01Z.",
					"readonly": true
				},
				"drive_id": {
					"type": [
						"integer",
						"null",
						"string"
					],
					"description": "The ID of the Drive which can be used instead of the <code>drive_label<\/code> or <code>drive_subdomain<\/code> when calling the API functions. It is automatically generated and cannot be edited.",
					"readonly": true
				},
				"drive_size_mbytes": {
					"type": [
						"integer",
						"null"
					],
					"minimum": 1024,
					"maximum": 2046976,
					"description": "The size of the Drive."
				},
				"drive_storage_type": {
					"enum": [
						"iscsi_ssd",
						"iscsi_hdd",
						"dummy"
					],
					"type": "string",
					"description": "The storage type of the Drive.",
					"readonly": true
				},
				"instance_id": {
					"type": [
						"integer",
						"null",
						"string"
					],
					"description": "The ID of the Drive's associated instance.",
					"readonly": true
				},
				"container_id": {
					"type": [
						"integer",
						"null",
						"string"
					],
					"description": "The ID of the Drive's associated container.",
					"readonly": true
				},
				"template_id_origin": {
					"type": [
						"integer",
						"null"
					],
					"description": "Represents the volume template.",
					"readonly": true
				},
				"drive_updated_timestamp": {
					"type": [
						"string",
						"null"
					],
					"description": "ISO 8601 timestamp which holds the date and time when the Drive was edited. Example format: 2013-11-29T13:00:01Z.",
					"readonly": true
				},
				"type": {
					"type": "string",
					"description": "The schema type.",
					"enum": [
						"DriveOperation"
					],
					"readonly": true
				},
				"drive_change_id": {
					"type": "integer",
					"description": "This property helps ensure that edit operations don’t overwrite other, more recent changes made to the same object. It gets updated automatically after each successful edit operation.",
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
					"description": "Drive file system information",
					"default": null
				}
			}
		};
	}
};

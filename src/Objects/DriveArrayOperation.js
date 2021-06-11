const ObjectBase = require("../ObjectBase");

module.exports = 
class DriveArrayOperation extends ObjectBase
{
	/**
	 * @protected
	 * 
	 * @returns {{description: string, type: string, properties: Object<propertyName, {type: string|string[], description: string, required: boolean, enum: undefined|string[], items: undefined|{description: string, type: string}, default: string|number|null|boolean, pattern: string|undefined, minLength: number|undefined, maxLength: string|undefined, readonly: boolean|undefined, required: boolean|undefined}>}}
	 */
	_schemaDefinition()
	{
		return {
			"description": "DriveArrayOperation contains information regarding the changes that are to be made to a product. Edit and deploy functions have to be called in order to apply the changes. The operation type and status are unique to each operation object.",
			"type": "object",
			"properties": {
				"drive_array_deploy_status": {
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
				"drive_array_deploy_type": {
					"enum": [
						"create",
						"edit",
						"start",
						"stop",
						"delete"
					],
					"type": [
						"string",
						"null"
					],
					"description": "The operation applied to the Drive array.",
					"maxLength": 63,
					"readonly": true
				},
				"drive_array_label": {
					"type": "string",
					"description": "The Drive array's unique label is used to create the <code>drive_array_subdomain<\/code>. It is editable and can be used to call API functions.",
					"minLength": 1,
					"maxLength": 63,
					"required": true
				},
				"drive_array_subdomain": {
					"type": [
						"string",
						"null"
					],
					"description": "Automatically created based on <code>drive_array_label<\/code>. It is a unique reference to the Drive array object.",
					"readonly": true
				},
				"drive_array_id": {
					"type": [
						"integer",
						"null",
						"string"
					],
					"description": "The ID of the Drive array which can be used instead of the <code>drive_array_label<\/code> or <code>drive_array_subdomain<\/code> when calling the API functions. It is automatically generated and cannot be edited.",
					"readonly": true
				},
				"volume_template_id": {
					"type": [
						"integer",
						"null",
						"string"
					],
					"description": "The volume template ID or name. At the moment, the available templates are <code>\"ubuntu-14-04\"<\/code>, <code>\"ubuntu16-04\"<\/code>, <code>\"centos6-5\"<\/code>, <code>\"centos6-6\"<\/code>, <code>\"centos6-8\"<\/code>, <code>\"centos6-9\"<\/code>, <code>\"centos71v1\"<\/code>, <code>\"centos7-2\"<\/code>, and <code>\"centos7-3\"<\/code>"
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
					"minimum": 0
				},
				"drive_size_mbytes_default": {
					"type": "integer",
					"minimum": 1024,
					"maximum": 2046976,
					"description": "The capacity of each Drive."
				},
				"drive_array_expand_with_instance_array": {
					"type": "boolean",
					"description": "If true, the Drive array and the InstanceArray expand simultaneously."
				},
				"infrastructure_id": {
					"type": [
						"integer",
						"null",
						"string"
					],
					"description": "The infrastructure ID to which the Drive array belongs.",
					"readonly": true
				},
				"instance_array_id": {
					"type": [
						"integer",
						"null",
						"string"
					],
					"description": "The InstanceArray ID to which the Drive array belongs."
				},
				"container_array_id": {
					"type": [
						"integer",
						"null",
						"string"
					],
					"description": "The ContainerArray ID to which the Drive array belongs."
				},
				"drive_array_updated_timestamp": {
					"type": [
						"string",
						"null"
					],
					"description": "ISO 8601 timestamp which holds the date and time when the Drive array was edited. Example format: 2013-11-29T13:00:01Z.",
					"readonly": true
				},
				"drive_array_gui_settings_json": {
					"type": "string",
					"description": "Reserved for GUI users.",
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
						"DriveArrayOperation"
					],
					"readonly": true
				},
				"drive_array_change_id": {
					"type": "integer",
					"description": "This property helps ensure that edit operations don’t overwrite other, more recent changes made to the same object. It gets updated automatically after each successful edit operation.",
					"required": true
				},
				"drive_array_filesystem": {
					"type": [
						"DriveArrayFilesystem",
						"null"
					],
					"description": "Drive array file system information",
					"default": null
				}
			}
		};
	}
};

const ObjectBase = require("../ObjectBase");

module.exports = 
class SharedDrive extends ObjectBase
{
	/**
	 * @protected
	 * 
	 * @returns {{description: string, type: string, properties: Object<propertyName, {type: string|string[], description: string, required: boolean, enum: undefined|string[], items: undefined|{description: string, type: string}, default: string|number|null|boolean, pattern: string|undefined, minLength: number|undefined, maxLength: string|undefined, readonly: boolean|undefined, required: boolean|undefined}>}}
	 */
	_schemaDefinition()
	{
		return {
			"description": "A SharedDrive is a storage device mounted via iSCSI that is accessible to multiple instance arrays.",
			"type": "object",
			"properties": {
				"shared_drive_label": {
					"type": [
						"string",
						"null"
					],
					"description": "The SharedDrive's label which is unique and it is used to form the <code>shared_drive_subdomain<\/code>. It is editable and can be used to call API functions.",
					"minLength": 1,
					"maxLength": 63,
					"required": false,
					"pattern": "^[a-zA-Z]{1,1}[a-zA-Z0-9-]{0,61}[a-zA-Z0-9]{1,1}|[a-zA-Z]{1,1}$",
					"default": null
				},
				"shared_drive_subdomain": {
					"type": [
						"string",
						"null"
					],
					"description": "Automatically created based on <code>shared_drive_label<\/code>. It is a unique reference to the SharedDrive object.",
					"default": null,
					"readonly": true
				},
				"shared_drive_id": {
					"type": [
						"integer",
						"null",
						"string"
					],
					"description": "The ID of the SharedDrive which can be used instead of the <code>shared_drive_label<\/code> or <code>shared_drive_subdomain<\/code> when calling the API functions. It is automatically generated and cannot be edited.",
					"default": null,
					"readonly": true
				},
				"shared_drive_size_mbytes": {
					"type": "integer",
					"minimum": 2048,
					"maximum": 104857600,
					"default": 2048,
					"description": "Represents the capacity of the SharedDrive.",
					"required": true
				},
				"shared_drive_storage_type": {
					"enum": [
						"iscsi_ssd",
						"iscsi_hdd",
						null
					],
					"type": [
						"string",
						"null"
					],
					"default": null,
					"description": "The storage type of the SharedDrive."
				},
				"shared_drive_has_gfs": {
					"type": "boolean",
					"default": false,
					"description": "This feature is no longer available. The flag is ignored. Indicates if the instances attached to this SharedDrive will have GFS installed and that they will mount this SharedDrive (only supported for Centos 7.x)."
				},
				"infrastructure_id": {
					"type": [
						"integer",
						"null",
						"string"
					],
					"description": "Represents the infrastructure ID to which the SharedDrive belongs.",
					"default": null,
					"readonly": true
				},
				"shared_drive_service_status": {
					"enum": [
						"ordered",
						"active",
						"stopped",
						"deleted"
					],
					"type": [
						"string",
						"null"
					],
					"description": "It shows the status of the SharedDrive.",
					"default": null,
					"readonly": true
				},
				"shared_drive_created_timestamp": {
					"type": [
						"string",
						"null"
					],
					"description": "ISO 8601 timestamp which holds the date and time when the SharedDrive was created. Example format: 2013-11-29T13:00:01Z.",
					"default": "0000-00-00T00:00:00Z",
					"readonly": true
				},
				"shared_drive_updated_timestamp": {
					"type": [
						"string",
						"null"
					],
					"description": "ISO 8601 timestamp which holds the date and time when the SharedDrive was edited. Example format: 2013-11-29T13:00:01Z.",
					"default": "0000-00-00T00:00:00Z",
					"readonly": true
				},
				"shared_drive_operation": {
					"type": [
						"SharedDriveOperation",
						"null"
					],
					"description": "The operation type, operation status and modified SharedDrive object.",
					"default": null,
					"readonly": true
				},
				"shared_drive_gui_settings_json": {
					"type": "string",
					"description": "Reserved for GUI users.",
					"default": "",
					"readonly": true
				},
				"shared_drive_credentials": {
					"type": [
						"SharedDriveCredentials",
						"null"
					],
					"description": "",
					"default": null,
					"readonly": true
				},
				"shared_drive_change_id": {
					"type": [
						"integer",
						"null"
					],
					"description": "This property helps ensure that edit operations don\u2019t overwrite other, more recent changes made to the same object. It gets updated automatically after each successful edit operation.",
					"default": null,
					"required": true
				},
				"shared_drive_attached_instance_arrays": {
					"type": "array",
					"items": {
						"type": "integer",
						"description": "Contains valid InstanceArray IDs."
					},
					"description": "Contains the attached InstanceArray IDs."
				},
				"shared_drive_attached_container_arrays": {
					"type": "array",
					"items": {
						"type": "integer",
						"description": "Contains valid ContainerArray IDs."
					},
					"description": "Contains the attached ContainerArray IDs."
				},
				"type": {
					"type": "string",
					"description": "The schema type.",
					"enum": [
						"SharedDrive"
					],
					"readonly": true
				}
			}
		};
	}
};

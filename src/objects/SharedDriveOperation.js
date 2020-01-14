const ObjectBase = require("./ObjectBase");


module.exports = 
class SharedDriveOperation extends ObjectBase
{
	/**
	 * @protected
	 * 
	 * @returns {{description: string, type: string, properties: Object<propertyName, {type: string|string[], description: string, required: boolean, enum: undefined|string[], items: undefined|{description: string, type: string}, default: string|number|null|boolean, pattern: string|undefined, minLength: number|undefined, maxLength: string|undefined, readonly: boolean|undefined, required: boolean|undefined}>}}
	 */
	_schemaDefinition()
	{
		return {
			"description": "SharedDriveOperation contains information regarding the changes that are to be made to a product. Edit and deploy functions have to be called in order to apply the changes. The operation type and status are unique to each operation object.",
			"type": "object",
			"properties": {
				"shared_drive_deploy_status": {
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
				"shared_drive_deploy_type": {
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
					"description": "The operation applied to the SharedDrive.",
					"readonly": true
				},
				"shared_drive_label": {
					"type": "string",
					"description": "The SharedDrive's label which is unique and it is used to form the <code>shared_drive_subdomain<\/code>. It is editable and can be used to call API functions.",
					"minLength": 1,
					"maxLength": 63,
					"required": true,
					"pattern": "^[a-zA-Z]{1,1}[a-zA-Z0-9-]{0,61}[a-zA-Z0-9]{1,1}|[a-zA-Z]{1,1}$"
				},
				"shared_drive_subdomain": {
					"type": [
						"string",
						"null"
					],
					"description": "The SharedDrive's fully qualified subdomain name that specifies its location in the infrastructure. It is a unique reference to the SharedDrive object.",
					"readonly": true
				},
				"shared_drive_id": {
					"type": [
						"integer",
						"null",
						"string"
					],
					"description": "The ID of the SharedDrive which can be used instead of the <code>shared_drive_label<\/code> or <code>shared_drive_subdomain<\/code> when calling the API functions. It is automatically generated and cannot be edited.",
					"readonly": true
				},
				"shared_drive_size_mbytes": {
					"type": "integer",
					"minimum": 2048,
					"maximum": 104857600,
					"description": "The size of the SharedDrive."
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
				"shared_drive_updated_timestamp": {
					"type": [
						"string",
						"null"
					],
					"description": "ISO 8601 timestamp which holds the date and time when the SharedDrive was edited. Example format: 2013-11-29T13:00:01Z.",
					"readonly": true
				},
				"shared_drive_attached_instance_arrays": {
					"type": "array",
					"items": {
						"type": "integer",
						"description": "Contains valid InstanceArray IDs."
					},
					"default": [
						
					],
					"description": "Contains the attached InstanceArray IDs.",
					"required": false
				},
				"shared_drive_attached_container_arrays": {
					"type": "array",
					"items": {
						"type": "integer",
						"description": "Contains valid ContainerArray IDs."
					},
					"default": [
						
					],
					"description": "Contains the attached ContainerArray IDs.",
					"required": false
				},
				"type": {
					"type": "string",
					"description": "The schema type.",
					"enum": [
						"SharedDriveOperation"
					],
					"readonly": true
				},
				"shared_drive_gui_settings_json": {
					"type": "string",
					"description": "Reserved for GUI users.",
					"readonly": true
				},
				"shared_drive_change_id": {
					"type": "integer",
					"description": "This property helps ensure that edit operations don’t overwrite other, more recent changes made to the same object. It gets updated automatically after each successful edit operation.",
					"required": true
				}
			}
		};
	}
};

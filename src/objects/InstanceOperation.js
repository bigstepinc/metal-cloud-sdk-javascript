const ObjectBase = require("./ObjectBase");


module.exports = 
class InstanceOperation extends ObjectBase
{
	/**
	 * @protected
	 * 
	 * @returns {{description: string, type: string, properties: Object<propertyName, {type: string|string[], description: string, required: boolean, enum: undefined|string[], items: undefined|{description: string, type: string}, default: string|number|null|boolean, pattern: string|undefined, minLength: number|undefined, maxLength: string|undefined, readonly: boolean|undefined, required: boolean|undefined}>}}
	 */
	_schemaDefinition()
	{
		return {
			"description": "InstanceOperation contains information regarding the changes that are to be made to a product. Edit and deploy functions have to be called in order to apply the changes. The operation type and status are unique to each operation object.",
			"type": "object",
			"properties": {
				"instance_deploy_type": {
					"enum": [
						"create",
						"edit",
						"delete",
						"start",
						"stop",
						"suspend"
					],
					"type": [
						"string",
						"null"
					],
					"description": "The operation applied to the instance.",
					"readonly": true
				},
				"instance_deploy_status": {
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
				"instance_label": {
					"type": "string",
					"description": "The instance's label which is unique and it is used to form the <code>instance_subdomain<\/code>. Can be used to call API functions.",
					"minLength": 1,
					"maxLength": 63,
					"required": true,
					"pattern": "^[a-zA-Z]{1,1}[a-zA-Z0-9-]{0,61}[a-zA-Z0-9]{1,1}|[a-zA-Z]{1,1}$"
				},
				"instance_subdomain": {
					"type": [
						"string",
						"null"
					],
					"description": "Automatically created based on <code>instance_label<\/code>. It is a unique reference to the Instance object.",
					"readonly": true
				},
				"instance_id": {
					"type": [
						"integer",
						"null",
						"string"
					],
					"description": "The ID of the instance which can be used instead of the <code>instance_label<\/code> or <code>instance_subdomain<\/code> when calling the API functions.",
					"readonly": true
				},
				"instance_array_id": {
					"type": [
						"integer",
						"null",
						"string"
					],
					"description": "The ID of the InstanceArray.",
					"readonly": true
				},
				"instance_updated_timestamp": {
					"type": [
						"string",
						"null"
					],
					"description": "ISO 8601 timestamp which holds the date and time when the instance was edited. Example format: 2013-11-29T13:00:01Z.",
					"readonly": true
				},
				"server_id": {
					"type": [
						"integer",
						"null"
					],
					"description": "The ID of the associated server.",
					"readonly": true
				},
				"server_type_id": {
					"type": [
						"integer",
						"null"
					],
					"description": "The instance's server_type_id."
				},
				"drive_id_bootable": {
					"type": [
						"integer",
						"null"
					],
					"description": "The ID of the drive the instance boots from.",
					"readonly": true
				},
				"type": {
					"type": "string",
					"description": "The schema type.",
					"enum": [
						"InstanceOperation"
					],
					"readonly": true
				},
				"instance_change_id": {
					"type": "integer",
					"description": "This property helps ensure that edit operations don’t overwrite other, more recent changes made to the same object. It gets updated automatically after each successful edit operation.",
					"required": true
				},
				"template_id_origin": {
					"type": [
						"integer",
						"null"
					],
					"description": "Represents the volume template.",
					"default": null,
					"readonly": true
				}
			}
		};
	}
};

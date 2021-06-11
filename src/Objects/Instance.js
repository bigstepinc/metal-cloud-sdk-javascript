const ObjectBase = require("../ObjectBase");

module.exports = 
class Instance extends ObjectBase
{
	/**
	 * @protected
	 * 
	 * @returns {{description: string, type: string, properties: Object<propertyName, {type: string|string[], description: string, required: boolean, enum: undefined|string[], items: undefined|{description: string, type: string}, default: string|number|null|boolean, pattern: string|undefined, minLength: number|undefined, maxLength: string|undefined, readonly: boolean|undefined, required: boolean|undefined}>}}
	 */
	_schemaDefinition()
	{
		return {
			"description": "An instance represents a single server and it allows performing certain operations on the server which do not make sense at InstanceArray level or are a better fit for individual management, for example rebooting a single instance to not have to reboot an entire farm at the same time (to minimize or eliminate downtime).",
			"type": "object",
			"properties": {
				"instance_label": {
					"type": [
						"null",
						"string"
					],
					"description": "The instance's label which is unique and it is used to form the <code>instance_subdomain<\/code>. Can be used to call API functions.",
					"minLength": 1,
					"maxLength": 63,
					"required": false,
					"pattern": "^[a-zA-Z]{1,1}[a-zA-Z0-9-]{0,61}[a-zA-Z0-9]{1,1}|[a-zA-Z]{1,1}$",
					"default": null
				},
				"instance_subdomain": {
					"type": [
						"string",
						"null"
					],
					"description": "Automatically created based on <code>instance_label<\/code>. It is a unique reference to the Instance object.",
					"default": null,
					"readonly": true
				},
				"instance_subdomain_permanent": {
					"type": [
						"string",
						"null"
					],
					"description": "Automatically created based on <code>instance_id<\/code>. It is a unique reference to the Instance object.",
					"default": null,
					"readonly": true
				},
				"instance_id": {
					"type": [
						"integer",
						"null",
						"string"
					],
					"description": "The ID of the instance which can be used instead of the <code>instance_label<\/code> or <code>instance_subdomain<\/code> when calling the API functions.  It is automatically generated and cannot be edited.",
					"default": null,
					"readonly": true
				},
				"instance_array_id": {
					"type": [
						"integer",
						"null",
						"string"
					],
					"description": "The ID of the InstanceArray.",
					"default": null,
					"readonly": true
				},
				"server_id": {
					"type": [
						"integer",
						"null"
					],
					"description": "The ID of the associated server.",
					"default": null,
					"readonly": true
				},
				"server_type_id": {
					"type": [
						"integer",
						"null"
					],
					"description": "The instance's server_type_id.",
					"default": null
				},
				"instance_service_status": {
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
					"description": "The status of the instance.",
					"default": null,
					"readonly": true
				},
				"instance_credentials": {
					"type": [
						"InstanceCredentials",
						"null"
					],
					"description": "Credentials used to connect to the server through IPMI, iLO, SSH etc.",
					"default": null,
					"readonly": true
				},
				"instance_operation": {
					"type": [
						"InstanceOperation",
						"null"
					],
					"description": "The operation type, operation status and modified instance object.",
					"default": null,
					"readonly": true
				},
				"instance_interfaces": {
					"type": "array",
					"description": "An array of <a:schema>InstanceInterface<\/a:schema> objects indexed from 0 to 3.",
					"items": {
						"description": "",
						"type": "InstanceInterface"
					},
					"readonly": true
				},
				"instance_created_timestamp": {
					"type": [
						"string",
						"null"
					],
					"description": "ISO 8601 timestamp which holds the date and time when the instance was created. Example format: 2013-11-29T13:00:01Z.",
					"default": "0000-00-00T00:00:00Z",
					"readonly": true
				},
				"instance_updated_timestamp": {
					"type": [
						"string",
						"null"
					],
					"description": "ISO 8601 timestamp which holds the date and time when the instance was edited. Example format: 2013-11-29T13:00:01Z.",
					"default": "0000-00-00T00:00:00Z",
					"readonly": true
				},
				"drive_id_bootable": {
					"type": [
						"integer",
						"null"
					],
					"description": "The ID of the drive the instance boots from.",
					"default": null,
					"readonly": true
				},
				"type": {
					"type": "string",
					"description": "The schema type.",
					"enum": [
						"Instance"
					],
					"readonly": true
				},
				"instance_change_id": {
					"type": [
						"integer",
						"null"
					],
					"description": "This property helps ensure that edit operations don\u2019t overwrite other, more recent changes made to the same object. It gets updated automatically after each successful edit operation.",
					"default": null,
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
				},
				"instance_tags": {
					"type": "array",
					"items": {
						"type": "string",
						"description": ""
					},
					"description": "List of tags representative for the Instance.",
					"default": [
						
					],
					"required": false
				}
			}
		};
	}
};

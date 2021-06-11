const ObjectBase = require("../ObjectBase");

module.exports = 
class Container extends ObjectBase
{
	/**
	 * @protected
	 * 
	 * @returns {{description: string, type: string, properties: Object<propertyName, {type: string|string[], description: string, required: boolean, enum: undefined|string[], items: undefined|{description: string, type: string}, default: string|number|null|boolean, pattern: string|undefined, minLength: number|undefined, maxLength: string|undefined, readonly: boolean|undefined, required: boolean|undefined}>}}
	 */
	_schemaDefinition()
	{
		return {
			"description": "A Container is a child product of the ContainerArray and represents a compute node.",
			"type": "object",
			"properties": {
				"container_id": {
					"type": [
						"integer",
						"null",
						"string"
					],
					"description": "The ID of the Container which can be used instead of the <code>container_label<\/code> or <code>container_subdomain<\/code> when calling the API functions. It is automatically generated and cannot be edited.",
					"default": null,
					"readonly": true
				},
				"container_change_id": {
					"type": [
						"integer",
						"null"
					],
					"description": "This property helps ensure that edit operations don\u2019t overwrite other, more recent changes made to the same object. It gets updated automatically after each successful edit operation.",
					"default": null,
					"required": true
				},
				"container_array_id": {
					"type": "integer",
					"description": "The Container is a child of a ContainerArray.",
					"readonly": true
				},
				"infrastructure_id": {
					"type": [
						"integer",
						"null",
						"string"
					],
					"description": "Represents the infrastructure ID to which the Container belongs.",
					"default": null,
					"readonly": true
				},
				"container_label": {
					"type": [
						"string",
						"null"
					],
					"description": "The Container's unique label is used to create the <code>container_subdomain<\/code>. It is editable and can be used to call API functions.",
					"minLength": 1,
					"maxLength": 63,
					"required": false,
					"pattern": "^[a-zA-Z]{1,1}[a-zA-Z0-9-]{0,61}[a-zA-Z0-9]{1,1}|[a-zA-Z]{1,1}$",
					"default": null
				},
				"container_subdomain": {
					"type": [
						"string",
						"null"
					],
					"description": "Automatically created based on <code>container_label<\/code>. It is a unique reference to the Container object.",
					"default": null,
					"readonly": true
				},
				"container_subdomain_internal": {
					"type": [
						"string",
						"null"
					],
					"description": "Automatically created based on <code>container_label<\/code>. It is a unique reference to the Container object to be used within the ContainerPlatform network.",
					"default": null,
					"readonly": true
				},
				"container_service_status": {
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
					"description": "The status of the Container.",
					"default": null,
					"readonly": true
				},
				"container_operation": {
					"type": [
						"ContainerOperation",
						"null"
					],
					"description": "The operation type, operation status and modified Container object.",
					"default": null,
					"readonly": true
				},
				"container_credentials": {
					"type": [
						"ContainerCredentials",
						"null"
					],
					"description": "Credentials used to connect to the Container.",
					"default": null,
					"readonly": true
				},
				"container_interfaces": {
					"type": "array",
					"items": {
						"description": "ContainerInterface objects",
						"type": "ContainerInterface"
					},
					"description": "All <a:schema>ContainerInterface<\/a:schema> objects.",
					"default": [
						
					],
					"readonly": true
				},
				"container_index": {
					"type": [
						"integer",
						"null"
					],
					"description": "The index of the Container within the ContainerArray.",
					"default": null,
					"readonly": true
				},
				"container_created_timestamp": {
					"type": [
						"string",
						"null"
					],
					"description": "ISO 8601 timestamp which holds the date and time when the Container was created. Example format: 2013-11-29T13:00:01Z.",
					"default": "0000-00-00T00:00:00Z",
					"readonly": true
				},
				"container_updated_timestamp": {
					"type": [
						"string",
						"null"
					],
					"description": "ISO 8601 timestamp which holds the date and time when the Container was edited. Example format: 2013-11-29T13:00:01Z.",
					"default": "0000-00-00T00:00:00Z",
					"readonly": true
				},
				"type": {
					"type": "string",
					"description": "The schema type.",
					"enum": [
						"Container"
					],
					"readonly": true
				}
			}
		};
	}
};

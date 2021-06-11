const ObjectBase = require("../ObjectBase");

module.exports = 
class ContainerOperation extends ObjectBase
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
				"container_label": {
					"type": "string",
					"description": "The Container's unique label is used to create the <code>container_subdomain<\/code>. It is editable and can be used to call API functions.",
					"minLength": 1,
					"maxLength": 63,
					"required": true,
					"pattern": "^[a-zA-Z]{1,1}[a-zA-Z0-9-]{0,61}[a-zA-Z0-9]{1,1}|[a-zA-Z]{1,1}$"
				},
				"container_subdomain": {
					"type": [
						"string",
						"null"
					],
					"description": "Automatically created based on <code>container_label<\/code>. It is a unique reference to the Container object.",
					"readonly": true
				},
				"container_deploy_type": {
					"enum": [
						"create",
						"delete",
						"edit",
						"start",
						"stop",
						"suspend"
					],
					"type": [
						"string",
						"null"
					],
					"description": "The operation applied to the Container.",
					"readonly": true
				},
				"container_deploy_status": {
					"enum": [
						"not_started",
						"ongoing",
						"finished"
					],
					"type": "string",
					"description": "The status of the deploy process.",
					"readonly": true
				},
				"container_interfaces": {
					"type": "array",
					"items": {
						"description": "ContainerInterfaceOperation objects",
						"type": "ContainerInterfaceOperation"
					},
					"description": "All <a:schema>ContainerInterfaceOperation<\/a:schema> objects.",
					"default": [
						
					]
				},
				"container_updated_timestamp": {
					"type": [
						"string",
						"null"
					],
					"description": "ISO 8601 timestamp which holds the date and time when the Container was edited. Example format: 2013-11-29T13:00:01Z.",
					"readonly": true
				},
				"type": {
					"type": "string",
					"description": "The schema type.",
					"enum": [
						"ContainerOperation"
					],
					"readonly": true
				}
			}
		};
	}
};

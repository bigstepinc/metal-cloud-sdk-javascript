const ObjectBase = require("./ObjectBase");


module.exports = 
class ContainerInterfaceOperation extends ObjectBase
{
	/**
	 * @protected
	 * 
	 * @returns {{description: string, type: string, properties: Object<propertyName, {type: string|string[], description: string, required: boolean, enum: undefined|string[], items: undefined|{description: string, type: string}, default: string|number|null|boolean, pattern: string|undefined, minLength: number|undefined, maxLength: string|undefined, readonly: boolean|undefined, required: boolean|undefined}>}}
	 */
	_schemaDefinition()
	{
		return {
			"description": "A ContainerInterface is used to attach all the corresponding Container host interfaces to networks.",
			"type": "object",
			"properties": {
				"container_interface_id": {
					"type": [
						"integer",
						"null"
					],
					"description": "The ID of the ContainerInterface.",
					"readonly": true
				},
				"container_interface_change_id": {
					"type": [
						"integer",
						"null"
					],
					"description": "This property helps ensure that edit operations don\u2019t overwrite other, more recent changes made to the same object. It gets updated automatically after each successful edit operation.",
					"default": null,
					"required": true
				},
				"network_id": {
					"type": [
						"integer",
						"null",
						"string"
					],
					"description": "The ID of the network to which the ContainerInterface is attached.",
					"readonly": true
				},
				"container_interface_label": {
					"type": [
						"null",
						"string"
					],
					"description": "The ContainerInterface's label which is unique and it is used to form the <code>container_interface_subdomain<\/code>. Can be used to call API functions.",
					"enum": [
						"if0",
						"if1",
						"if2"
					],
					"required": false,
					"readonly": true
				},
				"container_interface_subdomain": {
					"type": [
						"string",
						"null"
					],
					"description": "Automatically created based on <code>container_array_interface_label<\/code>. It is a unique reference to the ContainerArrayInterface object.",
					"readonly": true
				},
				"container_interface_deploy_type": {
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
					"description": "The operation applied to ContainerInterface.",
					"readonly": true
				},
				"container_interface_deploy_status": {
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
				"container_interface_index": {
					"type": [
						"integer",
						"null"
					],
					"description": "Shows the index of the interface. Numbering starts at 0. There are 2 interfaces for Container, with indexes 0 and 1.",
					"readonly": true
				},
				"container_interface_updated_timestamp": {
					"type": [
						"string",
						"null"
					],
					"description": "ISO 8601 timestamp which holds the date and time when the ContainerInterface was edited. Example format: 2013-11-29T13:00:01Z.",
					"default": "0000-00-00T00:00:00Z",
					"readonly": true
				},
				"type": {
					"type": "string",
					"description": "The schema type.",
					"enum": [
						"ContainerInterfaceOperation"
					],
					"readonly": true
				}
			}
		};
	}
};

const ObjectBase = require("./ObjectBase");


module.exports = 
class InstanceArrayInterface extends ObjectBase
{
	/**
	 * @protected
	 * 
	 * @returns {{description: string, type: string, properties: Object<propertyName, {type: string|string[], description: string, required: boolean, enum: undefined|string[], items: undefined|{description: string, type: string}, default: string|number|null|boolean, pattern: string|undefined, minLength: number|undefined, maxLength: string|undefined, readonly: boolean|undefined, required: boolean|undefined}>}}
	 */
	_schemaDefinition()
	{
		return {
			"description": "An InstanceArray interface is used to attach all the corresponding instance interfaces to a network.",
			"type": "object",
			"properties": {
				"instance_array_interface_label": {
					"type": [
						"null",
						"string"
					],
					"description": "The instance_array_interface's label which is unique and it is used to form the <code>instance_array_interface_subdomain<\/code>. Can be used to call API functions.",
					"required": false,
					"readonly": true,
					"default": null
				},
				"instance_array_interface_subdomain": {
					"type": [
						"string",
						"null"
					],
					"description": "Automatically created based on <code>instance_array_interface_label<\/code>. It is a unique reference to the InstanceArrayInterface object.",
					"default": null,
					"readonly": true
				},
				"instance_array_interface_id": {
					"type": [
						"integer",
						"null"
					],
					"description": "The ID of the InstanceArray interface.",
					"default": null,
					"readonly": true
				},
				"instance_array_id": {
					"type": [
						"integer",
						"null",
						"string"
					],
					"description": "The ID of the InstanceArray that the interface belongs to.",
					"default": null,
					"readonly": true
				},
				"network_id": {
					"type": [
						"integer",
						"null",
						"string"
					],
					"description": "The ID of the network to which the InstanceArray interface is attached.",
					"default": null
				},
				"instance_array_interface_lagg_indexes": {
					"type": "array",
					"description": "Array of interface indexes which are part of a link aggregation together with this interface. The current interface is never included in this array, even if part of a link aggregation.",
					"default": [
						
					],
					"readonly": true
				},
				"instance_array_interface_index": {
					"type": [
						"integer",
						"null"
					],
					"description": "Shows the index of the interface. Numbering starts at 0.",
					"default": null,
					"readonly": true
				},
				"instance_array_interface_service_status": {
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
					"description": "The status of the InstanceArray interface.",
					"default": null,
					"readonly": true
				},
				"instance_array_interface_operation": {
					"type": [
						"InstanceArrayInterfaceOperation",
						"null"
					],
					"description": "The operation type, operation status and modified InstanceArray Interface object.",
					"default": null,
					"readonly": true
				},
				"instance_array_interface_created_timestamp": {
					"type": [
						"string",
						"null"
					],
					"description": "ISO 8601 timestamp which holds the date and time when the InstanceArray interface was created. Example format: 2013-11-29T13:00:01Z.",
					"default": "0000-00-00T00:00:00Z",
					"readonly": true
				},
				"instance_array_interface_updated_timestamp": {
					"type": [
						"string",
						"null"
					],
					"description": "ISO 8601 timestamp which holds the date and time when the InstanceArray interface was edited. Example format: 2013-11-29T13:00:01Z.",
					"default": "0000-00-00T00:00:00Z",
					"readonly": true
				},
				"type": {
					"type": "string",
					"description": "The schema type.",
					"enum": [
						"InstanceArrayInterface"
					],
					"readonly": true
				},
				"instance_array_interface_change_id": {
					"type": [
						"integer",
						"null"
					],
					"description": "This property helps ensure that edit operations don\u2019t overwrite other, more recent changes made to the same object. It gets updated automatically after each successful edit operation.",
					"default": null,
					"required": true
				}
			}
		};
	}
};

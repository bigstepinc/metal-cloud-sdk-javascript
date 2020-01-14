const ObjectBase = require("./ObjectBase");


module.exports = 
class InstanceArrayInterfaceOperation extends ObjectBase
{
	/**
	 * @protected
	 * 
	 * @returns {{description: string, type: string, properties: Object<propertyName, {type: string|string[], description: string, required: boolean, enum: undefined|string[], items: undefined|{description: string, type: string}, default: string|number|null|boolean, pattern: string|undefined, minLength: number|undefined, maxLength: string|undefined, readonly: boolean|undefined, required: boolean|undefined}>}}
	 */
	_schemaDefinition()
	{
		return {
			"description": "InstanceArrayInterfaceOperation contains information regarding the changes that are to be made to a product. Edit and deploy functions have to be called in order to apply the changes. The operation type and status are unique to each operation object.",
			"type": "object",
			"properties": {
				"instance_array_interface_label": {
					"type": "string",
					"description": "The instance_array_interface's label which is unique and it is used to form the <code>instance_array_interface_subdomain<\/code>. Can be used to call API functions.",
					"required": true,
					"readonly": true
				},
				"instance_array_interface_subdomain": {
					"type": [
						"string",
						"null"
					],
					"description": "Automatically created based on <code>instance_array_interface_label<\/code>. It is a unique reference to the InstanceArrayInterface object.",
					"readonly": true
				},
				"instance_array_interface_deploy_status": {
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
				"instance_array_interface_deploy_type": {
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
					"description": "The operation applied to InstanceArray interface.",
					"readonly": true
				},
				"instance_array_interface_id": {
					"type": [
						"integer",
						"null"
					],
					"description": "The ID of the InstanceArray interface.",
					"required": true
				},
				"instance_array_id": {
					"type": [
						"integer",
						"null",
						"string"
					],
					"description": "The ID of the InstanceArray that the interface belongs to.",
					"readonly": true
				},
				"network_id": {
					"type": [
						"integer",
						"null",
						"string"
					],
					"description": "The ID of the network to which the InstanceArray interface is attached."
				},
				"instance_array_interface_lagg_indexes": {
					"type": "array",
					"description": "Array of interface indexes which are part of a link aggregation together with this interface. The current interface is never included in this array, even if part of a link aggregation.",
					"readonly": true
				},
				"instance_array_interface_updated_timestamp": {
					"type": [
						"string",
						"null"
					],
					"description": "ISO 8601 timestamp which holds the date and time when the InstanceArray interface was edited. Example format: 2013-11-29T13:00:01Z.",
					"readonly": true
				},
				"instance_array_interface_index": {
					"type": [
						"integer",
						"null"
					],
					"description": "Shows the index of the interface. Numbering starts at 0.",
					"readonly": true
				},
				"type": {
					"type": "string",
					"description": "The schema type.",
					"enum": [
						"InstanceArrayInterfaceOperation"
					],
					"readonly": true
				},
				"instance_array_interface_change_id": {
					"type": "integer",
					"description": "This property helps ensure that edit operations don’t overwrite other, more recent changes made to the same object. It gets updated automatically after each successful edit operation.",
					"required": true
				}
			}
		};
	}
};

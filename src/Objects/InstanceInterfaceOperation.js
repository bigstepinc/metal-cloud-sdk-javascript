const ObjectBase = require("../ObjectBase");

module.exports = 
class InstanceInterfaceOperation extends ObjectBase
{
	/**
	 * @protected
	 * 
	 * @returns {{description: string, type: string, properties: Object<propertyName, {type: string|string[], description: string, required: boolean, enum: undefined|string[], items: undefined|{description: string, type: string}, default: string|number|null|boolean, pattern: string|undefined, minLength: number|undefined, maxLength: string|undefined, readonly: boolean|undefined, required: boolean|undefined}>}}
	 */
	_schemaDefinition()
	{
		return {
			"description": "InstanceInterfaceOperation contains information regarding the changes that are to be made to a product. Edit and deploy functions have to be called in order to apply the changes. The operation type and status are unique to each operation object.",
			"type": "object",
			"properties": {
				"instance_interface_label": {
					"type": "string",
					"description": "The instance_interface's label which is unique and it is used to form the <code>instance_interface_subdomain<\/code>. Can be used to call API functions.",
					"required": true,
					"readonly": true
				},
				"instance_interface_subdomain": {
					"type": [
						"string",
						"null"
					],
					"description": "Automatically created based on <code>instance_interface_label<\/code>. It is a unique reference to the InstanceInterface object.",
					"readonly": true
				},
				"instance_interface_deploy_status": {
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
				"instance_interface_deploy_type": {
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
					"description": "The operation applied to instance interface.",
					"readonly": true
				},
				"instance_interface_id": {
					"type": [
						"integer",
						"null"
					],
					"description": "The ID of the instance interface.",
					"readonly": true
				},
				"instance_id": {
					"type": [
						"integer",
						"null",
						"string"
					],
					"description": "The ID of the instance to which the interface belongs.",
					"readonly": true
				},
				"network_id": {
					"type": [
						"integer",
						"null",
						"string"
					],
					"description": "The ID of the network to which the instance's interface is connected.",
					"readonly": true
				},
				"instance_interface_lagg_indexes": {
					"type": "array",
					"description": "Array of interface indexes which are part of a link aggregation together with this interface. The current interface is never included in this array, even if part of a link aggregation.",
					"readonly": true
				},
				"instance_interface_index": {
					"type": [
						"integer",
						"null"
					],
					"description": "Shows the index of the interface. Numbering starts at 0.",
					"readonly": true
				},
				"instance_interface_capacity_mbps": {
					"type": [
						"integer",
						"null"
					],
					"description": "Shows the capacity of the instance.",
					"readonly": true
				},
				"type": {
					"type": "string",
					"description": "The schema type.",
					"enum": [
						"InstanceInterfaceOperation"
					],
					"readonly": true
				},
				"instance_interface_change_id": {
					"type": "integer",
					"description": "This value helps check against edit requests on expired objects.",
					"required": true
				}
			}
		};
	}
};

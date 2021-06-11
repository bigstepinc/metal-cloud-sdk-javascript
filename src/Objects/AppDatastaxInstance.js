const ObjectBase = require("../ObjectBase");

module.exports = 
class AppDatastaxInstance extends ObjectBase
{
	/**
	 * @protected
	 * 
	 * @returns {{description: string, type: string, properties: Object<propertyName, {type: string|string[], description: string, required: boolean, enum: undefined|string[], items: undefined|{description: string, type: string}, default: string|number|null|boolean, pattern: string|undefined, minLength: number|undefined, maxLength: string|undefined, readonly: boolean|undefined, required: boolean|undefined}>}}
	 */
	_schemaDefinition()
	{
		return {
			"description": "Details about the Instance object specific to Datastax.",
			"type": "object",
			"properties": {
				"opscenter_username": {
					"type": [
						"string",
						"null"
					],
					"description": "The initial admin username on the opscenter interface of the cluster.",
					"required": true,
					"readonly": true
				},
				"opscenter_initial_password": {
					"type": [
						"string",
						"null"
					],
					"description": "The initial admin password on the opscenter interface of the cluster.",
					"required": true,
					"readonly": true
				},
				"opscenter_ip": {
					"type": [
						"string",
						"null"
					],
					"description": "The IP for the opscenter interface of the cluster.",
					"required": true,
					"readonly": true
				},
				"rpc_url": {
					"type": [
						"string",
						"null"
					],
					"description": "The URL for the RPC of the node.",
					"required": true,
					"readonly": true
				},
				"instance_id": {
					"type": [
						"integer",
						"null",
						"string"
					],
					"description": "The ID of the instance associated with the node.",
					"readonly": true
				},
				"instance_label": {
					"type": [
						"null",
						"string"
					],
					"description": "The label of the instance associated with the node.",
					"readonly": true
				},
				"type": {
					"type": "string",
					"description": "The schema type",
					"enum": [
						"AppDatastaxInstance"
					],
					"readonly": true
				}
			}
		};
	}
};

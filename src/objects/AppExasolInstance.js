const ObjectBase = require("./ObjectBase");


module.exports = 
class AppExasolInstance extends ObjectBase
{
	/**
	 * @protected
	 * 
	 * @returns {{description: string, type: string, properties: Object<propertyName, {type: string|string[], description: string, required: boolean, enum: undefined|string[], items: undefined|{description: string, type: string}, default: string|number|null|boolean, pattern: string|undefined, minLength: number|undefined, maxLength: string|undefined, readonly: boolean|undefined, required: boolean|undefined}>}}
	 */
	_schemaDefinition()
	{
		return {
			"description": "Details about the Instance object specific to Exasol.",
			"type": "object",
			"properties": {
				"admin_username": {
					"type": [
						"string",
						"null"
					],
					"description": "The initial admin username on the interface of the cluter.",
					"required": true,
					"readonly": true
				},
				"admin_initial_password": {
					"type": [
						"string",
						"null"
					],
					"description": "The initial admin password on the interface of the cluster.",
					"required": true,
					"readonly": true
				},
				"exaoperation_ip": {
					"type": [
						"string",
						"null"
					],
					"description": "The IP for the interface of the cluster.",
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
					"default": null,
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
						"AppExasolInstance"
					],
					"readonly": true
				}
			}
		};
	}
};

const ObjectBase = require("./ObjectBase");


module.exports = 
class AppMesosInstance extends ObjectBase
{
	/**
	 * @protected
	 * 
	 * @returns {{description: string, type: string, properties: Object<propertyName, {type: string|string[], description: string, required: boolean, enum: undefined|string[], items: undefined|{description: string, type: string}, default: string|number|null|boolean, pattern: string|undefined, minLength: number|undefined, maxLength: string|undefined, readonly: boolean|undefined, required: boolean|undefined}>}}
	 */
	_schemaDefinition()
	{
		return {
			"description": "Details about the Instance object specific to Mesos.",
			"type": "object",
			"properties": {
				"admin_username": {
					"type": [
						"string",
						"null"
					],
					"description": "The initial admin username for the Mesos interface of the cluster.",
					"required": true,
					"readonly": true
				},
				"admin_initial_password": {
					"type": [
						"string",
						"null"
					],
					"description": "The initial admin password for the Mesos interface of the cluster.",
					"required": true,
					"readonly": true
				},
				"mesos_ip": {
					"type": [
						"string",
						"null"
					],
					"description": "The IP of the Mesos interface of the cluster.",
					"required": true,
					"readonly": true
				},
				"mesos_version": {
					"type": [
						"string",
						"null"
					],
					"description": "The Mesos version installed on the cluster.",
					"required": true,
					"readonly": true
				},
				"marathon_ip": {
					"type": [
						"string",
						"null"
					],
					"description": "The IP of the Marathon interface of the cluster.",
					"required": true,
					"readonly": true
				},
				"marathon_version": {
					"type": [
						"string",
						"null"
					],
					"description": "The Marathon version installed on the cluster.",
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
						"AppMesosInstance"
					],
					"readonly": true
				}
			}
		};
	}
};

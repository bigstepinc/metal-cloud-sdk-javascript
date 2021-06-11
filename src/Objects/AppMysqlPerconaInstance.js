const ObjectBase = require("../ObjectBase");

module.exports = 
class AppMysqlPerconaInstance extends ObjectBase
{
	/**
	 * @protected
	 * 
	 * @returns {{description: string, type: string, properties: Object<propertyName, {type: string|string[], description: string, required: boolean, enum: undefined|string[], items: undefined|{description: string, type: string}, default: string|number|null|boolean, pattern: string|undefined, minLength: number|undefined, maxLength: string|undefined, readonly: boolean|undefined, required: boolean|undefined}>}}
	 */
	_schemaDefinition()
	{
		return {
			"description": "Details about the Instance object specific to MySQLPercona. The information presented here is obtained by interrogating the MySQLPercona API. Backward compatibility object will not be ensured when the underlying MySQLPercona API changes.",
			"type": "object",
			"properties": {
				"admin_username": {
					"type": [
						"string",
						"null"
					],
					"description": "The initial admin username on the instance.",
					"required": true,
					"readonly": true
				},
				"admin_initial_password": {
					"type": [
						"string",
						"null"
					],
					"description": "The initial admin password on the instance.",
					"required": true,
					"readonly": true
				},
				"hostname": {
					"type": [
						"string",
						"null"
					],
					"description": "The name of the instance. Usually the IP of the instance.",
					"required": true,
					"readonly": true
				},
				"port": {
					"type": [
						"integer",
						"string",
						"null"
					],
					"description": "The port used for the MySQL connection.",
					"required": true,
					"readonly": true
				},
				"status": {
					"type": [
						"string",
						"null"
					],
					"description": "The health status of the instance.",
					"required": true,
					"readonly": true
				},
				"version": {
					"type": [
						"string",
						"null"
					],
					"description": "The version of the MySQLPercona software.",
					"required": true,
					"readonly": true
				},
				"memoryTotal": {
					"type": [
						"string",
						"null"
					],
					"description": "",
					"required": true,
					"readonly": true
				},
				"memoryFree": {
					"type": [
						"string",
						"null"
					],
					"description": "",
					"required": true,
					"readonly": true
				},
				"instance_id": {
					"type": [
						"integer",
						"null",
						"string"
					],
					"description": "The ID of the instance associated with the node",
					"readonly": true
				},
				"instance_label": {
					"type": [
						"null",
						"string"
					],
					"description": "The label of the instance associated with the node",
					"readonly": true
				},
				"type": {
					"type": "string",
					"description": "The schema type",
					"enum": [
						"AppMysqlPerconaInstance"
					],
					"readonly": true
				}
			}
		};
	}
};

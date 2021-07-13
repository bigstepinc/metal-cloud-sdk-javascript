const ObjectBase = require("../ObjectBase");

module.exports = 
class Variable extends ObjectBase
{
	/**
	 * @protected
	 * 
	 * @returns {{description: string, type: string, properties: Object<propertyName, {type: string|string[], description: string, required: boolean, enum: undefined|string[], items: undefined|{description: string, type: string}, default: string|number|null|boolean, pattern: string|undefined, minLength: number|undefined, maxLength: string|undefined, readonly: boolean|undefined, required: boolean|undefined}>}}
	 */
	_schemaDefinition()
	{
		return {
			"description": "Variable item in a vault.",
			"type": "object",
			"properties": {
				"variable_id": {
					"type": [
						"integer",
						"null"
					],
					"description": "Unique variable ID.",
					"required": false,
					"default": null
				},
				"user_id_owner": {
					"type": [
						"integer",
						"null"
					],
					"description": "Owner. Delegates of this user can manage his variables as well. When null, defaults to the API authenticated user.",
					"required": false,
					"readonly": false,
					"default": null
				},
				"user_id_authenticated": {
					"type": [
						"integer",
						"null"
					],
					"description": "The user which last updated the variable.",
					"required": false,
					"default": null,
					"readonly": true
				},
				"variable_name": {
					"type": "string",
					"description": "Must start with a letter and end with a letter or digit. May contain underscores, latin characters and digits. When copied into the generated variables JSON of an AnsibleBundle execution context, the variable name is used as-is.",
					"minLength": 1,
					"maxLength": 63,
					"required": true,
					"pattern": "^[a-z]{1,1}[a-z0-9_]{0,61}[a-z0-9]{1,1}|[a-z]{1,1}$"
				},
				"variable_name_unique": {
					"type": "string",
					"description": "Auto generated label for the variable. If the variable is generated in some user's scope, then this field will be the concatenation of variable_name and user id owner fields.",
					"required": true
				},
				"variable_usage": {
					"type": [
						"string",
						"null"
					],
					"description": "If null, any kind of usage is enabled. Otherwise, a comma separated list of allowed usage types.",
					"enum": [
						"HTTPRequest",
						"JavaScript",
						"APICall",
						"AnsibleBundle",
						"SSHExec",
						"Copy",
						"OSAsset"
					],
					"required": false,
					"default": null
				},
				"variable_json": {
					"type": "string",
					"description": "Variable value in JSON format.",
					"required": true
				},
				"variable_created_timestamp": {
					"type": [
						"string",
						"null"
					],
					"description": "Date and time of the variable's creation.",
					"default": null,
					"readonly": true
				},
				"variable_updated_timestamp": {
					"type": [
						"string",
						"null"
					],
					"description": "Date and time of the variable's update (replace).",
					"default": null,
					"readonly": true
				},
				"type": {
					"type": "string",
					"description": "The schema type",
					"enum": [
						"Variable"
					],
					"readonly": true
				}
			}
		};
	}
};

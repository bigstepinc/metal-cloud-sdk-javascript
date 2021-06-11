const ObjectBase = require("../ObjectBase");

module.exports = 
class ContainerArrayEnvironmentVariable extends ObjectBase
{
	/**
	 * @protected
	 * 
	 * @returns {{description: string, type: string, properties: Object<propertyName, {type: string|string[], description: string, required: boolean, enum: undefined|string[], items: undefined|{description: string, type: string}, default: string|number|null|boolean, pattern: string|undefined, minLength: number|undefined, maxLength: string|undefined, readonly: boolean|undefined, required: boolean|undefined}>}}
	 */
	_schemaDefinition()
	{
		return {
			"description": "ContainerArray environment variable.",
			"type": "object",
			"properties": {
				"environment_variable_name": {
					"type": "string",
					"description": "Environment variable name.",
					"required": true
				},
				"environment_variable_value": {
					"type": "string",
					"description": "Environment variable value.",
					"required": true
				},
				"type": {
					"type": "string",
					"description": "The schema type.",
					"enum": [
						"ContainerArrayEnvironmentVariable"
					],
					"readonly": true
				}
			}
		};
	}
};

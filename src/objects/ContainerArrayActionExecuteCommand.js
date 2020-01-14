const ObjectBase = require("./ObjectBase");


module.exports = 
class ContainerArrayActionExecuteCommand extends ObjectBase
{
	/**
	 * @protected
	 * 
	 * @returns {{description: string, type: string, properties: Object<propertyName, {type: string|string[], description: string, required: boolean, enum: undefined|string[], items: undefined|{description: string, type: string}, default: string|number|null|boolean, pattern: string|undefined, minLength: number|undefined, maxLength: string|undefined, readonly: boolean|undefined, required: boolean|undefined}>}}
	 */
	_schemaDefinition()
	{
		return {
			"description": "ContainerArray action that executes a command on the Containers to asses their readiness or liveness.",
			"type": "object",
			"properties": {
				"action_command": {
					"type": "array",
					"items": {
						"description": "An array of strings.",
						"type": "string"
					},
					"description": "Command to execute on the Containers. The command is not executed using a shell and the root of each Container (/) is used as working directory. An exit status of 0 is treated as healthy and non-zero as unhealthy",
					"required": true
				},
				"type": {
					"type": "string",
					"description": "The schema type.",
					"enum": [
						"ContainerArrayActionExecuteCommand"
					],
					"readonly": true
				}
			}
		};
	}
};

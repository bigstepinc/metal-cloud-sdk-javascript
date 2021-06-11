const ObjectBase = require("../ObjectBase");

module.exports = 
class WorkflowReference extends ObjectBase
{
	/**
	 * @protected
	 * 
	 * @returns {{description: string, type: string, properties: Object<propertyName, {type: string|string[], description: string, required: boolean, enum: undefined|string[], items: undefined|{description: string, type: string}, default: string|number|null|boolean, pattern: string|undefined, minLength: number|undefined, maxLength: string|undefined, readonly: boolean|undefined, required: boolean|undefined}>}}
	 */
	_schemaDefinition()
	{
		return {
			"description": "Points to a Workflow object via its workflow_id. To be used as a stage definition.",
			"type": "object",
			"properties": {
				"workflow_id": {
					"type": "integer",
					"description": "Unique Workflow ID.",
					"minimum": 1,
					"required": true
				},
				"type": {
					"type": "string",
					"description": "The schema type.",
					"enum": [
						"WorkflowReference"
					],
					"readonly": false
				}
			}
		};
	}
};

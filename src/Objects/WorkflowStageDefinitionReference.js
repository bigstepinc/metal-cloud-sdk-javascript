const ObjectBase = require("../ObjectBase");

module.exports = 
class WorkflowStageDefinitionReference extends ObjectBase
{
	/**
	 * @protected
	 * 
	 * @returns {{description: string, type: string, properties: Object<propertyName, {type: string|string[], description: string, required: boolean, enum: undefined|string[], items: undefined|{description: string, type: string}, default: string|number|null|boolean, pattern: string|undefined, minLength: number|undefined, maxLength: string|undefined, readonly: boolean|undefined, required: boolean|undefined}>}}
	 */
	_schemaDefinition()
	{
		return {
			"description": "Points to a StageDefinition which is to be executed with a specified priority. Also contains information on the last execution of this specific reference to a StageDefinition. Multiple references to the same StageDefinition may coexist in the same Workflow.",
			"type": "object",
			"properties": {
				"workflow_stage_id": {
					"type": [
						"integer",
						"null"
					],
					"description": "Unique StageDefinition reference ID on an Workflow.",
					"minimum": 1,
					"required": false,
					"default": null
				},
				"workflow_id": {
					"type": "integer",
					"description": "Unique Workflow ID.",
					"minimum": 1,
					"required": true
				},
				"workflow_stage_run_level": {
					"type": "integer",
					"description": "Lowest is first to be executed. Multiple WorkflowStageDefinitionReference items with the same workflow_id having the same run level will be executed in parallel. StageDefinition items of the WorkflowReference type are unwrapped recursively in-place before execution or when added to an infrastructure deploy which means that adding, removing or reordering StageDefinition references will have no effect on an ongoing Workflow execution.",
					"minimum": 0,
					"required": true
				},
				"stage_definition_id": {
					"type": "integer",
					"description": "Unique StageDefinition ID.",
					"minimum": 1,
					"required": true
				},
				"workflow_stage_variables": {
					"type": [
						"object",
						"null"
					],
					"description": "Custom variables definitions. Object with variable name as key and variable value as value. In case of variable name conflict, the variable defined here overrides the variable inherited from any context.",
					"default": null,
					"readonly": false
				},
				"instance_array_label": {
					"type": [
						"string",
						"null"
					],
					"description": "Execution context. Weak reference which is resolved to an instance_array_id at runtime, based on the instance_array_label from instance_array_operation. The stage will be added in the deploy for each child instance.",
					"minLength": 1,
					"maxLength": 63,
					"required": false,
					"pattern": "^[a-zA-Z]{1,1}[a-zA-Z0-9-]{0,61}[a-zA-Z0-9]{1,1}|[a-zA-Z]{1,1}$",
					"default": null
				},
				"drive_array_label": {
					"type": [
						"string",
						"null"
					],
					"description": "Execution context. Weak reference which is resolved to a drive_array_id at runtime, based on the drive_array_label from drive_array_operation. The stage will be added in the deploy for each child drive.",
					"minLength": 1,
					"maxLength": 63,
					"required": false,
					"pattern": "^[a-zA-Z]{1,1}[a-zA-Z0-9-]{0,61}[a-zA-Z0-9]{1,1}|[a-zA-Z]{1,1}$",
					"default": null
				},
				"shared_drive_label": {
					"type": [
						"string",
						"null"
					],
					"description": "Execution context. Weak reference which is resolved to a shared_drive_id at runtime, based on the shared_drive_label from shared_drive_changes.",
					"minLength": 1,
					"maxLength": 63,
					"required": false,
					"pattern": "^[a-zA-Z]{1,1}[a-zA-Z0-9-]{0,61}[a-zA-Z0-9]{1,1}|[a-zA-Z]{1,1}$",
					"default": null
				},
				"cluster_label": {
					"type": [
						"string",
						"null"
					],
					"description": "Execution context. Weak reference which is resolved to a cluster_id at runtime, based on the cluster_label from cluster_changes. The stage will be added in the deploy only once. The stage will NOT be added in the deploy for any child products.",
					"minLength": 1,
					"maxLength": 63,
					"required": false,
					"pattern": "^[a-zA-Z]{1,1}[a-zA-Z0-9-]{0,61}[a-zA-Z0-9]{1,1}|[a-zA-Z]{1,1}$",
					"default": null
				},
				"workflow_stage_exec_output_json": {
					"type": [
						"string",
						"null"
					],
					"description": "Information on the last run. May be of any type and have any properties if an object. These properties may be present: successMessage:string|null, successMessageTimestamp:string|null, errorMessage:string|null, errorMessageTimestamp:string|null",
					"default": null,
					"readonly": true
				},
				"type": {
					"type": "string",
					"description": "The schema type.",
					"enum": [
						"WorkflowStageDefinitionReference"
					],
					"readonly": false
				}
			}
		};
	}
};

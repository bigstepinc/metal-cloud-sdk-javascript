const ObjectBase = require("../ObjectBase");

module.exports = 
class InfrastructureDeployStageDefinitionReference extends ObjectBase
{
	/**
	 * @protected
	 * 
	 * @returns {{description: string, type: string, properties: Object<propertyName, {type: string|string[], description: string, required: boolean, enum: undefined|string[], items: undefined|{description: string, type: string}, default: string|number|null|boolean, pattern: string|undefined, minLength: number|undefined, maxLength: string|undefined, readonly: boolean|undefined, required: boolean|undefined}>}}
	 */
	_schemaDefinition()
	{
		return {
			"description": "Points to a StageDefinition which is to be executed with a specified priority. Also contains information on the last execution of this specific reference to a StageDefinition. Multiple references to the same StageDefinition may coexist on the same Infrastructure.",
			"type": "object",
			"properties": {
				"infrastructure_deploy_custom_stage_id": {
					"type": [
						"integer",
						"null"
					],
					"description": "Unique StageDefinition reference ID on an Infrastructure.",
					"minimum": 1,
					"required": false,
					"default": null
				},
				"infrastructure_id": {
					"type": "integer",
					"description": "Unique Infrastructure ID.",
					"minimum": 1,
					"required": true
				},
				"infrastructure_deploy_custom_stage_run_level": {
					"type": "integer",
					"description": "Lowest is first to be executed. Multiple InfrastructureDeployStageDefinitionReference items with the same workflow_id having the same run level will be executed in parallel. StageDefinition items of the WorkflowReference type are unwrapped recursively in-place before execution or when added to an infrastructure deploy which means that adding, removing or reordering StageDefinition references will have no effect on an ongoing Infrastructure deploy.",
					"minimum": 0,
					"required": true
				},
				"stage_definition_id": {
					"type": "integer",
					"description": "Unique StageDefinition ID.",
					"minimum": 1,
					"required": true
				},
				"infrastructure_deploy_custom_stage_type": {
					"type": "string",
					"description": "pre_deploy stages run before anything else in a deploy and are destined to be used for preparing for stopping various resource such as stopping or deleting instances, removing storage, etc.",
					"enum": [
						"pre_deploy",
						"post_deploy"
					],
					"default": "post_deploy",
					"readonly": false
				},
				"infrastructure_deploy_custom_stage_variables": {
					"type": [
						"object",
						"null"
					],
					"description": "Custom variables definitions. Object with variable name as key and variable value as value. In case of variable name conflict, the variable defined here overrides the variable inherited from any context.",
					"default": null,
					"readonly": false
				},
				"instance_array_id": {
					"type": [
						"integer",
						"null",
						"string"
					],
					"description": "Execution context. The stage will be added in the deploy for each child instance.",
					"default": null
				},
				"shared_drive_id": {
					"type": [
						"integer",
						"null",
						"string"
					],
					"description": "Execution context.",
					"default": null
				},
				"cluster_id": {
					"type": [
						"integer",
						"null",
						"string"
					],
					"description": "Execution context. The stage will be added in the deploy only once. The stage will NOT be added in the deploy for any child products.",
					"default": null
				},
				"infrastructure_deploy_custom_stage_exec_output_json": {
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

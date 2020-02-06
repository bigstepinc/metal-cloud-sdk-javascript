const ObjectBase = require("./ObjectBase");


module.exports = 
class InfrastructureCustomDeployStage extends ObjectBase
{
	/**
	 * @protected
	 * 
	 * @returns {{description: string, type: string, properties: Object<propertyName, {type: string|string[], description: string, required: boolean, enum: undefined|string[], items: undefined|{description: string, type: string}, default: string|number|null|boolean, pattern: string|undefined, minLength: number|undefined, maxLength: string|undefined, readonly: boolean|undefined, required: boolean|undefined}>}}
	 */
	_schemaDefinition()
	{
		return {
			"description": "An Infrastructure custom deploy stage is an association of an StageDefinition, an Infrastructure and a run level priority index.",
			"type": "object",
			"properties": {
				"infrastructure_deploy_custom_stage_id": {
					"type": "integer",
					"description": "Unique Infrastructure, StageDefinition and run level index association ID.",
					"required": true,
					"minimum": 1
				},
				"stage_definition_id": {
					"type": "integer",
					"description": "Represents an <a:schema>StageDefinition</a:schema>.",
					"required": true,
					"minimum": 1
				},
				"infrastructure_id": {
					"type": "integer",
					"description": "Represents an <a:schema>Infrastructure</a:schema>",
					"required": true,
					"minimum": 1
				},
				"infrastructure_deploy_custom_stage_run_level": {
					"type": "integer",
					"description": "Run priority index. 0 runs first. If multiple StageDefinitions are on the same priority they run in parallel.",
					"required": true,
					"minimum": 0
				},
				"infrastructure_deploy_custom_stage_exec_output_json": {
					"type": [
						"string",
						"null"
					],
					"description": "Unstructured JSON.",
					"required": false,
					"default": null
				},
				"type": {
					"type": "string",
					"description": "The schema type",
					"enum": [
						"InfrastructureCustomDeployStage"
					],
					"readonly": true
				}
			}
		};
	}
};

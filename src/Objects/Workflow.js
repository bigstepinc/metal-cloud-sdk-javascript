const ObjectBase = require("../ObjectBase");

module.exports = 
class Workflow extends ObjectBase
{
	/**
	 * @protected
	 * 
	 * @returns {{description: string, type: string, properties: Object<propertyName, {type: string|string[], description: string, required: boolean, enum: undefined|string[], items: undefined|{description: string, type: string}, default: string|number|null|boolean, pattern: string|undefined, minLength: number|undefined, maxLength: string|undefined, readonly: boolean|undefined, required: boolean|undefined}>}}
	 */
	_schemaDefinition()
	{
		return {
			"description": "A group for StageDefinition references which are executed in a particular order.",
			"type": "object",
			"properties": {
				"workflow_id": {
					"type": [
						"integer",
						"null"
					],
					"description": "Unique workflow ID.",
					"required": false,
					"default": null
				},
				"user_id_owner": {
					"type": [
						"integer",
						"null"
					],
					"description": "Owner. Delegates of this user can manage his workflows as well. When null, defaults to the API authenticated user.",
					"required": false,
					"readonly": false,
					"default": null
				},
				"user_id_authenticated": {
					"type": [
						"integer",
						"null"
					],
					"description": "The user which last updated the Workflow object.",
					"required": false,
					"default": null,
					"readonly": true
				},
				"workflow_label": {
					"type": [
						"null",
						"string"
					],
					"description": "A label which is unique per owner.",
					"minLength": 1,
					"maxLength": 63,
					"required": false,
					"pattern": "^[a-zA-Z]{1,1}[a-zA-Z0-9-]{0,61}[a-zA-Z0-9]{1,1}|[a-zA-Z]{1,1}$",
					"default": null
				},
				"workflow_usage": {
					"type": "string",
					"description": "A particular resource type. The usage type specifies an intended variables context with which the workflow is compatible. It also helps users locate workflows more easily when picking a workflow from a list.",
					"enum": [
						"infrastructure",
						"switch_device",
						"server",
						"free_standing",
						"storage_pool",
						"user",
						"os_template"
					],
					"required": false,
					"default": null
				},
				"workflow_title": {
					"type": "string",
					"description": "Human readable title.",
					"minLength": 1,
					"maxLength": 255,
					"required": true
				},
				"workflow_description": {
					"type": "string",
					"description": "Accurate description of what the Workflow is intended to do.",
					"minLength": 0,
					"maxLength": 65535,
					"required": false,
					"default": ""
				},
				"workflow_is_deprecated": {
					"type": "boolean",
					"description": "Adding new references to deprecated workflows is generally prevented.",
					"default": false,
					"readonly": false,
					"required": false
				},
				"icon_asset_data_uri": {
					"type": [
						"string",
						"null"
					],
					"description": "Icon image file in data URI format like this: data:image/png;base64,iVBOR=",
					"required": false,
					"readonly": false,
					"maxLength": 65500,
					"default": null
				},
				"workflow_created_timestamp": {
					"type": [
						"string",
						"null"
					],
					"description": "Date and time of the workflow's creation.",
					"default": null,
					"readonly": true
				},
				"workflow_updated_timestamp": {
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
						"Workflow"
					],
					"readonly": true
				}
			}
		};
	}
};

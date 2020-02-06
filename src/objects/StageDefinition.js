const ObjectBase = require("./ObjectBase");


module.exports = 
class StageDefinition extends ObjectBase
{
	/**
	 * @protected
	 * 
	 * @returns {{description: string, type: string, properties: Object<propertyName, {type: string|string[], description: string, required: boolean, enum: undefined|string[], items: undefined|{description: string, type: string}, default: string|number|null|boolean, pattern: string|undefined, minLength: number|undefined, maxLength: string|undefined, readonly: boolean|undefined, required: boolean|undefined}>}}
	 */
	_schemaDefinition()
	{
		return {
			"description": "A stage definition contains a JavaScript file, HTTP request url and options, an AnsibleBundle or an API call template.",
			"type": "object",
			"properties": {
				"stage_definition_id": {
					"type": [
						"integer",
						"null"
					],
					"description": "Unique ID.",
					"required": false,
					"default": null
				},
				"user_id_owner": {
					"type": [
						"integer",
						"null"
					],
					"description": "Owner. Delegates of this user can manage his stage definitions as well. When null and creating a StageDefinition, defaults to the API caller's authenticated user ID. This property cannot be updated on an existing resource.",
					"required": false,
					"readonly": false,
					"default": null
				},
				"user_id_authenticated": {
					"type": [
						"integer",
						"null"
					],
					"description": "The user which last updated the stage definition.",
					"required": false,
					"default": null,
					"readonly": true
				},
				"stage_definition_label": {
					"type": "string",
					"description": "The stage definition's label is unique per user_id_owner. Read-only when updating a stage definition.",
					"minLength": 1,
					"maxLength": 63,
					"required": true,
					"pattern": "^[a-zA-Z]{1,1}[a-zA-Z0-9-]{0,61}[a-zA-Z0-9]{1,1}|[a-zA-Z]{1,1}$"
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
				"stage_definition_title": {
					"type": "string",
					"description": "For example: Hello World!",
					"required": false,
					"default": "No title specified",
					"maxLength": 100
				},
				"stage_definition_description": {
					"type": [
						"string",
						"null"
					],
					"description": "",
					"required": false,
					"default": null,
					"maxLength": 65535
				},
				"stage_definition_type": {
					"enum": [
						"AnsibleBundle",
						"JavaScript",
						"APICall",
						"HTTPRequest"
					],
					"type": "string",
					"description": "",
					"required": true
				},
				"stage_definition_variable_names_required": {
					"type": "array",
					"items": {
						"type": "string",
						"description": ""
					},
					"description": "JSON array of strings. These must be available in the execution context, otherwise the stage cannot run.",
					"default": [
						
					],
					"required": false
				},
				"stage_definition": {
					"type": [
						"AnsibleBundle",
						"HTTPRequest"
					],
					"items": {
						"type": [
							"AnsibleBundle",
							"HTTPRequest"
						],
						"description": ""
					},
					"description": "",
					"required": true
				},
				"stage_definition_created_timestamp": {
					"type": [
						"string",
						"null"
					],
					"description": "Date and time of the stage definition's creation.",
					"default": null,
					"readonly": true
				},
				"stage_definition_updated_timestamp": {
					"type": [
						"string",
						"null"
					],
					"description": "Date and time of the stage definition's update (replace).",
					"default": null,
					"readonly": true
				},
				"stage_definition_is_deprecated": {
					"type": "boolean",
					"description": "Deprecated stage definitions can no longer be referenced, but existing references will be preserved.",
					"default": false,
					"readonly": true,
					"required": false
				},
				"type": {
					"type": "string",
					"description": "The schema type",
					"enum": [
						"StageDefinition"
					],
					"readonly": false
				}
			}
		};
	}
};

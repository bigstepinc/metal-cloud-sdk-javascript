const ObjectBase = require("../ObjectBase");

module.exports = 
class AppDatameerInstance extends ObjectBase
{
	/**
	 * @protected
	 * 
	 * @returns {{description: string, type: string, properties: Object<propertyName, {type: string|string[], description: string, required: boolean, enum: undefined|string[], items: undefined|{description: string, type: string}, default: string|number|null|boolean, pattern: string|undefined, minLength: number|undefined, maxLength: string|undefined, readonly: boolean|undefined, required: boolean|undefined}>}}
	 */
	_schemaDefinition()
	{
		return {
			"description": "Details about the Datameer instances.",
			"type": "object",
			"properties": {
				"ipAddress": {
					"type": [
						"string",
						"null"
					],
					"description": "The host IP address.",
					"readonly": true
				},
				"url": {
					"type": [
						"string",
						"null"
					],
					"description": "The URL of the Datameer GUI.",
					"readonly": true
				},
				"instance_id": {
					"type": [
						"integer",
						"null",
						"string"
					],
					"description": "The ID of the instance associated with the node.",
					"readonly": true
				},
				"instance_label": {
					"type": [
						"null",
						"string"
					],
					"description": "The label of the instance associated with the node.",
					"readonly": true
				},
				"type": {
					"type": "string",
					"description": "The schema type",
					"enum": [
						"AppDatameerInstance"
					],
					"readonly": true
				}
			}
		};
	}
};

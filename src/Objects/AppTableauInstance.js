const ObjectBase = require("../ObjectBase");

module.exports = 
class AppTableauInstance extends ObjectBase
{
	/**
	 * @protected
	 * 
	 * @returns {{description: string, type: string, properties: Object<propertyName, {type: string|string[], description: string, required: boolean, enum: undefined|string[], items: undefined|{description: string, type: string}, default: string|number|null|boolean, pattern: string|undefined, minLength: number|undefined, maxLength: string|undefined, readonly: boolean|undefined, required: boolean|undefined}>}}
	 */
	_schemaDefinition()
	{
		return {
			"description": "Details about the Instance object specific to Tableau.",
			"type": "object",
			"properties": {
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
						"AppTableauInstance"
					],
					"readonly": true
				}
			}
		};
	}
};

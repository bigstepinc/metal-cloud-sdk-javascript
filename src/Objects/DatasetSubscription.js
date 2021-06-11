const ObjectBase = require("../ObjectBase");

module.exports = 
class DatasetSubscription extends ObjectBase
{
	/**
	 * @protected
	 * 
	 * @returns {{description: string, type: string, properties: Object<propertyName, {type: string|string[], description: string, required: boolean, enum: undefined|string[], items: undefined|{description: string, type: string}, default: string|number|null|boolean, pattern: string|undefined, minLength: number|undefined, maxLength: string|undefined, readonly: boolean|undefined, required: boolean|undefined}>}}
	 */
	_schemaDefinition()
	{
		return {
			"description": "A subscription to a Dataset.",
			"type": "object",
			"properties": {
				"dataset": {
					"description": "The Dataset for which the subscription was created.",
					"type": "Dataset",
					"readonly": true
				},
				"user_id": {
					"description": "The ID of the user that owns the dataset subscription.",
					"type": [
						"integer",
						"null",
						"string"
					],
					"readonly": true
				},
				"dataset_subscription_id": {
					"description": "The ID of the dataset subscription.",
					"type": [
						"integer",
						"string"
					],
					"readonly": true
				},
				"type": {
					"type": "string",
					"description": "The schema type.",
					"enum": [
						"DatasetSubscription"
					],
					"readonly": true
				}
			}
		};
	}
};

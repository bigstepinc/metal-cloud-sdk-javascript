const ObjectBase = require("../ObjectBase");

module.exports = 
class ThresholdSpecificsInstance extends ObjectBase
{
	/**
	 * @protected
	 * 
	 * @returns {{description: string, type: string, properties: Object<propertyName, {type: string|string[], description: string, required: boolean, enum: undefined|string[], items: undefined|{description: string, type: string}, default: string|number|null|boolean, pattern: string|undefined, minLength: number|undefined, maxLength: string|undefined, readonly: boolean|undefined, required: boolean|undefined}>}}
	 */
	_schemaDefinition()
	{
		return {
			"description": "An object which contains specific custonmization properties for <a:schema>Threshold<\/a:schema> of type \"instance_metrics\"",
			"type": "object",
			"properties": {
				"measurement_type": {
					"type": [
						"string"
					],
					"description": "The measurement type which the <a:schema>Threshold<\/a:schema> is monitoring.",
					"required": true,
					"maxLength": 256
				},
				"type": {
					"type": "string",
					"description": "The schema type",
					"enum": [
						"ThresholdSpecificsInstance"
					],
					"required": true
				}
			}
		};
	}
};

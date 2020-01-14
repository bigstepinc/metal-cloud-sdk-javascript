const ObjectBase = require("./ObjectBase");


module.exports = 
class ReportUtilization extends ObjectBase
{
	/**
	 * @protected
	 * 
	 * @returns {{description: string, type: string, properties: Object<propertyName, {type: string|string[], description: string, required: boolean, enum: undefined|string[], items: undefined|{description: string, type: string}, default: string|number|null|boolean, pattern: string|undefined, minLength: number|undefined, maxLength: string|undefined, readonly: boolean|undefined, required: boolean|undefined}>}}
	 */
	_schemaDefinition()
	{
		return {
			"description": "Cost details for resources like instances, Drives and Subnets.",
			"type": "object",
			"properties": {
				"quantity": {
					"type": "number",
					"description": "The amount of a resource used to calculate the costs.",
					"required": true
				},
				"measurement_unit": {
					"type": "string",
					"enum": [
						"seconds",
						"gbytes"
					],
					"description": "The measurement unit used to calculate the costs.",
					"required": true
				},
				"cost": {
					"type": "number",
					"description": "The costs of a certain resource for a period of time.",
					"required": true
				},
				"cost_currency": {
					"type": "string",
					"enum": [
						"null",
						"GBP",
						"USD",
						"EUR"
					],
					"description": "The currency used to calculate the costs.",
					"required": true
				},
				"type": {
					"type": "string",
					"description": "The schema type",
					"enum": [
						"ReportUtilization"
					],
					"readonly": true
				}
			}
		};
	}
};

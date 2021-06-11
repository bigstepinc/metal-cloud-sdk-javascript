const ObjectBase = require("../ObjectBase");

module.exports = 
class ReportServerTypeUtilization extends ObjectBase
{
	/**
	 * @protected
	 * 
	 * @returns {{description: string, type: string, properties: Object<propertyName, {type: string|string[], description: string, required: boolean, enum: undefined|string[], items: undefined|{description: string, type: string}, default: string|number|null|boolean, pattern: string|undefined, minLength: number|undefined, maxLength: string|undefined, readonly: boolean|undefined, required: boolean|undefined}>}}
	 */
	_schemaDefinition()
	{
		return {
			"description": "Cost details for a server type reservation.",
			"type": "object",
			"properties": {
				"cost": {
					"type": "number",
					"description": "The costs of a server reservation for a period of time.",
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
				"server_type_name": {
					"type": "string",
					"description": "The name of the server type.",
					"required": true
				},
				"server_type_reservation_id": {
					"type": "string",
					"description": "The ID of the server type reservation.",
					"required": true
				},
				"created_timestamp": {
					"type": "string",
					"description": "Date and time when the server reservation was created.",
					"required": true
				},
				"start_timestamp": {
					"type": "string",
					"description": "Date and time when the server reservation becomes active. It is an hour later than <code>created_timestamp<\/code>.",
					"required": true
				},
				"end_timestamp": {
					"type": "string",
					"description": "Date and time when the server reservation expires.",
					"required": true
				},
				"type": {
					"type": "string",
					"description": "The schema type",
					"enum": [
						"ReportServerTypeUtilization"
					],
					"readonly": true
				}
			}
		};
	}
};

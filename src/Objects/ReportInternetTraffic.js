const ObjectBase = require("../ObjectBase");

module.exports = 
class ReportInternetTraffic extends ObjectBase
{
	/**
	 * @protected
	 * 
	 * @returns {{description: string, type: string, properties: Object<propertyName, {type: string|string[], description: string, required: boolean, enum: undefined|string[], items: undefined|{description: string, type: string}, default: string|number|null|boolean, pattern: string|undefined, minLength: number|undefined, maxLength: string|undefined, readonly: boolean|undefined, required: boolean|undefined}>}}
	 */
	_schemaDefinition()
	{
		return {
			"description": "The Internet traffic.",
			"type": "object",
			"properties": {
				"download": {
					"type": "ReportUtilization",
					"description": "The downloaded data.",
					"required": true
				},
				"upload": {
					"type": "ReportUtilization",
					"description": "The uploaded data.",
					"required": true
				},
				"type": {
					"type": "string",
					"description": "The schema type",
					"enum": [
						"ReportInternetTraffic"
					],
					"readonly": true
				}
			}
		};
	}
};

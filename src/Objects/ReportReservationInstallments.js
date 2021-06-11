const ObjectBase = require("../ObjectBase");

module.exports = 
class ReportReservationInstallments extends ObjectBase
{
	/**
	 * @protected
	 * 
	 * @returns {{description: string, type: string, properties: Object<propertyName, {type: string|string[], description: string, required: boolean, enum: undefined|string[], items: undefined|{description: string, type: string}, default: string|number|null|boolean, pattern: string|undefined, minLength: number|undefined, maxLength: string|undefined, readonly: boolean|undefined, required: boolean|undefined}>}}
	 */
	_schemaDefinition()
	{
		return {
			"description": "All the detailed costs for server reservations.",
			"type": "object",
			"properties": {
				"server_types": {
					"type": "array",
					"items": {
						"type": "ReportServerTypeUtilization",
						"description": "The costs for each server type."
					},
					"description": "<a:schema>ReportServerTypeUtilization<\/a:schema> objects. The costs for all the servers.",
					"required": true
				},
				"type": {
					"type": "string",
					"description": "The schema type",
					"enum": [
						"ReportReservationInstallments"
					],
					"readonly": true
				}
			}
		};
	}
};

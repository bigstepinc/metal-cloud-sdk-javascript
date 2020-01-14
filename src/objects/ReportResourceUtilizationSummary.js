const ObjectBase = require("./ObjectBase");


module.exports = 
class ReportResourceUtilizationSummary extends ObjectBase
{
	/**
	 * @protected
	 * 
	 * @returns {{description: string, type: string, properties: Object<propertyName, {type: string|string[], description: string, required: boolean, enum: undefined|string[], items: undefined|{description: string, type: string}, default: string|number|null|boolean, pattern: string|undefined, minLength: number|undefined, maxLength: string|undefined, readonly: boolean|undefined, required: boolean|undefined}>}}
	 */
	_schemaDefinition()
	{
		return {
			"description": "Contains the total costs for servers, Drives, Subnets, internet traffic and server reservations.",
			"type": "object",
			"properties": {
				"resource_utilization": {
					"type": "ReportResourceUtilization",
					"description": "All the detailed costs for Drives, instances and Subnets.",
					"required": true
				},
				"internet": {
					"type": "ReportInternetTraffic",
					"description": "All the detailed costs for internet traffic.",
					"required": true
				},
				"resource_reservation_installments": {
					"type": "ReportReservationInstallments",
					"description": "All the detailed costs for server type reservations.",
					"required": true
				},
				"infrastructure_ids": {
					"type": "array",
					"items": {
						"type": "integer",
						"description": "The infrastructure ID."
					},
					"description": "The infrastructure IDs for the involved infrastructures.",
					"required": true
				},
				"start_timestamp": {
					"type": "string",
					"description": "ISO 8601 timestamp which holds the start date and time for calculating the costs of the resource usage.",
					"required": true
				},
				"end_timestamp": {
					"type": "string",
					"description": "ISO 8601 timestamp which holds the end date and time for calculating the costs of the resource usage.",
					"required": true
				},
				"type": {
					"type": "string",
					"description": "The schema type",
					"enum": [
						"ReportResourceUtilizationSummary"
					],
					"readonly": true
				}
			}
		};
	}
};

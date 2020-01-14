const ObjectBase = require("./ObjectBase");


module.exports = 
class Threshold extends ObjectBase
{
	/**
	 * @protected
	 * 
	 * @returns {{description: string, type: string, properties: Object<propertyName, {type: string|string[], description: string, required: boolean, enum: undefined|string[], items: undefined|{description: string, type: string}, default: string|number|null|boolean, pattern: string|undefined, minLength: number|undefined, maxLength: string|undefined, readonly: boolean|undefined, required: boolean|undefined}>}}
	 */
	_schemaDefinition()
	{
		return {
			"description": "Threshold represents a certain property that if reached an infrastructure owner would be notified.",
			"type": "object",
			"properties": {
				"threshold_id": {
					"type": [
						"integer",
						"null",
						"string"
					],
					"description": "The ID of the Threshold",
					"default": null,
					"readonly": true
				},
				"user_id_owner": {
					"type": [
						"null",
						"integer",
						"string"
					],
					"description": "The ID of the user that owns the threshold",
					"default": null,
					"required": true
				},
				"infrastructure_id": {
					"type": [
						"integer",
						"string"
					],
					"description": "The ID of the infrastructure",
					"required": true
				},
				"network_id": {
					"type": [
						"integer",
						"null"
					],
					"description": "The ID of the network",
					"required": false,
					"default": null
				},
				"threshold_description": {
					"type": [
						"string",
						"null"
					],
					"description": "A string which provides a description of the threshold.",
					"required": true,
					"maxLength": 1024,
					"default": ""
				},
				"threshold_value": {
					"type": [
						"integer"
					],
					"description": "The value for the threshold",
					"minimum": 0,
					"required": true
				},
				"threshold_unit": {
					"type": [
						"string"
					],
					"enum": [
						"USD",
						"GBP",
						"EUR",
						"BYTE"
					],
					"description": "The measurement unit associated with the threshold value",
					"required": true
				},
				"threshold_action_repeat_interval_hours": {
					"type": [
						"integer"
					],
					"default": 0,
					"description": "The period of time in hours that must pass before another warning is issued. For a one time warning, null is required",
					"required": true,
					"maximum": 744
				},
				"threshold_type": {
					"enum": [
						"infrastructure_on_demand_and_metered_costs",
						"network_traffic_billing_cycle_total"
					],
					"type": [
						"string"
					],
					"description": "How is the threshold calculated",
					"default": "infrastructure_on_demand_and_metered_costs",
					"required": true
				},
				"threshold_action": {
					"enum": [
						"email"
					],
					"type": [
						"string"
					],
					"description": "What action to be taken when the threshold is reached",
					"required": true,
					"default": "email"
				},
				"threshold_bound_type": {
					"enum": [
						"lower",
						"upper"
					],
					"type": [
						"string"
					],
					"description": "Defines whether the event must be triggered when the measured value is greater than or less than the threshold_value",
					"default": "upper",
					"required": true
				},
				"threshold_value_destination": {
					"enum": [
						"infrastructure_total_costs",
						"network_traffic_upload",
						"network_traffic_download",
						"network_traffic_upload_download"
					],
					"type": [
						"string"
					],
					"required": false,
					"description": "Defines the destination for the threshold value. It can be seen as a subtype of the threshold_type",
					"default": "infrastructure_total_costs"
				},
				"type": {
					"type": "string",
					"description": "The schema type.",
					"enum": [
						"Threshold"
					],
					"readonly": true
				}
			}
		};
	}
};

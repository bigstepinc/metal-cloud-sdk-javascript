const ObjectBase = require("../ObjectBase");

module.exports = 
class ThresholdOperation extends ObjectBase
{
	/**
	 * @protected
	 * 
	 * @returns {{description: string, type: string, properties: Object<propertyName, {type: string|string[], description: string, required: boolean, enum: undefined|string[], items: undefined|{description: string, type: string}, default: string|number|null|boolean, pattern: string|undefined, minLength: number|undefined, maxLength: string|undefined, readonly: boolean|undefined, required: boolean|undefined}>}}
	 */
	_schemaDefinition()
	{
		return {
			"description": "ThresholdOperation contains information regarding the changes that are to be made to a threshold",
			"type": "object",
			"properties": {
				"threshold_description": {
					"type": [
						"string",
						"null"
					],
					"description": "A string which provides a description of the threshold.",
					"maxLength": 1024,
					"required": true
				},
				"threshold_value": {
					"type": [
						"integer"
					],
					"description": "The value for the threshold",
					"minimum": 0,
					"required": true
				},
				"threshold_action_repeat_interval_hours": {
					"type": [
						"integer"
					],
					"description": "The period of time in hours that must pass before another warning is issued. For a one time warning, null is required",
					"required": true,
					"maximum": 744
				},
				"threshold_action": {
					"enum": [
						"email"
					],
					"type": [
						"string"
					],
					"description": "What action to be taken when the threshold is reached",
					"required": true
				},
				"threshold_bound_type": {
					"enum": [
						"lower",
						"upper"
					],
					"type": [
						"string"
					],
					"description": "Defines whether the event must be triggered when the measured value is greater than or less than the threashold_value",
					"required": true
				},
				"threshold_value_destination": {
					"enum": [
						"infrastructure_total_costs",
						"network_traffic_upload",
						"network_traffic_download",
						"network_traffic_upload_download",
						"instance_metrics"
					],
					"type": [
						"string"
					],
					"required": true,
					"description": "Defines the destination for the threshold value. It can be seen as a subtype of the threshold_type"
				},
				"type": {
					"type": "string",
					"description": "The schema type.",
					"enum": [
						"ThresholdOperation"
					],
					"readonly": true
				}
			}
		};
	}
};

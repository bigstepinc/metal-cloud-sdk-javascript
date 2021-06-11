const ObjectBase = require("../ObjectBase");

module.exports = 
class ContainerStatus extends ObjectBase
{
	/**
	 * @protected
	 * 
	 * @returns {{description: string, type: string, properties: Object<propertyName, {type: string|string[], description: string, required: boolean, enum: undefined|string[], items: undefined|{description: string, type: string}, default: string|number|null|boolean, pattern: string|undefined, minLength: number|undefined, maxLength: string|undefined, readonly: boolean|undefined, required: boolean|undefined}>}}
	 */
	_schemaDefinition()
	{
		return {
			"description": "A ContainerStatus contains the status of the Container.",
			"type": "object",
			"properties": {
				"status_phase": {
					"type": [
						"string",
						"null"
					],
					"enum": [
						"pending",
						"running",
						"succeeded",
						"failed",
						"unknown"
					],
					"description": "The phase of the Container.",
					"readonly": true
				},
				"status_reason": {
					"type": [
						"string",
						"null"
					],
					"description": "A brief message that indicates details about the reason that led the Container into the current state.",
					"readonly": true
				},
				"status_message": {
					"type": [
						"string",
						"null"
					],
					"description": "A human readable message that indicates details about the reason that led the Container into the current state.",
					"readonly": true
				},
				"status_started_timestamp": {
					"type": [
						"string",
						"null"
					],
					"description": "RFC3339 timestamp which holds the date and time when the Container was started. Example format: 2013-11-29T13:00:01Z.",
					"readonly": true
				},
				"status_host_ip_public_human_readable": {
					"type": [
						"string",
						"null"
					],
					"description": "The public IP address of the host the Container was scheduled on in natural language.",
					"readonly": true
				},
				"status_container_ip_private_human_readable": {
					"type": [
						"string",
						"null"
					],
					"description": "The Container private IP address in natural language.",
					"readonly": true
				},
				"type": {
					"type": "string",
					"description": "The schema type.",
					"enum": [
						"ContainerStatus"
					],
					"readonly": true
				}
			}
		};
	}
};

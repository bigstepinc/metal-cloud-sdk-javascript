const ObjectBase = require("../ObjectBase");

module.exports = 
class ContainerArrayReadinessCheck extends ObjectBase
{
	/**
	 * @protected
	 * 
	 * @returns {{description: string, type: string, properties: Object<propertyName, {type: string|string[], description: string, required: boolean, enum: undefined|string[], items: undefined|{description: string, type: string}, default: string|number|null|boolean, pattern: string|undefined, minLength: number|undefined, maxLength: string|undefined, readonly: boolean|undefined, required: boolean|undefined}>}}
	 */
	_schemaDefinition()
	{
		return {
			"description": "ContainerArray check to perform in order to asses the readiness or liveness of its Containers.",
			"type": "object",
			"properties": {
				"check_action_type": {
					"enum": [
						"http_get",
						"tcp_socket",
						"execute_command"
					],
					"type": "string",
					"description": "ContainerArrayReadinessCheck action type to perform.",
					"required": true
				},
				"check_action": {
					"type": [
						"ContainerArrayActionHTTPGet",
						"ContainerArrayActionTCPSocket",
						"ContainerArrayActionExecuteCommand"
					],
					"description": "ContainerArrayReadinessCheck action to perform.",
					"required": true
				},
				"check_delay_seconds": {
					"type": "integer",
					"description": "Number of seconds after the Container has started before the ContainerArrayReadinessCheck is initiated.",
					"minimum": 1,
					"default": 5,
					"required": false
				},
				"check_interval_seconds": {
					"type": "integer",
					"description": "Time interval between consecutive ContainerArrayReadinessChecks in seconds. Minimum value is 1.",
					"minimum": 1,
					"default": 10,
					"required": false
				},
				"check_timeout_seconds": {
					"type": "integer",
					"description": "Number of seconds after which the ContainerArrayReadinessCheck times out. Minimum value is 1.",
					"minimum": 1,
					"default": 1,
					"required": false
				},
				"check_success_threshold": {
					"type": "integer",
					"description": "Minimum consecutive successes for the ContainerArrayReadinessCheck to be considered successful after having failed. Minimum value is 1.",
					"minimum": 1,
					"default": 1,
					"required": false
				},
				"check_failure_threshold": {
					"type": "integer",
					"description": "Minimum consecutive failures for the ContainerArrayReadinessCheck to be considered failed after having succeeded. Minimum value is 1.",
					"minimum": 1,
					"default": 3,
					"required": false
				},
				"type": {
					"type": "string",
					"description": "The schema type.",
					"enum": [
						"ContainerArrayReadinessCheck"
					],
					"readonly": true
				}
			}
		};
	}
};

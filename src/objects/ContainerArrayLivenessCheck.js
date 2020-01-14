const ObjectBase = require("./ObjectBase");


module.exports = 
class ContainerArrayLivenessCheck extends ObjectBase
{
	/**
	 * @protected
	 * 
	 * @returns {{description: string, type: string, properties: Object<propertyName, {type: string|string[], description: string, required: boolean, enum: undefined|string[], items: undefined|{description: string, type: string}, default: string|number|null|boolean, pattern: string|undefined, minLength: number|undefined, maxLength: string|undefined, readonly: boolean|undefined, required: boolean|undefined}>}}
	 */
	_schemaDefinition()
	{
		return {
			"description": "ContainerArray check to perform in order to asses the liveness of its Containers.",
			"type": "object",
			"properties": {
				"check_action_type": {
					"enum": [
						"http_get",
						"tcp_socket",
						"execute_command"
					],
					"type": "string",
					"description": "ContainerArrayLivenessCheck action type to perform.",
					"required": true
				},
				"check_action": {
					"type": [
						"ContainerArrayActionHTTPGet",
						"ContainerArrayActionTCPSocket",
						"ContainerArrayActionExecuteCommand"
					],
					"description": "ContainerArrayLivenessCheck action to perform.",
					"required": true
				},
				"check_delay_seconds": {
					"type": "integer",
					"description": "Number of seconds after the Container has started before the ContainerArrayLivenessCheck is initiated.",
					"minimum": 1,
					"default": 10,
					"required": false
				},
				"check_interval_seconds": {
					"type": "integer",
					"description": "Time interval between consecutive ContainerArrayLivenessChecks in seconds. Minimum value is 1.",
					"minimum": 1,
					"default": 10,
					"required": false
				},
				"check_timeout_seconds": {
					"type": "integer",
					"description": "Number of seconds after which the ContainerArrayLivenessCheck times out. Minimum value is 1.",
					"minimum": 1,
					"default": 1,
					"required": false
				},
				"check_failure_threshold": {
					"type": "integer",
					"description": "Minimum consecutive failures for the ContainerArrayLivenessCheck to be considered failed after having succeeded. Minimum value is 1.",
					"minimum": 1,
					"default": 3,
					"required": false
				},
				"type": {
					"type": "string",
					"description": "The schema type.",
					"enum": [
						"ContainerArrayLivenessCheck"
					],
					"readonly": true
				}
			}
		};
	}
};

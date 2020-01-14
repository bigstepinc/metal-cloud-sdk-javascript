const ObjectBase = require("./ObjectBase");


module.exports = 
class ContainerArrayActionTCPSocket extends ObjectBase
{
	/**
	 * @protected
	 * 
	 * @returns {{description: string, type: string, properties: Object<propertyName, {type: string|string[], description: string, required: boolean, enum: undefined|string[], items: undefined|{description: string, type: string}, default: string|number|null|boolean, pattern: string|undefined, minLength: number|undefined, maxLength: string|undefined, readonly: boolean|undefined, required: boolean|undefined}>}}
	 */
	_schemaDefinition()
	{
		return {
			"description": "ContainerArray action that uses tests the state of TCP sockets to asses the readiness or liveness of the Containers.",
			"type": "object",
			"properties": {
				"action_port": {
					"type": "integer",
					"description": "Port to access on the Container.",
					"minimum": 1,
					"required": true
				},
				"type": {
					"type": "string",
					"description": "The schema type.",
					"enum": [
						"ContainerArrayActionTCPSocket"
					],
					"readonly": true
				}
			}
		};
	}
};

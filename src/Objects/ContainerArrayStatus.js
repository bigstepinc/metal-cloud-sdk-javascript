const ObjectBase = require("../ObjectBase");

module.exports = 
class ContainerArrayStatus extends ObjectBase
{
	/**
	 * @protected
	 * 
	 * @returns {{description: string, type: string, properties: Object<propertyName, {type: string|string[], description: string, required: boolean, enum: undefined|string[], items: undefined|{description: string, type: string}, default: string|number|null|boolean, pattern: string|undefined, minLength: number|undefined, maxLength: string|undefined, readonly: boolean|undefined, required: boolean|undefined}>}}
	 */
	_schemaDefinition()
	{
		return {
			"description": "A ContainerArrayStatus contains the status of the ContainerArray.",
			"type": "object",
			"properties": {
				"status_containers_running": {
					"type": "integer",
					"description": "The number of running containers.",
					"readonly": true
				},
				"status_containers_ready": {
					"type": "integer",
					"description": "The number of running containers that passed the readiness check.",
					"readonly": true
				},
				"type": {
					"type": "string",
					"description": "The schema type.",
					"enum": [
						"ContainerArrayStatus"
					],
					"readonly": true
				}
			}
		};
	}
};

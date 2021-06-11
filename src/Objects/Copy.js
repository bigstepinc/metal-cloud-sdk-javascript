const ObjectBase = require("../ObjectBase");

module.exports = 
class Copy extends ObjectBase
{
	/**
	 * @protected
	 * 
	 * @returns {{description: string, type: string, properties: Object<propertyName, {type: string|string[], description: string, required: boolean, enum: undefined|string[], items: undefined|{description: string, type: string}, default: string|number|null|boolean, pattern: string|undefined, minLength: number|undefined, maxLength: string|undefined, readonly: boolean|undefined, required: boolean|undefined}>}}
	 */
	_schemaDefinition()
	{
		return {
			"description": "Source and destination of a SCP operation. The source may be of various types. SCP and HTTP requests are streamed so they are recommended as sources. The destination has to be a SCP resource.",
			"type": "object",
			"properties": {
				"source": {
					"type": [
						"HTTPRequest",
						"SCPResourceLocation"
					],
					"description": "",
					"readonly": false,
					"required": true
				},
				"destination": {
					"type": "SCPResourceLocation",
					"description": "",
					"readonly": false,
					"required": true
				},
				"timeoutMinutes": {
					"type": "integer",
					"description": "Duration timeout in minutes.",
					"default": 240,
					"minimum": 1,
					"maximum": 1440
				},
				"ifDestinationAlreadyExists": {
					"enum": [
						"error",
						"overwrite",
						"errorIfNotSameSize",
						"overwriteIfNotSameSize",
						"ignore"
					],
					"type": "string",
					"description": "What to do if the destination already exists.",
					"default": "overwrite"
				},
				"type": {
					"type": "string",
					"description": "The schema type",
					"enum": [
						"Copy"
					],
					"readonly": false
				}
			}
		};
	}
};

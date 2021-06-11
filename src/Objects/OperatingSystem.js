const ObjectBase = require("../ObjectBase");

module.exports = 
class OperatingSystem extends ObjectBase
{
	/**
	 * @protected
	 * 
	 * @returns {{description: string, type: string, properties: Object<propertyName, {type: string|string[], description: string, required: boolean, enum: undefined|string[], items: undefined|{description: string, type: string}, default: string|number|null|boolean, pattern: string|undefined, minLength: number|undefined, maxLength: string|undefined, readonly: boolean|undefined, required: boolean|undefined}>}}
	 */
	_schemaDefinition()
	{
		return {
			"description": "Contains details about the operating system of a Drive.",
			"type": "object",
			"properties": {
				"operating_system_type": {
					"type": "string",
					"description": "The operating system type. For example, Ubuntu or CentOS.",
					"readonly": true
				},
				"operating_system_version": {
					"type": "string",
					"description": "The version of the operating system.",
					"readonly": true
				},
				"operating_system_architecture": {
					"type": "string",
					"description": "",
					"enum": [
						"none",
						"unknown",
						"x86",
						"x86_64"
					],
					"readonly": true
				},
				"type": {
					"type": "string",
					"description": "The schema type",
					"enum": [
						"OperatingSystem"
					],
					"readonly": true
				}
			}
		};
	}
};

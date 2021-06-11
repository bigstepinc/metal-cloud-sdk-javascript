const ObjectBase = require("../ObjectBase");

module.exports = 
class NetworkOperatingSystem extends ObjectBase
{
	/**
	 * @protected
	 * 
	 * @returns {{description: string, type: string, properties: Object<propertyName, {type: string|string[], description: string, required: boolean, enum: undefined|string[], items: undefined|{description: string, type: string}, default: string|number|null|boolean, pattern: string|undefined, minLength: number|undefined, maxLength: string|undefined, readonly: boolean|undefined, required: boolean|undefined}>}}
	 */
	_schemaDefinition()
	{
		return {
			"description": "Contains details about the nwtwork operating system of a VolumeTemplate.",
			"type": "object",
			"properties": {
				"operating_system_type": {
					"type": "string",
					"description": "The operating system type. For example, Ubuntu or CentOS.",
					"readonly": true,
					"required": true
				},
				"operating_system_version": {
					"type": "string",
					"description": "The version of the operating system.",
					"readonly": true
				},
				"operating_system_architecture": {
					"type": "string",
					"description": "The architecture of the operating system.",
					"enum": [
						"arm",
						"powerpc",
						"x86_64"
					],
					"readonly": true,
					"required": true
				},
				"operating_system_vendor": {
					"type": "string",
					"description": "The vendor of the operating system.",
					"readonly": true,
					"required": true
				},
				"operating_system_machine": {
					"type": "string",
					"description": "The machine of the operating system.",
					"readonly": true,
					"required": true
				},
				"operating_system_machine_revision": {
					"type": [
						"string",
						"integer"
					],
					"description": "",
					"readonly": true,
					"required": true
				},
				"type": {
					"type": "string",
					"description": "The schema type",
					"enum": [
						"NetworkOperatingSystem"
					],
					"readonly": true
				}
			}
		};
	}
};

const ObjectBase = require("../ObjectBase");

module.exports = 
class ContainerArrayVolatileVolume extends ObjectBase
{
	/**
	 * @protected
	 * 
	 * @returns {{description: string, type: string, properties: Object<propertyName, {type: string|string[], description: string, required: boolean, enum: undefined|string[], items: undefined|{description: string, type: string}, default: string|number|null|boolean, pattern: string|undefined, minLength: number|undefined, maxLength: string|undefined, readonly: boolean|undefined, required: boolean|undefined}>}}
	 */
	_schemaDefinition()
	{
		return {
			"description": "ContainerArray volatile storage resource.",
			"type": "object",
			"properties": {
				"volatile_volume_name": {
					"type": "string",
					"description": "Volatile volume name.",
					"required": true
				},
				"volatile_volume_type": {
					"enum": [
						
					],
					"type": "string",
					"description": "Volatile volume type.",
					"required": true
				},
				"volatile_volume_mount_path": {
					"type": "string",
					"description": "Volatile volume container mount path.",
					"required": true
				},
				"type": {
					"type": "string",
					"description": "The schema type.",
					"enum": [
						"ContainerArrayVolatileVolume"
					],
					"readonly": true
				}
			}
		};
	}
};

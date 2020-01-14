const ObjectBase = require("./ObjectBase");


module.exports = 
class ContainerArrayPersistentVolume extends ObjectBase
{
	/**
	 * @protected
	 * 
	 * @returns {{description: string, type: string, properties: Object<propertyName, {type: string|string[], description: string, required: boolean, enum: undefined|string[], items: undefined|{description: string, type: string}, default: string|number|null|boolean, pattern: string|undefined, minLength: number|undefined, maxLength: string|undefined, readonly: boolean|undefined, required: boolean|undefined}>}}
	 */
	_schemaDefinition()
	{
		return {
			"description": "ContainerArray persistent storage resource.",
			"type": "object",
			"properties": {
				"persistent_volume_name": {
					"type": "string",
					"description": "Persistent volume name.",
					"required": true
				},
				"persistent_volume_type": {
					"enum": [
						
					],
					"type": "string",
					"description": "Persistent volume type.",
					"required": true
				},
				"persistent_volume_mount_path": {
					"type": "string",
					"description": "Persistent volume container mount path.",
					"required": true
				},
				"type": {
					"type": "string",
					"description": "The schema type.",
					"enum": [
						"ContainerArrayPersistentVolume"
					],
					"readonly": true
				}
			}
		};
	}
};

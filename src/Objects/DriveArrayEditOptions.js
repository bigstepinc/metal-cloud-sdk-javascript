const ObjectBase = require("../ObjectBase");

module.exports = 
class DriveArrayEditOptions extends ObjectBase
{
	/**
	 * @protected
	 * 
	 * @returns {{description: string, type: string, properties: Object<propertyName, {type: string|string[], description: string, required: boolean, enum: undefined|string[], items: undefined|{description: string, type: string}, default: string|number|null|boolean, pattern: string|undefined, minLength: number|undefined, maxLength: string|undefined, readonly: boolean|undefined, required: boolean|undefined}>}}
	 */
	_schemaDefinition()
	{
		return {
			"description": "Available properties for the drive_array_edit function.",
			"type": "object",
			"properties": {
				"update_active_drives_size": {
					"type": "boolean",
					"description": "If true, active Drives will be resized to the new <code>drive_size_mbytes_default</code> property of the parent <a:schema>DriveArray</a:schema>.",
					"required": true
				},
				"type": {
					"type": "string",
					"description": "The schema type.",
					"enum": [
						"DriveArrayEditOptions"
					],
					"readonly": true
				}
			}
		};
	}
};

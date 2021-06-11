const ObjectBase = require("../ObjectBase");

module.exports = 
class SharedDriveCredentials extends ObjectBase
{
	/**
	 * @protected
	 * 
	 * @returns {{description: string, type: string, properties: Object<propertyName, {type: string|string[], description: string, required: boolean, enum: undefined|string[], items: undefined|{description: string, type: string}, default: string|number|null|boolean, pattern: string|undefined, minLength: number|undefined, maxLength: string|undefined, readonly: boolean|undefined, required: boolean|undefined}>}}
	 */
	_schemaDefinition()
	{
		return {
			"description": "SharedDrive credentials.",
			"type": "array",
			"items": {
				"type": "iSCSI",
				"description": "iSCSI credentials"
			}
		};
	}
};

const ObjectBase = require("./ObjectBase");


module.exports = 
class DriveCredentials extends ObjectBase
{
	/**
	 * @protected
	 * 
	 * @returns {{description: string, type: string, properties: Object<propertyName, {type: string|string[], description: string, required: boolean, enum: undefined|string[], items: undefined|{description: string, type: string}, default: string|number|null|boolean, pattern: string|undefined, minLength: number|undefined, maxLength: string|undefined, readonly: boolean|undefined, required: boolean|undefined}>}}
	 */
	_schemaDefinition()
	{
		return {
			"description": "Information to connect via iSCSI or bootable drive associated credentials.",
			"type": "object",
			"properties": {
				"iscsi": {
					"type": [
						"iSCSI",
						"null"
					],
					"description": "iSCSI credentials",
					"default": null,
					"readonly": true
				},
				"type": {
					"type": "string",
					"description": "The schema type",
					"enum": [
						"DriveCredentials"
					],
					"readonly": true
				}
			}
		};
	}
};

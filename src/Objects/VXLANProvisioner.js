const ObjectBase = require("../ObjectBase");

module.exports = 
class VXLANProvisioner extends ObjectBase
{
	/**
	 * @protected
	 * 
	 * @returns {{description: string, type: string, properties: Object<propertyName, {type: string|string[], description: string, required: boolean, enum: undefined|string[], items: undefined|{description: string, type: string}, default: string|number|null|boolean, pattern: string|undefined, minLength: number|undefined, maxLength: string|undefined, readonly: boolean|undefined, required: boolean|undefined}>}}
	 */
	_schemaDefinition()
	{
		return {
			"description": "Holds constants used when VXLAN provisioning.",
			"type": "object",
			"properties": {
				"type": {
					"type": "string",
					"description": "The schema type.",
					"enum": [
						"VXLANProvisioner"
					],
					"readonly": false
				}
			}
		};
	}
};

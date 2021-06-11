const ObjectBase = require("../ObjectBase");

module.exports = 
class ContainerArrayConfigMap extends ObjectBase
{
	/**
	 * @protected
	 * 
	 * @returns {{description: string, type: string, properties: Object<propertyName, {type: string|string[], description: string, required: boolean, enum: undefined|string[], items: undefined|{description: string, type: string}, default: string|number|null|boolean, pattern: string|undefined, minLength: number|undefined, maxLength: string|undefined, readonly: boolean|undefined, required: boolean|undefined}>}}
	 */
	_schemaDefinition()
	{
		return {
			"description": "ContainerArray config map resource.",
			"type": "object",
			"properties": {
				"config_map_data": {
					"type": "array",
					"description": "ContainerArray config map values",
					"required": true,
					"default": [
						
					]
				},
				"type": {
					"type": "string",
					"description": "The schema type.",
					"enum": [
						"ContainerArrayConfigMap"
					],
					"readonly": true
				}
			}
		};
	}
};

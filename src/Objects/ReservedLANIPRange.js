const ObjectBase = require("../ObjectBase");

module.exports = 
class ReservedLANIPRange extends ObjectBase
{
	/**
	 * @protected
	 * 
	 * @returns {{description: string, type: string, properties: Object<propertyName, {type: string|string[], description: string, required: boolean, enum: undefined|string[], items: undefined|{description: string, type: string}, default: string|number|null|boolean, pattern: string|undefined, minLength: number|undefined, maxLength: string|undefined, readonly: boolean|undefined, required: boolean|undefined}>}}
	 */
	_schemaDefinition()
	{
		return {
			"description": "A reserved LAN IP range.",
			"type": "object",
			"properties": {
				"reserved_range_start_human_readable": {
					"description": "The start address of the reserved LAN IP range.",
					"type": "string",
					"required": true
				},
				"reserved_range_end_human_readable": {
					"description": "The end address of the reserved LAN IP range.",
					"type": "string",
					"required": true
				},
				"reserved_range_description": {
					"description": "Description regarding the use of the reserved range.",
					"type": [
						"string",
						"null"
					],
					"required": false,
					"default": null
				},
				"type": {
					"type": "string",
					"description": "The schema type.",
					"enum": [
						"ReservedLANIPRange"
					],
					"readonly": true
				}
			}
		};
	}
};

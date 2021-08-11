const ObjectBase = require("../ObjectBase");

module.exports = 
class ServerEditRack extends ObjectBase
{
	/**
	 * @protected
	 * 
	 * @returns {{description: string, type: string, properties: Object<propertyName, {type: string|string[], description: string, required: boolean, enum: undefined|string[], items: undefined|{description: string, type: string}, default: string|number|null|boolean, pattern: string|undefined, minLength: number|undefined, maxLength: string|undefined, readonly: boolean|undefined, required: boolean|undefined}>}}
	 */
	_schemaDefinition()
	{
		return {
			"description": "Represents a server edit rack informations payload",
			"type": "object",
			"properties": {
				"server_rack_name": {
					"type": [
						"string",
						"null"
					],
					"description": "Name of the rack",
					"default": null,
					"minLength": 1,
					"maxLength": 45,
					"required": false
				},
				"server_rack_position_lower_unit": {
					"type": [
						"string",
						"null"
					],
					"description": "Server rack position lower unit",
					"default": null,
					"minLength": 1,
					"maxLength": 45,
					"required": false
				},
				"server_rack_position_upper_unit": {
					"type": [
						"string",
						"null"
					],
					"description": "Server rack position upper unit",
					"default": null,
					"minLength": 1,
					"maxLength": 45,
					"required": false
				},
				"type": {
					"type": "string",
					"description": "The schema type",
					"enum": [
						"ServerEditRack"
					],
					"readonly": true
				}
			}
		};
	}
};

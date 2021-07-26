const ObjectBase = require("../ObjectBase");

module.exports = 
class ServerEditInventory extends ObjectBase
{
	/**
	 * @protected
	 * 
	 * @returns {{description: string, type: string, properties: Object<propertyName, {type: string|string[], description: string, required: boolean, enum: undefined|string[], items: undefined|{description: string, type: string}, default: string|number|null|boolean, pattern: string|undefined, minLength: number|undefined, maxLength: string|undefined, readonly: boolean|undefined, required: boolean|undefined}>}}
	 */
	_schemaDefinition()
	{
		return {
			"description": "Represents a server edit inventory informations payload",
			"type": "object",
			"properties": {
				"server_inventory_id": {
					"type": [
						"string",
						"null"
					],
					"description": "Server inventory id",
					"default": null,
					"minLength": 1,
					"maxLength": 45,
					"required": false
				},
				"type": {
					"type": "string",
					"description": "The schema type",
					"enum": [
						"ServerEditInventory"
					],
					"readonly": true
				}
			}
		};
	}
};

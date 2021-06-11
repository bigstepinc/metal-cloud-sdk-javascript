const ObjectBase = require("../ObjectBase");

module.exports = 
class ServerInterface extends ObjectBase
{
	/**
	 * @protected
	 * 
	 * @returns {{description: string, type: string, properties: Object<propertyName, {type: string|string[], description: string, required: boolean, enum: undefined|string[], items: undefined|{description: string, type: string}, default: string|number|null|boolean, pattern: string|undefined, minLength: number|undefined, maxLength: string|undefined, readonly: boolean|undefined, required: boolean|undefined}>}}
	 */
	_schemaDefinition()
	{
		return {
			"description": "Contains server connectivity information.",
			"type": "object",
			"properties": {
				"server_interface_mac_address": {
					"type": [
						"string",
						"null"
					],
					"description": "The server's interface mac address.",
					"default": null,
					"required": true
				},
				"type": {
					"type": "string",
					"description": "The schema type",
					"enum": [
						"ServerInterface"
					],
					"readonly": true
				}
			}
		};
	}
};

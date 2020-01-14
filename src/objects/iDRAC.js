const ObjectBase = require("./ObjectBase");


module.exports = 
class iDRAC extends ObjectBase
{
	/**
	 * @protected
	 * 
	 * @returns {{description: string, type: string, properties: Object<propertyName, {type: string|string[], description: string, required: boolean, enum: undefined|string[], items: undefined|{description: string, type: string}, default: string|number|null|boolean, pattern: string|undefined, minLength: number|undefined, maxLength: string|undefined, readonly: boolean|undefined, required: boolean|undefined}>}}
	 */
	_schemaDefinition()
	{
		return {
			"description": "iDRAC control panel credentials. iDRAC is a control panel for Dell servers. The iDRAC card has a separate network connection and its own IP address.",
			"type": "object",
			"properties": {
				"control_panel_url": {
					"type": [
						"string",
						"null"
					],
					"description": "URL for the server's administration interface.",
					"pattern": "^http(s)?:\\/\\/(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$",
					"required": true,
					"readonly": true
				},
				"username": {
					"type": [
						"string",
						"null"
					],
					"description": "The username for the server's administration interface.",
					"pattern": "^[A-Za-z0-9]+$",
					"required": true,
					"readonly": true
				},
				"initial_password": {
					"type": [
						"string",
						"null"
					],
					"required": true,
					"description": "The initial password for the server's administration interface.",
					"readonly": true
				},
				"type": {
					"type": "string",
					"description": "The schema type",
					"enum": [
						"iDRAC"
					],
					"readonly": true
				}
			}
		};
	}
};

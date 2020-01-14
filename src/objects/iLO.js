const ObjectBase = require("./ObjectBase");


module.exports = 
class iLO extends ObjectBase
{
	/**
	 * @protected
	 * 
	 * @returns {{description: string, type: string, properties: Object<propertyName, {type: string|string[], description: string, required: boolean, enum: undefined|string[], items: undefined|{description: string, type: string}, default: string|number|null|boolean, pattern: string|undefined, minLength: number|undefined, maxLength: string|undefined, readonly: boolean|undefined, required: boolean|undefined}>}}
	 */
	_schemaDefinition()
	{
		return {
			"description": "iLO control panel credentials. iLO is a control panel for HP servers. The iLO card has a separate network connection and its own IP address.",
			"type": "object",
			"properties": {
				"control_panel_url": {
					"type": [
						"string",
						"null"
					],
					"description": "URL for the server's administration interface.",
					"pattern": "^http(s)?:\\/\\/(?:(?:(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?))|(?:[a-z0-9\\.-]+.\\.[a-z]{2,3}))(?:\\:[1-9]{1}[0-9]{0,4})?$",
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
						"iLO"
					],
					"readonly": true
				}
			}
		};
	}
};

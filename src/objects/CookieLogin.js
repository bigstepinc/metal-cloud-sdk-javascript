const ObjectBase = require("./ObjectBase");


module.exports = 
class CookieLogin extends ObjectBase
{
	/**
	 * @protected
	 * 
	 * @returns {{description: string, type: string, properties: Object<propertyName, {type: string|string[], description: string, required: boolean, enum: undefined|string[], items: undefined|{description: string, type: string}, default: string|number|null|boolean, pattern: string|undefined, minLength: number|undefined, maxLength: string|undefined, readonly: boolean|undefined, required: boolean|undefined}>}}
	 */
	_schemaDefinition()
	{
		return {
			"description": "Login session.",
			"type": "object",
			"properties": {
				"user_id_bsi": {
					"type": [
						"integer",
						"null",
						"string"
					],
					"description": "Contains null for not authenticated sessions.",
					"required": true
				},
				"is_logged_in": {
					"type": [
						"boolean",
						"null"
					],
					"description": "True if user_id_bsi contains an authenticated user ID.",
					"default": null,
					"readonly": true
				},
				"type": {
					"type": "string",
					"description": "The schema type.",
					"enum": [
						"JWT"
					],
					"readonly": true
				}
			}
		};
	}
};

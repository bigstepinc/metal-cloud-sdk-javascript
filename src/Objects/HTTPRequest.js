const ObjectBase = require("../ObjectBase");

module.exports = 
class HTTPRequest extends ObjectBase
{
	/**
	 * @protected
	 * 
	 * @returns {{description: string, type: string, properties: Object<propertyName, {type: string|string[], description: string, required: boolean, enum: undefined|string[], items: undefined|{description: string, type: string}, default: string|number|null|boolean, pattern: string|undefined, minLength: number|undefined, maxLength: string|undefined, readonly: boolean|undefined, required: boolean|undefined}>}}
	 */
	_schemaDefinition()
	{
		return {
			"description": "A HTTP request definition compatible with the standard Web Fetch API.",
			"type": "object",
			"properties": {
				"url": {
					"type": "string",
					"description": "For example: https://api.dummy.com/something?m=3. Template-like variables are supported: https://${{instance_subdomain_permanent}}/some-app-endpoint/?key=${{secret_id_of_something}}",
					"required": true,
					"minLength": 4,
					"maxLength": 2083
				},
				"options": {
					"type": [
						"WebFetchAPIOptions",
						"null"
					],
					"description": "Web Fetch API options such as the HTTP method (GET, PUT, POST, DELETE, etc.), body, headers, etc.",
					"default": null,
					"readonly": false
				},
				"type": {
					"type": "string",
					"description": "The schema type",
					"enum": [
						"HTTPRequest"
					],
					"readonly": false
				}
			}
		};
	}
};

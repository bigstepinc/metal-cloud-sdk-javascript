const ObjectBase = require("../ObjectBase");

module.exports = 
class WebFetchAPIOptions extends ObjectBase
{
	/**
	 * @protected
	 * 
	 * @returns {{description: string, type: string, properties: Object<propertyName, {type: string|string[], description: string, required: boolean, enum: undefined|string[], items: undefined|{description: string, type: string}, default: string|number|null|boolean, pattern: string|undefined, minLength: number|undefined, maxLength: string|undefined, readonly: boolean|undefined, required: boolean|undefined}>}}
	 */
	_schemaDefinition()
	{
		return {
			"description": "node-fetch options which is follows the Web API Fetch specification. See https://github.com/node-fetch/node-fetch",
			"type": "object",
			"properties": {
				"method": {
					"enum": [
						"GET",
						"POST",
						"PUT",
						"DELETE",
						"OPTIONS",
						"HEAD",
						"PATCH",
						"TRACE"
					],
					"type": "string",
					"description": "HTTP request method.",
					"default": "GET"
				},
				"redirect": {
					"enum": [
						"follow",
						"manual",
						"error"
					],
					"type": "string",
					"description": "Set to <code>manual</code> to extract redirect headers or <code>error</code> to reject redirect.",
					"default": "follow"
				},
				"follow": {
					"type": "integer",
					"description": "Maximum redirect count. 0 to not follow redirect.",
					"default": 40,
					"minimum": 0,
					"maximum": 40
				},
				"compress": {
					"type": "boolean",
					"description": "Support gzip/deflate content encoding. false to disable.",
					"default": true
				},
				"timeout": {
					"type": "integer",
					"description": "Req/res timeout in ms, it resets on redirect. Default is 4 minutes.",
					"default": 240000,
					"minimum": 1,
					"maximum": 3600000
				},
				"size": {
					"type": "integer",
					"description": "Maximum response body size in bytes. Default is 64 MB.",
					"default": 67108864,
					"minimum": 1,
					"maximum": 104857600
				},
				"headers": {
					"type": [
						"WebFetchAPIRequestHeaders",
						"null"
					],
					"description": "HTTP request headers. The object keys are header names, such as <code>Content-Type</code>.",
					"default": null,
					"readonly": false
				},
				"body": {
					"type": [
						"string",
						"null"
					],
					"description": "Request body. If you need to provide binary data, it is better to use the <code>bodyBufferBase64</code> property. <code>Null</code> signifies the absence of a body.",
					"required": false,
					"default": null,
					"maxLength": 104857600
				},
				"bodyBufferBase64": {
					"type": [
						"string",
						"null"
					],
					"description": "Request body in base64 format. It is automatically decoded from base64 before making the request. This value overrides the <code>body</code> property. <code>Null</code> signifies the absence of a body and does not override the <code>body</code> property.",
					"required": false,
					"default": null,
					"maxLength": 137363456
				},
				"type": {
					"type": "string",
					"description": "The schema type",
					"enum": [
						"WebFetchAPIOptions"
					],
					"readonly": true
				}
			}
		};
	}
};

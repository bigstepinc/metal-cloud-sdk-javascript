const ObjectBase = require("../ObjectBase");

module.exports = 
class ContainerArrayActionHTTPGet extends ObjectBase
{
	/**
	 * @protected
	 * 
	 * @returns {{description: string, type: string, properties: Object<propertyName, {type: string|string[], description: string, required: boolean, enum: undefined|string[], items: undefined|{description: string, type: string}, default: string|number|null|boolean, pattern: string|undefined, minLength: number|undefined, maxLength: string|undefined, readonly: boolean|undefined, required: boolean|undefined}>}}
	 */
	_schemaDefinition()
	{
		return {
			"description": "ContainerArray action that uses HTTP Get requests to asses the readiness or liveness of the Containers.",
			"type": "object",
			"properties": {
				"action_path": {
					"type": "string",
					"description": "Path to acccess on the HTTP server.",
					"default": "/",
					"required": false
				},
				"action_port": {
					"type": "integer",
					"description": "Port to access on the Container.",
					"minimum": 1,
					"required": true
				},
				"action_host": {
					"type": [
						"string",
						"null"
					],
					"description": "Host name to connect to. Defaults to the Container IP.",
					"default": null,
					"required": false
				},
				"action_scheme": {
					"type": "string",
					"enum": [
						"HTTP",
						"HTTPS"
					],
					"description": "Scheme to use for connecting to the host.",
					"default": "HTTP",
					"required": false
				},
				"type": {
					"type": "string",
					"description": "The schema type.",
					"enum": [
						"ContainerArrayActionHTTPGet"
					],
					"readonly": true
				}
			}
		};
	}
};

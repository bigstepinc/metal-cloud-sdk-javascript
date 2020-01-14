const ObjectBase = require("./ObjectBase");


module.exports = 
class RemoteConsole extends ObjectBase
{
	/**
	 * @protected
	 * 
	 * @returns {{description: string, type: string, properties: Object<propertyName, {type: string|string[], description: string, required: boolean, enum: undefined|string[], items: undefined|{description: string, type: string}, default: string|number|null|boolean, pattern: string|undefined, minLength: number|undefined, maxLength: string|undefined, readonly: boolean|undefined, required: boolean|undefined}>}}
	 */
	_schemaDefinition()
	{
		return {
			"description": "Information needed to connect to the server via Guacamole",
			"type": "object",
			"properties": {
				"remote_protocol": {
					"enum": [
						"ssh",
						"rdp",
						null
					],
					"default": null,
					"description": "Protocol available. This property is not editable.",
					"readonly": true
				},
				"tunnel_path_url": {
					"type": [
						"string",
						"null"
					],
					"description": "Tunnel path URL. This property is not editable.",
					"readonly": true
				},
				"remote_control_panel_url": {
					"type": [
						"string",
						"null"
					],
					"description": "Query string. This property is not editable.",
					"readonly": true
				},
				"type": {
					"type": "string",
					"description": "The schema type",
					"enum": [
						"RemoteConsole"
					],
					"readonly": true
				}
			}
		};
	}
};

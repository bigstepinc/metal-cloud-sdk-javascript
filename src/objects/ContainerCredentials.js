const ObjectBase = require("./ObjectBase");


module.exports = 
class ContainerCredentials extends ObjectBase
{
	/**
	 * @protected
	 * 
	 * @returns {{description: string, type: string, properties: Object<propertyName, {type: string|string[], description: string, required: boolean, enum: undefined|string[], items: undefined|{description: string, type: string}, default: string|number|null|boolean, pattern: string|undefined, minLength: number|undefined, maxLength: string|undefined, readonly: boolean|undefined, required: boolean|undefined}>}}
	 */
	_schemaDefinition()
	{
		return {
			"description": "Information needed to connect to the Container.",
			"type": "object",
			"properties": {
				"remote_console": {
					"type": [
						"RemoteConsole",
						"null"
					],
					"description": "Information needed to connect to the container via RemoteConsole",
					"default": null,
					"readonly": true
				},
				"type": {
					"type": "string",
					"description": "The schema type",
					"enum": [
						"ContainerCredentials"
					],
					"readonly": true
				}
			}
		};
	}
};

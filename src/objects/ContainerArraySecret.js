const ObjectBase = require("./ObjectBase");


module.exports = 
class ContainerArraySecret extends ObjectBase
{
	/**
	 * @protected
	 * 
	 * @returns {{description: string, type: string, properties: Object<propertyName, {type: string|string[], description: string, required: boolean, enum: undefined|string[], items: undefined|{description: string, type: string}, default: string|number|null|boolean, pattern: string|undefined, minLength: number|undefined, maxLength: string|undefined, readonly: boolean|undefined, required: boolean|undefined}>}}
	 */
	_schemaDefinition()
	{
		return {
			"description": "ContainerArray sensitive data to be stored encrypted and made available to the containers in plaintext.",
			"type": "object",
			"properties": {
				"secret_name": {
					"type": "string",
					"description": "Secret name.",
					"required": true,
					"pattern": "^[A-Za-z0-9-_]+$"
				},
				"secret_data_base64": {
					"type": "string",
					"description": "Base64 encoded plaintext data.",
					"required": true
				},
				"type": {
					"type": "string",
					"description": "The schema type.",
					"enum": [
						"ContainerArraySecret"
					],
					"readonly": true
				}
			}
		};
	}
};

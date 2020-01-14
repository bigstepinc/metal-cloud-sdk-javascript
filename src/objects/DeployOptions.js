const ObjectBase = require("./ObjectBase");


module.exports = 
class DeployOptions extends ObjectBase
{
	/**
	 * @protected
	 * 
	 * @returns {{description: string, type: string, properties: Object<propertyName, {type: string|string[], description: string, required: boolean, enum: undefined|string[], items: undefined|{description: string, type: string}, default: string|number|null|boolean, pattern: string|undefined, minLength: number|undefined, maxLength: string|undefined, readonly: boolean|undefined, required: boolean|undefined}>}}
	 */
	_schemaDefinition()
	{
		return {
			"description": "Object used to specify the server types for new Instances provisioned on the InstanceArrays of an Infrastructure.",
			"type": "object",
			"properties": {
				"instance_array": {
					"description": "Server types for new Instances provisioned on a single InstanceArray.",
					"type": "object"
				},
				"type": {
					"type": "string",
					"description": "The schema type",
					"enum": [
						"DeployOptions"
					],
					"readonly": true
				}
			}
		};
	}
};

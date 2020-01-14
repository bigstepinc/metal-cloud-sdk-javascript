const ObjectBase = require("./ObjectBase");


module.exports = 
class InfrastructurePermissions extends ObjectBase
{
	/**
	 * @protected
	 * 
	 * @returns {{description: string, type: string, properties: Object<propertyName, {type: string|string[], description: string, required: boolean, enum: undefined|string[], items: undefined|{description: string, type: string}, default: string|number|null|boolean, pattern: string|undefined, minLength: number|undefined, maxLength: string|undefined, readonly: boolean|undefined, required: boolean|undefined}>}}
	 */
	_schemaDefinition()
	{
		return {
			"description": "Contains information about how access permissions propagate to new servers.",
			"type": "object",
			"properties": {
				"infrastructure_user_allow_ssh_keys": {
					"type": "boolean",
					"description": " If <code>true<\/code>, the user's SSH keys are added automatically to newly created Drives that use an existing public Linux template. Only owners or owner delegates can affect this setting.",
					"required": true
				},
				"type": {
					"type": "string",
					"description": "The schema type",
					"enum": [
						"InfrastructurePermissions"
					],
					"readonly": true
				}
			}
		};
	}
};

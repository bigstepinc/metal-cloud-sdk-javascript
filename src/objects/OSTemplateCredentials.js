const ObjectBase = require("./ObjectBase");


module.exports = 
class OSTemplateCredentials extends ObjectBase
{
	/**
	 * @protected
	 * 
	 * @returns {{description: string, type: string, properties: Object<propertyName, {type: string|string[], description: string, required: boolean, enum: undefined|string[], items: undefined|{description: string, type: string}, default: string|number|null|boolean, pattern: string|undefined, minLength: number|undefined, maxLength: string|undefined, readonly: boolean|undefined, required: boolean|undefined}>}}
	 */
	_schemaDefinition()
	{
		return {
			"description": "Information needed to connect to an OS installed by an OSTemplate.",
			"type": "object",
			"properties": {
				"os_template_initial_user": {
					"type": "string",
					"description": "User used to connect to the OS installed by the OSTemplate",
					"default": null,
					"required": false
				},
				"os_template_initial_password": {
					"type": "string",
					"description": "Password of the initial_user property.",
					"default": null,
					"required": false
				},
				"os_template_initial_ssh_port": {
					"type": "integer",
					"description": "SSH port used to connect to the installed OS.",
					"default": null,
					"required": false
				},
				"os_template_change_password_after_deploy": {
					"type": "boolean",
					"description": "Option to change the initial_user password on the installed OS after deploy.",
					"default": null,
					"required": false
				},
				"type": {
					"type": "string",
					"description": "The schema type",
					"enum": [
						"OSTemplateCredentials"
					],
					"readonly": true
				}
			}
		};
	}
};

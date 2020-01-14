const ObjectBase = require("./ObjectBase");


module.exports = 
class InstanceReport extends ObjectBase
{
	/**
	 * @protected
	 * 
	 * @returns {{description: string, type: string, properties: Object<propertyName, {type: string|string[], description: string, required: boolean, enum: undefined|string[], items: undefined|{description: string, type: string}, default: string|number|null|boolean, pattern: string|undefined, minLength: number|undefined, maxLength: string|undefined, readonly: boolean|undefined, required: boolean|undefined}>}}
	 */
	_schemaDefinition()
	{
		return {
			"description": "",
			"type": "object",
			"properties": {
				"sshConnectivity": {
					"type": "string",
					"enum": [
						"on",
						"off",
						"n/a"
					],
					"description": "",
					"default": "n/a"
				},
				"sshAuthentication": {
					"type": "string",
					"enum": [
						"on",
						"off",
						"n/a"
					],
					"description": "",
					"default": "n/a"
				},
				"type": {
					"type": "string",
					"description": "The schema type",
					"enum": [
						"InstanceReport"
					],
					"readonly": true
				}
			}
		};
	}
};

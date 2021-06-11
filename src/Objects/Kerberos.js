const ObjectBase = require("../ObjectBase");

module.exports = 
class Kerberos extends ObjectBase
{
	/**
	 * @protected
	 * 
	 * @returns {{description: string, type: string, properties: Object<propertyName, {type: string|string[], description: string, required: boolean, enum: undefined|string[], items: undefined|{description: string, type: string}, default: string|number|null|boolean, pattern: string|undefined, minLength: number|undefined, maxLength: string|undefined, readonly: boolean|undefined, required: boolean|undefined}>}}
	 */
	_schemaDefinition()
	{
		return {
			"description": "An object with the required information to obtain the authentication ticket from Kerberos SPNEGO.",
			"type": "object",
			"properties": {
				"username": {
					"type": [
						"null",
						"string"
					],
					"required": true,
					"description": "A user's account ID prefixed with the letter \"k\". For example: <code>k123</code>."
				},
				"initial_password": {
					"type": [
						"null"
					],
					"required": true,
					"description": "Users may log in using their account password, as the DataLake HDFS Kerberos service is integrated with Metal Cloud (also for admin rights). This will always be <code>null</code>. Reserved for future use.",
					"readonly": true
				},
				"realm": {
					"type": [
						"string",
						"null"
					],
					"required": true,
					"description": "The Kerberos realm. ",
					"readonly": true
				},
				"type": {
					"type": "string",
					"description": "Schema type.",
					"enum": [
						"Kerberos"
					],
					"readonly": true
				}
			}
		};
	}
};

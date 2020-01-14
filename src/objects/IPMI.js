const ObjectBase = require("./ObjectBase");


module.exports = 
class IPMI extends ObjectBase
{
	/**
	 * @protected
	 * 
	 * @returns {{description: string, type: string, properties: Object<propertyName, {type: string|string[], description: string, required: boolean, enum: undefined|string[], items: undefined|{description: string, type: string}, default: string|number|null|boolean, pattern: string|undefined, minLength: number|undefined, maxLength: string|undefined, readonly: boolean|undefined, required: boolean|undefined}>}}
	 */
	_schemaDefinition()
	{
		return {
			"description": "IPMI credentials. Intelligent Platform Management Interface is a set of computer interface specifications for an autonomous computer subsystem that provides management and monitoring capabilities independently of the host system's CPU, firmware (BIOS or UEFI) and operating system.",
			"type": "object",
			"properties": {
				"ip_address": {
					"type": [
						"string",
						"null"
					],
					"description": "IP address for the IPMI.",
					"required": true,
					"readonly": true
				},
				"version": {
					"enum": [
						"1",
						"1.5",
						"2",
						null
					],
					"type": [
						"string",
						"null"
					],
					"description": "The IPMI version.",
					"required": true,
					"readonly": true
				},
				"username": {
					"type": [
						"string",
						"null"
					],
					"required": true,
					"description": "The username for the IPMI.",
					"readonly": true
				},
				"initial_password": {
					"type": [
						"string",
						"null"
					],
					"required": true,
					"description": "The initial password for the IPMI.",
					"readonly": true
				},
				"type": {
					"type": "string",
					"description": "The schema type",
					"enum": [
						"IPMI"
					],
					"readonly": true
				}
			}
		};
	}
};

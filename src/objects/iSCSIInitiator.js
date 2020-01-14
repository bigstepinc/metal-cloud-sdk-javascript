const ObjectBase = require("./ObjectBase");


module.exports = 
class iSCSIInitiator extends ObjectBase
{
	/**
	 * @protected
	 * 
	 * @returns {{description: string, type: string, properties: Object<propertyName, {type: string|string[], description: string, required: boolean, enum: undefined|string[], items: undefined|{description: string, type: string}, default: string|number|null|boolean, pattern: string|undefined, minLength: number|undefined, maxLength: string|undefined, readonly: boolean|undefined, required: boolean|undefined}>}}
	 */
	_schemaDefinition()
	{
		return {
			"description": "Initiator IQN, username and password and other iSCSI connection details.",
			"type": "object",
			"properties": {
				"username": {
					"type": [
						"string",
						"null"
					],
					"description": "The iSCSI username.",
					"pattern": "^[A-Za-z0-9]+$",
					"required": true,
					"readonly": true
				},
				"password": {
					"type": [
						"string",
						"null"
					],
					"required": true,
					"description": "The iSCSI initial password.",
					"readonly": true
				},
				"initiator_iqn": {
					"type": [
						"string",
						"null"
					],
					"description": "IQN of initiator iSCSI.",
					"pattern": "^[A-Za-z0-9:.-]+$",
					"required": true,
					"readonly": true
				},
				"gateway": {
					"type": [
						"string",
						"null"
					],
					"description": "IPv4 gateway in decimal dotted notation.",
					"default": null,
					"readonly": true
				},
				"netmask": {
					"type": [
						"string",
						"null"
					],
					"description": "IPv4 dotted decimal notation netmask.",
					"default": null,
					"readonly": true
				},
				"initiator_ip_address": {
					"type": [
						"string",
						"null"
					],
					"description": "iSCSI client IP address.",
					"default": null,
					"readonly": true
				},
				"type": {
					"type": "string",
					"description": "The schema type",
					"enum": [
						"iSCSIInitiator"
					],
					"readonly": true
				}
			}
		};
	}
};

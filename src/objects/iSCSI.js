const ObjectBase = require("./ObjectBase");


module.exports = 
class iSCSI extends ObjectBase
{
	/**
	 * @protected
	 * 
	 * @returns {{description: string, type: string, properties: Object<propertyName, {type: string|string[], description: string, required: boolean, enum: undefined|string[], items: undefined|{description: string, type: string}, default: string|number|null|boolean, pattern: string|undefined, minLength: number|undefined, maxLength: string|undefined, readonly: boolean|undefined, required: boolean|undefined}>}}
	 */
	_schemaDefinition()
	{
		return {
			"description": "Target IQN, IP address, port number and the LUN ID.",
			"type": "object",
			"properties": {
				"target_iqn": {
					"type": [
						"string",
						"null"
					],
					"description": "IQN of target iSCSI.",
					"pattern": "^[A-Za-z0-9:.-]+$",
					"required": true,
					"readonly": true
				},
				"storage_ip_address": {
					"type": [
						"string",
						"null"
					],
					"description": "iSCSI server IP address.",
					"default": null,
					"readonly": true
				},
				"storage_port": {
					"type": [
						"integer",
						"null"
					],
					"description": "Server listening port number.",
					"default": null,
					"readonly": true,
					"minimum": 1,
					"maximum": 65535
				},
				"lun_id": {
					"type": [
						"integer",
						"null"
					],
					"description": "Storage LUN ID.",
					"default": null,
					"readonly": true,
					"minimum": 0
				},
				"type": {
					"type": "string",
					"description": "The schema type",
					"enum": [
						"iSCSI"
					],
					"readonly": true
				}
			}
		};
	}
};

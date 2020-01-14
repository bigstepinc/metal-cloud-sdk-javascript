const ObjectBase = require("./ObjectBase");


module.exports = 
class ServerDisk extends ObjectBase
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
				"server_disk_type": {
					"enum": [
						"SSD",
						"HDD",
						"NVME"
					],
					"type": [
						"string"
					],
					"description": "The type of physical disk.",
					"readonly": true
				},
				"server_disk_size_gb": {
					"type": "integer",
					"description": "",
					"readonly": true
				},
				"type": {
					"type": "string",
					"description": "The schema type",
					"enum": [
						"ServerDisk"
					],
					"readonly": true
				}
			}
		};
	}
};

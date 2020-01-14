const ObjectBase = require("./ObjectBase");


module.exports = 
class HardwareConfiguration extends ObjectBase
{
	/**
	 * @protected
	 * 
	 * @returns {{description: string, type: string, properties: Object<propertyName, {type: string|string[], description: string, required: boolean, enum: undefined|string[], items: undefined|{description: string, type: string}, default: string|number|null|boolean, pattern: string|undefined, minLength: number|undefined, maxLength: string|undefined, readonly: boolean|undefined, required: boolean|undefined}>}}
	 */
	_schemaDefinition()
	{
		return {
			"description": "HardwareConfiguration holds the desired hardware configuration when trying to find available servers for provisioning.",
			"type": "object",
			"properties": {
				"instance_array_ram_gbytes": {
					"type": "integer",
					"default": 0,
					"minimum": 0,
					"maximum": 4096,
					"required": true,
					"description": "The minimum RAM capacity of each instance."
				},
				"instance_array_processor_count": {
					"type": "integer",
					"default": 0,
					"minimum": 0,
					"maximum": 96,
					"description": "The CPU count on each instance."
				},
				"instance_array_processor_core_mhz": {
					"type": "integer",
					"default": 0,
					"minimum": 0,
					"maximum": 50000,
					"description": "The minimum clock speed of a CPU."
				},
				"instance_array_processor_core_count": {
					"type": "integer",
					"default": 0,
					"minimum": 0,
					"maximum": 4096,
					"description": "The minimum cores of a CPU."
				},
				"instance_array_total_mhz": {
					"default": 0,
					"type": "integer",
					"minimum": 0,
					"description": "The minumim of total MHz of the instance."
				},
				"instance_array_instance_count": {
					"type": "integer",
					"default": 0,
					"minimum": 0,
					"maximum": 100000,
					"required": true,
					"description": "The maximum number of instances in an InstanceArray."
				},
				"instance_array_disk_count": {
					"type": "integer",
					"default": 0,
					"minimum": 0,
					"maximum": 100000,
					"description": "The minimum number of physical disks.",
					"default": 0
				},
				"instance_array_disk_size_mbytes": {
					"type": "integer",
					"default": 0,
					"minimum": 0,
					"maximum": 419430400,
					"description": "The minimum size of a single disk.",
					"default": 0
				},
				"instance_array_disk_types": {
					"type": [
						"array",
						"null"
					],
					"description": "The types of physical disks.",
					"default": null
				},
				"type": {
					"type": "string",
					"description": "The schema type",
					"enum": [
						"HardwareConfiguration"
					],
					"readonly": true
				}
			}
		};
	}
};

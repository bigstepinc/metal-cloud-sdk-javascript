const ObjectBase = require("../ObjectBase");

module.exports = 
class Server extends ObjectBase
{
	/**
	 * @protected
	 * 
	 * @returns {{description: string, type: string, properties: Object<propertyName, {type: string|string[], description: string, required: boolean, enum: undefined|string[], items: undefined|{description: string, type: string}, default: string|number|null|boolean, pattern: string|undefined, minLength: number|undefined, maxLength: string|undefined, readonly: boolean|undefined, required: boolean|undefined}>}}
	 */
	_schemaDefinition()
	{
		return {
			"description": "Represents a server in a datacenter.",
			"type": "object",
			"properties": {
				"server_id": {
					"type": [
						"integer",
						"null"
					],
					"description": "The ID of the server. It is automatically generated and cannot be edited.",
					"default": null,
					"readonly": true
				},
				"server_uuid": {
					"type": [
						"string",
						"null"
					],
					"description": "Server UUID.",
					"minLength": 1,
					"maxLength": 36,
					"default": null
				},
				"server_network_total_capacity_mbps": {
					"type": [
						"integer",
						"null"
					],
					"description": "Full bandwidth available.",
					"default": null
				},
				"server_power_status": {
					"enum": [
						"on",
						"off",
						"unknown"
					],
					"type": [
						"string",
						"null"
					],
					"description": "The server power status which can have one of the values: <code>SERVER_POWER_STATUS_ON<\/code>, <code>SERVER_POWER_STATUS_OFF<\/code>.",
					"default": null
				},
				"server_processor_core_count": {
					"type": "integer",
					"description": "The cores of a CPU.",
					"default": 1,
					"minimum": 0
				},
				"server_processor_core_mhz": {
					"type": "integer",
					"description": "The clock speed of a CPU.",
					"default": 1000
				},
				"server_processor_count": {
					"type": "integer",
					"description": "The CPU count on the server.",
					"default": 1
				},
				"server_ram_gbytes": {
					"type": "integer",
					"description": "The RAM capacity.",
					"default": 1
				},
				"server_disk_count": {
					"type": "integer",
					"minimum": 0,
					"maximum": 100,
					"description": "The minimum number of physical disks.",
					"default": 0
				},
				"server_disk_size_mbytes": {
					"type": "integer",
					"minimum": 0,
					"maximum": 4294967296,
					"description": "The minimum size of a single disk.",
					"default": 0
				},
				"server_disk_type": {
					"enum": [
						"SSD",
						"HDD",
						"NVME",
						"none"
					],
					"type": [
						"string"
					],
					"description": "The type of physical disks.",
					"default": "none"
				},
				"server_processor_name": {
					"type": [
						"string",
						"null"
					],
					"description": "The name of the processor.",
					"default": null
				},
				"server_product_name": {
					"type": [
						"string",
						"null"
					],
					"description": "The name of the server.",
					"default": null
				},
				"server_type_id": {
					"type": [
						"integer",
						"null"
					],
					"description": "The ID of the server type. See <code>server_types()<\/code> for more detalis.",
					"default": null
				},
				"server_interfaces": {
					"type": [
						"array",
						"null"
					],
					"items": {
						"type": "ServerInterface",
						"description": ""
					},
					"description": "The <a:schema>ServerInterface<\/a:schema> objects.",
					"default": null
				},
				"server_disks": {
					"type": [
						"array",
						"null"
					],
					"items": {
						"description": "Server disks.",
						"type": "ServerDisk"
					},
					"description": "The <a:schema>ServerDisk<\/a:schema> objects",
					"default": null
				},
				"server_tags": {
					"type": "array",
					"items": {
						"type": "string",
						"description": ""
					},
					"description": "List of tags representative for the Server.",
					"default": [
						
					],
					"required": false
				},
				"server_rack_name": {
					"type": [
						"string",
						"null"
					],
					"description": "Name of the rack",
					"default": null,
					"required": false
				},
				"server_rack_position_lower_unit": {
					"type": [
						"integer",
						"null"
					],
					"description": "Server rack position lower unit",
					"default": null,
					"required": false
				},
				"server_rack_position_upper_unit": {
					"type": [
						"integer",
						"null"
					],
					"description": "Server rack position upper unit",
					"default": null,
					"required": false
				},
				"server_inventory_id": {
					"type": [
						"string",
						"null"
					],
					"description": "Server inventory id",
					"default": null,
					"required": false
				},
				"type": {
					"type": "string",
					"description": "The schema type",
					"enum": [
						"Server"
					],
					"readonly": true
				}
			}
		};
	}
};

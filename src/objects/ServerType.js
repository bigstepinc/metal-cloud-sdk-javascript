const ObjectBase = require("./ObjectBase");


module.exports = 
class ServerType extends ObjectBase
{
	/**
	 * @protected
	 * 
	 * @returns {{description: string, type: string, properties: Object<propertyName, {type: string|string[], description: string, required: boolean, enum: undefined|string[], items: undefined|{description: string, type: string}, default: string|number|null|boolean, pattern: string|undefined, minLength: number|undefined, maxLength: string|undefined, readonly: boolean|undefined, required: boolean|undefined}>}}
	 */
	_schemaDefinition()
	{
		return {
			"description": "A type of server available in a datacenter. Contains hardware information.",
			"type": "object",
			"properties": {
				"server_type_id": {
					"type": [
						"integer",
						"null"
					],
					"description": "The ID of the server type. It is automatically generated and cannot be edited.",
					"default": null,
					"readonly": true
				},
				"server_network_total_capacity_mbps": {
					"type": [
						"integer",
						"null"
					],
					"description": "Full bandwidth available.",
					"default": null,
					"readonly": true
				},
				"server_type_name": {
					"type": [
						"string",
						"null"
					],
					"description": "The name of the server type. It does not contain whitespaces. It normally never changes.",
					"default": null,
					"readonly": true
				},
				"server_type_display_name": {
					"type": [
						"string",
						"null"
					],
					"description": "An comprehensive server type name, which may change at any time.",
					"default": null,
					"readonly": true
				},
				"server_type_label": {
					"type": [
						"string",
						"null"
					],
					"description": "Deprecated, ignored and unused.",
					"default": null
				},
				"server_processor_core_count": {
					"type": "integer",
					"description": "The cores of a CPU.",
					"default": 1
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
				"server_processor_names_json": {
					"type": [
						"string",
						"null"
					],
					"description": "The names of the server processors.",
					"default": null
				},
				"server_processor_name": {
					"type": [
						"string",
						"null"
					],
					"description": "The name of the processor.",
					"default": null
				},
				"server_class": {
					"enum": [
						"bigdata",
						"hdfs",
						"unknown"
					],
					"type": [
						"string"
					],
					"description": "Server type very general workload type.",
					"default": "unknown"
				},
				"server_type_is_experimental": {
					"type": "boolean",
					"description": "Specifies if the server_type is experimental and only developers have access to servers of this type.",
					"default": false
				},
				"server_count": {
					"type": [
						"integer",
						"null"
					],
					"description": "Number of servers provisioned. Used only for <code>infrastructure_deploy()<\/code>.",
					"default": null
				},
				"server_type_tags": {
					"type": "array",
					"items": {
						"type": "string",
						"description": ""
					},
					"description": "List of tags representative for the ServerType.",
					"default": [
						
					],
					"required": false
				},
				"type": {
					"type": "string",
					"description": "The schema type",
					"enum": [
						"ServerType"
					],
					"readonly": true
				}
			}
		};
	}
};

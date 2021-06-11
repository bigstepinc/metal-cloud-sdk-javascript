const ObjectBase = require("../ObjectBase");

module.exports = 
class AppElasticsearchInstance extends ObjectBase
{
	/**
	 * @protected
	 * 
	 * @returns {{description: string, type: string, properties: Object<propertyName, {type: string|string[], description: string, required: boolean, enum: undefined|string[], items: undefined|{description: string, type: string}, default: string|number|null|boolean, pattern: string|undefined, minLength: number|undefined, maxLength: string|undefined, readonly: boolean|undefined, required: boolean|undefined}>}}
	 */
	_schemaDefinition()
	{
		return {
			"description": "Details about the Instance object specific to Elasticsearch. The information presented here is obtained by interrogating the Elasticsearch API. Backward compatibility object will not be ensured when the underlying Elasticsearch API changes.",
			"type": "object",
			"properties": {
				"ui_url": {
					"type": [
						"string",
						"null"
					],
					"description": "The user interface URL.",
					"required": true,
					"readonly": true
				},
				"cpu_usage_percent": {
					"type": [
						"number",
						"null"
					],
					"description": "Percentage of time CPU is running in system mode and user mode. Being a multiprocessor system, the usage can be greater than 100%.",
					"readonly": true
				},
				"memory_total_gb": {
					"type": [
						"number",
						"null"
					],
					"description": "Total physical memory available.",
					"readonly": true
				},
				"memory_used_percent": {
					"type": [
						"number",
						"null"
					],
					"description": "Percentage of used physical memory.",
					"readonly": true
				},
				"fs_memory_total_gb": {
					"type": [
						"number",
						"null"
					],
					"description": "Total disk capacity. It might take a while until the property is populated.",
					"readonly": true
				},
				"fs_memory_used_gb": {
					"type": [
						"number",
						"null"
					],
					"description": "Percentage of used disk capacity. It might take a while until the property is populated.",
					"readonly": true
				},
				"version": {
					"type": [
						"string",
						"null"
					],
					"description": "Software version number.",
					"readonly": true
				},
				"node_id": {
					"type": [
						"string",
						"null"
					],
					"description": "The Elasticsearch node ID.",
					"readonly": true
				},
				"instance_id": {
					"type": [
						"integer",
						"null",
						"string"
					],
					"description": "The ID of the Instance associated with the node.",
					"default": null,
					"readonly": true
				},
				"instance_label": {
					"type": [
						"null",
						"string"
					],
					"description": "The label of the Instance associated with the node.",
					"readonly": true
				},
				"type": {
					"type": "string",
					"description": "The schema type",
					"enum": [
						"AppElasticsearchInstance"
					],
					"readonly": true
				}
			}
		};
	}
};

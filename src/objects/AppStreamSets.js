const ObjectBase = require("./ObjectBase");


module.exports = 
class AppStreamSets extends ObjectBase
{
	/**
	 * @protected
	 * 
	 * @returns {{description: string, type: string, properties: Object<propertyName, {type: string|string[], description: string, required: boolean, enum: undefined|string[], items: undefined|{description: string, type: string}, default: string|number|null|boolean, pattern: string|undefined, minLength: number|undefined, maxLength: string|undefined, readonly: boolean|undefined, required: boolean|undefined}>}}
	 */
	_schemaDefinition()
	{
		return {
			"description": "An object which has instance labels as keys and <a:schema>AppStreamSets<\/a:schema> objects as values.",
			"type": "object",
			"properties": {
				"streamsets_node": {
					"type": "array",
					"items": {
						"type": "AppStreamSetsInstance",
						"description": ""
					},
					"description": "The <a:schema>AppStreamSetsInstance<\/a:schema> object.",
					"required": true
				},
				"container_cluster_software_available_versions": {
					"type": "array",
					"description": "Container cluster software available versions.",
					"readonly": true
				},
				"container_cluster_software_version": {
					"type": [
						"string",
						"null"
					],
					"description": "The software version detected on the container cluster.",
					"readonly": true
				},
				"connectable_container_clusters": {
					"type": "array",
					"description": "Array of compatible and connectable clusters.",
					"readonly": true
				},
				"streamsets_connection_string": {
					"type": [
						"string",
						"null"
					],
					"description": "The connection strings to the StreamSets app.",
					"default": [
						
					],
					"readonly": true
				},
				"streamsets_admin_username": {
					"type": [
						"string",
						"null"
					],
					"description": "The default username.",
					"readonly": true
				},
				"streamsets_admin_password": {
					"type": [
						"string",
						"null"
					],
					"description": "The default password.",
					"readonly": true
				},
				"type": {
					"type": "string",
					"description": "The schema type",
					"enum": [
						"AppStreamSets"
					],
					"readonly": true
				}
			}
		};
	}
};

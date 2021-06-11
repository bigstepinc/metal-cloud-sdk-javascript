const ObjectBase = require("../ObjectBase");

module.exports = 
class AppElasticsearchLegacy extends ObjectBase
{
	/**
	 * @protected
	 * 
	 * @returns {{description: string, type: string, properties: Object<propertyName, {type: string|string[], description: string, required: boolean, enum: undefined|string[], items: undefined|{description: string, type: string}, default: string|number|null|boolean, pattern: string|undefined, minLength: number|undefined, maxLength: string|undefined, readonly: boolean|undefined, required: boolean|undefined}>}}
	 */
	_schemaDefinition()
	{
		return {
			"description": "An object which has instance labels as keys and <a:schema>AppElasticsearchInstance<\/a:schema> objects as values. <a:schema>AppElasticsearchInstance<\/a:schema> objects are divided into master nodes and data nodes.",
			"type": "object",
			"properties": {
				"masterNodes": {
					"type": "array",
					"items": {
						"type": "AppElasticsearchInstance",
						"description": ""
					},
					"description": "The <a:schema>AppElasticsearchInstance<\/a:schema> objects, part of the master nodes group.",
					"required": true
				},
				"dataNodes": {
					"type": "array",
					"items": {
						"type": "AppElasticsearchInstance",
						"description": ""
					},
					"description": "The <a:schema>AppElasticsearchInstance<\/a:schema> objects, part of the data nodes group.",
					"required": true
				},
				"cluster_software_available_versions": {
					"type": "array",
					"description": "Cluster software available versions.",
					"readonly": true
				},
				"cluster_software_version": {
					"type": [
						"string",
						"null"
					],
					"description": "The software version detected on the cluster.",
					"readonly": true
				},
				"connectable_clusters": {
					"type": "array",
					"description": "Array of compatible and connectable clusters.",
					"readonly": true
				},
				"type": {
					"type": "string",
					"description": "The schema type",
					"enum": [
						"AppElasticsearchLegacy"
					],
					"readonly": true
				}
			}
		};
	}
};

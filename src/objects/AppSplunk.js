const ObjectBase = require("./ObjectBase");


module.exports = 
class AppSplunk extends ObjectBase
{
	/**
	 * @protected
	 * 
	 * @returns {{description: string, type: string, properties: Object<propertyName, {type: string|string[], description: string, required: boolean, enum: undefined|string[], items: undefined|{description: string, type: string}, default: string|number|null|boolean, pattern: string|undefined, minLength: number|undefined, maxLength: string|undefined, readonly: boolean|undefined, required: boolean|undefined}>}}
	 */
	_schemaDefinition()
	{
		return {
			"description": "An object which has instance labels as keys and <a:schema>AppSplunkInstance<\/a:schema> objects as values. <a:schema>AppSplunkInstance<\/a:schema> objects are divided into search heads and indexers.",
			"type": "object",
			"properties": {
				"searchHeads": {
					"type": "array",
					"items": {
						"type": "AppSplunkInstance",
						"description": ""
					},
					"description": "The <a:schema>AppSplunkInstance<\/a:schema> objects, part of the search head group.",
					"required": true
				},
				"indexers": {
					"type": "array",
					"items": {
						"type": "AppSplunkInstance",
						"description": ""
					},
					"description": "The <a:schema>AppSplunkInstance<\/a:schema> objects, part of the indexers group.",
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
						"AppSplunk"
					],
					"readonly": true
				}
			}
		};
	}
};

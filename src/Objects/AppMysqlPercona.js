const ObjectBase = require("../ObjectBase");

module.exports = 
class AppMysqlPercona extends ObjectBase
{
	/**
	 * @protected
	 * 
	 * @returns {{description: string, type: string, properties: Object<propertyName, {type: string|string[], description: string, required: boolean, enum: undefined|string[], items: undefined|{description: string, type: string}, default: string|number|null|boolean, pattern: string|undefined, minLength: number|undefined, maxLength: string|undefined, readonly: boolean|undefined, required: boolean|undefined}>}}
	 */
	_schemaDefinition()
	{
		return {
			"description": "An object which has instance labels as keys and <a:schema>AppMysqlPercona<\/a:schema> objects as values.",
			"type": "object",
			"properties": {
				"nodes": {
					"type": "array",
					"items": {
						"type": "AppMysqlPerconaInstance",
						"description": ""
					},
					"description": "The <a:schema>AppMysqlPerconaInstance<\/a:schema> objects.",
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
						"AppMysqlPercona"
					],
					"readonly": true
				}
			}
		};
	}
};

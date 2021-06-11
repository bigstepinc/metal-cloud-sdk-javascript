const ObjectBase = require("../ObjectBase");

module.exports = 
class AppZoomdata extends ObjectBase
{
	/**
	 * @protected
	 * 
	 * @returns {{description: string, type: string, properties: Object<propertyName, {type: string|string[], description: string, required: boolean, enum: undefined|string[], items: undefined|{description: string, type: string}, default: string|number|null|boolean, pattern: string|undefined, minLength: number|undefined, maxLength: string|undefined, readonly: boolean|undefined, required: boolean|undefined}>}}
	 */
	_schemaDefinition()
	{
		return {
			"description": "An object which has instance labels as keys and <a:schema>AppZoomdataInstance<\/a:schema> objects as values.",
			"type": "object",
			"properties": {
				"zoomdata_node": {
					"type": "array",
					"items": {
						"type": "AppZoomdataInstance",
						"description": ""
					},
					"description": "The <a:schema>AppZoomdataInstance<\/a:schema> object which represents the Master.",
					"required": true
				},
				"zoomdata_url": {
					"type": [
						"string",
						"null"
					],
					"description": "The URL to access Zoomdata.",
					"required": true,
					"readonly": true
				},
				"container_cluster_software_available_versions": {
					"type": "array",
					"description": "Cluster software available versions.",
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
				"type": {
					"type": "string",
					"description": "The schema type",
					"enum": [
						"AppZoomdata"
					],
					"readonly": true
				}
			}
		};
	}
};

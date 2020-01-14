const ObjectBase = require("./ObjectBase");


module.exports = 
class AppHortonworks extends ObjectBase
{
	/**
	 * @protected
	 * 
	 * @returns {{description: string, type: string, properties: Object<propertyName, {type: string|string[], description: string, required: boolean, enum: undefined|string[], items: undefined|{description: string, type: string}, default: string|number|null|boolean, pattern: string|undefined, minLength: number|undefined, maxLength: string|undefined, readonly: boolean|undefined, required: boolean|undefined}>}}
	 */
	_schemaDefinition()
	{
		return {
			"description": "An object which has instance labels as keys and <a:schema>AppHortonworksInstance<\/a:schema> objects as values. <a:schema>AppHortonworksInstance<\/a:schema> objects are divided into head nodes and data nodes.",
			"type": "object",
			"properties": {
				"hortonworks_masternodes": {
					"type": "array",
					"items": {
						"type": "AppHortonworksInstance",
						"description": ""
					},
					"description": "The <a:schema>AppHortonworksInstance<\/a:schema> objects, part of the head nodes group.",
					"required": true
				},
				"hortonworks_slavenodes": {
					"type": "array",
					"items": {
						"type": "AppHortonworksInstance",
						"description": ""
					},
					"description": "The <a:schema>AppHortonworksInstance<\/a:schema> objects, part of the data nodes group.",
					"required": true
				},
				"admin_username": {
					"type": [
						"string",
						"null"
					],
					"description": "The admin username on the cluster.",
					"required": true,
					"readonly": true
				},
				"admin_initial_password": {
					"type": [
						"string",
						"null"
					],
					"description": "The initial admin password on the cluster.",
					"required": true,
					"readonly": true
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
						"AppHortonworks"
					],
					"readonly": true
				}
			}
		};
	}
};

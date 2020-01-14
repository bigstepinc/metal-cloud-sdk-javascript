const ObjectBase = require("./ObjectBase");


module.exports = 
class AppSpark extends ObjectBase
{
	/**
	 * @protected
	 * 
	 * @returns {{description: string, type: string, properties: Object<propertyName, {type: string|string[], description: string, required: boolean, enum: undefined|string[], items: undefined|{description: string, type: string}, default: string|number|null|boolean, pattern: string|undefined, minLength: number|undefined, maxLength: string|undefined, readonly: boolean|undefined, required: boolean|undefined}>}}
	 */
	_schemaDefinition()
	{
		return {
			"description": "An object which has instance labels as keys and <a:schema>AppSparkInstance<\/a:schema> objects as values.",
			"type": "object",
			"properties": {
				"spark_master": {
					"type": "array",
					"items": {
						"type": "AppSparkInstance",
						"description": ""
					},
					"description": "The <a:schema>AppSparkInstance<\/a:schema> object which represents the Master.",
					"required": true
				},
				"spark_workers": {
					"type": "array",
					"items": {
						"type": "AppSparkInstance",
						"description": ""
					},
					"description": "The <a:schema>AppSparkInstance<\/a:schema> objects.",
					"required": true
				},
				"spark_master_url": {
					"type": [
						"string",
						"null"
					],
					"description": "The URL to access Spark Master.",
					"required": true,
					"readonly": true
				},
				"spark_master_web_ui_url": {
					"type": [
						"string",
						"null"
					],
					"description": "The URL to access the Spark Master Web UI.",
					"required": true,
					"readonly": true
				},
				"jupyter_url": {
					"type": [
						"string",
						"null"
					],
					"description": "The URL to access Jupyter.",
					"required": true,
					"readonly": true
				},
				"jupyter_password": {
					"type": [
						"string",
						"null"
					],
					"description": "The default Jupyter password.",
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
						"AppSpark"
					],
					"readonly": true
				}
			}
		};
	}
};

const ObjectBase = require("./ObjectBase");


module.exports = 
class AppSparkSQL extends ObjectBase
{
	/**
	 * @protected
	 * 
	 * @returns {{description: string, type: string, properties: Object<propertyName, {type: string|string[], description: string, required: boolean, enum: undefined|string[], items: undefined|{description: string, type: string}, default: string|number|null|boolean, pattern: string|undefined, minLength: number|undefined, maxLength: string|undefined, readonly: boolean|undefined, required: boolean|undefined}>}}
	 */
	_schemaDefinition()
	{
		return {
			"description": "An object which has instance labels as keys and <a:schema>AppSparkSQLInstance<\/a:schema> objects as values.",
			"type": "object",
			"properties": {
				"spark_master": {
					"type": "array",
					"items": {
						"type": "AppSparkSQLInstance",
						"description": ""
					},
					"description": "The <a:schema>AppSparkSQLInstance<\/a:schema> object which represents the Master.",
					"required": true
				},
				"spark_workers": {
					"type": "array",
					"items": {
						"type": "AppSparkSQLInstance",
						"description": ""
					},
					"description": "The <a:schema>AppSparkSQLInstance<\/a:schema> objects.",
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
				"spark_thrift_url": {
					"type": [
						"string",
						"null"
					],
					"description": "The URL to access the Spark Thrift server.",
					"required": true,
					"readonly": true
				},
				"sparksql_jdbc_connection_url": {
					"type": [
						"string",
						"null"
					],
					"description": "The SparkSQL JDBC connection URL.",
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
						"AppSparkSQL"
					],
					"readonly": true
				}
			}
		};
	}
};

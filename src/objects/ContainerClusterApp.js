const ObjectBase = require("./ObjectBase");


module.exports = 
class ContainerClusterApp extends ObjectBase
{
	/**
	 * @protected
	 * 
	 * @returns {{description: string, type: string, properties: Object<propertyName, {type: string|string[], description: string, required: boolean, enum: undefined|string[], items: undefined|{description: string, type: string}, default: string|number|null|boolean, pattern: string|undefined, minLength: number|undefined, maxLength: string|undefined, readonly: boolean|undefined, required: boolean|undefined}>}}
	 */
	_schemaDefinition()
	{
		return {
			"description": "Information about the ContainerCluster's Containers and its application.",
			"type": "object",
			"properties": {
				"container_cluster_app": {
					"type": [
						"AppSpark",
						"AppZookeeper",
						"AppKafka",
						"AppZoomdata",
						"AppPostgreSQL",
						"AppSparkSQL",
						"AppElasticsearchContainer",
						"AppStreamSets",
						"null"
					],
					"description": "The ContainerCluster's Containers and application information.",
					"required": true
				},
				"type": {
					"description": "The schema type",
					"enum": [
						"ContainerClusterApp"
					],
					"readonly": true
				}
			}
		};
	}
};

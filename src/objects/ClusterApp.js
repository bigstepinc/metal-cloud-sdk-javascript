const ObjectBase = require("./ObjectBase");


module.exports = 
class ClusterApp extends ObjectBase
{
	/**
	 * @protected
	 * 
	 * @returns {{description: string, type: string, properties: Object<propertyName, {type: string|string[], description: string, required: boolean, enum: undefined|string[], items: undefined|{description: string, type: string}, default: string|number|null|boolean, pattern: string|undefined, minLength: number|undefined, maxLength: string|undefined, readonly: boolean|undefined, required: boolean|undefined}>}}
	 */
	_schemaDefinition()
	{
		return {
			"description": "Information about the Cluster's Instances and its application.",
			"type": "object",
			"properties": {
				"cluster_app": {
					"type": [
						"AppSplunk",
						"AppElasticsearch",
						"AppElasticsearchLegacy",
						"AppCloudera",
						"AppDatastax",
						"AppCouchbase",
						"AppDatameer",
						"AppMapRLegacy",
						"AppMapR",
						"AppKubernetes",
						"AppExasol",
						"AppMesos",
						"AppTableau",
						"AppHortonworks",
						"AppMysqlPercona",
						"null"
					],
					"description": "The Cluster's Instances and application information.",
					"required": true
				},
				"type": {
					"description": "The schema type",
					"enum": [
						"ClusterApp"
					],
					"readonly": true
				}
			}
		};
	}
};

const ObjectBase = require("./ObjectBase");


module.exports = 
class ClusterConnection extends ObjectBase
{
	/**
	 * @protected
	 * 
	 * @returns {{description: string, type: string, properties: Object<propertyName, {type: string|string[], description: string, required: boolean, enum: undefined|string[], items: undefined|{description: string, type: string}, default: string|number|null|boolean, pattern: string|undefined, minLength: number|undefined, maxLength: string|undefined, readonly: boolean|undefined, required: boolean|undefined}>}}
	 */
	_schemaDefinition()
	{
		return {
			"description": "A Cluster Connection object.",
			"type": "object",
			"properties": {
				"cluster_id": {
					"type": "integer",
					"description": "Represents the target cluster ID of the connection.",
					"required": true
				},
				"type": {
					"type": "string",
					"description": "The schema type.",
					"enum": [
						"ClusterConnection"
					],
					"readonly": true
				}
			}
		};
	}
};

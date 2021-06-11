const ObjectBase = require("../ObjectBase");

module.exports = 
class AppHortonworksInstance extends ObjectBase
{
	/**
	 * @protected
	 * 
	 * @returns {{description: string, type: string, properties: Object<propertyName, {type: string|string[], description: string, required: boolean, enum: undefined|string[], items: undefined|{description: string, type: string}, default: string|number|null|boolean, pattern: string|undefined, minLength: number|undefined, maxLength: string|undefined, readonly: boolean|undefined, required: boolean|undefined}>}}
	 */
	_schemaDefinition()
	{
		return {
			"description": "Details about the Instance object specific to Hortonworks. The information presented here is obtained by interrogating the Hortonworks API. Backward compatibility object will not be ensured when the underlying Hortonworks API changes.",
			"type": "object",
			"properties": {
				"instance_id": {
					"type": [
						"integer",
						"null",
						"string"
					],
					"description": "The instance ID of the node",
					"required": true,
					"readonly": true
				},
				"instance_label": {
					"type": [
						"null",
						"string"
					],
					"description": "The instance label of the node",
					"required": true,
					"readonly": true
				},
				"instance_service_status": {
					"enum": [
						"ordered",
						"active",
						"suspended",
						"stopped",
						"deleted"
					],
					"type": [
						"string",
						"null"
					],
					"description": "The status of the instance.",
					"default": null,
					"readonly": true
				},
				"instance_hostname": {
					"type": [
						"null",
						"string"
					],
					"description": "The subdomain of the node",
					"required": true,
					"readonly": true
				},
				"instance_cluster_url": {
					"type": [
						"null",
						"string"
					],
					"description": "The cluster UI url of the node",
					"required": true,
					"readonly": true
				},
				"instance_health": {
					"type": "string",
					"description": "The health status of the node",
					"required": true,
					"readonly": true
				},
				"type": {
					"type": "string",
					"description": "The schema type",
					"enum": [
						"AppHortonworksInstance"
					],
					"readonly": true
				}
			}
		};
	}
};

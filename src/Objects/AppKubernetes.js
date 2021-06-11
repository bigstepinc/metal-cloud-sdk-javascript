const ObjectBase = require("../ObjectBase");

module.exports = 
class AppKubernetes extends ObjectBase
{
	/**
	 * @protected
	 * 
	 * @returns {{description: string, type: string, properties: Object<propertyName, {type: string|string[], description: string, required: boolean, enum: undefined|string[], items: undefined|{description: string, type: string}, default: string|number|null|boolean, pattern: string|undefined, minLength: number|undefined, maxLength: string|undefined, readonly: boolean|undefined, required: boolean|undefined}>}}
	 */
	_schemaDefinition()
	{
		return {
			"description": "Kubernetes cluster.",
			"type": "object",
			"properties": {
				"kubernetes_nodes": {
					"type": "array",
					"items": {
						"type": "AppKubernetesInstance",
						"description": ""
					},
					"description": "",
					"required": true
				},
				"kubernetes_master": {
					"type": "array",
					"items": {
						"type": "AppKubernetesInstance",
						"description": ""
					},
					"description": "",
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
				"type": {
					"type": "string",
					"description": "The schema type",
					"enum": [
						"AppKubernetes"
					],
					"readonly": true
				}
			}
		};
	}
};

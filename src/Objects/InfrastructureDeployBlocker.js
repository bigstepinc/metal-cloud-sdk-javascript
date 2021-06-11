const ObjectBase = require("../ObjectBase");

module.exports = 
class InfrastructureDeployBlocker extends ObjectBase
{
	/**
	 * @protected
	 * 
	 * @returns {{description: string, type: string, properties: Object<propertyName, {type: string|string[], description: string, required: boolean, enum: undefined|string[], items: undefined|{description: string, type: string}, default: string|number|null|boolean, pattern: string|undefined, minLength: number|undefined, maxLength: string|undefined, readonly: boolean|undefined, required: boolean|undefined}>}}
	 */
	_schemaDefinition()
	{
		return {
			"description": "Contains the results of tests performed before commencing an Infrastructure deploy operation in order to identify reasons that would lead to it failing.",
			"type": "object",
			"properties": {
				"instance": {
					"type": [
						"Instance",
						"null"
					],
					"description": "",
					"required": false,
					"default": null
				},
				"cluster": {
					"type": [
						"Cluster",
						"null"
					],
					"description": "",
					"required": false,
					"default": null
				},
				"instanceArray": {
					"type": [
						"InstanceArray",
						"null"
					],
					"description": "",
					"required": false,
					"default": null
				},
				"sshConnectivity": {
					"enum": [
						"connectable",
						"connection_refused",
						"destination_unreachable",
						"connection_timed_out",
						"protocol_error",
						null
					],
					"description": "",
					"default": null,
					"type": [
						"string",
						"null"
					]
				},
				"sshAuthentication": {
					"enum": [
						"connectable",
						"authentication_error",
						null
					],
					"description": "",
					"default": null,
					"type": [
						"string",
						"null"
					]
				},
				"apiConnectivity": {
					"enum": [
						"connectable",
						"connection_refused",
						"destination_unreachable",
						null
					],
					"description": "",
					"default": null,
					"type": [
						"string",
						"null"
					]
				},
				"apiAuthentication": {
					"enum": [
						"connectable",
						"authentication_error",
						null
					],
					"description": "",
					"default": null,
					"type": [
						"string",
						"null"
					]
				},
				"memoryUsageReport": {
					"type": [
						"string",
						"null"
					],
					"description": "",
					"default": null
				},
				"missingInterfaces": {
					"type": [
						"string",
						"null"
					],
					"description": "",
					"default": null
				},
				"saasVersion": {
					"enum": [
						"unknown_version",
						"unsupported_version",
						null
					],
					"description": "",
					"default": null,
					"type": [
						"string",
						"null"
					]
				},
				"errorMessage": {
					"type": [
						"string",
						"null"
					],
					"description": "",
					"default": null
				},
				"type": {
					"type": "string",
					"description": "The schema type",
					"enum": [
						"InfrastructureDeployBlocker"
					],
					"readonly": true
				}
			}
		};
	}
};

const ObjectBase = require("../ObjectBase");

module.exports = 
class InfrastructureDeployOverview extends ObjectBase
{
	/**
	 * @protected
	 * 
	 * @returns {{description: string, type: string, properties: Object<propertyName, {type: string|string[], description: string, required: boolean, enum: undefined|string[], items: undefined|{description: string, type: string}, default: string|number|null|boolean, pattern: string|undefined, minLength: number|undefined, maxLength: string|undefined, readonly: boolean|undefined, required: boolean|undefined}>}}
	 */
	_schemaDefinition()
	{
		return {
			"description": "Important infrastructure changes which need to be reviewed before a deploy.",
			"type": "object",
			"properties": {
				"unusedServerTypeReservations": {
					"type": "array",
					"description": "Unused reservations across all owned infrastructures.",
					"readonly": true
				},
				"isOnlyFirewallDeploy": {
					"type": "boolean",
					"description": "If this is true, it means that strictly only firewall changes will be deployed and nothing else, meaning a very short deploy will happen.",
					"readonly": true
				},
				"licenses": {
					"type": "array",
					"description": "Licenses which are created, reassigned or unused.",
					"readonly": true
				},
				"dataLoss": {
					"type": "array",
					"description": "Infrastructure elements such as <a:schema>SharedDrive</a:schema> or <a:schema>Drive</a:schema> which will be shrinked, stopped or deleted.",
					"readonly": true
				},
				"downtime": {
					"type": "array",
					"description": "Infrastructure elements such as <a:schema>InstanceArrays</a:schema> or <a:schema>ContainerArrays</a:schema> and their children which will be temporarily powered off or restarted.",
					"default": [
						
					],
					"readonly": true
				},
				"resourceChanges": {
					"type": "array",
					"description": "Infrastructure elements which are swapping, allocating or deallocating servers, allocating or expanding disk space, etc.",
					"readonly": true
				},
				"unusedLANNetworks": {
					"type": "array",
					"description": "LAN networks that have no InstanceArrays attached to them.",
					"readonly": true
				},
				"subdomainChanges": {
					"type": "array",
					"description": "Infrastructure elements with changed subdomains.",
					"readonly": true
				},
				"willAllServersPowerOnAtDeployEnd": {
					"type": "boolean",
					"description": "If this is true, at the end of the deploy, all the servers on the infrastructure will be powered on.",
					"readonly": true
				},
				"type": {
					"type": "string",
					"description": "The schema type",
					"enum": [
						"InfrastructureDeployOverview"
					],
					"readonly": true
				}
			}
		};
	}
};

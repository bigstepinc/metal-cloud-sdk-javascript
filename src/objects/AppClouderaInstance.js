const ObjectBase = require("./ObjectBase");


module.exports = 
class AppClouderaInstance extends ObjectBase
{
	/**
	 * @protected
	 * 
	 * @returns {{description: string, type: string, properties: Object<propertyName, {type: string|string[], description: string, required: boolean, enum: undefined|string[], items: undefined|{description: string, type: string}, default: string|number|null|boolean, pattern: string|undefined, minLength: number|undefined, maxLength: string|undefined, readonly: boolean|undefined, required: boolean|undefined}>}}
	 */
	_schemaDefinition()
	{
		return {
			"description": "Details about the Instance object specific to Cloudera. The information presented here is obtained by interrogating the Cloudera API. Backward compatibility object will not be ensured when the underlying Cloudera API changes.",
			"type": "object",
			"properties": {
				"name": {
					"type": [
						"string",
						"null"
					],
					"description": "The name of the role. Optional when creating a role. If not specified, a name will be automatically generated for the role.",
					"required": true,
					"readonly": true
				},
				"commissionState": {
					"enum": [
						"COMMISSIONED",
						"DECOMMISSIONING",
						"DECOMMISSIONED",
						"UNKNOWN",
						null
					],
					"type": [
						"string",
						"null"
					],
					"description": " The commission state of this role.",
					"required": true,
					"readonly": true
				},
				"healthSummary": {
					"enum": [
						"DISABLED",
						"HISTORY_NOT_AVAILABLE",
						"NOT_AVAILABLE",
						"GOOD",
						"CONCERNING",
						"BAD",
						"null"
					],
					"type": [
						"string",
						"null"
					],
					"description": "The high-level health status of this role.",
					"required": true,
					"readonly": true
				},
				"roleUrl": {
					"type": [
						"string",
						"null"
					],
					"description": "Link into the Cloudera Manager web UI for this specific role.",
					"required": true,
					"readonly": true
				},
				"ipAddress": {
					"type": [
						"string",
						"null"
					],
					"description": "The host IP address.",
					"required": true,
					"readonly": true
				},
				"totalPhysMemBytes": {
					"type": [
						"string",
						"null"
					],
					"description": "The amount of physical RAM on this host, in bytes.",
					"required": true,
					"readonly": true
				},
				"instance_id": {
					"type": [
						"integer",
						"null",
						"string"
					],
					"description": "The ID of the Instance associated with the node",
					"required": true,
					"readonly": true
				},
				"instance_label": {
					"type": [
						"null",
						"string"
					],
					"description": "The label of the Instance associated with the node",
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
				"type": {
					"type": "string",
					"description": "The schema type",
					"enum": [
						"AppClouderaInstance"
					],
					"readonly": true
				}
			}
		};
	}
};

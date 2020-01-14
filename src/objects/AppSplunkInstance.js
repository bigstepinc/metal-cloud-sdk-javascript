const ObjectBase = require("./ObjectBase");


module.exports = 
class AppSplunkInstance extends ObjectBase
{
	/**
	 * @protected
	 * 
	 * @returns {{description: string, type: string, properties: Object<propertyName, {type: string|string[], description: string, required: boolean, enum: undefined|string[], items: undefined|{description: string, type: string}, default: string|number|null|boolean, pattern: string|undefined, minLength: number|undefined, maxLength: string|undefined, readonly: boolean|undefined, required: boolean|undefined}>}}
	 */
	_schemaDefinition()
	{
		return {
			"description": "Details about the Instance object specific to Splunk. The infromation presented here is obtained by interrogating the Splunk API. Backward compatibility object will not be ensured when the underlying Splunk API changes.",
			"type": "object",
			"properties": {
				"admin_username": {
					"type": [
						"string",
						"null"
					],
					"description": "The initial admin username on the instance.",
					"required": true,
					"readonly": true
				},
				"admin_initial_password": {
					"type": [
						"string",
						"null"
					],
					"description": "The initial admin password on the instance.",
					"required": true,
					"readonly": true
				},
				"url": {
					"type": [
						"string",
						"null"
					],
					"description": "The admin interface URL.",
					"required": true,
					"readonly": true
				},
				"cpu_total_pct": {
					"type": [
						"number",
						"null"
					],
					"description": "Percentage of time CPU is running in system mode and user mode.",
					"readonly": true
				},
				"mem_total_gb": {
					"type": [
						"number",
						"null"
					],
					"description": "Total physical memory available.",
					"readonly": true
				},
				"mem_used_pct": {
					"type": [
						"number",
						"null"
					],
					"description": "Percentage of used physical memory.",
					"readonly": true
				},
				"guid": {
					"type": [
						"string",
						"null"
					],
					"description": "Globally unique identifier for this server.",
					"readonly": true
				},
				"activeLicenseGroup": {
					"type": [
						"string",
						"null"
					],
					"description": "Type of Splunk Enterprise license. Can be one of: <code>\"Enterprise\"<\/code>, <code>\"Forwarder\"<\/code>, <code>\"Free\"<\/code>, <code>\"Invalid\"<\/code>, <code>\"Trial\"<\/code>. After installation the license type is <code>\"Trial\"<\/code>.",
					"readonly": true
				},
				"licenseKeys": {
					"type": [
						"string",
						"null"
					],
					"description": "All the active keys for the current license.",
					"readonly": true
				},
				"licenseState": {
					"type": [
						"string",
						"null"
					],
					"description": "Specifies the status of the license, which can be either <code>\"OK\"<\/code> or <code>\"Expired\"<\/code>.",
					"readonly": true
				},
				"version": {
					"type": [
						"string",
						"null"
					],
					"description": "Software version number.",
					"readonly": true
				},
				"license_quota_gb": {
					"type": [
						"number",
						"null"
					],
					"description": "The total size of logs that can be indexed in one day using the current license.",
					"readonly": true
				},
				"license_used_pct": {
					"type": [
						"number",
						"null"
					],
					"description": "The percentage of the total size of logs which was used .",
					"readonly": true
				},
				"storage_capacity_gb": {
					"type": [
						"number",
						"null"
					],
					"description": "Total disk capacity. It might take a while until the property is populated.",
					"readonly": true
				},
				"storage_used_pct": {
					"type": [
						"number",
						"null"
					],
					"description": "Percentage of used disk capacity. It might take a while until the property is populated.",
					"readonly": true
				},
				"instance_id": {
					"type": [
						"integer",
						"null",
						"string"
					],
					"description": "The ID of the instance associated with the node.",
					"readonly": true
				},
				"instance_label": {
					"type": [
						"null",
						"string"
					],
					"description": "The label of the instance associated with the node.",
					"readonly": true
				},
				"type": {
					"type": "string",
					"description": "The schema type",
					"enum": [
						"AppSplunkInstance"
					],
					"readonly": true
				}
			}
		};
	}
};

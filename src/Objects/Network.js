const ObjectBase = require("../ObjectBase");

module.exports = 
class Network extends ObjectBase
{
	/**
	 * @protected
	 * 
	 * @returns {{description: string, type: string, properties: Object<propertyName, {type: string|string[], description: string, required: boolean, enum: undefined|string[], items: undefined|{description: string, type: string}, default: string|number|null|boolean, pattern: string|undefined, minLength: number|undefined, maxLength: string|undefined, readonly: boolean|undefined, required: boolean|undefined}>}}
	 */
	_schemaDefinition()
	{
		return {
			"description": "A Network object contains information regarding a network, including type, parent <a:schema>Infrastructure<\/a:schema> and creation time.",
			"type": "object",
			"additionalProperties": false,
			"properties": {
				"network_label": {
					"type": [
						"null",
						"string"
					],
					"description": "The network's label which is unique and it is used to form the <code>network_subdomain<\/code>. Can be used to call API functions.",
					"minLength": 1,
					"maxLength": 63,
					"required": false,
					"pattern": "^[a-zA-Z]{1,1}[a-zA-Z0-9-]{0,61}[a-zA-Z0-9]{1,1}|[a-zA-Z]{1,1}$",
					"default": null
				},
				"network_subdomain": {
					"type": [
						"string",
						"null"
					],
					"description": "Automatically created based on <code>network_label<\/code>. It is a unique reference to the Network object.",
					"default": null,
					"readonly": true
				},
				"network_id": {
					"type": [
						"integer",
						"null",
						"string"
					],
					"description": "Represents the ID of the network which can be used instead of the <code>network_label<\/code> or <code>network_subdomain<\/code> when calling the API functions.  It is automatically generated and cannot be edited.",
					"default": null,
					"readonly": true
				},
				"network_type": {
					"enum": [
						"lan",
						"wan",
						"san"
					],
					"type": "string",
					"description": "The network type.",
					"required": true
				},
				"infrastructure_id": {
					"type": [
						"integer",
						"null",
						"string"
					],
					"description": "Represents the infrastructure ID to which the network belongs.",
					"default": null,
					"readonly": true
				},
				"network_service_status": {
					"enum": [
						"ordered",
						"active",
						"stopped",
						"deleted"
					],
					"type": [
						"string",
						"null"
					],
					"description": "It shows the status of the network.",
					"default": null,
					"readonly": true
				},
				"network_operation": {
					"type": [
						"NetworkOperation",
						"null"
					],
					"description": "The operation type, operation status and modified Network object.",
					"default": null,
					"readonly": true
				},
				"network_created_timestamp": {
					"type": [
						"string",
						"null"
					],
					"description": "ISO 8601 timestamp which holds the date and time when the network was created. Example format: 2013-11-29T13:00:01Z.",
					"default": "0000-00-00T00:00:00Z",
					"readonly": true
				},
				"network_updated_timestamp": {
					"type": [
						"string",
						"null"
					],
					"description": "ISO 8601 timestamp which holds the date and time when the network was edited. Example format: 2013-11-29T13:00:01Z.",
					"default": "0000-00-00T00:00:00Z",
					"readonly": true
				},
				"network_gui_settings_json": {
					"type": "string",
					"description": "Reserved for GUI users.",
					"default": "",
					"readonly": true
				},
				"type": {
					"type": "string",
					"description": "The schema type.",
					"enum": [
						"Network"
					],
					"readonly": true
				},
				"network_change_id": {
					"type": [
						"integer",
						"null"
					],
					"description": "This property helps ensure that edit operations don\u2019t overwrite other, more recent changes made to the same object. It gets updated automatically after each successful edit operation.",
					"default": null,
					"required": true
				},
				"network_vlan_id": {
					"type": [
						"integer",
						"null"
					],
					"description": "The VLAN ID allocated for this network.",
					"readonly": true
				},
				"network_suspend_status": {
					"type": "string",
					"description": "The network suspend status.",
					"enum": [
						"not_suspended",
						"suspending",
						"suspended",
						"unsuspending"
					],
					"readonly": true
				},
				"network_lan_autoallocate_ips": {
					"type": "boolean",
					"description": "This property specify whether the allocation of the private IPS is done automatically or manually.",
					"default": false,
					"readonly": false,
					"required": true
				}
			}
		};
	}
};

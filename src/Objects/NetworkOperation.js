const ObjectBase = require("../ObjectBase");

module.exports = 
class NetworkOperation extends ObjectBase
{
	/**
	 * @protected
	 * 
	 * @returns {{description: string, type: string, properties: Object<propertyName, {type: string|string[], description: string, required: boolean, enum: undefined|string[], items: undefined|{description: string, type: string}, default: string|number|null|boolean, pattern: string|undefined, minLength: number|undefined, maxLength: string|undefined, readonly: boolean|undefined, required: boolean|undefined}>}}
	 */
	_schemaDefinition()
	{
		return {
			"description": "NetworkOperation contains information regarding the changes that are to be made to a product. Edit and deploy functions have to be called in order to apply the changes. The operation type and status are unique to each operation object.",
			"type": "object",
			"properties": {
				"network_deploy_status": {
					"enum": [
						"not_started",
						"ongoing",
						"finished"
					],
					"type": [
						"string",
						"null"
					],
					"description": "The status of the deploy process.",
					"readonly": true
				},
				"network_deploy_type": {
					"enum": [
						"create",
						"edit",
						"delete",
						"start",
						"stop"
					],
					"type": [
						"string",
						"null"
					],
					"description": "The operation applied to the network.",
					"readonly": true
				},
				"network_label": {
					"type": "string",
					"description": "The network's label which is unique and it is used to form the <code>network_subdomain<\/code>. Can be used to call API functions.",
					"maxLength": 63,
					"required": true,
					"pattern": "^[a-zA-Z]{1,1}[a-zA-Z0-9-]{0,61}[a-zA-Z0-9]{1,1}|[a-zA-Z]{1,1}$"
				},
				"network_subdomain": {
					"type": [
						"string",
						"null"
					],
					"description": "Automatically created based on <code>network_label<\/code>. It is a unique reference to the Network object.",
					"readonly": true
				},
				"network_id": {
					"type": [
						"integer",
						"null",
						"string"
					],
					"description": "Represents the ID of the network which can be used instead of the <code>network_label<\/code> or <code>network_subdomain<\/code> when calling the API functions.  It is automatically generated and cannot be edited.",
					"readonly": true
				},
				"network_updated_timestamp": {
					"type": [
						"string",
						"null"
					],
					"description": "ISO 8601 timestamp which holds the date and time when the network was edited. Example format: 2013-11-29T13:00:01Z.",
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
						"NetworkOperation"
					],
					"readonly": true
				},
				"network_change_id": {
					"type": "integer",
					"description": "This property helps ensure that edit operations don’t overwrite other, more recent changes made to the same object. It gets updated automatically after each successful edit operation.",
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

const ObjectBase = require("./ObjectBase");


module.exports = 
class Infrastructure extends ObjectBase
{
	/**
	 * @protected
	 * 
	 * @returns {{description: string, type: string, properties: Object<propertyName, {type: string|string[], description: string, required: boolean, enum: undefined|string[], items: undefined|{description: string, type: string}, default: string|number|null|boolean, pattern: string|undefined, minLength: number|undefined, maxLength: string|undefined, readonly: boolean|undefined, required: boolean|undefined}>}}
	 */
	_schemaDefinition()
	{
		return {
			"description": "An infrastructure is the parent object for InstanceArrays, Instances, Clusters, Networks, Subnets, DriveArrays, Drives and DataLakes and their relationships.",
			"type": "object",
			"properties": {
				"infrastructure_label": {
					"type": [
						"string",
						"null"
					],
					"description": "The infrastructure's unique label is used to create the <code>infrastructure_subdomain<\/code>. Can be used to call API functions.",
					"minLength": 1,
					"maxLength": 63,
					"required": false,
					"pattern": "^[a-zA-Z]{1,1}[a-zA-Z0-9-]{0,61}[a-zA-Z0-9]{1,1}|[a-zA-Z]{1,1}$",
					"default": null
				},
				"infrastructure_subdomain": {
					"type": [
						"string",
						"null"
					],
					"description": "Automatically created based on <code>infrastructure_label<\/code>. It is a unique reference to the Infrastructure object.",
					"default": null,
					"readonly": true
				},
				"datacenter_name": {
					"type": [
						"string",
						"null"
					],
					"description": "Read-only for infrastructures with infrastructure_service_status = <code>SERVICE_STATUS_ACTIVE<\/code>. Use <code>datacenters()<\/code> to obtain a list of possible values.",
					"default": null,
					"readonly": false
				},
				"infrastructure_id": {
					"type": [
						"integer",
						"null",
						"string"
					],
					"description": "The ID of the infrastructure which can be used instead of the <code>infrastructure_label<\/code> when calling the API functions.",
					"default": null,
					"readonly": true
				},
				"user_id_owner": {
					"type": [
						"integer",
						"string",
						"null"
					],
					"description": "The owner's user ID.",
					"default": null
				},
				"user_email_owner": {
					"type": [
						"string",
						"null"
					],
					"description": "The owner's email.",
					"default": null,
					"readonly": true
				},
				"infrastructure_touch_unixtime": {
					"type": [
						"string",
						"null"
					],
					"description": "Reserved for GUIs.",
					"default": null,
					"readonly": true
				},
				"infrastructure_service_status": {
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
					"description": "The status of the infrastructure.",
					"default": null,
					"readonly": true
				},
				"infrastructure_operation": {
					"type": [
						"InfrastructureOperation",
						"null"
					],
					"description": "The operation type, operation status and modified Infrastructure object.",
					"default": null,
					"readonly": true
				},
				"infrastructure_created_timestamp": {
					"type": [
						"string",
						"null"
					],
					"description": "ISO 8601 timestamp which holds the date and time when the infrastructure was created. Example format: 2013-11-29T13:00:01Z.",
					"default": "0000-00-00T00:00:00Z",
					"readonly": true
				},
				"infrastructure_updated_timestamp": {
					"type": [
						"string",
						"null"
					],
					"description": "ISO 8601 timestamp which holds the date and time when the infrastructure was edited. Example format: 2013-11-29T13:00:01Z.",
					"default": "0000-00-00T00:00:00Z",
					"readonly": true
				},
				"infrastructure_gui_settings_json": {
					"type": "string",
					"description": "Reserved for GUI users.",
					"default": "",
					"readonly": true
				},
				"type": {
					"type": "string",
					"description": "The schema type.",
					"enum": [
						"Infrastructure"
					],
					"readonly": true
				},
				"infrastructure_change_id": {
					"type": [
						"integer",
						"null"
					],
					"description": "This property helps ensure that edit operations don\u2019t overwrite other, more recent changes made to the same object. It gets updated automatically after each successful edit operation.",
					"default": null,
					"required": true
				},
				"infrastructure_deploy_id": {
					"type": [
						"integer",
						"null"
					],
					"description": "The deploy which resulted in the currently provisioned state.",
					"default": null,
					"required": false
				},
				"infrastructure_private_datacenters_json": {
					"type": [
						"null",
						"string"
					],
					"description": "Notifies the Sales team about additional customer private datacenter needs.",
					"maxLength": 254,
					"default": null,
					"readonly": false
				},
				"infrastructure_design_is_locked": {
					"type": "boolean",
					"description": "This property is used to prevent edits, reverts and deploys on the infrastructure.",
					"default": false,
					"readonly": false,
					"required": true
				},
				"subnet_pool_lan": {
					"type": [
						"null",
						"SubnetPoolLAN"
					],
					"description": "The subnet pool used on this infrastructure to allocate private IPs",
					"required": false,
					"default": null
				},
				"infrastructure_reserved_lan_ip_ranges": {
					"type": "array",
					"items": {
						"type": "ReservedLANIPRange",
						"description": "Contains a reserved LAN IP range."
					},
					"default": [
						
					],
					"description": "Contains the reserved LAN IP ranges on the infrastructure."
				},
				"infrastructure_tags": {
					"type": "array",
					"items": {
						"type": "string",
						"description": ""
					},
					"description": "List of tags representative for the Infrastructure.",
					"default": [
						
					],
					"required": false
				}
			}
		};
	}
};

const ObjectBase = require("./ObjectBase");


module.exports = 
class InfrastructureOperation extends ObjectBase
{
	/**
	 * @protected
	 * 
	 * @returns {{description: string, type: string, properties: Object<propertyName, {type: string|string[], description: string, required: boolean, enum: undefined|string[], items: undefined|{description: string, type: string}, default: string|number|null|boolean, pattern: string|undefined, minLength: number|undefined, maxLength: string|undefined, readonly: boolean|undefined, required: boolean|undefined}>}}
	 */
	_schemaDefinition()
	{
		return {
			"description": "InfrastructureOperation contains information regarding the changes that are to be made to a product. Edit and deploy functions have to be called in order to apply the changes. The operation type and status are unique to each operation object.",
			"type": "object",
			"properties": {
				"infrastructure_deploy_status": {
					"enum": [
						"not_started",
						"ongoing",
						"finished"
					],
					"type": "string",
					"description": "The status of the deploy process.",
					"readonly": true
				},
				"infrastructure_deploy_type": {
					"enum": [
						"create",
						"delete",
						"edit",
						"start",
						"stop"
					],
					"type": [
						"string",
						"null"
					],
					"description": "The operation applied to the infrastructure.",
					"readonly": true
				},
				"infrastructure_label": {
					"type": "string",
					"description": "The infrastructure's unique subdomain label is used to create the <code>infrastructure_subdomain<\/code>. Can be used to call API functions.",
					"minLength": 1,
					"maxLength": 63,
					"required": true,
					"pattern": "^[a-zA-Z]{1,1}[a-zA-Z0-9-]{0,61}[a-zA-Z0-9]{1,1}|[a-zA-Z]{1,1}$"
				},
				"infrastructure_subdomain": {
					"type": [
						"string",
						"null"
					],
					"description": "Automatically created based on <code>infrastructure_label<\/code>. It is a unique reference to the Infrastructure object.",
					"readonly": true
				},
				"datacenter_name": {
					"type": [
						"null",
						"string"
					],
					"description": "If <code>null<\/code>, this property will default to the first array element returned by <code>datacenters()<\/code>. It is read-only for infrastructures with infrastructure_service_status = <code>SERVICE_STATUS_ACTIVE<\/code>.",
					"readonly": false
				},
				"infrastructure_id": {
					"type": [
						"integer",
						"null",
						"string"
					],
					"description": "The ID of the infrastructure which can be used instead of the <code>infrastructure_label<\/code> when calling the API functions.",
					"readonly": true
				},
				"user_id_owner": {
					"type": [
						"integer",
						"string"
					],
					"description": "The owner's user ID.",
					"readonly": true
				},
				"infrastructure_updated_timestamp": {
					"type": [
						"string",
						"null"
					],
					"description": "ISO 8601 timestamp which holds the date and time when the infrastructure was edited. Example format: 2013-11-29T13:00:01Z.",
					"readonly": true
				},
				"infrastructure_gui_settings_json": {
					"type": "string",
					"description": "Reserved for GUI users.",
					"readonly": true
				},
				"type": {
					"type": "string",
					"description": "The schema type.",
					"enum": [
						"InfrastructureOperation"
					],
					"readonly": true
				},
				"infrastructure_deploy_id": {
					"type": [
						"integer",
						"null"
					],
					"description": "If the operation is ongoing, it uniquely identifies the current deploy operation. If the operation is finished, it uniquely identifies the deploy operation of the entire infrastructure, at the time of this change.",
					"required": false
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
				}
			}
		};
	}
};

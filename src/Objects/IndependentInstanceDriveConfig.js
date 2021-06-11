const ObjectBase = require("../ObjectBase");

module.exports = 
class IndependentInstanceDriveConfig extends ObjectBase
{
	/**
	 * @protected
	 * 
	 * @returns {{description: string, type: string, properties: Object<propertyName, {type: string|string[], description: string, required: boolean, enum: undefined|string[], items: undefined|{description: string, type: string}, default: string|number|null|boolean, pattern: string|undefined, minLength: number|undefined, maxLength: string|undefined, readonly: boolean|undefined, required: boolean|undefined}>}}
	 */
	_schemaDefinition()
	{
		return {
			"description": "Configuration info for a local or iSCSI drive used on an independent instance.",
			"type": "object",
			"properties": {
				"drive_mount_type": {
					"type": "string",
					"description": "Determines wether the drive is local to the server or mounted via iSCSI.",
					"enum": [
						"pxe_iscsi",
						"local_drives"
					],
					"required": true
				},
				"volume_template_id": {
					"type": [
						"integer",
						"null",
						"string"
					],
					"description": "The volume template ID.",
					"required": false,
					"default": null
				},
				"drive_storage_type": {
					"type": [
						"null",
						"string"
					],
					"description": "If the drive_mount_type is pxe_iscsi, represents the Drive’s type of storage.",
					"required": false
				},
				"drive_size_mbytes": {
					"type": [
						"null",
						"integer"
					],
					"minimum": 1024,
					"maximum": 2046976,
					"description": "If the drive_mount_type is pxe_iscsi, represents the capacity of the Drive.",
					"required": false
				},
				"drive_label": {
					"type": "string",
					"description": "The Drive's label which is unique and it is used to form the <code>drive_subdomain</code>. It's only used for iSCSI drives. If this is not given, a <code>drive-<drive_id></code> label will be used instead.",
					"minLength": 1,
					"maxLength": 63,
					"required": false,
					"pattern": "^[a-zA-Z]{1,1}[a-zA-Z0-9-]{0,61}[a-zA-Z0-9]{1,1}|[a-zA-Z]{1,1}$"
				},
				"license_utilization_type": {
					"enum": [
						"demand",
						"subscription"
					],
					"type": [
						"string",
						"null"
					],
					"description": "License utilization type for the license used on the drive.",
					"default": "subscription"
				},
				"type": {
					"type": "string",
					"description": "The schema type.",
					"enum": [
						"IndependentInstanceDriveConfig"
					],
					"readonly": true
				}
			}
		};
	}
};

const ObjectBase = require("./ObjectBase");


module.exports = 
class VolumeTemplate extends ObjectBase
{
	/**
	 * @protected
	 * 
	 * @returns {{description: string, type: string, properties: Object<propertyName, {type: string|string[], description: string, required: boolean, enum: undefined|string[], items: undefined|{description: string, type: string}, default: string|number|null|boolean, pattern: string|undefined, minLength: number|undefined, maxLength: string|undefined, readonly: boolean|undefined, required: boolean|undefined}>}}
	 */
	_schemaDefinition()
	{
		return {
			"description": "A template can be created based on a drive and it has the same characteristics and holds the same information as the parent drive.",
			"type": "object",
			"properties": {
				"volume_template_id": {
					"type": [
						"integer",
						"null",
						"string"
					],
					"description": "The ID of the volume template.",
					"default": null,
					"readonly": true
				},
				"volume_template_label": {
					"type": [
						"null",
						"string"
					],
					"description": "The volume template's label. It is editable and can be used to call API functions.",
					"minLength": 1,
					"maxLength": 63,
					"required": true,
					"pattern": "^[a-zA-Z]{1,1}[a-zA-Z0-9-]{0,61}[a-zA-Z0-9]{1,1}|[a-zA-Z]{1,1}$"
				},
				"volume_template_label_unique": {
					"type": [
						"null",
						"string"
					],
					"description": "The volume template's unique label. Is <volume_template_label>@<user_id>.",
					"minLength": 1,
					"maxLength": 83,
					"required": false,
					"readonly": true
				},
				"volume_template_display_name": {
					"type": "string",
					"description": "The volume template's display name.",
					"minLength": 1,
					"maxLength": 63,
					"readonly": true
				},
				"volume_template_size_mbytes": {
					"type": "integer",
					"minimum": 2048,
					"maximum": 2097152,
					"description": "Size of the template.",
					"required": true
				},
				"volume_template_local_disk_supported": {
					"type": "boolean",
					"description": "Wether the template supports booting and running from local disks.",
					"default": false,
					"required": false
				},
				"volume_template_is_os_template": {
					"type": "boolean",
					"description": "Wether the template is an OS template.",
					"default": false,
					"required": false
				},
				"volume_template_boot_methods_supported": {
					"type": "string",
					"description": "A set of all supported methods",
					"default": "pxe_iscsi",
					"required": false
				},
				"volume_template_description": {
					"type": [
						"string",
						"null"
					],
					"description": "An arbitrary UTF-8 string which provides a description of the template.",
					"default": "",
					"readonly": true
				},
				"volume_template_created_timestamp": {
					"type": [
						"string",
						"null"
					],
					"description": "Date and time of the template's creation. ISO 8601 timestamp. Example format: 2013-11-29T13:00:01Z",
					"default": null,
					"readonly": true
				},
				"volume_template_updated_timestamp": {
					"type": [
						"string",
						"null"
					],
					"description": "ISO 8601 timestamp which holds the date and time when the VolumeTemplate was edited. Example format: 2013-11-29T13:00:01Z.",
					"default": "0000-00-00T00:00:00Z",
					"readonly": true
				},
				"user_id": {
					"type": [
						"integer",
						"null",
						"string"
					],
					"description": "User owner ID.",
					"default": null,
					"readonly": true
				},
				"volume_template_operating_system": {
					"type": [
						"OperatingSystem",
						"null"
					],
					"description": "OperatingSystem",
					"default": null,
					"readonly": true
				},
				"volume_template_repo_url": {
					"type": [
						"string",
						"null"
					],
					"description": "http(s) template base URL.",
					"default": null,
					"readonly": false
				},
				"volume_template_deprecation_status": {
					"enum": [
						"not_deprecated",
						"deprecated_allow_expand",
						"deprecated_deny_provision"
					],
					"type": "string",
					"readonly": false,
					"default": "not_deprecated",
					"description": "The deprecation status of the volume template."
				},
				"os_template_architecture": {
					"type": [
						"string",
						"null"
					],
					"description": "The architecture of the OS template."
				},
				"os_template_credentials": {
					"type": [
						"OSTemplateCredentials",
						"null"
					],
					"description": "OSTemplate credentials.",
					"default": null
				},
				"os_asset_id_bootloader_local_install": {
					"type": [
						"integer",
						"string",
						"null"
					],
					"description": "Bootloader used for the local install of OS templates.",
					"required": false,
					"default": null
				},
				"os_asset_id_bootloader_os_boot": {
					"type": [
						"integer",
						"string",
						"null"
					],
					"description": "Bootloader used for the OS boot of OS templates.",
					"required": false,
					"default": null
				},
				"volume_template_tags": {
					"type": "array",
					"items": {
						"type": "string",
						"description": ""
					},
					"description": "List of tags representative for the VolumeTemplate.",
					"default": [
						
					],
					"required": false
				},
				"type": {
					"type": "string",
					"description": "The schema type.",
					"enum": [
						"VolumeTemplate"
					],
					"readonly": true
				}
			}
		};
	}
};

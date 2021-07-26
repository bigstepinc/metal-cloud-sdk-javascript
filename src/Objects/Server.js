const ObjectBase = require("../ObjectBase");

module.exports = 
class Server extends ObjectBase
{
	/**
	 * @protected
	 * 
	 * @returns {{description: string, type: string, properties: Object<propertyName, {type: string|string[], description: string, required: boolean, enum: undefined|string[], items: undefined|{description: string, type: string}, default: string|number|null|boolean, pattern: string|undefined, minLength: number|undefined, maxLength: string|undefined, readonly: boolean|undefined, required: boolean|undefined}>}}
	 */
	_schemaDefinition()
	{
		return {
			"description": "Represents a server in a datacenter.",
			"type": "object",
			"properties": {
				"server_id": {
					"type": [
						"integer",
						"null"
					],
					"description": "The ID of the server. It is automatically generated and cannot be edited.",
					"default": null,
					"readonly": true
				},
				"server_uuid": {
					"type": [
						"string",
						"null"
					],
					"description": "Server UUID.",
					"minLength": 1,
					"maxLength": 36,
					"default": null
				},
				"server_network_total_capacity_mbps": {
					"type": [
						"integer",
						"null"
					],
					"description": "Full bandwidth available.",
					"default": null
				},
				"server_power_status": {
					"enum": [
						"on",
						"off",
						"unknown"
					],
					"type": [
						"string",
						"null"
					],
					"description": "The server power status which can have one of the values: <code>SERVER_POWER_STATUS_ON<\/code>, <code>SERVER_POWER_STATUS_OFF<\/code>.",
					"default": null
				},
				"server_processor_core_count": {
					"type": "integer",
					"description": "The cores of a CPU.",
					"default": 1,
					"minimum": 0
				},
				"server_processor_core_mhz": {
					"type": "integer",
					"description": "The clock speed of a CPU.",
					"default": 1000
				},
				"server_processor_count": {
					"type": "integer",
					"description": "The CPU count on the server.",
					"default": 1
				},
				"server_ram_gbytes": {
					"type": "integer",
					"description": "The RAM capacity.",
					"default": 1
				},
				"server_disk_count": {
					"type": "integer",
					"minimum": 0,
					"maximum": 100,
					"description": "The minimum number of physical disks.",
					"default": 0
				},
				"server_disk_size_mbytes": {
					"type": "integer",
					"minimum": 0,
					"maximum": 4294967296,
					"description": "The minimum size of a single disk.",
					"default": 0
				},
				"server_disk_type": {
					"enum": [
						"SSD",
						"HDD",
						"NVME",
						"none"
					],
					"type": [
						"string"
					],
					"description": "The type of physical disks.",
					"default": "none"
				},
				"server_processor_name": {
					"type": [
						"string",
						"null"
					],
					"description": "The name of the processor.",
					"default": null
				},
				"server_product_name": {
					"type": [
						"string",
						"null"
					],
					"description": "The name of the server.",
					"default": null
				},
				"server_type_id": {
					"type": [
						"integer",
						"null"
					],
					"description": "The ID of the server type. See <code>server_types()<\/code> for more detalis.",
					"default": null
				},
				"server_interfaces": {
					"type": [
						"array",
						"null"
					],
					"items": {
						"type": "ServerInterface",
						"description": ""
					},
					"description": "The <a:schema>ServerInterface<\/a:schema> objects.",
					"default": null
				},
				"server_disks": {
					"type": [
						"array",
						"null"
					],
					"items": {
						"description": "Server disks.",
						"type": "ServerDisk"
					},
					"description": "The <a:schema>ServerDisk<\/a:schema> objects",
					"default": null
				},
				"server_tags": {
					"type": "array",
					"items": {
						"type": "string",
						"description": ""
					},
					"description": "List of tags representative for the Server.",
					"default": [
						
					],
					"required": false
				},
				"server_rack_name": {
					"type": [
						"string",
						"null"
					],
					"description": "Name of the rack",
					"default": null,
					"minLength": 1,
					"maxLength": 255,
					"required": false
				},
				"server_rack_position_lower_unit": {
					"type": [
						"integer",
						"null"
					],
					"description": "Server rack position lower unit",
					"default": null,
					"required": false,
					"minimum": 0,
					"maximum": 4294967295
				},
				"server_rack_position_upper_unit": {
					"type": [
						"integer",
						"null"
					],
					"description": "Server rack position upper unit",
					"default": null,
					"required": false,
					"minimum": 0,
					"maximum": 4294967295
				},
				"server_inventory_id": {
					"type": [
						"string",
						"null"
					],
					"description": "Server inventory id",
					"default": null,
					"minLength": 1,
					"maxLength": 255,
					"required": false
				},
				"server_dhcp_status": {
					"enum": [
						"quarantine",
						"deny_requests",
						"ansible_provision",
						"allow_requests"
					],
					"type": [
						"string"
					],
					"description": "Server dhcp status",
					"default": "quarantine",
					"required": false
				},
				"server_status": {
					"enum": [
						"registering",
						"available",
						"cleaning_required",
						"cleaning",
						"used",
						"used_registering",
						"unavailable",
						"defective",
						"removed_from_rack",
						"decommissioned",
						"updating_firmware"
					],
					"type": [
						"string"
					],
					"description": "Server status",
					"default": "registering",
					"required": false
				},
				"server_serial_number": {
					"type": [
						"string",
						"null"
					],
					"description": "Server serial number",
					"default": null,
					"maxLength": 255,
					"required": false
				},
				"server_custom_json": {
					"type": [
						"string",
						"null"
					],
					"description": "Server cartridge custom json",
					"default": null,
					"required": false
				},
				"server_requires_reregister": {
					"type": "boolean",
					"description": "Server reregister flag",
					"default": false,
					"required": false
				},
				"chassis_rack_id": {
					"type": [
						"integer",
						"null"
					],
					"description": "Server cartridge rack id",
					"default": null,
					"required": false
				},
				"server_ipmi_internal_username": {
					"type": "string",
					"description": "Server ipmi internal username",
					"maxLength": 30,
					"required": false
				},
				"server_bmc_mac_address": {
					"type": [
						"string",
						"null"
					],
					"description": "Server BMC mac address",
					"default": null,
					"maxLength": 17,
					"required": false
				},
				"server_ipmi_channel": {
					"type": [
						"integer",
						"null"
					],
					"description": "Server IPMI channel",
					"default": null,
					"required": false
				},
				"server_ilo_reset_timestamp": {
					"type": "string",
					"description": "Server ILO reset timestamp",
					"maxLength": 20,
					"default": "0000-00-00T00:00:00Z",
					"required": false
				},
				"server_disk_wipe": {
					"type": "boolean",
					"description": "Server disk wipe flag, allowing or disallowing the wiping of data from the servers during BDK boot.",
					"default": false,
					"required": false
				},
				"server_chipset_name": {
					"type": [
						"string",
						"null"
					],
					"description": "Server chipset name",
					"default": null,
					"maxLength": 255,
					"required": false
				},
				"server_class": {
					"enum": [
						"unknown",
						"bigdata",
						"hdfs"
					],
					"type": [
						"string"
					],
					"description": "Server class",
					"default": "unknown",
					"required": false
				},
				"server_allocation_timestamp": {
					"type": [
						"string",
						"null"
					],
					"description": "Server allocation timestamp",
					"default": null,
					"maxLength": 20,
					"required": false
				},
				"server_created_timestamp": {
					"type": "string",
					"description": "Server created timestamp",
					"maxLength": 20,
					"required": false
				},
				"server_vendor_sku_id": {
					"type": [
						"string",
						"null"
					],
					"description": "Server vendor SKU id",
					"default": null,
					"maxLength": 255,
					"required": false
				},
				"server_requires_manual_cleaning": {
					"type": "boolean",
					"description": "Marks the server as unavailable instead of marking it as cleaning, when it is freed from an instance.",
					"default": false,
					"required": false
				},
				"server_boot_type": {
					"enum": [
						"classic",
						"uefi"
					],
					"type": [
						"string"
					],
					"description": "Server boot type",
					"default": "classic",
					"required": false
				},
				"datacenter_name": {
					"type": "string",
					"description": "Datacenter name",
					"maxLength": 63,
					"required": false
				},
				"server_last_cleanup_start": {
					"type": [
						"string",
						"null"
					],
					"description": "Server last cleanup start timestamp",
					"default": null,
					"maxLength": 20,
					"required": false
				},
				"snmp_community_password_dcencrypted": {
					"type": [
						"string",
						"null"
					],
					"description": "SNMP cummunity password",
					"default": null,
					"required": false
				},
				"server_secure_boot_is_enabled": {
					"type": "boolean",
					"description": "Server secure boot flag",
					"default": false,
					"required": false
				},
				"server_boot_last_update_timestamp": {
					"type": [
						"string",
						"null"
					],
					"description": "Server boot last update timestamp",
					"maxLength": 20,
					"default": "0000-00-00T00:00:00Z",
					"required": false
				},
				"server_gpu_count": {
					"type": "integer",
					"description": "Server GPU count",
					"default": 0,
					"minimum": 0
				},
				"server_gpu_vendor": {
					"type": [
						"string",
						"null"
					],
					"description": "Server GPU vendor",
					"default": null,
					"maxLength": 45,
					"required": false
				},
				"server_vendor": {
					"type": [
						"string",
						"null"
					],
					"description": "Server vendor",
					"default": null,
					"maxLength": 30,
					"required": false
				},
				"agent_id": {
					"type": [
						"integer",
						"null"
					],
					"description": "Agent id",
					"default": null
				},
				"server_processor_cpu_mark": {
					"type": [
						"integer",
						"null"
					],
					"description": "Server CPU mark",
					"default": null,
					"minimum": 0
				},
				"server_comments": {
					"type": [
						"string",
						"null"
					],
					"description": "Server comments",
					"default": null,
					"required": false
				},
				"server_instance_custom_json": {
					"type": [
						"string",
						"null"
					],
					"description": "Server instance custom JSON",
					"default": null,
					"required": false
				},
				"server_ipmi_host": {
					"type": "string",
					"description": "Server ipmi host",
					"maxLength": 253,
					"required": false
				},
				"server_mgmt_snmp_port": {
					"type": [
						"integer",
						"null"
					],
					"description": "Server SNMP port",
					"default": 161,
					"minimum": 0,
					"required": false
				},
				"subnet_oob_id": {
					"type": [
						"integer",
						"null"
					],
					"description": "Subnet OOB id",
					"default": null,
					"required": false
				},
				"server_ipmi_credentials_need_update": {
					"type": "boolean",
					"description": "Server IPMI credentials need update flag",
					"default": false,
					"required": false
				},
				"server_vendor_info_json": {
					"type": [
						"string",
						"null"
					],
					"description": "Server verdor info JSON",
					"default": null,
					"required": false
				},
				"server_bdk_debug": {
					"type": "boolean",
					"description": "Server BDK debug flag",
					"default": false,
					"required": false
				},
				"subnet_oob_index": {
					"type": [
						"integer",
						"null"
					],
					"description": "Server OOB index",
					"default": 0,
					"minimum": 0,
					"required": false
				},
				"server_processor_threads": {
					"type": [
						"integer",
						"null"
					],
					"description": "Server processor threads",
					"default": 0,
					"minimum": 0,
					"maximum": 65535,
					"required": false
				},
				"server_mgmt_snmp_community_password_dcencrypted": {
					"type": [
						"string",
						"null"
					],
					"description": "Server management SNMP community password",
					"default": null,
					"required": false
				},
				"server_ipmi_version": {
					"type": "string",
					"description": "Server ipmi version",
					"maxLength": 10,
					"required": false
				},
				"server_mgmt_snmp_version": {
					"type": [
						"integer",
						"null"
					],
					"description": "Server management SNMP version",
					"default": 2,
					"minimum": 0,
					"maximum": 65535,
					"required": false
				},
				"server_info_json": {
					"type": [
						"string",
						"null"
					],
					"description": "Information about the server from bdk agent or provided when the server was created.",
					"default": null,
					"required": false
				},
				"server_power_status_last_update_timestamp": {
					"type": "string",
					"description": "Server power status last update timestamp",
					"maxLength": 20,
					"default": "0000-00-00T00:00:00Z",
					"required": false
				},
				"server_dhcp_packet_sniffing_is_enabled": {
					"type": "boolean",
					"description": "Server DHCP packet sniffing flag",
					"default": true,
					"required": false
				},
				"server_bios_info_json": {
					"type": [
						"string",
						"null"
					],
					"description": "Server bios informations in JSON format",
					"default": null,
					"required": false
				},
				"server_keys_json": {
					"type": [
						"string",
						"null"
					],
					"description": "Server encryption keys in JSON format",
					"default": null,
					"required": false
				},
				"server_gpu_model": {
					"type": [
						"string",
						"null"
					],
					"description": "Server GPU model",
					"default": null,
					"maxLength": 45,
					"required": false
				},
				"server_ipmi_internal_password_encrypted": {
					"type": [
						"string",
						"null"
					],
					"description": "Server IPMI interna password encrypted",
					"default": null,
					"required": false
				},
				"server_dhcp_relay_security_is_enabled": {
					"type": "boolean",
					"description": "Server DHCP relay security flag",
					"default": true,
					"required": false
				},
				"server_details_xml": {
					"type": [
						"string",
						"null"
					],
					"description": "Server details in XML format",
					"default": null,
					"required": false
				},
				"server_metrics_metadata_json": {
					"type": [
						"string",
						"null"
					],
					"description": "Server metrics metadata in JSON format",
					"default": null,
					"required": false
				},
				"type": {
					"type": "string",
					"description": "The schema type",
					"enum": [
						"Server"
					],
					"readonly": true
				}
			}
		};
	}
};

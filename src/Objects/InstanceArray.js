const ObjectBase = require("../ObjectBase");

module.exports = 
class InstanceArray extends ObjectBase
{
	/**
	 * @protected
	 * 
	 * @returns {{description: string, type: string, properties: Object<propertyName, {type: string|string[], description: string, required: boolean, enum: undefined|string[], items: undefined|{description: string, type: string}, default: string|number|null|boolean, pattern: string|undefined, minLength: number|undefined, maxLength: string|undefined, readonly: boolean|undefined, required: boolean|undefined}>}}
	 */
	_schemaDefinition()
	{
		return {
			"description": "An InstanceArray is a group of instances which share the same workload (thus enabling scalability). All instances are configured simultaneously through their InstanceArray. Deploying an InstanceArray has the effect of allocating servers to instances and activating network configurations.",
			"type": "object",
			"properties": {
				"instance_array_label": {
					"type": [
						"string",
						"null"
					],
					"description": "The InstanceArray's unique label is used to create the <code>instance_array_subdomain<\/code>. It is editable and can be used to call API functions.",
					"minLength": 1,
					"maxLength": 63,
					"required": false,
					"pattern": "^[a-zA-Z]{1,1}[a-zA-Z0-9-]{0,61}[a-zA-Z0-9]{1,1}|[a-zA-Z]{1,1}$",
					"default": null
				},
				"instance_array_subdomain": {
					"type": [
						"string",
						"null"
					],
					"description": "Automatically created based on <code>instance_array_label<\/code>. It is a unique reference to the InstanceArray object. In DNS it points to all the child instances primary public IP addresses.",
					"default": null,
					"readonly": true
				},
				"instance_array_subdomain_permanent": {
					"type": [
						"string",
						"null"
					],
					"description": "Automatically created based on <code>instance_array_id<\/code>. It is a unique reference to the InstanceArray object that never changes, so it can be used in various configs. In DNS it points to all the child instances primary public IP addresses.",
					"default": null,
					"readonly": true
				},
				"instance_array_id": {
					"type": [
						"integer",
						"null",
						"string"
					],
					"description": "The ID of the InstanceArray which can be used instead of the <code>instance_array_label<\/code> or <code>instance_array_subdomain<\/code> when calling the API functions. It is automatically generated and cannot be edited.",
					"default": null,
					"readonly": true
				},
				"instance_array_instance_count": {
					"type": "integer",
					"description": "The number of instances to be created on the InstanceArray.",
					"minimum": 0,
					"maximum": 1000,
					"default": 1
				},
				"instance_array_ipv4_subnet_create_auto": {
					"type": "boolean",
					"description": "Automatically create or expand Subnet elements until the necessary IPv4 addresses are allocated.",
					"default": true
				},
				"instance_array_virtual_interfaces_enabled": {
					"type": "boolean",
					"description": "Enable virtual interfaces",
					"default": false
				},
				"instance_array_ip_allocate_auto": {
					"type": "boolean",
					"description": "Automatically allocate IP addresses to child Instance's InstanceInterface elements.",
					"default": true
				},
				"instance_array_ram_gbytes": {
					"type": "integer",
					"minimum": 0,
					"maximum": 4096,
					"description": "The minimum RAM capacity of each instance.",
					"default": 1
				},
				"instance_array_processor_count": {
					"type": "integer",
					"minimum": 0,
					"maximum": 16,
					"description": "The CPU count on each instance.",
					"default": 1
				},
				"instance_array_processor_core_mhz": {
					"type": "integer",
					"minimum": 0,
					"maximum": 16000,
					"description": "The minimum clock speed of a CPU.",
					"default": 1000
				},
				"instance_array_processor_core_count": {
					"type": "integer",
					"minimum": 0,
					"maximum": 500,
					"description": "The minimum cores of a CPU.",
					"default": 1
				},
				"instance_array_disk_count": {
					"type": "integer",
					"minimum": 0,
					"maximum": 500,
					"description": "The minimum number of physical disks.",
					"default": 0
				},
				"instance_array_disk_size_mbytes": {
					"type": "integer",
					"minimum": 0,
					"maximum": 4194304,
					"description": "The minimum size of a single disk.",
					"default": 0
				},
				"instance_array_disk_types": {
					"type": [
						"array",
						"null"
					],
					"description": "The types of physical disks.",
					"default": [
						
					]
				},
				"infrastructure_id": {
					"type": [
						"integer",
						"null",
						"string"
					],
					"description": "Represents the infrastructure ID to which the InstanceArray belongs.",
					"default": null,
					"readonly": true
				},
				"drive_array_id_boot": {
					"type": [
						"integer",
						"null",
						"string"
					],
					"description": "The <a:schema>DriveArray<\/a:schema> from which the servers boot. If <code>null<\/code>, and the servers in the InstanceArray don't have local disks, then the instances will not boot even if <a:schema>DriveArray<\/a:schema> elements are attached.",
					"default": null
				},
				"instance_array_service_status": {
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
					"description": "The status of the InstanceArray.",
					"default": null,
					"readonly": true
				},
				"instance_array_operation": {
					"type": [
						"InstanceArrayOperation",
						"null"
					],
					"description": "The operation type, operation status and modified InstanceArray object.",
					"default": null,
					"readonly": true
				},
				"instance_array_interfaces": {
					"type": "array",
					"items": {
						"description": "InstanceArrayInterface objects",
						"type": "InstanceArrayInterface"
					},
					"description": "An array of <a:schema>InstanceArrayInterface<\/a:schema> objects indexed from 0 to 3.",
					"default": [
						
					],
					"readonly": true
				},
				"instance_array_boot_method": {
					"enum": [
						"pxe_iscsi",
						"local_drives"
					],
					"type": "string",
					"default": "pxe_iscsi",
					"description": "Determines wether the server will boot from local drives or from NAS over iSCSI."
				},
				"cluster_id": {
					"type": [
						"integer",
						"null"
					],
					"description": "If not <code>null<\/code>, then the InstanceArray is part of the specified <a:schema>Cluster<\/a:schema>.",
					"default": null,
					"readonly": true
				},
				"cluster_role_group": {
					"type": "string",
					"description": "",
					"enum": [
						"none",
						"cloudera_headnodes",
						"cloudera_datanodes",
						"splunk_searchheads",
						"splunk_indexers",
						"elasticsearch_nodes",
						"elasticsearch_masternodes",
						"elasticsearch_datanodes",
						"couchbase_nodes",
						"datameer_nodes",
						"datastax_seeds",
						"datastax_nodes",
						"exasol_license_servers",
						"exasol_nodes",
						"mesos_headnodes",
						"mesos_slavenodes",
						"kubernetes_master",
						"kubernetes_node",
						"mapr_masternodes",
						"mapr_slavenodes",
						"mapr_nodes",
						"tableau_nodes",
						"hortonworks_masternodes",
						"hortonworks_slavenodes",
						"mysql_percona_nodes",
						"vsphere_master",
						"vsphere_worker"
					],
					"default": "none",
					"readonly": true
				},
				"instance_array_gui_settings_json": {
					"type": "string",
					"description": "Reserved for GUI users.",
					"default": "",
					"readonly": true
				},
				"instance_array_created_timestamp": {
					"type": [
						"string",
						"null"
					],
					"description": "ISO 8601 timestamp which holds the date and time when the InstanceArray was created. Example format: 2013-11-29T13:00:01Z.",
					"default": "0000-00-00T00:00:00Z",
					"readonly": true
				},
				"instance_array_updated_timestamp": {
					"type": [
						"string",
						"null"
					],
					"description": "ISO 8601 timestamp which holds the date and time when the InstanceArray was edited. Example format: 2013-11-29T13:00:01Z.",
					"default": "0000-00-00T00:00:00Z",
					"readonly": true
				},
				"type": {
					"type": "string",
					"description": "The schema type.",
					"enum": [
						"InstanceArray"
					],
					"readonly": true
				},
				"instance_array_change_id": {
					"type": [
						"integer",
						"null"
					],
					"description": "This property helps ensure that edit operations don\u2019t overwrite other, more recent changes made to the same object. It gets updated automatically after each successful edit operation.",
					"default": null,
					"required": true
				},
				"instance_array_firewall_managed": {
					"type": "boolean",
					"description": "When set to true, all firewall rules on the server are removed and the firewall rules specified in the instance_array_firewall_rules property are applied on the server. When set to false, the firewall rules specified in the instance_array_firewall_rules property are ignored. The feature only works for drives that are using a supported OS template.",
					"default": true
				},
				"instance_array_firewall_rules": {
					"type": [
						"array",
						"null"
					],
					"items": {
						"type": "FirewallRule",
						"description": "Contains the firewall rules."
					},
					"default": null,
					"description": "Contains the firewall rules (an array of <a:schema>FirewallRule<\/a:schema> objects). When creating a new InstanceArray, if null, default firewall rules are applied (allow any source ICMP, any private IPv4, and others)."
				},
				"network_equipment_force_subnet_pool_ipv4_wan_id": {
					"type": [
						"integer",
						"null"
					],
					"description": "ID of a ipv4 WAN subnetpool from which to force the subnet allocation for the InstanceInterfaces associated with this InstanceArray.",
					"default": null
				},
				"instance_array_override_ipv4_wan_vlan_id": {
					"type": [
						"integer",
						"null"
					],
					"description": "The ipv4 vlan that should override the default from the WAN Network for the primary ip.",
					"default": null
				},
				"instance_array_additional_wan_ipv4_json": {
					"type": [
						"null",
						"string"
					],
					"description": "Contains info about additional ips to be assigned to the WAN interfaces.",
					"default": null,
					"readonly": false
				},
				"volume_template_id": {
					"type": [
						"integer",
						"null",
						"string"
					],
					"description": "The volume template ID (or name) to use if the servers in the InstanceArray have local disks. ",
					"default": null
				},
				"instance_array_tags": {
					"type": "array",
					"items": {
						"type": "string",
						"description": ""
					},
					"description": "List of tags representative for the InstanceArray.",
					"default": [
						
					],
					"required": false
				},
				"server_group_name": {
					"type": [
						"string",
						"null"
					],
					"description": "Server group name label for ProjectAPI feature.",
					"default": null,
					"required": false
				}
			}
		};
	}
};

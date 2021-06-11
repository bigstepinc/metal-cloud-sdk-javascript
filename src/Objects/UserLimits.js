const ObjectBase = require("../ObjectBase");

module.exports = 
class UserLimits extends ObjectBase
{
	/**
	 * @protected
	 * 
	 * @returns {{description: string, type: string, properties: Object<propertyName, {type: string|string[], description: string, required: boolean, enum: undefined|string[], items: undefined|{description: string, type: string}, default: string|number|null|boolean, pattern: string|undefined, minLength: number|undefined, maxLength: string|undefined, readonly: boolean|undefined, required: boolean|undefined}>}}
	 */
	_schemaDefinition()
	{
		return {
			"description": "Contains information regarding the availability and quantity of Infrastructures and Infrastructure elements that a user can create.",
			"type": "object",
			"properties": {
				"infrastructure_active_max_count": {
					"type": [
						"integer",
						"null"
					],
					"description": "The maximum number of active Infrastructures that a user can own.",
					"minimum": 0
				},
				"server_type_reservation_max_quantity": {
					"type": [
						"integer",
						"null"
					],
					"description": "The maximum number of server reservations (limit for the quantity param).",
					"minimum": 0
				},
				"server_type_reservation_max_count": {
					"type": [
						"integer",
						"null"
					],
					"description": "The maximum number of server reservations.",
					"minimum": 0
				},
				"infrastructure_inactive_max_count": {
					"type": [
						"integer",
						"null"
					],
					"description": "The maximum number of ordered Infrastructures that a user can own.",
					"minimum": 0
				},
				"infrastructure_deleted_max_count": {
					"type": [
						"integer",
						"null"
					],
					"description": "The maximum number of deleted Infrastructures per user.",
					"minimum": 0
				},
				"infrastructure_drive_array_max_count": {
					"type": [
						"integer",
						"null"
					],
					"description": "The maximum number of Drive Arrays that can be created on a single Infrastructure.",
					"minimum": 0
				},
				"infrastructure_instance_array_max_count": {
					"type": [
						"integer",
						"null"
					],
					"description": "The maximum number of Instance Arrays that can be created on a single Infrastructure.",
					"minimum": 0
				},
				"infrastructure_container_platform_max_count": {
					"type": [
						"integer",
						"null"
					],
					"description": "The maximum number of Container Platforms that can be created on a single Infrastructure.",
					"minimum": 0
				},
				"infrastructure_volume_template_experimental_allowed": {
					"type": [
						"boolean",
						"null"
					],
					"description": "1 if an experimental volume_template is allowed on a infrastructure, 0 otherwise"
				},
				"infrastructure_container_cluster_zookeeper_allowed": {
					"type": [
						"boolean",
						"null"
					],
					"description": "1 if a Zookeeper container cluster is allowed on a infrastructure, 0 otherwise"
				},
				"infrastructure_container_cluster_zoomdata_allowed": {
					"type": [
						"boolean",
						"null"
					],
					"description": "1 if a Zoomdata container cluster is allowed on a infrastructure, 0 otherwise"
				},
				"infrastructure_cluster_mysql_allowed": {
					"type": [
						"boolean",
						"null"
					],
					"description": "1 if a Mysql cluster is allowed on a infrastructure, 0 otherwise"
				},
				"infrastructure_container_cluster_postgresql_allowed": {
					"type": [
						"boolean",
						"null"
					],
					"description": "1 if a PostgreSQL container cluster is allowed on a infrastructure, 0 otherwise"
				},
				"infrastructure_container_cluster_spark_array_allowed": {
					"type": [
						"boolean",
						"null"
					],
					"description": "Specifies whether the user (or his delegates) can create SparkArrays on his Infrastructures."
				},
				"infrastructure_container_cluster_sparksql_allowed": {
					"type": [
						"boolean",
						"null"
					],
					"description": "1 if a SparkSQL container cluster is allowed on a infrastructure, 0 otherwise"
				},
				"infrastructure_container_cluster_kafka_allowed": {
					"type": [
						"boolean",
						"null"
					],
					"description": "1 if a Kafka container cluster is allowed on a infrastructure, 0 otherwise"
				},
				"infrastructure_container_cluster_streamsets_allowed": {
					"type": [
						"boolean",
						"null"
					],
					"description": "1 if a StreamSets container cluster is allowed on a infrastructure, 0 otherwise"
				},
				"container_platform_container_array_max_count": {
					"type": [
						"integer",
						"null"
					],
					"description": "The maximum number of Container Arrays that can be created on a single ContainerPlatform.",
					"minimum": 0
				},
				"infrastructure_data_lake_max_count": {
					"type": [
						"integer",
						"null"
					],
					"description": "The maximum number of Data Lakes that can be created on a single Infrastructure.",
					"minimum": 0,
					"maximum": 1
				},
				"infrastructure_data_lake_enabled": {
					"type": [
						"boolean",
						"null"
					],
					"description": "Specifies whether the user (or his delegates) can create Data Lakes on his Infrastructures."
				},
				"infrastructure_wan_max_count": {
					"type": [
						"integer",
						"null"
					],
					"description": "The maximum number of WAN networks that can be created on a single Infrastructure.",
					"minimum": 0,
					"maximum": 1
				},
				"infrastructure_lan_max_count": {
					"type": [
						"integer",
						"null"
					],
					"description": "The maximum number of LAN networks that can be created on a single Infrastructure.",
					"minimum": 0,
					"maximum": 10
				},
				"infrastructure_san_max_count": {
					"type": [
						"integer",
						"null"
					],
					"description": "The maximum number of SAN networks that can be created on a single Infrastructure.",
					"minimum": 0,
					"maximum": 1
				},
				"infrastructure_container_cluster_max_count": {
					"type": [
						"integer",
						"null"
					],
					"description": "The maximum number of Container Clusters that can be created on a single Infrastructure.",
					"minimum": 0
				},
				"infrastructure_cluster_max_count": {
					"type": [
						"integer",
						"null"
					],
					"description": "The maximum number of Clusters that can be created on a single Infrastructure.",
					"minimum": 0
				},
				"wan_subnet_ipv4_max_count": {
					"type": [
						"integer",
						"null"
					],
					"description": "The maximum number of IPv4 addresses that can be provisioned on a single WAN subnet.",
					"minimum": 0
				},
				"wan_subnet_ipv6_max_count": {
					"type": [
						"integer",
						"null"
					],
					"description": "The maximum number of IPv6 addresses that can be provisioned on a single WAN subnet.",
					"minimum": 0,
					"maximum": 1
				},
				"instance_array_instances_min_count": {
					"type": [
						"integer",
						"null"
					],
					"description": "The minimum number of Instances that an Instance Array can have at any given time.",
					"minimum": 0
				},
				"instance_array_instances_max_count": {
					"type": [
						"integer",
						"null"
					],
					"description": "The maximum number of Instances that an Instance Array can have at any given time.",
					"minimum": 0
				},
				"container_array_drive_arrays_min_count": {
					"type": [
						"integer",
						"null"
					],
					"description": "The minimum number of Drive Arrays that can be attached to an Instance Array at any given time.",
					"minimum": 0
				},
				"container_array_drive_arrays_max_count": {
					"type": [
						"integer",
						"null"
					],
					"description": "The maximum number of Drive Arrays that can be attached to an Instance Array at any given time.",
					"minimum": 0
				},
				"container_array_containers_min_count": {
					"type": [
						"integer",
						"null"
					],
					"description": "The minimum number of Drive Arrays that can be attached to an Instance Array at any given time.",
					"minimum": 0
				},
				"container_array_containers_max_count": {
					"type": [
						"integer",
						"null"
					],
					"description": "The maximum number of Drive Arrays that can be attached to an Instance Array at any given time.",
					"minimum": 0
				},
				"container_array_secrets_max_count": {
					"type": [
						"integer",
						"null"
					],
					"description": "The maximum number of Secrets that can asociated with a container array.",
					"minimum": 0
				},
				"drive_array_drives_min_count": {
					"type": [
						"integer",
						"null"
					],
					"description": "The minimum number of Drives that a Drive Array can have at any given time.",
					"minimum": 0
				},
				"drive_array_drives_max_count": {
					"type": [
						"integer",
						"null"
					],
					"description": "The maximum number of Drives that a Drive Array can have at any given time.",
					"minimum": 0
				},
				"drive_max_size_mbytes": {
					"type": [
						"integer",
						"null"
					],
					"description": "The maximum size (in megabytes) that a Drive can have at any given time.",
					"minimum": 0
				},
				"drive_min_size_mbytes": {
					"type": [
						"integer",
						"null"
					],
					"description": "The minimum size (in megabytes) that a Drive can have at any given time.",
					"minimum": 0
				},
				"shared_drive_max_size_mbytes": {
					"type": [
						"integer",
						"null"
					],
					"minimum": 0,
					"description": "The maximum size (in megabytes) that a Shared Drive can have at any given time."
				},
				"shared_drive_min_size_mbytes": {
					"type": [
						"integer",
						"null"
					],
					"description": "The minimum size (in megabytes) that a Shared Drive can have at any given time.",
					"minimum": 0
				},
				"infrastructure_shared_drive_max_count": {
					"type": [
						"integer",
						"null"
					],
					"description": "The maximum number of Shared Drives that can be created on a single Infrastructure.",
					"minimum": 0
				},
				"storage_types": {
					"type": [
						"array",
						"null"
					],
					"description": "An array listing the available storage types that the user can utilize.",
					"items": {
						"description": "",
						"type": "string"
					}
				},
				"user_resource_servers_max_count": {
					"type": [
						"integer",
						"null"
					],
					"description": "The maximum number of servers a specific user account can allocate. Over all infrastructures.",
					"minimum": 0,
					"maximum": 1000000
				},
				"user_resource_iscsi_storage_space_max_gbytes": {
					"type": [
						"integer",
						"null"
					],
					"description": "The maximum iSCSI storage space (Drive, SharedDrive) a specific user account can allocate. Over all infrastructures.",
					"minimum": 0,
					"maximum": 5120000
				},
				"owner_is_billable": {
					"type": [
						"boolean",
						"null"
					],
					"description": "Specifies whether the user is billable (can deploy infrastructures) or not."
				},
				"user_ssh_keys_count_max": {
					"type": [
						"integer",
						"null"
					],
					"description": "The maximum number of ssh keys.",
					"minimum": 0
				},
				"threshold_max_count": {
					"type": [
						"integer",
						"null"
					],
					"description": "The maximum number of thresholds.",
					"minimum": 0
				},
				"type": {
					"type": "string",
					"description": "The schema type",
					"enum": [
						"UserLimits"
					],
					"readonly": true
				}
			}
		};
	}
};

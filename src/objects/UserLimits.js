const ObjectBase = require('./ObjectBase');

/**
 * Contains information regarding the availability and quantity of
 * Infrastructures and Infrastructure elements that a user can create.
 *
 * @class
 * @extends ObjectBase
 */
module.exports = 
class UserLimits extends ObjectBase
{
	constructor()
	{
		super();

		const arrPropertyNames = Object.getOwnPropertyNames(Object.getPrototypeOf(this));
		arrPropertyNames.shift();

		for(let strProperty in arrPropertyNames)
		{
			if(arrPropertyNames.hasOwnProperty(strProperty))
			{
				const strPropertyProtected = "_" + arrPropertyNames[strProperty];
				this[strPropertyProtected] = this[arrPropertyNames[strProperty]];
			}
		}
	}

	/**
	 * The maximum number of active Infrastructures that a user can own.
	 */
	get infrastructure_active_max_count()
	{
		return this._infrastructure_active_max_count || null;
	}

	set infrastructure_active_max_count(infrastructure_active_max_count)
	{
		this._infrastructure_active_max_count = infrastructure_active_max_count;
	}

	/**
	 * The maximum number of server reservations (limit for the quantity param).
	 */
	get server_type_reservation_max_quantity()
	{
		return this._server_type_reservation_max_quantity || null;
	}

	set server_type_reservation_max_quantity(server_type_reservation_max_quantity)
	{
		this._server_type_reservation_max_quantity = server_type_reservation_max_quantity;
	}

	/**
	 * The maximum number of server reservations.
	 */
	get server_type_reservation_max_count()
	{
		return this._server_type_reservation_max_count || null;
	}

	set server_type_reservation_max_count(server_type_reservation_max_count)
	{
		this._server_type_reservation_max_count = server_type_reservation_max_count;
	}

	/**
	 * The maximum number of ordered Infrastructures that a user can own.
	 */
	get infrastructure_inactive_max_count()
	{
		return this._infrastructure_inactive_max_count || null;
	}

	set infrastructure_inactive_max_count(infrastructure_inactive_max_count)
	{
		this._infrastructure_inactive_max_count = infrastructure_inactive_max_count;
	}

	/**
	 * The maximum number of deleted Infrastructures per user.
	 */
	get infrastructure_deleted_max_count()
	{
		return this._infrastructure_deleted_max_count || null;
	}

	set infrastructure_deleted_max_count(infrastructure_deleted_max_count)
	{
		this._infrastructure_deleted_max_count = infrastructure_deleted_max_count;
	}

	/**
	 * The maximum number of Drive Arrays that can be created on a single
	 * Infrastructure.
	 */
	get infrastructure_drive_array_max_count()
	{
		return this._infrastructure_drive_array_max_count || null;
	}

	set infrastructure_drive_array_max_count(infrastructure_drive_array_max_count)
	{
		this._infrastructure_drive_array_max_count = infrastructure_drive_array_max_count;
	}

	/**
	 * The maximum number of Instance Arrays that can be created on a single
	 * Infrastructure.
	 */
	get infrastructure_instance_array_max_count()
	{
		return this._infrastructure_instance_array_max_count || null;
	}

	set infrastructure_instance_array_max_count(infrastructure_instance_array_max_count)
	{
		this._infrastructure_instance_array_max_count = infrastructure_instance_array_max_count;
	}

	/**
	 * The maximum number of Container Platforms that can be created on a single
	 * Infrastructure.
	 */
	get infrastructure_container_platform_max_count()
	{
		return this._infrastructure_container_platform_max_count || null;
	}

	set infrastructure_container_platform_max_count(infrastructure_container_platform_max_count)
	{
		this._infrastructure_container_platform_max_count = infrastructure_container_platform_max_count;
	}

	/**
	 * 1 if an experimental volume_template is allowed on a infrastructure, 0
	 * otherwise
	 */
	get infrastructure_volume_template_experimental_allowed()
	{
		return this._infrastructure_volume_template_experimental_allowed || null;
	}

	set infrastructure_volume_template_experimental_allowed(infrastructure_volume_template_experimental_allowed)
	{
		this._infrastructure_volume_template_experimental_allowed = infrastructure_volume_template_experimental_allowed;
	}

	/**
	 * 1 if a Zookeeper container cluster is allowed on a infrastructure, 0
	 * otherwise
	 */
	get infrastructure_container_cluster_zookeeper_allowed()
	{
		return this._infrastructure_container_cluster_zookeeper_allowed || null;
	}

	set infrastructure_container_cluster_zookeeper_allowed(infrastructure_container_cluster_zookeeper_allowed)
	{
		this._infrastructure_container_cluster_zookeeper_allowed = infrastructure_container_cluster_zookeeper_allowed;
	}

	/**
	 * 1 if a Mysql cluster is allowed on a infrastructure, 0 otherwise
	 */
	get infrastructure_cluster_mysql_allowed()
	{
		return this._infrastructure_cluster_mysql_allowed || null;
	}

	set infrastructure_cluster_mysql_allowed(infrastructure_cluster_mysql_allowed)
	{
		this._infrastructure_cluster_mysql_allowed = infrastructure_cluster_mysql_allowed;
	}

	/**
	 * 1 if a PostgreSQL container cluster is allowed on a infrastructure, 0
	 * otherwise
	 */
	get infrastructure_container_cluster_postgresql_allowed()
	{
		return this._infrastructure_container_cluster_postgresql_allowed || null;
	}

	set infrastructure_container_cluster_postgresql_allowed(infrastructure_container_cluster_postgresql_allowed)
	{
		this._infrastructure_container_cluster_postgresql_allowed = infrastructure_container_cluster_postgresql_allowed;
	}

	/**
	 * 1 if a SparkSQL container cluster is allowed on a infrastructure, 0 otherwise
	 */
	get infrastructure_container_cluster_sparksql_allowed()
	{
		return this._infrastructure_container_cluster_sparksql_allowed || null;
	}

	set infrastructure_container_cluster_sparksql_allowed(infrastructure_container_cluster_sparksql_allowed)
	{
		this._infrastructure_container_cluster_sparksql_allowed = infrastructure_container_cluster_sparksql_allowed;
	}

	/**
	 * 1 if a Kafka container cluster is allowed on a infrastructure, 0 otherwise
	 */
	get infrastructure_container_cluster_kafka_allowed()
	{
		return this._infrastructure_container_cluster_kafka_allowed || null;
	}

	set infrastructure_container_cluster_kafka_allowed(infrastructure_container_cluster_kafka_allowed)
	{
		this._infrastructure_container_cluster_kafka_allowed = infrastructure_container_cluster_kafka_allowed;
	}

	/**
	 * The maximum number of Container Arrays that can be created on a single
	 * ContainerPlatform.
	 */
	get container_platform_container_array_max_count()
	{
		return this._container_platform_container_array_max_count || null;
	}

	set container_platform_container_array_max_count(container_platform_container_array_max_count)
	{
		this._container_platform_container_array_max_count = container_platform_container_array_max_count;
	}

	/**
	 * The maximum number of Data Lakes that can be created on a single
	 * Infrastructure.
	 */
	get infrastructure_data_lake_max_count()
	{
		return this._infrastructure_data_lake_max_count || null;
	}

	set infrastructure_data_lake_max_count(infrastructure_data_lake_max_count)
	{
		this._infrastructure_data_lake_max_count = infrastructure_data_lake_max_count;
	}

	/**
	 * Specifies whether the user (or his delegates) can create Data Lakes on his
	 * Infrastructures.
	 */
	get infrastructure_data_lake_enabled()
	{
		return this._infrastructure_data_lake_enabled || null;
	}

	set infrastructure_data_lake_enabled(infrastructure_data_lake_enabled)
	{
		this._infrastructure_data_lake_enabled = infrastructure_data_lake_enabled;
	}

	/**
	 * The maximum number of WAN networks that can be created on a single
	 * Infrastructure.
	 */
	get infrastructure_wan_max_count()
	{
		return this._infrastructure_wan_max_count || null;
	}

	set infrastructure_wan_max_count(infrastructure_wan_max_count)
	{
		this._infrastructure_wan_max_count = infrastructure_wan_max_count;
	}

	/**
	 * The maximum number of LAN networks that can be created on a single
	 * Infrastructure.
	 */
	get infrastructure_lan_max_count()
	{
		return this._infrastructure_lan_max_count || null;
	}

	set infrastructure_lan_max_count(infrastructure_lan_max_count)
	{
		this._infrastructure_lan_max_count = infrastructure_lan_max_count;
	}

	/**
	 * The maximum number of SAN networks that can be created on a single
	 * Infrastructure.
	 */
	get infrastructure_san_max_count()
	{
		return this._infrastructure_san_max_count || null;
	}

	set infrastructure_san_max_count(infrastructure_san_max_count)
	{
		this._infrastructure_san_max_count = infrastructure_san_max_count;
	}

	/**
	 * Specifies whether the user (or his delegates) can create SparkArrays on his
	 * Infrastructures.
	 */
	get infrastructure_spark_array_allowed()
	{
		return this._infrastructure_spark_array_allowed || null;
	}

	set infrastructure_spark_array_allowed(infrastructure_spark_array_allowed)
	{
		this._infrastructure_spark_array_allowed = infrastructure_spark_array_allowed;
	}

	/**
	 * The maximum number of Container Clusters that can be created on a single
	 * Infrastructure.
	 */
	get infrastructure_container_cluster_max_count()
	{
		return this._infrastructure_container_cluster_max_count || null;
	}

	set infrastructure_container_cluster_max_count(infrastructure_container_cluster_max_count)
	{
		this._infrastructure_container_cluster_max_count = infrastructure_container_cluster_max_count;
	}

	/**
	 * The maximum number of Clusters that can be created on a single
	 * Infrastructure.
	 */
	get infrastructure_cluster_max_count()
	{
		return this._infrastructure_cluster_max_count || null;
	}

	set infrastructure_cluster_max_count(infrastructure_cluster_max_count)
	{
		this._infrastructure_cluster_max_count = infrastructure_cluster_max_count;
	}

	/**
	 * The maximum number of IPv4 addresses that can be provisioned on a single WAN
	 * subnet.
	 */
	get wan_subnet_ipv4_max_count()
	{
		return this._wan_subnet_ipv4_max_count || null;
	}

	set wan_subnet_ipv4_max_count(wan_subnet_ipv4_max_count)
	{
		this._wan_subnet_ipv4_max_count = wan_subnet_ipv4_max_count;
	}

	/**
	 * The maximum number of IPv6 addresses that can be provisioned on a single WAN
	 * subnet.
	 */
	get wan_subnet_ipv6_max_count()
	{
		return this._wan_subnet_ipv6_max_count || null;
	}

	set wan_subnet_ipv6_max_count(wan_subnet_ipv6_max_count)
	{
		this._wan_subnet_ipv6_max_count = wan_subnet_ipv6_max_count;
	}

	/**
	 * The minimum number of Instances that an Instance Array can have at any given
	 * time.
	 */
	get instance_array_instances_min_count()
	{
		return this._instance_array_instances_min_count || null;
	}

	set instance_array_instances_min_count(instance_array_instances_min_count)
	{
		this._instance_array_instances_min_count = instance_array_instances_min_count;
	}

	/**
	 * The maximum number of Instances that an Instance Array can have at any given
	 * time.
	 */
	get instance_array_instances_max_count()
	{
		return this._instance_array_instances_max_count || null;
	}

	set instance_array_instances_max_count(instance_array_instances_max_count)
	{
		this._instance_array_instances_max_count = instance_array_instances_max_count;
	}

	/**
	 * The minimum number of Drive Arrays that can be attached to an Instance Array
	 * at any given time.
	 */
	get instance_array_drive_arrays_min_count()
	{
		return this._instance_array_drive_arrays_min_count || null;
	}

	set instance_array_drive_arrays_min_count(instance_array_drive_arrays_min_count)
	{
		this._instance_array_drive_arrays_min_count = instance_array_drive_arrays_min_count;
	}

	/**
	 * The maximum number of Drive Arrays that can be attached to an Instance Array
	 * at any given time.
	 */
	get instance_array_drive_arrays_max_count()
	{
		return this._instance_array_drive_arrays_max_count || null;
	}

	set instance_array_drive_arrays_max_count(instance_array_drive_arrays_max_count)
	{
		this._instance_array_drive_arrays_max_count = instance_array_drive_arrays_max_count;
	}

	/**
	 * The minimum number of Drive Arrays that can be attached to an Instance Array
	 * at any given time.
	 */
	get container_array_drive_arrays_min_count()
	{
		return this._container_array_drive_arrays_min_count || null;
	}

	set container_array_drive_arrays_min_count(container_array_drive_arrays_min_count)
	{
		this._container_array_drive_arrays_min_count = container_array_drive_arrays_min_count;
	}

	/**
	 * The maximum number of Drive Arrays that can be attached to an Instance Array
	 * at any given time.
	 */
	get container_array_drive_arrays_max_count()
	{
		return this._container_array_drive_arrays_max_count || null;
	}

	set container_array_drive_arrays_max_count(container_array_drive_arrays_max_count)
	{
		this._container_array_drive_arrays_max_count = container_array_drive_arrays_max_count;
	}

	/**
	 * The minimum number of Drive Arrays that can be attached to an Instance Array
	 * at any given time.
	 */
	get container_array_containers_min_count()
	{
		return this._container_array_containers_min_count || null;
	}

	set container_array_containers_min_count(container_array_containers_min_count)
	{
		this._container_array_containers_min_count = container_array_containers_min_count;
	}

	/**
	 * The maximum number of Drive Arrays that can be attached to an Instance Array
	 * at any given time.
	 */
	get container_array_containers_max_count()
	{
		return this._container_array_containers_max_count || null;
	}

	set container_array_containers_max_count(container_array_containers_max_count)
	{
		this._container_array_containers_max_count = container_array_containers_max_count;
	}

	/**
	 * The maximum number of Secrets that can asociated with a container array.
	 */
	get container_array_secrets_max_count()
	{
		return this._container_array_secrets_max_count || null;
	}

	set container_array_secrets_max_count(container_array_secrets_max_count)
	{
		this._container_array_secrets_max_count = container_array_secrets_max_count;
	}

	/**
	 * The minimum number of Drives that a Drive Array can have at any given time.
	 */
	get drive_array_drives_min_count()
	{
		return this._drive_array_drives_min_count || null;
	}

	set drive_array_drives_min_count(drive_array_drives_min_count)
	{
		this._drive_array_drives_min_count = drive_array_drives_min_count;
	}

	/**
	 * The maximum number of Drives that a Drive Array can have at any given time.
	 */
	get drive_array_drives_max_count()
	{
		return this._drive_array_drives_max_count || null;
	}

	set drive_array_drives_max_count(drive_array_drives_max_count)
	{
		this._drive_array_drives_max_count = drive_array_drives_max_count;
	}

	/**
	 * The maximum size (in megabytes) that a Drive can have at any given time.
	 */
	get drive_max_size_mbytes()
	{
		return this._drive_max_size_mbytes || null;
	}

	set drive_max_size_mbytes(drive_max_size_mbytes)
	{
		this._drive_max_size_mbytes = drive_max_size_mbytes;
	}

	/**
	 * The minimum size (in megabytes) that a Drive can have at any given time.
	 */
	get drive_min_size_mbytes()
	{
		return this._drive_min_size_mbytes || null;
	}

	set drive_min_size_mbytes(drive_min_size_mbytes)
	{
		this._drive_min_size_mbytes = drive_min_size_mbytes;
	}

	/**
	 * The maximum size (in megabytes) that a Shared Drive can have at any given
	 * time.
	 */
	get shared_drive_max_size_mbytes()
	{
		return this._shared_drive_max_size_mbytes || null;
	}

	set shared_drive_max_size_mbytes(shared_drive_max_size_mbytes)
	{
		this._shared_drive_max_size_mbytes = shared_drive_max_size_mbytes;
	}

	/**
	 * The minimum size (in megabytes) that a Shared Drive can have at any given
	 * time.
	 */
	get shared_drive_min_size_mbytes()
	{
		return this._shared_drive_min_size_mbytes || null;
	}

	set shared_drive_min_size_mbytes(shared_drive_min_size_mbytes)
	{
		this._shared_drive_min_size_mbytes = shared_drive_min_size_mbytes;
	}

	/**
	 * The maximum number of Shared Drives that can be created on a single
	 * Infrastructure.
	 */
	get infrastructure_shared_drive_max_count()
	{
		return this._infrastructure_shared_drive_max_count || null;
	}

	set infrastructure_shared_drive_max_count(infrastructure_shared_drive_max_count)
	{
		this._infrastructure_shared_drive_max_count = infrastructure_shared_drive_max_count;
	}

	/**
	 * An array listing the available storage types that the user can utilize.
	 */
	get storage_types()
	{
		return this._storage_types || [];
	}

	set storage_types(storage_types)
	{
		this._storage_types = storage_types;
	}

	/**
	 * The maximum number of servers a specific user account can allocate. Over all
	 * infrastructures.
	 */
	get user_resource_servers_max_count()
	{
		return this._user_resource_servers_max_count || null;
	}

	set user_resource_servers_max_count(user_resource_servers_max_count)
	{
		this._user_resource_servers_max_count = user_resource_servers_max_count;
	}

	/**
	 * The maximum iSCSI storage space (Drive, SharedDrive) a specific user account
	 * can allocate. Over all infrastructures.
	 */
	get user_resource_iscsi_storage_space_max_gbytes()
	{
		return this._user_resource_iscsi_storage_space_max_gbytes || null;
	}

	set user_resource_iscsi_storage_space_max_gbytes(user_resource_iscsi_storage_space_max_gbytes)
	{
		this._user_resource_iscsi_storage_space_max_gbytes = user_resource_iscsi_storage_space_max_gbytes;
	}

	/**
	 * Specifies whether the user is billable (can deploy infrastructures) or not.
	 */
	get owner_is_billable()
	{
		return this._owner_is_billable || null;
	}

	set owner_is_billable(owner_is_billable)
	{
		this._owner_is_billable = owner_is_billable;
	}

	/**
	 * The maximum number of ssh keys.
	 */
	get user_ssh_keys_count_max()
	{
		return this._user_ssh_keys_count_max || null;
	}

	set user_ssh_keys_count_max(user_ssh_keys_count_max)
	{
		this._user_ssh_keys_count_max = user_ssh_keys_count_max;
	}

	/**
	 * The schema type
	 */
	get type()
	{
		return this._type || null;
	}

	set type(type)
	{
		this._type = type;
	}

	/**
	 * The required JSON fields for deserialization.
	 *
	 * @returns {Array}
	 */
	static get JSONRequired()
	{
		return [

		];
	}
};
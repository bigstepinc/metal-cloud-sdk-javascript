module.exports =
class Constants
{
		/**
		 * Metal Cloud, API v2.16
		 */
	
	
		/**
		 * SaaS cluster of type Cloudera.See http://www.cloudera.com/ for more
		 * information on this software.
		 */
		static get CLUSTER_TYPE_CLOUDERA()
		{
			return "cloudera";
		}
	
		/**
		 * SaaS cluster of type Couchbase.See http://www.couchbase.com/ for information
		 * on this software.
		 */
		static get CLUSTER_TYPE_COUCHBASE()
		{
			return "couchbase";
		}
	
		/**
		 * SaaS cluster of type Datameer.See http://www.datameer.com/ for information
		 * on this software.
		 */
		static get CLUSTER_TYPE_DATAMEER()
		{
			return "datameer";
		}
	
		/**
		 * Datastax cluster type.
		 */
		static get CLUSTER_TYPE_DATASTAX()
		{
			return "datastax";
		}
	
		/**
		 * SaaS cluster of type ElasticSearch.See http://www.elasticsearch.org/ for
		 * more information on this software.
		 */
		static get CLUSTER_TYPE_ELASTICSEARCH()
		{
			return "elasticsearch";
		}
	
		/**
		 * SaaS cluster of type ElasticSearch.See http://www.elasticsearch.org/ for
		 * more information on this software.
		 */
		static get CLUSTER_TYPE_ELASTICSEARCH_LEGACY()
		{
			return "elasticsearch_legacy";
		}
	
		/**
		 * Exasol cluster type.
		 */
		static get CLUSTER_TYPE_EXASOL()
		{
			return "exasol";
		}
	
		/**
		 * HDFS Cluster.
		 */
		static get CLUSTER_TYPE_HDFS()
		{
			return "hdfs";
		}
	
		/**
		 * SaaS cluster of type Hortonworks.SaaS cluster of type MapR
		 */
		static get CLUSTER_TYPE_HORTONWORKS()
		{
			return "hortonworks";
		}
	
		/**
		 * SaaS cluster of type MapR.SaaS cluster of type MapR
		 */
		static get CLUSTER_TYPE_MAPR()
		{
			return "mapr";
		}
	
		/**
		 * SaaS cluster of type MapRLegacy.SaaS cluster of type MapRLegacy
		 */
		static get CLUSTER_TYPE_MAPR_LEGACY()
		{
			return "mapr_legacy";
		}
	
		/**
		 * Mesos cluster type.
		 */
		static get CLUSTER_TYPE_MESOS()
		{
			return "mesos";
		}
	
		/**
		 * Percona MySQL cluster.See
		 * https://www.percona.com/software/mysql-database/percona-xtradb-cluster for
		 * information on this software.
		 */
		static get CLUSTER_TYPE_MYSQL_PERCONA()
		{
			return "mysql_percona";
		}
	
		/**
		 * SaaS cluster of type Splunk.See http://www.splunk.com/ for information on
		 * this software.
		 */
		static get CLUSTER_TYPE_SPLUNK()
		{
			return "splunk";
		}
	
		/**
		 * SaaS cluster of type Tableau.See http://www.tableau.com/ for information on
		 * this software.
		 *
		 */
		static get CLUSTER_TYPE_TABLEAU()
		{
			return "tableau";
		}
	
		/**
		 * Vanilla cluster type (blank).Default cluster, with blank behaviour (does
		 * nothing special and installs no special [SaaS] software). It is a singleton
		 * per Infrastructure product.
		 */
		static get CLUSTER_TYPE_VANILLA()
		{
			return "vanilla";
		}
	
		/**
		 * SQLSelection array row span.
		 */
		static get COLLAPSE_ARRAY_ROW_SPAN()
		{
			return "array_row_span";
		}
	
		/**
		 * SQLSelection array subrows.
		 */
		static get COLLAPSE_ARRAY_SUBROWS()
		{
			return "array_subrows";
		}
	
		/**
		 * SQLSelection array subrows table.
		 */
		static get COLLAPSE_ARRAY_SUBROWS_TABLE()
		{
			return "array_subrows_table";
		}
	
		/**
		 * SQLSelection autocomplete dictionary.
		 */
		static get COLLAPSE_AUTOCOMPLETE_DICTIONARY()
		{
			return "autocomplete_dictionary";
		}
	
		/**
		 * SQLSelection HTML rows array.
		 */
		static get COLLAPSE_HTML_ROWS_ARRAY()
		{
			return "html_rows_array";
		}
	
		/**
		 * SQLSelection HTML rows string.
		 */
		static get COLLAPSE_HTML_ROWS_STRING()
		{
			return "html_rows_string";
		}
	
		/**
		 * SQLSelection none.
		 */
		static get COLLAPSE_NONE()
		{
			return "none";
		}
	
		/**
		 * ContainerArray execute command action.ContainerArray action that executes a
		 * given command.
		 */
		static get CONTAINER_ARRAY_ACTION_EXECUTE_COMMAND()
		{
			return "execute_command";
		}
	
		/**
		 * ContainerArray HTTP get action.ContainerArray action that makes a HTTP get
		 * request.
		 */
		static get CONTAINER_ARRAY_ACTION_HTTP_GET()
		{
			return "http_get";
		}
	
		/**
		 * ContainerArray TCP socket action.ContainerArray action that opens a TCP
		 * connection to a given port.
		 */
		static get CONTAINER_ARRAY_ACTION_TCP_SOCKET()
		{
			return "tcp_socket";
		}
	
		/**
		 * SAN ContainerArray interface.ContainerArray interface index reserved for SAN
		 * networks.
		 */
		static get CONTAINER_ARRAY_INTERFACE_INDEX_0()
		{
			return 0;
		}
	
		/**
		 * ContainerArray interface index 1.
		 */
		static get CONTAINER_ARRAY_INTERFACE_INDEX_1()
		{
			return 1;
		}
	
		/**
		 * ContainerArray interface index 2.
		 */
		static get CONTAINER_ARRAY_INTERFACE_INDEX_2()
		{
			return 2;
		}
	
		/**
		 * Elasticsearch container cluster type.
		 */
		static get CONTAINER_CLUSTER_TYPE_ELASTICSEARCH()
		{
			return "elasticsearch";
		}
	
		/**
		 * Kafka container cluster type.
		 */
		static get CONTAINER_CLUSTER_TYPE_KAFKA()
		{
			return "kafka";
		}
	
		/**
		 * PostgreSQL container cluster type.
		 */
		static get CONTAINER_CLUSTER_TYPE_POSTGRESQL()
		{
			return "postgresql";
		}
	
		/**
		 * Spark container cluster type.
		 */
		static get CONTAINER_CLUSTER_TYPE_SPARK()
		{
			return "spark";
		}
	
		/**
		 * SparkSQL container cluster type.
		 */
		static get CONTAINER_CLUSTER_TYPE_SPARKSQL()
		{
			return "sparksql";
		}
	
		/**
		 * StreamSets container cluster type.StreamSets container cluster type
		 */
		static get CONTAINER_CLUSTER_TYPE_STREAMSETS()
		{
			return "streamsets";
		}
	
		/**
		 * Vanilla container cluster type.Default container cluster, with blank
		 * behaviour. It is a singleton per ContainerPlatform product.
		 */
		static get CONTAINER_CLUSTER_TYPE_VANILLA()
		{
			return "vanilla";
		}
	
		/**
		 * Zookeeper container cluster type.
		 */
		static get CONTAINER_CLUSTER_TYPE_ZOOKEEPER()
		{
			return "zookeeper";
		}
	
		/**
		 * Zoomdata container cluster type.
		 */
		static get CONTAINER_CLUSTER_TYPE_ZOOMDATA()
		{
			return "zoomdata";
		}
	
		/**
		 * Container failed phase.The Container has failed.
		 */
		static get CONTAINER_STATUS_PHASE_FAILED()
		{
			return "failed";
		}
	
		/**
		 * Container pending phase.The Container has been created and awaits scheduling
		 * and execution.
		 */
		static get CONTAINER_STATUS_PHASE_PENDING()
		{
			return "pending";
		}
	
		/**
		 * Container running phase.Container is running.
		 */
		static get CONTAINER_STATUS_PHASE_RUNNING()
		{
			return "running";
		}
	
		/**
		 * Container succeeded phase.The Container has been executed successfully.
		 */
		static get CONTAINER_STATUS_PHASE_SUCCEEDED()
		{
			return "succeeded";
		}
	
		/**
		 * Container unknown phase.The Container state phase could not be retrieved due
		 * to internal errors.
		 */
		static get CONTAINER_STATUS_PHASE_UNKNOWN()
		{
			return "unknown";
		}
	
		/**
		 * HDFS DataLake type.
		 */
		static get DATA_LAKE_TYPE_HDFS()
		{
			return "hdfs";
		}
	
		/**
		 * Disk Type HDD.Type of server local disk
		 */
		static get DISK_TYPE_HDD()
		{
			return "HDD";
		}
	
		/**
		 * Disk Type none.Server local disk type
		 */
		static get DISK_TYPE_NONE()
		{
			return "none";
		}
	
		/**
		 * Disk Type NVME.Type of server local disk
		 */
		static get DISK_TYPE_NVME()
		{
			return "NVME";
		}
	
		/**
		 * Disk Type SSD.Type of server local disk
		 */
		static get DISK_TYPE_SSD()
		{
			return "SSD";
		}
	
		/**
		 * HDD drive.
		 */
		static get DRIVE_STORAGE_TYPE_ISCSI_HDD()
		{
			return "iscsi_hdd";
		}
	
		/**
		 * SSD drive.
		 */
		static get DRIVE_STORAGE_TYPE_ISCSI_SSD()
		{
			return "iscsi_ssd";
		}
	
		/**
		 * Important event.
		 */
		static get EVENT_SEVERITY_IMPORTANT()
		{
			return "important";
		}
	
		/**
		 * Info event.
		 */
		static get EVENT_SEVERITY_INFO()
		{
			return "info";
		}
	
		/**
		 * Security event.Events such as log-in, log out, password changes, account
		 * recovery, authenticator added or removed, etc.
		 */
		static get EVENT_SEVERITY_SECURITY()
		{
			return "security";
		}
	
		/**
		 * Success event.
		 */
		static get EVENT_SEVERITY_SUCCESS()
		{
			return "success";
		}
	
		/**
		 * Trigger event.
		 */
		static get EVENT_SEVERITY_TRIGGER()
		{
			return "trigger";
		}
	
		/**
		 * Warning event.
		 */
		static get EVENT_SEVERITY_WARNING()
		{
			return "warning";
		}
	
		/**
		 * Filesystem navigator driver dataset readme.
		 */
		static get FILESYSTEM_NAVIGATOR_DRIVER_TYPE_DATASET_README()
		{
			return "dataset_readme";
		}
	
		/**
		 * FileSystemNavigator driver of type WebHDFS.
		 */
		static get FILESYSTEM_NAVIGATOR_DRIVER_TYPE_WEBHDFS()
		{
			return "webhdfs";
		}
	
		/**
		 * FirewallRule IPV4.
		 */
		static get FIREWALL_RULE_IP_ADDRESS_TYPE_IPV4()
		{
			return "ipv4";
		}
	
		/**
		 * FirewallRule IPV6.
		 */
		static get FIREWALL_RULE_IP_ADDRESS_TYPE_IPV6()
		{
			return "ipv6";
		}
	
		/**
		 * FirewallRule Protocol All.
		 */
		static get FIREWALL_RULE_PROTOCOL_ALL()
		{
			return "all";
		}
	
		/**
		 * FirewallRule Protocol ICMP.
		 */
		static get FIREWALL_RULE_PROTOCOL_ICMP()
		{
			return "icmp";
		}
	
		/**
		 * FirewallRule Protocol TCP.
		 */
		static get FIREWALL_RULE_PROTOCOL_TCP()
		{
			return "tcp";
		}
	
		/**
		 * FirewallRule Protocol UDP.
		 */
		static get FIREWALL_RULE_PROTOCOL_UDP()
		{
			return "udp";
		}
	
		/**
		 * Guest.
		 */
		static get GUEST_DISPLAY_NAME()
		{
			return "Guest";
		}
	
		/**
		 * Predefined hardware configurations.
		 */
		static get HARDWARE_CONFIGURATIONS_PREDEFINED()
		{
			return "predefined";
		}
	
		/**
		 * User predefined hardware configurations.
		 */
		static get HARDWARE_CONFIGURATIONS_USER_PREDEFINED()
		{
			return "user_predefined";
		}
	
		/**
		 * Instance array boot method local drives.Instance array boot method local
		 * drives
		 */
		static get INSTANCE_ARRAY_BOOT_METHOD_LOCAL_DRIVES()
		{
			return "local_drives";
		}
	
		/**
		 * Instance array boot method PXE ISCSI.Instance array boot method PXE ISCSI
		 */
		static get INSTANCE_ARRAY_BOOT_METHOD_PXE_ISCSI()
		{
			return "pxe_iscsi";
		}
	
		/**
		 * SAN InstanceArray interface.InstanceArray interface index reserved for SAN
		 * networks.
		 */
		static get INSTANCE_ARRAY_INTERFACE_INDEX_0()
		{
			return 0;
		}
	
		/**
		 * InstanceArray interface index 1.
		 */
		static get INSTANCE_ARRAY_INTERFACE_INDEX_1()
		{
			return 1;
		}
	
		/**
		 * InstanceArray interface index 2.
		 */
		static get INSTANCE_ARRAY_INTERFACE_INDEX_2()
		{
			return 2;
		}
	
		/**
		 * InstanceArray interface index 3.
		 */
		static get INSTANCE_ARRAY_INTERFACE_INDEX_3()
		{
			return 3;
		}
	
		/**
		 * Microsoft minimum number of processors for two core license pack.
		 */
		static get LICENSE_MICROSOFT_PROCESSOR_MIN_COUNT()
		{
			return 8;
		}
	
		/**
		 * License Type None.
		 */
		static get LICENSE_TYPE_NONE()
		{
			return "none";
		}
	
		/**
		 * License type windows server.
		 */
		static get LICENSE_TYPE_WINDOWS_SERVER()
		{
			return "windows_server";
		}
	
		/**
		 * License type Windows Server Standard.
		 */
		static get LICENSE_TYPE_WINDOWS_SERVER_STANDARD()
		{
			return "windows_server_standard";
		}
	
		/**
		 * Demand license utilization.
		 */
		static get LICENSE_UTILIZATION_TYPE_DEMAND()
		{
			return "demand";
		}
	
		/**
		 * License Utilization Type None.
		 */
		static get LICENSE_UTILIZATION_TYPE_NONE()
		{
			return "none";
		}
	
		/**
		 * Subscribe license utilization.
		 */
		static get LICENSE_UTILIZATION_TYPE_SUBSCRIPTION()
		{
			return "subscription";
		}
	
		/**
		 * SaaS LAN Network.SaaS flag for LAN network
		 */
		static get NETWORK_CUSTOM_TYPE_SAAS()
		{
			return "saas";
		}
	
		/**
		 * Network suspend status not suspended.
		 */
		static get NETWORK_SUSPEND_STATUS_NOT_SUSPENDED()
		{
			return "not_suspended";
		}
	
		/**
		 * Network suspend status suspended.
		 */
		static get NETWORK_SUSPEND_STATUS_SUSPENDED()
		{
			return "suspended";
		}
	
		/**
		 * Network suspend status suspending.
		 */
		static get NETWORK_SUSPEND_STATUS_SUSPENDING()
		{
			return "suspending";
		}
	
		/**
		 * Network suspend status unsuspending.
		 */
		static get NETWORK_SUSPEND_STATUS_UNSUSPENDING()
		{
			return "unsuspending";
		}
	
		/**
		 * LAN network.
		 */
		static get NETWORK_TYPE_LAN()
		{
			return "lan";
		}
	
		/**
		 * SAN network.
		 */
		static get NETWORK_TYPE_SAN()
		{
			return "san";
		}
	
		/**
		 * WAN network.
		 */
		static get NETWORK_TYPE_WAN()
		{
			return "wan";
		}
	
		/**
		 * CPU Load node measurement type.
		 */
		static get NODE_MEASUREMENT_TYPE_CPU_LOAD()
		{
			return "cpu_load";
		}
	
		/**
		 * Disk size node measurement type.
		 */
		static get NODE_MEASUREMENT_TYPE_DISK_SIZE()
		{
			return "disk_size";
		}
	
		/**
		 * Disk used node measurement type.
		 */
		static get NODE_MEASUREMENT_TYPE_DISK_USED()
		{
			return "disk_used";
		}
	
		/**
		 * Network interface input node measurement type.
		 */
		static get NODE_MEASUREMENT_TYPE_NETWORK_INTERFACE_INPUT()
		{
			return "net_if_input";
		}
	
		/**
		 * Network interface output node measurement type.
		 */
		static get NODE_MEASUREMENT_TYPE_NETWORK_INTERFACE_OUTPUT()
		{
			return "net_if_output";
		}
	
		/**
		 * RAM size node measurement type.
		 */
		static get NODE_MEASUREMENT_TYPE_RAM_SIZE()
		{
			return "ram_size";
		}
	
		/**
		 * RAM used node measurement type.
		 */
		static get NODE_MEASUREMENT_TYPE_RAM_USED()
		{
			return "ram_used";
		}
	
		/**
		 * Operating System Centos.
		 */
		static get OPERATING_SYSTEM_CENTOS()
		{
			return "CentOS";
		}
	
		/**
		 * Operating System None.
		 */
		static get OPERATING_SYSTEM_NONE()
		{
			return "none";
		}
	
		/**
		 * Operating System Ubuntu.
		 */
		static get OPERATING_SYSTEM_UBUNTU()
		{
			return "Ubuntu";
		}
	
		/**
		 * Operating System Windows.
		 */
		static get OPERATING_SYSTEM_WINDOWS()
		{
			return "Windows";
		}
	
		/**
		 * Create operation.
		 */
		static get OPERATION_TYPE_CREATE()
		{
			return "create";
		}
	
		/**
		 * Delete operation.
		 */
		static get OPERATION_TYPE_DELETE()
		{
			return "delete";
		}
	
		/**
		 * Edit operation.
		 */
		static get OPERATION_TYPE_EDIT()
		{
			return "edit";
		}
	
		/**
		 * Start operation.
		 */
		static get OPERATION_TYPE_START()
		{
			return "start";
		}
	
		/**
		 * Stop operation.
		 */
		static get OPERATION_TYPE_STOP()
		{
			return "stop";
		}
	
		/**
		 * Suspend operation.
		 */
		static get OPERATION_TYPE_SUSPEND()
		{
			return "suspend";
		}
	
		/**
		 * Prices key for private datacenters default prices.
		 */
		static get PRICES_PRIVATE_DATACENTER_KEY()
		{
			return "private-dc-default";
		}
	
		/**
		 * Finished provision status.
		 */
		static get PROVISION_STATUS_FINISHED()
		{
			return "finished";
		}
	
		/**
		 * Not started provision status.
		 */
		static get PROVISION_STATUS_NOT_STARTED()
		{
			return "not_started";
		}
	
		/**
		 * Ongoing provision status.
		 */
		static get PROVISION_STATUS_ONGOING()
		{
			return "ongoing";
		}
	
		/**
		 * Redis critical token.Redis critical token
		 */
		static get REDIS_CRITICAL_TOKEN()
		{
			return "critical";
		}
	
		/**
		 * Invalid redis token.
		 */
		static get REDIS_INVALID_TOKEN()
		{
			return "invalid";
		}
	
		/**
		 * Redis token.
		 */
		static get REDIS_TOKEN()
		{
			return "token";
		}
	
		/**
		 * Valid redis token.
		 */
		static get REDIS_VALID_TOKEN()
		{
			return "valid";
		}
	
		/**
		 * Active reservation installment.
		 */
		static get RESERVATION_INSTALLMENT_STATUS_ACTIVE()
		{
			return "active";
		}
	
		/**
		 * Stopped reservation installment.
		 */
		static get RESERVATION_INSTALLMENT_STATUS_STOPPED()
		{
			return "stopped";
		}
	
		/**
		 * Active reservation.
		 */
		static get RESERVATION_STATUS_ACTIVE()
		{
			return "active";
		}
	
		/**
		 * Stopped reservation.
		 */
		static get RESERVATION_STATUS_STOPPED()
		{
			return "stopped";
		}
	
		/**
		 * Subnet resource reservation.
		 */
		static get RESERVATION_SUBNET()
		{
			return "subnet";
		}
	
		/**
		 * Demand resource utilization.
		 */
		static get RESOURCE_UTILIZATION_TYPE_DEMAND()
		{
			return "demand";
		}
	
		/**
		 * Reserve resource utilization.
		 */
		static get RESOURCE_UTILIZATION_TYPE_RESERVATION()
		{
			return "reservation";
		}
	
		/**
		 * Big data server class.Very general workload type designation.
		 */
		static get SERVER_CLASS_BIGDATA()
		{
			return "bigdata";
		}
	
		/**
		 * HDFS server class.Very general workload type designation.
		 */
		static get SERVER_CLASS_HDFS()
		{
			return "hdfs";
		}
	
		/**
		 * Unknown server class.Very general workload type designation. Unknown class
		 * servers cannot be used.
		 */
		static get SERVER_CLASS_UNKNOWN()
		{
			return "unknown";
		}
	
		/**
		 * Null power command. No action.Used with some power functions which are both
		 * setter and getter to just interrogate without action.
		 */
		static get SERVER_POWER_STATUS_NONE()
		{
			return "none";
		}
	
		/**
		 * Server powered off.Power down chassis into soft off (S4/S5 state). WARNING:
		 * This command does not initiate a clean shutdown of the operating system
		 * prior to powering down the system.
		 */
		static get SERVER_POWER_STATUS_OFF()
		{
			return "off";
		}
	
		/**
		 * Server powered on.Power up chassis.
		 */
		static get SERVER_POWER_STATUS_ON()
		{
			return "on";
		}
	
		/**
		 * Server power reset.This command will perform a hard reset.
		 */
		static get SERVER_POWER_STATUS_RESET()
		{
			return "reset";
		}
	
		/**
		 * Server power status soft.Initiate a soft-shutdown of OS via ACPI. This can
		 * be done in a number of ways, commonly by simulating an overtemperture or by
		 * simulating a power button press. It is necessary for there to be Operating
		 * System support for ACPI and some sort of daemon watching for events for this
		 * soft power to work.
		 */
		static get SERVER_POWER_STATUS_SOFT()
		{
			return "soft";
		}
	
		/**
		 * Server power status unknown.Returned when a server is not allocated to an
		 * instance, the instance is not deployed or has an ongoing deploy operation.
		 */
		static get SERVER_POWER_STATUS_UNKNOWN()
		{
			return "unknown";
		}
	
		/**
		 * Active service status.
		 */
		static get SERVICE_STATUS_ACTIVE()
		{
			return "active";
		}
	
		/**
		 * Deleted service status.
		 */
		static get SERVICE_STATUS_DELETED()
		{
			return "deleted";
		}
	
		/**
		 * Ordered service status.
		 */
		static get SERVICE_STATUS_ORDERED()
		{
			return "ordered";
		}
	
		/**
		 * Stopped service status.
		 */
		static get SERVICE_STATUS_STOPPED()
		{
			return "stopped";
		}
	
		/**
		 * Suspended service status.
		 */
		static get SERVICE_STATUS_SUSPENDED()
		{
			return "suspended";
		}
	
		/**
		 * Shared drive - connection type "connected".When an instance array or a
		 * container array is attached to a shared drive and the infrastructure is
		 * deployed, this kind of connection will be made.
		 */
		static get SHARED_DRIVE_CONNECTED()
		{
			return "connected";
		}
	
		/**
		 * Shared drive - connection type "connected".
		 */
		static get SHARED_DRIVE_CONNECTED_CONTAINER_ARRAY()
		{
			return "connected_container_array";
		}
	
		/**
		 * Shared drive - connection type "disconnected".
		 */
		static get SHARED_DRIVE_DISCONNECTED_CONTAINER_ARRAY()
		{
			return "disconnected_container_array";
		}
	
		/**
		 * Shared drive connection type "will be connected".When an instance array or a
		 * container array is attached to a shared drive, this type of connection will
		 * be made.
		 */
		static get SHARED_DRIVE_WILL_BE_CONNECTED()
		{
			return "will_be_connected";
		}
	
		/**
		 * Shared drive connection type "will be connected".
		 */
		static get SHARED_DRIVE_WILL_BE_CONNECTED_CONTAINER_ARRAY()
		{
			return "will_be_connected_container_array";
		}
	
		/**
		 * Shared drive - connection type "will_be_disconnected".When an instance array
		 * / container array is detached from a shared drive (or the shared drive /
		 * instance array / container array belonging to the connection is deleted),
		 * this type of connection will be made.
		 */
		static get SHARED_DRIVE_WILL_BE_DISCONNECTED()
		{
			return "will_be_disconnected";
		}
	
		/**
		 * Shared drive - connection type "will_be_disconnected".
		 */
		static get SHARED_DRIVE_WILL_BE_DISCONNECTED_CONTAINER_ARRAY()
		{
			return "will_be_disconnected_container_array";
		}
	
		/**
		 * Solution of type Datalab Spark.
		 */
		static get SOLUTION_TYPE_DATALAB_SPARK()
		{
			return "datalab_spark";
		}
	
		/**
		 * DSA algorithm.
		 */
		static get SSH_DSA_ALGORITHM_IDENTIFIER()
		{
			return "ssh-dsa";
		}
	
		/**
		 * DSS algorithm.
		 */
		static get SSH_DSS_ALGORITHM_IDENTIFIER()
		{
			return "ssh-dss";
		}
	
		/**
		 * OpenSSH SSH key.
		 */
		static get SSH_KEY_FORMAT_OPENSSH()
		{
			return "openssh";
		}
	
		/**
		 * PKCS1 SSH key.
		 */
		static get SSH_KEY_FORMAT_PKCS1()
		{
			return "pkcs#1";
		}
	
		/**
		 * PKCS8 SSH key.
		 */
		static get SSH_KEY_FORMAT_PKCS8()
		{
			return "pkcs#8";
		}
	
		/**
		 * SSH2 SSH key.
		 */
		static get SSH_KEY_FORMAT_SSH2()
		{
			return "ssh2";
		}
	
		/**
		 * RSA algorithm.
		 */
		static get SSH_RSA_ALGORITHM_IDENTIFIER()
		{
			return "ssh-rsa";
		}
	
		/**
		 * LAN Subnet.
		 */
		static get SUBNET_DESTINATION_LAN()
		{
			return "lan";
		}
	
		/**
		 * SAN Subnet.
		 */
		static get SUBNET_DESTINATION_SAN()
		{
			return "san";
		}
	
		/**
		 * WAN Subnet.
		 */
		static get SUBNET_DESTINATION_WAN()
		{
			return "wan";
		}
	
		/**
		 * IPv4 Subnet.
		 */
		static get SUBNET_TYPE_IPV4()
		{
			return "ipv4";
		}
	
		/**
		 * IPv6 Subnet.
		 */
		static get SUBNET_TYPE_IPV6()
		{
			return "ipv6";
		}
	
		/**
		 * URL Type HDFS.
		 */
		static get URL_TYPE_HDFS()
		{
			return "hdfs";
		}
	
		/**
		 * User access level - customer.
		 */
		static get USER_ACCESS_LEVEL_CUSTOMER()
		{
			return "customer";
		}
	
		/**
		 * Not verified user e-mail address.
		 */
		static get USER_LOGIN_EMAIL_STATUS_NOT_VERIFIED()
		{
			return "not_verified";
		}
	
		/**
		 * Verified user e-mail address.
		 */
		static get USER_LOGIN_EMAIL_STATUS_VERIFIED()
		{
			return "verified";
		}
	
		/**
		 * User Plan Type Custom.
		 */
		static get USER_PLAN_TYPE_CUSTOM()
		{
			return "custom";
		}
	
		/**
		 * User Plan Type Starter.
		 */
		static get USER_PLAN_TYPE_STARTER()
		{
			return "starter";
		}
	
		/**
		 * User Plan Type Starter Redundant.
		 */
		static get USER_PLAN_TYPE_STARTER_REDUNDANT()
		{
			return "starter_redundant";
		}
	
		/**
		 * User Plan Type Vanilla.
		 */
		static get USER_PLAN_TYPE_VANILLA()
		{
			return "vanilla";
		}
	
		/**
		 * Active user SSH key.
		 */
		static get USER_SSH_KEY_STATUS_ACTIVE()
		{
			return "active";
		}
	
		/**
		 * Deleted user SSH key.
		 */
		static get USER_SSH_KEY_STATUS_DELETED()
		{
			return "deleted";
		}
	
		/**
		 * User suspend reason custom.
		 */
		static get USER_SUSPEND_REASON_CUSTOM()
		{
			return "custom";
		}
	
		/**
		 * User suspend reason unpaid.
		 */
		static get USER_SUSPEND_REASON_UNPAID()
		{
			return "unpaid";
		}
	
		/**
		 * Admin user.
		 */
		static get USER_TYPE_ADMIN()
		{
			return "admin";
		}
	
		/**
		 * Billable user.
		 */
		static get USER_TYPE_BILLABLE()
		{
			return "billable";
		}
	
		/**
		 * Volume template deprecation status deprecated allow expand.Volume template
		 * deprecation status deprecated allow expand
		 */
		static get VOLUME_TEMPLATE_DEPRECATION_STATUS_DEPRECATED_ALLOW_EXPAND()
		{
			return "deprecated_allow_expand";
		}
	
		/**
		 * Volume template deprecation status deprecated deny provision.Volume template
		 * deprecation status deprecated deny provision
		 */
		static get VOLUME_TEMPLATE_DEPRECATION_STATUS_DEPRECATED_DENY_PROVISION()
		{
			return "deprecated_deny_provision";
		}
	
		/**
		 * Volume template deprecation status not deprecated.Volume template
		 * deprecation status not deprecated
		 */
		static get VOLUME_TEMPLATE_DEPRECATION_STATUS_NOT_DEPRECATED()
		{
			return "not_deprecated";
		}
	
		/**
		 * Active status volume template.
		 */
		static get VOLUME_TEMPLATE_STATUS_ACTIVE()
		{
			return "active";
		}
	
		/**
		 * Deleted status volume template.
		 */
		static get VOLUME_TEMPLATE_STATUS_DELETED()
		{
			return "deleted";
		}
}

module.exports =
class Constants
{
		/**
		 * Metal Cloud, API v3.2.0
		 */
	
	
		/**
		 * Infrastructure deployment AFC group type.
		 * Visibility: private.Infrastructure deployment AFC group type
		 */
		static get AFC_GROUP_TYPE_INFRASTRUCTURE_DEPLOYMENT()
		{
			return "infrastructure_deployment";
		}
	
		/**
		 * Server cleanup.
		 * Visibility: private.Server cleanup AFC group type
		 */
		static get AFC_GROUP_TYPE_SERVER_CLEANUP()
		{
			return "server_cleanup";
		}
	
		/**
		 * Server register.
		 * Visibility: private.Server registering AFC group type
		 */
		static get AFC_GROUP_TYPE_SERVER_REGISTER()
		{
			return "server_register";
		}
	
		/**
		 * Servers cleanup batch.
		 * Visibility: private.
		 */
		static get AFC_GROUP_TYPE_SERVERS_CLEANUP_BATCH()
		{
			return "servers_cleanup_batch";
		}
	
		/**
		 * AFC Dropdown option all.
		 * Visibility: private.
		 */
		static get AFC_OPTION_ALL()
		{
			return "all";
		}
	
		/**
		 * AFC Dropdown option everything.
		 * Visibility: private.
		 */
		static get AFC_OPTION_EVERYTHING()
		{
			return "everything";
		}
	
		/**
		 * AFC Dropdown option none.
		 * Visibility: private.
		 */
		static get AFC_OPTION_NONE()
		{
			return "none";
		}
	
		/**
		 * Not called AFC queue status.
		 * Visibility: private.
		 */
		static get AFC_STATUS_NOT_CALLED()
		{
			return "not_called";
		}
	
		/**
		 * Successful AFC queue status.
		 * Visibility: private.
		 */
		static get AFC_STATUS_RETURNED_SUCCESS()
		{
			return "returned_success";
		}
	
		/**
		 * This afc is currently running.
		 * Visibility: private.
		 */
		static get AFC_STATUS_RUNNING()
		{
			return "running";
		}
	
		/**
		 * Intentionally skipped AFC job.
		 * Visibility: private.A developer, sysops engineer or administrator may decide
		 * to skip a failed AFC job after carefully analyzing the consequences and if
		 * the job is not required to succeed (or has succeeded by manual intervention).
		 */
		static get AFC_STATUS_SKIPPED()
		{
			return "skipped";
		}
	
		/**
		 * Error AFC queue status.
		 * Visibility: private.
		 */
		static get AFC_STATUS_THROWN_ERROR()
		{
			return "thrown_error";
		}
	
		/**
		 * Error while retrying AFC queue status.
		 * Visibility: private.
		 */
		static get AFC_STATUS_THROWN_ERROR_RETRYING()
		{
			return "thrown_error_retrying";
		}
	
		/**
		 * Error silenced AFC queue status.
		 * Visibility: private.
		 */
		static get AFC_STATUS_THROWN_ERROR_SILENCED()
		{
			return "thrown_error_silenced";
		}
	
		/**
		 * Asynchronous AFC queue.
		 * Visibility: private.
		 */
		static get AFC_TYPE_ASYNCHRONOUS()
		{
			return "asynchronous";
		}
	
		/**
		 * Normal debug AFC queue.
		 * Visibility: private.
		 */
		static get AFC_TYPE_DEBUG_NORMAL()
		{
			return "debug_normal";
		}
	
		/**
		 * Debug RPC server AFC queue.
		 * Visibility: private.
		 */
		static get AFC_TYPE_DEBUG_RPC_SERVER()
		{
			return "debug_rpc_server";
		}
	
		/**
		 * SaaS cluster of type Cloudera.
		 * Visibility: public.See http://www.cloudera.com/ for more information on this
		 * software.
		 */
		static get CLUSTER_TYPE_CLOUDERA()
		{
			return "cloudera";
		}
	
		/**
		 * SaaS cluster of type ContainerPlatformKubernetes.
		 * Visibility: private.SaaS cluster of type ContainerPlatformKubernetes
		 */
		static get CLUSTER_TYPE_CONTAINER_PLATFORM_KUBERNETES()
		{
			return "container_platform_kubernetes";
		}
	
		/**
		 * SaaS cluster of type ContainerPlatformMesos.
		 * Visibility: private.SaaS cluster of type ContainerPlatformMesos
		 */
		static get CLUSTER_TYPE_CONTAINER_PLATFORM_MESOS()
		{
			return "container_platform_mesos";
		}
	
		/**
		 * SaaS cluster of type Couchbase.
		 * Visibility: public.See http://www.couchbase.com/ for information on this
		 * software.
		 */
		static get CLUSTER_TYPE_COUCHBASE()
		{
			return "couchbase";
		}
	
		/**
		 * SaaS cluster of type Datameer.
		 * Visibility: public.See http://www.datameer.com/ for information on this
		 * software.
		 */
		static get CLUSTER_TYPE_DATAMEER()
		{
			return "datameer";
		}
	
		/**
		 * Datastax cluster type.
		 * Visibility: public.
		 */
		static get CLUSTER_TYPE_DATASTAX()
		{
			return "datastax";
		}
	
		/**
		 * SaaS cluster of type ElasticSearch.
		 * Visibility: public.See http://www.elasticsearch.org/ for more information on
		 * this software.
		 */
		static get CLUSTER_TYPE_ELASTICSEARCH()
		{
			return "elasticsearch";
		}
	
		/**
		 * SaaS cluster of type ElasticSearch.
		 * Visibility: public.See http://www.elasticsearch.org/ for more information on
		 * this software.
		 */
		static get CLUSTER_TYPE_ELASTICSEARCH_LEGACY()
		{
			return "elasticsearch_legacy";
		}
	
		/**
		 * Exasol cluster type.
		 * Visibility: public.
		 */
		static get CLUSTER_TYPE_EXASOL()
		{
			return "exasol";
		}
	
		/**
		 * HDFS Cluster.
		 * Visibility: public.
		 */
		static get CLUSTER_TYPE_HDFS()
		{
			return "hdfs";
		}
	
		/**
		 * SaaS cluster of type Hortonworks.
		 * Visibility: public.SaaS cluster of type MapR
		 */
		static get CLUSTER_TYPE_HORTONWORKS()
		{
			return "hortonworks";
		}
	
		/**
		 * Kubernetes cluster type.
		 * Visibility: public.SaaS cluster of type Kubernetes
		 */
		static get CLUSTER_TYPE_KUBERNETES()
		{
			return "kubernetes";
		}
	
		/**
		 * SaaS cluster of type MapR.
		 * Visibility: public.SaaS cluster of type MapR
		 */
		static get CLUSTER_TYPE_MAPR()
		{
			return "mapr";
		}
	
		/**
		 * SaaS cluster of type MapRLegacy.
		 * Visibility: public.SaaS cluster of type MapRLegacy
		 */
		static get CLUSTER_TYPE_MAPR_LEGACY()
		{
			return "mapr_legacy";
		}
	
		/**
		 * Mesos cluster type.
		 * Visibility: public.
		 */
		static get CLUSTER_TYPE_MESOS()
		{
			return "mesos";
		}
	
		/**
		 * Percona MySQL cluster.
		 * Visibility: public.See
		 * https://www.percona.com/software/mysql-database/percona-xtradb-cluster for
		 * information on this software.
		 */
		static get CLUSTER_TYPE_MYSQL_PERCONA()
		{
			return "mysql_percona";
		}
	
		/**
		 * SaaS cluster of type Splunk.
		 * Visibility: public.See http://www.splunk.com/ for information on this
		 * software.
		 */
		static get CLUSTER_TYPE_SPLUNK()
		{
			return "splunk";
		}
	
		/**
		 * SaaS cluster of type Tableau.
		 * Visibility: public.See http://www.tableau.com/ for information on this software.
		 *
		 */
		static get CLUSTER_TYPE_TABLEAU()
		{
			return "tableau";
		}
	
		/**
		 * Vanilla cluster type (blank).
		 * Visibility: public.Default cluster, with blank behaviour (does nothing
		 * special and installs no special [SaaS] software). It is a singleton per
		 * Infrastructure product.
		 */
		static get CLUSTER_TYPE_VANILLA()
		{
			return "vanilla";
		}
	
		/**
		 * SQLSelection array row span.
		 * Visibility: public.
		 */
		static get COLLAPSE_ARRAY_ROW_SPAN()
		{
			return "array_row_span";
		}
	
		/**
		 * SQLSelection array subrows.
		 * Visibility: public.
		 */
		static get COLLAPSE_ARRAY_SUBROWS()
		{
			return "array_subrows";
		}
	
		/**
		 * SQLSelection array subrows table.
		 * Visibility: public.
		 */
		static get COLLAPSE_ARRAY_SUBROWS_TABLE()
		{
			return "array_subrows_table";
		}
	
		/**
		 * SQLSelection autocomplete dictionary.
		 * Visibility: public.
		 */
		static get COLLAPSE_AUTOCOMPLETE_DICTIONARY()
		{
			return "autocomplete_dictionary";
		}
	
		/**
		 * SQLSelection HTML rows array.
		 * Visibility: public.
		 */
		static get COLLAPSE_HTML_ROWS_ARRAY()
		{
			return "html_rows_array";
		}
	
		/**
		 * SQLSelection HTML rows string.
		 * Visibility: public.
		 */
		static get COLLAPSE_HTML_ROWS_STRING()
		{
			return "html_rows_string";
		}
	
		/**
		 * SQLSelection none.
		 * Visibility: public.
		 */
		static get COLLAPSE_NONE()
		{
			return "none";
		}
	
		/**
		 * ContainerArray execute command action.
		 * Visibility: public.ContainerArray action that executes a given command.
		 */
		static get CONTAINER_ARRAY_ACTION_EXECUTE_COMMAND()
		{
			return "execute_command";
		}
	
		/**
		 * ContainerArray HTTP get action.
		 * Visibility: public.ContainerArray action that makes a HTTP get request.
		 */
		static get CONTAINER_ARRAY_ACTION_HTTP_GET()
		{
			return "http_get";
		}
	
		/**
		 * ContainerArray TCP socket action.
		 * Visibility: public.ContainerArray action that opens a TCP connection to a
		 * given port.
		 */
		static get CONTAINER_ARRAY_ACTION_TCP_SOCKET()
		{
			return "tcp_socket";
		}
	
		/**
		 * SAN ContainerArray interface.
		 * Visibility: public.ContainerArray interface index reserved for SAN networks.
		 */
		static get CONTAINER_ARRAY_INTERFACE_INDEX_0()
		{
			return 0;
		}
	
		/**
		 * ContainerArray interface index 1.
		 * Visibility: public.
		 */
		static get CONTAINER_ARRAY_INTERFACE_INDEX_1()
		{
			return 1;
		}
	
		/**
		 * ContainerArray interface index 2.
		 * Visibility: public.
		 */
		static get CONTAINER_ARRAY_INTERFACE_INDEX_2()
		{
			return 2;
		}
	
		/**
		 * Elasticsearch container cluster type.
		 * Visibility: public.
		 */
		static get CONTAINER_CLUSTER_TYPE_ELASTICSEARCH()
		{
			return "elasticsearch";
		}
	
		/**
		 * Kafka container cluster type.
		 * Visibility: public.
		 */
		static get CONTAINER_CLUSTER_TYPE_KAFKA()
		{
			return "kafka";
		}
	
		/**
		 * PostgreSQL container cluster type.
		 * Visibility: public.
		 */
		static get CONTAINER_CLUSTER_TYPE_POSTGRESQL()
		{
			return "postgresql";
		}
	
		/**
		 * Spark container cluster type.
		 * Visibility: public.
		 */
		static get CONTAINER_CLUSTER_TYPE_SPARK()
		{
			return "spark";
		}
	
		/**
		 * SparkSQL container cluster type.
		 * Visibility: public.
		 */
		static get CONTAINER_CLUSTER_TYPE_SPARKSQL()
		{
			return "sparksql";
		}
	
		/**
		 * StreamSets container cluster type.
		 * Visibility: public.StreamSets container cluster type
		 */
		static get CONTAINER_CLUSTER_TYPE_STREAMSETS()
		{
			return "streamsets";
		}
	
		/**
		 * Vanilla container cluster type.
		 * Visibility: public.Default container cluster, with blank behaviour. It is a
		 * singleton per ContainerPlatform product.
		 */
		static get CONTAINER_CLUSTER_TYPE_VANILLA()
		{
			return "vanilla";
		}
	
		/**
		 * Zookeeper container cluster type.
		 * Visibility: public.
		 */
		static get CONTAINER_CLUSTER_TYPE_ZOOKEEPER()
		{
			return "zookeeper";
		}
	
		/**
		 * Zoomdata container cluster type.
		 * Visibility: public.
		 */
		static get CONTAINER_CLUSTER_TYPE_ZOOMDATA()
		{
			return "zoomdata";
		}
	
		/**
		 * Container failed phase.
		 * Visibility: public.The Container has failed.
		 */
		static get CONTAINER_STATUS_PHASE_FAILED()
		{
			return "failed";
		}
	
		/**
		 * Container pending phase.
		 * Visibility: public.The Container has been created and awaits scheduling and
		 * execution.
		 */
		static get CONTAINER_STATUS_PHASE_PENDING()
		{
			return "pending";
		}
	
		/**
		 * Container running phase.
		 * Visibility: public.Container is running.
		 */
		static get CONTAINER_STATUS_PHASE_RUNNING()
		{
			return "running";
		}
	
		/**
		 * Container succeeded phase.
		 * Visibility: public.The Container has been executed successfully.
		 */
		static get CONTAINER_STATUS_PHASE_SUCCEEDED()
		{
			return "succeeded";
		}
	
		/**
		 * Container unknown phase.
		 * Visibility: public.The Container state phase could not be retrieved due to
		 * internal errors.
		 */
		static get CONTAINER_STATUS_PHASE_UNKNOWN()
		{
			return "unknown";
		}
	
		/**
		 * HDFS DataLake type.
		 * Visibility: public.
		 */
		static get DATA_LAKE_TYPE_HDFS()
		{
			return "hdfs";
		}
	
		/**
		 * Disk Type HDD.
		 * Visibility: public.Type of server local disk
		 */
		static get DISK_TYPE_HDD()
		{
			return "HDD";
		}
	
		/**
		 * Disk Type none.
		 * Visibility: public.Server local disk type
		 */
		static get DISK_TYPE_NONE()
		{
			return "none";
		}
	
		/**
		 * Disk Type NVME.
		 * Visibility: public.Type of server local disk
		 */
		static get DISK_TYPE_NVME()
		{
			return "NVME";
		}
	
		/**
		 * Disk Type SSD.
		 * Visibility: public.Type of server local disk
		 */
		static get DISK_TYPE_SSD()
		{
			return "SSD";
		}
	
		/**
		 * DNS address record.
		 * Visibility: private.Returns a 32-bit IPv4 address, most commonly used to map
		 * hostnames to an IP address of the host, but it is also used for DNSBLs,
		 * storing subnet masks in RFC 1101, etc.
		 */
		static get DNS_RECORD_TYPE_A()
		{
			return "A";
		}
	
		/**
		 * DNS IPv6 address record.
		 * Visibility: private.Returns a 128-bit IPv6 address, most commonly used to
		 * map hostnames to an IP address of the host.
		 */
		static get DNS_RECORD_TYPE_AAAA()
		{
			return "AAAA";
		}
	
		/**
		 * DNS canonical name record.
		 * Visibility: private.Alias of one name to another: the DNS lookup will
		 * continue by retrying the lookup with the new name.
		 */
		static get DNS_RECORD_TYPE_CNAME()
		{
			return "CNAME";
		}
	
		/**
		 * DNS mail exchange record.
		 * Visibility: private.Maps a domain name to a list of message transfer agents
		 * for that domain.
		 */
		static get DNS_RECORD_TYPE_MX()
		{
			return "MX";
		}
	
		/**
		 * DNS nameserver record.
		 * Visibility: private.Delegates a DNS zone to use the given authoritative name
		 * servers.
		 */
		static get DNS_RECORD_TYPE_NS()
		{
			return "NS";
		}
	
		/**
		 * DNS pointer record.
		 * Visibility: private.Pointer to a canonical name. Unlike a CNAME, DNS
		 * processing stops and just the name is returned. The most common use is for
		 * implementing reverse DNS lookups, but other uses include such things as
		 * DNS-SD.
		 */
		static get DNS_RECORD_TYPE_PTR()
		{
			return "PTR";
		}
	
		/**
		 * DNS Start of authority record.
		 * Visibility: private.Specifies authoritative information about a DNS zone,
		 * including the primary name server, the email of the domain administrator,
		 * the domain serial number, and several timers relating to refreshing the zone.
		 */
		static get DNS_RECORD_TYPE_SOA()
		{
			return "SOA";
		}
	
		/**
		 * DNS text record.
		 * Visibility: private.Originally for arbitrary human-readable text in a DNS
		 * record. Since the early 1990s, however, this record more often carries
		 * machine-readable data, such as specified by RFC 1464, opportunistic
		 * encryption, Sender Policy Framework, DKIM, DMARC, DNS-SD, etc.
		 */
		static get DNS_RECORD_TYPE_TXT()
		{
			return "TXT";
		}
	
		/**
		 * Dummy drive.
		 * Visibility: private.Demo drive.
		 */
		static get DRIVE_STORAGE_TYPE_DUMMY()
		{
			return "dummy";
		}
	
		/**
		 * HDD drive.
		 * Visibility: public.
		 */
		static get DRIVE_STORAGE_TYPE_ISCSI_HDD()
		{
			return "iscsi_hdd";
		}
	
		/**
		 * SSD drive.
		 * Visibility: public.
		 */
		static get DRIVE_STORAGE_TYPE_ISCSI_SSD()
		{
			return "iscsi_ssd";
		}
	
		/**
		 * Don't create a drive option.
		 * Visibility: public.Used when indicating the absence of a drive (like NULL).
		 */
		static get DRIVE_STORAGE_TYPE_NONE()
		{
			return "none";
		}
	
		/**
		 * PHPUnit endpoint.
		 * Visibility: private.
		 */
		static get ENDPOINT_PHPUNIT()
		{
			return "phpunit";
		}
	
		/**
		 * Debugging event.
		 * Visibility: private.
		 */
		static get EVENT_SEVERITY_DEBUG()
		{
			return "debug";
		}
	
		/**
		 * Important event.
		 * Visibility: public.
		 */
		static get EVENT_SEVERITY_IMPORTANT()
		{
			return "important";
		}
	
		/**
		 * Info event.
		 * Visibility: public.
		 */
		static get EVENT_SEVERITY_INFO()
		{
			return "info";
		}
	
		/**
		 * Security event.
		 * Visibility: public.Events such as log-in, log out, password changes, account
		 * recovery, authenticator added or removed, etc.
		 */
		static get EVENT_SEVERITY_SECURITY()
		{
			return "security";
		}
	
		/**
		 * Success event.
		 * Visibility: public.
		 */
		static get EVENT_SEVERITY_SUCCESS()
		{
			return "success";
		}
	
		/**
		 * Trigger event.
		 * Visibility: public.
		 */
		static get EVENT_SEVERITY_TRIGGER()
		{
			return "trigger";
		}
	
		/**
		 * Warning event.
		 * Visibility: public.
		 */
		static get EVENT_SEVERITY_WARNING()
		{
			return "warning";
		}
	
		/**
		 * Private event.
		 * Visibility: private.
		 */
		static get EVENT_VISIBILITY_PRIVATE()
		{
			return "private";
		}
	
		/**
		 * Public event.
		 * Visibility: private.
		 */
		static get EVENT_VISIBILITY_PUBLIC()
		{
			return "public";
		}
	
		/**
		 * Filesystem navigator driver dataset readme.
		 * Visibility: public.
		 */
		static get FILESYSTEM_NAVIGATOR_DRIVER_TYPE_DATASET_README()
		{
			return "dataset_readme";
		}
	
		/**
		 * FileSystemNavigator driver of type WebHDFS.
		 * Visibility: public.
		 */
		static get FILESYSTEM_NAVIGATOR_DRIVER_TYPE_WEBHDFS()
		{
			return "webhdfs";
		}
	
		/**
		 * EXT2 filesystem.
		 * Visibility: public.
		 */
		static get FILESYSTEM_TYPE_EXT2()
		{
			return "ext2";
		}
	
		/**
		 * EXT3 filesystem.
		 * Visibility: public.
		 */
		static get FILESYSTEM_TYPE_EXT3()
		{
			return "ext3";
		}
	
		/**
		 * EXT4 filesystem.
		 * Visibility: public.
		 */
		static get FILESYSTEM_TYPE_EXT4()
		{
			return "ext4";
		}
	
		/**
		 * None filesystem.
		 * Visibility: public.Value used when no file system is specified.
		 */
		static get FILESYSTEM_TYPE_NONE()
		{
			return "none";
		}
	
		/**
		 * XFS filesystem.
		 * Visibility: public.
		 */
		static get FILESYSTEM_TYPE_XFS()
		{
			return "xfs";
		}
	
		/**
		 * FirewallRule IPV4.
		 * Visibility: public.
		 */
		static get FIREWALL_RULE_IP_ADDRESS_TYPE_IPV4()
		{
			return "ipv4";
		}
	
		/**
		 * FirewallRule IPV6.
		 * Visibility: public.
		 */
		static get FIREWALL_RULE_IP_ADDRESS_TYPE_IPV6()
		{
			return "ipv6";
		}
	
		/**
		 * FirewallRule Protocol All.
		 * Visibility: public.
		 */
		static get FIREWALL_RULE_PROTOCOL_ALL()
		{
			return "all";
		}
	
		/**
		 * FirewallRule Protocol ICMP.
		 * Visibility: public.
		 */
		static get FIREWALL_RULE_PROTOCOL_ICMP()
		{
			return "icmp";
		}
	
		/**
		 * FirewallRule Protocol TCP.
		 * Visibility: public.
		 */
		static get FIREWALL_RULE_PROTOCOL_TCP()
		{
			return "tcp";
		}
	
		/**
		 * FirewallRule Protocol UDP.
		 * Visibility: public.
		 */
		static get FIREWALL_RULE_PROTOCOL_UDP()
		{
			return "udp";
		}
	
		/**
		 * Guest.
		 * Visibility: public.
		 */
		static get GUEST_DISPLAY_NAME()
		{
			return "Guest";
		}
	
		/**
		 * Predefined hardware configurations.
		 * Visibility: public.
		 */
		static get HARDWARE_CONFIGURATIONS_PREDEFINED()
		{
			return "predefined";
		}
	
		/**
		 * User predefined hardware configurations.
		 * Visibility: public.
		 */
		static get HARDWARE_CONFIGURATIONS_USER_PREDEFINED()
		{
			return "user_predefined";
		}
	
		/**
		 * Health check error status.
		 * Visibility: private.
		 */
		static get HEALTH_CHECK_STATUS_ERROR()
		{
			return "error";
		}
	
		/**
		 * Health check success status.
		 * Visibility: private.
		 */
		static get HEALTH_CHECK_STATUS_SUCCESS()
		{
			return "success";
		}
	
		/**
		 * Health check warning status.
		 * Visibility: private.
		 */
		static get HEALTH_CHECK_STATUS_WARNING()
		{
			return "warning";
		}
	
		/**
		 * Infrastructure experimental priority avoid.
		 * Visibility: private.
		 */
		static get INFRASTRUCTURE_EXPERIMENTAL_PRIORITY_AVOID()
		{
			return "avoid";
		}
	
		/**
		 * Infrastructure experimental priority disallow.
		 * Visibility: private.
		 */
		static get INFRASTRUCTURE_EXPERIMENTAL_PRIORITY_DISALLOW()
		{
			return "disallow";
		}
	
		/**
		 * Infrastructure experimental priority equal.
		 * Visibility: private.
		 */
		static get INFRASTRUCTURE_EXPERIMENTAL_PRIORITY_EQUAL()
		{
			return "equal";
		}
	
		/**
		 * Infrastructure experimental priority prefer.
		 * Visibility: private.
		 */
		static get INFRASTRUCTURE_EXPERIMENTAL_PRIORITY_PREFER()
		{
			return "prefer";
		}
	
		/**
		 * Infrastructure provision stage final.
		 * Visibility: private.Final stage for infrastructure provision callback. Sets
		 * infrastructure to active.
		 */
		static get INFRASTRUCTURE_STAGE_FINAL_CALLBACK()
		{
			return "infrastructure_stage_final_callback";
		}
	
		/**
		 * Infrastructure provision stage switch provision.
		 * Visibility: private.First stage of infrastructure callback. Adds switch
		 * provisions to afc queue.
		 */
		static get INFRASTRUCTURE_STAGE_SWITCH_PROVISION()
		{
			return "infrastructure_stage_switch_provision";
		}
	
		/**
		 * Instance array boot method local drives.
		 * Visibility: public.Instance array boot method local drives
		 */
		static get INSTANCE_ARRAY_BOOT_METHOD_LOCAL_DRIVES()
		{
			return "local_drives";
		}
	
		/**
		 * Instance array boot method PXE ISCSI.
		 * Visibility: public.Instance array boot method PXE ISCSI
		 */
		static get INSTANCE_ARRAY_BOOT_METHOD_PXE_ISCSI()
		{
			return "pxe_iscsi";
		}
	
		/**
		 * SAN InstanceArray interface.
		 * Visibility: public.InstanceArray interface index reserved for SAN networks.
		 */
		static get INSTANCE_ARRAY_INTERFACE_INDEX_0()
		{
			return 0;
		}
	
		/**
		 * InstanceArray interface index 1.
		 * Visibility: public.
		 */
		static get INSTANCE_ARRAY_INTERFACE_INDEX_1()
		{
			return 1;
		}
	
		/**
		 * InstanceArray interface index 2.
		 * Visibility: public.
		 */
		static get INSTANCE_ARRAY_INTERFACE_INDEX_2()
		{
			return 2;
		}
	
		/**
		 * InstanceArray interface index 3.
		 * Visibility: public.
		 */
		static get INSTANCE_ARRAY_INTERFACE_INDEX_3()
		{
			return 3;
		}
	
		/**
		 * IPv4 IP.
		 * Visibility: public.
		 */
		static get IP_TYPE_IPV4()
		{
			return "ipv4";
		}
	
		/**
		 * IPv6 IP.
		 * Visibility: public.
		 */
		static get IP_TYPE_IPV6()
		{
			return "ipv6";
		}
	
		/**
		 * Health checks endpoint.
		 * Visibility: private.
		 */
		static get IPC_HEALTH_CHECK()
		{
			return "health_check";
		}
	
		/**
		 * HTTPOnly jwt cookie.
		 * Visibility: private.
		 */
		static get JWT_COOKIE_TYPE_HTTPONLY()
		{
			return "HTTPOnly";
		}
	
		/**
		 * Script jwt cookie.
		 * Visibility: private.
		 */
		static get JWT_COOKIE_TYPE_SCRIPT()
		{
			return "script";
		}
	
		/**
		 * Microsoft minimum number of cores for two core license pack.
		 * Visibility: private.
		 */
		static get LICENSE_MICROSOFT_CORE_MIN_COUNT()
		{
			return 16;
		}
	
		/**
		 * Microsoft minimum number of processors for two core license pack.
		 * Visibility: public.
		 */
		static get LICENSE_MICROSOFT_PROCESSOR_MIN_COUNT()
		{
			return 8;
		}
	
		/**
		 * License type cloudera.
		 * Visibility: private.
		 */
		static get LICENSE_TYPE_CLOUDERA()
		{
			return "cloudera";
		}
	
		/**
		 * License type couchbase.
		 * Visibility: private.
		 */
		static get LICENSE_TYPE_COUCHBASE()
		{
			return "couchbase";
		}
	
		/**
		 * License type MAPR.
		 * Visibility: private.
		 */
		static get LICENSE_TYPE_MAPR()
		{
			return "mapr";
		}
	
		/**
		 * License Type None.
		 * Visibility: public.
		 */
		static get LICENSE_TYPE_NONE()
		{
			return "none";
		}
	
		/**
		 * License type windows server.
		 * Visibility: public.
		 */
		static get LICENSE_TYPE_WINDOWS_SERVER()
		{
			return "windows_server";
		}
	
		/**
		 * License type Windows Server Standard.
		 * Visibility: public.
		 */
		static get LICENSE_TYPE_WINDOWS_SERVER_STANDARD()
		{
			return "windows_server_standard";
		}
	
		/**
		 * Demand license utilization.
		 * Visibility: public.
		 */
		static get LICENSE_UTILIZATION_TYPE_DEMAND()
		{
			return "demand";
		}
	
		/**
		 * License Utilization Type None.
		 * Visibility: public.
		 */
		static get LICENSE_UTILIZATION_TYPE_NONE()
		{
			return "none";
		}
	
		/**
		 * Subscribe license utilization.
		 * Visibility: public.
		 */
		static get LICENSE_UTILIZATION_TYPE_SUBSCRIPTION()
		{
			return "subscription";
		}
	
		/**
		 * Limits for a paying user.
		 * Visibility: private.
		 */
		static get LIMITS_BILLABLE()
		{
			return "billable";
		}
	
		/**
		 * Default limits for a user.
		 * Visibility: private.
		 */
		static get LIMITS_DEFAULT()
		{
			return "default";
		}
	
		/**
		 * Limits for a user that has received demo time.
		 * Visibility: private.
		 */
		static get LIMITS_DEMO()
		{
			return "demo";
		}
	
		/**
		 * Limits for a user that has at least sales rank.
		 * Visibility: private.
		 */
		static get LIMITS_DEVELOPER()
		{
			return "developer";
		}
	
		/**
		 * Crescendo firewall.
		 * Visibility: private.
		 */
		static get LOAD_BALANCER_CRESCENDO()
		{
			return "crescendo";
		}
	
		/**
		 * HAProxy load balancer.
		 * Visibility: private.
		 */
		static get LOAD_BALANCER_HAPROXY()
		{
			return "haproxy";
		}
	
		/**
		 * SaaS LAN Network.
		 * Visibility: public.SaaS flag for LAN network
		 */
		static get NETWORK_CUSTOM_TYPE_SAAS()
		{
			return "saas";
		}
	
		/**
		 * Network suspend status not suspended.
		 * Visibility: public.
		 */
		static get NETWORK_SUSPEND_STATUS_NOT_SUSPENDED()
		{
			return "not_suspended";
		}
	
		/**
		 * Network suspend status suspended.
		 * Visibility: public.
		 */
		static get NETWORK_SUSPEND_STATUS_SUSPENDED()
		{
			return "suspended";
		}
	
		/**
		 * Network suspend status suspending.
		 * Visibility: public.
		 */
		static get NETWORK_SUSPEND_STATUS_SUSPENDING()
		{
			return "suspending";
		}
	
		/**
		 * Network suspend status unsuspending.
		 * Visibility: public.
		 */
		static get NETWORK_SUSPEND_STATUS_UNSUSPENDING()
		{
			return "unsuspending";
		}
	
		/**
		 * LAN network.
		 * Visibility: public.
		 */
		static get NETWORK_TYPE_LAN()
		{
			return "lan";
		}
	
		/**
		 * SAN network.
		 * Visibility: public.
		 */
		static get NETWORK_TYPE_SAN()
		{
			return "san";
		}
	
		/**
		 * WAN network.
		 * Visibility: public.
		 */
		static get NETWORK_TYPE_WAN()
		{
			return "wan";
		}
	
		/**
		 * CPU Load node measurement type.
		 * Visibility: public.
		 */
		static get NODE_MEASUREMENT_TYPE_CPU_LOAD()
		{
			return "cpu_load";
		}
	
		/**
		 * Disk size node measurement type.
		 * Visibility: public.
		 */
		static get NODE_MEASUREMENT_TYPE_DISK_SIZE()
		{
			return "disk_size";
		}
	
		/**
		 * Disk used node measurement type.
		 * Visibility: public.
		 */
		static get NODE_MEASUREMENT_TYPE_DISK_USED()
		{
			return "disk_used";
		}
	
		/**
		 * Network interface input node measurement type.
		 * Visibility: public.
		 */
		static get NODE_MEASUREMENT_TYPE_NETWORK_INTERFACE_INPUT()
		{
			return "net_if_input";
		}
	
		/**
		 * Network interface output node measurement type.
		 * Visibility: public.
		 */
		static get NODE_MEASUREMENT_TYPE_NETWORK_INTERFACE_OUTPUT()
		{
			return "net_if_output";
		}
	
		/**
		 * RAM size node measurement type.
		 * Visibility: public.
		 */
		static get NODE_MEASUREMENT_TYPE_RAM_SIZE()
		{
			return "ram_size";
		}
	
		/**
		 * RAM used node measurement type.
		 * Visibility: public.
		 */
		static get NODE_MEASUREMENT_TYPE_RAM_USED()
		{
			return "ram_used";
		}
	
		/**
		 * Operating System Centos.
		 * Visibility: public.
		 */
		static get OPERATING_SYSTEM_CENTOS()
		{
			return "CentOS";
		}
	
		/**
		 * Operating System None.
		 * Visibility: public.
		 */
		static get OPERATING_SYSTEM_NONE()
		{
			return "none";
		}
	
		/**
		 * Operating System Ubuntu.
		 * Visibility: public.
		 */
		static get OPERATING_SYSTEM_UBUNTU()
		{
			return "Ubuntu";
		}
	
		/**
		 * Operating System Windows.
		 * Visibility: public.
		 */
		static get OPERATING_SYSTEM_WINDOWS()
		{
			return "Windows";
		}
	
		/**
		 * Create operation.
		 * Visibility: public.
		 */
		static get OPERATION_TYPE_CREATE()
		{
			return "create";
		}
	
		/**
		 * Delete operation.
		 * Visibility: public.
		 */
		static get OPERATION_TYPE_DELETE()
		{
			return "delete";
		}
	
		/**
		 * Edit operation.
		 * Visibility: public.
		 */
		static get OPERATION_TYPE_EDIT()
		{
			return "edit";
		}
	
		/**
		 * Start operation.
		 * Visibility: public.
		 */
		static get OPERATION_TYPE_START()
		{
			return "start";
		}
	
		/**
		 * Stop operation.
		 * Visibility: public.
		 */
		static get OPERATION_TYPE_STOP()
		{
			return "stop";
		}
	
		/**
		 * Suspend operation.
		 * Visibility: public.
		 */
		static get OPERATION_TYPE_SUSPEND()
		{
			return "suspend";
		}
	
		/**
		 * Prices key for private datacenters default prices.
		 * Visibility: public.
		 */
		static get PRICES_PRIVATE_DATACENTER_KEY()
		{
			return "private-dc-default";
		}
	
		/**
		 * Synchronous provisioning stage.
		 * Visibility: private.First provisioning stage. Called directly by the deploy functions.
		 * This stage should contain as much validation as possible in order to limit
		 * or eliminate the possibility of failure (out of resources, incomplete
		 * information, etc.) of future asynchronous stages.
		 * There should be as many public error codes as possible for thrown errors to
		 * give the user a chance to fix and retry.
		 */
		static get PROVISION_STAGE_PREPROVISION_SYNCHRONOUS()
		{
			return "preprovision_synchronous";
		}
	
		/**
		 * Finished provision status.
		 * Visibility: public.
		 */
		static get PROVISION_STATUS_FINISHED()
		{
			return "finished";
		}
	
		/**
		 * Not started provision status.
		 * Visibility: public.
		 */
		static get PROVISION_STATUS_NOT_STARTED()
		{
			return "not_started";
		}
	
		/**
		 * Ongoing provision status.
		 * Visibility: public.
		 */
		static get PROVISION_STATUS_ONGOING()
		{
			return "ongoing";
		}
	
		/**
		 * Redis critical token.
		 * Visibility: public.Redis critical token
		 */
		static get REDIS_CRITICAL_TOKEN()
		{
			return "critical";
		}
	
		/**
		 * Invalid redis token.
		 * Visibility: public.
		 */
		static get REDIS_INVALID_TOKEN()
		{
			return "invalid";
		}
	
		/**
		 * Redis token.
		 * Visibility: public.
		 */
		static get REDIS_TOKEN()
		{
			return "token";
		}
	
		/**
		 * Valid redis token.
		 * Visibility: public.
		 */
		static get REDIS_VALID_TOKEN()
		{
			return "valid";
		}
	
		/**
		 * Drive resource reservation.
		 * Visibility: private.
		 */
		static get RESERVATION_DRIVE()
		{
			return "drive";
		}
	
		/**
		 * Active reservation installment.
		 * Visibility: public.
		 */
		static get RESERVATION_INSTALLMENT_STATUS_ACTIVE()
		{
			return "active";
		}
	
		/**
		 * Stopped reservation installment.
		 * Visibility: public.
		 */
		static get RESERVATION_INSTALLMENT_STATUS_STOPPED()
		{
			return "stopped";
		}
	
		/**
		 * Server type resource reservation.
		 * Visibility: private.
		 */
		static get RESERVATION_SERVER_TYPE()
		{
			return "server_type";
		}
	
		/**
		 * Active reservation.
		 * Visibility: public.
		 */
		static get RESERVATION_STATUS_ACTIVE()
		{
			return "active";
		}
	
		/**
		 * Stopped reservation.
		 * Visibility: public.
		 */
		static get RESERVATION_STATUS_STOPPED()
		{
			return "stopped";
		}
	
		/**
		 * Subnet resource reservation.
		 * Visibility: public.
		 */
		static get RESERVATION_SUBNET()
		{
			return "subnet";
		}
	
		/**
		 * Resource type chassis rack.
		 * Visibility: private.
		 */
		static get RESOURCE_TYPE_CHASSIS_RACK()
		{
			return "chassis_rack";
		}
	
		/**
		 * Resource type network_equipment.
		 * Visibility: private.
		 */
		static get RESOURCE_TYPE_NETWORK_EQUIPMENT()
		{
			return "network_equipment";
		}
	
		/**
		 * Resource type server.
		 * Visibility: private.
		 */
		static get RESOURCE_TYPE_SERVER()
		{
			return "server";
		}
	
		/**
		 * Resource type server_interface.
		 * Visibility: private.
		 */
		static get RESOURCE_TYPE_SERVER_INTERFACE()
		{
			return "server_interface";
		}
	
		/**
		 * Resource type subnet_pool.
		 * Visibility: private.
		 */
		static get RESOURCE_TYPE_SUBNET_POOL()
		{
			return "subnet_pool";
		}
	
		/**
		 * Resource type volume.
		 * Visibility: private.
		 */
		static get RESOURCE_TYPE_VOLUME()
		{
			return "volume";
		}
	
		/**
		 * Demand resource utilization.
		 * Visibility: public.
		 */
		static get RESOURCE_UTILIZATION_TYPE_DEMAND()
		{
			return "demand";
		}
	
		/**
		 * Reserve resource utilization.
		 * Visibility: public.
		 */
		static get RESOURCE_UTILIZATION_TYPE_RESERVATION()
		{
			return "reservation";
		}
	
		/**
		 * Server boot type classic.
		 * Visibility: private.Server boot type for servers which boot with classic
		 * BIOS and iPXE. Default value for servers.
		 */
		static get SERVER_BOOT_TYPE_CLASSIC()
		{
			return "classic";
		}
	
		/**
		 * Server boot type UEFI.
		 * Visibility: private.Server boot type for servers which boot using UEFI.
		 */
		static get SERVER_BOOT_TYPE_UEFI()
		{
			return "uefi";
		}
	
		/**
		 * Big data server class.
		 * Visibility: public.Very general workload type designation.
		 */
		static get SERVER_CLASS_BIGDATA()
		{
			return "bigdata";
		}
	
		/**
		 * HDFS server class.
		 * Visibility: public.Very general workload type designation.
		 */
		static get SERVER_CLASS_HDFS()
		{
			return "hdfs";
		}
	
		/**
		 * Unknown server class.
		 * Visibility: public.Very general workload type designation. Unknown class
		 * servers cannot be used.
		 */
		static get SERVER_CLASS_UNKNOWN()
		{
			return "unknown";
		}
	
		/**
		 * Server DHCP status allow.
		 * Visibility: private.DHCP server responds to the provisioned server's
		 * requests with the IPs allocated in the user's infrastructure. The server has
		 * all the interfaces in the client's networks, allowing for requests to be
		 * made, or are in status down on the switch.
		 */
		static get SERVER_DHCP_STATUS_ALLOW()
		{
			return "allow_requests";
		}
	
		/**
		 * Server DHCP status Ansible.
		 * Visibility: private.During Ansible provisioning, the DHCP server treats the
		 * server in a different way compared to the moment when the server is actually
		 * allocated to the client. Thus, it uses special IPs and not the IPs allocated
		 * in the client's infrastructure, when responding to the server's requests.
		 */
		static get SERVER_DHCP_STATUS_ANSIBLE()
		{
			return "ansible_provision";
		}
	
		/**
		 * Server DHCP status deny.
		 * Visibility: private.The DHCP server ignores all DHCP requests from the
		 * server, as it does not belong to a client or isn't doing maintanance
		 * operations in quarantine network (registration, disk wiping).
		 */
		static get SERVER_DHCP_STATUS_DENY()
		{
			return "deny_requests";
		}
	
		/**
		 * Server DHCP status quarantine.
		 * Visibility: private.Server with this DHCP status is in the quarantine
		 * network with its interfaces, making DHCP requests during registering,
		 * reregistering or disk wiping. The DHCP server responds with a quarantine IP
		 * to the server's requests.
		 */
		static get SERVER_DHCP_STATUS_QUARANTINE()
		{
			return "quarantine";
		}
	
		/**
		 * Server disk installed on server.
		 * Visibility: private.
		 */
		static get SERVER_DISK_INSTALLED()
		{
			return "installed";
		}
	
		/**
		 * Server drive not installed on any server.
		 * Visibility: private.
		 */
		static get SERVER_DISK_SPARE()
		{
			return "spare";
		}
	
		/**
		 * Server edit type availability change.
		 * Visibility: private.Notes that server_edit changes only the availability of
		 * the server.
		 */
		static get SERVER_EDIT_TYPE_AVAILABILITY()
		{
			return "availability";
		}
	
		/**
		 * Server edit type complete.
		 * Visibility: private.
		 */
		static get SERVER_EDIT_TYPE_COMPLETE()
		{
			return "complete";
		}
	
		/**
		 * Server edit type IPMI.
		 * Visibility: private.
		 */
		static get SERVER_EDIT_TYPE_IPMI()
		{
			return "ipmi";
		}
	
		/**
		 * Server interface add-on device role HBA.
		 * Visibility: private.The role for the server_interface_add_on_role for add-on
		 * devices which are used as HBAs.
		 */
		static get SERVER_INTERFACE_ADD_ON_HBA()
		{
			return "hba";
		}
	
		/**
		 * Server interface add-on device role offload.
		 * Visibility: private.The role for the server_interface_add_on_role for NIC
		 * devices which are used for iSCSI offloading.
		 *
		 */
		static get SERVER_INTERFACE_ADD_ON_OFFLOAD()
		{
			return "offload";
		}
	
		/**
		 * Null power command. No action.
		 * Visibility: public.Used with some power functions which are both setter and
		 * getter to just interrogate without action.
		 */
		static get SERVER_POWER_STATUS_NONE()
		{
			return "none";
		}
	
		/**
		 * Server powered off.
		 * Visibility: public.Power down chassis into soft off (S4/S5 state). WARNING:
		 * This command does not initiate a clean shutdown of the operating system
		 * prior to powering down the system.
		 */
		static get SERVER_POWER_STATUS_OFF()
		{
			return "off";
		}
	
		/**
		 * Server powered on.
		 * Visibility: public.Power up chassis.
		 */
		static get SERVER_POWER_STATUS_ON()
		{
			return "on";
		}
	
		/**
		 * Server power reset.
		 * Visibility: public.This command will perform a hard reset.
		 */
		static get SERVER_POWER_STATUS_RESET()
		{
			return "reset";
		}
	
		/**
		 * Server power status soft.
		 * Visibility: public.Initiate a soft-shutdown of OS via ACPI. This can be done
		 * in a number of ways, commonly by simulating an overtemperture or by
		 * simulating a power button press. It is necessary for there to be Operating
		 * System support for ACPI and some sort of daemon watching for events for this
		 * soft power to work.
		 */
		static get SERVER_POWER_STATUS_SOFT()
		{
			return "soft";
		}
	
		/**
		 * Server power status unknown.
		 * Visibility: public.Returned when a server is not allocated to an instance,
		 * the instance is not deployed or has an ongoing deploy operation.
		 */
		static get SERVER_POWER_STATUS_UNKNOWN()
		{
			return "unknown";
		}
	
		/**
		 * Available server.
		 * Visibility: private.
		 */
		static get SERVER_STATUS_AVAILABLE()
		{
			return "available";
		}
	
		/**
		 * Reserved available server.
		 * Visibility: private.
		 */
		static get SERVER_STATUS_AVAILABLE_RESERVED()
		{
			return "available_reserved";
		}
	
		/**
		 * Server status cleaning.
		 * Visibility: private.
		 */
		static get SERVER_STATUS_CLEANING()
		{
			return "cleaning";
		}
	
		/**
		 * Server requires cleaning.
		 * Visibility: private.
		 */
		static get SERVER_STATUS_CLEANING_REQUIRED()
		{
			return "cleaning_required";
		}
	
		/**
		 * Server decommissioned.
		 * Visibility: private.The server has been decommissioned and will not be used
		 * further.
		 */
		static get SERVER_STATUS_DECOMISSIONED()
		{
			return "decommissioned";
		}
	
		/**
		 * Defective server status.
		 * Visibility: private.The server has defective components or is just not
		 * working.
		 */
		static get SERVER_STATUS_DEFECTIVE()
		{
			return "defective";
		}
	
		/**
		 * Server is registering or will be registering.
		 * Visibility: private.
		 */
		static get SERVER_STATUS_REGISTERING()
		{
			return "registering";
		}
	
		/**
		 * Server removed from rack.
		 * Visibility: private.The server has been sent to warranty, grinder or has
		 * gone wondering and may never come back!
		 */
		static get SERVER_STATUS_REMOVED_FROM_RACK()
		{
			return "removed_from_rack";
		}
	
		/**
		 * Not available server.
		 * Visibility: private.
		 */
		static get SERVER_STATUS_UNAVAILABLE()
		{
			return "unavailable";
		}
	
		/**
		 * Used server.
		 * Visibility: private.
		 */
		static get SERVER_STATUS_USED()
		{
			return "used";
		}
	
		/**
		 * Server status used registering.
		 * Visibility: private.When reregister is run on a used server, it is put in
		 * this status.
		 */
		static get SERVER_STATUS_USED_REGISTERING()
		{
			return "used_registering";
		}
	
		/**
		 * Server type permits hybrid boot, with legacy as default.
		 * Visibility: private.
		 */
		static get SERVER_TYPE_BOOT_HYBRID_DEFAULT_LEGACY()
		{
			return "hybrid_default_legacy";
		}
	
		/**
		 * Server type permits hybrid boot, with UEFI as default.
		 * Visibility: private.
		 */
		static get SERVER_TYPE_BOOT_HYBRID_DEFAULT_UEFI()
		{
			return "hybrid_default_uefi";
		}
	
		/**
		 * Server type permits legacy boot only.
		 * Visibility: private.
		 */
		static get SERVER_TYPE_BOOT_LEGACY_ONLY()
		{
			return "legacy_only";
		}
	
		/**
		 * Server type permits UEFI boot only.
		 * Visibility: private.
		 */
		static get SERVER_TYPE_BOOT_UEFI_ONLY()
		{
			return "uefi_only";
		}
	
		/**
		 * Active service status.
		 * Visibility: public.
		 */
		static get SERVICE_STATUS_ACTIVE()
		{
			return "active";
		}
	
		/**
		 * Deleted service status.
		 * Visibility: public.
		 */
		static get SERVICE_STATUS_DELETED()
		{
			return "deleted";
		}
	
		/**
		 * Ordered service status.
		 * Visibility: public.
		 */
		static get SERVICE_STATUS_ORDERED()
		{
			return "ordered";
		}
	
		/**
		 * Stopped service status.
		 * Visibility: public.
		 */
		static get SERVICE_STATUS_STOPPED()
		{
			return "stopped";
		}
	
		/**
		 * Suspended service status.
		 * Visibility: public.
		 */
		static get SERVICE_STATUS_SUSPENDED()
		{
			return "suspended";
		}
	
		/**
		 * Shared drive - connection type "connected".
		 * Visibility: public.When an instance array or a container array is attached
		 * to a shared drive and the infrastructure is deployed, this kind of
		 * connection will be made.
		 */
		static get SHARED_DRIVE_CONNECTED()
		{
			return "connected";
		}
	
		/**
		 * Shared drive - connection type "connected".
		 * Visibility: public.
		 */
		static get SHARED_DRIVE_CONNECTED_CONTAINER_ARRAY()
		{
			return "connected_container_array";
		}
	
		/**
		 * Shared drive - connection type "disconnected".
		 * Visibility: private.When an instance array or a container array is detached
		 * from a shared drive (or the shared drive / instance array / container array
		 * belonging to the connection is deleted) and the infrastructure is deployed,
		 * this type of connection will be made.
		 */
		static get SHARED_DRIVE_DISCONNECTED()
		{
			return "disconnected";
		}
	
		/**
		 * Shared drive - connection type "disconnected".
		 * Visibility: public.
		 */
		static get SHARED_DRIVE_DISCONNECTED_CONTAINER_ARRAY()
		{
			return "disconnected_container_array";
		}
	
		/**
		 * Shared drive connection type "will be connected".
		 * Visibility: public.When an instance array or a container array is attached
		 * to a shared drive, this type of connection will be made.
		 */
		static get SHARED_DRIVE_WILL_BE_CONNECTED()
		{
			return "will_be_connected";
		}
	
		/**
		 * Shared drive connection type "will be connected".
		 * Visibility: public.
		 */
		static get SHARED_DRIVE_WILL_BE_CONNECTED_CONTAINER_ARRAY()
		{
			return "will_be_connected_container_array";
		}
	
		/**
		 * Shared drive - connection type "will_be_disconnected".
		 * Visibility: public.When an instance array / container array is detached from
		 * a shared drive (or the shared drive / instance array / container array
		 * belonging to the connection is deleted), this type of connection will be
		 * made.
		 */
		static get SHARED_DRIVE_WILL_BE_DISCONNECTED()
		{
			return "will_be_disconnected";
		}
	
		/**
		 * Shared drive - connection type "will_be_disconnected".
		 * Visibility: public.
		 */
		static get SHARED_DRIVE_WILL_BE_DISCONNECTED_CONTAINER_ARRAY()
		{
			return "will_be_disconnected_container_array";
		}
	
		/**
		 * Solution of type Datalab Spark.
		 * Visibility: public.
		 */
		static get SOLUTION_TYPE_DATALAB_SPARK()
		{
			return "datalab_spark";
		}
	
		/**
		 * DSA algorithm.
		 * Visibility: public.
		 */
		static get SSH_DSA_ALGORITHM_IDENTIFIER()
		{
			return "ssh-dsa";
		}
	
		/**
		 * DSS algorithm.
		 * Visibility: public.
		 */
		static get SSH_DSS_ALGORITHM_IDENTIFIER()
		{
			return "ssh-dss";
		}
	
		/**
		 * OpenSSH SSH key.
		 * Visibility: public.
		 */
		static get SSH_KEY_FORMAT_OPENSSH()
		{
			return "openssh";
		}
	
		/**
		 * PKCS1 SSH key.
		 * Visibility: public.
		 */
		static get SSH_KEY_FORMAT_PKCS1()
		{
			return "pkcs#1";
		}
	
		/**
		 * PKCS8 SSH key.
		 * Visibility: public.
		 */
		static get SSH_KEY_FORMAT_PKCS8()
		{
			return "pkcs#8";
		}
	
		/**
		 * SSH2 SSH key.
		 * Visibility: public.
		 */
		static get SSH_KEY_FORMAT_SSH2()
		{
			return "ssh2";
		}
	
		/**
		 * RSA algorithm.
		 * Visibility: public.
		 */
		static get SSH_RSA_ALGORITHM_IDENTIFIER()
		{
			return "ssh-rsa";
		}
	
		/**
		 * Storage Drive.
		 * Visibility: private.
		 */
		static get STORAGE_DRIVE()
		{
			return "Drive";
		}
	
		/**
		 * Storage Dummy driver.
		 * Visibility: private.
		 */
		static get STORAGE_DRIVER_DUMMY()
		{
			return "dummy_driver";
		}
	
		/**
		 * Storage driver type for FMSA.
		 * Visibility: private.Storage driver type for FMSA
		 */
		static get STORAGE_DRIVER_FMSA()
		{
			return "bigstep_storage";
		}
	
		/**
		 * HP MSA 1040 storage.
		 * Visibility: private.
		 */
		static get STORAGE_DRIVER_HP_MSA_1040()
		{
			return "hp_msa_1040";
		}
	
		/**
		 * Nexenta Version 3 storage driver.
		 * Visibility: private.
		 */
		static get STORAGE_DRIVER_NEXENTA3()
		{
			return "nexenta3";
		}
	
		/**
		 * Nexenta Version 4 storage driver.
		 * Visibility: private.
		 */
		static get STORAGE_DRIVER_NEXENTA4()
		{
			return "nexenta4";
		}
	
		/**
		 * Active storage pool.
		 * Visibility: private.
		 */
		static get STORAGE_POOL_STATUS_ACTIVE()
		{
			return "active";
		}
	
		/**
		 * Deleted storage pool.
		 * Visibility: private.
		 */
		static get STORAGE_POOL_STATUS_DELETED()
		{
			return "deleted";
		}
	
		/**
		 * Storage Template.
		 * Visibility: private.
		 */
		static get STORAGE_TEMPLATE()
		{
			return "Template";
		}
	
		/**
		 * SUBNET_DESTINATION_DISABLED.
		 * Visibility: private.
		 */
		static get SUBNET_DESTINATION_DISABLED()
		{
			return "disabled";
		}
	
		/**
		 * LAN Subnet.
		 * Visibility: public.
		 */
		static get SUBNET_DESTINATION_LAN()
		{
			return "lan";
		}
	
		/**
		 * OOB Subnet.
		 * Visibility: private.
		 */
		static get SUBNET_DESTINATION_OOB()
		{
			return "oob";
		}
	
		/**
		 * SAN Subnet.
		 * Visibility: public.
		 */
		static get SUBNET_DESTINATION_SAN()
		{
			return "san";
		}
	
		/**
		 * Temporay Subnet.
		 * Visibility: private.
		 */
		static get SUBNET_DESTINATION_TMP()
		{
			return "tmp";
		}
	
		/**
		 * WAN Subnet.
		 * Visibility: public.
		 */
		static get SUBNET_DESTINATION_WAN()
		{
			return "wan";
		}
	
		/**
		 * IPv4 Subnet.
		 * Visibility: public.
		 */
		static get SUBNET_TYPE_IPV4()
		{
			return "ipv4";
		}
	
		/**
		 * IPv6 Subnet.
		 * Visibility: public.
		 */
		static get SUBNET_TYPE_IPV6()
		{
			return "ipv6";
		}
	
		/**
		 * Switch device driver 5800.
		 * Visibility: private.
		 */
		static get SWITCH_DEVICE_DRIVER_5800()
		{
			return "hp5800";
		}
	
		/**
		 * Switch device driver 5900.
		 * Visibility: private.
		 */
		static get SWITCH_DEVICE_DRIVER_5900()
		{
			return "hp5900";
		}
	
		/**
		 * Leaf switch type in topology.
		 * Visibility: private.
		 */
		static get SWITCH_DEVICE_LEAF()
		{
			return "leaf";
		}
	
		/**
		 * North switch device.
		 * Visibility: private.North switch device
		 */
		static get SWITCH_DEVICE_NORTH()
		{
			return "north";
		}
	
		/**
		 * Spine switch type in topology.
		 * Visibility: private.
		 */
		static get SWITCH_DEVICE_SPINE()
		{
			return "spine";
		}
	
		/**
		 * Top of rack switch device.
		 * Visibility: private.Top of Rack switch device
		 */
		static get SWITCH_DEVICE_TOR()
		{
			return "tor";
		}
	
		/**
		 * URL Type HDFS.
		 * Visibility: public.
		 */
		static get URL_TYPE_HDFS()
		{
			return "hdfs";
		}
	
		/**
		 * User access level - customer.
		 * Visibility: public.
		 */
		static get USER_ACCESS_LEVEL_CUSTOMER()
		{
			return "customer";
		}
	
		/**
		 * User access level - developer.
		 * Visibility: private.
		 */
		static get USER_ACCESS_LEVEL_DEVELOPER()
		{
			return "developer";
		}
	
		/**
		 * User access level - god.
		 * Visibility: private.Maximum powers, and may change the user access level of
		 * other users!
		 */
		static get USER_ACCESS_LEVEL_GOD()
		{
			return "god";
		}
	
		/**
		 * User access level - intern.
		 * Visibility: private.
		 */
		static get USER_ACCESS_LEVEL_INTERN()
		{
			return "intern";
		}
	
		/**
		 * User access level - sales.
		 * Visibility: private.
		 */
		static get USER_ACCESS_LEVEL_SALES()
		{
			return "sales";
		}
	
		/**
		 * User access level - support.
		 * Visibility: private.
		 */
		static get USER_ACCESS_LEVEL_SUPPORT()
		{
			return "support";
		}
	
		/**
		 * User access level - tester.
		 * Visibility: private.
		 */
		static get USER_ACCESS_LEVEL_TESTER()
		{
			return "tester";
		}
	
		/**
		 * Not verified user e-mail address.
		 * Visibility: public.
		 */
		static get USER_LOGIN_EMAIL_STATUS_NOT_VERIFIED()
		{
			return "not_verified";
		}
	
		/**
		 * Verified user e-mail address.
		 * Visibility: public.
		 */
		static get USER_LOGIN_EMAIL_STATUS_VERIFIED()
		{
			return "verified";
		}
	
		/**
		 * User Plan Type Custom.
		 * Visibility: public.
		 */
		static get USER_PLAN_TYPE_CUSTOM()
		{
			return "custom";
		}
	
		/**
		 * User Plan Type Starter.
		 * Visibility: public.
		 */
		static get USER_PLAN_TYPE_STARTER()
		{
			return "starter";
		}
	
		/**
		 * User Plan Type Starter Redundant.
		 * Visibility: public.
		 */
		static get USER_PLAN_TYPE_STARTER_REDUNDANT()
		{
			return "starter_redundant";
		}
	
		/**
		 * User Plan Type Vanilla.
		 * Visibility: public.
		 */
		static get USER_PLAN_TYPE_VANILLA()
		{
			return "vanilla";
		}
	
		/**
		 * Active user SSH key.
		 * Visibility: public.
		 */
		static get USER_SSH_KEY_STATUS_ACTIVE()
		{
			return "active";
		}
	
		/**
		 * Deleted user SSH key.
		 * Visibility: public.
		 */
		static get USER_SSH_KEY_STATUS_DELETED()
		{
			return "deleted";
		}
	
		/**
		 * User suspend reason custom.
		 * Visibility: public.
		 */
		static get USER_SUSPEND_REASON_CUSTOM()
		{
			return "custom";
		}
	
		/**
		 * User suspend reason unpaid.
		 * Visibility: public.
		 */
		static get USER_SUSPEND_REASON_UNPAID()
		{
			return "unpaid";
		}
	
		/**
		 * User test account keyword identifier.
		 * Visibility: public.It is used to identify the erasable test accounts.
		 */
		static get USER_TEST_ACCOUNT_KEYWORD()
		{
			return "_erasable_";
		}
	
		/**
		 * Admin user.
		 * Visibility: public.
		 */
		static get USER_TYPE_ADMIN()
		{
			return "admin";
		}
	
		/**
		 * Billable user.
		 * Visibility: public.
		 */
		static get USER_TYPE_BILLABLE()
		{
			return "billable";
		}
	
		/**
		 * Volume template boots hybrid, both legacy and UEFI.
		 * Visibility: private.
		 */
		static get VOLUME_TEMPLATE_BOOT_HYBRID()
		{
			return "hybrid";
		}
	
		/**
		 * Volume template boots on legacy only.
		 * Visibility: private.
		 */
		static get VOLUME_TEMPLATE_BOOT_LEGACY_ONLY()
		{
			return "legacy_only";
		}
	
		/**
		 * Volume template boots on uefi only.
		 * Visibility: private.
		 */
		static get VOLUME_TEMPLATE_BOOT_UEFI_ONLY()
		{
			return "uefi_only";
		}
	
		/**
		 * Volume template deprecation status deprecated allow expand.
		 * Visibility: public.Volume template deprecation status deprecated allow expand
		 */
		static get VOLUME_TEMPLATE_DEPRECATION_STATUS_DEPRECATED_ALLOW_EXPAND()
		{
			return "deprecated_allow_expand";
		}
	
		/**
		 * Volume template deprecation status deprecated deny provision.
		 * Visibility: public.Volume template deprecation status deprecated deny
		 * provision
		 */
		static get VOLUME_TEMPLATE_DEPRECATION_STATUS_DEPRECATED_DENY_PROVISION()
		{
			return "deprecated_deny_provision";
		}
	
		/**
		 * Volume template deprecation status not deprecated.
		 * Visibility: public.Volume template deprecation status not deprecated
		 */
		static get VOLUME_TEMPLATE_DEPRECATION_STATUS_NOT_DEPRECATED()
		{
			return "not_deprecated";
		}
	
		/**
		 * Active status volume template.
		 * Visibility: public.
		 */
		static get VOLUME_TEMPLATE_STATUS_ACTIVE()
		{
			return "active";
		}
	
		/**
		 * Deleted status volume template.
		 * Visibility: public.
		 */
		static get VOLUME_TEMPLATE_STATUS_DELETED()
		{
			return "deleted";
		}
}

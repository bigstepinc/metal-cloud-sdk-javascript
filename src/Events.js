/**
 * @class
 */
module.exports = 
class EventTypes
{
	/**
	 * Metal Cloud, API v3.0.1
	 */


	/**
	 * New authenticator enabled.
	 * Severity: security.
	 *
	 * An authenticator was added to the account or the existing one was replaced.
	 *
	 * @returns {number}
	 */
	static get AUTHENTICATOR_ENABLED_NEW()
	{
		return 251;
	}

	/**
	 * Authenticator removed.
	 * Severity: security.
	 *
	 * The authenticator was removed from the account.
	 *
	 * @returns {number}
	 */
	static get AUTHENTICATOR_REMOVED()
	{
		return 252;
	}

	/**
	 * Deploy Agent VLAN Configuration finished.
	 * Severity: success.
	 *
	 * Deploy Agent VLAN Configuration finished.
	 *
	 * @returns {number}
	 */
	static get BSI_AGENT_DEPLOY_CONFIGURATION_FINISHED()
	{
		return 384;
	}

	/**
	 * Agent drive partition finished.
	 * Severity: success.
	 *
	 * Agent drive partitioning has finished on all instances.
	 *
	 * @returns {number}
	 */
	static get BSI_AGENT_DRIVE_PARTITION_FINISHED()
	{
		return 396;
	}

	/**
	 * Agent drive partition format finished.
	 * Severity: success.
	 *
	 * Agent drive partition formatting has finished on all instances.
	 *
	 * @returns {number}
	 */
	static get BSI_AGENT_DRIVE_PARTITION_FORMAT_FINISHED()
	{
		return 397;
	}

	/**
	 * Agent drive partition mount finished.
	 * Severity: success.
	 *
	 * Drive partition mounting has finished on all instances.
	 *
	 * @returns {number}
	 */
	static get BSI_AGENT_DRIVE_PARTITION_MOUNT_FINISHED()
	{
		return 398;
	}

	/**
	 * Agent drive partition unmount finished.
	 * Severity: success.
	 *
	 * Drive partition unmount has finished on all instances.
	 *
	 * @returns {number}
	 */
	static get BSI_AGENT_DRIVE_PARTITION_UNMOUNT_FINISHED()
	{
		return 399;
	}

	/**
	 * BSI Agent Installed.
	 * Severity: success.
	 *
	 * BSI Agent has been successfully installed on all instances.
	 *
	 * @returns {number}
	 */
	static get BSI_AGENT_INSTALLED()
	{
		return 276;
	}

	/**
	 * Agent iSCSI setup finished.
	 * Severity: success.
	 *
	 * iSCSI setup and login has successfully finished on all instances.
	 *
	 * @returns {number}
	 */
	static get BSI_AGENT_ISCSI_SETUP_FINISHED()
	{
		return 395;
	}

	/**
	 * Deploy Agent Live.
	 * Severity: success.
	 *
	 * Deploy Agent Live.
	 *
	 * @returns {number}
	 */
	static get BSI_AGENT_LIVE()
	{
		return 294;
	}

	/**
	 * Reserved servers cleaning finished.
	 * Severity: success.
	 *
	 * .
	 *
	 * @returns {number}
	 */
	static get CLEANING_RESERVED_SERVERS_FINISHED()
	{
		return 197;
	}

	/**
	 * Reserved servers cleaning started.
	 * Severity: info.
	 *
	 * .
	 *
	 * @returns {number}
	 */
	static get CLEANING_RESERVED_SERVERS_STARTED()
	{
		return 196;
	}

	/**
	 * Cluster created.
	 * Severity: info.
	 *
	 * The operation was performed in design mode. A deploy is required in order to
	 * provision hardware resources.
	 *
	 * @returns {number}
	 */
	static get CLUSTER_CREATED()
	{
		return 153;
	}

	/**
	 * Cluster deleted.
	 * Severity: info.
	 *
	 * The operation was performed in design mode. A deploy is required in order
	 * for hardware resources to be deprovisioned.
	 *
	 * @returns {number}
	 */
	static get CLUSTER_DELETED()
	{
		return 156;
	}

	/**
	 * Cluster deployed.
	 * Severity: success.
	 *
	 * Deploy completed for Cluster operation.
	 *
	 * @returns {number}
	 */
	static get CLUSTER_DEPLOYED()
	{
		return 157;
	}

	/**
	 * Cluster edited.
	 * Severity: info.
	 *
	 * The operation was performed in design mode. A deploy is required in order
	 * for the changes to take effect.
	 *
	 * @returns {number}
	 */
	static get CLUSTER_EDITED()
	{
		return 154;
	}

	/**
	 * Cluster software version updated.
	 * Severity: info.
	 *
	 * A new cluster software version was detected. The corresponding cluster
	 * object property has been automatically updated.
	 *
	 * @returns {number}
	 */
	static get CLUSTER_SOFTWARE_VERSION_AUTOMATIC_UPDATE()
	{
		return 249;
	}

	/**
	 * Cluster started.
	 * Severity: info.
	 *
	 * The operation was performed in design mode. A deploy is required in order to
	 * provision hardware resources.
	 *
	 * @returns {number}
	 */
	static get CLUSTER_STARTED()
	{
		return 171;
	}

	/**
	 * Cluster stopped.
	 * Severity: info.
	 *
	 * The operation was performed in design mode. A deploy is required in order
	 * for hardware resources to be deprovisioned.
	 *
	 * @returns {number}
	 */
	static get CLUSTER_STOPPED()
	{
		return 155;
	}

	/**
	 * Cluster suspended.
	 * Severity: info.
	 *
	 * The operation was performed in design mode. A deploy is required in order
	 * for hardware resources to be deprovisioned. All active Drives will remain provisioned.
	 *
	 * @returns {number}
	 */
	static get CLUSTER_SUSPENDED()
	{
		return 206;
	}

	/**
	 * Finished Cluster SaaS linking.
	 * Severity: success.
	 *
	 * .
	 *
	 * @returns {number}
	 */
	static get CLUSTERS_SAAS_LINKING_FINISHED()
	{
		return 239;
	}

	/**
	 * Started Cluster SaaS linking.
	 * Severity: info.
	 *
	 * .
	 *
	 * @returns {number}
	 */
	static get CLUSTERS_SAAS_LINKING_STARTED()
	{
		return 240;
	}

	/**
	 * Finished Cluster SaaS setup.
	 * Severity: success.
	 *
	 * .
	 *
	 * @returns {number}
	 */
	static get CLUSTERS_SAAS_SETUP_FINISHED()
	{
		return 195;
	}

	/**
	 * Started Cluster SaaS setup.
	 * Severity: info.
	 *
	 * .
	 *
	 * @returns {number}
	 */
	static get CLUSTERS_SAAS_SETUP_STARTED()
	{
		return 194;
	}

	/**
	 * ContainerArray created.
	 * Severity: info.
	 *
	 * The operation was performed in design mode. A deploy is required in order to
	 * provision hardware resources.
	 *
	 * @returns {number}
	 */
	static get CONTAINER_ARRAY_CREATED()
	{
		return 215;
	}

	/**
	 * ContainerArray deleted.
	 * Severity: info.
	 *
	 * The operation was performed in design mode. A deploy is required in order
	 * for hardware resources to be deprovisioned.
	 *
	 * @returns {number}
	 */
	static get CONTAINER_ARRAY_DELETED()
	{
		return 220;
	}

	/**
	 * ContainerArray deployed.
	 * Severity: success.
	 *
	 * Deploy completed for ContainerArray operation.
	 *
	 * @returns {number}
	 */
	static get CONTAINER_ARRAY_DEPLOYED()
	{
		return 222;
	}

	/**
	 * ContainerArray edited.
	 * Severity: info.
	 *
	 * The operation was performed in design mode. A deploy is required in order
	 * for the changes to take effect.
	 *
	 * @returns {number}
	 */
	static get CONTAINER_ARRAY_EDITED()
	{
		return 223;
	}

	/**
	 * ContainerArray not connected to WAN.
	 * Severity: warning.
	 *
	 * ContainerArray is not connected to WAN Network.
	 *
	 * @returns {number}
	 */
	static get CONTAINER_ARRAY_NOT_CONNECTED_TO_WAN()
	{
		return 250;
	}

	/**
	 * ContainerArray started.
	 * Severity: info.
	 *
	 * The operation was performed in design mode. A deploy is required in order to
	 * provision hardware resources.
	 *
	 * @returns {number}
	 */
	static get CONTAINER_ARRAY_STARTED()
	{
		return 224;
	}

	/**
	 * ContainerArray stopped.
	 * Severity: info.
	 *
	 * The operation was performed in design mode. A deploy is required in order
	 * for hardware resources to be deprovisioned.
	 *
	 * @returns {number}
	 */
	static get CONTAINER_ARRAY_STOPPED()
	{
		return 225;
	}

	/**
	 * ContainerArray suspended.
	 * Severity: info.
	 *
	 * The operation was performed in design mode. A deploy is required in order
	 * for hardware resources to be deprovisioned.
	 *
	 * @returns {number}
	 */
	static get CONTAINER_ARRAY_SUSPENDED()
	{
		return 226;
	}

	/**
	 * ContainerCluster created.
	 * Severity: info.
	 *
	 * The operation was performed in design mode. A deploy is required in order to
	 * provision hardware resources.
	 *
	 * @returns {number}
	 */
	static get CONTAINER_CLUSTER_CREATED()
	{
		return 254;
	}

	/**
	 * ContainerCluster deleted.
	 * Severity: info.
	 *
	 * The operation was performed in design mode. A deploy is required in order
	 * for hardware resources to be deprovisioned.
	 *
	 * @returns {number}
	 */
	static get CONTAINER_CLUSTER_DELETED()
	{
		return 255;
	}

	/**
	 * ContainerCluster deployed.
	 * Severity: success.
	 *
	 * Deploy completed for ContainerCluster operation.
	 *
	 * @returns {number}
	 */
	static get CONTAINER_CLUSTER_DEPLOYED()
	{
		return 257;
	}

	/**
	 * ContainerCluster edited.
	 * Severity: info.
	 *
	 * The operation was performed in design mode. A deploy is required in order
	 * for the changes to take effect.
	 *
	 * @returns {number}
	 */
	static get CONTAINER_CLUSTER_EDITED()
	{
		return 258;
	}

	/**
	 * ContainerCluster software version updated.
	 * Severity: info.
	 *
	 * A new ContainerCluster software version was detected. The corresponding
	 * cluster object property has been automatically updated.
	 *
	 * @returns {number}
	 */
	static get CONTAINER_CLUSTER_SOFTWARE_VERSION_AUTOMATIC_UPDATE()
	{
		return 266;
	}

	/**
	 * ContainerCluster started.
	 * Severity: info.
	 *
	 * The operation was performed in design mode. A deploy is required in order to
	 * provision hardware resources.
	 *
	 * @returns {number}
	 */
	static get CONTAINER_CLUSTER_STARTED()
	{
		return 259;
	}

	/**
	 * ContainerCluster stopped.
	 * Severity: info.
	 *
	 * The operation was performed in design mode. A deploy is required in order
	 * for hardware resources to be deprovisioned.
	 *
	 * @returns {number}
	 */
	static get CONTAINER_CLUSTER_STOPPED()
	{
		return 260;
	}

	/**
	 * ContainerCluster suspended.
	 * Severity: info.
	 *
	 * The operation was performed in design mode. A deploy is required in order
	 * for hardware resources to be deprovisioned.
	 *
	 * @returns {number}
	 */
	static get CONTAINER_CLUSTER_SUSPENDED()
	{
		return 261;
	}

	/**
	 * Container created.
	 * Severity: info.
	 *
	 * The operation was performed in design mode. A deploy is required in order to
	 * provision hardware resources.
	 *
	 * @returns {number}
	 */
	static get CONTAINER_CREATED()
	{
		return 277;
	}

	/**
	 * Container deleted.
	 * Severity: info.
	 *
	 * The operation was performed in design mode. A deploy is required in order
	 * for hardware resources to be deprovisioned.
	 *
	 * @returns {number}
	 */
	static get CONTAINER_DELETED()
	{
		return 278;
	}

	/**
	 * Container deployed.
	 * Severity: success.
	 *
	 * Deploy completed for Container operation.
	 *
	 * @returns {number}
	 */
	static get CONTAINER_DEPLOYED()
	{
		return 280;
	}

	/**
	 * Container edited.
	 * Severity: info.
	 *
	 * The operation was performed in design mode. A deploy is required in order
	 * for the changes to take effect.
	 *
	 * @returns {number}
	 */
	static get CONTAINER_EDITED()
	{
		return 281;
	}

	/**
	 * ContainerInterface edited.
	 * Severity: info.
	 *
	 * The operation was performed in design mode. A deploy is required in order
	 * for the changes to take effect.
	 *
	 * @returns {number}
	 */
	static get CONTAINER_INTERFACE_EDITED()
	{
		return 286;
	}

	/**
	 * ContainerPlatform created.
	 * Severity: info.
	 *
	 * The operation was performed in design mode. A deploy is required in order to
	 * provision hardware resources.
	 *
	 * @returns {number}
	 */
	static get CONTAINER_PLATFORM_CREATED()
	{
		return 207;
	}

	/**
	 * ContainerPlatform deleted.
	 * Severity: info.
	 *
	 * The operation was performed in design mode. A deploy is required in order
	 * for hardware resources to be deprovisioned.
	 *
	 * @returns {number}
	 */
	static get CONTAINER_PLATFORM_DELETED()
	{
		return 208;
	}

	/**
	 * ContainerPlatform deployed.
	 * Severity: success.
	 *
	 * Deploy completed for ContainerPlatform operation.
	 *
	 * @returns {number}
	 */
	static get CONTAINER_PLATFORM_DEPLOYED()
	{
		return 210;
	}

	/**
	 * ContainerPlatform edited.
	 * Severity: info.
	 *
	 * The operation was performed in design mode. A deploy is required in order
	 * for the changes to take effect.
	 *
	 * @returns {number}
	 */
	static get CONTAINER_PLATFORM_EDITED()
	{
		return 211;
	}

	/**
	 * ContainerPlatform started.
	 * Severity: info.
	 *
	 * The operation was performed in design mode. A deploy is required in order to
	 * provision hardware resources.
	 *
	 * @returns {number}
	 */
	static get CONTAINER_PLATFORM_STARTED()
	{
		return 212;
	}

	/**
	 * ContainerPlatform stopped.
	 * Severity: info.
	 *
	 * The operation was performed in design mode. A deploy is required in order
	 * for hardware resources to be deprovisioned.
	 *
	 * @returns {number}
	 */
	static get CONTAINER_PLATFORM_STOPPED()
	{
		return 213;
	}

	/**
	 * ContainerPlatform suspended.
	 * Severity: info.
	 *
	 * The operation was performed in design mode. A deploy is required in order
	 * for hardware resources to be deprovisioned. Active storage will remain provisioned.
	 *
	 * @returns {number}
	 */
	static get CONTAINER_PLATFORM_SUSPENDED()
	{
		return 214;
	}

	/**
	 * Container started.
	 * Severity: info.
	 *
	 * The operation was performed in design mode. A deploy is required in order to
	 * provision hardware resources.
	 *
	 * @returns {number}
	 */
	static get CONTAINER_STARTED()
	{
		return 290;
	}

	/**
	 * Container stopped.
	 * Severity: info.
	 *
	 * The operation was performed in design mode. A deploy is required in order
	 * for hardware resources to be deprovisioned.
	 *
	 * @returns {number}
	 */
	static get CONTAINER_STOPPED()
	{
		return 291;
	}

	/**
	 * DataLake created.
	 * Severity: info.
	 *
	 * The operation was performed in design mode. A deploy is required in order to
	 * provision hardware resources.
	 *
	 * @returns {number}
	 */
	static get DATA_LAKE_CREATED()
	{
		return 186;
	}

	/**
	 * DataLake deleted.
	 * Severity: info.
	 *
	 * The operation was performed in design mode. A deploy is required in order
	 * for hardware resources to be deprovisioned.
	 *
	 * @returns {number}
	 */
	static get DATA_LAKE_DELETED()
	{
		return 187;
	}

	/**
	 * DataLake deployed.
	 * Severity: success.
	 *
	 * Deploy completed for Data Lake operation.
	 *
	 * @returns {number}
	 */
	static get DATA_LAKE_DEPLOYED()
	{
		return 189;
	}

	/**
	 * DataLake edited.
	 * Severity: info.
	 *
	 * The operation was performed in design mode. A deploy is required in order
	 * for the changes to take effect.
	 *
	 * @returns {number}
	 */
	static get DATA_LAKE_EDITED()
	{
		return 190;
	}

	/**
	 * Data Lake has promotion.
	 * Severity: info.
	 *
	 * Data Lake has a promotion.
	 *
	 * @returns {number}
	 */
	static get DATA_LAKE_HAS_PROMOTION()
	{
		return 299;
	}

	/**
	 * DataLake started.
	 * Severity: info.
	 *
	 * The operation was performed in design mode. A deploy is required in order to
	 * provision hardware resources.
	 *
	 * @returns {number}
	 */
	static get DATA_LAKE_STARTED()
	{
		return 191;
	}

	/**
	 * DataLake stopped.
	 * Severity: info.
	 *
	 * The operation was performed in design mode. A deploy is required in order
	 * for hardware resources to be deprovisioned.
	 *
	 * @returns {number}
	 */
	static get DATA_LAKE_STOPPED()
	{
		return 192;
	}

	/**
	 * DriveArray created.
	 * Severity: info.
	 *
	 * The operation was performed in design mode. A deploy is required in order to
	 * provision hardware resources.
	 *
	 * @returns {number}
	 */
	static get DRIVE_ARRAY_CREATED()
	{
		return 121;
	}

	/**
	 * DriveArray deleted.
	 * Severity: info.
	 *
	 * The operation was performed in design mode. A deploy is required in order
	 * for hardware resources to be deprovisioned.
	 *
	 * @returns {number}
	 */
	static get DRIVE_ARRAY_DELETED()
	{
		return 123;
	}

	/**
	 * DriveArray deployed.
	 * Severity: success.
	 *
	 * Deploy completed for DriveArray operation.
	 *
	 * @returns {number}
	 */
	static get DRIVE_ARRAY_DEPLOYED()
	{
		return 124;
	}

	/**
	 * DriveArray Drive count is zero.
	 * Severity: warning.
	 *
	 * DriveArray is configured with zero Drives.
	 *
	 * @returns {number}
	 */
	static get DRIVE_ARRAY_DRIVE_COUNT_ZERO()
	{
		return 150;
	}

	/**
	 * DriveArray edited.
	 * Severity: info.
	 *
	 * The operation was performed in design mode. A deploy is required in order
	 * for the changes to take effect.
	 *
	 * @returns {number}
	 */
	static get DRIVE_ARRAY_EDITED()
	{
		return 118;
	}

	/**
	 * DriveArray started.
	 * Severity: info.
	 *
	 * The operation was performed in design mode. A deploy is required in order to
	 * provision hardware resources.
	 *
	 * @returns {number}
	 */
	static get DRIVE_ARRAY_STARTED()
	{
		return 119;
	}

	/**
	 * DriveArray stopped.
	 * Severity: info.
	 *
	 * The operation was performed in design mode. A deploy is required in order
	 * for hardware resources to be deprovisioned.
	 *
	 * @returns {number}
	 */
	static get DRIVE_ARRAY_STOPPED()
	{
		return 120;
	}

	/**
	 * Drive attached to Container.
	 * Severity: info.
	 *
	 * A Drive has been successfully attached to a Container.
	 *
	 * @returns {number}
	 */
	static get DRIVE_ATTACHED_CONTAINER()
	{
		return 328;
	}

	/**
	 * Drive attached to Instance.
	 * Severity: info.
	 *
	 * A Drive has been successfully attached to an Instance.
	 *
	 * @returns {number}
	 */
	static get DRIVE_ATTACHED_INSTANCE()
	{
		return 90;
	}

	/**
	 * Drive created.
	 * Severity: info.
	 *
	 * The operation was performed in design mode. A deploy is required in order to
	 * provision hardware resources.
	 *
	 * @returns {number}
	 */
	static get DRIVE_CREATED()
	{
		return 73;
	}

	/**
	 * Drive deleted.
	 * Severity: info.
	 *
	 * The operation was performed in design mode. A deploy is required in order
	 * for hardware resources to be deprovisioned.
	 *
	 * @returns {number}
	 */
	static get DRIVE_DELETED()
	{
		return 75;
	}

	/**
	 * Drive deployed.
	 * Severity: success.
	 *
	 * Deploy completed for Drive operation.
	 *
	 * @returns {number}
	 */
	static get DRIVE_DEPLOYED()
	{
		return 32;
	}

	/**
	 * Drive detached from Container.
	 * Severity: info.
	 *
	 * A Drive has been successfully detached from a Container.
	 *
	 * @returns {number}
	 */
	static get DRIVE_DETACHED_CONTAINER()
	{
		return 329;
	}

	/**
	 * Drive detached from Instance.
	 * Severity: info.
	 *
	 * A Drive has been successfully detached from an instance.
	 *
	 * @returns {number}
	 */
	static get DRIVE_DETACHED_INSTANCE()
	{
		return 94;
	}

	/**
	 * Drive edited.
	 * Severity: info.
	 *
	 * The operation was performed in design mode. A deploy is required in order
	 * for the changes to take effect.
	 *
	 * @returns {number}
	 */
	static get DRIVE_EDITED()
	{
		return 97;
	}

	/**
	 * Drive free space running low.
	 * Severity: warning.
	 *
	 * Free space on the Drive is less than 10% of the total disk size.
	 *
	 * @returns {number}
	 */
	static get DRIVE_FREE_SPACE_RUNNING_LOW()
	{
		return 147;
	}

	/**
	 * Drive was rolled back to a snapshot.
	 * Severity: important.
	 *
	 * The drive was rolled back to a snapshot.
	 *
	 * @returns {number}
	 */
	static get DRIVE_ROLLED_BACK_TO_SNAPSHOT()
	{
		return 185;
	}

	/**
	 * Drive started.
	 * Severity: info.
	 *
	 * The operation was performed in design mode. A deploy is required in order to
	 * provision hardware resources.
	 *
	 * @returns {number}
	 */
	static get DRIVE_STARTED()
	{
		return 115;
	}

	/**
	 * Drive stopped.
	 * Severity: info.
	 *
	 * The operation was performed in design mode. A deploy is required in order
	 * for hardware resources to be deprovisioned.
	 *
	 * @returns {number}
	 */
	static get DRIVE_STOPPED()
	{
		return 114;
	}

	/**
	 * Events deleted.
	 * Severity: info.
	 *
	 * Events were deleted.
	 *
	 * @returns {number}
	 */
	static get EVENTS_DELETED()
	{
		return 271;
	}

	/**
	 * Firewall rules deployed.
	 * Severity: success.
	 *
	 * Firewall rules have been successfully deployed on all instances.
	 *
	 * @returns {number}
	 */
	static get FIREWALL_RULES_DEPLOYED()
	{
		return 238;
	}

	/**
	 * Infrastructure created.
	 * Severity: info.
	 *
	 * The operation was performed in design mode. A deploy is required in order to
	 * provision hardware resources.
	 *
	 * @returns {number}
	 */
	static get INFRASTRUCTURE_CREATED()
	{
		return 76;
	}

	/**
	 * Infrastructure deleted.
	 * Severity: info.
	 *
	 * The operation was performed in design mode. A deploy is required in order
	 * for hardware resources to be deprovisioned.
	 *
	 * @returns {number}
	 */
	static get INFRASTRUCTURE_DELETED()
	{
		return 152;
	}

	/**
	 * Infrastructure deploy blocker triggered.
	 * Severity: warning.
	 *
	 * An infrastructure deploy blocker was triggered and it blocked the deployment
	 * of the infrastructure.
	 *
	 * @returns {number}
	 */
	static get INFRASTRUCTURE_DEPLOY_BLOCKER_TRIGGERED()
	{
		return 323;
	}

	/**
	 * Infrastructure deploy started.
	 * Severity: info.
	 *
	 * The infrastructure deploy is starting.
	 *
	 * @returns {number}
	 */
	static get INFRASTRUCTURE_DEPLOY_STARTED()
	{
		return 127;
	}

	/**
	 * Infrastructure deployed.
	 * Severity: success.
	 *
	 * Deploy completed for every operation on the specified infrastructure.
	 *
	 * @returns {number}
	 */
	static get INFRASTRUCTURE_DEPLOYED()
	{
		return 39;
	}

	/**
	 * Infrastructure design was locked.
	 * Severity: info.
	 *
	 * The infrastructure design was locked. No edits, reverts or deploys are
	 * allowed on the infrastructure.
	 *
	 * @returns {number}
	 */
	static get INFRASTRUCTURE_DESIGN_LOCKED()
	{
		return 262;
	}

	/**
	 * Infrastructure design was unlocked.
	 * Severity: info.
	 *
	 * The infrastructure design was unlocked.
	 *
	 * @returns {number}
	 */
	static get INFRASTRUCTURE_DESIGN_UNLOCKED()
	{
		return 273;
	}

	/**
	 * Infrastructure edited.
	 * Severity: info.
	 *
	 * The operation was performed in design mode. A deploy is required in order
	 * for the changes to take effect.
	 *
	 * @returns {number}
	 */
	static get INFRASTRUCTURE_EDITED()
	{
		return 159;
	}

	/**
	 * Infrastructure experimental priority set.
	 * Severity: info.
	 *
	 * The experimental priority of the infrastructure is set.
	 *
	 * @returns {number}
	 */
	static get INFRASTRUCTURE_EXPERIMENTAL_PRIORITY_SET()
	{
		return 296;
	}

	/**
	 * Infrastructure instances info.
	 * Severity: info.
	 *
	 * Internal info for all instances of the Infrastructure was returned.
	 *
	 * @returns {number}
	 */
	static get INFRASTRUCTURE_INSTANCES_INFO()
	{
		return 297;
	}

	/**
	 * Infrastructure public design member is set.
	 * Severity: info.
	 *
	 * The infrastructure was made a member of public designs. Public designs
	 * members are locked by default.
	 *
	 * @returns {number}
	 */
	static get INFRASTRUCTURE_PUBLIC_DESIGNS_MEMBER_SET()
	{
		return 295;
	}

	/**
	 * Infrastructure started.
	 * Severity: info.
	 *
	 * The operation was performed in design mode. A deploy is required in order to
	 * provision hardware resources.
	 *
	 * @returns {number}
	 */
	static get INFRASTRUCTURE_STARTED()
	{
		return 234;
	}

	/**
	 * Infrastructure stopped.
	 * Severity: info.
	 *
	 * The operation was performed in design mode. A deploy is required in order
	 * for hardware resources to be deprovisioned.
	 *
	 * @returns {number}
	 */
	static get INFRASTRUCTURE_STOPPED()
	{
		return 233;
	}

	/**
	 * Infrastructure user added.
	 * Severity: security.
	 *
	 * A user has been granted administrative privileges over an infrastructure.
	 *
	 * @returns {number}
	 */
	static get INFRASTRUCTURE_USER_ADDED()
	{
		return 77;
	}

	/**
	 * Infrastructure user removed.
	 * Severity: security.
	 *
	 * A user's administrative privileges over an infrastructure have been revoked.
	 *
	 * @returns {number}
	 */
	static get INFRASTRUCTURE_USER_REMOVED()
	{
		return 80;
	}

	/**
	 * Infrastructure user updated.
	 * Severity: security.
	 *
	 * A user's privileges or security settings concerning an infrastructure have
	 * been modified.
	 *
	 * @returns {number}
	 */
	static get INFRASTRUCTURE_USER_UPDATED()
	{
		return 79;
	}

	/**
	 * InstanceArray created.
	 * Severity: info.
	 *
	 * The operation was performed in design mode. A deploy is required in order to
	 * provision hardware resources.
	 *
	 * @returns {number}
	 */
	static get INSTANCE_ARRAY_CREATED()
	{
		return 61;
	}

	/**
	 * InstanceArray deleted.
	 * Severity: info.
	 *
	 * The operation was performed in design mode. A deploy is required in order
	 * for hardware resources to be deprovisioned.
	 *
	 * @returns {number}
	 */
	static get INSTANCE_ARRAY_DELETED()
	{
		return 64;
	}

	/**
	 * InstanceArray deployed.
	 * Severity: success.
	 *
	 * Deploy completed for InstanceArray operation.
	 *
	 * @returns {number}
	 */
	static get INSTANCE_ARRAY_DEPLOYED()
	{
		return 12;
	}

	/**
	 * InstanceArray edited.
	 * Severity: info.
	 *
	 * The operation was performed in design mode. A deploy is required in order
	 * for the changes to take effect.
	 *
	 * @returns {number}
	 */
	static get INSTANCE_ARRAY_EDITED()
	{
		return 65;
	}

	/**
	 * InstanceArray instance count is zero.
	 * Severity: warning.
	 *
	 * InstanceArray is configured with zero instances.
	 *
	 * @returns {number}
	 */
	static get INSTANCE_ARRAY_INSTANCE_COUNT_ZERO()
	{
		return 49;
	}

	/**
	 * InstanceArrayInterface edited.
	 * Severity: info.
	 *
	 * The operation was performed in design mode. A deploy is required in order
	 * for the changes to take effect.
	 *
	 * @returns {number}
	 */
	static get INSTANCE_ARRAY_INTERFACE_EDITED()
	{
		return 88;
	}

	/**
	 * InstanceArray not connected to the WAN Network.
	 * Severity: warning.
	 *
	 * The InstanceArray does not have direct internet connectivity.
	 *
	 * @returns {number}
	 */
	static get INSTANCE_ARRAY_NOT_CONNECTED_TO_WAN()
	{
		return 57;
	}

	/**
	 * InstanceArray started.
	 * Severity: info.
	 *
	 * The operation was performed in design mode. A deploy is required in order to
	 * provision hardware resources.
	 *
	 * @returns {number}
	 */
	static get INSTANCE_ARRAY_STARTED()
	{
		return 99;
	}

	/**
	 * InstanceArray stopped.
	 * Severity: info.
	 *
	 * The operation was performed in design mode. A deploy is required in order
	 * for hardware resources to be deprovisioned.
	 *
	 * @returns {number}
	 */
	static get INSTANCE_ARRAY_STOPPED()
	{
		return 98;
	}

	/**
	 * Instance created.
	 * Severity: info.
	 *
	 * The operation was performed in design mode. A deploy is required in order to
	 * provision hardware resources.
	 *
	 * @returns {number}
	 */
	static get INSTANCE_CREATED()
	{
		return 63;
	}

	/**
	 * Instance deleted.
	 * Severity: info.
	 *
	 * The operation was performed in design mode. A deploy is required in order
	 * for hardware resources to be deprovisioned.
	 *
	 * @returns {number}
	 */
	static get INSTANCE_DELETED()
	{
		return 66;
	}

	/**
	 * Instance deployed.
	 * Severity: success.
	 *
	 * Deploy completed for instance operation.
	 *
	 * @returns {number}
	 */
	static get INSTANCE_DEPLOYED()
	{
		return 8;
	}

	/**
	 * Instance edited.
	 * Severity: info.
	 *
	 * The operation was performed in design mode. A deploy is required in order
	 * for the changes to take effect.
	 *
	 * @returns {number}
	 */
	static get INSTANCE_EDITED()
	{
		return 67;
	}

	/**
	 * InstanceInterface edited.
	 * Severity: info.
	 *
	 * The operation was performed in design mode. A deploy is required in order
	 * for the changes to take effect.
	 *
	 * @returns {number}
	 */
	static get INSTANCE_INTERFACE_EDITED()
	{
		return 71;
	}

	/**
	 * InstanceLicense created.
	 * Severity: info.
	 *
	 * .
	 *
	 * @returns {number}
	 */
	static get INSTANCE_LICENSE_CREATED()
	{
		return 243;
	}

	/**
	 * InstanceLicense deleted.
	 * Severity: info.
	 *
	 * .
	 *
	 * @returns {number}
	 */
	static get INSTANCE_LICENSE_DELETED()
	{
		return 244;
	}

	/**
	 * InstanceLicense deployed.
	 * Severity: success.
	 *
	 * .
	 *
	 * @returns {number}
	 */
	static get INSTANCE_LICENSE_DEPLOYED()
	{
		return 242;
	}

	/**
	 * InstanceLicense edited.
	 * Severity: info.
	 *
	 * .
	 *
	 * @returns {number}
	 */
	static get INSTANCE_LICENSE_EDITED()
	{
		return 248;
	}

	/**
	 * InstanceLicense started.
	 * Severity: info.
	 *
	 * .
	 *
	 * @returns {number}
	 */
	static get INSTANCE_LICENSE_STARTED()
	{
		return 245;
	}

	/**
	 * InstanceLicense stopped.
	 * Severity: info.
	 *
	 * .
	 *
	 * @returns {number}
	 */
	static get INSTANCE_LICENSE_STOPPED()
	{
		return 246;
	}

	/**
	 * InstanceLicense suspended.
	 * Severity: info.
	 *
	 * .
	 *
	 * @returns {number}
	 */
	static get INSTANCE_LICENSE_SUSPENDED()
	{
		return 247;
	}

	/**
	 * Instance might not be bootable.
	 * Severity: warning.
	 *
	 * An Instance is not connected to any Drives that have an OS template installed.
	 *
	 * @returns {number}
	 */
	static get INSTANCE_MIGHT_NOT_BE_BOOTABLE()
	{
		return 236;
	}

	/**
	 * Instance not bootable.
	 * Severity: warning.
	 *
	 * Instance will not be able to boot. An OS template must be selected for the
	 * attached drive in order for the server to be able to boot.
	 *
	 * @returns {number}
	 */
	static get INSTANCE_NOT_BOOTABLE()
	{
		return 47;
	}

	/**
	 * Instance public key retrieved.
	 * Severity: info.
	 *
	 * Public key for instance was retrieved.
	 *
	 * @returns {number}
	 */
	static get INSTANCE_PUBLIC_KEY_RETRIEVED()
	{
		return 268;
	}

	/**
	 * Instance server power status was set.
	 * Severity: info.
	 *
	 * Power status was changed for the server associated to provided instance.
	 *
	 * @returns {number}
	 */
	static get INSTANCE_SERVER_POWER_STATUS_SET()
	{
		return 267;
	}

	/**
	 * Instance server type reservation was created.
	 * Severity: info.
	 *
	 * A new server type reservation for the provided instance was created.
	 *
	 * @returns {number}
	 */
	static get INSTANCE_SERVER_TYPE_RESERVATION_CREATED()
	{
		return 269;
	}

	/**
	 * Instance started.
	 * Severity: info.
	 *
	 * The operation was performed in design mode. A deploy is required in order to
	 * provision hardware resources.
	 *
	 * @returns {number}
	 */
	static get INSTANCE_STARTED()
	{
		return 172;
	}

	/**
	 * Instance stopped.
	 * Severity: info.
	 *
	 * The operation was performed in design mode. A deploy is required in order
	 * for hardware resources to be deprovisioned.
	 *
	 * @returns {number}
	 */
	static get INSTANCE_STOPPED()
	{
		return 101;
	}

	/**
	 * Instance might not be bootable.
	 * Severity: info.
	 *
	 * Instance might not be able to boot. An OS template must be selected for the
	 * attached Drive in order for the server to be able to boot.
	 *
	 * @returns {number}
	 */
	static get INSTANCE_WITH_LOCAL_DISKS_MIGHT_NOT_BE_BOOTABLE()
	{
		return 237;
	}

	/**
	 * IP deployed.
	 * Severity: success.
	 *
	 * Deploy completed for IP operation.
	 *
	 * @returns {number}
	 */
	static get IP_DEPLOYED()
	{
		return 177;
	}

	/**
	 * Network created.
	 * Severity: info.
	 *
	 * The operation was performed in design mode. A deploy is required in order to
	 * provision hardware resources.
	 *
	 * @returns {number}
	 */
	static get NETWORK_CREATED()
	{
		return 81;
	}

	/**
	 * Network deleted.
	 * Severity: info.
	 *
	 * The operation was performed in design mode. A deploy is required in order
	 * for hardware resources to be deprovisioned.
	 *
	 * @returns {number}
	 */
	static get NETWORK_DELETED()
	{
		return 83;
	}

	/**
	 * Network deployed.
	 * Severity: success.
	 *
	 * Deploy completed for network operation.
	 *
	 * @returns {number}
	 */
	static get NETWORK_DEPLOYED()
	{
		return 24;
	}

	/**
	 * Network edited.
	 * Severity: info.
	 *
	 * The operation was performed in design mode. A deploy is required in order
	 * for the changes to take effect.
	 *
	 * @returns {number}
	 */
	static get NETWORK_EDITED()
	{
		return 82;
	}

	/**
	 * Network setup finished.
	 * Severity: success.
	 *
	 * Network devices finished configuring.
	 *
	 * @returns {number}
	 */
	static get NETWORK_SETUP_FINISHED()
	{
		return 135;
	}

	/**
	 * Network setup started.
	 * Severity: info.
	 *
	 * Setting up network devices.
	 *
	 * @returns {number}
	 */
	static get NETWORK_SETUP_STARTED()
	{
		return 134;
	}

	/**
	 * Network started.
	 * Severity: info.
	 *
	 * The operation was performed in design mode. A deploy is required in order to
	 * provision hardware resources.
	 *
	 * @returns {number}
	 */
	static get NETWORK_STARTED()
	{
		return 107;
	}

	/**
	 * Network stopped.
	 * Severity: info.
	 *
	 * The operation was performed in design mode. A deploy is required in order
	 * for hardware resources to be deprovisioned.
	 *
	 * @returns {number}
	 */
	static get NETWORK_STOPPED()
	{
		return 106;
	}

	/**
	 * Remote console accessed.
	 * Severity: security.
	 *
	 * Remote console was accessed.
	 *
	 * @returns {number}
	 */
	static get REMOTE_CONSOLE_ACCESSED()
	{
		return 274;
	}

	/**
	 * Resource reservation created.
	 * Severity: info.
	 *
	 * A new resource reservation was created.
	 *
	 * @returns {number}
	 */
	static get RESOURCE_RESERVATION_CREATED()
	{
		return 331;
	}

	/**
	 * Resource reservation deleted.
	 * Severity: info.
	 *
	 * The resource reservation was deleted.
	 *
	 * @returns {number}
	 */
	static get RESOURCE_RESERVATION_DELETED()
	{
		return 330;
	}

	/**
	 * Resource reservation edited.
	 * Severity: info.
	 *
	 * A resource reservation was edited.
	 *
	 * @returns {number}
	 */
	static get RESOURCE_RESERVATION_EDITED()
	{
		return 332;
	}

	/**
	 * Server type reservation cancelled.
	 * Severity: info.
	 *
	 * .
	 *
	 * @returns {number}
	 */
	static get SERVE()
	{
		return 364;
	}

	/**
	 * Server OOB IP allow.
	 * Severity: info.
	 *
	 * Allow access to server OOB.
	 *
	 * @returns {number}
	 */
	static get SERVER_OOB_IP_ALLOW()
	{
		return 392;
	}

	/**
	 * Server OOB IP disallow.
	 * Severity: info.
	 *
	 * Disallow access to server OOB.
	 *
	 * @returns {number}
	 */
	static get SERVER_OOB_IP_DISALLOW()
	{
		return 393;
	}

	/**
	 * Server hot swap.
	 * Severity: important.
	 *
	 * A server was hot swapped.
	 *
	 * @returns {number}
	 */
	static get SERVER_SWAPPED()
	{
		return 151;
	}

	/**
	 * Server type reservation cancelled.
	 * Severity: info.
	 *
	 * A server type reservation has been cancelled.
	 *
	 * @returns {number}
	 */
	static get SERVER_TYPE_RESERVATION_CANCELLED()
	{
		return 365;
	}

	/**
	 * Server type reservation ownership changed.
	 * Severity: info.
	 *
	 * The ownership of a server type reservation has been changed.
	 *
	 * @returns {number}
	 */
	static get SERVER_TYPE_RESERVATION_OWNERSHIP_CHANGED()
	{
		return 367;
	}

	/**
	 * Server type reservation reactivated.
	 * Severity: info.
	 *
	 * A server type reservation has been reactivated.
	 *
	 * @returns {number}
	 */
	static get SERVER_TYPE_RESERVATION_REACTIVATED()
	{
		return 366;
	}

	/**
	 * A SharedDrive was connected to a ContainerArray.
	 * Severity: info.
	 *
	 * A SharedDrive was connected to a ContainerArray.
	 *
	 * @returns {number}
	 */
	static get SHARED_DRIVE_CONNECTED_TO_CONTAINER_ARRAY()
	{
		return 361;
	}

	/**
	 * A SharedDrive was connected to an InstanceArray.
	 * Severity: info.
	 *
	 * A SharedDrive was connected to an InstanceArray.
	 *
	 * @returns {number}
	 */
	static get SHARED_DRIVE_CONNECTED_TO_INSTANCE_ARRAY()
	{
		return 179;
	}

	/**
	 * SharedDrive created.
	 * Severity: info.
	 *
	 * The operation was performed in design mode. A deploy is required in order to
	 * provision hardware resources.
	 *
	 * @returns {number}
	 */
	static get SHARED_DRIVE_CREATED()
	{
		return 161;
	}

	/**
	 * SharedDrive deleted.
	 * Severity: info.
	 *
	 * The operation was performed in design mode. A deploy is required in order
	 * for hardware resources to be deprovisioned.
	 *
	 * @returns {number}
	 */
	static get SHARED_DRIVE_DELETED()
	{
		return 162;
	}

	/**
	 * SharedDrive deployed.
	 * Severity: success.
	 *
	 * Deploy completed for SharedDrive operation.
	 *
	 * @returns {number}
	 */
	static get SHARED_DRIVE_DEPLOYED()
	{
		return 163;
	}

	/**
	 * A SharedDrive was disconnected from a ContainerArray.
	 * Severity: info.
	 *
	 * A SharedDrive was disconnected from a ContainerArray.
	 *
	 * @returns {number}
	 */
	static get SHARED_DRIVE_DISCONNECTED_FROM_CONTAINER_ARRAY()
	{
		return 362;
	}

	/**
	 * A SharedDrive was disconnected from an InstanceArray.
	 * Severity: info.
	 *
	 * A SharedDrive was disconnected from an InstanceArray.
	 *
	 * @returns {number}
	 */
	static get SHARED_DRIVE_DISCONNECTED_FROM_INSTANCE_ARRAY()
	{
		return 181;
	}

	/**
	 * SharedDrive edited.
	 * Severity: info.
	 *
	 * The operation was performed in design mode. A deploy is required in order
	 * for the changes to take effect.
	 *
	 * @returns {number}
	 */
	static get SHARED_DRIVE_EDITED()
	{
		return 164;
	}

	/**
	 * SharedDrive started.
	 * Severity: info.
	 *
	 * The operation was performed in design mode. A deploy is required in order to
	 * provision hardware resources.
	 *
	 * @returns {number}
	 */
	static get SHARED_DRIVE_STARTED()
	{
		return 165;
	}

	/**
	 * SharedDrive stopped.
	 * Severity: info.
	 *
	 * The operation was performed in design mode. A deploy is required in order
	 * for hardware resources to be deprovisioned.
	 *
	 * @returns {number}
	 */
	static get SHARED_DRIVE_STOPPED()
	{
		return 167;
	}

	/**
	 * A SharedDrive will be connected to a ContainerArray.
	 * Severity: info.
	 *
	 * The SharedDrive will be connected to a ContainerArray.
	 *
	 * @returns {number}
	 */
	static get SHARED_DRIVE_WILL_BE_CONNECTED_TO_CONTAINER_ARRAY()
	{
		return 359;
	}

	/**
	 * A SharedDrive will be connected to an InstanceArray.
	 * Severity: info.
	 *
	 * The SharedDrive will be connected to an InstanceArray.
	 *
	 * @returns {number}
	 */
	static get SHARED_DRIVE_WILL_BE_CONNECTED_TO_INSTANCE_ARRAY()
	{
		return 178;
	}

	/**
	 * A SharedDrive will be disconnected from a ContainerArray.
	 * Severity: info.
	 *
	 * A SharedDrive will be disconnected from a ContainerArray.
	 *
	 * @returns {number}
	 */
	static get SHARED_DRIVE_WILL_BE_DISCONNECTED_FROM_CONTAINER_ARRAY()
	{
		return 360;
	}

	/**
	 * A SharedDrive will be disconnected from an InstanceArray.
	 * Severity: info.
	 *
	 * A SharedDrive will be disconnected from an InstanceArray.
	 *
	 * @returns {number}
	 */
	static get SHARED_DRIVE_WILL_BE_DISCONNECTED_FROM_INSTANCE_ARRAY()
	{
		return 180;
	}

	/**
	 * Snapshot created.
	 * Severity: success.
	 *
	 * A snapshot was created from a drive.
	 *
	 * @returns {number}
	 */
	static get SNAPSHOT_CREATED()
	{
		return 183;
	}

	/**
	 * Snapshot deleted.
	 * Severity: important.
	 *
	 * A snapshot was deleted.
	 *
	 * @returns {number}
	 */
	static get SNAPSHOT_DELETED()
	{
		return 184;
	}

	/**
	 * Storage pool created.
	 * Severity: info.
	 *
	 * A new storage pool was created.
	 *
	 * @returns {number}
	 */
	static get STORAGE_POOL_CREATED()
	{
		return 333;
	}

	/**
	 * Storage pool deleted.
	 * Severity: info.
	 *
	 * A storage pool was deleted.
	 *
	 * @returns {number}
	 */
	static get STORAGE_POOL_DELETED()
	{
		return 334;
	}

	/**
	 * Storage pool experimental set.
	 * Severity: info.
	 *
	 * The storage_pool_is_experimental was updated.
	 *
	 * @returns {number}
	 */
	static get STORAGE_POOL_EXPERIMENTAL_SET()
	{
		return 335;
	}

	/**
	 * Storage Pool IQN Cleaned.
	 * Severity: info.
	 *
	 * The iscsi initiators that are no longer used in storage was deleted.
	 *
	 * @returns {number}
	 */
	static get STORAGE_POOL_IQN_CLEANED()
	{
		return 336;
	}

	/**
	 * Storage Pool Maintenance Set.
	 * Severity: info.
	 *
	 * The flag storage_pool_in_maintenance was set.
	 *
	 * @returns {number}
	 */
	static get STORAGE_POOL_MAINTENANCE_SET()
	{
		return 337;
	}

	/**
	 * Subnet cleared.
	 * Severity: info.
	 *
	 * Subnet's IP addresses were deallocated.
	 *
	 * @returns {number}
	 */
	static get SUBNET_CLEARED()
	{
		return 105;
	}

	/**
	 * Subnet created.
	 * Severity: info.
	 *
	 * The operation was performed in design mode. A deploy is required in order to
	 * provision hardware resources.
	 *
	 * @returns {number}
	 */
	static get SUBNET_CREATED()
	{
		return 85;
	}

	/**
	 * Subnet deleted.
	 * Severity: info.
	 *
	 * The operation was performed in design mode. A deploy is required in order
	 * for hardware resources to be deprovisioned.
	 *
	 * @returns {number}
	 */
	static get SUBNET_DELETED()
	{
		return 86;
	}

	/**
	 * Subnet deployed.
	 * Severity: success.
	 *
	 * Deploy completed for Subnet operation.
	 *
	 * @returns {number}
	 */
	static get SUBNET_DEPLOYED()
	{
		return 28;
	}

	/**
	 * Subnet edited.
	 * Severity: info.
	 *
	 * The operation was performed in design mode. A deploy is required in order
	 * for the changes to take effect.
	 *
	 * @returns {number}
	 */
	static get SUBNET_EDITED()
	{
		return 84;
	}

	/**
	 * Subnet needs start.
	 * Severity: warning.
	 *
	 * At least one instance interface is associated to a stopped subnet. Start the
	 * subnet and deploy.
	 *
	 * @returns {number}
	 */
	static get SUBNET_NEEDS_START()
	{
		return 149;
	}

	/**
	 * OOB subnet created.
	 * Severity: info.
	 *
	 * An OOB subnet has been successfully created.
	 *
	 * @returns {number}
	 */
	static get SUBNET_OOB_CREATED()
	{
		return 379;
	}

	/**
	 * OOB subnet deleted.
	 * Severity: info.
	 *
	 * An OOB subnet has been successfully deleted.
	 *
	 * @returns {number}
	 */
	static get SUBNET_OOB_DELETED()
	{
		return 380;
	}

	/**
	 * Subnet pool created.
	 * Severity: info.
	 *
	 * A subnet pool has been successfully created.
	 *
	 * @returns {number}
	 */
	static get SUBNET_POOL_CREATED()
	{
		return 377;
	}

	/**
	 * Subnet pool deleted.
	 * Severity: info.
	 *
	 * A subnet pool has been successfully deleted.
	 *
	 * @returns {number}
	 */
	static get SUBNET_POOL_DELETED()
	{
		return 378;
	}

	/**
	 * Subnet started.
	 * Severity: info.
	 *
	 * The operation was performed in design mode. A deploy is required in order to
	 * provision hardware resources.
	 *
	 * @returns {number}
	 */
	static get SUBNET_STARTED()
	{
		return 174;
	}

	/**
	 * Subnet stopped.
	 * Severity: info.
	 *
	 * The operation was performed in design mode. A deploy is required in order
	 * for hardware resources to be deprovisioned.
	 *
	 * @returns {number}
	 */
	static get SUBNET_STOPPED()
	{
		return 100;
	}

	/**
	 * Switch device network allocated primary subnet.
	 * Severity: info.
	 *
	 * Primary WAN IPv4 subnet was allocated for a network from the infrastructure switches.
	 *
	 * @returns {number}
	 */
	static get SWITCH_DEVICE_NETWORK_ALLOCATED_PRIMARY_SUBNET()
	{
		return 338;
	}

	/**
	 * Threshold created.
	 * Severity: info.
	 *
	 * A threshold was created.
	 *
	 * @returns {number}
	 */
	static get THRESHOLD_CREATED()
	{
		return 401;
	}

	/**
	 * Threshold deleted.
	 * Severity: info.
	 *
	 * A threshold was deleted.
	 *
	 * @returns {number}
	 */
	static get THRESHOLD_DELETED()
	{
		return 405;
	}

	/**
	 * Threshold edited.
	 * Severity: info.
	 *
	 * A threshold was edited.
	 *
	 * @returns {number}
	 */
	static get THRESHOLD_EDITED()
	{
		return 402;
	}

	/**
	 * Threshold infrastructure on-demand and metered costs notification sent.
	 * Severity: info.
	 *
	 * A notification was sent to a user for a threshold of type infrastructure_on_demand_and_metered_costs.
	 *
	 * @returns {number}
	 */
	static get THRESHOLD_INFRASTRUCTURE_ON_DEMAND_AND_METERED_COSTS_NOTIFICATION_SENT()
	{
		return 404;
	}

	/**
	 * Threshold network traffic per billing cycle notification sent.
	 * Severity: info.
	 *
	 * A notification was sent to a user for a network traffic threshold.
	 *
	 * @returns {number}
	 */
	static get THRESHOLD_NETWORK_TRAFFIC_NOTIFICATION_SENT()
	{
		return 403;
	}

	/**
	 * User access level set.
	 * Severity: info.
	 *
	 * The access level for a user has been changed.
	 *
	 * @returns {number}
	 */
	static get USER_ACCESS_LEVEL_SET()
	{
		return 368;
	}

	/**
	 * User API key regenerated.
	 * Severity: security.
	 *
	 * An user's API key was regenerated.
	 *
	 * @returns {number}
	 */
	static get USER_API_KEY_REGENERATED()
	{
		return 110;
	}

	/**
	 * User authenticated with password.
	 * Severity: security.
	 *
	 * An user has been authenticated using his password.
	 *
	 * @returns {number}
	 */
	static get USER_AUTHENTICATED_PASSWORD()
	{
		return 109;
	}

	/**
	 * User created.
	 * Severity: security.
	 *
	 * A user has been successfully created.
	 *
	 * @returns {number}
	 */
	static get USER_CREATED()
	{
		return 93;
	}

	/**
	 * User delegate added.
	 * Severity: security.
	 *
	 * A user has delegated another user to be his representative. The delegate can
	 * now create and deploy infrastructures on behalf of the represented user.
	 *
	 * @returns {number}
	 */
	static get USER_DELEGATE_ADDED()
	{
		return 91;
	}

	/**
	 * User delegate removed.
	 * Severity: security.
	 *
	 * A user is no longer the delegate of another user.
	 *
	 * @returns {number}
	 */
	static get USER_DELEGATE_REMOVED()
	{
		return 92;
	}

	/**
	 * User JWT salt regenerated.
	 * Severity: security.
	 *
	 * An user's JWT salt was regenerated. This invalidates all logged-in existing sessions.
	 *
	 * @returns {number}
	 */
	static get USER_JWT_SALT_REGENERATED()
	{
		return 182;
	}

	/**
	 * User login email updated via verification URL.
	 * Severity: security.
	 *
	 * The login email change verification URL was accessed, and the user's login
	 * email address has been updated, while the user was logged-in already. The
	 * login email change does not happen if the user is not authenticated when
	 * accessing the URL.
	 *
	 * @returns {number}
	 */
	static get USER_LOGIN_EMAIL_UPDATED_VERIFICATION_URL()
	{
		return 108;
	}

	/**
	 * User password changed.
	 * Severity: security.
	 *
	 * The user's password has been updated.
	 *
	 * @returns {number}
	 */
	static get USER_PASSWORD_CHANGED()
	{
		return 111;
	}

	/**
	 * Promotion added to user.
	 * Severity: info.
	 *
	 * A promotion has been added to the user.
	 *
	 * @returns {number}
	 */
	static get USER_PROMOTION_ADD()
	{
		return 318;
	}

	/**
	 * Promotion removed from user.
	 * Severity: info.
	 *
	 * A promotion has been removed from the user.
	 *
	 * @returns {number}
	 */
	static get USER_REMOVE_PROMOTION()
	{
		return 319;
	}

	/**
	 * User SSH key successfully created.
	 * Severity: security.
	 *
	 * The user's SSH key has been successfully created.
	 *
	 * @returns {number}
	 */
	static get USER_SSH_KEY_CREATED()
	{
		return 59;
	}

	/**
	 * User SSH key deleted.
	 * Severity: security.
	 *
	 * The user's SSH key has been successfully deleted.
	 *
	 * @returns {number}
	 */
	static get USER_SSH_KEY_DELETED()
	{
		return 89;
	}

	/**
	 * User suspended.
	 * Severity: important.
	 *
	 * A suspend reason has been created for a specific owner account.
	 *
	 * @returns {number}
	 */
	static get USER_SUSPENDED()
	{
		return 218;
	}

	/**
	 * User unsuspended.
	 * Severity: important.
	 *
	 * A suspend reason has been removed for a specific owner account. Unless all
	 * suspend reasons are removed, the account remains suspended.
	 *
	 * @returns {number}
	 */
	static get USER_UNSUSPENDED()
	{
		return 219;
	}
};
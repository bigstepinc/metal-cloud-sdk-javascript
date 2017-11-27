const ExtendableError = require("extendable-error-class");

/**
 * @class
 * @extends ExtendableError
 */
class Exception extends ExtendableError
{
	constructor(strMessage, nCode)
	{
		super(strMessage);

		this.strMessage = strMessage;
		this.nCode = nCode;
	}

	/**
	 * Metal Cloud, API v2.13
	 */

	/**
	 * API key mismatch.
	 * @public
	 *
	 * The API key provided doesn't match the user's API key.
	 *
	 * @returns {number}
	 */
	static get API_KEY_MISMATCH()
	{
		return 272;
	}

	/**
	 * API key not set.
	 * @public
	 *
	 * .
	 *
	 * @returns {number}
	 */
	static get API_KEY_NOT_FOUND()
	{
		return 322;
	}

	/**
	 * One time password rejected.
	 * @public
	 *
	 * The provided authenticator one time password is not valid or is expired.
	 * Make sure the system time is set correctly.
	 *
	 * @returns {number}
	 */
	static get AUTHENTICATOR_OTP_REJECTED()
	{
		return 293;
	}

	/**
	 * No bootable Drive found during boot process.
	 * @private
	 *
	 * This error is thrown during the boot process, if an Instance doesn't have a
	 * bootable Drive attached to it.
	 * It is then processed by the dhcp_public_url endpoint and an appropriate
	 * message is shown on the iSCSI console (by output of iSCSI script), which can
	 * be seen via KVM.
	 *
	 * @returns {number}
	 */
	static get BOOT_BOOTABLE_DRIVES_NOT_FOUND()
	{
		return 5;
	}

	/**
	 * Cluster instance array isn't attached to WAN.
	 * @public
	 *
	 * The instance array does not have any interfaces attached to a WAN network,
	 * for provisioning to work.
	 *
	 * @returns {number}
	 */
	static get CLUSTER_INSTANCE_ARRAY_HAS_NO_WAN_INTERFACE()
	{
		return 241;
	}

	/**
	 * Cannot associate one Cluster's products with another.
	 * @public
	 *
	 * Elements created on one Cluster cannot be used on another Cluster. A Drive
	 * created on Cluster A cannot be attached to an Instance belonging to Cluster
	 * B. API calls that receive this error should create new elements for use with
	 * the intended Cluster.
	 *
	 * @returns {number}
	 */
	static get CLUSTER_MIXING_NOT_ALLOWED()
	{
		return 274;
	}

	/**
	 * Invalid value given to the bKeepDetachingDrives flag.
	 * @public
	 *
	 * The number of Instances in an InstanceArray or ContainerArray was reduced
	 * but the bKeepDetachingDrives flag was not set to true or false. The flag is
	 * required in order to know if the detaching Drives will be kept or deleted.
	 *
	 * @returns {number}
	 */
	static get COMPUTE_NODE_ARRAY_EDIT_DETACHING_DRIVES_INVALID_VALUE()
	{
		return 321;
	}

	/**
	 * Not allowed to attach network.
	 * @public
	 *
	 * This error is thrown when an attempt to connect a container array to a
	 * network is made. Container array interfaces cannot be attached or detached
	 * to networks. They are already connected to the WAN and the SAN and are
	 * managed automatically.
	 *
	 * @returns {number}
	 */
	static get CONTAINER_ARRAY_INTERFACE_NETWORK_ATTACH_NOT_ALLOWED()
	{
		return 282;
	}

	/**
	 * Not allowed to detach network.
	 * @public
	 *
	 * This error is thrown when an attempt to detach a container array from a
	 * network is made. Container array interfaces cannot be attached or detached
	 * to networks. They are already connected to the WAN and the SAN and are
	 * managed automatically.
	 *
	 * @returns {number}
	 */
	static get CONTAINER_ARRAY_INTERFACE_NETWORK_DETACH_NOT_ALLOWED()
	{
		return 283;
	}

	/**
	 * The ContainerPlatform hardware configuration cannot support the resources
	 * demanded by its children.
	 * @public
	 *
	 * .
	 *
	 * @returns {number}
	 */
	static get CONTAINER_PLATFORM_NOT_ENOUGH_RESOURCES()
	{
		return 312;
	}

	/**
	 * The total size of all Persistent Directories on the ContainerPlatform
	 * exceeds the size of the data volume.
	 * @public
	 *
	 * .
	 *
	 * @returns {number}
	 */
	static get CONTAINER_PLATFORM_NOT_ENOUGH_SPACE_FOR_PERSISTENT_DIRECTORIES()
	{
		return 313;
	}

	/**
	 * Cookie type provided is not allowed.
	 * @private
	 *
	 * .
	 *
	 * @returns {number}
	 */
	static get COOKIE_TYPE_NOT_ALLOWED()
	{
		return 280;
	}

	/**
	 * Data loss has not been confirmed.
	 * @public
	 *
	 * Data loss has not been confirmed.
	 *
	 * @returns {number}
	 */
	static get DATA_LOSS_NOT_CONFIRMED()
	{
		return 263;
	}

	/**
	 * Datacenter not found.
	 * @public
	 *
	 * .
	 *
	 * @returns {number}
	 */
	static get DATACENTER_NOT_FOUND()
	{
		return 269;
	}

	/**
	 * No DHCP lease exists for MAC address.
	 * @private
	 *
	 * This error is thrown when a DHCP request is received from a server with a
	 * specified MAC address that does not have a provisioned IP address, or has an
	 * already allocated DHCP quarantine lease which does not contain information
	 * about the switch the server is plugged into.
	 *
	 * @returns {number}
	 */
	static get DHCP_LEASE_COULD_NOT_FIND_FOR_MAC()
	{
		return 14;
	}

	/**
	 * Invalid disk type.
	 * @public
	 *
	 * Servers can have their configuration changed whenever needed. This error is
	 * thrown when a search for a specific server configuration is made but the
	 * provided disk type is invalid. API calls that receive this error should
	 * obtain a list of available physical disk types before trying again.
	 *
	 * @returns {number}
	 */
	static get DISK_TYPE_INVALID()
	{
		return 281;
	}

	/**
	 * DNS label reserved.
	 * @public
	 *
	 * When creating or editing an Infrastructure element a custom label can be
	 * provided for ease of use. The label of a product cannot be one of these
	 * reserved keywords: "clusters","drive-arrays","drives","infrastructures",
	 * "instance-arrays","instances","ips","networks","data-lakes","shared-drives",
	 * "snapshots","drive-snapshots","subnets","volume-templates", or "if0" to
	 * "if100". API calls that receive this error should change the initial label
	 * and attempt the operation again.
	 *
	 * @returns {number}
	 */
	static get DNS_LABEL_RESERVED()
	{
		return 243;
	}

	/**
	 * Domain label already in use.
	 * @public
	 *
	 * When creating or editing an Infrastructure element a custom label can be
	 * provided for ease of use. This error is thrown when the specified label
	 * already exists on an element belonging to the same Infrastructure, to avoid
	 * confusion. API calls that receive this error should change the label and try
	 * the operation again.
	 *
	 * @returns {number}
	 */
	static get DOMAIN_LABEL_ALREADY_IN_USE()
	{
		return 197;
	}

	/**
	 * DNS domain label invalid.
	 * @public
	 *
	 * When creating or editing an Infrastructure element a custom label can be
	 * provided for ease of use. This error is thrown when an invalid label is provided.
	 * A domain label has to:
	 *   - be between 1 and 63 characters long
	 *   - start with a letter
	 *   - end with a letter or a digit
	 *   - contain only letters, digits and hyphens(-).
	 *
	 * @returns {number}
	 */
	static get DOMAIN_LABEL_INVALID()
	{
		return 199;
	}

	/**
	 * Unable to resolve subdomain label.
	 * @public
	 *
	 * When creating or editing an Infrastructure element a custom label can be
	 * provided for ease of use. This error is thrown when the provided subdomain
	 * label of an Infrastructure element cannot be resolved. API calls that
	 * receive this error should reobtain the element's label and try again.
	 *
	 * @returns {number}
	 */
	static get DOMAIN_LABEL_UNABLE_TO_RESOLVE()
	{
		return 198;
	}

	/**
	 * Drive Array count data safety restriction.
	 * @public
	 *
	 * When shrinking a DriveArray, excess hardware resources are unallocated. To
	 * ensure data safety, attached Drives can only be deleted selectively using
	 * the drive_delete() function.
	 *
	 * @returns {number}
	 */
	static get DRIVE_ARRAY_COUNT_DATA_SAFETY_RESTRICTION()
	{
		return 224;
	}

	/**
	 * Drive array cannot be detached from the instance array or the container array.
	 * @public
	 *
	 * The DriveArray cannot be detached from the InstanceArray or ContainerArray.
	 * The DriveArray belongs to the same Cluster or ContainerCluster as the
	 * InstanceArray or ContainerArray.
	 *
	 * @returns {number}
	 */
	static get DRIVE_ARRAY_DETACH_NOT_ALLOWED()
	{
		return 320;
	}

	/**
	 * Drive array cannot be detached from instance array.
	 * @public
	 *
	 * The Drive Array and Instance Array belong to the same Cluster and cannot be detached.
	 *
	 * @returns {number}
	 */
	static get DRIVE_ARRAY_INSTANCE_ARRAY_DETACH_NOT_ALLOWED()
	{
		return 240;
	}

	/**
	 * Drive array is already attached.
	 * @public
	 *
	 * The specified DriveArray is already attached to another InstanceArray.
	 * Detach it or find a free DriveArray before trying again.
	 *
	 * @returns {number}
	 */
	static get DRIVE_ARRAY_IS_ATTACHED()
	{
		return 203;
	}

	/**
	 * A DriveArray cannot be attached to both an InstanceArray and a ContainerArray.
	 * @public
	 *
	 * The specified DriveArray is already attached to an InstanceArray or a ContainerArray.
	 *
	 * @returns {number}
	 */
	static get DRIVE_ARRAY_MULTIPLE_ATTACH_NOT_ALLOWED()
	{
		return 319;
	}

	/**
	 * A Drive cannot be attached to an instance that is set to be deleted.
	 * @public
	 *
	 * A Drive cannot be attached to an Instance that is set to be deleted. Cancel
	 * the delete operation or choose another Instance and try again.
	 *
	 * @returns {number}
	 */
	static get DRIVE_CANNOT_BE_ATTACHED_TO_A_DELETED_INSTANCE()
	{
		return 228;
	}

	/**
	 * Drive is not attached.
	 * @public
	 *
	 * The Drive is not attached to an Instance. A Drive that is not already
	 * attached to an Instance does not support the "drive_detach_instance" operation.
	 *
	 * @returns {number}
	 */
	static get DRIVE_IS_NOT_ATTACHED()
	{
		return 111;
	}

	/**
	 * Drive not active.
	 * @public
	 *
	 * Drives are required to be active for certain operations to function
	 * properly. Make sure the Drive has its service status set to active before
	 * trying again.
	 *
	 * @returns {number}
	 */
	static get DRIVE_NOT_ACTIVE()
	{
		return 80;
	}

	/**
	 * Drive size provided is invalid.
	 * @public
	 *
	 * The Drive size provided for an edit operation is invalid. The new size
	 * cannot be less than the original size of the Drive, greater than the maximum
	 * allowed or less than the minimum allowed.
	 *
	 * @returns {number}
	 */
	static get DRIVE_SIZE_INVALID()
	{
		return 91;
	}

	/**
	 * Edit made using an expired object.
	 * @public
	 *
	 * If multiple clients try to edit a product at the same time, only the first
	 * edit operation will succeed. The rest of the attempts receive this error in
	 * order not to overwrite the recently made changes. API calls that received
	 * this error should take the new context into account, and then obtain a new
	 * product operation object, edit it, and try again, if the changes should
	 * still be applied.
	 *
	 * @returns {number}
	 */
	static get EDIT_MADE_WITH_EXPIRED_OBJECT()
	{
		return 257;
	}

	/**
	 * Email address already changed.
	 * @public
	 *
	 * .
	 *
	 * @returns {number}
	 */
	static get EMAIL_ADDRESS_ALREADY_CHANGED()
	{
		return 252;
	}

	/**
	 * Invalid email address.
	 * @public
	 *
	 * Invalid RFC 5321, 5322 and 2821 email address. It is possible for some valid
	 * addresses to be rejected because some RFC specifications are not implemented
	 * or not allowed (the domain part is not allowed to be an IP address, the
	 * domain must have a IANA root and cannot be a simple hostname, comments are
	 * not supported and other limitations).
	 *
	 * @returns {number}
	 */
	static get EMAIL_ADDRESS_INVALID()
	{
		return 54;
	}

	/**
	 * Event not found.
	 * @public
	 *
	 * The event to be operated on was not found.
	 *
	 * @returns {number}
	 */
	static get EVENT_NOT_FOUND()
	{
		return 148;
	}

	/**
	 * Feature not available.
	 * @public
	 *
	 * A specific application or API feature is temporarily, permanently or
	 * conditionally disabled.
	 *
	 * @returns {number}
	 */
	static get FEATURE_NOT_AVAILABLE()
	{
		return 256;
	}

	/**
	 * FileSystemNavigator: Access control exception.
	 * @public
	 *
	 * .
	 *
	 * @returns {number}
	 */
	static get FILESYSTEM_NAVIGATOR_ACCESS_CONTROL_EXCEPTION()
	{
		return 303;
	}

	/**
	 * FileSystemNavigator: Authentication failure.
	 * @public
	 *
	 * .
	 *
	 * @returns {number}
	 */
	static get FILESYSTEM_NAVIGATOR_AUTHENTICATION_FAILURE()
	{
		return 309;
	}

	/**
	 * FileSystemNavigator: Could not resolve URL.
	 * @public
	 *
	 * .
	 *
	 * @returns {number}
	 */
	static get FILESYSTEM_NAVIGATOR_COULD_NOT_RESOLVE_URL()
	{
		return 310;
	}

	/**
	 * FileSystemNavigator: File already exists.
	 * @public
	 *
	 * .
	 *
	 * @returns {number}
	 */
	static get FILESYSTEM_NAVIGATOR_FILE_ALREADY_EXISTS()
	{
		return 308;
	}

	/**
	 * FileSystemNavigator: File not found.
	 * @public
	 *
	 * .
	 *
	 * @returns {number}
	 */
	static get FILESYSTEM_NAVIGATOR_FILE_NOT_FOUND()
	{
		return 304;
	}

	/**
	 * FileSystemNavigator: Illegal argument.
	 * @public
	 *
	 * .
	 *
	 * @returns {number}
	 */
	static get FILESYSTEM_NAVIGATOR_ILLEGAL_ARGUMENT()
	{
		return 301;
	}

	/**
	 * FileSystemNavigator: IO exception.
	 * @public
	 *
	 * .
	 *
	 * @returns {number}
	 */
	static get FILESYSTEM_NAVIGATOR_IO_EXCEPTION()
	{
		return 307;
	}

	/**
	 * FileSystemNavigator: Offset greater than length.
	 * @public
	 *
	 * Error thrown when trying to read a resource with an offset greater than the
	 * resource's length.
	 *
	 * @returns {number}
	 */
	static get FILESYSTEM_NAVIGATOR_OFFSET_GREATER_THAN_LENGTH()
	{
		return 314;
	}

	/**
	 * FileSystemNavigator: Runtime exception.
	 * @public
	 *
	 * .
	 *
	 * @returns {number}
	 */
	static get FILESYSTEM_NAVIGATOR_RUNTIME_EXCEPTION()
	{
		return 306;
	}

	/**
	 * FileSystemNavigator: Security exception.
	 * @public
	 *
	 * .
	 *
	 * @returns {number}
	 */
	static get FILESYSTEM_NAVIGATOR_SECURITY_EXCEPTION()
	{
		return 302;
	}

	/**
	 * FileSystemNavigator: Unsupported operation.
	 * @public
	 *
	 * .
	 *
	 * @returns {number}
	 */
	static get FILESYSTEM_NAVIGATOR_UNSUPPORTED_OPERATION()
	{
		return 305;
	}

	/**
	 * Generic private error.
	 * @private
	 *
	 * Generic error code for exceptions missing a private error code.
	 *
	 * @returns {number}
	 */
	static get GENERIC_PRIVATE_ERROR()
	{
		return 227;
	}

	/**
	 * Generic public error.
	 * @public
	 *
	 * Generic error code for exceptions missing a public error code.
	 *
	 * @returns {number}
	 */
	static get GENERIC_PUBLIC_ERROR()
	{
		return 226;
	}

	/**
	 * Could not find a hardware configuration.
	 * @public
	 *
	 * This error is thrown when a search is made for a specified server
	 * configuration an no eligible servers are found. Matching the specified
	 * configuration doesn't always work, depending on the target hardware,
	 * internal matching algorithms, and hardware availability. API calls that get
	 * this error should try again using a different target hardware configuration.
	 *
	 * @returns {number}
	 */
	static get HARDWARE_CONFIGURATIONS_NOT_FOUND()
	{
		return 141;
	}

	/**
	 * HDFS cluster already exists.
	 * @private
	 *
	 * .
	 *
	 * @returns {number}
	 */
	static get HDFS_CLUSTER_ALREADY_EXISTS()
	{
		return 246;
	}

	/**
	 * Illegal argument.
	 * @public
	 *
	 * Thrown when an argument or an argument combination is invalid.
	 *
	 * @returns {number}
	 */
	static get ILLEGAL_ARGUMENT()
	{
		return 315;
	}

	/**
	 * Invalid infrastructure experimental priority.
	 * @private
	 *
	 * .
	 *
	 * @returns {number}
	 */
	static get INFRASTRUCTURE_EXPERIMENTAL_PRIORITY_INVALID()
	{
		return 291;
	}

	/**
	 * Infrastructure not found.
	 * @public
	 *
	 * This error is thrown when a specified infrastructure does not exist or when
	 * the user making the function call does not own any infrastructures.
	 *
	 * @returns {number}
	 */
	static get INFRASTRUCTURE_NOT_FOUND()
	{
		return 152;
	}

	/**
	 * Infrastructure read-only while deploying.
	 * @public
	 *
	 * No modifications can be made while an Infrastructure is deploying. Elements
	 * cannot be created, deleted, edited, started or stopped. API calls that
	 * receive this error should wait until the operation is complete and try again.
	 *
	 * @returns {number}
	 */
	static get INFRASTRUCTURE_READ_ONLY_WHILE_DEPLOYING()
	{
		return 216;
	}

	/**
	 * Infrastructure user removal is not allowed.
	 * @public
	 *
	 * The infrastructure owner cannot be removed.
	 *
	 * @returns {number}
	 */
	static get INFRASTRUCTURE_USER_REMOVE_NOT_ALLOWED()
	{
		return 145;
	}

	/**
	 * Infrastructures mixing not allowed.
	 * @public
	 *
	 * Elements belonging to one Infrastructure cannot be used on another one. For
	 * example, a Drive created on Infrastructure A cannot be attached to an
	 * Instance belonging to Infrastructure B.
	 *
	 * @returns {number}
	 */
	static get INFRASTRUCTURES_MIXING_NOT_ALLOWED()
	{
		return 110;
	}

	/**
	 * Invalid value given to the bKeepDetachingDrives flag.
	 * @public
	 *
	 * The number of Instances in an InstanceArray was reduced but the
	 * bKeepDetachingDrives flag was not set to true or false. The flag is required
	 * in order to know if the detaching Drives will be kept or deleted.
	 *
	 * @returns {number}
	 */
	static get INSTANCE_ARRAY_EDIT_DETACHING_DRIVES_INVALID_VALUE()
	{
		return 265;
	}

	/**
	 * Not allowed to attach network.
	 * @public
	 *
	 * This error is thrown when trying to attach an InstanceArrayInterface to a
	 * Network that is pending deletion. Cancel the operation or choose another
	 * Network before trying again.
	 *
	 * @returns {number}
	 */
	static get INSTANCE_ARRAY_INTERFACE_NETWORK_ATTACH_NOT_ALLOWED()
	{
		return 188;
	}

	/**
	 * Not allowed to detach network.
	 * @public
	 *
	 * .
	 *
	 * @returns {number}
	 */
	static get INSTANCE_ARRAY_INTERFACE_NETWORK_DETACH_NOT_ALLOWED()
	{
		return 187;
	}

	/**
	 * InstanceArray interface not found.
	 * @public
	 *
	 * This error code may be the result of an internal error or anomaly, which
	 * cannot be fixed or worked around.
	 *
	 * @returns {number}
	 */
	static get INSTANCE_ARRAY_INTERFACE_NOT_FOUND()
	{
		return 186;
	}

	/**
	 * Instance array mixing not allowed.
	 * @public
	 *
	 * A Drive can only be attached to an Instance belonging to the Instance Array
	 * that the Drive's parent DriveArray is attached to.
	 *
	 * @returns {number}
	 */
	static get INSTANCE_ARRAY_MIXING_NOT_ALLOWED()
	{
		return 223;
	}

	/**
	 * Cannot delete the last instance from an InstanceArray.
	 * @public
	 *
	 * Some Clusters require that at least one Instance remains active at all
	 * times. The last Instance cannot be stopped or deleted. Stop or delete the
	 * entire Cluster instead.
	 *
	 * @returns {number}
	 */
	static get INSTANCE_IS_LAST_FROM_INSTANCE_ARRAY()
	{
		return 178;
	}

	/**
	 * Failed to allocate a server to instance.
	 * @private
	 *
	 * InstanceArrays have a few properties for server matching (such as CPU count,
	 * RAM size, etc.).
	 *
	 * During the deployment process of an InstanceArray or when quoting for
	 * available hardware, the search for the best server hardware match may fail
	 * with this error.
	 *
	 * @returns {number}
	 */
	static get INSTANCE_MATCH_SERVER_NOT_FOUND()
	{
		return 29;
	}

	/**
	 * Instance not active.
	 * @public
	 *
	 * Some operations require the Instance's service status to be active. For
	 * example, powering the Instance on or off requires a server to be allocated
	 * to the Instance.
	 *
	 * @returns {number}
	 */
	static get INSTANCE_NOT_ACTIVE()
	{
		return 100;
	}

	/**
	 * Invalid Column.
	 * @public
	 *
	 * The specified column does not exist. Use query() to retrieve the columns in
	 * a particular table.
	 *
	 * @returns {number}
	 */
	static get INVALID_COLUMN()
	{
		return 259;
	}

	/**
	 * Invalid RSA cipher format.
	 * @public
	 *
	 * RSA ciphers must be prefixed with the ID of the RSA pair and a slash ("/").
	 * See the temp_key_pair_id property of the object returned by transport_request_public_key().
	 *
	 * @returns {number}
	 */
	static get INVALID_FORMAT_RSA_CIPHER()
	{
		return 163;
	}

	/**
	 * Invalid password characters.
	 * @public
	 *
	 * The password contains invalid characters.
	 *
	 * @returns {number}
	 */
	static get INVALID_PASSWORD_CHARACTERS()
	{
		return 288;
	}

	/**
	 * Empty string password.
	 * @public
	 *
	 * Password cannot be an empty string.
	 *
	 * @returns {number}
	 */
	static get INVALID_PASSWORD_EMPTY()
	{
		return 164;
	}

	/**
	 * Invalid absolute HTTP URL.
	 * @public
	 *
	 * Invalid absolute HTTP URL.
	 *
	 * @returns {number}
	 */
	static get INVALID_URL_HTTP_ABSOLUTE()
	{
		return 165;
	}

	/**
	 * Invalid user type.
	 * @public
	 *
	 * An invalid user type was specified as an object property or function parameter.
	 *
	 * @returns {number}
	 */
	static get INVALID_USER_TYPE()
	{
		return 162;
	}

	/**
	 * IP address has an invalid format.
	 * @public
	 *
	 * An IP address (IPv4 or IPv6) has an invalid format.
	 *
	 * @returns {number}
	 */
	static get IP_ADDRESS_INVALID()
	{
		return 153;
	}

	/**
	 * IP address not found.
	 * @public
	 *
	 * The IP address does not exist.
	 *
	 * @returns {number}
	 */
	static get IP_ADDRESS_NOT_FOUND()
	{
		return 166;
	}

	/**
	 * IP address not found for MAC address.
	 * @private
	 *
	 * This error is thrown when a search for the IP address that corresponds to a
	 * specified MAC address is made but nothing is found in the database.
	 *
	 * @returns {number}
	 */
	static get IP_COULD_NOT_FIND_FOR_MAC()
	{
		return 85;
	}

	/**
	 * Cannot allocate IP addresses from a LAN Subnet.
	 * @private
	 *
	 * For the moment, IP addresses can not be allocated from a LAN Subnet.
	 *
	 * @returns {number}
	 */
	static get IP_LAN_ALLOCATION_NOT_SUPPORTED()
	{
		return 13;
	}

	/**
	 * IP provision fails because no IP address is available.
	 * @public
	 *
	 * The error is thrown during the IP address provision, if the IP address is
	 * not in the Subnet's range.
	 *
	 * @returns {number}
	 */
	static get IP_PROVISION_NO_IP_AVAILABLE()
	{
		return 83;
	}

	/**
	 * IP address reserve failure.
	 * @public
	 *
	 * The instance network interface and the Subnet must be on the same network
	 * (must have the same network_id property value).
	 *
	 * @returns {number}
	 */
	static get IP_RESERVE_FAILED()
	{
		return 19;
	}

	/**
	 * Kerberos authentication timed out.
	 * @public
	 *
	 * The error is thrown if the API fails to authenticate to the KDC server for
	 * cases other than an invalid password.
	 *
	 * @returns {number}
	 */
	static get KERBEROS_AUTHENTICATION_TIMED_OUT()
	{
		return 294;
	}

	/**
	 * Invalid kerberos principal.
	 * @private
	 *
	 * .
	 *
	 * @returns {number}
	 */
	static get KRB_INVALID_PRINCIPAL()
	{
		return 249;
	}

	/**
	 * Kerberos operation not allowed.
	 * @private
	 *
	 * .
	 *
	 * @returns {number}
	 */
	static get KRB_OPERATION_NOT_ALLOWED()
	{
		return 250;
	}

	/**
	 * Kerberos operation not supported.
	 * @private
	 *
	 * .
	 *
	 * @returns {number}
	 */
	static get KRB_OPERATION_NOT_SUPPORTED()
	{
		return 248;
	}

	/**
	 * Kerberos policy not found.
	 * @private
	 *
	 * .
	 *
	 * @returns {number}
	 */
	static get KRB_POLICY_NOT_FOUND()
	{
		return 275;
	}

	/**
	 * Kerberos principal already exists.
	 * @private
	 *
	 * .
	 *
	 * @returns {number}
	 */
	static get KRB_PRINCIPAL_ALREADY_EXISTS()
	{
		return 254;
	}

	/**
	 * Kerberos principal not found.
	 * @private
	 *
	 * .
	 *
	 * @returns {number}
	 */
	static get KRB_PRINCIPAL_NOT_FOUND()
	{
		return 251;
	}

	/**
	 * Language not available.
	 * @public
	 *
	 * This error is thrown when an attempt to change a user's selected language is
	 * made but the specified option is not available. API calls that receive this
	 * error should obtain a list of available language options before trying again.
	 *
	 * @returns {number}
	 */
	static get LANGUAGE_NOT_AVAILABLE()
	{
		return 196;
	}

	/**
	 * Minimum count not met.
	 * @public
	 *
	 * There is a minimum and maximum amount of elements of each product type that
	 * a user can have on an infrastructure. This error is thrown when creating or
	 * editing an object, if the specified amount of child products is less than
	 * the minimum amount allowed. Some products require a minimum count of a
	 * particular child product type in order to function.
	 *
	 * @returns {number}
	 */
	static get LESS_THAN_MINIMUM_COUNT()
	{
		return 244;
	}

	/**
	 * Unknown load balancing algorithm, mode or stats.
	 * @private
	 *
	 * An algorithm, mode, stats or other configuration values are unsupported by
	 * the current load balancer type.
	 *
	 * @returns {number}
	 */
	static get LOAD_BALANCER_CONFIG_VALUE_UNSUPPORTED()
	{
		return 49;
	}

	/**
	 * Load balancer application has no servers connected.
	 * @private
	 *
	 * The chosen load balancer has no servers connected, or the application failed
	 * to gather all the connected instances.
	 *
	 * @returns {number}
	 */
	static get LOAD_BALANCER_HAS_NO_SERVERS()
	{
		return 77;
	}

	/**
	 * The load balancing application does not exist.
	 * @private
	 *
	 * This error is thrown when the user did not choose a load balancing
	 * application type or the load balancing application type does not exist.
	 * Choose either HAPROXY or CRESCENDO load balancer.
	 *
	 * @returns {number}
	 */
	static get LOAD_BALANCER_INVALID_TYPE()
	{
		return 20;
	}

	/**
	 * The load balancer server was not connected.
	 * @private
	 *
	 * When a specified server is not connected to the load balancing application,
	 * this error is thrown.
	 *
	 * @returns {number}
	 */
	static get LOAD_BALANCER_SERVER_CONNECTION_FAILED()
	{
		return 33;
	}

	/**
	 * The connection between an instance and a load balancing application has not
	 * been edited.
	 * @private
	 *
	 * This error is thrown when the connection properties between an instance and
	 * a load balancing application have not been edited. Either the connection
	 * properties, or the connection location can be edited.
	 *
	 * @returns {number}
	 */
	static get LOAD_BALANCER_SERVER_EDIT_FAILED()
	{
		return 41;
	}

	/**
	 * Connections, ports, or load balancer weight are not in the infrastructure limits.
	 * @private
	 *
	 * This error is thrown when the maximum connections, port numbers, or the load
	 * balancer weight are not in the instance configuration limit.
	 *
	 * @returns {number}
	 */
	static get LOAD_BALANCER_SERVER_INVALID_SETTINGS()
	{
		return 72;
	}

	/**
	 * No instance supplied to the target load balancing application.
	 * @private
	 *
	 * When the load balancing application has no instances supplied, this error is
	 * thrown. Two or more servers should be enlisted for the operation.
	 *
	 * @returns {number}
	 */
	static get LOAD_BALANCER_SERVER_NOT_FOUND()
	{
		return 15;
	}

	/**
	 * Maintenance mode.
	 * @public
	 *
	 * The respective API is not available during the current maintenance operation
	 * because it would conflict with maintenance commands or put a resource in
	 * danger of data corruption.
	 *
	 * @returns {number}
	 */
	static get MAINTENANCE_MODE()
	{
		return 318;
	}

	/**
	 * Cannot connect to Marathon server.
	 * @private
	 *
	 * .
	 *
	 * @returns {number}
	 */
	static get MARATHON_SERVER_IS_UNAVAILABLE()
	{
		return 284;
	}

	/**
	 * Maximum element count exceeded.
	 * @public
	 *
	 * There is a minimum and maximum amount of elements of each product type that
	 * a user can have on an infrastructure. This error is thrown when creating or
	 * editing an object, if the specified amount of elements of a certain type
	 * exceeds the maximum amount allowed.
	 *
	 * @returns {number}
	 */
	static get MAXIMUM_COUNT_EXCEEDED()
	{
		return 204;
	}

	/**
	 * Cannot connect to Mesos server.
	 * @private
	 *
	 * .
	 *
	 * @returns {number}
	 */
	static get MESOS_SERVER_IS_UNAVAILABLE()
	{
		return 285;
	}

	/**
	 * Only one WAN and SAN network per infrastructure.
	 * @public
	 *
	 * There is a minimum and maximum amount of elements of each product type that
	 * a user can have on an infrastructure. This error is thrown when creating a
	 * new network, if the maximum amount allowed for that network type is
	 * exceeded. An infrastructure can have only one WAN and one SAN attached to it.
	 *
	 * @returns {number}
	 */
	static get NETWORK_LIMIT_EXCEEDED()
	{
		return 154;
	}

	/**
	 * Network cannot be deleted.
	 * @public
	 *
	 * This error is thrown when an attempt to delete a network is made but the
	 * operation is not allowed. WAN and SAN networks cannot be deleted from an
	 * infrastructure, and when merging two LAN networks, the network that is
	 * marked for deletion cannot be active, in order to prevent IP conflicts.
	 *
	 * @returns {number}
	 */
	static get NETWORK_NOT_DELETABLE()
	{
		return 155;
	}

	/**
	 * Network type mismatch.
	 * @public
	 *
	 * The subnet destination and the corresponding network type must be the same.
	 *
	 * @returns {number}
	 */
	static get NETWORK_TYPE_MISMATCH()
	{
		return 222;
	}

	/**
	 * No provisioner infrastructure found.
	 * @private
	 *
	 * A provisioner infrastructure must exist for the Drive import process.
	 *
	 * @returns {number}
	 */
	static get NO_PROVISIONER_INFRASTRUCTURES_FOUND()
	{
		return 122;
	}

	/**
	 * Not allowed in guest mode.
	 * @public
	 *
	 * Some functions are not allowed in guest mode.
	 *
	 * @returns {number}
	 */
	static get NOT_ALLOWED_IN_GUEST_MODE()
	{
		return 267;
	}

	/**
	 * Authentication failed.
	 * @public
	 *
	 * Authentication is required for most functions to work. This error is thrown
	 * when authentication fails. Possible reasons for failure include invalid
	 * request parameters, invalid authentication method, incorrect credentials, or
	 * an incorrect signature. The error can also occur on functions that perform
	 * authentication, if called directly.
	 *
	 * @returns {number}
	 */
	static get NOT_AUTHENTICATED()
	{
		return 73;
	}

	/**
	 * Authorization failed.
	 * @public
	 *
	 * Some functions require an authorization check to make sure that the
	 * authenticated user is allowed to call a certain function or that the
	 * authenticated user is allowed to operate on a specified resource. This error
	 * is thrown when the authenticated user fails authorization.
	 *
	 * @returns {number}
	 */
	static get NOT_AUTHORIZED()
	{
		return 71;
	}

	/**
	 * A feature is not implemented.
	 * @public
	 *
	 * Thrown when a certain feature or capability is not implemented yet, is
	 * reserved or is planned.
	 *
	 * @returns {number}
	 */
	static get NOT_IMPLEMENTED()
	{
		return 3;
	}

	/**
	 * Nothing to update.
	 * @public
	 *
	 * Generic error code for when an update does not produce any results.
	 *
	 * @returns {number}
	 */
	static get NOTHING_TO_UPDATE()
	{
		return 324;
	}

	/**
	 * The provided object is invalid.
	 * @public
	 *
	 * Objects have to respect a specific structure. This error is thrown when an
	 * object provided as a parameter does not respect that structure. API calls
	 * that receive this error should create a new object before trying again.
	 *
	 * @returns {number}
	 */
	static get OBJECT_IS_INVALID()
	{
		return 218;
	}

	/**
	 * Operation type is not valid.
	 * @private
	 *
	 * The system only supports the following operation types that can be used for
	 * a product: "create", "edit", "clone", "delete".
	 *
	 * @returns {number}
	 */
	static get OPERATION_TYPE_INVALID()
	{
		return 89;
	}

	/**
	 * OS bootstrap failed.
	 * @private
	 *
	 * OS bootstrap failed.
	 *
	 * @returns {number}
	 */
	static get OS_BOOTSTRAP_FAILED()
	{
		return 229;
	}

	/**
	 * Type of the parameter provided is not as expected.
	 * @public
	 *
	 * Type of the parameter provided is not as expected. For example, any label
	 * provided is expected to be a string.
	 *
	 * @returns {number}
	 */
	static get PARAM_TYPE_MISMATCH()
	{
		return 93;
	}

	/**
	 * Value of parameter is invalid.
	 * @public
	 *
	 * Some parameter values require specific formats of input data, or a specific
	 * set of allowed values.
	 *
	 * @returns {number}
	 */
	static get PARAM_VALUE_INVALID()
	{
		return 143;
	}

	/**
	 * Password complexity is too low.
	 * @public
	 *
	 * This error is thrown when a user attempts to set or change a password to a
	 * string that doesn't meet the complexity requirements. The password must be
	 * at least 6 characters long and should contain both upper case and lower case
	 * letters, digits and punctuation marks.
	 *
	 * @returns {number}
	 */
	static get PASSWORD_COMPLEXITY_TOO_LOW()
	{
		return 261;
	}

	/**
	 * Incorrect user password.
	 * @public
	 *
	 * Thrown when authentication fails due to incorrect user password.
	 *
	 * @returns {number}
	 */
	static get PASSWORD_INCORRECT()
	{
		return 45;
	}

	/**
	 * Plugin is not registered.
	 * @public
	 *
	 * .
	 *
	 * @returns {number}
	 */
	static get PLUGIN_NOT_REGISTERED()
	{
		return 258;
	}

	/**
	 * Primary key not set.
	 * @private
	 *
	 * This error is thrown when an attempt to update a row in a database table is
	 * made and the table's primary key is not set.
	 *
	 * @returns {number}
	 */
	static get PRIMARY_KEY_NOT_SET()
	{
		return 260;
	}

	/**
	 * Product busy.
	 * @public
	 *
	 * .
	 *
	 * @returns {number}
	 */
	static get PRODUCT_BUSY_DEPLOY_ONGOING()
	{
		return 290;
	}

	/**
	 * Product does not have a change operation.
	 * @private
	 *
	 * A product does not have a change operation.
	 *
	 * @returns {number}
	 */
	static get PRODUCT_CHANGE_OPERATION_NOT_FOUND()
	{
		return 104;
	}

	/**
	 * Product edit not allowed.
	 * @public
	 *
	 * Some properties of a Product cannot be edited.
	 *
	 * @returns {number}
	 */
	static get PRODUCT_EDIT_NOT_ALLOWED()
	{
		return 289;
	}

	/**
	 * Product not active.
	 * @public
	 *
	 * Some products are required to be active for certain operations to function
	 * properly. Make sure the product has its service status set to active before
	 * trying again.
	 *
	 * @returns {number}
	 */
	static get PRODUCT_NOT_ACTIVE()
	{
		return 286;
	}

	/**
	 * Product does not exist.
	 * @public
	 *
	 * This error is thrown when a requested resource is not found in the database,
	 * based on the provided identifier, or does not belong to the infrastructure
	 * currently operated on. API calls that receive this error should reobtain the
	 * identifier(s) before trying again or look for the products on a different infrastructure.
	 *
	 * @returns {number}
	 */
	static get PRODUCT_NOT_FOUND()
	{
		return 103;
	}

	/**
	 * Product operation type conflicts with parent operation type.
	 * @public
	 *
	 * Generally, a child product must have the operation type:
	 *  - delete, if its parent has operation type delete;
	 *  - delete or stop if a parent has operation type stop;
	 *  - create or stop or delete if a parent has operation type create;
	 *  - start, stop, delete if a parent has operation type start.
	 *
	 * Operation type edit can only exist on products with active service statuses
	 * and operation types create and edit.
	 *
	 * There may be exceptions where the rules are even stricter.
	 *
	 * @returns {number}
	 */
	static get PRODUCT_OPERATION_TYPE_CONFLICTS_PARENT()
	{
		return 273;
	}

	/**
	 * Product with changes cannot be started.
	 * @public
	 *
	 * A product start operation is only allowed if the product's service status is
	 * set to stopped, ordered or suspended, or if a stop operation has been issued
	 * but not deployed yet.
	 *
	 * @returns {number}
	 */
	static get PRODUCT_WITH_CHANGES_CANNOT_BE_STARTED()
	{
		return 209;
	}

	/**
	 * Product with changes cannot be stopped.
	 * @public
	 *
	 * A product stop operation is only allowed if the product's service status is
	 * set to active, ordered or suspended, or if a start operation has been issued
	 * but not deployed yet.
	 *
	 * @returns {number}
	 */
	static get PRODUCT_WITH_CHANGES_CANNOT_BE_STOPPED()
	{
		return 208;
	}

	/**
	 * Mandatory property.
	 * @public
	 *
	 * When creating/editing products or performing database interrogations, some
	 * properties and clauses are mandatory in order for the operation to be
	 * performed. This error is thrown when a function call is missing some of
	 * those mandatory elements, such as storage type or query limits.
	 *
	 * @returns {number}
	 */
	static get PROPERTY_IS_MANDATORY()
	{
		return 135;
	}

	/**
	 * Unknown property.
	 * @public
	 *
	 * Unknown object properties are sometimes not allowed to help catch caller
	 * typos or incorrect calls with objects which have optional properties with defaults.
	 *
	 * @returns {number}
	 */
	static get PROPERTY_IS_UNKNOWN()
	{
		return 136;
	}

	/**
	 * Resource reservation not found.
	 * @public
	 *
	 * The specified resource reservation was not found in the database.
	 *
	 * @returns {number}
	 */
	static get RESOURCE_RESERVATION_NOT_FOUND()
	{
		return 266;
	}

	/**
	 * Selection limit exceeded.
	 * @public
	 *
	 * In a call to infrastructure_selection, user_selection, infrastructure_query
	 * or user_query the LIMIT clause was exceeded. Check the documentation for
	 * allowed values.
	 *
	 * @returns {number}
	 */
	static get SELECTION_LIMIT_EXCEEDED()
	{
		return 239;
	}

	/**
	 * Server disk not found.
	 * @private
	 *
	 * .
	 *
	 * @returns {number}
	 */
	static get SERVER_DISK_NOT_FOUND()
	{
		return 177;
	}

	/**
	 * An instance could not be located for the specified server.
	 * @private
	 *
	 * This error is thrown when a search is made for the active instance that uses
	 * the server with the specified ID and no result is found. Some operations
	 * require servers to be associated with an instance in order to work.
	 *
	 * @returns {number}
	 */
	static get SERVER_DOES_NOT_HAVE_INSTANCE()
	{
		return 37;
	}

	/**
	 * An operation cannot take place because the server is associated with an instance.
	 * @private
	 *
	 * This error is thrown when an operation cannot be performed because a
	 * specified server is associated with an active instance. Some operations
	 * (such as marking a server as available or canceling a server reservation)
	 * require the server to not be associated with an instance in order to work.
	 *
	 * @returns {number}
	 */
	static get SERVER_HAS_INSTANCE()
	{
		return 170;
	}

	/**
	 * Server interface not found.
	 * @private
	 *
	 * This error is thrown when a server interface with a certain ID is not found
	 * in the database.
	 *
	 * @returns {number}
	 */
	static get SERVER_INTERFACE_NOT_FOUND()
	{
		return 158;
	}

	/**
	 * Server might not be ready for power status polling.
	 * @public
	 *
	 * This error is thrown when a server's power status is polled, but the server
	 * is not ready to respond (either undergoing provisioning or returning an IPMI
	 * error). API clients that receive this error should try polling the server's
	 * power status again later.
	 *
	 * @returns {number}
	 */
	static get SERVER_MIGHT_NOT_BE_READY_FOR_POWER_GET()
	{
		return 210;
	}

	/**
	 * No server with given ID exists.
	 * @private
	 *
	 * This error is thrown when a search is made for a server by ID and the server
	 * doesn't exist in the database.
	 *
	 * @returns {number}
	 */
	static get SERVER_NOT_FOUND()
	{
		return 11;
	}

	/**
	 * An operation cannot take place because the server is not reserved.
	 * @private
	 *
	 * Some operations require the server to be reserved for a specified
	 * infrastructure. For example, servers_reserve_cancel.
	 *
	 * @returns {number}
	 */
	static get SERVER_NOT_RESERVED()
	{
		return 169;
	}

	/**
	 * The server power status cannot be changed. A deploy process is currently ongoing.
	 * @public
	 *
	 * Server power cannot be controlled while the Instance's parent
	 * Infrastructure's deploy status is "ongoing". Wait for the operation to
	 * conclude before trying again.
	 *
	 * @returns {number}
	 */
	static get SERVER_POWER_LOCKED_BY_ONGOING_OPERATION()
	{
		return 214;
	}

	/**
	 * An operation cannot take place because the server is powered on.
	 * @public
	 *
	 * Some operations, such as unmounting Drives, expanding Drives, swapping an
	 * instance's server when a server_type is changed, require the affected
	 * servers to already be powered off before a deploy call.
	 *
	 * @returns {number}
	 */
	static get SERVER_POWERED_ON()
	{
		return 87;
	}

	/**
	 * An operation cannot take place because the server is reserved.
	 * @private
	 *
	 * Some operations require the server to not be reserved for a specified infrastructure.
	 *
	 * @returns {number}
	 */
	static get SERVER_RESERVED()
	{
		return 168;
	}

	/**
	 * Server type not found.
	 * @public
	 *
	 * Retrieving the server type failed because it does not exist. Use
	 * server_types() to obtain a list of existing server types.
	 *
	 * @returns {number}
	 */
	static get SERVER_TYPE_NOT_FOUND()
	{
		return 175;
	}

	/**
	 * Server type is not available.
	 * @public
	 *
	 * This error is thrown when a request to provision servers is made and no
	 * servers matching the desired hardware configuration are available in the
	 * datacenter, or not enough matching servers are found. API calls that receive
	 * this error should try again later or modify the desired hardware
	 * specifications to find an eligible match.
	 *
	 * @returns {number}
	 */
	static get SERVER_TYPE_UNAVAILABLE()
	{
		return 212;
	}

	/**
	 * Server type is unavailable for use by a ContainerPlatform.
	 * @public
	 *
	 * Variation of SERVER_TYPE_UNAVAILABLE thrown when failing to find an
	 * available server of the given server_type for use by a ContainerPlatform.
	 *
	 * @returns {number}
	 */
	static get SERVER_TYPE_UNAVAILABLE_FOR_CONTAINER_PLATFORM()
	{
		return 311;
	}

	/**
	 * Server not found by UUID.
	 * @private
	 *
	 * This error is thrown during the DHCP boot process, if the server with the
	 * provided UUID is not found in the database. Signals that a server is not yet registered.
	 *
	 * @returns {number}
	 */
	static get SERVER_UUID_NOT_FOUND()
	{
		return 9;
	}

	/**
	 * Service status is not valid.
	 * @public
	 *
	 * The system only supports the following service statuses that can be used for
	 * a product: "ordered", "active", "suspended", "stopped", "deleted".
	 *
	 * @returns {number}
	 */
	static get SERVICE_STATUS_INVALID()
	{
		return 95;
	}

	/**
	 * SharedDrive is already connected.
	 * @public
	 *
	 * The SharedDrive is already connected to an InstanceArray or a ContainerArray.
	 *
	 * @returns {number}
	 */
	static get SHARED_DRIVE_IS_ALREADY_CONNECTED()
	{
		return 245;
	}

	/**
	 * SharedDrive is not connected.
	 * @public
	 *
	 * The SharedDrive is not connected to an InstanceArray or a ContainerArray,
	 * although it is expected to be connected.
	 *
	 * @returns {number}
	 */
	static get SHARED_DRIVE_IS_NOT_CONNECTED()
	{
		return 292;
	}

	/**
	 * SQL syntax error.
	 * @public
	 *
	 * This error is thrown when a database interrogation query has syntax errors
	 * in it, such as missing mandatory conditions or properties or having
	 * improperly defined ones.
	 *
	 * @returns {number}
	 */
	static get SQL_SYNTAX_ERROR()
	{
		return 232;
	}

	/**
	 * SSH key unknown encoding.
	 * @public
	 *
	 * This error is thrown when a provided SSH key fails decoding. Public SSH key
	 * data is expected to be encoded in base64.
	 *
	 * @returns {number}
	 */
	static get SSH_KEY_DATA_INCORRECT_FORMAT()
	{
		return 25;
	}

	/**
	 * Invalid OpenSSH/SSH2 key.
	 * @public
	 *
	 * This error is thrown during the SSH key validation process, if the decoded
	 * OpenSSH/SSH2 key data is not valid (invalid algorithm identifier length,
	 * invalid exponent size, invalid modulus size, etc. according to the
	 * specifications provided in RFC 3447 and  RFC 4716).
	 *
	 * @returns {number}
	 */
	static get SSH_KEY_INVALID_DATA_OPENSSH_SSH2()
	{
		return 28;
	}

	/**
	 * Invalid PKCS#1 key.
	 * @public
	 *
	 * This error is thrown during the SSH key validation process, if the decoded
	 * PKCS 1 key data is not valid according to the specifications provided in RFC 3447.
	 *
	 * @returns {number}
	 */
	static get SSH_KEY_INVALID_DATA_PKCS1()
	{
		return 31;
	}

	/**
	 * Invalid PKCS#8 key.
	 * @public
	 *
	 * This error is thrown during the SSH key validation process, if the decoded
	 * PKCS 8 key data is not valid according to the specifications provided in RFC 2459.
	 *
	 * @returns {number}
	 */
	static get SSH_KEY_INVALID_DATA_PKCS8()
	{
		return 35;
	}

	/**
	 * Unknown SSH key format.
	 * @public
	 *
	 * This error is thrown during SSH key validation, if the format that the data
	 * is stored in is not recognized. The allowed SSH key formats are OpenSSH,
	 * SSH2, PKCS #1, PKCS #8.
	 *
	 * @returns {number}
	 */
	static get SSH_KEY_UNKNOWN_FORMAT()
	{
		return 23;
	}

	/**
	 * Unknown algorithm identifier prefix for a certain SSH key.
	 * @public
	 *
	 * This error is thrown during SSH key validation, if an unknown algorithm
	 * identifier prefix is found when decoding the SSH key data. The allowed
	 * algorithm identifiers are: ssh-rsa, ssh-dsa, and ssh-dss.
	 *
	 * @returns {number}
	 */
	static get SSH_KEY_UNKWOWN_ALGORITHM_IDENTIFIER()
	{
		return 21;
	}

	/**
	 * Storage pool destination is the same as source.
	 * @private
	 *
	 * This error is thrown when moving data between two storage pools, if the
	 * provided destination storage pool is the same as the source storage pool.
	 *
	 * @returns {number}
	 */
	static get STORAGE_POOL_DESTINATION_SAME_AS_SOURCE()
	{
		return 278;
	}

	/**
	 * Storage pool does not have enough free space.
	 * @private
	 *
	 * This error is thrown when moving data between two storage pools, if the
	 * provided destination storage pool does not have enough free space to
	 * complete the operation.
	 *
	 * @returns {number}
	 */
	static get STORAGE_POOL_NOT_ENOUGH_FREE_SPACE()
	{
		return 279;
	}

	/**
	 * Storage pool is not found.
	 * @private
	 *
	 * This error is thrown when a storage pool cannot be found based on the
	 * provided criteria. This situation can appear if the system cannot find any
	 * storage pools that have a certain storage type, if there is no information
	 * associated with a certain storage pool ID, or if the provided ID does not exist.
	 *
	 * @returns {number}
	 */
	static get STORAGE_POOL_NOT_FOUND()
	{
		return 64;
	}

	/**
	 * Snapshot not found.
	 * @public
	 *
	 * This error is thrown when searching for a drive snapshot or attempting to
	 * retrieve or operate on a specific snapshot, and no information related to
	 * the provided ID is found in the database.
	 *
	 * @returns {number}
	 */
	static get STORAGE_SNAPSHOT_NOT_FOUND()
	{
		return 94;
	}

	/**
	 * Volume template not found.
	 * @public
	 *
	 * This error is thrown when an attempt to retrieve or use a volume template is
	 * made, but the specified volume template is not found in storage. API clients
	 * that receive this error should make the volume template public or use
	 * volume_templates() to obtain a list of available templates before trying again.
	 *
	 * @returns {number}
	 */
	static get STORAGE_VOLUME_TEMPLATE_NOT_FOUND()
	{
		return 68;
	}

	/**
	 * Snapshot not found for volume template ID.
	 * @private
	 *
	 * When a volume template is created, a snapshot of this template is also
	 * created. This error is thrown when something went wrong and the snapshot for
	 * the specified volume template ID cannot be found.
	 *
	 * @returns {number}
	 */
	static get STORAGE_VOLUME_TEMPLATE_SNAPSHOT_NOT_FOUND()
	{
		return 75;
	}

	/**
	 * Subnet create failure.
	 * @private
	 *
	 * This error is thrown when an attempt to create a new subnet is made and the
	 * system fails to allocate the necessary resources. If a system runs out of
	 * IPv4 or IPv6 addresses, then a new RIPE subnet cannot be created.
	 *
	 * @returns {number}
	 */
	static get SUBNET_CREATE_FAILED()
	{
		return 16;
	}

	/**
	 * Subnet exhausted.
	 * @public
	 *
	 * This error is thrown when a subnet runs out of available IP addresses.
	 *
	 * @returns {number}
	 */
	static get SUBNET_EXHAUSTED()
	{
		return 160;
	}

	/**
	 * Maxim count of Subnets reached.
	 * @public
	 *
	 * This error is thrown when attempting to create a new subnet if the maximum
	 * count of allowed subnets has already been reached. There is a maximum count
	 * of one public IPv6 subnet and 10 public IPv4 subnets for the WAN. Subnets
	 * for LAN networks cannot be allocated at the moment.
	 *
	 * @returns {number}
	 */
	static get SUBNET_MAXIMUM_COUNT_REACHED()
	{
		return 7;
	}

	/**
	 * Not allowed to change the Subnet's parent network.
	 * @public
	 *
	 * This operation is currently unsupported.
	 *
	 * @returns {number}
	 */
	static get SUBNET_NETWORK_CHANGING_NOT_ALLOWED()
	{
		return 189;
	}

	/**
	 * Switch device interface does not exist.
	 * @private
	 *
	 * This error is thrown when searching for a switch device interface that does
	 * not exist. The network equipment might not exist, or it might not be
	 * registered in the database yet.
	 *
	 * @returns {number}
	 */
	static get SWITCH_DEVICE_INTERFACE_NOT_FOUND()
	{
		return 207;
	}

	/**
	 * Table not found.
	 * @public
	 *
	 * This error is thrown when a database query is made and it contains an
	 * incorrect table name (keyword query, or SQL-like query), or a table that is
	 * not accessible to the user making the interrogation.
	 *
	 * @returns {number}
	 */
	static get TABLE_NOT_FOUND()
	{
		return 231;
	}

	/**
	 * Specified timespan is greater than allowed.
	 * @public
	 *
	 * Reports cannot span more than 5 years.
	 *
	 * @returns {number}
	 */
	static get TIMESPAN_TOO_GREAT()
	{
		return 220;
	}

	/**
	 * Invalid timestamp format.
	 * @public
	 *
	 * This error is thrown during timestamp validation, if the provided timpestamp
	 * does not match the required format. Timestamps must be in a particular
	 * format (ISO 8601) and in UTC time. Example format: "2013-12-31T14:09:12Z".
	 *
	 * @returns {number}
	 */
	static get TIMESTAMP_INVALID()
	{
		return 149;
	}

	/**
	 * Unsupported hash algorithm.
	 * @public
	 *
	 * This error is thrown when the provided hashing algorithm is not among the
	 * supported list. The recommended algorithms are md5, sha256, and sha512.
	 *
	 * @returns {number}
	 */
	static get UNSUPPORTED_HASH_ALGO()
	{
		return 271;
	}

	/**
	 * File upload failed.
	 * @private
	 *
	 * An error has been encountered while uploading the file.
	 *
	 * @returns {number}
	 */
	static get UPLOAD_FAILED()
	{
		return 114;
	}

	/**
	 * Upload file creation failed.
	 * @private
	 *
	 * A temporary file for the AJAX upload could not be created.
	 *
	 * @returns {number}
	 */
	static get UPLOAD_FILE_CREATION_FAILED()
	{
		return 115;
	}

	/**
	 * Upload file move failed.
	 * @private
	 *
	 * The temporary file for the AJAX upload could not be moved.
	 *
	 * @returns {number}
	 */
	static get UPLOAD_FILE_MOVE_FAILED()
	{
		return 118;
	}

	/**
	 * Upload file open failed.
	 * @private
	 *
	 * The temporary file created for the AJAX upload could not be opened for writing.
	 *
	 * @returns {number}
	 */
	static get UPLOAD_FILE_OPEN_FAILED()
	{
		return 117;
	}

	/**
	 * Invalid chunk offset.
	 * @public
	 *
	 * .
	 *
	 * @returns {number}
	 */
	static get UPLOAD_INVALID_CHUNK_OFFSET()
	{
		return 317;
	}

	/**
	 * Invalid upload get requirements.
	 * @private
	 *
	 * Invalid upload get requirements have been provided. The get requirements
	 * must contain valid upload object properties.
	 *
	 * @returns {number}
	 */
	static get UPLOAD_INVALID_GET_REQUIREMENTS()
	{
		return 121;
	}

	/**
	 * Upload POST data is too large.
	 * @public
	 *
	 * .
	 *
	 * @returns {number}
	 */
	static get UPLOAD_POST_TOO_LARGE()
	{
		return 316;
	}

	/**
	 * Upload stream open failed.
	 * @private
	 *
	 * The AJAX upload stream could not be opened for reading.
	 *
	 * @returns {number}
	 */
	static get UPLOAD_STREAM_OPEN_FAILED()
	{
		return 116;
	}

	/**
	 * URL_TYPE_UNKNOWN.
	 * @public
	 *
	 * URL type is unknown.
	 *
	 * @returns {number}
	 */
	static get URL_TYPE_UNKNOWN()
	{
		return 300;
	}

	/**
	 * The logged in account and the one that was requested to change the email
	 * adress must be the same.
	 * @public
	 *
	 * You logged in with a different account than the one you requested to change
	 * the email address for. The change process was cancelled.
	 *
	 * @returns {number}
	 */
	static get USER_CHANGE_LOGIN_EMAIL_WRONG_ACCOUNT_LOGIN()
	{
		return 287;
	}

	/**
	 * A user cannot add himself as his own delegate.
	 * @public
	 *
	 * A user cannot add himself as his delegate. Make sure the delegate's email
	 * address is different from the currently logged in user's email address
	 * before trying again.
	 *
	 * @returns {number}
	 */
	static get USER_DELEGATE_CANNOT_ADD_SELF()
	{
		return 193;
	}

	/**
	 * User account is disabled.
	 * @public
	 *
	 * Some operations are not allowed on a disabled account. Disabled accounts
	 * cannot be authenticated and are restricted from some associations or
	 * modifications for security reasons.
	 *
	 * @returns {number}
	 */
	static get USER_DISABLED()
	{
		return 62;
	}

	/**
	 * Duplicate user login emails are not allowed.
	 * @public
	 *
	 * A login email address is uniquely associated with a single user account.
	 * This error is thrown when creating a new user account or when changing an
	 * existing user's login email, if the provided email address already exists in
	 * the database.
	 *
	 * @returns {number}
	 */
	static get USER_LOGIN_EMAIL_ALREADY_EXISTS()
	{
		return 57;
	}

	/**
	 * User email is already verified.
	 * @public
	 *
	 * When creating a new user account, a verification email is sent to the
	 * specified email address. The email contains a verification HTTP URL which,
	 * when accessed, marks the user as verified and enables the user to
	 * authenticate. This error is thrown when a request to resend the verification
	 * email is made for a user account that has already been verified.
	 *
	 * @returns {number}
	 */
	static get USER_LOGIN_EMAIL_ALREADY_VERIFIED()
	{
		return 262;
	}

	/**
	 * The new user login email is the same as the existing one.
	 * @public
	 *
	 * This error is thrown when a user login email address change is requested and
	 * the new email address is the same as the old one.
	 *
	 * @returns {number}
	 */
	static get USER_LOGIN_EMAIL_IS_THE_SAME()
	{
		return 192;
	}

	/**
	 * User login email is not verified.
	 * @public
	 *
	 * When creating a new user account, a verification email is sent to the
	 * specified email address. For security reasons, most operations are not
	 * allowed on newly created user accounts with an unverified login email
	 * address. This error is thrown when an authentication request or a password
	 * reset request is made for a user that has not yet verified his email address.
	 *
	 * @returns {number}
	 */
	static get USER_LOGIN_EMAIL_NOT_VERIFIED()
	{
		return 46;
	}

	/**
	 * User login session's AES key not found in cookie.
	 * @public
	 *
	 * The cookies do not have the aes_key property set.
	 *
	 * @returns {number}
	 */
	static get USER_LOGIN_SESSION_AES_KEY_NOT_FOUND_IN_COOKIE()
	{
		return 297;
	}

	/**
	 * User login session has expired.
	 * @public
	 *
	 * The user login session has expired.
	 *
	 * @returns {number}
	 */
	static get USER_LOGIN_SESSION_EXPIRED()
	{
		return 298;
	}

	/**
	 * User login session not found.
	 * @public
	 *
	 * The user login session corresponding to a specified user login session ID
	 * (object property, function parameter, etc) was not found.
	 *
	 * @returns {number}
	 */
	static get USER_LOGIN_SESSION_NOT_FOUND()
	{
		return 295;
	}

	/**
	 * User login session not found in cookie.
	 * @public
	 *
	 * The cookies do not have the user_login_session_id property set.
	 *
	 * @returns {number}
	 */
	static get USER_LOGIN_SESSION_NOT_FOUND_IN_COOKIE()
	{
		return 296;
	}

	/**
	 * User not authenticated with Kerberos.
	 * @public
	 *
	 * The user is not authenticated with Kerberos.
	 *
	 * @returns {number}
	 */
	static get USER_NOT_AUTHENTICATED_WITH_KERBEROS()
	{
		return 299;
	}

	/**
	 * User is not billable.
	 * @public
	 *
	 * Only billable users can own infrastructures and be charged for resource
	 * utilization. This error is thrown when a delegated user tries to create an
	 * infrastructure or a server reservation in his own name, when an attempt to
	 * change an infrastructure or a reservation's owner to a non-billable user is
	 * made, or when an infrastructure owner loses his privileges and attempts to
	 * deploy operations other than stopping or deleting elements.
	 *
	 * @returns {number}
	 */
	static get USER_NOT_BILLABLE()
	{
		return 217;
	}

	/**
	 * User not found.
	 * @public
	 *
	 * The user corresponding to a specified user ID (object property, function
	 * parameter, etc) was not found.
	 *
	 * @returns {number}
	 */
	static get USER_NOT_FOUND()
	{
		return 42;
	}

	/**
	 * Duplicate SSH keys are not allowed.
	 * @public
	 *
	 * A user cannot have duplicate SSH keys. This error is thrown when creating a
	 * new SSH key, if the provided key is the same as an already existing, active
	 * SSH key.
	 *
	 * @returns {number}
	 */
	static get USER_SSH_KEY_DUPLICATE()
	{
		return 10;
	}

	/**
	 * SSH key not found.
	 * @public
	 *
	 * This error is thrown when information regarding a specified SSH key is not
	 * found in the database, based on the provided SSH key ID (object property,
	 * function parameter, etc).
	 *
	 * @returns {number}
	 */
	static get USER_SSH_KEY_NOT_FOUND()
	{
		return 6;
	}

	/**
	 * User SSH keys maximum count exceeded.
	 * @public
	 *
	 * There is a minimum and maximum amount of elements of each type that a user
	 * can have. This error is thrown when adding a new SSH key, if the maximum
	 * amount allowed is exceeded. A user can only add a total of 5 SSH keys to his account.
	 *
	 * @returns {number}
	 */
	static get USER_SSH_KEYS_MAXIMUM_COUNT_EXCEEDED()
	{
		return 8;
	}

	/**
	 * User suspended.
	 * @public
	 *
	 * This error is thrown when an attempt to deploy an operation other than a
	 * delete on an infrastructure is made, if the infrastructure owner is
	 * suspended, or when an attempt to create a new server reservation or to
	 * change the owner of an existing server reservation is made, and the new
	 * reservation owner is suspended.
	 *
	 * @returns {number}
	 */
	static get USER_SUSPENDED()
	{
		return 276;
	}

	/**
	 * Wrong e-mail for password authentication.
	 * @public
	 *
	 * This error is thrown when testing the credentials of the logged in user
	 * (stored in a cookie) against the ones received as parameters. The email
	 * address of the already logged in user must coincide with the provided login
	 * email address.
	 *
	 * @returns {number}
	 */
	static get USER_TEST_CREDENTIALS_EMAIL_MISMATCH()
	{
		return 268;
	}

	/**
	 * Drive import already cancelled.
	 * @private
	 *
	 * The import could not be cancelled as it has already been cancelled.
	 *
	 * @returns {number}
	 */
	static get VOLUME_IMPORT_ALREADY_CANCELLED()
	{
		return 124;
	}

	/**
	 * Import already finalized.
	 * @private
	 *
	 * The import could not be cancelled as it has already been finalized.
	 *
	 * @returns {number}
	 */
	static get VOLUME_IMPORT_ALREADY_FINALIZED()
	{
		return 125;
	}

	/**
	 * Provisioner volume import cron function already running.
	 * @private
	 *
	 * The lock could not be acquired. The provisioner_volume_imports_initiate cron
	 * function is already running.
	 *
	 * @returns {number}
	 */
	static get VOLUME_IMPORT_CRON_FUNCTION_ALREADY_RUNNING()
	{
		return 123;
	}

	/**
	 * Flat file size get failed.
	 * @private
	 *
	 * The size of the flat file could not be retrieved.
	 *
	 * @returns {number}
	 */
	static get VOLUME_IMPORT_FLAT_FILE_SIZE_GET_FAILED()
	{
		return 131;
	}

	/**
	 * Invalid import operation.
	 * @private
	 *
	 * The provided import operation for the data types validation function is not
	 * valid. The import operation must be one of the following: "create", "update",
	 *  "delete".
	 *
	 * @returns {number}
	 */
	static get VOLUME_IMPORT_INVALID_OPERATION()
	{
		return 132;
	}

	/**
	 * Invalid OVA file.
	 * @private
	 *
	 * The file MIME does not match the required OVA file MIME. The OVA file must
	 * be a tar archive.
	 *
	 * @returns {number}
	 */
	static get VOLUME_IMPORT_INVALID_OVA()
	{
		return 128;
	}

	/**
	 * Import not cancelled.
	 * @private
	 *
	 * The import could not be restarted. Only cancelled imports can be restarted.
	 *
	 * @returns {number}
	 */
	static get VOLUME_IMPORT_NOT_CANCELLED()
	{
		return 126;
	}

	/**
	 * OVA file deflation failed.
	 * @private
	 *
	 * The OVA file could not be deflated. The OVA file might be broken.
	 *
	 * @returns {number}
	 */
	static get VOLUME_IMPORT_OVA_DEFLATION_FAILED()
	{
		return 130;
	}

	/**
	 * OVA temporary deflation directory creation failed.
	 * @private
	 *
	 * A temporary directory for the OVA deflation could not be created.
	 *
	 * @returns {number}
	 */
	static get VOLUME_IMPORT_OVA_DIRECTORY_CREATION_FAILED()
	{
		return 129;
	}

	/**
	 * OVA MIME get failed.
	 * @private
	 *
	 * The OVA file MIME could not be retrieved.
	 *
	 * @returns {number}
	 */
	static get VOLUME_IMPORT_OVA_MIME_GET_FAILED()
	{
		return 127;
	}

	/**
	 * Volume template is deprecated and cannot be provisioned.
	 * @public
	 *
	 * Volume template is deprecated and cannot be provisioned.
	 *
	 * @returns {number}
	 */
	static get VOLUME_TEMPLATE_DEPRECATED()
	{
		return 323;
	}

	/**
	 * VPLS instance not found.
	 * @private
	 *
	 * This error is thrown when an attempt to retrieve information regarding a
	 * VPLS instance is made, but no information regarding the provided network ID
	 * or switch device ID exists in the database.
	 *
	 * @returns {number}
	 */
	static get VPLS_INSTANCE_NOT_FOUND()
	{
		return 200;
	}

	/**
	 * North switch not found for vpls.
	 * @private
	 *
	 * This error is thrown when an attempt to retrieve information regarding a
	 * VPLS instance is made, but no information regarding the provided network ID
	 * or north switch device ID exists in the database.
	 *
	 * @returns {number}
	 */
	static get VPLS_NORTH_INSTANCE_NOT_FOUND()
	{
		return 215;
	}
};

/**
 * Private error codes are not allowed on public RPC endpoints.
 */
Exception.arrPrivateErrorConstantNames = [
	Exception.BOOT_BOOTABLE_DRIVES_NOT_FOUND,
	Exception.COOKIE_TYPE_NOT_ALLOWED,
	Exception.DHCP_LEASE_COULD_NOT_FIND_FOR_MAC,
	Exception.GENERIC_PRIVATE_ERROR,
	Exception.HDFS_CLUSTER_ALREADY_EXISTS,
	Exception.INFRASTRUCTURE_EXPERIMENTAL_PRIORITY_INVALID,
	Exception.INSTANCE_MATCH_SERVER_NOT_FOUND,
	Exception.IP_COULD_NOT_FIND_FOR_MAC,
	Exception.IP_LAN_ALLOCATION_NOT_SUPPORTED,
	Exception.KRB_INVALID_PRINCIPAL,
	Exception.KRB_OPERATION_NOT_ALLOWED,
	Exception.KRB_OPERATION_NOT_SUPPORTED,
	Exception.KRB_POLICY_NOT_FOUND,
	Exception.KRB_PRINCIPAL_ALREADY_EXISTS,
	Exception.KRB_PRINCIPAL_NOT_FOUND,
	Exception.LOAD_BALANCER_CONFIG_VALUE_UNSUPPORTED,
	Exception.LOAD_BALANCER_HAS_NO_SERVERS,
	Exception.LOAD_BALANCER_INVALID_TYPE,
	Exception.LOAD_BALANCER_SERVER_CONNECTION_FAILED,
	Exception.LOAD_BALANCER_SERVER_EDIT_FAILED,
	Exception.LOAD_BALANCER_SERVER_INVALID_SETTINGS,
	Exception.LOAD_BALANCER_SERVER_NOT_FOUND,
	Exception.MARATHON_SERVER_IS_UNAVAILABLE,
	Exception.MESOS_SERVER_IS_UNAVAILABLE,
	Exception.NO_PROVISIONER_INFRASTRUCTURES_FOUND,
	Exception.OPERATION_TYPE_INVALID,
	Exception.OS_BOOTSTRAP_FAILED,
	Exception.PRIMARY_KEY_NOT_SET,
	Exception.PRODUCT_CHANGE_OPERATION_NOT_FOUND,
	Exception.SERVER_DISK_NOT_FOUND,
	Exception.SERVER_DOES_NOT_HAVE_INSTANCE,
	Exception.SERVER_HAS_INSTANCE,
	Exception.SERVER_INTERFACE_NOT_FOUND,
	Exception.SERVER_NOT_FOUND,
	Exception.SERVER_NOT_RESERVED,
	Exception.SERVER_RESERVED,
	Exception.SERVER_UUID_NOT_FOUND,
	Exception.STORAGE_POOL_DESTINATION_SAME_AS_SOURCE,
	Exception.STORAGE_POOL_NOT_ENOUGH_FREE_SPACE,
	Exception.STORAGE_POOL_NOT_FOUND,
	Exception.STORAGE_VOLUME_TEMPLATE_SNAPSHOT_NOT_FOUND,
	Exception.SUBNET_CREATE_FAILED,
	Exception.SWITCH_DEVICE_INTERFACE_NOT_FOUND,
	Exception.UPLOAD_FAILED,
	Exception.UPLOAD_FILE_CREATION_FAILED,
	Exception.UPLOAD_FILE_MOVE_FAILED,
	Exception.UPLOAD_FILE_OPEN_FAILED,
	Exception.UPLOAD_INVALID_GET_REQUIREMENTS,
	Exception.UPLOAD_STREAM_OPEN_FAILED,
	Exception.VOLUME_IMPORT_ALREADY_CANCELLED,
	Exception.VOLUME_IMPORT_ALREADY_FINALIZED,
	Exception.VOLUME_IMPORT_CRON_FUNCTION_ALREADY_RUNNING,
	Exception.VOLUME_IMPORT_FLAT_FILE_SIZE_GET_FAILED,
	Exception.VOLUME_IMPORT_INVALID_OPERATION,
	Exception.VOLUME_IMPORT_INVALID_OVA,
	Exception.VOLUME_IMPORT_NOT_CANCELLED,
	Exception.VOLUME_IMPORT_OVA_DEFLATION_FAILED,
	Exception.VOLUME_IMPORT_OVA_DIRECTORY_CREATION_FAILED,
	Exception.VOLUME_IMPORT_OVA_MIME_GET_FAILED,
	Exception.VPLS_INSTANCE_NOT_FOUND,
	Exception.VPLS_NORTH_INSTANCE_NOT_FOUND
];


/**
 * Public error codes are allowed on all endpoints.
 */
Exception.arrPublicErrorConstantNames = [
	Exception.API_KEY_MISMATCH,
	Exception.API_KEY_NOT_FOUND,
	Exception.AUTHENTICATOR_OTP_REJECTED,
	Exception.CLUSTER_INSTANCE_ARRAY_HAS_NO_WAN_INTERFACE,
	Exception.CLUSTER_MIXING_NOT_ALLOWED,
	Exception.COMPUTE_NODE_ARRAY_EDIT_DETACHING_DRIVES_INVALID_VALUE,
	Exception.CONTAINER_ARRAY_INTERFACE_NETWORK_ATTACH_NOT_ALLOWED,
	Exception.CONTAINER_ARRAY_INTERFACE_NETWORK_DETACH_NOT_ALLOWED,
	Exception.CONTAINER_PLATFORM_NOT_ENOUGH_RESOURCES,
	Exception.CONTAINER_PLATFORM_NOT_ENOUGH_SPACE_FOR_PERSISTENT_DIRECTORIES,
	Exception.DATA_LOSS_NOT_CONFIRMED,
	Exception.DATACENTER_NOT_FOUND,
	Exception.DISK_TYPE_INVALID,
	Exception.DNS_LABEL_RESERVED,
	Exception.DOMAIN_LABEL_ALREADY_IN_USE,
	Exception.DOMAIN_LABEL_INVALID,
	Exception.DOMAIN_LABEL_UNABLE_TO_RESOLVE,
	Exception.DRIVE_ARRAY_COUNT_DATA_SAFETY_RESTRICTION,
	Exception.DRIVE_ARRAY_DETACH_NOT_ALLOWED,
	Exception.DRIVE_ARRAY_INSTANCE_ARRAY_DETACH_NOT_ALLOWED,
	Exception.DRIVE_ARRAY_IS_ATTACHED,
	Exception.DRIVE_ARRAY_MULTIPLE_ATTACH_NOT_ALLOWED,
	Exception.DRIVE_CANNOT_BE_ATTACHED_TO_A_DELETED_INSTANCE,
	Exception.DRIVE_IS_NOT_ATTACHED,
	Exception.DRIVE_NOT_ACTIVE,
	Exception.DRIVE_SIZE_INVALID,
	Exception.EDIT_MADE_WITH_EXPIRED_OBJECT,
	Exception.EMAIL_ADDRESS_ALREADY_CHANGED,
	Exception.EMAIL_ADDRESS_INVALID,
	Exception.EVENT_NOT_FOUND,
	Exception.FEATURE_NOT_AVAILABLE,
	Exception.FILESYSTEM_NAVIGATOR_ACCESS_CONTROL_EXCEPTION,
	Exception.FILESYSTEM_NAVIGATOR_AUTHENTICATION_FAILURE,
	Exception.FILESYSTEM_NAVIGATOR_COULD_NOT_RESOLVE_URL,
	Exception.FILESYSTEM_NAVIGATOR_FILE_ALREADY_EXISTS,
	Exception.FILESYSTEM_NAVIGATOR_FILE_NOT_FOUND,
	Exception.FILESYSTEM_NAVIGATOR_ILLEGAL_ARGUMENT,
	Exception.FILESYSTEM_NAVIGATOR_IO_EXCEPTION,
	Exception.FILESYSTEM_NAVIGATOR_OFFSET_GREATER_THAN_LENGTH,
	Exception.FILESYSTEM_NAVIGATOR_RUNTIME_EXCEPTION,
	Exception.FILESYSTEM_NAVIGATOR_SECURITY_EXCEPTION,
	Exception.FILESYSTEM_NAVIGATOR_UNSUPPORTED_OPERATION,
	Exception.GENERIC_PUBLIC_ERROR,
	Exception.HARDWARE_CONFIGURATIONS_NOT_FOUND,
	Exception.ILLEGAL_ARGUMENT,
	Exception.INFRASTRUCTURE_NOT_FOUND,
	Exception.INFRASTRUCTURE_READ_ONLY_WHILE_DEPLOYING,
	Exception.INFRASTRUCTURE_USER_REMOVE_NOT_ALLOWED,
	Exception.INFRASTRUCTURES_MIXING_NOT_ALLOWED,
	Exception.INSTANCE_ARRAY_EDIT_DETACHING_DRIVES_INVALID_VALUE,
	Exception.INSTANCE_ARRAY_INTERFACE_NETWORK_ATTACH_NOT_ALLOWED,
	Exception.INSTANCE_ARRAY_INTERFACE_NETWORK_DETACH_NOT_ALLOWED,
	Exception.INSTANCE_ARRAY_INTERFACE_NOT_FOUND,
	Exception.INSTANCE_ARRAY_MIXING_NOT_ALLOWED,
	Exception.INSTANCE_IS_LAST_FROM_INSTANCE_ARRAY,
	Exception.INSTANCE_NOT_ACTIVE,
	Exception.INVALID_COLUMN,
	Exception.INVALID_FORMAT_RSA_CIPHER,
	Exception.INVALID_PASSWORD_CHARACTERS,
	Exception.INVALID_PASSWORD_EMPTY,
	Exception.INVALID_URL_HTTP_ABSOLUTE,
	Exception.INVALID_USER_TYPE,
	Exception.IP_ADDRESS_INVALID,
	Exception.IP_ADDRESS_NOT_FOUND,
	Exception.IP_PROVISION_NO_IP_AVAILABLE,
	Exception.IP_RESERVE_FAILED,
	Exception.KERBEROS_AUTHENTICATION_TIMED_OUT,
	Exception.LANGUAGE_NOT_AVAILABLE,
	Exception.LESS_THAN_MINIMUM_COUNT,
	Exception.MAINTENANCE_MODE,
	Exception.MAXIMUM_COUNT_EXCEEDED,
	Exception.NETWORK_LIMIT_EXCEEDED,
	Exception.NETWORK_NOT_DELETABLE,
	Exception.NETWORK_TYPE_MISMATCH,
	Exception.NOT_ALLOWED_IN_GUEST_MODE,
	Exception.NOT_AUTHENTICATED,
	Exception.NOT_AUTHORIZED,
	Exception.NOT_IMPLEMENTED,
	Exception.NOTHING_TO_UPDATE,
	Exception.OBJECT_IS_INVALID,
	Exception.PARAM_TYPE_MISMATCH,
	Exception.PARAM_VALUE_INVALID,
	Exception.PASSWORD_COMPLEXITY_TOO_LOW,
	Exception.PASSWORD_INCORRECT,
	Exception.PLUGIN_NOT_REGISTERED,
	Exception.PRODUCT_BUSY_DEPLOY_ONGOING,
	Exception.PRODUCT_EDIT_NOT_ALLOWED,
	Exception.PRODUCT_NOT_ACTIVE,
	Exception.PRODUCT_NOT_FOUND,
	Exception.PRODUCT_OPERATION_TYPE_CONFLICTS_PARENT,
	Exception.PRODUCT_WITH_CHANGES_CANNOT_BE_STARTED,
	Exception.PRODUCT_WITH_CHANGES_CANNOT_BE_STOPPED,
	Exception.PROPERTY_IS_MANDATORY,
	Exception.PROPERTY_IS_UNKNOWN,
	Exception.RESOURCE_RESERVATION_NOT_FOUND,
	Exception.SELECTION_LIMIT_EXCEEDED,
	Exception.SERVER_MIGHT_NOT_BE_READY_FOR_POWER_GET,
	Exception.SERVER_POWER_LOCKED_BY_ONGOING_OPERATION,
	Exception.SERVER_POWERED_ON,
	Exception.SERVER_TYPE_NOT_FOUND,
	Exception.SERVER_TYPE_UNAVAILABLE,
	Exception.SERVER_TYPE_UNAVAILABLE_FOR_CONTAINER_PLATFORM,
	Exception.SERVICE_STATUS_INVALID,
	Exception.SHARED_DRIVE_IS_ALREADY_CONNECTED,
	Exception.SHARED_DRIVE_IS_NOT_CONNECTED,
	Exception.SQL_SYNTAX_ERROR,
	Exception.SSH_KEY_DATA_INCORRECT_FORMAT,
	Exception.SSH_KEY_INVALID_DATA_OPENSSH_SSH2,
	Exception.SSH_KEY_INVALID_DATA_PKCS1,
	Exception.SSH_KEY_INVALID_DATA_PKCS8,
	Exception.SSH_KEY_UNKNOWN_FORMAT,
	Exception.SSH_KEY_UNKWOWN_ALGORITHM_IDENTIFIER,
	Exception.STORAGE_SNAPSHOT_NOT_FOUND,
	Exception.STORAGE_VOLUME_TEMPLATE_NOT_FOUND,
	Exception.SUBNET_EXHAUSTED,
	Exception.SUBNET_MAXIMUM_COUNT_REACHED,
	Exception.SUBNET_NETWORK_CHANGING_NOT_ALLOWED,
	Exception.TABLE_NOT_FOUND,
	Exception.TIMESPAN_TOO_GREAT,
	Exception.TIMESTAMP_INVALID,
	Exception.UNSUPPORTED_HASH_ALGO,
	Exception.UPLOAD_INVALID_CHUNK_OFFSET,
	Exception.UPLOAD_POST_TOO_LARGE,
	Exception.URL_TYPE_UNKNOWN,
	Exception.USER_CHANGE_LOGIN_EMAIL_WRONG_ACCOUNT_LOGIN,
	Exception.USER_DELEGATE_CANNOT_ADD_SELF,
	Exception.USER_DISABLED,
	Exception.USER_LOGIN_EMAIL_ALREADY_EXISTS,
	Exception.USER_LOGIN_EMAIL_ALREADY_VERIFIED,
	Exception.USER_LOGIN_EMAIL_IS_THE_SAME,
	Exception.USER_LOGIN_EMAIL_NOT_VERIFIED,
	Exception.USER_LOGIN_SESSION_AES_KEY_NOT_FOUND_IN_COOKIE,
	Exception.USER_LOGIN_SESSION_EXPIRED,
	Exception.USER_LOGIN_SESSION_NOT_FOUND,
	Exception.USER_LOGIN_SESSION_NOT_FOUND_IN_COOKIE,
	Exception.USER_NOT_AUTHENTICATED_WITH_KERBEROS,
	Exception.USER_NOT_BILLABLE,
	Exception.USER_NOT_FOUND,
	Exception.USER_SSH_KEY_DUPLICATE,
	Exception.USER_SSH_KEY_NOT_FOUND,
	Exception.USER_SSH_KEYS_MAXIMUM_COUNT_EXCEEDED,
	Exception.USER_SUSPENDED,
	Exception.USER_TEST_CREDENTIALS_EMAIL_MISMATCH,
	Exception.VOLUME_TEMPLATE_DEPRECATED
];

module.exports = Exception;
const ObjectBase = require('./ObjectBase');

/**
 * A group of InstanceArray and DriveArray infrastructure elements
 * preconfigured for specific workloads or roles. Software (SaaS) is
 * automatically installed for new instances. The preinstalled software is
 * informed when instances are made available or removed.
 *
 * @class
 * @extends ObjectBase
 */
module.exports = 
class Cluster extends ObjectBase
{
	constructor(cluster_type)
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

		if(cluster_type === undefined || cluster_type === null)
			throw new Error("Invalid param in Cluster constructor.");

		this._cluster_type = cluster_type;
	}

	/**
	 * The Cluster's unique label is used to create the cluster_subdomain. It is
	 * editable and can be used to call API functions.
	 */
	get cluster_label()
	{
		return this._cluster_label || null;
	}

	set cluster_label(cluster_label)
	{
		this._cluster_label = cluster_label;
	}

	/**
	 * Automatically created based on cluster_label. It is a unique reference to
	 * the Cluster object.
	 */
	get cluster_subdomain()
	{
		return this._cluster_subdomain || null;
	}

	set cluster_subdomain(cluster_subdomain)
	{
		this._cluster_subdomain = cluster_subdomain;
	}

	/**
	 * The ID of the Cluster which can be used instead of the cluster_label or
	 * cluster_subdomain when calling the API functions. It is automatically
	 * generated and cannot be edited.
	 */
	get cluster_id()
	{
		return this._cluster_id || null;
	}

	set cluster_id(cluster_id)
	{
		this._cluster_id = cluster_id;
	}

	/**
	 * Represents the infrastructure ID to which the Cluster belongs.
	 */
	get infrastructure_id()
	{
		return this._infrastructure_id || null;
	}

	set infrastructure_id(infrastructure_id)
	{
		this._infrastructure_id = infrastructure_id;
	}

	/**
	 * Type of the Cluster. This property is not editable.
	 */
	get cluster_type()
	{
		return this._cluster_type || null;
	}

	set cluster_type(cluster_type)
	{
		this._cluster_type = cluster_type;
	}

	/**
	 * The status of the Cluster.
	 */
	get cluster_service_status()
	{
		return this._cluster_service_status || null;
	}

	set cluster_service_status(cluster_service_status)
	{
		this._cluster_service_status = cluster_service_status;
	}

	/**
	 * The installed cluster software version.
	 */
	get cluster_software_version()
	{
		return this._cluster_software_version || null;
	}

	set cluster_software_version(cluster_software_version)
	{
		this._cluster_software_version = cluster_software_version;
	}

	/**
	 * Cluster services as assigned to each instance
	 */
	get cluster_service_assignment()
	{
		return this._cluster_service_assignment || {};
	}

	set cluster_service_assignment(cluster_service_assignment)
	{
		this._cluster_service_assignment = cluster_service_assignment;
	}

	/**
	 * Specifies if the cluster will be automatically managed or not.
	 */
	get cluster_automatic_management()
	{
		return this._cluster_automatic_management || true;
	}

	set cluster_automatic_management(cluster_automatic_management)
	{
		this._cluster_automatic_management = cluster_automatic_management;
	}

	/**
	 * Information about the instances and the Cluster software.
	 */
	get cluster_app()
	{
		return this._cluster_app || null;
	}

	set cluster_app(cluster_app)
	{
		this._cluster_app = cluster_app;
	}

	/**
	 * The operation type, operation status and modified Cluster object.
	 */
	get cluster_operation()
	{
		return this._cluster_operation || null;
	}

	set cluster_operation(cluster_operation)
	{
		this._cluster_operation = cluster_operation;
	}

	/**
	 * Reserved for GUI users.
	 */
	get cluster_gui_settings_json()
	{
		return this._cluster_gui_settings_json || "";
	}

	set cluster_gui_settings_json(cluster_gui_settings_json)
	{
		this._cluster_gui_settings_json = cluster_gui_settings_json;
	}

	/**
	 * Information about connections between the current Cluster and other clusters.
	 */
	get cluster_connections()
	{
		return this._cluster_connections || [];
	}

	set cluster_connections(cluster_connections)
	{
		this._cluster_connections = cluster_connections;
	}

	/**
	 * The public SSH key used for managing the Cluster.
	 */
	get cluster_ssh_management_public_key()
	{
		return this._cluster_ssh_management_public_key || null;
	}

	set cluster_ssh_management_public_key(cluster_ssh_management_public_key)
	{
		this._cluster_ssh_management_public_key = cluster_ssh_management_public_key;
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
	 * This property helps ensure that edit operations don’t overwrite other,
	 * more recent changes made to the same object. It gets updated automatically
	 * after each successful edit operation.
	 */
	get cluster_change_id()
	{
		return this._cluster_change_id || null;
	}

	set cluster_change_id(cluster_change_id)
	{
		this._cluster_change_id = cluster_change_id;
	}

	/**
	 * The required JSON fields for deserialization.
	 *
	 * @returns {Array}
	 */
	static get JSONRequired()
	{
		return [
			"cluster_type"
		];
	}
};
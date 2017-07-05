const ObjectBase = require('./ObjectBase');

/**
 * A DriveArray is a collection of storage devices mounted via iSCSI.
 *
 * @class
 * @extends ObjectBase
 */
module.exports = 
class DriveArray extends ObjectBase
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
	 * The Drive array's unique label is used to create the drive_array_subdomain.
	 * It is editable and can be used to call API functions.
	 */
	get drive_array_label()
	{
		return this._drive_array_label || null;
	}

	set drive_array_label(drive_array_label)
	{
		this._drive_array_label = drive_array_label;
	}

	/**
	 * Automatically created based on drive_array_label. It is a unique reference
	 * to the Drive array object.
	 */
	get drive_array_subdomain()
	{
		return this._drive_array_subdomain || null;
	}

	set drive_array_subdomain(drive_array_subdomain)
	{
		this._drive_array_subdomain = drive_array_subdomain;
	}

	/**
	 * The ID of the Drive array which can be used instead of the drive_array_label
	 * or drive_array_subdomain when calling the API functions. It is automatically
	 * generated and cannot be edited.
	 */
	get drive_array_id()
	{
		return this._drive_array_id || null;
	}

	set drive_array_id(drive_array_id)
	{
		this._drive_array_id = drive_array_id;
	}

	/**
	 * The volume template ID or name. At the moment, the available templates are
	 * "ubuntu14-04", "ubuntu16-04", "centos6-5", "centos6-6", "centos6-8",
	 * "centos6-9", "centos71v1", "centos7-2", and "centos7-3"
	 */
	get volume_template_id()
	{
		return this._volume_template_id || null;
	}

	set volume_template_id(volume_template_id)
	{
		this._volume_template_id = volume_template_id;
	}

	/**
	 * Represents the child Drives’ type of storage.
	 */
	get drive_array_storage_type()
	{
		return this._drive_array_storage_type || "iscsi_ssd";
	}

	set drive_array_storage_type(drive_array_storage_type)
	{
		this._drive_array_storage_type = drive_array_storage_type;
	}

	/**
	 * The Drive count on the Drive array.
	 */
	get drive_array_count()
	{
		return this._drive_array_count || 1;
	}

	set drive_array_count(drive_array_count)
	{
		this._drive_array_count = drive_array_count;
	}

	/**
	 * The capacity of each Drive in MBytes.
	 */
	get drive_size_mbytes_default()
	{
		return this._drive_size_mbytes_default || 40960;
	}

	set drive_size_mbytes_default(drive_size_mbytes_default)
	{
		this._drive_size_mbytes_default = drive_size_mbytes_default;
	}

	/**
	 * If true, the Drive array and the InstanceArray expand simultaneously. If not
	 * enough Drives are available, new Drives will be created automatically and
	 * attached.
	 */
	get drive_array_expand_with_instance_array()
	{
		return this._drive_array_expand_with_instance_array || true;
	}

	set drive_array_expand_with_instance_array(drive_array_expand_with_instance_array)
	{
		this._drive_array_expand_with_instance_array = drive_array_expand_with_instance_array;
	}

	/**
	 * The infrastructure ID to which the Drive array belongs.
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
	 * The InstanceArray ID to which the Drive array is attached.
	 */
	get instance_array_id()
	{
		return this._instance_array_id || null;
	}

	set instance_array_id(instance_array_id)
	{
		this._instance_array_id = instance_array_id;
	}

	/**
	 * The ContainerArray ID to which the Drive array is attached.
	 */
	get container_array_id()
	{
		return this._container_array_id || null;
	}

	set container_array_id(container_array_id)
	{
		this._container_array_id = container_array_id;
	}

	/**
	 * The status of the Drive array.
	 */
	get drive_array_service_status()
	{
		return this._drive_array_service_status || null;
	}

	set drive_array_service_status(drive_array_service_status)
	{
		this._drive_array_service_status = drive_array_service_status;
	}

	/**
	 * The operation type, operation status and modified Drive array object.
	 */
	get drive_array_operation()
	{
		return this._drive_array_operation || null;
	}

	set drive_array_operation(drive_array_operation)
	{
		this._drive_array_operation = drive_array_operation;
	}

	/**
	 * If not null, then the InstanceArray is part of the specified Cluster.
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
	 * If not null, then the InstanceArray is part of the specified
	 * ContainerCluster.
	 */
	get container_cluster_id()
	{
		return this._container_cluster_id || null;
	}

	set container_cluster_id(container_cluster_id)
	{
		this._container_cluster_id = container_cluster_id;
	}

	/**
	 *
	 */
	get cluster_role_group()
	{
		return this._cluster_role_group || "none";
	}

	set cluster_role_group(cluster_role_group)
	{
		this._cluster_role_group = cluster_role_group;
	}

	/**
	 * Reserved for GUI users.
	 */
	get drive_array_gui_settings_json()
	{
		return this._drive_array_gui_settings_json || "";
	}

	set drive_array_gui_settings_json(drive_array_gui_settings_json)
	{
		this._drive_array_gui_settings_json = drive_array_gui_settings_json;
	}

	/**
	 * ISO 8601 timestamp which holds the date and time when the Drive array was
	 * created. Example format: 2013-11-29T13:00:01Z.
	 */
	get drive_array_created_timestamp()
	{
		return this._drive_array_created_timestamp || "0000-00-00T00:00:00Z";
	}

	set drive_array_created_timestamp(drive_array_created_timestamp)
	{
		this._drive_array_created_timestamp = drive_array_created_timestamp;
	}

	/**
	 * ISO 8601 timestamp which holds the date and time when the Drive array was
	 * edited. Example format: 2013-11-29T13:00:01Z.
	 */
	get drive_array_updated_timestamp()
	{
		return this._drive_array_updated_timestamp || "0000-00-00T00:00:00Z";
	}

	set drive_array_updated_timestamp(drive_array_updated_timestamp)
	{
		this._drive_array_updated_timestamp = drive_array_updated_timestamp;
	}

	/**
	 * The schema type.
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
	get drive_array_change_id()
	{
		return this._drive_array_change_id || null;
	}

	set drive_array_change_id(drive_array_change_id)
	{
		this._drive_array_change_id = drive_array_change_id;
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
const ObjectBase = require('./ObjectBase');

/**
 * A DataLake is a network file system or distributed file system for holding
 * large amounts of data.
 *
 * @class
 * @extends ObjectBase
 */
module.exports = 
class DataLake extends ObjectBase
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
	 * Read-only property which defaults to a value derived from the datacenter
	 * name. The datacenter is inherited from the parent infrastructure.
	 */
	get data_lake_label()
	{
		return (this._data_lake_label !== undefined ? this._data_lake_label : null);
	}

	set data_lake_label(data_lake_label)
	{
		this._data_lake_label = data_lake_label;
	}

	/**
	 * Automatically created based on data_lake_label. It is a unique reference to
	 * the DataLake object.
	 */
	get data_lake_subdomain()
	{
		return (this._data_lake_subdomain !== undefined ? this._data_lake_subdomain : null);
	}

	set data_lake_subdomain(data_lake_subdomain)
	{
		this._data_lake_subdomain = data_lake_subdomain;
	}

	/**
	 * The ID of the DataLake which can be used instead of the data_lake_label or
	 * data_lake_subdomain when calling the API functions. It is automatically
	 * generated and cannot be edited.
	 */
	get data_lake_id()
	{
		return (this._data_lake_id !== undefined ? this._data_lake_id : null);
	}

	set data_lake_id(data_lake_id)
	{
		this._data_lake_id = data_lake_id;
	}

	/**
	 * File system or protocol type.
	 */
	get data_lake_type()
	{
		return (this._data_lake_type !== undefined ? this._data_lake_type : "hdfs");
	}

	set data_lake_type(data_lake_type)
	{
		this._data_lake_type = data_lake_type;
	}

	/**
	 * The infrastructure ID to which the DataLake belongs.
	 */
	get infrastructure_id()
	{
		return (this._infrastructure_id !== undefined ? this._infrastructure_id : null);
	}

	set infrastructure_id(infrastructure_id)
	{
		this._infrastructure_id = infrastructure_id;
	}

	/**
	 * The status of the DataLake.
	 */
	get data_lake_service_status()
	{
		return (this._data_lake_service_status !== undefined ? this._data_lake_service_status : null);
	}

	set data_lake_service_status(data_lake_service_status)
	{
		this._data_lake_service_status = data_lake_service_status;
	}

	/**
	 * Information needed to connect to the HDFS File System.
	 */
	get data_lake_credentials()
	{
		return (this._data_lake_credentials !== undefined ? this._data_lake_credentials : null);
	}

	set data_lake_credentials(data_lake_credentials)
	{
		this._data_lake_credentials = data_lake_credentials;
	}

	/**
	 * The operation type, operation status and modified DataLake object.
	 */
	get data_lake_operation()
	{
		return (this._data_lake_operation !== undefined ? this._data_lake_operation : null);
	}

	set data_lake_operation(data_lake_operation)
	{
		this._data_lake_operation = data_lake_operation;
	}

	/**
	 * Reserved for GUI users.
	 */
	get data_lake_gui_settings_json()
	{
		return (this._data_lake_gui_settings_json !== undefined ? this._data_lake_gui_settings_json : "");
	}

	set data_lake_gui_settings_json(data_lake_gui_settings_json)
	{
		this._data_lake_gui_settings_json = data_lake_gui_settings_json;
	}

	/**
	 * ISO 8601 timestamp which holds the date and time when the DataLake was
	 * created. Example format: 2013-11-29T13:00:01Z.
	 */
	get data_lake_created_timestamp()
	{
		return (this._data_lake_created_timestamp !== undefined ? this._data_lake_created_timestamp : "0000-00-00T00:00:00Z");
	}

	set data_lake_created_timestamp(data_lake_created_timestamp)
	{
		this._data_lake_created_timestamp = data_lake_created_timestamp;
	}

	/**
	 * ISO 8601 timestamp which holds the date and time when the DataLake was
	 * edited. Example format: 2013-11-29T13:00:01Z.
	 */
	get data_lake_updated_timestamp()
	{
		return (this._data_lake_updated_timestamp !== undefined ? this._data_lake_updated_timestamp : "0000-00-00T00:00:00Z");
	}

	set data_lake_updated_timestamp(data_lake_updated_timestamp)
	{
		this._data_lake_updated_timestamp = data_lake_updated_timestamp;
	}

	/**
	 * The schema type.
	 */
	get type()
	{
		return (this._type !== undefined ? this._type : null);
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
	get data_lake_change_id()
	{
		return (this._data_lake_change_id !== undefined ? this._data_lake_change_id : null);
	}

	set data_lake_change_id(data_lake_change_id)
	{
		this._data_lake_change_id = data_lake_change_id;
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
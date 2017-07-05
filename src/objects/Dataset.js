const ObjectBase = require('./ObjectBase');

/**
 * Datasets are sources of data, that can be imported in a DataLake
 *
 * @class
 * @extends ObjectBase
 */
module.exports = 
class Dataset extends ObjectBase
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
	 * The ID of the dataset
	 */
	get dataset_id()
	{
		return this._dataset_id || null;
	}

	set dataset_id(dataset_id)
	{
		this._dataset_id = dataset_id;
	}

	/**
	 * Long description for what the dataset contains
	 */
	get dataset_description()
	{
		return this._dataset_description || null;
	}

	set dataset_description(dataset_description)
	{
		this._dataset_description = dataset_description;
	}

	/**
	 * List of tags representative for the dataset.
	 */
	get dataset_tags()
	{
		return this._dataset_tags || [];
	}

	set dataset_tags(dataset_tags)
	{
		this._dataset_tags = dataset_tags;
	}

	/**
	 * The actual source of the data (not necessarily the maintainer)
	 */
	get dataset_source_display_name()
	{
		return this._dataset_source_display_name || null;
	}

	set dataset_source_display_name(dataset_source_display_name)
	{
		this._dataset_source_display_name = dataset_source_display_name;
	}

	/**
	 * Maintainer name to be displayed in the UI
	 */
	get dataset_maintainer_display_name()
	{
		return this._dataset_maintainer_display_name || null;
	}

	set dataset_maintainer_display_name(dataset_maintainer_display_name)
	{
		this._dataset_maintainer_display_name = dataset_maintainer_display_name;
	}

	/**
	 * The maintainer's user ID.
	 */
	get dataset_maintainer_user_id()
	{
		return this._dataset_maintainer_user_id || null;
	}

	set dataset_maintainer_user_id(dataset_maintainer_user_id)
	{
		this._dataset_maintainer_user_id = dataset_maintainer_user_id;
	}

	/**
	 * List of formats in which the dataset is available.
	 */
	get dataset_formats()
	{
		return this._dataset_formats || [];
	}

	set dataset_formats(dataset_formats)
	{
		this._dataset_formats = dataset_formats;
	}

	/**
	 * ISO 8601 timestamp which holds the date and time when the Dataset was last
	 * updated. Example format: 2013-11-29T13:00:01Z.
	 */
	get dataset_updated_timestamp()
	{
		return this._dataset_updated_timestamp || null;
	}

	set dataset_updated_timestamp(dataset_updated_timestamp)
	{
		this._dataset_updated_timestamp = dataset_updated_timestamp;
	}

	/**
	 * ISO 8601 timestamp which holds the date and time when the Dataset was
	 * created. Example format: 2013-11-29T13:00:01Z.
	 */
	get dataset_created_timestamp()
	{
		return this._dataset_created_timestamp || null;
	}

	set dataset_created_timestamp(dataset_created_timestamp)
	{
		this._dataset_created_timestamp = dataset_created_timestamp;
	}

	/**
	 * The webhdfs URL of the dataset's directory. Example:
	 * 'webhdfs://n59962-data-lake01-lab-master-bucharest.integration.bigstep.io:14000/data_lake/dl9006'
	 */
	get dataset_datalake_path()
	{
		return this._dataset_datalake_path || null;
	}

	set dataset_datalake_path(dataset_datalake_path)
	{
		this._dataset_datalake_path = dataset_datalake_path;
	}

	/**
	 * The dataset size(for all formats), in megabytes.
	 */
	get dataset_size_mbytes()
	{
		return this._dataset_size_mbytes || 0;
	}

	set dataset_size_mbytes(dataset_size_mbytes)
	{
		this._dataset_size_mbytes = dataset_size_mbytes;
	}

	/**
	 * The ID of the parent datalake
	 */
	get dataset_datalake_id()
	{
		return this._dataset_datalake_id || null;
	}

	set dataset_datalake_id(dataset_datalake_id)
	{
		this._dataset_datalake_id = dataset_datalake_id;
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
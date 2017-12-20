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
	constructor(dataset_datacenter)
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

		if(dataset_datacenter === undefined || dataset_datacenter === null)
			throw new Error("Invalid param in Dataset constructor.");

		this._dataset_datacenter = dataset_datacenter;
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
	 * The owner's user ID.
	 */
	get user_id_owner()
	{
		return this._user_id_owner || null;
	}

	set user_id_owner(user_id_owner)
	{
		this._user_id_owner = user_id_owner;
	}

	/**
	 * The change ID (version) of the dataset
	 */
	get dataset_change_id()
	{
		return this._dataset_change_id || null;
	}

	set dataset_change_id(dataset_change_id)
	{
		this._dataset_change_id = dataset_change_id;
	}

	/**
	 * The name of the dataset
	 */
	get dataset_name()
	{
		return this._dataset_name || null;
	}

	set dataset_name(dataset_name)
	{
		this._dataset_name = dataset_name;
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
	 * The commercial license for the dataset
	 */
	get dataset_license_type()
	{
		return this._dataset_license_type || null;
	}

	set dataset_license_type(dataset_license_type)
	{
		this._dataset_license_type = dataset_license_type;
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
	 * The URL for the topmost dataset directory
	 */
	get dataset_url()
	{
		return this._dataset_url || null;
	}

	set dataset_url(dataset_url)
	{
		this._dataset_url = dataset_url;
	}

	/**
	 * The datacenter in which the dataset is available
	 */
	get dataset_datacenter()
	{
		return this._dataset_datacenter || null;
	}

	set dataset_datacenter(dataset_datacenter)
	{
		this._dataset_datacenter = dataset_datacenter;
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
	 * A dataset being published makes it available to users other than the
	 * maintainer
	 */
	get dataset_published()
	{
		return this._dataset_published || false;
	}

	set dataset_published(dataset_published)
	{
		this._dataset_published = dataset_published;
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
			"dataset_datacenter"
		];
	}
};
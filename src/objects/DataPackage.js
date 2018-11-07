const ObjectBase = require('./ObjectBase');

/**
 * datapackage.json files store the metadata of a dataset
 *
 * @class
 * @extends ObjectBase
 */
module.exports = 
class DataPackage extends ObjectBase
{
	constructor(dataset_price, dataset_price_currency)
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

		for(let index = 0; index < 2; index++)
		{
			let arg = arguments[index];

			if(arg === undefined || arg === null)
				throw new Error("Invalid params in DataPackage constructor.");
		}

		this._dataset_price = dataset_price;
		this._dataset_price_currency = dataset_price_currency;
	}

	/**
	 * The name of the dataset
	 */
	get dataset_name()
	{
		return (this._dataset_name !== undefined ? this._dataset_name : null);
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
		return (this._dataset_description !== undefined ? this._dataset_description : null);
	}

	set dataset_description(dataset_description)
	{
		this._dataset_description = dataset_description;
	}

	/**
	 * Total cost of a dataset.
	 */
	get dataset_price()
	{
		return (this._dataset_price !== undefined ? this._dataset_price : null);
	}

	set dataset_price(dataset_price)
	{
		this._dataset_price = dataset_price;
	}

	/**
	 * The currency for the price of the dataset.
	 */
	get dataset_price_currency()
	{
		return (this._dataset_price_currency !== undefined ? this._dataset_price_currency : null);
	}

	set dataset_price_currency(dataset_price_currency)
	{
		this._dataset_price_currency = dataset_price_currency;
	}

	/**
	 * List of tags representative for the dataset.
	 */
	get dataset_tags()
	{
		return (this._dataset_tags !== undefined ? this._dataset_tags : []);
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
		return (this._dataset_source_display_name !== undefined ? this._dataset_source_display_name : null);
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
		return (this._dataset_maintainer_display_name !== undefined ? this._dataset_maintainer_display_name : null);
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
		return (this._dataset_formats !== undefined ? this._dataset_formats : []);
	}

	set dataset_formats(dataset_formats)
	{
		this._dataset_formats = dataset_formats;
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
	 * The required JSON fields for deserialization.
	 *
	 * @returns {Array}
	 */
	static get JSONRequired()
	{
		return [
			"dataset_price",
			"dataset_price_currency"
		];
	}
};
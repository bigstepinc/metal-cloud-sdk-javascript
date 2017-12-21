const ObjectBase = require('./ObjectBase');

/**
 * DataLakeOperation contains information regarding the changes that are to be
 * made to a product. Edit and deploy functions have to be called in order to
 * apply the changes. The operation type and status are unique to each
 * operation object.
 *
 * @class
 * @extends ObjectBase
 */
module.exports = 
class DataLakeOperation extends ObjectBase
{
	constructor(data_lake_label, data_lake_change_id)
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
				throw new Error("Invalid params in DataLakeOperation constructor.");
		}

		this._data_lake_label = data_lake_label;
		this._data_lake_change_id = data_lake_change_id;
	}

	/**
	 * The status of the deploy process.
	 */
	get data_lake_deploy_status()
	{
		return this._data_lake_deploy_status || null;
	}

	set data_lake_deploy_status(data_lake_deploy_status)
	{
		this._data_lake_deploy_status = data_lake_deploy_status;
	}

	/**
	 * The operation applied to the DataLake.
	 */
	get data_lake_deploy_type()
	{
		return this._data_lake_deploy_type || null;
	}

	set data_lake_deploy_type(data_lake_deploy_type)
	{
		this._data_lake_deploy_type = data_lake_deploy_type;
	}

	/**
	 * The DataLake's unique label is used to create the data_lake_subdomain. It is
	 * editable and can be used to call API functions.
	 */
	get data_lake_label()
	{
		return this._data_lake_label || null;
	}

	set data_lake_label(data_lake_label)
	{
		this._data_lake_label = data_lake_label;
	}

	/**
	 * Automatically created based on data_lake_label. It is a unique reference to
	 * the DataLake object..
	 */
	get data_lake_subdomain()
	{
		return this._data_lake_subdomain || null;
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
		return this._data_lake_id || null;
	}

	set data_lake_id(data_lake_id)
	{
		this._data_lake_id = data_lake_id;
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
	get data_lake_change_id()
	{
		return this._data_lake_change_id || null;
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
			"data_lake_label",
			"data_lake_change_id"
		];
	}
};
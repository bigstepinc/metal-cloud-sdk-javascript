const ObjectBase = require('./ObjectBase');

/**
 * Information needed to connect to the HDFS file system.
 *
 * @class
 * @extends ObjectBase
 */
module.exports = 
class DataLakeCredentials extends ObjectBase
{
	constructor(hdfs, kerberos)
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
				throw new Error("Invalid params in DataLakeCredentials constructor.");
		}

		this._hdfs = hdfs;
		this._kerberos = kerberos;
	}

	/**
	 * Information needed to connect to HDFS.
	 */
	get hdfs()
	{
		return this._hdfs || null;
	}

	set hdfs(hdfs)
	{
		this._hdfs = hdfs;
	}

	/**
	 * Information needed for authentication with Kerberos SPNEGO.
	 */
	get kerberos()
	{
		return this._kerberos || null;
	}

	set kerberos(kerberos)
	{
		this._kerberos = kerberos;
	}

	/**
	 * HDFS login tutorial
	 */
	get hdfs_login_tutorial_url()
	{
		return this._hdfs_login_tutorial_url || null;
	}

	set hdfs_login_tutorial_url(hdfs_login_tutorial_url)
	{
		this._hdfs_login_tutorial_url = hdfs_login_tutorial_url;
	}

	/**
	 * Data Lake command line tool tutorial
	 */
	get data_lake_command_line_tool_documentation_url()
	{
		return this._data_lake_command_line_tool_documentation_url || null;
	}

	set data_lake_command_line_tool_documentation_url(data_lake_command_line_tool_documentation_url)
	{
		this._data_lake_command_line_tool_documentation_url = data_lake_command_line_tool_documentation_url;
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
	 * The required JSON fields for deserialization.
	 *
	 * @returns {Array}
	 */
	static get JSONRequired()
	{
		return [
			"hdfs",
			"kerberos"
		];
	}
};
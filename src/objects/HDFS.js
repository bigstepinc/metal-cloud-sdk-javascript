const ObjectBase = require('./ObjectBase');

/**
 * An object with the necessary data to connect through the WebHDFS protocol.
 *
 * @class
 * @extends ObjectBase
 */
module.exports = 
class HDFS extends ObjectBase
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
	 * The home directory of the Data Lake for the specific infrastructure ID.
	 */
	get home_directory()
	{
		return (this._home_directory !== undefined ? this._home_directory : null);
	}

	set home_directory(home_directory)
	{
		this._home_directory = home_directory;
	}

	/**
	 * The ID of the user.
	 */
	get user_id()
	{
		return (this._user_id !== undefined ? this._user_id : null);
	}

	set user_id(user_id)
	{
		this._user_id = user_id;
	}

	/**
	 * The port of the namenode.
	 */
	get namenode_port()
	{
		return (this._namenode_port !== undefined ? this._namenode_port : null);
	}

	set namenode_port(namenode_port)
	{
		this._namenode_port = namenode_port;
	}

	/**
	 * The URL of the namenode.
	 */
	get namenode_url()
	{
		return (this._namenode_url !== undefined ? this._namenode_url : null);
	}

	set namenode_url(namenode_url)
	{
		this._namenode_url = namenode_url;
	}

	/**
	 * An URL used to connect to the File System via WebHDFS. Enables HTTP
	 * operations.
	 */
	get webhdfs_url()
	{
		return (this._webhdfs_url !== undefined ? this._webhdfs_url : null);
	}

	set webhdfs_url(webhdfs_url)
	{
		this._webhdfs_url = webhdfs_url;
	}

	/**
	 * The schema type
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

		];
	}
};
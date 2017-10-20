const ObjectBase = require('./ObjectBase');

/**
 * The Internet traffic.
 *
 * @class
 * @extends ObjectBase
 */
module.exports = 
class ReportInternetTraffic extends ObjectBase
{
	constructor(download, upload)
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
				throw new Error("Invalid params in ReportInternetTraffic constructor.");
		}

		this._download = download;
		this._upload = upload;
	}

	/**
	 * The downloaded data.
	 */
	get download()
	{
		return this._download || null;
	}

	set download(download)
	{
		this._download = download;
	}

	/**
	 * The uploaded data.
	 */
	get upload()
	{
		return this._upload || null;
	}

	set upload(upload)
	{
		this._upload = upload;
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
			"download",
			"upload"
		];
	}
};
const ObjectBase = require('./ObjectBase');

/**
 * A ContainerURI is a group of properties that describes the list of URIs to
 * fetch before a Docker application starts.
 *
 * @class
 * @extends ObjectBase
 */
module.exports = 
class ContainerURI extends ObjectBase
{
	constructor(uri)
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

		if(uri === undefined || uri === null)
			throw new Error("Invalid param in ContainerURI constructor.");

		this._uri = uri;
	}

	/**
	 * URI to be fetched by Mesos fetcher module.
	 */
	get uri()
	{
		return this._uri || null;
	}

	set uri(uri)
	{
		this._uri = uri;
	}

	/**
	 * Set fetched artifact as executable.
	 */
	get executable()
	{
		return this._executable || null;
	}

	set executable(executable)
	{
		this._executable = executable;
	}

	/**
	 *  Extract fetched artifact if supported by Mesos fetcher module.
	 */
	get extract()
	{
		return this._extract || null;
	}

	set extract(extract)
	{
		this._extract = extract;
	}

	/**
	 * Cache fetched artifact if supported by Mesos fetcher module.
	 */
	get cache()
	{
		return this._cache || null;
	}

	set cache(cache)
	{
		this._cache = cache;
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
			"uri"
		];
	}
};
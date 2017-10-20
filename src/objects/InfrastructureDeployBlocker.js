const ObjectBase = require('./ObjectBase');

/**
 * Contains the results of tests performed before commencing an Infrastructure
 * deploy operation in order to identify reasons that would lead to it failing.
 *
 * @class
 * @extends ObjectBase
 */
module.exports = 
class InfrastructureDeployBlocker extends ObjectBase
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
	 *
	 */
	get instance()
	{
		return this._instance || null;
	}

	set instance(instance)
	{
		this._instance = instance;
	}

	/**
	 *
	 */
	get cluster()
	{
		return this._cluster || null;
	}

	set cluster(cluster)
	{
		this._cluster = cluster;
	}

	/**
	 *
	 */
	get instanceArray()
	{
		return this._instanceArray || null;
	}

	set instanceArray(instanceArray)
	{
		this._instanceArray = instanceArray;
	}

	/**
	 *
	 */
	get sshConnectivity()
	{
		return this._sshConnectivity || null;
	}

	set sshConnectivity(sshConnectivity)
	{
		this._sshConnectivity = sshConnectivity;
	}

	/**
	 *
	 */
	get sshAuthentication()
	{
		return this._sshAuthentication || null;
	}

	set sshAuthentication(sshAuthentication)
	{
		this._sshAuthentication = sshAuthentication;
	}

	/**
	 *
	 */
	get apiConnectivity()
	{
		return this._apiConnectivity || null;
	}

	set apiConnectivity(apiConnectivity)
	{
		this._apiConnectivity = apiConnectivity;
	}

	/**
	 *
	 */
	get apiAuthentication()
	{
		return this._apiAuthentication || null;
	}

	set apiAuthentication(apiAuthentication)
	{
		this._apiAuthentication = apiAuthentication;
	}

	/**
	 *
	 */
	get memoryUsageReport()
	{
		return this._memoryUsageReport || null;
	}

	set memoryUsageReport(memoryUsageReport)
	{
		this._memoryUsageReport = memoryUsageReport;
	}

	/**
	 *
	 */
	get saasVersion()
	{
		return this._saasVersion || null;
	}

	set saasVersion(saasVersion)
	{
		this._saasVersion = saasVersion;
	}

	/**
	 *
	 */
	get errorMessage()
	{
		return this._errorMessage || null;
	}

	set errorMessage(errorMessage)
	{
		this._errorMessage = errorMessage;
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

		];
	}
};
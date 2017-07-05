const ObjectBase = require('./ObjectBase');

/**
 * Important infrastructure changes which need to be reviewed before a deploy.
 *
 * @class
 * @extends ObjectBase
 */
module.exports = 
class InfrastructureDeployOverview extends ObjectBase
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
	 * Unused reservations across all owned infrastructures.
	 */
	get unusedServerTypeReservations()
	{
		return this._unusedServerTypeReservations || [];
	}

	set unusedServerTypeReservations(unusedServerTypeReservations)
	{
		this._unusedServerTypeReservations = unusedServerTypeReservations;
	}

	/**
	 * Licenses which are created, reassigned or unused.
	 */
	get licenses()
	{
		return this._licenses || [];
	}

	set licenses(licenses)
	{
		this._licenses = licenses;
	}

	/**
	 * Infrastructure elements such as SharedDrive or Drive which will be shrinked,
	 * stopped or deleted.
	 */
	get dataLoss()
	{
		return this._dataLoss || [];
	}

	set dataLoss(dataLoss)
	{
		this._dataLoss = dataLoss;
	}

	/**
	 * Infrastructure elements which are swapping, allocating or deallocating
	 * servers, allocating or expanding disk space, etc.
	 */
	get resourceChanges()
	{
		return this._resourceChanges || [];
	}

	set resourceChanges(resourceChanges)
	{
		this._resourceChanges = resourceChanges;
	}

	/**
	 * LAN networks that have no InstanceArrays attached to them.
	 */
	get unusedLANNetworks()
	{
		return this._unusedLANNetworks || [];
	}

	set unusedLANNetworks(unusedLANNetworks)
	{
		this._unusedLANNetworks = unusedLANNetworks;
	}

	/**
	 * Infrastructure elements with changed subdomains.
	 */
	get subdomainChanges()
	{
		return this._subdomainChanges || [];
	}

	set subdomainChanges(subdomainChanges)
	{
		this._subdomainChanges = subdomainChanges;
	}

	/**
	 * If this is true, at the end of the deploy, all the servers on the
	 * infrastructure will be powered on.
	 */
	get willAllServersPowerOnAtDeployEnd()
	{
		return this._willAllServersPowerOnAtDeployEnd || null;
	}

	set willAllServersPowerOnAtDeployEnd(willAllServersPowerOnAtDeployEnd)
	{
		this._willAllServersPowerOnAtDeployEnd = willAllServersPowerOnAtDeployEnd;
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
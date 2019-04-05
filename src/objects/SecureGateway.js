const ObjectBase = require('./ObjectBase');

/**
 * Secure gateway instance metadata
 *
 * @class
 * @extends ObjectBase
 */
module.exports = 
class SecureGateway extends ObjectBase
{
	constructor(domain, VRRPIP, datacenterName, SSLCrtFilePath)
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

		for(let index = 0; index < 4; index++)
		{
			let arg = arguments[index];

			if(arg === undefined || arg === null)
				throw new Error("Invalid params in SecureGateway constructor.");
		}

		this._domain = domain;
		this._VRRPIP = VRRPIP;
		this._datacenterName = datacenterName;
		this._SSLCrtFilePath = SSLCrtFilePath;
	}

	/**
	 * The DNS domain pointing to a secure gateway cluster
	 */
	get domain()
	{
		return (this._domain !== undefined ? this._domain : null);
	}

	set domain(domain)
	{
		this._domain = domain;
	}

	/**
	 * VRRP IP pointing to secure gateway cluster
	 */
	get VRRPIP()
	{
		return (this._VRRPIP !== undefined ? this._VRRPIP : null);
	}

	set VRRPIP(VRRPIP)
	{
		this._VRRPIP = VRRPIP;
	}

	/**
	 * The datacenter used for this secure gateway cluster
	 */
	get datacenterName()
	{
		return (this._datacenterName !== undefined ? this._datacenterName : null);
	}

	set datacenterName(datacenterName)
	{
		this._datacenterName = datacenterName;
	}

	/**
	 * The path where SSL certificate is stored
	 */
	get SSLCrtFilePath()
	{
		return (this._SSLCrtFilePath !== undefined ? this._SSLCrtFilePath : null);
	}

	set SSLCrtFilePath(SSLCrtFilePath)
	{
		this._SSLCrtFilePath = SSLCrtFilePath;
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
	 * The ID of the server. It is automatically generated and cannot be edited.
	 */
	get ID()
	{
		return (this._ID !== undefined ? this._ID : null);
	}

	set ID(ID)
	{
		this._ID = ID;
	}

	/**
	 * An array with all the reserved ports
	 */
	get reservedPorts()
	{
		return (this._reservedPorts !== undefined ? this._reservedPorts : []);
	}

	set reservedPorts(reservedPorts)
	{
		this._reservedPorts = reservedPorts;
	}

	/**
	 * An array with all the peers
	 */
	get peers()
	{
		return (this._peers !== undefined ? this._peers : []);
	}

	set peers(peers)
	{
		this._peers = peers;
	}

	/**
	 * The required JSON fields for deserialization.
	 *
	 * @returns {Array}
	 */
	static get JSONRequired()
	{
		return [
			"domain",
			"VRRPIP",
			"datacenterName",
			"SSLCrtFilePath"
		];
	}
};
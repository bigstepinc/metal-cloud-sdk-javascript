const ObjectBase = require('./ObjectBase');

/**
 * Secure gateway node metadata
 *
 * @class
 * @extends ObjectBase
 */
module.exports = 
class SecureGatewayPeer extends ObjectBase
{
	constructor(name, IP, port, privateSSHKey)
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
				throw new Error("Invalid params in SecureGatewayPeer constructor.");
		}

		this._name = name;
		this._IP = IP;
		this._port = port;
		this._privateSSHKey = privateSSHKey;
	}

	/**
	 * Node name. It's how haproxy finds nodes in a cluster
	 */
	get name()
	{
		return (this._name !== undefined ? this._name : null);
	}

	set name(name)
	{
		this._name = name;
	}

	/**
	 * Node IP. It's how ansible connects to each pear
	 */
	get IP()
	{
		return (this._IP !== undefined ? this._IP : null);
	}

	set IP(IP)
	{
		this._IP = IP;
	}

	/**
	 * The port used by haproxy peers to sync stick tables
	 */
	get port()
	{
		return (this._port !== undefined ? this._port : null);
	}

	set port(port)
	{
		this._port = port;
	}

	/**
	 * SSH private key used to allow BSI to connect with ansible
	 */
	get privateSSHKey()
	{
		return (this._privateSSHKey !== undefined ? this._privateSSHKey : null);
	}

	set privateSSHKey(privateSSHKey)
	{
		this._privateSSHKey = privateSSHKey;
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
			"name",
			"IP",
			"port",
			"privateSSHKey"
		];
	}
};
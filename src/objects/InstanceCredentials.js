const ObjectBase = require('./ObjectBase');

/**
 * Information needed to connect to the server via IPMI, iLO etc.
 *
 * @class
 * @extends ObjectBase
 */
module.exports = 
class InstanceCredentials extends ObjectBase
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
	 * SSH credentials.
	 */
	get ssh()
	{
		return (this._ssh !== undefined ? this._ssh : null);
	}

	set ssh(ssh)
	{
		this._ssh = ssh;
	}

	/**
	 * RDP credentials.
	 */
	get rdp()
	{
		return (this._rdp !== undefined ? this._rdp : null);
	}

	set rdp(rdp)
	{
		this._rdp = rdp;
	}

	/**
	 * Deprecated, always null.
	 */
	get ipmi()
	{
		return (this._ipmi !== undefined ? this._ipmi : null);
	}

	set ipmi(ipmi)
	{
		this._ipmi = ipmi;
	}

	/**
	 * Reserved for future use.
	 */
	get telnet()
	{
		return (this._telnet !== undefined ? this._telnet : null);
	}

	set telnet(telnet)
	{
		this._telnet = telnet;
	}

	/**
	 * Deprecated, always null. iLO admin software panel credentials.
	 */
	get ilo()
	{
		return (this._ilo !== undefined ? this._ilo : null);
	}

	set ilo(ilo)
	{
		this._ilo = ilo;
	}

	/**
	 * Deprecated, always null. iDRAC admin software panel credentials.
	 */
	get idrac()
	{
		return (this._idrac !== undefined ? this._idrac : null);
	}

	set idrac(idrac)
	{
		this._idrac = idrac;
	}

	/**
	 * iSCSI initiator credentials.
	 */
	get iscsi()
	{
		return (this._iscsi !== undefined ? this._iscsi : null);
	}

	set iscsi(iscsi)
	{
		this._iscsi = iscsi;
	}

	/**
	 * Information needed to connect to the server via RemoteConsole
	 */
	get remote_console()
	{
		return (this._remote_console !== undefined ? this._remote_console : null);
	}

	set remote_console(remote_console)
	{
		this._remote_console = remote_console;
	}

	/**
	 * iSCSI objects. Shared drive credentials for all the shared drives an
	 * instance is attached to. The shared drives are grouped by their labels.
	 */
	get shared_drives()
	{
		return (this._shared_drives !== undefined ? this._shared_drives : []);
	}

	set shared_drives(shared_drives)
	{
		this._shared_drives = shared_drives;
	}

	/**
	 * IP addresses (can be SUBNET_TYPE_IPV4 or SUBNET_TYPE_IPV6).
	 */
	get ip_addresses_public()
	{
		return (this._ip_addresses_public !== undefined ? this._ip_addresses_public : []);
	}

	set ip_addresses_public(ip_addresses_public)
	{
		this._ip_addresses_public = ip_addresses_public;
	}

	/**
	 * IP addresses (can be SUBNET_TYPE_IPV4 or SUBNET_TYPE_IPV6). Are only allowed
	 * on LAN.
	 */
	get ip_addresses_private()
	{
		return (this._ip_addresses_private !== undefined ? this._ip_addresses_private : []);
	}

	set ip_addresses_private(ip_addresses_private)
	{
		this._ip_addresses_private = ip_addresses_private;
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
const ObjectBase = require('./ObjectBase');

/**
 * Configuration specific to a particular datacenter.
 *
 * @class
 * @extends ObjectBase
 */
module.exports = 
class DatacenterConfig extends ObjectBase
{
	constructor(BSIInternalHAProxyIPs, SANRoutedSubnet, BSIVRRPListenIPv4, BSIMachineListenIPv4List, BSIExternallyVisibleIPv4, repoURLRoot, repoURLRootQuarantineNetwork, NTPServers, DNSServers, TFTPServerWANVRRPListenIPv4, dataLakeEnabled)
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

		for(let index = 0; index < 11; index++)
		{
			let arg = arguments[index];

			if(arg === undefined || arg === null)
				throw new Error("Invalid params in DatacenterConfig constructor.");
		}

		this._BSIInternalHAProxyIPs = BSIInternalHAProxyIPs;
		this._SANRoutedSubnet = SANRoutedSubnet;
		this._BSIVRRPListenIPv4 = BSIVRRPListenIPv4;
		this._BSIMachineListenIPv4List = BSIMachineListenIPv4List;
		this._BSIExternallyVisibleIPv4 = BSIExternallyVisibleIPv4;
		this._repoURLRoot = repoURLRoot;
		this._repoURLRootQuarantineNetwork = repoURLRootQuarantineNetwork;
		this._NTPServers = NTPServers;
		this._DNSServers = DNSServers;
		this._TFTPServerWANVRRPListenIPv4 = TFTPServerWANVRRPListenIPv4;
		this._dataLakeEnabled = dataLakeEnabled;
	}

	/**
	 * Private IP addresses, configured permanently in Metal Cloud head servers on
	 * network interfaces, for the inside network of a HA Proxy server. When Metal
	 * Cloud deploy agents connect to Metal Cloud, unless the connection remote IP
	 * is one of these HA Proxy servers, it will be rejected by Metal Cloud.
	 */
	get BSIInternalHAProxyIPs()
	{
		return this._BSIInternalHAProxyIPs || [];
	}

	set BSIInternalHAProxyIPs(BSIInternalHAProxyIPs)
	{
		this._BSIInternalHAProxyIPs = BSIInternalHAProxyIPs;
	}

	/**
	 * CIDR format subnet. The datacenter SAN subnet, routed and protected by ACLs
	 * on switches.
	 */
	get SANRoutedSubnet()
	{
		return this._SANRoutedSubnet || null;
	}

	set SANRoutedSubnet(SANRoutedSubnet)
	{
		this._SANRoutedSubnet = SANRoutedSubnet;
	}

	/**
	 * This IPv4 address is whitelisted in the switch ACLs as the Metal Cloud head
	 * server - for HTTP/HTTPS calls. VRRP, movable IP. Metal Cloud services listen
	 * on this IP (usually by listening on 0.0.0.0). The IP address moves to
	 * another Metal Cloud machine in case of a fallback.
	 */
	get BSIVRRPListenIPv4()
	{
		return this._BSIVRRPListenIPv4 || null;
	}

	set BSIVRRPListenIPv4(BSIVRRPListenIPv4)
	{
		this._BSIVRRPListenIPv4 = BSIVRRPListenIPv4;
	}

	/**
	 * An array of IP addresses, which are the primary permanent IP addresses of
	 * Metal Cloud head machines of a specific datacenter.
	 */
	get BSIMachineListenIPv4List()
	{
		return this._BSIMachineListenIPv4List || [];
	}

	set BSIMachineListenIPv4List(BSIMachineListenIPv4List)
	{
		this._BSIMachineListenIPv4List = BSIMachineListenIPv4List;
	}

	/**
	 * Metal Cloud services do not listen on this IP and it is not configured on
	 * Metal Cloud head machines. This is a router IP. Metal Cloud head servers
	 * appear to be initiating connections from this IP, so it is used to allow
	 * Metal Cloud through other system firewalls.
	 */
	get BSIExternallyVisibleIPv4()
	{
		return this._BSIExternallyVisibleIPv4 || null;
	}

	set BSIExternallyVisibleIPv4(BSIExternallyVisibleIPv4)
	{
		this._BSIExternallyVisibleIPv4 = BSIExternallyVisibleIPv4;
	}

	/**
	 * HTTP(S) root URL for the general purpose HTTP repository (package manager
	 * resources, deploy setup files, etc.). It does not end in a slash.
	 */
	get repoURLRoot()
	{
		return this._repoURLRoot || null;
	}

	set repoURLRoot(repoURLRoot)
	{
		this._repoURLRoot = repoURLRoot;
	}

	/**
	 * Repo URL root for the quarantine network (installation network) where DNS is
	 * not available yet.
	 */
	get repoURLRootQuarantineNetwork()
	{
		return this._repoURLRootQuarantineNetwork || null;
	}

	set repoURLRootQuarantineNetwork(repoURLRootQuarantineNetwork)
	{
		this._repoURLRootQuarantineNetwork = repoURLRootQuarantineNetwork;
	}

	/**
	 * IP addresses of NTP servers to be used in cloudinit and iLO and other
	 * places. Try to specify at least two.
	 */
	get NTPServers()
	{
		return this._NTPServers || [];
	}

	set NTPServers(NTPServers)
	{
		this._NTPServers = NTPServers;
	}

	/**
	 * IP addresses of DNS servers to be used in the DHCP response and in utility
	 * OS for setting DNS servers in iLO. Try to specify at least two.
	 */
	get DNSServers()
	{
		return this._DNSServers || [];
	}

	set DNSServers(DNSServers)
	{
		this._DNSServers = DNSServers;
	}

	/**
	 * Host (IP:port) of the Windows machine hosting the Key Management Service.
	 * Set to empty string to disable.
	 */
	get KMS()
	{
		return this._KMS || "";
	}

	set KMS(KMS)
	{
		this._KMS = KMS;
	}

	/**
	 * VRRP movable IP. The TFTP service listens on this IP, normally through
	 * 0.0.0.0.
	 */
	get TFTPServerWANVRRPListenIPv4()
	{
		return this._TFTPServerWANVRRPListenIPv4 || null;
	}

	set TFTPServerWANVRRPListenIPv4(TFTPServerWANVRRPListenIPv4)
	{
		this._TFTPServerWANVRRPListenIPv4 = TFTPServerWANVRRPListenIPv4;
	}

	/**
	 * True if Data Lake is set up and available.
	 */
	get dataLakeEnabled()
	{
		return this._dataLakeEnabled || null;
	}

	set dataLakeEnabled(dataLakeEnabled)
	{
		this._dataLakeEnabled = dataLakeEnabled;
	}

	/**
	 * Graphite host (IPv4:port) for the plain text protocol socket. Set to empty
	 * string to disable.
	 */
	get monitoringGraphitePlainTextSocketHost()
	{
		return this._monitoringGraphitePlainTextSocketHost || "";
	}

	set monitoringGraphitePlainTextSocketHost(monitoringGraphitePlainTextSocketHost)
	{
		this._monitoringGraphitePlainTextSocketHost = monitoringGraphitePlainTextSocketHost;
	}

	/**
	 * Graphite host (IPv4:port) for the HTTP Render URL API. Set to empty string
	 * to disable.
	 */
	get monitoringGraphiteRenderURLHost()
	{
		return this._monitoringGraphiteRenderURLHost || "";
	}

	set monitoringGraphiteRenderURLHost(monitoringGraphiteRenderURLHost)
	{
		this._monitoringGraphiteRenderURLHost = monitoringGraphiteRenderURLHost;
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
			"BSIInternalHAProxyIPs",
			"SANRoutedSubnet",
			"BSIVRRPListenIPv4",
			"BSIMachineListenIPv4List",
			"BSIExternallyVisibleIPv4",
			"repoURLRoot",
			"repoURLRootQuarantineNetwork",
			"NTPServers",
			"DNSServers",
			"TFTPServerWANVRRPListenIPv4",
			"dataLakeEnabled"
		];
	}
};
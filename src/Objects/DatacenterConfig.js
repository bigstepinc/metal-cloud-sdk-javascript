const ObjectBase = require("../ObjectBase");

module.exports = 
class DatacenterConfig extends ObjectBase
{
	/**
	 * @protected
	 * 
	 * @returns {{description: string, type: string, properties: Object<propertyName, {type: string|string[], description: string, required: boolean, enum: undefined|string[], items: undefined|{description: string, type: string}, default: string|number|null|boolean, pattern: string|undefined, minLength: number|undefined, maxLength: string|undefined, readonly: boolean|undefined, required: boolean|undefined}>}}
	 */
	_schemaDefinition()
	{
		return {
			"description": "Configuration specific to a particular datacenter.",
			"type": "object",
			"properties": {
				"SANRoutedSubnet": {
					"type": "string",
					"description": "CIDR format subnet. The datacenter SAN subnet, routed and protected by ACLs on switches.",
					"required": true,
					"readonly": false,
					"pattern": "^([0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3})\\/([0-9]{1,2})$"
				},
				"BSIMachinesSubnetIPv4CIDR": {
					"type": "string",
					"description": "BSI servers primary IPs subnet, in CIDR format. All IP addresses in BSIMachineListenIPv4List and BSIVRRPListenIPv4 should be part of this subnet. This subnet is configured on SAN ACLs, other ACLs, customer server's firewall rules, traffic subnet exclusion list for traffic monitoring, etc.",
					"required": true,
					"readonly": false,
					"pattern": "^([0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3})\\/([0-9]{1,2})$"
				},
				"BSIVRRPListenIPv4": {
					"type": "string",
					"description": "This IPv4 address is whitelisted in the switch ACLs as the Metal Cloud head server - for HTTP/HTTPS calls. VRRP, movable IP. Metal Cloud services listen on this IP (usually by listening on 0.0.0.0). The IP address moves to another Metal Cloud machine in case of a fallback.",
					"required": true,
					"readonly": false,
					"pattern": "^([0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3})$"
				},
				"BSIMachineListenIPv4List": {
					"type": "array",
					"description": "An array of IP addresses, which are the primary permanent IP addresses of Metal Cloud head machines of a specific datacenter.",
					"items": {
						"description": "IP addresses.",
						"type": "string",
						"pattern": "^([0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3})$"
					},
					"required": true,
					"readonly": false
				},
				"BSIExternallyVisibleIPv4": {
					"type": "string",
					"description": "Metal Cloud services do not listen on this IP and it is not configured on Metal Cloud head machines. This is a router IP. Metal Cloud head servers appear to be initiating connections from this IP, so it is used to allow Metal Cloud through other system firewalls.",
					"required": true,
					"readonly": false,
					"pattern": "^([0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3})$"
				},
				"repoURLRoot": {
					"type": "string",
					"description": "HTTP(S) root URL for the general purpose HTTP repository (package manager resources, deploy setup files, etc.). It does not end in a slash.",
					"required": true,
					"readonly": false,
					"pattern": "^https?:\\/\\/[^\\s]+$"
				},
				"repoURLRootQuarantineNetwork": {
					"type": "string",
					"description": "Repo URL root for the quarantine network (installation network) where DNS is not available yet.",
					"required": true,
					"readonly": false,
					"pattern": "^https?:\\/\\/[^\\s]+$"
				},
				"NTPServers": {
					"type": "array",
					"description": "IP addresses of NTP servers to be used in cloudinit and iLO and other places. Try to specify at least two.",
					"items": {
						"description": "IP addresses.",
						"type": "string",
						"pattern": "^([0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3})$"
					},
					"required": true,
					"readonly": false
				},
				"DNSServers": {
					"type": "array",
					"description": "IP addresses of DNS servers to be used in the DHCP response and in utility OS for setting DNS servers in iLO. Try to specify at least two.",
					"items": {
						"description": "IP addresses.",
						"type": "string",
						"pattern": "^([0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3})$"
					},
					"required": true,
					"readonly": false
				},
				"KMS": {
					"type": "string",
					"description": "Host (IP:port) of the Windows machine hosting the Key Management Service. Set to empty string to disable.",
					"default": "",
					"required": false,
					"readonly": false,
					"pattern": "^([0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\:[0-9]{1,5})|$"
				},
				"TFTPServerWANVRRPListenIPv4": {
					"type": "string",
					"description": "VRRP movable IP. The TFTP service listens on this IP, normally through 0.0.0.0.",
					"required": true,
					"readonly": false,
					"pattern": "^([0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3})$"
				},
				"dataLakeEnabled": {
					"type": "boolean",
					"description": "True if Data Lake is set up and available.",
					"required": true,
					"readonly": false
				},
				"allowVLANOverrides": {
					"type": "boolean",
					"description": "Allows the end-user to force a VLAN ID (or EPG in CISCO ACI environments). This enables the user to connect to pre-existing VLANs in the established infrastructure.",
					"required": true,
					"readonly": false
				},
				"monitoringGraphitePlainTextSocketHost": {
					"type": "string",
					"description": "Graphite host (IPv4:port) for the plain text protocol socket. Set to empty string to disable.",
					"default": "",
					"required": false,
					"readonly": false,
					"pattern": "^([0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\:[0-9]{1,5})|$"
				},
				"monitoringGraphiteRenderURLHost": {
					"type": "string",
					"description": "Graphite host (IPv4:port) for the HTTP Render URL API. Set to empty string to disable.",
					"required": false,
					"default": "",
					"readonly": false,
					"pattern": "^([0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\:[0-9]{1,5})|$"
				},
				"latitude": {
					"type": "number",
					"description": "Coordinates latitude in decimal degrees.",
					"default": 0,
					"required": false,
					"readonly": false
				},
				"longitude": {
					"type": "number",
					"description": "Coordinates longitude in decimal degrees.",
					"default": 0,
					"required": false,
					"readonly": false
				},
				"address": {
					"type": "string",
					"description": "Address, such as: Chez Gusteau, Paris, France.",
					"default": "",
					"required": false,
					"readonly": false
				},
				"switchProvisioner": {
					"type": "object",
					"description": "Constants used when provisioning network equipment.",
					"required": true,
					"readonly": false,
					"type": [
						"LANProvisioner",
						"VLANProvisioner",
						"VPLSProvisioner",
						"VXLANProvisioner",
						"SDNProvisioner"
					]
				},
				"SambaServer": {
					"type": [
						"SambaServer",
						"null"
					],
					"description": "Credentials for the Samba server of the datacenter.",
					"required": false,
					"readonly": false
				},
				"webProxy": {
					"type": [
						"WebProxy",
						"null"
					],
					"description": "Credentials for the Web proxy server of the datacenter.",
					"required": false,
					"readonly": false
				},
				"type": {
					"type": "string",
					"description": "The schema type",
					"enum": [
						"DatacenterConfig"
					],
					"readonly": true
				}
			}
		};
	}
};

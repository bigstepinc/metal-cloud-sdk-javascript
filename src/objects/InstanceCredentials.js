const ObjectBase = require("./ObjectBase");


module.exports = 
class InstanceCredentials extends ObjectBase
{
	/**
	 * @protected
	 * 
	 * @returns {{description: string, type: string, properties: Object<propertyName, {type: string|string[], description: string, required: boolean, enum: undefined|string[], items: undefined|{description: string, type: string}, default: string|number|null|boolean, pattern: string|undefined, minLength: number|undefined, maxLength: string|undefined, readonly: boolean|undefined, required: boolean|undefined}>}}
	 */
	_schemaDefinition()
	{
		return {
			"description": "Information needed to connect to the server via IPMI, iLO etc.",
			"type": "object",
			"properties": {
				"ssh": {
					"type": [
						"SSH",
						"null"
					],
					"description": "SSH credentials.",
					"default": null,
					"readonly": true
				},
				"rdp": {
					"type": [
						"RDP",
						"null"
					],
					"description": "RDP credentials.",
					"default": null,
					"readonly": true
				},
				"ipmi": {
					"type": [
						"IPMI",
						"null"
					],
					"description": "Deprecated, always null.",
					"default": null,
					"readonly": true
				},
				"telnet": {
					"type": "null",
					"description": "Reserved for future use.",
					"default": null,
					"readonly": true
				},
				"ilo": {
					"type": [
						"iLO",
						"null"
					],
					"description": "Deprecated, always null. iLO admin software panel credentials.",
					"default": null,
					"readonly": true
				},
				"idrac": {
					"type": [
						"iDRAC",
						"null"
					],
					"description": "Deprecated, always null. iDRAC admin software panel credentials.",
					"default": null,
					"readonly": true
				},
				"iscsi": {
					"type": [
						"iSCSIInitiator",
						"null"
					],
					"description": "iSCSI initiator credentials.",
					"default": null,
					"readonly": true
				},
				"remote_console": {
					"type": [
						"RemoteConsole",
						"null"
					],
					"description": "Information needed to connect to the server via RemoteConsole",
					"default": null,
					"readonly": true
				},
				"shared_drives": {
					"type": "array",
					"items": {
						"type": "iSCSI",
						"description": "Shared drive credentials."
					},
					"description": "<a:schema>iSCSI<\/a:schema> objects. Shared drive credentials for all the shared drives an instance is attached to. The shared drives are grouped by their labels.",
					"required": true,
					"readonly": true
				},
				"ip_addresses_public": {
					"type": "array",
					"items": {
						"description": "IP address. Can be <code>SUBNET_TYPE_IPV4<\/code> or <code>SUBNET_TYPE_IPV6<\/code>.",
						"type": "IP"
					},
					"description": "<a:schema>IP<\/a:schema> addresses (can be <code>SUBNET_TYPE_IPV4<\/code> or <code>SUBNET_TYPE_IPV6<\/code>).",
					"readonly": true
				},
				"ip_addresses_private": {
					"type": "array",
					"items": {
						"description": "IP address. Can be <code>SUBNET_TYPE_IPV4<\/code> or <code>SUBNET_TYPE_IPV6<\/code>.",
						"type": "IP"
					},
					"description": "<a:schema>IP<\/a:schema> addresses (can be <code>SUBNET_TYPE_IPV4<\/code> or <code>SUBNET_TYPE_IPV6<\/code>). Are only allowed on LAN.",
					"readonly": true
				},
				"type": {
					"type": "string",
					"description": "The schema type",
					"enum": [
						"InstanceCredentials"
					],
					"readonly": true
				}
			}
		};
	}
};

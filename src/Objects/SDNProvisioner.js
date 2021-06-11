const ObjectBase = require("../ObjectBase");

module.exports = 
class SDNProvisioner extends ObjectBase
{
	/**
	 * @protected
	 * 
	 * @returns {{description: string, type: string, properties: Object<propertyName, {type: string|string[], description: string, required: boolean, enum: undefined|string[], items: undefined|{description: string, type: string}, default: string|number|null|boolean, pattern: string|undefined, minLength: number|undefined, maxLength: string|undefined, readonly: boolean|undefined, required: boolean|undefined}>}}
	 */
	_schemaDefinition()
	{
		return {
			"description": "Holds constants used when SDN provisioning.",
			"type": "object",
			"properties": {
				"quarantineVLANID": {
					"type": "number",
					"description": "The quarantine VLAN ID.",
					"default": 5,
					"required": true,
					"readonly": false
				},
				"WANVLANRange": {
					"type": "string",
					"description": "Port ranges for WAN VLANs. The two extremities are separated by '-'. For example: 100-199.",
					"required": true,
					"readonly": false
				},
				"LANVLANRange": {
					"type": "string",
					"description": "Port ranges for LAN VLANs. The two extremities are separated by '-'. For example: 200-299.",
					"required": true,
					"readonly": false
				},
				"SANVLANRange": {
					"type": "string",
					"description": "Port ranges for SAN VLANs. The two extremities are separated by '-'. For example: 300-399.",
					"required": true,
					"readonly": false
				},
				"type": {
					"type": "string",
					"description": "The schema type.",
					"enum": [
						"SDNProvisioner"
					],
					"readonly": false
				}
			}
		};
	}
};

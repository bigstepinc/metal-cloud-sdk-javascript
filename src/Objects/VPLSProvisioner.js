const ObjectBase = require("../ObjectBase");

module.exports = 
class VPLSProvisioner extends ObjectBase
{
	/**
	 * @protected
	 * 
	 * @returns {{description: string, type: string, properties: Object<propertyName, {type: string|string[], description: string, required: boolean, enum: undefined|string[], items: undefined|{description: string, type: string}, default: string|number|null|boolean, pattern: string|undefined, minLength: number|undefined, maxLength: string|undefined, readonly: boolean|undefined, required: boolean|undefined}>}}
	 */
	_schemaDefinition()
	{
		return {
			"description": "Holds constants used when VPLS provisioning.",
			"type": "object",
			"properties": {
				"quarantineVLANID": {
					"type": "number",
					"description": "The quarantine VLAN ID.",
					"default": 5,
					"required": true,
					"readonly": false
				},
				"ACLSAN": {
					"type": "number",
					"description": "ACL SAN ID.",
					"default": 3999,
					"required": true,
					"readonly": false
				},
				"ACLWAN": {
					"type": "number",
					"description": "ACL WAN ID.",
					"default": 3399,
					"required": true,
					"readonly": false
				},
				"SANACLRange": {
					"type": "string",
					"description": "ID ranges for SAN ACLs. The two extremities are separated by '-'. For example: 3700-3998.",
					"required": true,
					"readonly": false
				},
				"ToRLANVLANRange": {
					"type": "string",
					"description": "Port ranges for ToR LAN VLANs. The two extremities are separated by '-'. For example: 400-699.",
					"required": true,
					"readonly": false
				},
				"ToRSANVLANRange": {
					"type": "string",
					"description": "Port ranges for ToR SAN VLANs. The two extremities are separated by '-'. For example: 700-999.",
					"required": true,
					"readonly": false
				},
				"ToRWANVLANRange": {
					"type": "string",
					"description": "Port ranges for ToR WAN VLANs. The two extremities are separated by '-'. For example: 100-399.",
					"required": true,
					"readonly": false
				},
				"NorthWANVLANRange": {
					"type": "string",
					"description": "Port ranges for North WAN VLANs. The two extremities are separated by '-'. For example: 1001-2000.",
					"required": true,
					"readonly": false
				},
				"type": {
					"type": "string",
					"description": "The schema type.",
					"enum": [
						"VPLSProvisioner"
					],
					"readonly": false
				}
			}
		};
	}
};

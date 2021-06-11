const ObjectBase = require("../ObjectBase");

module.exports = 
class ShutdownOptions extends ObjectBase
{
	/**
	 * @protected
	 * 
	 * @returns {{description: string, type: string, properties: Object<propertyName, {type: string|string[], description: string, required: boolean, enum: undefined|string[], items: undefined|{description: string, type: string}, default: string|number|null|boolean, pattern: string|undefined, minLength: number|undefined, maxLength: string|undefined, readonly: boolean|undefined, required: boolean|undefined}>}}
	 */
	_schemaDefinition()
	{
		return {
			"description": "Configures soft shutdown timeout options and gives a chance to allow or disallow hard shutdowns. Note that the operating systems must honor ACPI commands.",
			"type": "object",
			"properties": {
				"hard_shutdown_after_timeout": {
					"type": "boolean",
					"description": "The timeout can be configured with this object's <code>soft_shutdown_timeout_seconds<\/code> property. If <code>false<\/code>, the <code>infrastructure_deploy()<\/code> call will hang if at least a required server is still powered on. The servers may be powered off manually using <code>instance_server_power_set()<\/code>.",
					"required": true
				},
				"attempt_soft_shutdown": {
					"type": "boolean",
					"description": "An ACPI soft shutdown command will be sent to corresponding servers. If false, a hard shutdown is executed.",
					"required": true
				},
				"soft_shutdown_timeout_seconds": {
					"type": "integer",
					"description": "When the timeout expires, if <code>hard_shutdown_after_timeout<\/code> is <code>true<\/code>, then a hard power off will be attempted. Specifying a long timeout such as 1 day will block edits or deploying other new edits on infrastructure elements until the timeout expires or the servers are powered off. The servers may be powered off manually using <code>instance_server_power_set()<\/code>.",
					"required": true,
					"default": 120,
					"minimum": 30,
					"maximum": 86400
				},
				"type": {
					"type": "string",
					"description": "The schema type",
					"enum": [
						"ShutdownOptions"
					],
					"readonly": true
				}
			}
		};
	}
};

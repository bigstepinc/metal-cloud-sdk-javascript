const ObjectBase = require("../ObjectBase");

module.exports = 
class UserSuspendReason extends ObjectBase
{
	/**
	 * @protected
	 * 
	 * @returns {{description: string, type: string, properties: Object<propertyName, {type: string|string[], description: string, required: boolean, enum: undefined|string[], items: undefined|{description: string, type: string}, default: string|number|null|boolean, pattern: string|undefined, minLength: number|undefined, maxLength: string|undefined, readonly: boolean|undefined, required: boolean|undefined}>}}
	 */
	_schemaDefinition()
	{
		return {
			"description": "A group of InstanceArray and DriveArray infrastructure elements preconfigured for specific workloads or roles. Software (SaaS) is automatically installed for new instances. The preinstalled software is informed when instances are made available or removed.",
			"type": "object",
			"properties": {
				"user_suspend_reason_id": {
					"type": "integer",
					"description": "",
					"required": true,
					"readonly": true
				},
				"user_id": {
					"type": "integer",
					"description": "",
					"readonly": true,
					"required": true
				},
				"user_suspend_reason_public_comment": {
					"type": "string",
					"description": "",
					"required": true,
					"readonly": true
				},
				"user_suspend_reason_created_timestamp": {
					"type": "string",
					"description": "ISO 8601 timestamp which holds the date and time when the user suspend reason was added.",
					"required": true,
					"readonly": true
				},
				"user_suspend_reason_end_timestamp": {
					"type": [
						"string",
						"null"
					],
					"description": "ISO 8601 timestamp which holds the date and time when the user suspend reason was ended.",
					"required": true,
					"readonly": true
				},
				"type": {
					"type": "string",
					"description": "The schema type",
					"enum": [
						"UserSuspendReason"
					],
					"readonly": true
				},
				"user_suspend_reason_private_comment": {
					"type": [
						"string",
						"null"
					],
					"description": "Suspend reason private comment.",
					"required": true
				},
				"user_suspend_reason_type": {
					"type": "string",
					"description": "The suspend reason type",
					"enum": [
						"custom",
						"unpaid"
					],
					"required": true
				}
			}
		};
	}
};

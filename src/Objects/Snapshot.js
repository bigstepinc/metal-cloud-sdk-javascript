const ObjectBase = require("../ObjectBase");

module.exports = 
class Snapshot extends ObjectBase
{
	/**
	 * @protected
	 * 
	 * @returns {{description: string, type: string, properties: Object<propertyName, {type: string|string[], description: string, required: boolean, enum: undefined|string[], items: undefined|{description: string, type: string}, default: string|number|null|boolean, pattern: string|undefined, minLength: number|undefined, maxLength: string|undefined, readonly: boolean|undefined, required: boolean|undefined}>}}
	 */
	_schemaDefinition()
	{
		return {
			"description": "A snapshot of a drive created at a specific time.",
			"type": "object",
			"properties": {
				"drive_snapshot_label": {
					"type": [
						"string",
						"null"
					],
					"description": "The snapshot's unique label is formed based on the <code>snapshot_id<\/code> and the <code>snapshot_created_timestamp<\/code>.",
					"minLength": 1,
					"maxLength": 63,
					"default": null,
					"readonly": true,
					"pattern": "^[a-zA-Z]{1,1}[a-zA-Z0-9-]{0,61}[a-zA-Z0-9]{1,1}|[a-zA-Z]{1,1}$"
				},
				"drive_snapshot_id": {
					"type": [
						"string",
						"integer",
						"null"
					],
					"description": "The ID of the snapshot.",
					"default": null,
					"readonly": true
				},
				"drive_id": {
					"type": [
						"string",
						"integer",
						"null"
					],
					"description": "The ID of the Drive after which the snapshot was created.",
					"default": null,
					"readonly": true
				},
				"drive_snapshot_created_timestamp": {
					"type": [
						"string",
						"null"
					],
					"description": "Date and time when the drive snapshot was created. An ISO 8601 timestamp showing UTC time. Example format: 2013-11-29T13:00:01Z.",
					"default": null,
					"readonly": true
				},
				"type": {
					"type": "string",
					"description": "The schema type",
					"enum": [
						"Snapshot"
					],
					"readonly": true
				}
			}
		};
	}
};

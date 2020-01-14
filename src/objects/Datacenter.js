const ObjectBase = require("./ObjectBase");


module.exports = 
class Datacenter extends ObjectBase
{
	/**
	 * @protected
	 * 
	 * @returns {{description: string, type: string, properties: Object<propertyName, {type: string|string[], description: string, required: boolean, enum: undefined|string[], items: undefined|{description: string, type: string}, default: string|number|null|boolean, pattern: string|undefined, minLength: number|undefined, maxLength: string|undefined, readonly: boolean|undefined, required: boolean|undefined}>}}
	 */
	_schemaDefinition()
	{
		return {
			"description": "Datacenter with physical resources which may be allocated to infrastructures.",
			"type": "object",
			"properties": {
				"datacenter_name": {
					"type": [
						"string",
						"null"
					],
					"description": "Uniquely identifies a datacenter.",
					"minLength": 1,
					"maxLength": 63,
					"required": true,
					"pattern": "^[a-zA-Z]{1,1}[a-zA-Z0-9-]{0,61}[a-zA-Z0-9]{1,1}|[a-zA-Z]{1,1}$"
				},
				"user_id": {
					"type": [
						"integer",
						"null"
					],
					"description": "The owner's user ID. <code>Null</code> represents a publicly available datacenter. If a user ID is specified, the datacenter is private.",
					"default": null
				},
				"datacenter_display_name": {
					"type": "string",
					"description": "Datacenter name for user interfaces.",
					"maxLength": 255,
					"minLength": 1,
					"required": true
				},
				"datacenter_is_master": {
					"type": "boolean",
					"description": "Default datacenter for some internal logic.",
					"default": false,
					"readonly": false,
					"required": false
				},
				"datacenter_is_maintenance": {
					"type": "boolean",
					"description": "Infrastructures and some resources are read-only for API requests while the parent datacenter is in maintenance mode.",
					"default": false,
					"readonly": false,
					"required": false
				},
				"datacenter_type": {
					"enum": [
						"metal_cloud",
						"agents_cloud",
						"aws_ec2"
					],
					"type": "string",
					"description": "",
					"default": "metal_cloud",
					"readonly": false
				},
				"datacenter_created_timestamp": {
					"type": "string",
					"description": "ISO 8601 timestamp which holds the date and time when the datacenter was created through the API. Example format: 2013-11-29T13:00:01Z.",
					"default": "0000-00-00T00:00:00Z",
					"readonly": true
				},
				"datacenter_updated_timestamp": {
					"type": "string",
					"description": "ISO 8601 timestamp which holds the date and time when the datacenter was created through the API. Example format: 2013-11-29T13:00:01Z.",
					"default": "0000-00-00T00:00:00Z",
					"readonly": true
				},
				"datacenter_hidden": {
					"type": "boolean",
					"description": "True for datacenters which are under construction, beeing phased out, are to be avoided temporarily, or no longer exist.",
					"default": false,
					"readonly": false,
					"required": false
				},
				"type": {
					"type": "string",
					"description": "The schema type",
					"enum": [
						"Datacenter"
					],
					"readonly": true
				}
			}
		};
	}
};

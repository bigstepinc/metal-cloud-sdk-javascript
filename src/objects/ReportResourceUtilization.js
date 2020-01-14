const ObjectBase = require("./ObjectBase");


module.exports = 
class ReportResourceUtilization extends ObjectBase
{
	/**
	 * @protected
	 * 
	 * @returns {{description: string, type: string, properties: Object<propertyName, {type: string|string[], description: string, required: boolean, enum: undefined|string[], items: undefined|{description: string, type: string}, default: string|number|null|boolean, pattern: string|undefined, minLength: number|undefined, maxLength: string|undefined, readonly: boolean|undefined, required: boolean|undefined}>}}
	 */
	_schemaDefinition()
	{
		return {
			"description": "All the detailed costs for Drives, Instances and Subnets.",
			"type": "object",
			"properties": {
				"drives": {
					"type": "ReportUtilization",
					"description": "",
					"required": true
				},
				"instances": {
					"type": "ReportUtilization",
					"description": "",
					"required": true
				},
				"subnets": {
					"type": "ReportUtilization",
					"description": "",
					"required": true
				},
				"type": {
					"type": "string",
					"description": "The schema type",
					"enum": [
						"ReportResourceUtilization"
					],
					"readonly": true
				}
			}
		};
	}
};

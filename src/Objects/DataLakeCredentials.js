const ObjectBase = require("../ObjectBase");

module.exports = 
class DataLakeCredentials extends ObjectBase
{
	/**
	 * @protected
	 * 
	 * @returns {{description: string, type: string, properties: Object<propertyName, {type: string|string[], description: string, required: boolean, enum: undefined|string[], items: undefined|{description: string, type: string}, default: string|number|null|boolean, pattern: string|undefined, minLength: number|undefined, maxLength: string|undefined, readonly: boolean|undefined, required: boolean|undefined}>}}
	 */
	_schemaDefinition()
	{
		return {
			"description": "Information needed to connect to the HDFS file system.",
			"type": "object",
			"properties": {
				"hdfs": {
					"type": [
						"HDFS"
					],
					"description": "Information needed to connect to HDFS.",
					"required": true
				},
				"kerberos": {
					"type": [
						"Kerberos"
					],
					"description": "Information needed for authentication with Kerberos SPNEGO.",
					"required": true
				},
				"hdfs_login_tutorial_url": {
					"type": "string",
					"description": "HDFS login tutorial",
					"readonly": true
				},
				"data_lake_command_line_tool_documentation_url": {
					"type": "string",
					"description": "Data Lake command line tool tutorial",
					"readonly": true
				},
				"type": {
					"type": "string",
					"description": "The schema type",
					"enum": [
						"DataLakeCredentials"
					],
					"readonly": true
				}
			}
		};
	}
};

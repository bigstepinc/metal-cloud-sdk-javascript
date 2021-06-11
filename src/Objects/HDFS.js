const ObjectBase = require("../ObjectBase");

module.exports = 
class HDFS extends ObjectBase
{
	/**
	 * @protected
	 * 
	 * @returns {{description: string, type: string, properties: Object<propertyName, {type: string|string[], description: string, required: boolean, enum: undefined|string[], items: undefined|{description: string, type: string}, default: string|number|null|boolean, pattern: string|undefined, minLength: number|undefined, maxLength: string|undefined, readonly: boolean|undefined, required: boolean|undefined}>}}
	 */
	_schemaDefinition()
	{
		return {
			"description": "An object with the necessary data to connect through the WebHDFS protocol.",
			"type": "object",
			"properties": {
				"home_directory": {
					"type": [
						"string",
						"null"
					],
					"description": "The home directory of the Data Lake for the specific infrastructure ID.",
					"required": true,
					"readonly": true
				},
				"user_id": {
					"type": [
						"integer",
						"null"
					],
					"required": true,
					"description": "The ID of the user.",
					"readonly": true
				},
				"namenode_port": {
					"type": [
						"integer"
					],
					"required": true,
					"description": "The port of the namenode.",
					"readonly": true
				},
				"namenode_url": {
					"type": [
						"string",
						"null"
					],
					"required": true,
					"description": "The URL of the namenode.",
					"readonly": true
				},
				"webhdfs_url": {
					"type": [
						"string",
						"null"
					],
					"required": true,
					"description": "An URL used to connect to the File System via WebHDFS. Enables HTTP operations. ",
					"readonly": true
				},
				"type": {
					"type": "string",
					"description": "The schema type",
					"enum": [
						"HDFS"
					],
					"readonly": true
				}
			}
		};
	}
};

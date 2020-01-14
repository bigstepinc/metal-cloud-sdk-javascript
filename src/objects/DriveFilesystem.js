const ObjectBase = require("./ObjectBase");


module.exports = 
class DriveFilesystem extends ObjectBase
{
	/**
	 * @protected
	 * 
	 * @returns {{description: string, type: string, properties: Object<propertyName, {type: string|string[], description: string, required: boolean, enum: undefined|string[], items: undefined|{description: string, type: string}, default: string|number|null|boolean, pattern: string|undefined, minLength: number|undefined, maxLength: string|undefined, readonly: boolean|undefined, required: boolean|undefined}>}}
	 */
	_schemaDefinition()
	{
		return {
			"description": "Contains details about the file system of a Drive.",
			"type": "object",
			"properties": {
				"drive_filesystem_type": {
					"type": "string",
					"description": "The file system type of the Drive.",
					"enum": [
						"none",
						"ext3",
						"ext4"
					],
					"required": true
				},
				"drive_filesystem_block_size_bytes": {
					"type": [
						"integer",
						"null"
					],
					"description": "The file system block size of the Drive.",
					"required": true
				},
				"drive_filesystem_mount_path": {
					"type": [
						"string",
						"null"
					],
					"description": "The path where the Drive is or will be mounted.",
					"readonly": true
				},
				"type": {
					"type": "string",
					"description": "The schema type",
					"enum": [
						"DriveFilesystem"
					],
					"readonly": true
				}
			}
		};
	}
};

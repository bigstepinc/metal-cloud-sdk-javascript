const ObjectBase = require("./ObjectBase");


module.exports = 
class DriveArrayFilesystem extends ObjectBase
{
	/**
	 * @protected
	 * 
	 * @returns {{description: string, type: string, properties: Object<propertyName, {type: string|string[], description: string, required: boolean, enum: undefined|string[], items: undefined|{description: string, type: string}, default: string|number|null|boolean, pattern: string|undefined, minLength: number|undefined, maxLength: string|undefined, readonly: boolean|undefined, required: boolean|undefined}>}}
	 */
	_schemaDefinition()
	{
		return {
			"description": "Contains details about the file system of the Drives belonging to a DriveArray.",
			"type": "object",
			"properties": {
				"drive_array_filesystem_type_default": {
					"type": "string",
					"description": "The file system type of the Drives belonging to a DriveArray.",
					"enum": [
						"none",
						"ext3",
						"ext4"
					],
					"required": true
				},
				"drive_array_filesystem_block_size_bytes_default": {
					"type": [
						"integer",
						"null"
					],
					"description": "The file system block size of the Drives belonging to a DriveArray.",
					"required": true
				},
				"type": {
					"type": "string",
					"description": "The schema type",
					"enum": [
						"DriveArrayFilesystem"
					],
					"readonly": true
				}
			}
		};
	}
};

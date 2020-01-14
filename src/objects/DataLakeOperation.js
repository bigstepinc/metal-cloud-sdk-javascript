const ObjectBase = require("./ObjectBase");


module.exports = 
class DataLakeOperation extends ObjectBase
{
	/**
	 * @protected
	 * 
	 * @returns {{description: string, type: string, properties: Object<propertyName, {type: string|string[], description: string, required: boolean, enum: undefined|string[], items: undefined|{description: string, type: string}, default: string|number|null|boolean, pattern: string|undefined, minLength: number|undefined, maxLength: string|undefined, readonly: boolean|undefined, required: boolean|undefined}>}}
	 */
	_schemaDefinition()
	{
		return {
			"description": "DataLakeOperation contains information regarding the changes that are to be made to a product. Edit and deploy functions have to be called in order to apply the changes. The operation type and status are unique to each operation object.",
			"type": "object",
			"properties": {
				"data_lake_deploy_status": {
					"enum": [
						"not_started",
						"ongoing",
						"finished"
					],
					"type": [
						"string",
						"null"
					],
					"description": "The status of the deploy process.",
					"default": null,
					"readonly": true
				},
				"data_lake_deploy_type": {
					"enum": [
						"create",
						"delete",
						"edit",
						"start",
						"stop"
					],
					"type": [
						"string",
						"null"
					],
					"description": "The operation applied to the DataLake.",
					"default": null,
					"readonly": true
				},
				"data_lake_label": {
					"type": "string",
					"description": "The DataLake's unique label is used to create the <code>data_lake_subdomain<\/code>. It is editable and can be used to call API functions.",
					"minLength": 1,
					"maxLength": 63,
					"required": true,
					"pattern": "^[a-zA-Z]{1,1}[a-zA-Z0-9-]{0,61}[a-zA-Z0-9]{1,1}|[a-zA-Z]{1,1}$"
				},
				"data_lake_subdomain": {
					"type": [
						"string",
						"null"
					],
					"description": "Automatically created based on <code>data_lake_label<\/code>. It is a unique reference to the DataLake object..",
					"default": null,
					"readonly": true
				},
				"data_lake_id": {
					"type": [
						"integer",
						"null",
						"string"
					],
					"description": "The ID of the DataLake which can be used instead of the <code>data_lake_label<\/code> or <code>data_lake_subdomain<\/code> when calling the API functions. It is automatically generated and cannot be edited.",
					"default": null,
					"readonly": true
				},
				"type": {
					"type": "string",
					"description": "The schema type.",
					"enum": [
						"DataLakeOperation"
					],
					"readonly": true
				},
				"data_lake_change_id": {
					"type": "integer",
					"description": "This property helps ensure that edit operations don\u2019t overwrite other, more recent changes made to the same object. It gets updated automatically after each successful edit operation.",
					"required": true
				}
			}
		};
	}
};

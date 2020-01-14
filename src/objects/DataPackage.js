const ObjectBase = require("./ObjectBase");


module.exports = 
class DataPackage extends ObjectBase
{
	/**
	 * @protected
	 * 
	 * @returns {{description: string, type: string, properties: Object<propertyName, {type: string|string[], description: string, required: boolean, enum: undefined|string[], items: undefined|{description: string, type: string}, default: string|number|null|boolean, pattern: string|undefined, minLength: number|undefined, maxLength: string|undefined, readonly: boolean|undefined, required: boolean|undefined}>}}
	 */
	_schemaDefinition()
	{
		return {
			"description": "datapackage.json files store the metadata of a dataset",
			"type": "object",
			"properties": {
				"dataset_name": {
					"type": [
						"null",
						"string"
					],
					"description": "The name of the dataset",
					"maxLength": 8192,
					"required": true,
					"default": null
				},
				"dataset_description": {
					"type": [
						"null",
						"string"
					],
					"description": "Long description for what the dataset contains",
					"maxLength": 8192,
					"required": true,
					"default": null
				},
				"dataset_price": {
					"type": [
						"number",
						"string"
					],
					"description": "Total cost of a dataset.",
					"required": true,
					"minimum": 0,
					"maximum": 999999999
				},
				"dataset_price_currency": {
					"type": "string",
					"enum": [
						"GBP",
						"USD",
						"EUR"
					],
					"description": "The currency for the price of the dataset.",
					"required": true
				},
				"dataset_tags": {
					"type": [
						"array",
						"null"
					],
					"items": {
						"type": "string",
						"description": ""
					},
					"description": "List of tags representative for the dataset.",
					"default": [
						
					],
					"required": true
				},
				"dataset_source_display_name": {
					"type": [
						"null",
						"string"
					],
					"description": "The actual source of the data (not necessarily the maintainer)",
					"maxLength": 255,
					"required": true,
					"default": null
				},
				"dataset_maintainer_display_name": {
					"type": [
						"null",
						"string"
					],
					"description": "Maintainer name to be displayed in the UI",
					"maxLength": 255,
					"required": true,
					"default": null
				},
				"dataset_formats": {
					"type": [
						"array",
						"null"
					],
					"items": {
						"type": "string",
						"description": ""
					},
					"description": "List of formats in which the dataset is available.",
					"default": [
						
					],
					"required": true
				},
				"type": {
					"type": "string",
					"description": "The schema type.",
					"enum": [
						"DataPackage"
					],
					"readonly": true
				}
			}
		};
	}
};

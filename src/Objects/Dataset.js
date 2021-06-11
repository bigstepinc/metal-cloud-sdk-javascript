const ObjectBase = require("../ObjectBase");

module.exports = 
class Dataset extends ObjectBase
{
	/**
	 * @protected
	 * 
	 * @returns {{description: string, type: string, properties: Object<propertyName, {type: string|string[], description: string, required: boolean, enum: undefined|string[], items: undefined|{description: string, type: string}, default: string|number|null|boolean, pattern: string|undefined, minLength: number|undefined, maxLength: string|undefined, readonly: boolean|undefined, required: boolean|undefined}>}}
	 */
	_schemaDefinition()
	{
		return {
			"description": "Datasets are sources of data, that can be imported in a DataLake",
			"type": "object",
			"properties": {
				"dataset_id": {
					"type": [
						"integer",
						"null",
						"string"
					],
					"description": "The ID of the dataset",
					"default": null,
					"readonly": true
				},
				"user_id_owner": {
					"type": [
						"integer",
						"string",
						"null"
					],
					"description": "The owner's user ID.",
					"default": null
				},
				"dataset_version": {
					"type": [
						"integer",
						"null",
						"string"
					],
					"description": "The version of the dataset",
					"default": null
				},
				"dataset_name": {
					"type": [
						"string"
					],
					"description": "The name of the dataset",
					"maxLength": 8192,
					"required": true
				},
				"dataset_description": {
					"type": [
						"string"
					],
					"description": "Long description for what the dataset contains",
					"maxLength": 8192,
					"required": true
				},
				"dataset_license_type": {
					"type": [
						"null",
						"string"
					],
					"description": "The commercial license for the dataset",
					"maxLength": 8192,
					"required": false,
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
						"array"
					],
					"items": {
						"type": "string",
						"description": ""
					},
					"description": "List of tags representative for the dataset.",
					"required": true
				},
				"dataset_url": {
					"type": [
						"string"
					],
					"description": "The URL for the topmost dataset directory",
					"required": true,
					"readonly": true
				},
				"datacenter_name": {
					"type": [
						"string"
					],
					"description": "The datacenter in which the dataset is available",
					"required": true
				},
				"dataset_source_display_name": {
					"type": [
						"string"
					],
					"description": "The actual source of the data (not necessarily the maintainer)",
					"maxLength": 255,
					"required": true
				},
				"dataset_maintainer_display_name": {
					"type": [
						"string"
					],
					"description": "Maintainer name to be displayed in the UI",
					"maxLength": 255,
					"required": true
				},
				"dataset_formats": {
					"type": [
						"array"
					],
					"items": {
						"type": "string",
						"description": ""
					},
					"description": "List of formats in which the dataset is available.",
					"required": true
				},
				"dataset_updated_timestamp": {
					"type": [
						"string",
						"null"
					],
					"description": "ISO 8601 timestamp which holds the date and time when the Dataset was last updated. Example format: 2013-11-29T13:00:01Z.",
					"readonly": true,
					"required": false,
					"default": null
				},
				"dataset_created_timestamp": {
					"type": [
						"string",
						"null"
					],
					"description": "ISO 8601 timestamp which holds the date and time when the Dataset was created. Example format: 2013-11-29T13:00:01Z.",
					"readonly": true,
					"required": false,
					"default": null
				},
				"dataset_size_mbytes": {
					"type": [
						"integer",
						"null"
					],
					"minimum": 0,
					"maximum": 1000000000000,
					"description": "The dataset size(for all formats), in megabytes.",
					"readonly": true,
					"default": 0
				},
				"dataset_published": {
					"type": [
						"boolean"
					],
					"description": "A dataset being published makes it available to users other than the maintainer",
					"default": false
				},
				"dataset_readme_file_name": {
					"type": [
						"null",
						"string"
					],
					"description": "The name of the dataset readme file",
					"maxLength": 255,
					"readonly": true,
					"default": null
				},
				"dataset_readme_file_size_bytes": {
					"type": [
						"null",
						"integer"
					],
					"description": "The size in bytes of the dataset readme file",
					"readonly": true,
					"minimum": 0,
					"maximum": 104857600,
					"default": null
				},
				"type": {
					"type": "string",
					"description": "The schema type.",
					"enum": [
						"Dataset"
					],
					"readonly": true
				}
			}
		};
	}
};

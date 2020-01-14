const ObjectBase = require("./ObjectBase");


module.exports = 
class AppKafkaInstance extends ObjectBase
{
	/**
	 * @protected
	 * 
	 * @returns {{description: string, type: string, properties: Object<propertyName, {type: string|string[], description: string, required: boolean, enum: undefined|string[], items: undefined|{description: string, type: string}, default: string|number|null|boolean, pattern: string|undefined, minLength: number|undefined, maxLength: string|undefined, readonly: boolean|undefined, required: boolean|undefined}>}}
	 */
	_schemaDefinition()
	{
		return {
			"description": "Details about the Container object specific to Kafka.",
			"type": "object",
			"properties": {
				"container_array_id": {
					"type": [
						"integer",
						"null",
						"string"
					],
					"description": "The ID of the ContainerArray associated with the node.",
					"readonly": true
				},
				"container_array_label": {
					"type": [
						"null",
						"string"
					],
					"description": "The label of the ContainerArray associated with the node.",
					"readonly": true
				},
				"type": {
					"type": "string",
					"description": "The schema type",
					"enum": [
						"AppKafkaInstance"
					],
					"readonly": true
				}
			}
		};
	}
};

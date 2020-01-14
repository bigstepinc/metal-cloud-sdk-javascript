const ObjectBase = require("./ObjectBase");


module.exports = 
class ContainerArrayPortMapping extends ObjectBase
{
	/**
	 * @protected
	 * 
	 * @returns {{description: string, type: string, properties: Object<propertyName, {type: string|string[], description: string, required: boolean, enum: undefined|string[], items: undefined|{description: string, type: string}, default: string|number|null|boolean, pattern: string|undefined, minLength: number|undefined, maxLength: string|undefined, readonly: boolean|undefined, required: boolean|undefined}>}}
	 */
	_schemaDefinition()
	{
		return {
			"description": "ContainerArray port resource that facilitates inter-container and external communication.",
			"type": "object",
			"properties": {
				"port_mapping_name": {
					"type": "string",
					"description": "Port resource name.",
					"required": true
				},
				"port_mapping_container_port": {
					"type": "integer",
					"description": "Port the application inside the container listens to. May be used for inter-container communication.",
					"required": true
				},
				"port_mapping_service_port": {
					"type": [
						"integer",
						"null"
					],
					"description": "Port the container must be accessible on from external sources. May be used for external communication.",
					"default": null,
					"required": false
				},
				"port_mapping_protocol": {
					"type": "string",
					"description": "Port communication protocol.",
					"enum": [
						"TCP",
						"UDP"
					],
					"default": "TCP",
					"required": true
				},
				"type": {
					"type": "string",
					"description": "The schema type.",
					"enum": [
						"ContainerArrayPortMapping"
					],
					"readonly": true
				}
			}
		};
	}
};

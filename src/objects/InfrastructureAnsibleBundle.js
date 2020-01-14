const ObjectBase = require("./ObjectBase");


module.exports = 
class InfrastructureAnsibleBundle extends ObjectBase
{
	/**
	 * @protected
	 * 
	 * @returns {{description: string, type: string, properties: Object<propertyName, {type: string|string[], description: string, required: boolean, enum: undefined|string[], items: undefined|{description: string, type: string}, default: string|number|null|boolean, pattern: string|undefined, minLength: number|undefined, maxLength: string|undefined, readonly: boolean|undefined, required: boolean|undefined}>}}
	 */
	_schemaDefinition()
	{
		return {
			"description": "An Infrastructure Ansible bundle is an association of an AnsibleBundle, an Infrastructure and a run level priority index.",
			"type": "object",
			"properties": {
				"infrastructure_ansible_bundle_id": {
					"type": "integer",
					"description": "Unique Infrastructure, AnsibleBundle and run level index association ID.",
					"required": true,
					"minimum": 1
				},
				"ansible_bundle_id": {
					"type": "integer",
					"description": "Represents an <a:schema>AnsibleBundle</a:schema>.",
					"required": true,
					"minimum": 1
				},
				"infrastructure_id": {
					"type": "integer",
					"description": "Represents an <a:schema>Infrastructure</a:schema>",
					"required": true,
					"minimum": 1
				},
				"infrastructure_ansible_bundle_run_level": {
					"type": "integer",
					"description": "Run priority index. 0 runs first. If multiple AnsibleBundles are on the same priority they run in parallel.",
					"required": true,
					"minimum": 0
				},
				"infrastructure_ansible_runner_output_json": {
					"type": [
						"string",
						"null"
					],
					"description": "Unstructured JSON.",
					"required": false,
					"default": null
				},
				"type": {
					"type": "string",
					"description": "The schema type",
					"enum": [
						"InfrastructureAnsibleBundle"
					],
					"readonly": true
				}
			}
		};
	}
};

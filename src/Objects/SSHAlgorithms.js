const ObjectBase = require("../ObjectBase");

module.exports = 
class SSHAlgorithms extends ObjectBase
{
	/**
	 * @protected
	 * 
	 * @returns {{description: string, type: string, properties: Object<propertyName, {type: string|string[], description: string, required: boolean, enum: undefined|string[], items: undefined|{description: string, type: string}, default: string|number|null|boolean, pattern: string|undefined, minLength: number|undefined, maxLength: string|undefined, readonly: boolean|undefined, required: boolean|undefined}>}}
	 */
	_schemaDefinition()
	{
		return {
			"description": "SSH client options such as the host, port, user, password, private keys, etc. All properties support template-like variables; for example, ${{instance_credentials_password}} may be used as value for the password property.",
			"type": "object",
			"properties": {
				"kex": {
					"type": [
						"array",
						"null"
					],
					"items": {
						"type": "string",
						"description": ""
					},
					"default": null,
					"description": "Key exchange algorithms."
				},
				"cipher": {
					"type": [
						"array",
						"null"
					],
					"items": {
						"type": "string",
						"description": ""
					},
					"default": null,
					"description": "Ciphers. Connecting to out of date SSH servers may require configuring this value. Included by default at the time of writing this (may change without notice): \"aes128-ctr\", \"aes192-ctr\", \"aes256-ctr\", \"aes128-gcm\", \"aes128-gcm@openssh.com\", \"aes256-gcm\", \"aes256-gcm@openssh.com\". Known to be deprecated values and not included by default: \"aes128-cbc\", \"aes256-cbc\", \"3des-cbc\""
				},
				"serverHostKey": {
					"type": [
						"array",
						"null"
					],
					"items": {
						"type": "string",
						"description": ""
					},
					"default": null,
					"description": "Server host key formats."
				},
				"hmac": {
					"type": [
						"array",
						"null"
					],
					"items": {
						"type": "string",
						"description": ""
					},
					"default": null,
					"description": "(H)MAC algorithms."
				},
				"compress": {
					"type": [
						"array",
						"null"
					],
					"items": {
						"type": "string",
						"description": ""
					},
					"default": null,
					"description": "Compression algorithms."
				},
				"type": {
					"type": "string",
					"description": "The schema type",
					"enum": [
						"SSHAlgorithms"
					],
					"readonly": false
				}
			}
		};
	}
};

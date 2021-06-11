const ObjectBase = require("../ObjectBase");

module.exports = 
class SSHClientOptions extends ObjectBase
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
				"host": {
					"type": "string",
					"description": "Hostname or IP address of the server.",
					"required": false,
					"minLength": 1,
					"maxLength": 253,
					"default": "localhost"
				},
				"port": {
					"type": [
						"string",
						"integer"
					],
					"description": "Port number of the server.",
					"minimum": 1,
					"maximum": 65535,
					"required": false,
					"default": 22
				},
				"forceIPv4": {
					"type": "boolean",
					"description": "Only connect via resolved IPv4 address for host.",
					"default": false,
					"readonly": false
				},
				"forceIPv6": {
					"type": "boolean",
					"description": "Only connect via resolved IPv6 address for host.",
					"default": false,
					"readonly": false
				},
				"hostHash": {
					"type": [
						"string",
						"null"
					],
					"description": "Any valid hash algorithm supported by node. The host's key is hashed using this algorithm and passed to the hostVerifier function.",
					"required": false,
					"minLength": 1,
					"maxLength": 253,
					"default": null
				},
				"hostHash": {
					"type": [
						"string",
						"null"
					],
					"description": "Any valid hash algorithm supported by node. The host's key is hashed using this algorithm and passed to the hostVerifier function.",
					"required": false,
					"minLength": 1,
					"maxLength": 253,
					"default": null
				},
				"hashedKey": {
					"type": [
						"string",
						"null"
					],
					"description": "A string hex hash of the host's key for verification purposes.",
					"required": false,
					"minLength": 1,
					"maxLength": 8192,
					"default": null
				},
				"username": {
					"type": [
						"string",
						"null"
					],
					"description": "Username for authentication.",
					"required": false,
					"minLength": 1,
					"maxLength": 256,
					"default": null
				},
				"password": {
					"type": [
						"string",
						"null"
					],
					"description": "Password for password-based user authentication.",
					"required": false,
					"maxLength": 4096,
					"default": null
				},
				"privateKey": {
					"type": [
						"string",
						"null"
					],
					"description": "Contains a private key for key-based user authentication (OpenSSH format).",
					"required": false,
					"minLength": 1,
					"maxLength": 40960,
					"default": null
				},
				"passphrase": {
					"type": [
						"string",
						"null"
					],
					"description": "For an encrypted private key, this is the passphrase used to decrypt it.",
					"required": false,
					"minLength": 1,
					"maxLength": 4096,
					"default": null
				},
				"readyTimeout": {
					"type": "integer",
					"description": "How long (in milliseconds) to wait for the SSH handshake to complete.",
					"minimum": 1,
					"maximum": 65535,
					"required": false,
					"default": 20000
				},
				"strictVendor": {
					"type": "boolean",
					"description": "Performs a strict server vendor check before sending vendor-specific requests, etc. (e.g. check for OpenSSH server when using openssh_noMoreSessions()).",
					"default": true,
					"readonly": false
				},
				"algorithms": {
					"type": [
						"SSHAlgorithms",
						"null"
					],
					"description": "This option allows you to explicitly override the default transport layer algorithms used for the connection. Each value must be an array of valid algorithms for that category. The order of the algorithms in the arrays are important, with the most favorable being first.",
					"required": false,
					"default": null
				},
				"compress": {
					"type": [
						"string",
						"boolean",
						"null"
					],
					"description": "Set to true to enable compression if server supports it, 'force' to force compression (disconnecting if server does not support it), or false to explicitly opt out of compression all of the time. Note: this setting is overridden when explicitly setting a compression algorithm in the algorithms configuration option. By default compression is negotiated with a preference to disable it.",
					"required": false,
					"default": null
				},
				"type": {
					"type": "string",
					"description": "The schema type",
					"enum": [
						"SSHClientOptions"
					],
					"readonly": false
				}
			}
		};
	}
};

const ObjectBase = require("./ObjectBase");


module.exports = 
class WebFetchAPIRequestHeaders extends ObjectBase
{
	/**
	 * @protected
	 * 
	 * @returns {{description: string, type: string, properties: Object<propertyName, {type: string|string[], description: string, required: boolean, enum: undefined|string[], items: undefined|{description: string, type: string}, default: string|number|null|boolean, pattern: string|undefined, minLength: number|undefined, maxLength: string|undefined, readonly: boolean|undefined, required: boolean|undefined}>}}
	 */
	_schemaDefinition()
	{
		return {
			"description": "HTTP request headers. <code>null</code> means undefined (the default for most) so the header will not be included with the request. Header values support template-like variables. Example value for an Authorization header: Basic ${{variable_name_for_user_and_password_base64}}",
			"type": "object",
			"properties": {
				"Host": {
					"type": "string",
					"description": "Read-only. Always set and overriden automatically using the hostname (FQDN or IP address) and port extracted from the request URL. Example values: <code>domain.org:8080</code>, <code>127.0.0.1</code>, etc.",
					"default": "",
					"readonly": true,
					"maxLength": 256,
					"required": false,
					"optionalOnReturn": true
				},
				"Accept-Encoding": {
					"type": [
						"string",
						"null"
					],
					"description": "<code>gzip,deflate</code> (when WebFetchAPI.options.compress === true)",
					"default": null,
					"readonly": true,
					"maxLength": 256,
					"required": false,
					"optionalOnReturn": true
				},
				"Accept": {
					"type": "string",
					"description": "",
					"default": "*/*",
					"readonly": false,
					"maxLength": 256,
					"required": false,
					"optionalOnReturn": true
				},
				"Connection": {
					"type": "string",
					"description": "",
					"default": "close",
					"enum": [
						"close"
					],
					"readonly": true,
					"required": false,
					"optionalOnReturn": true
				},
				"Content-Length": {
					"type": [
						"string",
						"null"
					],
					"description": "Calculated and sent automatically based on the WebFetchAPI.options.body property (or the value set into .body after decoding WebFetchAPI.options.bodyBufferBase64).",
					"default": null,
					"readonly": true,
					"required": false,
					"optionalOnReturn": true
				},
				"Transfer-Encoding": {
					"type": [
						"string",
						"null"
					],
					"description": "Determined automatically. The default here is ignored.",
					"default": null,
					"readonly": true,
					"required": false,
					"optionalOnReturn": true
				},
				"User-Agent": {
					"type": "string",
					"description": "To help tracing the source of a request (debugging), more information about the execution context may be appended automatically to the User-Agent if and only if the default is left unchanged. You should avoid faking or even just setting a custom User-Agent (overriding the default set here) unless absolutely necessary.",
					"default": "MetalCloud/1.0 (WebFetchAPI)",
					"readonly": false,
					"maxLength": 512,
					"required": false,
					"optionalOnReturn": true
				},
				"Cache-Control": {
					"type": "string",
					"description": "",
					"default": "no-cache",
					"readonly": true,
					"required": false,
					"optionalOnReturn": true
				},
				"Pragma": {
					"type": "string",
					"description": "",
					"default": "no-cache",
					"readonly": true,
					"required": false,
					"optionalOnReturn": true
				},
				"Upgrade": {
					"type": "null",
					"description": "Upgrading to other protocols is not supported. Only the HTTP protocol is supported, for example HTTP/2, WebSocket, etc. are not supported.",
					"default": null,
					"readonly": true,
					"required": false,
					"optionalOnReturn": true
				},
				"Accept-Charset": {
					"type": [
						"string",
						"null"
					],
					"description": "For example: <code>utf-8</code>. Textual data might be assumed to be utf-8 and/or may be converted to utf-8 because of the way this API is implemented and the underlying technologies (programming languages, execution VMs, platforms, RPC JSON serialization because it only supports UTF-8, etc.).",
					"default": null,
					"maxLength": 256,
					"required": false,
					"optionalOnReturn": true
				},
				"Content-Type": {
					"type": [
						"string",
						"null"
					],
					"description": "",
					"default": null,
					"maxLength": 255,
					"required": false,
					"optionalOnReturn": true
				},
				"Cookie": {
					"type": [
						"string",
						"null"
					],
					"description": "",
					"default": null,
					"maxLength": 3072,
					"required": false,
					"optionalOnReturn": true
				},
				"Authorization": {
					"type": [
						"string",
						"null"
					],
					"description": "For example: <code>Basic QWxhZGRpbjpvcGVuIHNlc2FtZQ==</code>",
					"default": null,
					"maxLength": 2048,
					"required": false,
					"optionalOnReturn": true
				},
				"Proxy-Authorization": {
					"type": [
						"string",
						"null"
					],
					"description": "For example: <code>Basic QWxhZGRpbjpvcGVuIHNlc2FtZQ==</code>",
					"default": null,
					"maxLength": 2048,
					"required": false,
					"optionalOnReturn": true
				},
				"From": {
					"type": [
						"string",
						"null"
					],
					"description": "The email address of the user making the request.",
					"default": null,
					"maxLength": 254,
					"required": false,
					"optionalOnReturn": true
				},
				"A-IM": {
					"type": [
						"string",
						"null"
					],
					"description": "",
					"default": null,
					"required": false,
					"optionalOnReturn": true
				},
				"Accept-Datetime": {
					"type": [
						"string",
						"null"
					],
					"description": "",
					"default": null,
					"maxLength": 128,
					"required": false,
					"optionalOnReturn": true
				},
				"Accept-Language": {
					"type": [
						"string",
						"null"
					],
					"description": "",
					"default": null,
					"maxLength": 145,
					"required": false,
					"optionalOnReturn": true
				},
				"Access-Control-Request-Method": {
					"type": [
						"string",
						"null"
					],
					"description": "",
					"default": null,
					"maxLength": 16,
					"required": false,
					"optionalOnReturn": true
				},
				"Access-Control-Request-Headers": {
					"type": [
						"string",
						"null"
					],
					"description": "",
					"default": null,
					"required": false,
					"optionalOnReturn": true
				},
				"Content-MD5": {
					"type": [
						"string",
						"null"
					],
					"description": "A Base64-encoded binary MD5 sum of the content of the request body.",
					"default": null,
					"maxLength": 44,
					"required": false,
					"optionalOnReturn": true
				},
				"Date": {
					"type": [
						"string",
						"null"
					],
					"description": "The date and time at which the message was originated (in HTTP-date format as defined by RFC 7231 Date/Time Formats.",
					"default": null,
					"maxLength": 128,
					"required": false,
					"optionalOnReturn": true
				},
				"Expect": {
					"type": [
						"string",
						"null"
					],
					"description": "",
					"default": null,
					"required": false,
					"optionalOnReturn": true
				},
				"Forwarded": {
					"type": [
						"string",
						"null"
					],
					"description": "",
					"default": null,
					"required": false,
					"optionalOnReturn": true
				},
				"HTTP2-Settings": {
					"type": [
						"string",
						"null"
					],
					"description": "",
					"default": null,
					"required": false,
					"optionalOnReturn": true
				},
				"If-Match": {
					"type": [
						"string",
						"null"
					],
					"description": "",
					"default": null,
					"required": false,
					"optionalOnReturn": true
				},
				"If-Modified-Since": {
					"type": [
						"string",
						"null"
					],
					"description": "",
					"default": null,
					"required": false,
					"optionalOnReturn": true
				},
				"If-None-Match": {
					"type": [
						"string",
						"null"
					],
					"description": "",
					"default": null,
					"required": false,
					"optionalOnReturn": true
				},
				"If-Range": {
					"type": [
						"string",
						"null"
					],
					"description": "",
					"default": null,
					"required": false,
					"optionalOnReturn": true
				},
				"If-Unmodified-Since": {
					"type": [
						"string",
						"null"
					],
					"description": "",
					"default": null,
					"required": false,
					"optionalOnReturn": true
				},
				"Max-Forwards": {
					"type": [
						"string",
						"null"
					],
					"description": "Limit the number of times the message can be forwarded through proxies or gateways. For example: <code>10</code>.",
					"default": null,
					"required": false,
					"optionalOnReturn": true
				},
				"Origin": {
					"type": [
						"string",
						"null"
					],
					"description": "",
					"default": null,
					"required": false,
					"optionalOnReturn": true
				},
				"Range": {
					"type": [
						"string",
						"null"
					],
					"description": "Don't use this header for requests which likely don't support it, like REST API endpoints and such even if the HTTP server is not configured correctly and advertises Accept-Ranges: bytes. Example: <code>bytes=500-999</code>",
					"default": null,
					"required": false,
					"optionalOnReturn": true
				},
				"Referer": {
					"type": [
						"string",
						"null"
					],
					"description": "",
					"default": null,
					"required": false,
					"optionalOnReturn": true
				},
				"TE": {
					"type": [
						"string",
						"null"
					],
					"description": "",
					"default": null,
					"required": false,
					"optionalOnReturn": true
				},
				"Via": {
					"type": [
						"string",
						"null"
					],
					"description": "",
					"default": null,
					"required": false,
					"optionalOnReturn": true
				},
				"Warning": {
					"type": [
						"string",
						"null"
					],
					"description": "",
					"default": null,
					"required": false,
					"optionalOnReturn": true
				},
				"Upgrade-Insecure-Requests": {
					"type": [
						"string",
						"null"
					],
					"description": "",
					"default": null,
					"required": false,
					"optionalOnReturn": true
				},
				"X-Requested-With": {
					"type": [
						"string",
						"null"
					],
					"description": "",
					"default": null,
					"required": false,
					"optionalOnReturn": true
				},
				"DNT": {
					"type": [
						"string",
						"null"
					],
					"description": "",
					"default": null,
					"required": false,
					"optionalOnReturn": true
				},
				"X-Forwarded-For": {
					"type": [
						"string",
						"null"
					],
					"description": "",
					"default": null,
					"required": false,
					"optionalOnReturn": true
				},
				"X-Forwarded-Host": {
					"type": [
						"string",
						"null"
					],
					"description": "",
					"default": null,
					"required": false,
					"optionalOnReturn": true
				},
				"X-Forwarded-Proto": {
					"type": [
						"string",
						"null"
					],
					"description": "",
					"default": null,
					"required": false,
					"optionalOnReturn": true
				},
				"Front-End-Https": {
					"type": [
						"string",
						"null"
					],
					"description": "",
					"default": null,
					"required": false,
					"optionalOnReturn": true
				},
				"X-Http-Method-Override": {
					"type": [
						"string",
						"null"
					],
					"description": "",
					"default": null,
					"required": false,
					"optionalOnReturn": true
				},
				"X-ATT-DeviceId": {
					"type": [
						"string",
						"null"
					],
					"description": "",
					"default": null,
					"required": false,
					"optionalOnReturn": true
				},
				"X-Wap-Profile": {
					"type": [
						"string",
						"null"
					],
					"description": "",
					"default": null,
					"required": false,
					"optionalOnReturn": true
				},
				"Proxy-Connection": {
					"type": [
						"string",
						"null"
					],
					"description": "",
					"default": null,
					"required": false,
					"optionalOnReturn": true
				},
				"X-UIDH": {
					"type": [
						"string",
						"null"
					],
					"description": "",
					"default": null,
					"required": false,
					"optionalOnReturn": true
				},
				"X-Csrf-Token": {
					"type": [
						"string",
						"null"
					],
					"description": "",
					"default": null,
					"required": false,
					"optionalOnReturn": true
				},
				"X-Request-ID": {
					"type": [
						"string",
						"null"
					],
					"description": "",
					"default": null,
					"required": false,
					"optionalOnReturn": true
				},
				"X-Correlation-ID": {
					"type": [
						"string",
						"null"
					],
					"description": "",
					"default": null,
					"required": false,
					"optionalOnReturn": true
				},
				"Save-Data": {
					"type": [
						"string",
						"null"
					],
					"description": "",
					"default": null,
					"required": false,
					"optionalOnReturn": true
				},
				"Sec-Fetch-Dest": {
					"type": [
						"string",
						"null"
					],
					"description": "",
					"default": null,
					"required": false,
					"optionalOnReturn": true
				},
				"Sec-Fetch-Mode": {
					"type": [
						"string",
						"null"
					],
					"description": "",
					"default": null,
					"required": false,
					"optionalOnReturn": true
				},
				"Sec-Fetch-Site": {
					"type": [
						"string",
						"null"
					],
					"description": "",
					"default": null,
					"required": false,
					"optionalOnReturn": true
				},
				"Sec-Fetch-User": {
					"type": [
						"string",
						"null"
					],
					"description": "",
					"default": null,
					"required": false,
					"optionalOnReturn": true
				},
				"type": {
					"type": "string",
					"description": "The schema type",
					"enum": [
						"WebFetchAPIRequestHeaders"
					],
					"readonly": true
				}
			}
		};
	}
};

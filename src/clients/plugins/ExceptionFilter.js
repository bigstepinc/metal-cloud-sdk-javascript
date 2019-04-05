const JSONRPC = require("jsonrpc-bidirectional");

const Exception = require("../../Exception");

/**
 * @class
 * @extends JSONRPC.ClientPluginBase
 */
module.exports =
class ExceptionFilter extends JSONRPC.ClientPluginBase
{
	/**
	 * @param {boolean} bThrowCustomError
	 */
	constructor(bThrowCustomError)
	{
		super();

		if(bThrowCustomError !== undefined)
		{
			this._bThrowCustomError = bThrowCustomError;
		}
	}

	/**
	 * @returns {boolean} _bThrowCustomError
	 */
	get bThrowCustomError()
	{
		return this._bThrowCustomError || false;
	}

	/**
	 * @param {JSONRPC.OutgoingRequest} jsonrpcRequest
	 */
	async exceptionCatch(jsonrpcRequest)
	{
		const objResult = jsonrpcRequest.callResult;

		if(this.bThrowCustomError)
		{
			if(objResult.nCode >= 0)
			{
				const strMessage = "API_Exception: " + objResult.message + " (Code: " + objResult.code + ")";
				console.log(strMessage);
				throw new Exception(strMessage, objResult.code);
			}
			else
			{
				const strMessage = "JSONRPC.Exception: " + objResult.message + " (Code: " + objResult.code + ")";
				console.log(strMessage);
				throw new JSONRPC.Exception(strMessage, objResult.code);
			}
		}
		else
		{
			if(objResult.code >= 0)
			{
				throw new Error("API_Exception: " + objResult.message + " (Code: " + objResult.code + ")", objResult.code);
			}
			else
			{
				throw new Error("JSONRPC.Exception: " + objResult.message + " (Code: " + objResult.code + ")", objResult.code);
			}
		}
	}
};

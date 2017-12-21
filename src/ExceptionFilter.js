const JSONRPC = require("jsonrpc-bidirectional");

const Exception = require("./Exception");

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
				const strMessage = "Exception: " + objResult.strMessage + " (Code: " + objResult.nCode + ")";
				console.log(strMessage);
				throw new Exception(strMessage, objResult.nCode);
			}
			else
			{
				const strMessage = "JSONRPC.Exception: " + objResult.strMessage + " (Code: " + objResult.nCode + ")";
				console.log(strMessage);
				throw new JSONRPC.Exception(strMessage, objResult.nCode);
			}
		}
		else
		{
			if(objResult.nCode >= 0)
			{
				throw new Error("Exception: " + objResult.strMessage + " (Code: " + objResult.nCode + ")", objResult.nCode);
			}
			else
			{
				throw new Error("JSONRPC.Exception: " + objResult.strMessage + " (Code: " + objResult.nCode + ")", objResult.nCode);
			}
		}
	}
};

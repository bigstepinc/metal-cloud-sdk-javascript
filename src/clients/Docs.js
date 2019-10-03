const JSONRPC = require("jsonrpc-bidirectional");

const ClientBase = {};
ClientBase.Plugins = require("./plugins");
ClientBase.Objects = require("../objects");
ClientBase.Utils = require("../Utils");

/**
 * Class representing the Docs Client.
 * @extends JSONRPC.Client
 */
module.exports =
class Docs extends JSONRPC.Client
{
	/**
	 * @param {string} strEndpointURL
	 */
	constructor(strEndpointURL)
	{
		super(strEndpointURL);

		this.addPlugin(new ClientBase.Plugins.ExceptionFilter(true));
		// this.addPlugin(new ClientBase.Plugins.SerializeParameters());
		// this.addPlugin(new ClientBase.Plugins.DeserializeOutput());
	}

	/**
	 * @protected
	 * @param {string} strFunctionName
	 * @param {Array} arrParams
	 */
	async rpc(strFunctionName, arrParams)
	{
		let fnCallback;

		if(arrParams.length && typeof arrParams[0] === "function")
		{
			fnCallback = arrParams.shift();
		}

		let objResult = await super.rpc(strFunctionName, arrParams);

		if(fnCallback)
		{
			const asyncCallbackWrapper = async(objResult) => fnCallback(objResult); 
			asyncCallbackWrapper(objResult);
		}

		return objResult;
	}

	
	// 0 functions available on endpoint.


}

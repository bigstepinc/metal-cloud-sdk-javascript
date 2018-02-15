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

		return new Promise(async (resolve) => {
			await this._init();
			resolve(this);
		});
	}

	/**
	 * Part of the constructor.
	 * @protected
	 */
	async _init()
	{
		this.addPlugin(new ClientBase.Plugins.ExceptionFilter(true));
		this.addPlugin(new ClientBase.Plugins.SerializeParameters());
		this.addPlugin(new ClientBase.Plugins.DeserializeOutput());

		if(Docs.arrFunctions === undefined || Docs.arrFunctions === null)
		{
			this._initMemberRPCFunctions(await this.rpcFunctions());
		}
	}

	/**
	 * Part of the constructor.
	 * @protected
	 * @param {Array} arrFunctions
	 */
	_initMemberRPCFunctions(arrFunctions)
	{
		this._arrFunctions = arrFunctions;

		for(let strFunctionName of this.arrFunctions)
		{
			Docs.prototype[strFunctionName] = function() {
				return this.rpc(strFunctionName, [].slice.call(arguments));
			};
		}
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

	/**
	 * Enables static calling of functions from any scope.
	 * @param {string} strEndpointURL
	 */
	static singletonInit(strEndpointURL)
	{
		if(Docs.singleton)
		{
			throw new Error("Docs singleton already initialized.");
		}

		return new Promise(async (resolve) => {
			Docs.singleton = await new Docs(strEndpointURL);
			resolve(this);
		});
	}

	/**
	 * @returns {Array|null} _arrFunctions
	 */
	get arrFunctions()
	{
		return this._arrFunctions || null;
	}

	
	// 0 functions available on endpoint.


}

const JSONRPC = require("jsonrpc-bidirectional");

const ClientBase = {};
ClientBase.ExceptionFilter = require("../ExceptionFilter");
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
		this.addPlugin(new ClientBase.ExceptionFilter(true));

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
		for(let index = 0; index < arrParams.length; index++)
		{
			if(arrParams[index] instanceof ClientBase.Objects.ObjectBase)
			{
				arrParams[index] = ClientBase.Utils.Serialize(arrParams[index]);
			}
		}

		let objResult = await super.rpc(strFunctionName, arrParams);

		if(objResult !== undefined && objResult !== null)
		{
			if(objResult.hasOwnProperty("type") &&
				ClientBase.Objects[objResult["type"]] !== undefined &&
				ClientBase.Objects[objResult["type"]].prototype instanceof ClientBase.Objects.ObjectBase)
			{
				objResult = ClientBase.Utils.Deserialize(
					ClientBase.Objects[objResult["type"]],
					objResult);
			}
			else
			{
				for(let objProperty in objResult)
				{
					if(objResult.hasOwnProperty(objProperty))
					{
						const objValue = objResult[objProperty];
						if(objValue !== undefined && objValue !== null)
						{
							if(objValue.hasOwnProperty("type") &&
								ClientBase.Objects[objValue["type"]] !== undefined &&
								ClientBase.Objects[objValue["type"]].prototype instanceof ClientBase.Objects.ObjectBase)
							{
								objResult[objProperty] = ClientBase.Utils.Deserialize(
									ClientBase.Objects[objValue["type"]],
									objValue);
							}
						}
					}
				}
			}
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

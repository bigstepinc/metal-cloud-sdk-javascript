const JSONRPC = require("jsonrpc-bidirectional");
const Objects = require("../../objects");
const Utils = require("../../Utils")

/**
 * @class
 * @extends JSONRPC.ClientPluginBase
 */
module.exports =
class SerializeParameters extends JSONRPC.ClientPluginBase
{
	async beforeJSONEncode(outgoingRequest)
	{
		for(let [index, param] of Object.entries(outgoingRequest.params))
		{
			if(param instanceof Objects.ObjectBase)
			{
				outgoingRequest.params[index] = Utils.Serialize(param);
			}
		}
	}
}

const JSONRPC = require("jsonrpc-bidirectional");
const Utils = require("../../Utils");

module.exports =
class Cache extends JSONRPC.Plugins.Client.Cache
{
	static _deepCopy(object)
	{
		return Utils.Deserialize(Utils.Serialize(object));
	}
}

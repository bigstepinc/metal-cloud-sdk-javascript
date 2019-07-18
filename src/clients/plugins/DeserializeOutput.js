const JSONRPC = require("jsonrpc-bidirectional");

const Objects = require("../../objects");
const Utils = require("../../Utils");

/**
 * @class
 * @extends JSONRPC.ClientPluginBase
 */
module.exports =
class DeserializeOutput extends JSONRPC.ClientPluginBase
{
	async afterJSONDecode(outgoingRequest)
	{
		if(outgoingRequest.responseObject !== undefined && outgoingRequest.responseObject !== null)
		{
			if(
				outgoingRequest.responseObject.hasOwnProperty("type") 
				&& Objects[outgoingRequest.responseObject.type] !== undefined 
				&& Objects[outgoingRequest.responseObject.type].prototype instanceof Objects.ObjectBase
			)
			{
				outgoingRequest.responseObject = Utils.Deserialize(
					outgoingRequest.responseObject,
					Objects[outgoingRequest.responseObject.type]
				);
			}
			else
			{
				for(let objProperty in outgoingRequest.responseObject)
				{
					if(outgoingRequest.responseObject.hasOwnProperty(objProperty))
					{
						const objValue = outgoingRequest.responseObject[objProperty];
						if(objValue !== undefined && objValue !== null)
						{
							if(
								objValue.hasOwnProperty("type") &&
								Objects[objValue.type] !== undefined &&
								Objects[objValue.type].prototype instanceof Objects.ObjectBase
							)
							{
								outgoingRequest.responseObject[objProperty] = Utils.Deserialize(
									objValue,
									Objects[objValue.type]
								);
							}
						}
					}
				}
			}
		}
	}
}

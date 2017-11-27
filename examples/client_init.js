const BSI = require("../index");
const MetalCloud = require("metal-cloud-sdk");
const JSONRPC = require("jsonrpc-bidirectional");

module.exports = 
class BSIClient
{
	constructor()
	{
		const strEndpointURL = "https://fullmetal.bigstep.com/api/";
		const strAPIKey = "00:pl34s3c0pyth34p1k3yfr0mth3bs14dm1n1nt3rf4c3"; // the API key can be found in the interface myBigstep > Metal Cloud > API

		return new Promise(async (resolve) => {
			const bsi = await new MetalCloud.Clients.BSI(strEndpointURL);
			bsi.addPlugin(new JSONRPC.Plugins.Client.SignatureAdd(strAPIKey));
			resolve(bsi);
		});
	}
};

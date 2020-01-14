const MetalCloud = require("metal-cloud-sdk");
const JSONRPC = require("jsonrpc-bidirectional");

(async () => {

	const strEndpointURL = "https://api.bigstep.com/metal-cloud/";
	const strAPIKey = "00:pl34s3c0pyth34p1k3yfr0mth3bs14dm1n1nt3rf4c3"; // the API key can be found in the interface myBigstep > Metal Cloud > API

	const api = await new MetalCloud.Clients.API(strEndpointURL);
	api.addPlugin(new JSONRPC.Plugins.Client.SignatureAdd(strAPIKey));

	const objDriveArray = await api.drive_array_stop("my-drive-array");

})();

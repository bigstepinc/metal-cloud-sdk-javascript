const MetalCloud = require("metal-cloud-sdk");
const JSONRPC = require("jsonrpc-bidirectional");

(async () => {

	const strEndpointURL = "https://fullmetal.bigstep.com/api/";
	const strAPIKey = "00:pl34s3c0pyth34p1k3yfr0mth3bs14dm1n1nt3rf4c3"; // the API key can be found in the interface myBigstep > Metal Cloud > API
	const strUserID = "example@mail.com";

	const api = await new MetalCloud.Clients.API(strEndpointURL);
	api.addPlugin(new JSONRPC.Plugins.Client.SignatureAdd(strAPIKey));

	// Create an Infrastructure object
	let objInfrastructure = new MetalCloud.Objects.Infrastructure();

	// Set up infrastructure parameters
	objInfrastructure.infrastructure_label = "my-infrastructure";
	objInfrastructure.datacenter_name = Object.keys(await api.datacenters())[0];

	objInfrastructure = await api.infrastructure_create(
		strUserID,
		objInfrastructure
	);
	
})();

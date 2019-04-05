const MetalCloud = require("metal-cloud-sdk");
const JSONRPC = require("jsonrpc-bidirectional");

(async () => {

	const strEndpointURL = "https://fullmetal.bigstep.com/api/";
	const strAPIKey = "00:pl34s3c0pyth34p1k3yfr0mth3bs14dm1n1nt3rf4c3"; // the API key can be found in the interface myBigstep > Metal Cloud > API

	const api = await new MetalCloud.Clients.API(strEndpointURL);
	api.addPlugin(new JSONRPC.Plugins.Client.SignatureAdd(strAPIKey));

	// Connecting another instance array interface to a network increases throughput
	await api.instance_array_interface_attach_network(
		"my-instance-array",
		0, // Make sure the selected instance array interface is not already connected to a network, as this will disconnect it
		"wan" // instance array interfaces can be attached to the WAN or to any LANs on the infrastructure
	);

})();

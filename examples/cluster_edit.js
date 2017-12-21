const MetalCloud = require("metal-cloud-sdk");
const JSONRPC = require("jsonrpc-bidirectional");

(async () => {

	const strEndpointURL = "https://fullmetal.bigstep.com/api/";
	const strAPIKey = "00:pl34s3c0pyth34p1k3yfr0mth3bs14dm1n1nt3rf4c3"; // the API key can be found in the interface myBigstep > Metal Cloud > API

	const api = await new MetalCloud.Clients.API(strEndpointURL);
	api.addPlugin(new JSONRPC.Plugins.Client.SignatureAdd(strAPIKey));

	// Get the Cluster you want to edit
	let objCluster = await api.cluster_get("my-cluster");

	// Get the ClusterOperation
	let objClusterOperation = objCluster.cluster_operation;

	// Set the new software version and verify whether it is among the supported versions
	const strClusterNewVersion = "5.9.0"
	if(objCluster.cluster_app.cluster_software_available_versions.includes(strClusterNewVersion))
	{
		objClusterOperation.cluster_software_version = strClusterNewVersion;
		objCluster = await api.cluster_edit("my-cluster", objClusterOperation);
	}

})();

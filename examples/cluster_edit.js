const BSI = require("../index");
const BSIClient = require("./client_init");

(async () => {

	const bsi = await new BSIClient();

	// Get the Cluster you want to edit
	let objCluster = await bsi.cluster_get("my-cluster");

	// Get the ClusterOperation
	let objClusterOperation = objCluster.cluster_operation;

	// Set the new software version and verify whether it is among the supported versions
	const strClusterNewVersion = "5.9.0"
	if(objCluster.cluster_app.cluster_software_available_versions.includes(strClusterNewVersion))
	{
		objClusterOperation.cluster_software_version = strClusterNewVersion;
		objCluster = await bsi.cluster_edit("my-cluster", objClusterOperation);
	}

})();

const BSI = require("../index");
const BSIClient = require("./client_init");

(async () => {

	const bsi = await new BSIClient();

	// Create a cluster object
	let objCluster = new BSI.Objects.Cluster("cloudera");

	objCluster = await bsi.cluster_create(
		"my-infrastructure",
		objCluster
	);

})();

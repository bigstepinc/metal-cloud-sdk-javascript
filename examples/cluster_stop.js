const BSI = require("../index");
const BSIClient = require("./client_init");

(async () => {

	const bsi = await new BSIClient();

	const objCluster = await bsi.cluster_stop("my-cluster");

})();

const BSI = require("../index");
const BSIClient = require("./client_init");

(async () => {

	const bsi = await new BSIClient();

	const objInfrastructure = await bsi.infrastructure_delete("my-infrastructure");

	// The operation needs to be deployed in order for hardware to be deprovisioned
	// Since deleting an infrastructure means losing all the data on the drives being deprovisioned, infrastructure_deploy() must be called with the bAllowDataLoss parameter set to True

})();

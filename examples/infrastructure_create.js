const BSI = require("../index");
const BSIClient = require("./client_init");

(async () => {

	const bsi = await new BSIClient();

	const strUserID = "john.doe@bigstep.com";

	// Create an Infrastructure object
	let objInfrastructure = new BSI.Objects.Infrastructure();

	// Set up infrastructure parameters
	objInfrastructure.infrastructure_label = "my-infrastructure";
	objInfrastructure.datacenter_name = Object.keys(await bsi.datacenters())[0];

	objInfrastructure = await bsi.infrastructure_create(
		strUserID,
		objInfrastructure
	);

})();

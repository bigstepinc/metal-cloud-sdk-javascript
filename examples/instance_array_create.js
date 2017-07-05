const BSI = require("../index");
const BSIClient = require("./client_init");

(async () => {

	const bsi = await new BSIClient();

	// Create an InstanceArray object
	let objInstanceArray = new BSI.Objects.InstanceArray();

	objInstanceArray = await bsi.instance_array_create(
		"my-infrastructure",
		objInstanceArray
	);

})();

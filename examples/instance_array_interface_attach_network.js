const BSI = require("../index");
const BSIClient = require("./client_init");

(async () => {

	const bsi = await new BSIClient();

	// Connecting another instance array interface to a network increases throughput
	await bsi.instance_array_interface_attach_network(
		"my-instance-array",
		0, // Make sure the selected instance array interface is not already connected to a network, as this will disconnect it
		"wan" // instance array interfaces can be attached to the WAN or to any LANs on the infrastructure
	);

})();

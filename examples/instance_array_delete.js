const BSI = require("../index");
const BSIClient = require("./client_init");

(async () => {

	const bsi = await new BSIClient();

	const objInstanceArray = await bsi.instance_array_delete(
		"my-instance-array"
	);

})();

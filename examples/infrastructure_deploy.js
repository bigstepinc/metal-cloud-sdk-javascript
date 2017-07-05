const BSI = require("../index");
const BSIClient = require("./client_init");

(async () => {

	const bsi = await new BSIClient();

	console.log("Deploying changes...");

	await bsi.infrastructure_deploy("my-infrastructure");
	
	console.log("Infrastructure deployed succesfully.");

})();

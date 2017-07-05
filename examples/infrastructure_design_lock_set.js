const BSI = require("../index");
const BSIClient = require("./client_init");

(async () => {

	const bsi = await new BSIClient();

	await bsi.infrastructure_design_lock_set("my-infrastructure", true);

	// The operation applies immediately and does not need to be deployed
	// If the lock is set, any attempts to alter the design of an infrastructure (adding/removing elements or editing them) will trigger an error

})();

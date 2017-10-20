const BSI = require("../index");
const BSIClient = require("./client_init");

(async () => {

	const bsi = await new BSIClient();

	const objDriveArray = await bsi.drive_array_delete("my-drive-array");
	
})();

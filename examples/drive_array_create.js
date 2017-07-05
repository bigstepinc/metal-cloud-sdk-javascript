const BSI = require("../index");
const BSIClient = require("./client_init");

(async () => {

	const bsi = await new BSIClient();

	// Create a DriveArray object
	let objDriveArray = new BSI.Objects.DriveArray();

	objDriveArray = await bsi.drive_array_create(
		"my-infrastructure",
		objDriveArray
	);

})();

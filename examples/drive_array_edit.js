const BSI = require("../index");
const BSIClient = require("./client_init");

(async () => {

	const bsi = await new BSIClient();

	// Get the DriveArray you want to edit
	let objDriveArray = await bsi.drive_array_get("my-drive-array");

	// Get the DriveArrayOperation
	let objDriveArrayOperation = objDriveArray.drive_array_operation;

	// Selecting an OS template
	// Note that changing the OS template will not affect any active drives, but only drives that are provisioned after the change takes effect
	objDriveArrayOperation.volume_template_id = "centos7-2";

	objDriveArray = await bsi.drive_array_edit(
		"my-drive-array",
		objDriveArrayOperation
	);

})();

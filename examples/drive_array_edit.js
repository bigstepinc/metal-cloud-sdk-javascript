const MetalCloud = require("metal-cloud-sdk");
const JSONRPC = require("jsonrpc-bidirectional");

(async () => {

	const strEndpointURL = "https://fullmetal.bigstep.com/api/";
	const strAPIKey = "00:pl34s3c0pyth34p1k3yfr0mth3bs14dm1n1nt3rf4c3"; // the API key can be found in the interface myBigstep > Metal Cloud > API

	const api = await new MetalCloud.Clients.API(strEndpointURL);
	api.addPlugin(new JSONRPC.Plugins.Client.SignatureAdd(strAPIKey));

	// Get the DriveArray you want to edit
	let objDriveArray = await api.drive_array_get("my-drive-array");

	// Get the DriveArrayOperation
	let objDriveArrayOperation = objDriveArray.drive_array_operation;

	// Selecting an OS template
	// Note that changing the OS template will not affect any active drives, but only drives that are provisioned after the change takes effect
	objDriveArrayOperation.volume_template_id = "centos7-2";

	objDriveArray = await api.drive_array_edit(
		"my-drive-array",
		objDriveArrayOperation
	);

})();

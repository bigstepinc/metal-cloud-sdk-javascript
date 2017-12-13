const MetalCloud = require("metal-cloud-sdk");
const JSONRPC = require("jsonrpc-bidirectional");

(async () => {

	const strEndpointURL = "https://fullmetal.bigstep.com/api/";
	const strAPIKey = "00:pl34s3c0pyth34p1k3yfr0mth3bs14dm1n1nt3rf4c3"; // the API key can be found in the interface myBigstep > Metal Cloud > API
	const strEmail = "example@mail.com" // change to your email

	const api = await new MetalCloud.Clients.API(strEndpointURL);
	api.addPlugin(new JSONRPC.Plugins.Client.SignatureAdd(strAPIKey));

	const objDriveArray = await api.drive_array_get("my-drive-array");
	const nDriveArrayID = objDriveArray.drive_array_id;

	// Get the list of drives belonging to a specified drive array
	const strQuery = 
	`SELECT drive_id 
	FROM drives 
	WHERE drive_array_id = ${nDriveArrayID} 
	LIMIT 10`;

	const objResult = await api.query(strEmail, strQuery, MetalCloud.Constants.COLLAPSE_NONE);
	const arrDrives = objResult.rows;

	const arrSnapshots = [];

	for(let i=0; i<arrDrives.length; i++)
	{
		const nDriveID = arrDrives[i].drive_id;

		const objSnapshot = await api.drive_snapshot_create(nDriveID);
		arrSnapshots.push({
			drive_id: objDriveArray.drive_id,
			drive_snapshot_id: objSnapshot.drive_snapshot_id
		});
	}


	for(let index in arrDrives)
	{
		const objDriveArray = arrDrives[index];

		objSnapshot = await api.drive_snapshot_create(objDriveArray.drive_id);
		arrSnapshots.push(objSnapshot);
	}
})();

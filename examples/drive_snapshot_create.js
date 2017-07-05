const BSI = require("../index");
const BSIClient = require("./client_init");

(async () => {

	const bsi = await new BSIClient();

	const objDriveArray = await bsi.drive_array_get("my-drive-array");

	const nDriveArrayID = objDriveArray.drive_array_id;

	const strQuery = 
	`SELECT drive_id 
	FROM drives 
	WHERE drive_array_id = ${nDriveArrayID} 
	LIMIT 10`;

	// Get the list of drives belonging to a specified drive array
	const objResult = await bsi.query("john.doe@bigstep.com", strQuery, bsi.COLLAPSE_NONE);

	const arrDrives = objResult.rows;

	const arrSnapshots = [];

	for(let index in arrDrives)
	{
		const objDriveArray = arrDrives[index];

		objSnapshot = await bsi.drive_snapshot_create(objDriveArray.drive_id);
		arrSnapshots.push(
			{
				"drive_id": objDriveArray.drive_id,
				"drive_snapshot_id": objSnapshot.drive_snapshot_id
			}
		);
	}

})();

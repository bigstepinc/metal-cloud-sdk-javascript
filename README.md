# Metal Cloud SDK


SDK for the Metal Cloud infrastructure

This library is tested in __browsers__ (>= IE10) and in __Node.js__ (>=7.8).


## Branches
If you are an user, you should use the branch with the highest version number.
The `dev_master` branch is used internally for development.

## Install

```bash
npm install
```

If you want to run the SDK inside the browser, you must bundle the project using webpack by running:

```bash
node ./build.js
```
	
The generated bundles wil be placed in `builds/browser/` .

You can change the `entry` property in `webpack.config.js` accordingly to the script you want to use.

Example: 
	

	module.exports = {
		entry: "./script.js",,
		...
	};

Changing `webpack.config.js` requires re-running the build.js script.


## Usage

### NodeJS
```JavaScript
const MetalCloud = require("metal-cloud-sdk");
const JSONRPC = require("jsonrpc-bidirectional");

(async () => {
	
	const strEndpointURL = "https://fullmetal.bigstep.com/api/";
	const strAPIKey = "00:pl34s3c0pyth34p1k3yfr0mth3bs14dm1n1nt3rf4c3"; // the API key can be found in the interface myBigstep > Metal Cloud > API

	const api = await new MetalCloud.Clients.API(strEndpointURL);
	api.addPlugin(new JSONRPC.Plugins.Client.SignatureAdd(strAPIKey));

	// The client is now initialized and authenticated. You can now execute functions through the Metal Cloud API.
    // Example:

	const strEmail = "example@mail.com" // change to your email
	const objUser = await api.user_get(strEmail);
    console.log(objUser);
})();

```


### Browser
```html
<!doctype html>
<html>
	<head>
		<title>Test</title>

		<!-- These are external to the generated bundle intentionally, to reduce file size and reuse them for other libraries. -->
		<script type="text/javascript" src="node_modules/babel-polyfill/dist/polyfill.min.js"></script>
		<script type="text/javascript" src="node_modules/whatwg-fetch/fetch.js"></script>
		<script type="text/javascript" src="node_modules/es6-promise/dist/es6-promise.auto.min.js"></script>

		<script type="text/javascript" src="builds/browser/es5/metal-cloud-sdk.min.js"></script>

		<script>
			var strEndpointURL = "https://fullmetal.bigstep.com/api/";
			var strAPIKey = "00:pl34s3c0pyth34p1k3yfr0mth3bs14dm1n1nt3rf4c3"; // the API key can be found in the interface myBigstep > Metal Cloud > API
			var strEmail = "example@mail.com"; // Change to your email.

			new MetalCloud.Clients.API(strEndpointURL)
				.then(function(client) {
					api = client; 
					api.addPlugin(new JSONRPC.Plugins.Client.SignatureAdd(strAPIKey));

					// The client is now initialized and authenticated. You can now execute functions through the MetalCloud API.
					// Example:
					api.user_get(strEmail)
						.then(function(response) {
                            var objUser = response;
                            console.log(objUser);
                        })
                    ;

					// You can find more examples in the "examples" folder.
				})
			;
		</script>
	</head>
	<body>
		Open the developer tools console (F12 for most browsers, CTRL+SHIFT+I in Electron) to see errors or manually make calls.
	</body>
</html>
```

You can find more usage examples in the `examples` folder.

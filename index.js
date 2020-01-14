const objExports = {};

objExports.Clients = require("./src/clients");
objExports.Constants = require("./src/Constants");
objExports.EventTypes = require("./src/Events");
objExports.Exception = require("./src/Exception");
// objExports.Utils = require("./src/Utils.js");
objExports.Objects = require("./src/objects");

module.exports = objExports;

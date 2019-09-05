const express = require("express");
const helmet = require("helmet");

// v1 - call env variable directly
// console.log("environment:", process.env.NODE_ENV);

// v2 - use centralized source
const secrets = require("../config/secrets");
console.log("environment:", secrets.environment);

const apiRouter = require("./api-router.js");

const server = express();

server.use(helmet());

server.use("/api", apiRouter);

module.exports = server;

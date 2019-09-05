require("dotenv").config(); // load prior to loading the server.js where you are using it (in the console.log)
const server = require("./api/server.js");

// v1
// const port = 4000;

// v2 - make the port dynamic - read port from server environment if there
// heroku will have the PORT environment variable defined
// const port = process.env.PORT || 4000;

// v3 - stored in defaults file
const defaults = require("./config/defaults");
const port = defaults.port;

server.listen(port, () => {
  console.log(`\n*** Server Running on http://localhost:${port} ***\n`);
});

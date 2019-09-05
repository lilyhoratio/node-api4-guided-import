const server = require("./api/server.js");

// const port = 4000;

// make the port dynamic - read port from server environment if there
// heroku will have the PORT environment variable defined
const port = process.env.PORT || 4000;

server.listen(port, () => {
  console.log(`\n*** Server Running on http://localhost:${port} ***\n`);
});

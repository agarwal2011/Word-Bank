// Import Express JS.
const express = require("express");
// Import Routes.
const rootRoute = require("./routes/root");
const apiRoute = require("./routes/api");
const apimath = require("./routes/api/math");
// Create an Express Instance.
const app = express();
// Set a port.
const port = 3100;
// Routing.
app.use("/", rootRoute);
app.use("/api", apiRoute);
app.use("/math", apimath);
// Listen the application to the port.
app.listen(port, () => {
  console.log(`Server started in Port ${port}!`);
});

// Import Express JS.
const express = require("express");
// Import Express Routes
const math = express.Router();
math.use(express.json());
const abdh = `
 <h1>Addition is (10+2)</h1>
<p></p>
<p></p>
<p></p>
`;
math.get("/", (req, res) => {
  res.send(abdh);
});
module.exports = math;

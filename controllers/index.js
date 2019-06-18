const path = require("path");
const router = require("express").Router();
const apiRoutes = require("./api/index");

// API Routes
router.use("/api", apiRoutes);

// If no API routes are hit, send the React app
router.use(function(req, res) {
  res.sendFile(path.join(__dirname, "../client/build/index.html"));
  console.log("No valid routes requested.");
  console.log("Request:");
  console.log(req);
  console.log("Response:");
  console.log(res);
  
});

module.exports = router;

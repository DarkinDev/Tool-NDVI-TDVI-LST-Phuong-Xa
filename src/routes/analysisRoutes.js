const express = require("express");
const router = express.Router();
const analysisController = require("../controllers/analysisController");

router.post("/", analysisController.createAnalysisJob);
router.get("/", analysisController.getAllJobs);
router.get("/:id", analysisController.getJobById);

module.exports = router;

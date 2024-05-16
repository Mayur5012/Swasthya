const express = require("express");
const router = express.Router();
const { createVolunteer, getVolunteers } = require("../controllers/Volunteer");

router.post("/volunteer", createVolunteer);
router.get("/volunteer", getVolunteers);

module.exports = router;

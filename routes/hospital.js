const router = require("express").Router();
const { createHospital, getHospital } = require("../controllers/hospital");

router.post("/Hospital" , createHospital)
router.get("/Hospital" , getHospital)

module.exports = router
const mongoose = require("mongoose");

const VolunteerSchema = new mongoose.Schema({
  Name: {
    type: String,
    required: true,
  },
  Phone: {
    type: String,
    required: true,
  },
  Email: {
    type: String,
    required: true,
  },
  City: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("Volunteer", VolunteerSchema);

const mongoose = require("mongoose");

const Meds = new mongoose.Schema(
  {
    Medicine: {
      required: true,
      type: String,
    },
    // Medical_Name:{
    //     required: true,
    //     type: String
    // },
    Phone_no: {
      required: true,
      type: Number,
    },
    // Alternate: {
    //   required: true,
    //   type: Number,
    // },
    City: {
      type: String,
    },
    Address: {
      type: String,
    },
    // Pincode:{
    //     type: Number,
    //     required: true
    // }
  },
  { timestamps: true }
);

const model = mongoose.model("Meds", Meds);

module.exports = model;

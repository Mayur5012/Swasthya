const mongoose = require("mongoose");

const Oxygen = new mongoose.Schema(
  {
    Name: {
      required: true,
      type: String,
    },
    Phone_no: {
      required: true,
      type: Number,
    },
    Alt_Phone: {
      required: true,
      type: Number,
    },
    City: {
      type: String,
    },
    Address: {
      type: String,
    },
    // No_of_Cylinders: {
    //     required: true,
    //     type: Number,
    // },
    // Pincode: {
    //     type: Number,
    //     required: true
    // }
  },
  { timestamps: true }
);

const model = mongoose.model("Oxygen", Oxygen);

module.exports = model;

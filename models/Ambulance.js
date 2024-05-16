const mongoose = require("mongoose")

const Ambulance = new mongoose.Schema(
    {
        Driver_Name: {
            required: true,
            type: String,
        },
        Phone_no: {
            required: true,
            type: Number,
        },
        City: {
            type: String,
        },
        Address: {
            type: String,
        },
        Ambulance_no: {
            required: true,
            type: String,
        },
        // Pincode:{
        //     type:Number,
        //     required: true
        // }
    },
    { timestamps: true }
)

const model = mongoose.model("Ambulance", Ambulance);

module.exports = model
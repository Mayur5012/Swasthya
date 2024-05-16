const mongoose = require("mongoose")

const Beds = new mongoose.Schema(
    {
        Hospital_Name: {
            required: true,
            type: String,
            max: 32
        },
        Contact_Name: {
            required: true,
            type:String
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
        ICU_Beds: {
            required: true,
            type: Number,
        },
        Oxygen_Beds: {
            required: true,
            type: Number,
        },
        // Pincode:{
        //     required: true,
        //     type: Number
        // }

    },
    { timestamps: true }
)

const model = mongoose.model("Beds", Beds);

module.exports = model
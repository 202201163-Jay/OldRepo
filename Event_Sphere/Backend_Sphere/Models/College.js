const mongoose = require("mongoose");

const collegeSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true,
    },
    email: {
        type: String,
        required: true,
        trim: true,
        unique: true, 
    },
    emailDomain: {
        type: String,
        required: true,
        trim: true,
    },
    collegeRepresentatives: {
        type: [
            {
                repname:{
                    type: String,
                    required: true,
                },
                repId: {
                    type: String,
                    required: true,
                    trim: true,
                },
                password: {
                    type: String,
                    required: true,
                },
            },
        ],
        validate: {
            validator: function (v) {
                return v.length <= 10; 
            },
            message: "You can add a maximum of 10 batch representatives.",
        },
    },
});

module.exports = mongoose.model("College", collegeSchema);

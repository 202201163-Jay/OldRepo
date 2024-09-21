const mongoose = require("mongoose");

const CollegeRep = new mongoose.Schema({
  repId: {
    type: String,
    required: true,
    trim: true,
    unique: true, 
  },
  password: {
    type: String,
    required: true,
  },
  collegeId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "College",
    required: true,
  },
});

module.exports = mongoose.model("CollegeRep", CollegeRep);

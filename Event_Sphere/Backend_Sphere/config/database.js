const mongoose = require('mongoose');
require("dotenv").config();

exports.connect = () => {
    const URI = "mongodb+srv://Smit_Godhani:3QUbIeh4qOCEGSwV@cluster0.bfkfp.mongodb.net/Event_Sphere"
    if (!URI) {
        console.log("MongoDB connection string not found in environment variables");
        process.exit(1);
    }

    mongoose.connect(URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(() => {
        console.log("Database Connection established");
    })
    .catch((err) => {
        console.error("Connection Issues with Database:", err.message);
        process.exit(1);
    });
};

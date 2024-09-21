const mongoose = require('mongoose');
require("dotenv").config();

exports.connect = () => {
    const MONGO_URI = process.env.MONGO_URI;
    if (!MONGO_URI) {
        console.log("MongoDB connection string not found in environment variables");
        process.exit(1);
    }

    mongoose.connect(MONGO_URI, {
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

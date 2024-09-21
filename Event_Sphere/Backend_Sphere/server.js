const express = require('express');
const cors = require('cors');

const app = express();

const corsOptions = {
    origin: "http://localhost:5173",
    methods: "GET, POST, PUT, DELETE, PATCH, HEAD",
    credentials: true,
};

app.use(cors(corsOptions));

require("dotenv").config();

const PORT = process.env.PORT || 3000;

app.use(express.json());

require("./config/database").connect()

// route import and mount 
const user = require("./routes/user");
app.use("/api/v1", user);

// Activate 
app.listen(PORT, () => {
    console.log("Server Run at ", PORT);
})

app.get("/", (req, res) => {
    res.send("<h1>Auth App</h1>")
})
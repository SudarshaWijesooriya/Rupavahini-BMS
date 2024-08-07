const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');
require("dotenv").config();
const app = express();
const fileUpload = require("express-fileupload")

app.use("/Assets", express.static(__dirname + "/Assets"))
const port = process.env.PORT || 4000;
const URL = process.env.MONGO_URL;
app.use(cors());
app.use(express.json())
app.use(fileUpload());

mongoose.connect(URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

//DB connection
const connection = mongoose.connection;
connection.once("open", () => {
    console.log("MongoDB connected");
})

app.listen(port, () => {
    console.log("PORT conneted on " + port);
})

//Blog route
const BlogRouter = require("./Routes/BlogRoute");
app.use("/api/Blogs", BlogRouter);

//user managing routes
const UserManagementRoutes = require("./Controllers/UserController");
app.use("/api/users", UserManagementRoutes);

// Programme routes
const bookingRoute = require('./Routes/BookingRoute');
app.use('/api/booking', bookingRoute);

//programme booking route
const programmeRoute = require('./Routes/programmeRoute');
app.use('/api/programmes', programmeRoute);

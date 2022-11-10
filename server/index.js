// This is practically the main api file. This contains the connection to express,
// routes, and other important functions or constants needed for the client to view or 
// consume.
const functions = require("firebase-functions");
require('dotenv').config()

const express = require('express');
const blogsRoutes = require('./routes/blogs')
const mongoose = require('mongoose');
const { getBlogs } = require('./controllers/blogControllers');
const userRoutes = require('./routes/users')
// express app
const app = express();
// require cors
const cors = require("cors")
// middleware
app.use(express.json())
app.use(
    cors({
        origin: "https://husain-haq-server.web.app"
    })
)

app.use((req, res, next) => {
    console.log(req.path, req.method)
    console.log(res.json);
    next()
})

// routes
app.use('/api/blogs', blogsRoutes)
app.use('/api/user', userRoutes)

//connect to db
mongoose.connect(process.env.MONGO_URI)
.then(() => {
    console.log("Program running")
})
.catch((error) =>{
    console.log(error)
})

//Home route
app.get('/', (req, res) => {
    res.send('This is the backend of Husain-Haq-site')
})

process.env
exports.app = functions.https.onRequest(app);

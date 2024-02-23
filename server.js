const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors')
const routes = require('./routes/ToDoRoutes')  //importing ToDoRoutes.js file from routes directory 
require('dotenv').config()

const app = express()  //envoking express module 

//PORT 
const PORT = process.env.PORT || 5000

//middleware
app.use(express.json())
app.use(cors())

//MongoDB connection
mongoose.connect(process.env.MONGODB_URI)
.then(() => console.log("Successfully Connected to the MongoDB"))
.catch((err) => console.log(err));

app.use(routes)


//server connection
app.listen(PORT, () => console.log(`listening on port: ${PORT}`));
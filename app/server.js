const express = require('express');
const app = express();
const mongoose = require('mongoose');
require('dotenv').config();
const routes = require('./routes/api');
const bodyParser = require("body-parser") // self-explanatory 

app.use(bodyParser.urlencoded({ extended: false })); // Parses urlencoded bodies
app.use(bodyParser.json()); // Send JSON responses

app.use(express.json()) //receives JSON
app.use('/api/', routes);

const connectDB = async () => {
    try {
        mongoose.set('strictQuery', false);
        const conn = await mongoose.connect(process.env.MONGODB_URI)
        console.log(`Database connected ${conn.connection.host}`)

    } catch (error) {
        console.log(error);
        process.exit(1);
    }
}
connectDB();

const PORT = process.env.PORT || 8080;

app.listen(PORT, console.log(`Server is starting at ${PORT}`));
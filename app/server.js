const express = require('express')
const app = express()
const mongoose = require('mongoose')
const Journal = require('./models/JournalEntries')
require('dotenv').configDotenv()

const connectDB = async () => {
    try {
        mongoose.set('strictQuery', false);
        const conn = await mongoose.connect("mongodb+srv://bcermak:Skylar-10@triptails.kmoorxl.mongodb.net/TriptailsDB")
        console.log(`Database connected ${conn.connection.host}`)

    } catch (error) {
        console.log(error);
        process.exit(1);
    }
}

connectDB();

const PORT = process.env.PORT || 8080;

app.get("/api/journals", async (req,res) => {
    try {
        const data = await Journal.find({});
        res.json(data)
    } catch (error ){
        res.status(500).json({ error: "An error has occured while fetching journal entries"});
    }
            
});


app.listen(PORT, console.log(`Server is starting at ${PORT}`));
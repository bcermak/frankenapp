const express = require('express');
const app = express();
const mongoose = require('mongoose');
const Journal = require('./models/JournalEntries');
require('dotenv').configDotenv();

app.use(express.json)

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

app.post("/api/createJournal", async (req, res) => {
    const newJournal = new Journal({...req.body});
    console.log(newJournal)
    const insertJournal = await newJournal.save();
    return res.status(201).json(insertJournal);
    

    // const journal = new Journal({
    //     body: req.body.body,
    //     author: req.body.author
    // })
    // await journal.save();
    // res.send(journal);
})


app.listen(PORT, console.log(`Server is starting at ${PORT}`));
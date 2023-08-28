const express = require('express');
const app = express();
const mongoose = require('mongoose');
const Journal = require('./models/JournalEntries');

const bodyParser = require("body-parser")
app.use(bodyParser.urlencoded({ extended: false })); // Parses urlencoded bodies
app.use(bodyParser.json()); // Send JSON responses

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

app.use(express.json())

app.get("/api/journals", async (req,res) => {
    try {
        const data = await JournalModel.find({});
        res.json(data)
    } catch (error ){
        res.status(500).json({ error: "An error has occured while fetching journal entries"});
    }
});

app.post("/api/createJournal", async (req, res) => {
   
    const journal = new Journal({
        body: req.body.body,
        author: req.body.author
    })
    try {
        const savedJournal = await journal.save();
        res.json(savedJournal)
    } catch (err) {
        res.json({message: err})
    }

})

const PORT = process.env.PORT || 8080;

app.listen(PORT, console.log(`Server is starting at ${PORT}`));
const express = require('express');
const router = express.Router();
const Journal = require('../models/JournalEntries');


router.get("/journals", async (req,res) => {
    try {
        const data = await Journal.find({});
        res.json(data)
    } catch (error ){
        res.status(500).json({ error: "An error has occured while fetching journal entries"});
    }
});

router.post("/createJournal", async (req, res) => {
    const data = req.body;
    const newJournal = new Journal(data);

   await newJournal.save().then( (err) => {
    if (!err) {
        res.status(201).json({ message: "Successfully inserted into DB"})
    } else {
        res.status(500).json({ message: err})
    }
   })

});

module.exports = router;


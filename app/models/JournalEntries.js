const mongoose = require('mongoose');


const JournalSchema = new mongoose.Schema({
    body: {
        type: String,
        required: true,
    },
    author: {
        type: String,
        required: true,
    },
});

const JournalModel = mongoose.model("journals", JournalSchema);
module.exports = JournalModel
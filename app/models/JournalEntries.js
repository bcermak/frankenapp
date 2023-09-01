const mongoose = require('mongoose');
const moment = require('moment');


const JournalSchema = new mongoose.Schema({
    body: {
        type: String,
        required: true,
    },
    author: {
        type: String,
        required: true,
    },
    createdAt: {
        type: Date,
        default: Date.now()
    }
});

const JournalModel = mongoose.model("journals", JournalSchema);
module.exports = JournalModel
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const JournalSchema = new Schema({
    body: {
        type: String,
        required: true,
    },

    author: {
        type: String,
        required: true,
    },
});

module.exports = mongoose.model('journal', JournalSchema)
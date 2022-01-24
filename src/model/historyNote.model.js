const mongoose = require("mongoose");

const NoteSchema = new mongoose.Schema({
    identifyUser: {
        type: Number
    },
    time: {
        type: String
    },
    image: {
        type: String
    }
});

const Note = mongoose.model('note', NoteSchema);

module.exports = {
    Note
}
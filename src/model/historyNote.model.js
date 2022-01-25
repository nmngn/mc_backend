const mongoose = require("mongoose");

const NoteSchema = new mongoose.Schema({
    idUser: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
    },
    time: {
        type: String
    },
    image: {
        type: String
    }
});
NoteSchema.virtual('id').get(function () {
    return this._id.toHexString();
 });
 
 NoteSchema.set('toJSON', {
    virtuals: true,
 });
const Note = mongoose.model('note', NoteSchema);

module.exports = {
    Note
}
const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
    idUser: {
        type: Number
    },
    name: {
        type: String
    },
    momBirth: {
        type: String
    },
    numberPhone: {
        type: String
    },
    height: {
        type: String
    },
    babyDateBorn: {
        type: String
    },
    dateSave: {
        type: String
    },
    note: {
        type: String
    },
    avatar: {
        type: String
    },
    imagePregnant: {
        type: String
    },
    isStar: {
        type: Boolean
    },
    historyNote: {
        type: Array,
        default: []
    }
});

const User = mongoose.model('user', UserSchema);

module.exports = {
    User
}
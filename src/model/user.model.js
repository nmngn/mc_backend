const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
    idAdmin: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Admin',
    },
    name: {
        type: String
    },
    address: {
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
    }
});
UserSchema.virtual('id').get(function () {
    return this._id.toHexString();
 });
 
 UserSchema.set('toJSON', {
    virtuals: true,
 });
const User = mongoose.model('user', UserSchema);

module.exports = {
    User
}
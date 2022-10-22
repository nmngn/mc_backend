const { Int32 } = require("mongodb");
const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
    name: {
        type: String
    },
    dayOfBirth: {
        type: String
    }, 
    allMoney: {
        type: String
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
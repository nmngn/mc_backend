const { Int32 } = require("mongodb");
const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
    name: {
        type: String
    },
    dayOfBirth: {
        type: String
    }
});
 
 UserSchema.set('toJSON', {
    virtuals: true,
 });
const User = mongoose.model('user', UserSchema);

module.exports = {
    User
}
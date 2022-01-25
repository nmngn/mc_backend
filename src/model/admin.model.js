const mongoose = require("mongoose");

const AdminSchema = new mongoose.Schema({
    name: {
        type: String
    },
    email: {
        type: String
    },
    address: {
        type: String
    },
    image: {
        type: String
    },
    numberPhone: {
        type: String
    }
});
AdminSchema.virtual('id').get(function () {
    return this._id.toHexString();
 });
 
 AdminSchema.set('toJSON', {
    virtuals: true,
 });
const Admin = mongoose.model('admin', AdminSchema);

module.exports = {
    Admin
}
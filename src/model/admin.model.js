const mongoose = require("mongoose");

const AdminSchema = new mongoose.Schema({
    idAdmin: {
        type: Number
    },
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
    ids: {
        type: Array,
        default: []
    }
});

const Admin = mongoose.model('admin', AdminSchema);

module.exports = {
    Admin
}
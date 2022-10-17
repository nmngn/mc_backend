const { Int32 } = require("mongodb");
const mongoose = require("mongoose");

const TransactionSchema = new mongoose.Schema({
    idUser: {
        type: String
    },
    title: {
        type: String
    },
    description: {
        type: String
    },
    amount: {
        type: String
    },
    income: {
        type: Number
    },
    category: {
        type: String
    },
    dateTime: {
        type: String
    }
});

TransactionSchema.virtual('id').get(function () {
    return this._id.toHexString();
});

TransactionSchema.set('toJSON', {
    virtuals: true,
});
const Transaction = mongoose.model('transaction', TransactionSchema);

module.exports = {
    Transaction
}
const Model = require("../model/transaction.model");

const getAllTransaction = async (req, res) => {
    const result = await Model.Transaction.find();
    return res.status(200).send(result);
}

const getOneTransaction = async (req, res) => {
    const { id } = req.params;
    const result = await Model.Transaction.findById(id);
    if (!result) {
        return res.status(500).send({ message: "Không tìm thấy" })
    }
    return res.status(200).send(result);
}

const deleteTransaction = async (req, res) => {
    const { id } = req.params;
    await Model.Transaction.findByIdAndDelete(id);
    return res.status(200).send({ success: true });
}

const updateTransaction = async (req, res) => {
    const { id } = req.params
    const update = await Model.Transaction.findByIdAndUpdate(id, {
        title: req.body.title,
        description: req.body.description,
        amount: req.body.amount,
        income: req.body.income,
        category: req.body.category,
        dateTime: req.body.dateTime,
    }, { new: true })
    if (!update)
        return res.status(500).send('the product cannot be updated!')
    res.send(update);
}

const createTransaction = async (req, res) => {
    const { idTransaction, title, description, amount, income, category, dateTime } = req.body
    const result = await Model.Transaction.create({
        idTransaction,
        title,
        description,
        amount,
        income,
        category,
        dateTime
    });
    return res.status(200).send(result);
}

module.exports = {
    getAllTransaction,
    getOneTransaction,
    deleteTransaction,
    updateTransaction,
    createTransaction
}
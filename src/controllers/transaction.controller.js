const Model = require("../model/transaction.model");

const getTransactionRangeDate = async (req, res) => {
    const { sDay, eDay } = req.query
    const result = await Model.Transaction.find({ dateTime: { $gte: sDay, $lte: eDay } })
    if (!result) {
        return res.status(500).send({ message: "Không có dữ liệu" })
    }
    return res.status(200).send(result);
}

const getAllTransaction = async (req, res) => {
    const result = await Model.Transaction.find();
    return res.status(200).send({data: result});
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
        isIncome: req.body.isIncome,
        category: req.body.category,
    }, { new: true })
    if (!update)
        return res.status(500).send('the product cannot be updated!')
    res.send(update);
}

const createTransaction = async (req, res) => {
    const { idUser, title, description, amount, isIncome, category, dateTime, type } = req.body
    const result = await Model.Transaction.create({
        idUser,
        title,
        description,
        amount,
        isIncome,
        category,
        dateTime,
        type
    });
    return res.status(200).send(result);
}

module.exports = {
    getTransactionRangeDate,
    getAllTransaction,
    getOneTransaction,
    deleteTransaction,
    updateTransaction,
    createTransaction
}
const Model = require("../model/user.model");

const getAllUser = async (req, res) => {
    const result = await Model.User.find();
    return res.status(200).send(result);
}

const getOneUser = async (req, res) => {
    const { id } = req.params;
    const result = await Model.User.findById(id);
    if (!result) {
        return res.status(500).send({ message: "Không tìm thấy" })
    }
    return res.status(200).send(result);
}

const deleteUser = async (req, res) => {
    const { id } = req.params;
    await Model.User.findByIdAndDelete(id);
    return res.status(200).send({ success: true });
}

const updateUser = async (req, res) => {
    const { id } = req.params
    const update = await Model.User.findByIdAndUpdate(id, {
        name: req.body.name,
        dayOfBirth: req.body.dayOfBirth,
    }, { new: true })
    if (!update)
        return res.status(500).send('the product cannot be updated!')
    res.send(update);
}

const createUser = async (req, res) => {
    const { name, dayOfBirth } = req.body
    const result = await Model.User.create({
        name,
        dayOfBirth
    });
    return res.status(200).send(result);
}

module.exports = {
    getAllUser,
    getOneUser,
    deleteUser,
    createUser,
    updateUser
}
const Model = require("../model/user.model");

const getAllUser = async (req, res) => {
    const result = await Model.User.find();
    return res.status(200).send({ data: result });
}

const getOneUser = async (req, res) => {
    const {idUser} = req.params;
    const result = await Model.User.findById(idUser);
    if(!result){
        return res.status(500).send({message: "Không tìm thấy"})
    }
    return res.status(200).send(result);
}

const deleteUser = async (req, res) => {
    const {idUser} = req.params;
    await Model.User.findByIdAndDelete(idUser);
    return res.status(200).send({success: true});
}

const updateUser = async (req, res) => {
    await Model.User.findByIdAndUpdate({ idUser: req.params }, {
        name: req.body.name,
        address: req.body.address,
        momBirth: req.body.momBirth,
        numberPhone: req.body.numberPhone,
        height: req.body.height,
        babyDateBorn: req.body.babyDateBorn,
        dataSave: req.body.dataSave,
        note: req.body.note,
        avatar: req.body.avatar,
        imagePregnant: req.body.imagePregnant,
        isStar: req.body.isStar,
        historyNote: req.body.historyNote
    })
}

const createUser = async (req, res) => {
    const { name, address, momBirth, numberPhone, height, babyDateBorn, dataSave, note, avatar, imagePregnant, isStar, historyNote } = req.body
    const result = await Model.User.create({
        name, 
        address, 
        momBirth, 
        numberPhone, 
        height, 
        babyDateBorn, 
        dataSave, 
        note, 
        avatar, 
        imagePregnant, 
        isStar, 
        historyNote
    });
    return res.status(200).send(result);
}

module.exports = {
    getAllUser,
    getOneUser,
    deleteUser,
    updateUser,
    createUser
}
const Model = require("../model/admin.model");

const getAllAdmin = async (req, res) => {
    const result = await Model.Admin.find();
    return res.status(200).send({ data: result });
}

const getOneAdmin = async (req, res) => {
    const {idUser} = req.params;
    const result = await Model.Admin.findById(idUser);
    if(!result){
        return res.status(500).send({message: "Không tìm thấy"})
    }
    return res.status(200).send(result);
}

const deleteAdmin = async (req, res) => {
    const {idAdmin} = req.params;
    await Model.Admin.findByIdAndDelete(idAdmin);
    return res.status(200).send({success: true});
}

const updateAdmin = async (req, res) => {
    await Model.Admin.findByIdAndUpdate({ idAdmin: req.params }, {
        name: req.body.name,
        email: req.body.email,
        address: req.body.address,
        image: req.body.image,
        ids: req.body.ids
    })
}

const createAdmin = async (req, res) => {
    const { name, email, address, image, ids } = req.body
    const result = await Model.Admin.create({
        name, 
        email,
        address, 
        image, 
        ids
    });
    return res.status(200).send(result);
}

module.exports = {
    getAllAdmin,
    getOneAdmin,
    deleteAdmin,
    updateAdmin,
    createAdmin
}
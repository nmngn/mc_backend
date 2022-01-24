const Model = require("../model/historyNote.model");

const getAllNote = async (req, res) => {
    const result = await Model.Note.find();
    return res.status(200).send({ data: result });
}

const getOneNote = async (req, res) => {
    const {idNote} = req.params;
    const result = await Model.Note.findById(idNote);
    if(!result){
        return res.status(500).send({message: "Không tìm thấy"})
    }
    return res.status(200).send(result);
}

const deleteNote = async (req, res) => {
    const {idNote} = req.params;
    await Model.Note.findByIdAndDelete(idNote);
    return res.status(200).send({success: true});
}

const updateNote = async (req, res) => {
    await Model.Note.findByIdAndUpdate({ idNote: req.params }, {
        time: req.body.time,
        image: req.body.image
    })
}

const createNote = async (req, res) => {
    const { time, image } = req.body
    const result = await Model.Note.create({
        time,
        image
    });
    return res.status(200).send(result);
}

module.exports = {
    getAllNote,
    getOneNote,
    deleteNote,
    updateNote,
    createNote
}
const Model = require("../model/historyNote.model");

const getAllNote = async (req, res) => {
    const result = await Model.Note.find();
    return res.status(200).send({ data: result });
}

const getOneNote = async (req, res) => {
    const {id} = req.params;
    const result = await Model.Note.findById(id);
    if(!result){
        return res.status(500).send({message: "Không tìm thấy"})
    }
    return res.status(200).send(result);
}

const deleteNote = async (req, res) => {
    const {id} = req.params;
    await Model.Note.findByIdAndDelete(id);
    return res.status(200).send({success: true});
}

const deleteNotes = async (req, res) => {
    const {idUser} = req.params;
    Model.Note.remove({idUser}).then(product =>{
        if(product) {
            return res.status(200).json({success: true, message: 'the notes is deleted!'})
        } else {
            return res.status(404).json({success: false , message: "notes not found!"})
        }
    }).catch(err=>{
       return res.status(500).json({success: false, error: err}) 
    })
}

const updateNote = async (req, res) => {
    await Model.Note.findByIdAndUpdate({ id: req.params }, {
        time: req.body.time,
        image: req.body.image
    })
}

const createNote = async (req, res) => {
    const {idUser, time, image } = req.body
    const result = await Model.Note.create({
        idUser,
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
    createNote, 
    deleteNotes
}
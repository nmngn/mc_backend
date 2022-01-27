const express = require('express');
const noteController = require('../controllers/historyNote.controller');

const router = express.Router();

router.get("/all/", noteController.getAllNote)
router.get("/:id", noteController.getOneNote)
router.put("/:id", noteController.updateNote)
router.delete("/:id", noteController.deleteNote)
router.post("/", noteController.createNote)
router.get("/deleteNotes/:idUser", noteController.deleteNotes)


module.exports = router;
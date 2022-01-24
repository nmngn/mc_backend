const express = require('express');
const noteController = require('../controllers/historyNote.controller');

const router = express.Router();

router.get("/", noteController.getAllNote)
router.get("/:idNote", noteController.getOneNote)
router.put("/:idNote", noteController.updateNote)
router.delete("/:idNote", noteController.deleteNote)
router.post("/:idNote", noteController.createNote)


module.exports = router;
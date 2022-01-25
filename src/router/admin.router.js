const express = require('express');
const adminController = require('../controllers/admin.controller');

const router = express.Router();

router.get("/", adminController.getAllAdmin)
router.get("/:id", adminController.getOneAdmin)
router.put("/:id", adminController.updateAdmin)
router.delete("/:id", adminController.deleteAdmin)
router.post("/", adminController.createAdmin)

module.exports = router;
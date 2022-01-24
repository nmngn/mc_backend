const express = require('express');
const adminController = require('../controllers/admin.controller');

const router = express.Router();

router.get("/", adminController.getAllAdmin)
router.get("/idAdmin", adminController.getOneAdmin)
router.put("/:idAdmin", adminController.updateAdmin)
router.delete("/:idAdmin", adminController.deleteAdmin)
router.post("/:idAdmin", adminController.createAdmin)

module.exports = router;
const express = require('express');
const userController = require('../controllers/user.controller');

const router = express.Router();

router.get("/all", userController.getAllUser)
router.get("/:id", userController.getOneUser)
router.put("/:id", userController.updateUser)
router.delete("/:id", userController.deleteUser)
router.post("/", userController.createUser)

module.exports = router;
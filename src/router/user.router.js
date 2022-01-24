const express = require('express');
const userController = require('../controllers/user.controller');

const router = express.Router();

router.get("/", userController.getAllUser)
router.get("/:userId", userController.getOneUser)
router.put("/:userId", userController.updateUser)
router.delete("/:userId", userController.deleteUser)
router.post("/:userId", userController.createUser)


module.exports = router;
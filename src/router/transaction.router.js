const express = require('express');
const transactionController = require('../controllers/transaction.controller');

const router = express.Router();

router.get("/", transactionController.getTransactionRangeDate)
router.get("/all", transactionController.getAllTransaction)
router.get("/:id", transactionController.getOneTransaction)
router.put("/:id", transactionController.updateTransaction)
router.delete("/:id", transactionController.deleteTransaction)
router.post("/", transactionController.createTransaction)

module.exports = router;
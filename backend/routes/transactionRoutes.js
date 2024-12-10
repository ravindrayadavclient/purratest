const express = require("express");
const router = express.Router();
const { getTransactions } = require("../controllers/transactionController");
const validateQuery = require("../utils/validateQuery");

const allowedParams = [
  "supplier",
  "year",
  "month",
  "minVolume",
  "maxVolume",
  "minValue",
  "maxValue",
];

router.get("/", validateQuery(allowedParams), getTransactions);

module.exports = router;

const express = require("express");
const router = express.Router();
const {
  getSuppliers,
  getSupplierDetails,
} = require("../controllers/supplierController");
const validateQuery = require("../utils/validateQuery");

const allowedParams = [
  "name",
  "certificates",
  "creditRating",
  "countries",
  "employeesMin",
  "employeesMax",
  "turnoverMin",
  "turnoverMax",
];

router.get("/", validateQuery(allowedParams), getSuppliers);
router.get("/:id", getSupplierDetails);

module.exports = router;

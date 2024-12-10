const express = require("express");
const router = express.Router();

const {
  getUniqueCreditRatings,
  getLocations,
  getCertificates,
  getEmployeesMinMax,
  getRevenueMinMax,
} = require("../controllers/filterController");

router.get("/locations", getLocations);
router.get("/certificates", getCertificates);
router.get("/employees", getEmployeesMinMax);
router.get("/credit-ratings", getUniqueCreditRatings);
router.get("/revenue", getRevenueMinMax);

module.exports = router;

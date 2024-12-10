const Supplier = require("../models/supplierModel");
const HTTP_STATUS = require("../utils/httpStatus");
const { sendResponse } = require("../utils/responseHelper");

// @desc    Get unique values for certificates
// @route   GET /api/filters/certificates
// @access  Public
const getCertificates = async (req, res) => {
  try {
    const certificates = await Supplier.distinct("certificates");

    sendResponse(
      res,
      HTTP_STATUS.OK,
      true,
      "Certificates fetched successfully",
      certificates
    );
  } catch (error) {
    console.error("Error fetching certificates:", error);
    sendResponse(res, HTTP_STATUS.INTERNAL_SERVER_ERROR, false, "Server error");
  }
};

// @desc    Get unique values for locations
// @route   GET /api/filters/locations
// @access  Public
const getLocations = async (req, res) => {
  try {
    const locations = await Supplier.distinct("location");

    sendResponse(
      res,
      HTTP_STATUS.OK,
      true,
      "Locations fetched successfully",
      locations
    );
  } catch (error) {
    console.error("Error fetching locations:", error);
    sendResponse(res, HTTP_STATUS.INTERNAL_SERVER_ERROR, false, "Server error");
  }
};

// @desc    Get unique credit ratings
// @route   GET /api/filters/credit-ratings
// @access  Public
const getUniqueCreditRatings = async (req, res) => {
  try {
    const creditRatings = await Supplier.distinct("creditRating");

    sendResponse(
      res,
      HTTP_STATUS.OK,
      true,
      "Credit ratings fetched successfully",
      creditRatings
    );
  } catch (error) {
    console.error("Error fetching credit ratings:", error);
    sendResponse(res, HTTP_STATUS.INTERNAL_SERVER_ERROR, false, "Server error");
  }
};

// @desc    Get min and max values for revenue
// @route   GET /api/filters/revenue-min-max
// @access  Public
const getRevenueMinMax = async (req, res) => {
  try {
    const revenueStats = await Supplier.aggregate([
      {
        $group: {
          _id: null,
          minRevenue: { $min: "$revenue" },
          maxRevenue: { $max: "$revenue" },
        },
      },
    ]);

    const { minRevenue = 0, maxRevenue = 0 } = revenueStats[0] || {};

    sendResponse(
      res,
      HTTP_STATUS.OK,
      true,
      "Revenue min and max values fetched successfully",
      { minRevenue, maxRevenue }
    );
  } catch (error) {
    console.error("Error fetching revenue min-max:", error);
    sendResponse(res, HTTP_STATUS.INTERNAL_SERVER_ERROR, false, "Server error");
  }
};

// @desc    Get min and max values for number of employees
// @route   GET /api/filters/employees-min-max
// @access  Public
const getEmployeesMinMax = async (req, res) => {
  try {
    const employeeStats = await Supplier.aggregate([
      {
        $group: {
          _id: null,
          minEmployees: { $min: "$numberOfEmployees" },
          maxEmployees: { $max: "$numberOfEmployees" },
        },
      },
    ]);

    const { minEmployees = 0, maxEmployees = 0 } = employeeStats[0] || {};

    sendResponse(
      res,
      HTTP_STATUS.OK,
      true,
      "Employee count min and max values fetched successfully",
      { minEmployees, maxEmployees }
    );
  } catch (error) {
    console.error("Error fetching employees min-max:", error);
    sendResponse(res, HTTP_STATUS.INTERNAL_SERVER_ERROR, false, "Server error");
  }
};

module.exports = {
  getCertificates,
  getLocations,
  getUniqueCreditRatings,
  getRevenueMinMax,
  getEmployeesMinMax,
};

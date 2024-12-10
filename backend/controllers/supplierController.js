const Supplier = require("../models/supplierModel");
const HTTP_STATUS = require("../utils/httpStatus");
const { sendResponse } = require("../utils/responseHelper");

// @desc    Get all suppliers with optional filters
// @route   GET /api/suppliers
// @access  Public
const getSuppliers = async (req, res) => {
  try {
    const {
      name,
      certificates,
      creditRating,
      countries,
      employeesMin,
      employeesMax,
      turnoverMin,
      turnoverMax,
    } = req.query;

    // Build query object with dynamic conditions
    let query = {};
    if (name) query.name = new RegExp(name, "i");

    // Handle certificates as an array
    if (certificates) {
      const certificateArray = Array.isArray(certificates)
        ? certificates
        : certificates.split(",");
      query.certificates = { $in: certificateArray };
    }

    // Handle countries as an array
    if (countries) {
      const countryArray = Array.isArray(countries)
        ? countries
        : countries.split(",");
      query.exportingToCountries = { $in: countryArray };
    }

    if (creditRating) query.creditRating = creditRating;

    if (employeesMin || employeesMax) {
      query.numberOfEmployees = {};
      if (employeesMin) query.numberOfEmployees.$gte = parseInt(employeesMin);
      if (employeesMax) query.numberOfEmployees.$lte = parseInt(employeesMax);
    }

    if (turnoverMin || turnoverMax) {
      query.exportTransactionTurnover = {};
      if (turnoverMin)
        query.exportTransactionTurnover.$gte = parseInt(turnoverMin);
      if (turnoverMax)
        query.exportTransactionTurnover.$lte = parseInt(turnoverMax);
    }

    const suppliers = await Supplier.find(query).populate(
      "transactionsHistory"
    );

    sendResponse(
      res,
      HTTP_STATUS.OK,
      true,
      "Suppliers fetched successfully",
      suppliers
    );
  } catch (error) {
    console.error(error);
    sendResponse(res, HTTP_STATUS.INTERNAL_SERVER_ERROR, false, "Server error");
  }
};

// @desc    Get supplier details by ID
// @route   GET /api/suppliers/:id
// @access  Public
const getSupplierDetails = async (req, res) => {
  try {
    const { id } = req.params;

    const supplier = await Supplier.findById(id).populate({
      path: "transactionsHistory",
      select: "date product volume value -_id", // Return only specific fields
    });

    if (!supplier) {
      return sendResponse(
        res,
        HTTP_STATUS.NOT_FOUND,
        false,
        "Supplier not found"
      );
    }

    sendResponse(
      res,
      HTTP_STATUS.OK,
      true,
      "Supplier details fetched successfully",
      supplier
    );
  } catch (error) {
    console.error(error);
    sendResponse(res, HTTP_STATUS.INTERNAL_SERVER_ERROR, false, "Server error");
  }
};

module.exports = { getSuppliers, getSupplierDetails };

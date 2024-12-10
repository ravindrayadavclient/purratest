const Transaction = require("../models/transactionModel");
const HTTP_STATUS = require("../utils/httpStatus");
const { sendResponse } = require("../utils/responseHelper");

// @desc    Get transactions with optional filters
// @route   GET /api/transactions
// @access  Public
const getTransactions = async (req, res) => {
  try {
    const { supplier, year, month, minVolume, maxVolume, minValue, maxValue } =
      req.query;

    console.log("Query Parameters:", req.query);

    let query = {};

    // Supplier filter
    if (supplier) {
      console.log("Filtering by supplier:", supplier);
      query.supplier = supplier;
    }

    // Date range filtering using boeDate
    if (year) {
      console.log("Filtering by year:", year);
      query.boeDate = {
        ...query.boeDate,
        $gte: new Date(`${year}-01-01T00:00:00.000Z`),
        $lte: new Date(`${year}-12-31T23:59:59.999Z`),
      };
    }

    if (month) {
      console.log("Filtering by month:", month);
      const start = new Date(year, month - 1, 1);
      const end = new Date(start);
      end.setMonth(start.getMonth() + 1);
      query.boeDate = { ...query.boeDate, $gte: start, $lt: end };
    }

    // Volume filtering
    if (minVolume || maxVolume) {
      console.log("Filtering by volume range:", { minVolume, maxVolume });
      query.qty = {};
      if (minVolume) query.qty.$gte = parseFloat(minVolume);
      if (maxVolume) query.qty.$lte = parseFloat(maxVolume);
    }

    // Value filtering
    if (minValue || maxValue) {
      console.log("Filtering by value range:", { minValue, maxValue });
      query.totalValue = {};
      if (minValue) query.totalValue.$gte = parseFloat(minValue);
      if (maxValue) query.totalValue.$lte = parseFloat(maxValue);
    }

    console.log("Final query:", query);

    // Execute query using the correct boeDate filter
    const transactions = await Transaction.find(query);

    console.log("Transactions fetched:", transactions);

    sendResponse(
      res,
      HTTP_STATUS.OK,
      true,
      "Transactions fetched successfully",
      transactions
    );
  } catch (error) {
    console.error("Error fetching transactions:", error);
    sendResponse(res, HTTP_STATUS.INTERNAL_SERVER_ERROR, false, "Server error");
  }
};

module.exports = { getTransactions };

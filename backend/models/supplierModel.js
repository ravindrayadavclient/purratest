// models/supplierModel.js
const mongoose = require("mongoose");

// Define Supplier Schema
const supplierSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    location: { type: String },
    certificates: [{ type: String }],
    creditRating: { type: String },
    numberOfEmployees: { type: Number },
    revenue: { type: Number },
    exportTransactionTurnover: { type: Number },
    exportingToCountries: [{ type: String }],
    transactionsHistory: [{ type: String }],
  },
  { timestamps: true }
);

// Create Supplier Model
const Supplier = mongoose.model("Supplier", supplierSchema);

module.exports = Supplier;

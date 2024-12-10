// models/transactionModel.js
const mongoose = require("mongoose");

// Define Transaction Schema
const transactionSchema = new mongoose.Schema(
  {
    portOfOrigin: { type: String },
    boeDate: { type: Date },
    hsCode: { type: String },
    itemDescription: { type: String },
    qty: { type: Number },
    unit: { type: String },
    unitValue: { type: Number },
    invoiceCurrency: { type: String },
    totalValue: { type: Number },
    duty: { type: Number },
    importerId: { type: String },
    importer: { type: String },
    cityState: { type: String },
    supplier: { type: String },
    originCountry: { type: String },
    month: { type: Number },
    year: { type: Number },
  },
  { timestamps: true }
);

// Create Transaction Model
const Transaction = mongoose.model("Transaction", transactionSchema);

module.exports = Transaction;

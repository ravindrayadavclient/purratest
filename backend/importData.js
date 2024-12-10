const mongoose = require("mongoose");
const XLSX = require("xlsx");
const dotenv = require("dotenv");
const path = require("path");

// Load environment variables
dotenv.config();

// MongoDB connection URL
const MONGO_URI = process.env.MONGO_URI || "mongodb://localhost:27017/purraApp";

// Connect to MongoDB
mongoose
  .connect(MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((error) => {
    console.error("Error connecting to MongoDB", error);
  });

// Define Schemas
const supplierSchema = new mongoose.Schema({
  name: { type: String, required: true },
  location: { type: String },
  certificates: [{ type: String }],
  creditRating: { type: String },
  numberOfEmployees: { type: Number },
  revenue: { type: Number },
  exportTransactionTurnover: { type: Number },
  exportingToCountries: [{ type: String }],
  transactionsHistory: [
    { type: mongoose.Schema.Types.ObjectId, ref: "Transaction" },
  ],
});

const transactionSchema = new mongoose.Schema({
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
  supplier: { type: mongoose.Schema.Types.ObjectId, ref: "Supplier" },
  originCountry: { type: String },
  month: { type: Number },
  year: { type: Number },
});

const Supplier = mongoose.model("Supplier", supplierSchema);
const Transaction = mongoose.model("Transaction", transactionSchema);

// Function to import suppliers from XLSX
async function importSuppliers(filePath) {
  const workbook = XLSX.readFile(filePath);
  const sheetName = workbook.SheetNames[0];
  const sheet = workbook.Sheets[sheetName];
  const data = XLSX.utils.sheet_to_json(sheet);

  console.log("Suppliers Data:", data);

  if (!data || data.length === 0) {
    throw new Error("No valid supplier data found to import.");
  }

  try {
    await Supplier.insertMany(data);
    console.log("Suppliers data imported successfully");
  } catch (error) {
    console.error("Error inserting suppliers data:", error);
  }
}

// Function to import transactions from XLSX
async function importTransactions(filePath) {
  const workbook = XLSX.readFile(filePath);
  const sheetName = workbook.SheetNames[0];
  const sheet = workbook.Sheets[sheetName];
  const data = XLSX.utils.sheet_to_json(sheet);

  console.log("Transactions Data:", data);

  if (!data || data.length === 0) {
    throw new Error("No valid transaction data found to import.");
  }

  try {
    await Transaction.insertMany(data);
    console.log("Transaction data imported successfully");
  } catch (error) {
    console.error("Error inserting transactions data:", error);
  }
}

// Main function to run the import
async function main() {
  try {
    const supplierFilePath = path.join(
      __dirname,
      "dummyData",
      "Suppliers_Dummy_Data.xlsx"
    );
    const transactionFilePath = path.join(
      __dirname,
      "dummyData",
      "Transactions_Dummy_Data.xlsx"
    );

    console.log("Supplier File Path:", supplierFilePath);
    console.log("Transaction File Path:", transactionFilePath);

    await importSuppliers(supplierFilePath);
    await importTransactions(transactionFilePath);

    console.log("All data imported successfully");
  } catch (error) {
    console.error("Error during import:", error);
  } finally {
    mongoose.connection.close();
  }
}

main();

const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const connectDB = require("./config/db");
const errorHandler = require("./utils/errorHandler");

// Load environment variables
dotenv.config();

// Initialize Express
const app = express();

// Enable CORS
app.use(
  cors({
    origin: process.env.CORS_ORIGIN || "*", // Configure allowed origins in .env or use "*" for all
    methods: ["GET", "POST", "PUT", "DELETE"], // Specify allowed methods
    allowedHeaders: ["Content-Type", "Authorization"], // Define allowed headers
  })
);

// Middleware for parsing incoming requests
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Establish Database Connection
connectDB();

// Define API Routes
app.use("/api/suppliers", require("./routes/supplierRoutes"));
app.use("/api/transactions", require("./routes/transactionRoutes"));
app.use("/api/filters", require("./routes/filterRoutes"));

// Global Error Handler
app.use(errorHandler);

// Start the Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(
    `🚀 Server is running in ${
      process.env.NODE_ENV || "development"
    } mode on port ${PORT}`
  );
});

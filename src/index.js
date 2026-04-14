require("dotenv").config();
const express = require("express");
const morgan = require("morgan");
const cors = require("cors");

const arcRoutes = require("./routes/arcRoutes");
const errorHandler = require("./middleware/errorHandler");

const app = express();

// middlewares
app.use(cors());
app.use(express.json());
app.use(morgan("combined"));

// routes
app.use("/api/arc", arcRoutes);

// health check (важно для продакшена)
app.get("/health", (req, res) => {
  res.status(200).json({
    status: "OK",
    uptime: process.uptime(),
    timestamp: new Date()
  });
});

// 404 handler
app.use((req, res) => {
  res.status(404).json({
    error: "Not Found"
  });
});

// error handler
app.use(errorHandler);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});

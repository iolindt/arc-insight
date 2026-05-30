const express = require("express");
const routes = require("./src/routes/arcRoutes");
const errorHandler = require("./src/middleware/errorHandler");

const app = express();

const healthRoutes = require("./src/routes/healthRoutes");

app.use(express.json());

// routes
app.use("/api/v1", routes);

// error handler (всегда в конце)
app.use(errorHandler);

module.exports = app;

app.use("/api", healthRoutes);

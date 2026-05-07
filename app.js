const express = require("express");
const routes = require("./src/routes/arcRoutes");
const errorHandler = require("./src/middleware/errorHandler");

const app = express();

app.use(express.json());

// routes
app.use("/api", routes);

// error handler (всегда в конце)
app.use(errorHandler);

module.exports = app;

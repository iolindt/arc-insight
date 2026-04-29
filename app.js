const express = require("express");
const arcRoutes = require("./src/routes/arcRoutes");
const errorHandler = require("./src/middleware/errorHandler");

const app = express();

app.use(express.json());
app.use("/api", arcRoutes);

app.use(errorHandler);

module.exports = app;

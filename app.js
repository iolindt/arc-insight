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
app.get("/health", (req, res) => {
  res.status(200).json({
    status: "ok",
    uptime: process.uptime()

    const swaggerUi = require("swagger-ui-express");
const swaggerSpec = require("./src/docs/swagger");

  app.use(
  "/api/docs",
  swaggerUi.serve,
  swaggerUi.setup(swaggerSpec)
);
  });
});

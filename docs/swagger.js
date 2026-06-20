const swaggerJsDoc = require("swagger-jsdoc");

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Arc Insight API",
      version: "1.0.0",
      description: "Analytics API for Arc Network"
    },
    servers: [
      {
        url: "http://localhost:3000",
        description: "Development Server"
      }
    ]
  },
  apis: [
    "./src/routes/*.js",
    "./src/controllers/*.js"
  ]
};

module.exports = swaggerJsDoc(options);

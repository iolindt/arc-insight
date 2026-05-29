const fs = require("fs");
const path = require("path");

const logPath = path.join(__dirname, "../../logs/errors.log");

exports.error = (message) => {
  const log = `[${new Date().toISOString()}] ERROR: ${message}\n`;

  fs.appendFileSync(logPath, log);
  console.error(log);
};

if (process.env.NODE_ENV !== "production") {
  const dotenv = require("dotenv");

  dotenv.config();
}

const env = process.env;

module.exports = {
  NODE_ENV: env.NODE_ENV,
  PORT: env.PORT,
  API_KEY: env.API_KEY,
};

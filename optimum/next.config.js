/** @type {import('next').NextConfig} */
const { config } = require("dotenv");

const { parsed: envConfig = {} } = config({
  path: `./.env.${process.env.ENV}`,
});

const nextConfig = {
  env: envConfig,
};

module.exports = nextConfig;

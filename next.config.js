/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    SERVER_BASE_URL: "http://localhost:8000",
    // SERVER_BASE_URL: "http://online_server:8000",
  },
};

module.exports = nextConfig;

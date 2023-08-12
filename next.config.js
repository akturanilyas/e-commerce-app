/** @type {import('next').NextConfig} */
const nextConfig = {
  env: { APP_API_URL: process.env.APP_API_URL },
};

module.exports = nextConfig;

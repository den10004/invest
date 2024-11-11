/** @type {import('next').NextConfig} */

import dotenv from "dotenv";
dotenv.config();

const nextConfig = {
  /*
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "platformatest.ru",
        port: "",
        pathname: "api/files/**",
      },
    ],
  },*/
  env: {
    DB_USER: process.env.DB_USER,
    DB_PASS: process.env.DB_PASS,
    DB_HOST: process.env.DB_HOST,
  },
  reactStrictMode: false,
};

export default nextConfig;

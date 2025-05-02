import dotenv from "dotenv";
import path from "path";

dotenv.config({ path: "/rvdata/env-files/alpha72.env" });

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["res.cloudinary.com"],
  },
};

export default nextConfig;

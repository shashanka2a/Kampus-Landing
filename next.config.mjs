/** @type {import('next').NextConfig} */
const nextConfig = {
  turbopack: {
    // Set root to current working directory in ES module context
    root: process.cwd(),
  },
};

export default nextConfig;



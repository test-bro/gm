/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",              // static export enable
  basePath: "/my-gaming-site",   // 👈 yaha apne repo ka naam likho
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;

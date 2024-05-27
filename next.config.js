/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["navana-realestate.com"],
    // domains: ['localhost', '127.0.0.1'],
    loader: "imgix",
    path: "/",
  },
  staticPageGenerationTimeout: 100000,
};

module.exports = {
  typescript: {
    // !! WARN !!
    // Dangerously allow production builds to successfully complete even if
    // your project has type errors.
    // !! WARN !!
    ignoreBuildErrors: true,
  },
};

// const withTM = require("next-transpile-modules");

// module.exports = withTM({
//   transpileModules: ["gsap"],
// });

module.exports = nextConfig;

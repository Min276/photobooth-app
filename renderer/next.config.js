// const { i18n } = require('../next-i18next.config')

module.exports = {
  // i18n,
  images: {
    unoptimized: true,
  },
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.target = 'electron-renderer';
    }
    return config;
  },
};

// const nextConfig = {
//   reactStrictMode: true,
//   swcMinify: true,
//   i18n,
// }

// module.exports = nextConfig;

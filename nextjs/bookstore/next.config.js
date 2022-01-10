module.exports = {
  reactStrictMode: false,
  webpack5: true,
  webpack: (config) => {
    config.resolve.fallback = { 
    };

    return config;
  },
  env: {
  }
}

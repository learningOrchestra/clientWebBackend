const withPlugins = require('next-compose-plugins');

const nextConfig = () => {
  const env = {
    FIREBASE_CREDENCIAL: process.env.FIREBASE_CREDENCIAL,
    MONGO_CREDENCIAL: process.env.MONGO_CREDENCIAL,
    JWT_SECRET: process.env.JWT_SECRET,
  };
  return { env };
};

module.exports = withPlugins([], nextConfig());

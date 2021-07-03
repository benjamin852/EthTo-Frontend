module.exports = {
  webpack: (config, options) => {
    config.module.rules.push({
      test: /\.(graphql|gql)$/,
      exclude: /node_modules/,
      use: [options.defaultLoaders.babel, { loader: 'graphql-tag/loader' }],
    });
    return config;
  },
  env: {
    BASE_API_URL: 'http://localhost:4000/dev',
    ONBOARD_KEY: '7e738cae-8bad-4605-bded-fe6e7fa287ea',
    FORMATIC_PROD: 'pk_live_2EC8406A0F66CF05',
    FORMATIC_DEV: 'pk_test_EE7506631DF70308',
  },
};

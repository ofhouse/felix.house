const withCSS = require('@zeit/next-css');

require('dotenv').config({
  path: '.env.local',
});

const isProd = process.env.NODE_ENV === 'production';

module.exports = withCSS({
  env: {
    GITHUB_CLIENT_ID: process.env.GITHUB_CLIENT_ID,
    REPO_FULL_NAME: process.env.REPO_FULL_NAME,
    BASE_BRANCH: process.env.BASE_BRANCH,
    STAGE: process.env.STAGE,
  },

  webpack: function (config) {
    // config.module.rules.unshift();

    config.module.rules.push(
      {
        test: /\.(tsx|ts|js|mjs|jsx)$/,
        use: [
          {
            loader: 'linaria/loader',
            options: {
              sourceMap: process.env.NODE_ENV !== 'production',
            },
          },
        ],
      },
      {
        test: /\.md$/,
        use: 'raw-loader',
      },
      {
        test: /\.svg$/,
        issuer: {
          test: /\.(js|ts)x?$/,
        },
        use: ['@svgr/webpack'],
      },
      // {
      //   test: /\.linaria\.css$/,
      //   loader: 'postcss-loader',
      //   options: {
      //     plugins: () => [
      //       require('postcss-simple-vars')({ variables: postCSSVariables }),
      //     ],
      //   },
      // }
    );

    return config;
  },

  async rewrites() {
    return [
      {
        source: '/robots.txt',
        destination: '/api/robots',
      },
    ];
  },
});

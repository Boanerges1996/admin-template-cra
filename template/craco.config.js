const CracoLessPlugin = require('craco-less')
const webpack = require('webpack')
const { black, violetColor, secondaryColor } = require('./src/constants')
const DotenvPlugin = require('webpack-dotenv-plugin')

module.exports = {
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.ttf$/,
        use: ['file-loader'],
      },
    ],
  },
  webpack: {
    plugins: {
      add: [
        new DotenvPlugin({
          path:
            process.env.NODE_ENV === 'production'
              ? './envs/.env.production'
              : './envs/.env.local',
          sample: './envs/.env.production',
        }),
      ],
    },
  },
  plugins: [
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            modifyVars: {
              '@primary-color': '#EE6C4D',
              '@secondary-color': secondaryColor,
            },
            javascriptEnabled: true,
          },
        },
      },
    },
  ],
}

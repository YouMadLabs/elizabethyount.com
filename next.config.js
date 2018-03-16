const path = require('path');
const glob = require('glob');

const withImages = (nextConfig = {}) => {
  return Object.assign({}, nextConfig, {
    webpack(config, options) {
      if (!options.defaultLoaders) {
        throw new Error(
          'You need to upgrade to NextJS 5.0.0 or above.'
        )
      }

      config.module.rules.push({
        test: /\.(jpe?g|png|svg|gif)$/,
        use: [
          {
            loader: "url-loader",
            options: {
              limit: 8192,
              fallback: "file-loader",
              publicPath: "/static/",
              name: "[name].[ext]"
            }
          }
        ]
      });

      if (typeof nextConfig.webpack === 'function') {
        return nextConfig.webpack(config, options)
      }

      return config
    }
  });
};

const withStyle = (nextConfig = {}) => {
  return Object.assign({}, nextConfig, {
    webpack(config, options) {
      if (!options.defaultLoaders) {
        throw new Error(
          'You need to upgrade to NextJS 5.0.0 or above.'
        )
      }

      config.module.rules.push(
        {
          test: /\.(css|scss)/,
          loader: 'emit-file-loader',
          options: {
            name: '[path][name].[ext]'
          }
        }
      ,
        {
          test: /\.css$/,
          use: ['babel-loader', 'raw-loader', 'postcss-loader']
        }
      ,
        {
          test: /\.s(a|c)ss$/,
          use: ['babel-loader', 'raw-loader', 'postcss-loader',
            { loader: 'sass-loader',
              options: {
                includePaths: ['styles', 'node_modules']
                  .map((d) => path.join(__dirname, d))
                  .map((g) => glob.sync(g))
                  .reduce((a, c) => a.concat(c), [])
              }
            }
          ]
        }
      )

      if (typeof nextConfig.webpack === 'function') {
        return nextConfig.webpack(config, options)
      }

      return config
    }
  });
};

const loadWith = (options) => {
  let nextConfig = {
    webpack(config, options) {
      return config
    }
  }

  if (options.style)
    nextConfig = withStyle(nextConfig)

  if (options.images)
    nextConfig = withImages(nextConfig)

  return nextConfig;
};

module.exports = loadWith({
  style:true,
  images:true
});

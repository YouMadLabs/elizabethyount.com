const path = require('path');
const glob = require('glob');
const config = require('./config');

const pushRules = (nextConfig = {}, rules = {}) => {
  return Object.assign({}, nextConfig, {
    webpack(config, options) {
      if (!options.defaultLoaders) {
        throw new Error(
          'You need to upgrade to NextJS 5.0.0 or above.'
        )
      }

      config.module.rules.push(rules);

      if (typeof nextConfig.webpack === 'function') {
        return nextConfig.webpack(config, options)
      }

      return config
    }
  });
};

const withImages = (nextConfig = {}) => {
  return pushRules(nextConfig, {
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
};

const withStyle = (nextConfig = {}) => {
  let cssRule = {
    test: /\.css$/,
    use: ['babel-loader', 'raw-loader', 'postcss-loader']
  };

  let scssRule = {
    test: /\.(css|scss)/,
    loader: 'emit-file-loader',
    options: {
      name: '[path][name].[ext]'
    }
  }

  let sassRule = {
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

  nextConfig = pushRules(nextConfig, cssRule);
  nextConfig = pushRules(nextConfig, scssRule);
  nextConfig = pushRules(nextConfig, sassRule);

  return nextConfig;
};

const loadWith = (options) => {
  let nextConfig = {
    webpack(config, options) {
      return config
    }
  }

  switch(true) {
    case options.style: nextConfig = withStyle(nextConfig);
    case options.images: nextConfig = withImages(nextConfig); break;
  }

  return nextConfig;
};

module.exports = loadWith(config.webpack);

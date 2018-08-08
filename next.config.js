const path = require('path');
const glob = require('glob');
const config = require('./config');

// next.config.js
module.exports = {
  exportPathMap: function(defaultPathMap) {
    return {
      '/': { page: '/' },
      '/about': { page: '/about' },
      '/rac': { page: '/rac' },
      '/freelance': { page: '/freelance' },
      '/salesforce-cpq': { page: '/salesforce-cpq' },
      '/salesforce-promotions': { page: '/salesforce-promotions' }
    }
  }
}

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
  var loaders = new Array();

  if (process.env.NODE_ENV == 'production') {
    if (config.webpack.imagesPlaceholders) {
      loaders.push({
        loader: "image-trace-loader",
        options: {
          color:config.webpack.traceColor,
        }
      });

      loaders.push({
        loader: 'sqip-loader',
        options: {
          numberOfPrimitives: 20
        }
      });
    }

    loaders.push({
      loader: "url-loader",
      options: {
        limit: 10 * 1024,
        noquotes: true,
        fallback: "file-loader",
        publicPath: "/_next/static/images/",
        outputPath: "static/images/",
        name: "[hash].[ext]"
      }
    });

    loaders.push({
      loader: 'image-webpack-loader',
      options: {
        mozjpeg: {
          progressive: true,
          quality: 65
        },
        optipng: {
          enabled: true,
        },
        pngquant: {
          quality: '65-90',
          speed: 4
        },
        gifsicle: {
          interlaced: false,
        },
        webp: {
          quality: 75
        }
      }
    });
  }

  if (process.env.NODE_ENV == 'development') {
    loaders.push({
      loader: "url-loader",
      options: {
        limit: 10 * 1024,
        noquotes: true,
        fallback: "file-loader",
        useRelativePath: true,
        name: "[name].[ext]"
      }
    });
  }

  return pushRules(nextConfig, {
    test: /\.(jpe?g|png|svg|gif)$/,
    use: loaders
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

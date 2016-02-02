import webpack from 'webpack';
import path from 'path';
import fs from 'fs';
import config from './config';
import paths from './paths';

const NODE_ENV = process.env.NODE_ENV || config.NODE_ENV || 'development';

const supportedLocales = fs.readdirSync(path.resolve(__dirname, './src/app/locales/'))
  .map(localePath => localePath.split('.')[0]);

const preLoaders = config.eslint ? [{
  test: /\.jsx?$/,
  loader: 'eslint',
  include: paths.APP,
  exclude: paths.ASSETS
}] : [];

const replaceModule = ({ module, replacement }) => {
  return {
    apply(resolver) {
      resolver.plugin('module', function (req, cb) {
        if (req.request === module) {
          const request = {
            path: req.path,
            request: replacement
          };
          this.doResolve('module', request, cb);
        } else {
          cb();
        }
      });
    }
  };
};

module.exports = {

  resolve: {
    root: [
      paths.NODE_MODULES,
      paths.APP,
      paths.COMPONENTS,
      paths.BASIC_COMPONENTS,
      paths.CONTAINERS
    ]
  },

  stats: {
    children: false
  },

  output: {
    library: 'webclient',
    libraryTarget: 'var',
    path: paths.BUILD,
    filename: 'bundle.js'
  },

  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(NODE_ENV)
    }),
    new webpack.ContextReplacementPlugin(
      /intl\/locale-data\/jsonp$/,
      new RegExp('^\.\/(' + supportedLocales.join('|') + ')\.js$')
    ),
    new webpack.ResolverPlugin([replaceModule({
      module: 'react/lib/invariant',
      replacement: 'invariant'
    })])
  ],

  module: {
    preLoaders,
    loaders: [{
      test: /\.jsx?$/, // test for both js and jsx
      loaders: ['babel'],
      exclude: [paths.ASSETS],
      include: [paths.SRC, paths.TEST, /buildo-react-components/, /react-intl-hoc/]
    }, {
      test: /\.json$/,
      loader: 'json'
    }, {
      test: paths.THEME_FONTS,
      loader: 'file?name=[path][name].[ext]&context=' + paths.THEME
    }, {
      test: /\.png$/,
      loader: 'file?name=[path][name].[ext]'
    }, {
      test: paths.THEME_VARIABLES,
      loader: 'sass-variable'
    }]
  }
};

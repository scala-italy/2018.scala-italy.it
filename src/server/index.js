process.env.NODE_ENV = require('../../config.json').NODE_ENV || 'development';

require('babel/register')({
  only: [/src/, /fixtures/, /buildo-react-components/, /react-intl-hoc/]
});

require('require-noop')({
  extensions: ['.png', '.css', '.scss']
});

require('./server');

require('ignore-styles');

require('@babel/register')({
  ignore: [/\/(public|build|node_modules)\//],
  presets: ['@babel/preset-env', '@babel/preset-react']
})

require('./server')

// Use dotenv to load environment variables from .env files.
// Plays well with heroku
require('dotenv').load({silent: true});

const PORT = process.env.PORT || 3000;

// Write all further server-side javascript in ES6, use babel for compiling
require('babel-core/register');

const app = require('./src/server').createServer();

if(process.env.NODE_ENV !== 'production') {
  // Development - serve and run webpack hot reloading
  const webpack = require('webpack');
  const config = require('./webpack.development.config');
  const compiler = webpack(config);

  app.use(require('webpack-dev-middleware')(compiler, {
      noInfo: true,
      publicPath: config.output.publicPath
  }));
  app.use(require('webpack-hot-middleware')(compiler));

} else {
  // Production - just serve the bundle from disk
  app.use('/static', express.static(__dirname + '/dist'));
}

// Spin up the server
app.listen(PORT, 'localhost', (err) => {
  if(err) {
    console.log(err);
    return;
  }

  console.log('Listening on port ' + PORT);
})

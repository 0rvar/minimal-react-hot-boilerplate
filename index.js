// Use dotenv to load environment variables from .env files.
// Plays well with heroku
require('dotenv').load({silent: true});

var PORT = process.env.PORT || 3000;

// Write all further server-side javascript in ES6, use babel for compiling
require('babel-core/register');

var app = require('./src/server').createServer();

if(process.env.NODE_ENV !== 'production') {
  // Development - serve and run webpack hot reloading
  var webpack = require('webpack');
  var config = require('./webpack.development.config');
  var compiler = webpack(config);

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
app.listen(PORT, 'localhost', function(err) {
  if(err) {
    console.log(err);
    return;
  }

  console.log('Listening on port ' + PORT);
})

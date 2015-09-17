# Minimal React boilerplate

Usage:
```
npm install
npm run start
```
Then open your browser.

Play around with the react components and get a feel for the hot reloading and inline error display.

## React hot reloading
When NODE_ENV is not production, webpack.development.config.js and babelrc injects
Webpack hot module reloading with react-transform-webpack-hmr.

Relevant files:
* webpack.development.config.js
* .babelrc
* index.js

## CSS Modules
Import css files from you javascript, use the class names by keying into the imported object.
No more global CSS scope!

Uses style loader, pipes to css-loader with the `modules` flag activated.
Relevant files:
* webpack.config.js

## Simple API
The server sends requests to a skeleton API.
I suggest you develop the API using TDD, then develop the client using the dev server

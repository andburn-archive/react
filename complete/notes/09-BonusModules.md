## Webpack

- bundles and optimizes all your web assets (js, css, images etc.)
- works on a root entry file (e.g. app.js) analyzes all dependencies and bundles together in proper order
- use *loaders* to apply file dependent transformations
- *plugins* are used on the bundled output, i.e. globally, before it is written
- use `package.json` to add *yarn* run scripts, e.g. `webpack-dev-server`
- configure in `webpack.config.js` within `module.exports = { ... }`
- `devtool: 'cheap-module-eval-source-map'` defines a good source map config
- need to set entry point script `entry: './src/index.js'`
- the `output` has `path`, `filename` and `publicPath` properties configuring the bundling
- `publicPath` allows changing the final output path to reflect server structure
- use webpack `path` module to create absolute path names with `path.resolve`
- node's `__dirname` is available to use the directory in which webpack is run
- `resolve: { extensions: ['.js', '.jsx'] } ` tells webpack to append these extension to unknown imports
- setup loaders with `module.rules: []` e.g. `{ test: /\.js$/, loader: 'babel-loader' }`
- configure *babel* presets to use in `.babelrc`, also configure the supported [browserlist](https://github.com/browserslist/browserslist)
- to use config a loader or use multiple loaders `use: []` instead of `loader: ...`
- webpack applies loaders in `use` array lifo, i.e. pops them from the end of the array, so order matters!
- to support code-splitting add `chunkFilename: '[id].js'` in the `output` section, as well as making babel aware of it with `babel-plugin-syntax-dynamic-import`
- to support *react* `Component` class level state property, need `babel-preset-stage-2`
- to support older browser with *Promises* and `Object.assign()` add `babel-polyfill`
- the dev server build in memory, for modern browsers `webpack-serve` is the new development server, `webpack-dev-server` is intended when developing with older browsers


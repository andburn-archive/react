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

## NextJS

- a framework for server-side rendering (SSR) of React apps
- SSR rendered pages are rendered by react on the server instead of the client
- examples could be serving a home page with SSR for better indexing by bots
- the filesystem is the main API for NextJS, by keeping a specific file structure that generates routes automatically
- code-splitting (aka lazy-laoding) is also provided out of the box
- uses `styled-jsx` enabling css in jsx code, scoped to the given component
- custom error handlers are also available by creating `pages/_error.js`
- adds a new lifecycle method `static async getInitialProps(context)`, that will run on the client or the server, depending on how the page was allowed
- `getInitialProps` enables us to initialize a components props before it loads

## Animation in React

- css transitions are one option that can be used to animate react apps
- css animations are another option
- when css transitions and animations are used, HTML elements are generally kept in the DOM and have their properties like opacity changed
- in React adding and removing components is instant, for example some kind of closing animation won't be rendered if the component is removed
- `react-transition-group` provides an easy way to perform animations when components enter and leave the DOM
- the `Transition` component provides states (*entering, entered, exiting, exited*) that enable a hookable point to activate animations
- the *timeout* attribute of `Transition` specifies the time between *exiting/entering* and *exited/entered*, in which the animation will play. If the animation is longer than timeout the animation will cut short
- the *timeout* can be different for enter and exit, pass `{ enter: n, exit: m }` to *timeout*
- `Transition` can also take a number of callbacks (`onEnter`, `onEntering`, `onEntered`, `onExit`, `onExiting`, `onExited`)
- the `CSSTransition` component makes it even easier to apply css transitions/animations by using a prescribed naming convention on css classes for the various enter/exit stages
- `TransitionGroup` can be used for dealing with groups of `Transition` components, for lists or any dynamic groups of elements






- inline styles are JavaScript, therefore we can dynamically change it
```
style = {
    color: 'white'
};
style.color = 'black'
```
- css classes are also easily manipulated once `className` is a string, no an array
- limitaions of inline: psuedo-selectors like `hover` and media queries aren't possible


### Radium

- the *Radium* package allows addresses these limitations, and is used a higher order component (component wrapper) e.g. `export default Radium(App)`
- psuedo selectors can be created
```
style = {
  color: 'white',
  ':hover': {
    color: 'black'
  }
}

```
- for transformation type css features, like media queries or animations, we do something similar
```
style = {
  '@media (min-width: 500px)': {
    width: '400px'
  }
}

```
- however the component must be wrapped in a `StyleRoot` component found in Radium

### CSS Modules

- another way to scope css styles to components, is to use [CSS Modules](https://github.com/css-modules/css-modules)
- if using `create-react-app` the app needs to be [ejected](https://medium.com/nulogy/how-to-use-css-modules-with-create-react-app-9e44bec2b5c2), so the config can be edited
  - in `webpack.config.dev.js` and `webpack.config.prod.js` add to css loader section
  ```
  options: {
    importLoaders: 1,
    modules: true,
    localIdentName: '[name]__[local]__[hash:base64:5]'
  }
  ```
- can then import styles from css files scoped to component `import classes from './App.css`, where `classes` will be an JS object and allow us to something like `<div className={classes.App}>`
- when the css file is imported as a module in a component the class names are given unique identifiers for that component, if another component imports it it will have different idents, but always accessed with the JS object with the known property names from original css
- to have a global style, prefix it with `:global`
```
:global .heavy {
  font-weight: bold
}
```
- even with sub classes and pseudo selectors, the class property is all that is required
```
.App button.Green {
  // ...
}

import classes from './App.css'

<button className={classes.Green} />
```

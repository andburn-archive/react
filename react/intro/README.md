# React Notes

Based on [Jame's Nelsons tutorials](http://jamesknelson.com/).

## Basics Raw

- react elements are just JS objects, that describe a single DOM node
- an element has *type*, *props* and *children*
- `React.createElement(type, props, children...)`
- props for HTML elements generally same as HTML attributes, notable exceptions:
  - `class` -> `className`
  - `for` as in `<label>` -> `htmlFor`
  - `style` is an object not a string, and ccs attribute names shoudl be camelCase, e.g.  `borderRadius`
- children that are *falsy* (`null`, `false` or `undefined`) won't get rendered
- `React.render(element, node)` excepts a single React element and a DOM node
  - wrap multiple elmenents in an empty div for example

- *Components* are custom types and are created like HTMl elements with `React.createElement`, the type is specified with an object rather than a string
- Components can just be functions that accept the *props* of an element, and return an element (HTML or custom)
  - such components are known as *Stateless Functional Components*
- child elements passed to `React.createElement()` will be automatically added to the elements `children` prop

- React only renders when you tel it too, with `ReactDOM.render()`
- the first render call will replace the node's content with the React element, subsequent render calls will update the content if necessary
- basic rules of when an element (compared to previous) should be updated:
  - if the types are different
  - when props or children have changed
  - identical elements that have been reordered within an array
- the `key` prop is used to give identical elements in an array a unique identification, so React can if it has been moved

- *events* need to be handled to interact with an app
- React has a number of event props that correspond to JavaScript events, e.g. `onClick`, `onKeyDown`, `onMouseMove`
- if state is effected a re-render would be needed in event handler function
```javascript
React.createElement('button', {
  onClick: funciton() {
    console.log("clicked")
  }
}, 'Click!')
```
- event handler functions take an `event` object as the first argument, containing properties relevant to the specific event type (broadly mirroring JavaScript events) e.g. `preventDefault()` and `target`
  - the `target` may not always be the element the trigger the event, like JavaScript
- React binding is one-way "*A component can set its child element's props. Child elements cannot directly change the values of their props.*"
  - in the example of an `input` element with a `value` prop, editing the value on the page does nothing
  - an event callback can be used to allow the parent to change the value
- callbacks and functions can be passed to components as props

- *Function Components* need everything passed in via their props
  - the drawback being this *state* needs to be stored somewhere
  - they are also only re-rendered when their parent is, not individually
- *Self-contained Components* are the solution, they can store state, communicate externally and re-render on-demand
- *Self-contained Components*:
  - are classes
  - and must extend `React.Component`
  - use the `render()` method to return the React element
  - props are accessed via `this.props` instead of function args
- Methods vs Functions: main difference is methods have access to the `this` object, functions can only access whatever is passed in as arguments
  - allowing methods to store data on `this` and access it on subsequent renders
- `React.Component` has a `setState` method which enables components to be self-contained
  - `this.setState(obj)` copies the properties of the *obj* to `this.state`, the component and its children will then be re-rendered
  - can't be used in `render()` as it will cause an infinite loop
  - also `this.state` is preferred inside constructors
- *Component instances* shouldn't be *new'd* up directly, but allow React to handle it with `React.createElement()`
  - actual instantiation doesn't take place until its first render
- *Constructors* are not mandatory, `React.Component` base constructor will be used to set `this.props` if none is given
  - if a constructor is defined it needs to call `super(props)`
  - most useful for setting the initial state with `this.state` as it is undefined by default

### JavaScript Aside - Simplified `this`
The `this` object is not related to the class, but the object it was called on.
With dot syntax `obj.someMehtod()` the value of `this` in `someMethod()` will be `obj` no matter where `someMethod` was defined.
Calling `someMethod()` without a dot means `this` will be null. Except when,
- you force a `this` value using `call`, `apply` or `bind` methods on a function
- an arrow `=>` function has a har-wired `this` value at the location of its definition

- point to note: *once you pass a method as a callback, you have no idea what `this` will be* (unless its an arrow function!)
- arrow functions are costly though, a new copy of the function is created every time `=>` is encountered
- as consequence it is common to use `bind` to create bound copies of event callbacks in the constructor
```javascript
constructor() {
  // replaces this.reset with a copy that has 'this' forced to refer to the instance
  this.reset = this.reset.bind(this);
}

reset() {
  this.setState({ ... });
}
```

### Tips

If it is practical to pass the data you need through props, it must be passed through props

If you don't need state, don't use it (feed through props instead)

Initialize state in the constructor, using `this.state`

Using `setState()` doesn't re-render everything, but only the component and its children - this can be used to an advantage on frequently updtated components

Changes from `setState()` won't update `this.state` instantly, a callback can be given for when the change is actually made

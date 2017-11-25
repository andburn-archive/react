# React Notes

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
```javascript
function Tree(props) {
  return React.createElement();
}
```
  - such components are known as *Stateless Functional Components*
- child elements passed to `React.createElement()` will be automatically added to the elements `children` prop

**First Rule of React** *If it is practical to pass the data you need through props, it must be passed through props*

- React only renders when you tel it too, with `ReactDOM.render()`
- the first render call will replace the node's content with the React element, subsequent render calls will update the content if necessary
- basic rules of when an element (compared to previous) should be updated:
  - if the types are different
  - when props or children have changed
  - identical elements that have been reordered within an array
- the `key` prop is used to give identical elements in an array a unique identification, so React can if it has been moved

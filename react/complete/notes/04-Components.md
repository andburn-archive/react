- favour functional components, small and focused and unable to alter state
- class components, single place to manage state and to use lifecycle hooks

## Lifecycle

- Stateful components
- **Create**
  - `constructor(props)` if used need to call `super(props)` inside, don't cause side effects
  - `componentWillMount()` historic, not really used
  - `render()` what DOM should look like, prepare and structure JSX code
  - *udpate all child components*
  - `componentDidMount()` don't update state it would trigger a re-render, side effects are ok e.g. web requests
- **Update** (external via props)
  - updates are triggered by the components parent
  - `componentWillReceiveProps(nextProps)` used to sync incoming props with component state (shouldn't cause any side-effects)
  - `shouldComponentUpdate(nextProps, nextState)` can be used to stop updating process to continue by return true or false
    - can be used to optimize performance, when you know a render isn't required
  - `componentWillUpdate(nextProps, nextState)` triggers when an update will happen, possibly a better place to sync props and state
  - `render()`
  - *update all child components*
  - `componentDidUpdate()` don't update state here as it will cause a re-render
- **Update** (internal via state)
  - `shouldComponentUpdate(nextProps, nextState)` can be used to stop updating process to continue by return true or false
    - can be used to optimize performance, when you know a render isn't required
  - `componentWillUpdate(nextProps, nextState)` triggers when an update will happen, possibly a better place to sync props and state
  - `render()`
  - *update all child components*
  - `componentDidUpdate()` don't update state here as it will cause a re-render
- **Delete**
  - `componentWillUnmount()` is called just before a component is removed from the DOM, allowing any clean up to be done
 
- *Pure Components* `import React, { PureComponent } from 'react'`
  - will automatically implement `shouldComponentUpdate` to check new props and state against previous and returns true if there are differences

- **Updating Strategy**
  - top to bottom, when state or props change
  - `render()` doesn't update real DOM immeadiatly
  - React stores a virtual DOMs (the current one and the proposed re-render)
  - on render React comapres its virtual DOMs and only updates the read DOM at the appropriate places if and only if there actually is a differences

## React 16

- returning adjacent elements in render, in react 16 it is possible to return an array of elements, giving the ability to not have a single wrapper element
  - downside is as an array each element needs a key
- another option is to use a higher order component, that simply returns `props.children`
  - allowing us to wrap adjacent elements together without actually creating a wrapping html element
- in React 16.2 there is a built-in component like this called a *fragment* written as an empty tag `<></>`
```
return (
    <>
        <h1>Title</h1>
        <p>Details...</p>
    </>
);
```
  - if not supported by tooling use `<React.Fragment>`

## Higher Order Components

- Higher Order Components (HOC) can add additional functionality to existing components
  - can simply work as component wrappers that contain commonly used logic or markup
  - the other option is to create a function that returns a component, and is generally used to wrap the exported component `export default Wrapper(App);`
- in order to pass props into a wrapped component use the spread operator
```
const wrapIt = (WrappedComponent, className) => {
  return (props) => (
    <div className={className}>
      <WrappedComponent {...props} />
    </div>
  );
}
```

## Misc

`setState` is executed async by React, if `this.state` values need to accessed within `setState` they cannont be relied on to be correct. The solution is to use the functional equivalent, which has a `prevState` argument.
```
this.setState((prevState, props) => {
  return {
     name: newName,
     count: prevState.count + 1
 }
});
```
 
React has a library *prop-types* to give props valid types (or use TypeScript ;) )
```
Person.propTypes = { // assign after component has been defined
    click: PropTypes.func,
    name: PropTypes.string,
    age: PropTypes.age
}
```

To reference an element in a component, for example *focus* of inputs, you can use the `ref` *"prop"* to create a class property
```
<input ref={ (x) => { this.inputElement = x } } />
```
allowing it to be accessed elsewhere
```
componentDidMount() {
    this.inputElement.focus();
}
```

## Planning

1. Component Tree (Structure)
- Application State (Data)
- Components vs Containers

## Notes
- *arrow-functions* can add a blank argument, implying doesn't matter `a.map((_, i) => ...`
- returning `null` from a component is ok, nothing will be rendered
- boolean `props` need not be assigned `<Thing click={handler} activated />`, `activated prop is `true`
- parent can control lifecycle of children



- use [create-react-app](https://github.com/facebook/create-react-app) to init a new project
```
npx create-react-app app-name
```
- Component Creation
  - *Functional* (stateless) a function that returns elements
  - *Class Based* create a class that extends *Component*
- JSX allows us to create components using a familiar HTML syntax, instead of `React.createElement` calls
- add dynamic content to JSX using brackets `<h1>{num * 2} times</h1>`
- functional components can take an argument (*props*) to access attributes `props.name`
- class components access props with `this.props.name`
- `props.children` any elements that are children of this component (text, elements, other components)
- `state` is a property of the `React.Component` class (not availabe to functional components)
  - changes to `state` trigger a React to re-render
- `props` allows passing of data down the component tree
- `state` can store data about a component internally
- to update `state` must use `setState()` it takes an object and updates the relevant part of the `state` object
- should favour functional components, as they are immutable
- state changing components should be limited and are known as containers
- common pattern to pass event handlers to a component as a prop, allowing the containers to keep state changing code together
- passing arguments to function props, like event handlers:
  - use *bind* `<Person click={this.clickHandler.bind(this, "New Name)} />`
  - or an *arrow function* (can have a performance hit) `click={() => this.clickHandler("New Name")}`
- can add inline styles to components by creating a style object and assigning to the JSX style properties
```
const style = {
  backgroundColor: 'white',
  padding: '8px'
}
// ...
return <p style={style}></p>
```

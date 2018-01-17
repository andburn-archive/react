# Next-Gen JavaScript

- `let` when using an actual variable value
- `const` when the value will never change
- *Arrow Functions* alternative to function/var syntax
```
const myFunc = () => {
  // body
}
```
  - arrow function do not have their own copy of `this` simplifiying `this` usage
  - using a single argumnet you can omit the parentheses
  - single line return can be omit curly braces
```
const multiply = number => number * 2;
```
- *Modules*:
  - `export` from a file can be default and/or named
  ```
  export default person
  export const base = 10;
  ```
  - `import` default or named
  ```
  import anyname from './module.js' // default
  import {specificName} from './utils.js' // named
  import {specific as Desired} from './utils.js' // alias
  import * as things from './utils.js' // all named to alias
  ```
- *Classes*:
  - can have Properties and Methods
  - support inheritenance with `extends`
  ```
  class Person {
    constructor() {
        this.name = "Me";
    }
  }
  ```
  - alternative definition of methods and properties, outside of constructor functions (ES7)
  ```
  class Animal {
    species = 'Panthera rosa';
    action = () => { console.log('do it'); };
  }
  ```
- *Spread & Rest operator* `...`
  - *spread* when used to split an array or props `const newArray = [...oldArray, 1, 2]`
    - added props overwrite exisiting
    - can use to copy object properties `newObj = { ...oldObj };`
    - doesn't deep copy, only clones first level of props, other levels are pointers to the objects
  - *rest* used for variable sized function arguments `(...args) => args[0]`
- *Destructuring*
  - extract array elements or object properties an store in variables
  ```
  [a, b] = ['one', 'two']
  [a, , c] = [1, 2, 3]
  {name} = {name: 'Joe', age: 20}
  ```

### Array Functions (recap)

[MDN docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array):
  - `map`, `filter`, `reduce` etc.
  ```
  const doubled = [1, 2, 3].map((num) => {
    return num * 2;
  });
  ```
- `concat` like `push` but returns a new array
- `filter` also returns a new array, applying a predicate on which elements to return (immutable array copy `arr.filter((e, i) => i !== id))`

- `===` triple equals compare type and value

### Promises

- instead of passing success and failure callbacks to a function, the function returns a *promise* which can call `then` which is passed success and failure functions
- it is guaranteed that `then` callbacks, will be called
- `then` can be called multiple times, callbacks executed in order
- `then` itself returns a promise, which leads to chaining allowing multiple dependent async calls, one waiting on previous to finish etc.
- `catch` can be used as a catchall failure callback

```
doSomething()
.then(result => doSomethingElse(result))
.then(newResult => doThirdThing(newResult))
.then(finalResult => {
  console.log(`Got the final result: ${finalResult}`);
})
.catch(failureCallback);
```

- create a promise using the constructor e.g.
`const wait = ms => new Promise(resolve => setTimeout(resolve, ms));`

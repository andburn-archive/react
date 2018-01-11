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
  - *rest* used for variable sized function arguments `(...args) => args[0]`
- *Destructuring*
  - extract array elements or object properties an store in variables
  ```
  [a, b] = ['one', 'two']
  [a, , c] = [1, 2, 3]
  {name} = {name: 'Joe', age: 20}
  ```
  
- *Array Functions* (not next-gen) [[MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)]:
  - `map`, `filter`, `reduce` etc.
  ```
  const doubled = [1, 2, 3].map((num) => {
    return num * 2;
  });
  ```
- `===` triple equals compare type and value

- *Promises* 

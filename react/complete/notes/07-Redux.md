## Redux

- third party, independent of react
- has a central store for all application state `createStore(reducer)`
- *Actions* are *dispatched* from a JS object to Redux `store.dispatch({type: 'ADD'})`
- a *Reducer* recivies an *Action* and updates state `reducer = (state, action) => ...`
- the store *triggers* update notifications to all *Subscribers* `store.subscribe(func)`

- *Reducers* should not have any side effects e.g. async. State should also be only updated immutably
- unlike `setState` in *React* new and old aren't merged, whatever is returned from a *Reducer* is the new state
- use spread operator, `return { ...state, counter: state.counter + 1 }`
- [redux.js: immutability](https://redux.js.org/recipes/structuring-reducers/prerequisite-concepts#note-on-immutability-side-effects-and-mutation)
- [Using immutable.js with redux](https://redux.js.org/recipes/using-immutable.js-with-redux)
- immutable pitfalls
  - nested objects, shallow cloned
  - array operations that are mutable `push`, `unshift` and `splice`

- redux allows multiple reducers by allowing combining reducers into a single cloned
  - `combineReducers` function takes JS object giving a mapping to Reducers
  - the mapping gives a sub state naming, e.g. `state.reducer1.results`
  - if a reducer needs a value from the global state handled in another reducer, it should be passed via an Action

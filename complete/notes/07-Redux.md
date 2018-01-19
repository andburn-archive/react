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

- redux's `Provider` should wrap around the router's `BrowserRouter`
- when using `connect` it returns a function which takes the component as an argument
```
export default connect(mapState, mapDispatch)(thisComponent);
```

- its possible to insert a *middleware* layer in front of the reducer, that intercepts an action in order to use it before passing it onto to the reducer
  - for example a logger could log all action info like this
  - need to create a middleware function
```
const someEnhancer = store => {
  return next => {
    return action => {
      ...
      ...
      return next(action);
    }
  }
}
```
  - add as argument when creating store, `createStore(reducer, applyMiddleware(e1, e1,...)`
  - add multiple enchancers with `compose`

- *Action Creators* are simply functions that return an action object (with type) to be passed to `dispatch`
- using *redux-thunk* we can use Action creators that return a function instead of an action, allowing the the dispatch to be delayed or canceled, ideal for async
  - adding `thunk` middleware, passes action creators inner function the dispatcher allowing it to be called when required
  - it also passes a *getState* argument to access the state, best to not overuse this
```
() => {
  return (dispatch, getState) => {
    ... getState().things ...;
    dispatch(syncActionCreator());
  }
}
```
- *reducers should only update state*, so limit transformation logic in the action creator



## React Routing

- use *react-router* from `react-router-dom` package (depends on `react-router`)
- use `BrowserRouter` component to enable routing and wrap top level JSX
- use `Route` to define routes `<Route path="/" render={() => <Posts />} />`
  - by default `path` prop is like a prefix and will match any route with it at the beginning
  - `exact` prop disables this and only matches against `path` as it is
- multiple `Route` components can be used in the same component and even with the same route, rendering content in order
- routed links should not use anchor tags, but `Link` from react-router to stop the page reloading on going to anchor refs
```
<Link to="/">Home</Link></li>
<Link to={{
    pathname: "/new-post",
    hash: "#submit",
    search: "?quick-submit=true"
}}>New Post</Link>
```
- `Link` *to* prop is always absolute from domain root
- to get a relative path from the current url, the `props.match.url` can be used to construct an appropriate *to* string
- router adds additional props to a component, *location*, *history* and *match*, to further help navigation management
  - but these extra props are not passed down to children, by default
  - use `withRouter` HOC to wrap components that require parents router props
- `Link` generates an anchor tag without any class attribute
  - use `NavLink` instead to assign a class name to the generated link, by default `active`, or assign it using `activeClassName` prop on `NavLink`
  - alternatively use `activeStyle` prop for an inline style
- variables can be added to routes using a colon `<Route path="/posts/:id" ... />` the variable can then be extracted via props, `props.match.params.id` (named *id* in this case)
- query params `?name=green` can be extracted with `props.location.search` and further processed using regular JS `URLSearchParams`
- fragments `/posts#new` can be found using `props.location.hash`
- limit multiple route components to only a single with `Switch`
```
<Switch>
    <Route path="/" exact component={Posts} />
    <Route path="/new-post" component={NewPost} />
    <Route path="/:id" exact component={FullPost} />
</Switch>
```
- use `props.history.push('/about')` to navigate programatically
- nested routes are routes defined in children as well as parent, the child route needs to manually set a relative url such as with `props.match.url`
- `Redirect` inside a `Switch` *from* a route *to* another `<Redirect from="/" to="/posts" />`
  - outside of `Switch` cannot use *from* only to, and can be used like any other conditional redirect
  - `Redirect` replaces the current page, doesn't appear in history, alternative approach is the programatic `props.history.push()`
- routing *Guards* limit routes to particular cases, e.g. auth users. Use conditional component technique, i.e. plain javascript control on whether desired route compoent is rendered/included
- if a `Route` has no path it acts as a catch all route, e.g. for 404
- *lazy-loading*, loading components only when needed to break down large apps into smaller bundles, with `create-react-app` and `react-router` 4+, see lecture 199

- need to configure server to always load `index.html` in order to let react handle routes
- may need to set the basepath for `react-router` useful when using sub dirs of domain to host app `<RouterBrowser basename='/my-app'>`


## Authentication

- in React and SPA's in general, the server is generally a stateless REST API and don't have a notion of a session
- [Token based authentication for SPAs](https://stormpath.com/blog/token-auth-spa)
- server returns a JSON web token, to be stored on the client e.g. local storage
- token is passed with any requests to protected data
- *App* component good place to check for local token, as is always loaded
- `localStorage.setItem(key, value)`
- `localStorage.removeItem(key)`

## Testing


## Authentication

- in React and SPA's in general, the server is generally a stateless REST API and don't have a notion of a session
- server returns a JSON web token, to be stored on the client e.g. local storage
- token is passed with any requests to protected data


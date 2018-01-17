## HTTP Requests

- server communications generally Restful API
- [axios](https://github.com/axios/axios) JS library, good for promise based HTTP requests
- `componentDidMount` best lifecycle method to perform HTTP requests
- `componentDidUpdate` need to be careful when setting state within, as it will trigger a render and call itself once again, leading to an infinite loop, need to place guard clause to stop this
- `catch` chain from promise to handle errors on requests
- axios provides global access to requests and responses through interceptors
  - allows adding common header data to all requests from a single place
  - could also handle errors globally
```
axios.interceptors.request.use(config => {
    console.log(config);
    return config;
}, error => {
    console.log(error);
    return Promise.reject(error);
});
```
- axios has global defaults for example `baseURL` and `header` data
```
axios.defaults.baseURL = 'https://jsonplaceholder.typicode.com';
```
- axios *instances* can be used to overwrite defaults, by using the object instead of default *axios*
```
const instance = axios.create({
    baseURL: 'https://example.com'
});
```

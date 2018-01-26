## Authentication

- in React and SPA's in general, the server is generally a stateless REST API and don't have a notion of a session
- [Token based authentication for SPAs](https://stormpath.com/blog/token-auth-spa)
- server returns a JSON web token, to be stored on the client e.g. local storage
- token is passed with any requests to protected data
- *App* component good place to check for local token, as is always loaded
- `localStorage.setItem(key, value)`
- `localStorage.removeItem(key)`

## Testing
- using setup as provided by `create-react-app`
- test runner: executes tests and provides validation library, in this case *Jest*
- test utilities: simulate the react app, lifecycle, DOM etc, *Enzyme*
- top tips for writing tips:
  - don't test the libraries themselves
  - don't test complex connections, leading to other components
  - do test isolated units, e.g reducer functions, component functions
  - do test conditional outpus, e.g. outcome of props change etc.

- *enzyme's* `shallow` method allows us to create a shallow rendering of a component, i.e. stub out any children components

- baisc component test sample: 
```
import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import NavItems from './NavItems';
import NavItem from './NavItem/NavItem';

configure({
    adapter: new Adapter()
});

describe('<NavItems />', () => {
    it('should render two <NavItem /> elements if not authenticated', () => {
        const wrapper = shallow(<NavItems />);
        expect(wrapper.find(NavItem)).toHaveLength(2);
    });

    it('should render three <NavItem /> elements if authenticated', () => {
        const wrapper = shallow(<NavItems isAuthenicated />);
        expect(wrapper.find(NavItem)).toHaveLength(3);
    });
});
```
- setup function
```
beforeEach(() => {
    wrapper = shallow(<NavItems />);
});
```
- set props on a common component object
```
wrapper.setProps({ isAuthenicated: true });
```

- for more complex components, concentrate on core functionality and create smart tests instead of lots of tests that are less useful


- testing *containers* that are using *Redux* store
  - can assume *Redux* store functions correctly with `connect` etc.
  - use named export trick to remove redux connection and deal on a props only basis `export class ...`

- using `setProps` after a component has mounted

- carefull when testing *Redux*
  - don't want to test complex chains of action creators and reducers
  - *reducers* should be the core of the redux state, and are just functions so can be tested normally
  - no need to use *enzyme* as no react rendering is required





import React, { Component } from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import Layout from './components/Layout/Layout';
import BurgerBuilder from './containers/BurgerBuilder/BurgerBuilder';
import Checkout from './containers/Checkout/Checkout';
import Orders from './containers/Orders/Orders';
import burgerBuilderReducer from './store/reducers/burgerBuilder';

const store = createStore(burgerBuilderReducer, 
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <Layout>
            <Switch>         
              <Route path="/builder" component={BurgerBuilder} />
              <Route path="/checkout" component={Checkout} />
              <Route path="/orders" component={Orders} />
              <Redirect from="/" to="/orders" />
            </Switch>
          </Layout>                
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;

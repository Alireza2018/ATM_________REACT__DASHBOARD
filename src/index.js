import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Bootstrap from 'bootstrap/dist/css/bootstrap.css'

import store from './store'

//React Routes
import App from './App';
import GiftCards from './Cards/index'
import PersonalInfo from './Personal_info/index'


import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <Provider store={ store }>
    <BrowserRouter>
      <Switch>
        <Route  exact path="/" component = { App }  />
        <Route exact path="/gift-cards" component = { GiftCards } />
        <Route exact path="/personal-info" component = { PersonalInfo } />
      </Switch>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();

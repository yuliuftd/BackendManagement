import React from 'react';
import ReactDOM from 'react-dom';
import {HashRouter as Router, Switch, Route, Redirect} from 'react-router-dom'
import 'antd/dist/antd.css';
import './index.css';
import App from './App';
import {mainRoutes} from './routes';
import * as serviceWorker from './serviceWorker';


ReactDOM.render(
  <Router>
  <Switch>
    <Route path="/admin" render={routeProps=><App {...routeProps} />} />
    {mainRoutes.map(route =>{
      return <Route key={route.path} {...route} />
    })}
    <Redirect to="/404" />
  </Switch>
  </Router>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

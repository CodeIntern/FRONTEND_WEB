import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './containers/forgot-password';
import Category from './containers/category';
import JobForm from './containers/job-form';
import Signup from './containers/signup';
import Login from './containers/login';
import Detail from './containers/detail';

export default (
  <div>
    <div className="ui large top fixed hidden menu" style={{ marginBottom: '25px' }}>
      <div className="ui container">
        <a href="./home" className="active item">Home</a>
        <div className="right menu">
          <div className="item">
            <a href="./login" className="ui button">Log in</a>
          </div>
          <div className="item">
            <a href="./signup" className="ui primary button">Sign Up</a>
          </div>
        </div>
      </div>
    </div>
    <Switch onUpdate={() => window.scrollTo(0, 0)}>
      <Route exact path="/" component={ Login } />
      <Route exact path="/login" component={ Login } />
      <Route exact path="/signup" component={ Signup } />
      <Route exact path="/home" component={ Home } />
      <Route exact path="/jobform" component={ JobForm } />
      <Route exact path="/jobdetail" component={ Detail } />
      <Route exact path="/category/:name" component={ Category } />
    </Switch>
  </div>
)
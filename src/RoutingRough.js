import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div>
        <p>Header</p>
    </div>
  )
};

const Homepage = () => {
  return (
    <div>
        <Header/>
        <h1>Homepage </h1>
        <Link to='/about'>Go to Aboutpage</Link>
    </div>
  )
};

const Aboutpage = () => {
  return (
    <div>
        <Header/>
        <h1>Aboutpage</h1>
        <Link to='/'>Go to Aboutpage</Link>
    </div>
  )
};
export {Homepage, Aboutpage } ;


//index.js

import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import {Homepage, Aboutpage } from './RoutingRough';

ReactDOM.render(
    <Router>
       <Switch>
          <Route exact path="/" component={Homepage}/>
        <Route exact path="/about" component={Aboutpage }/>
      </Switch>
    </Router>,
    document.getElementById('root')
);
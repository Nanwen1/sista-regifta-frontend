import React from 'react';
import logo from './logo.svg';
import './styles/App.css';
import {Accountpage} from './pages/account';
import {Registerpage} from './pages/registerlogin';
import {Thankyoupage} from './pages/thankyou';
import {Uploadgiftpage} from './pages/uploadgift';
import {Homepage} from './pages/home';

import { BrowserRouter as Router, Route, Switch} from "react-router-dom";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/account">
          <Accountpage />
        </Route>
        <Route path="/registerlogin">
          <Registerpage />
        </Route>
        <Route path="/thankyou">
          <Thankyoupage />
        </Route>
        <Route path="/uploadgift">
          <Uploadgiftpage/>
        </Route>
        <Route path="/">
          <Homepage />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;

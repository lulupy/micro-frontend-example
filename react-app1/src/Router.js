import React from 'react';
import {
  HashRouter as Router,
  Switch,
  Route,
  NavLink,
} from "react-router-dom";
import loadable from '@loadable/component';
import { Spin } from 'antd';

const Home = loadable(() => import('./pages/Home'), {
  fallback: <Spin />,
});
const About = loadable(() => import('./pages/About'), {
  fallback: <Spin />,
});

const RouterComponent = () => (
  // <Router basename="/react-app1">
  <Router>
    <Route
      render={({ location }) => (
        <div>
          <ul>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/about">About</NavLink>
          </ul>
          <Switch location={location}>
            <Route exact path="/" component={Home} />
            <Route exact path="/about" component={About} />
          </Switch>
        </div>
      )}
    />
  </Router>
);

export default RouterComponent;
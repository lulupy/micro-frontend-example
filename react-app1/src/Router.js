import React from 'react';
import {
  HashRouter as Router,
  Switch,
  Route,
  NavLink,
} from "react-router-dom";
import loadable from '@loadable/component';
import { Spin, Menu } from 'antd';
import "antd/es/spin/style/css";
import "antd/es/menu/style/css";


const Page1 = loadable(() => import('./pages/Page1'), {
  fallback: <Spin />,
});

const Page2 = loadable(() => import('./pages/Page2'), {
  fallback: <Spin />,
});

const RouterComponent = () => (
  // <Router basename="/react-app1">
  <Router>
    <Route
      render={({ location }) => (
        <div>
          <Menu mode="horizontal">
            <Menu.Item>
              <NavLink to="/">页面1</NavLink>
            </Menu.Item>
            <Menu.Item>
            <NavLink to="/Page2">页面2</NavLink>
            </Menu.Item>
          </Menu>
          <Switch location={location}>
            <Route exact path="/" component={Page1} />
            <Route exact path="/page2" component={Page2} />
          </Switch>
        </div>
      )}
    />
  </Router>
);

export default RouterComponent;
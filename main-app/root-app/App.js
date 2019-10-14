import React from 'react';
import { Menu } from 'antd';
import { navigateToUrl } from 'single-spa'; 
// import 'antd/dist/antd.css';
import './App.css';

const App = () => {
  return (
    <div className="app">
      <header>
        <Menu mode="horizontal">
          <Menu.Item>
            <a onClick={navigateToUrl} href="/">首页</a>
          </Menu.Item>
          <Menu.Item>
            <a onClick={navigateToUrl} href="/react-app1">react-app1</a>  
          </Menu.Item>
          <Menu.Item>
            <a onClick={navigateToUrl} href="/vue-app1">vue-app1</a> 
          </Menu.Item>
        </Menu>
      </header>
      <div className="main-wapper">
        <main id="main"></main>
      </div>
      <footer>footer</footer>
    </div>
  );
};

export default App;
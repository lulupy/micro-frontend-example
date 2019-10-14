import React from 'react';
import ReactDOM from 'react-dom';
import singleSpaReact from 'single-spa-react';
import App from './App';

function domElementGetter(spa) {
  console.log(spa);
  return document.getElementById("root");
}

const reactLifecycles = singleSpaReact({
  React,
  ReactDOM,
  rootComponent: (spa) => {
    console.log(spa);
    return <App />;
  },
  domElementGetter,
})

export const bootstrap = [
  reactLifecycles.bootstrap,
];

export const mount = [
  reactLifecycles.mount,
];

export const unmount = [
  reactLifecycles.unmount,
];
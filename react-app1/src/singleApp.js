import React from 'react';
import ReactDOM from 'react-dom';
import singleSpaReact from 'single-spa-react';

function domElementGetter() {
  return document.getElementById('main');
}

const App = React.lazy(() => import('./App'));

const reactLifecycles = singleSpaReact({
  React,
  ReactDOM,
  rootComponent: () => {
    return (
      <React.Suspense fallback={<div>Loading...</div>}>
        <App />
      </React.Suspense>
    );
  },
  // domElementGetter,
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

console.log('我是...');
import { registerApplication, start } from 'single-spa';

registerApplication(
  'rootApp',
  () => import('./singleApp'),
  () => true,
  {
    domElement: '#app',
  },
);

registerApplication(
  'reactApp1',
  () => import('@apps/react-app1'),
  // eslint-disable-next-line no-restricted-globals
  () => location.pathname.startsWith('/react-app1'),
  {
    domElementGetter: () => document.querySelector('#child-apps > div'),
  },
);

registerApplication(
  'vueApp1',
  () => import('@apps/vue-app1'),
  // eslint-disable-next-line no-restricted-globals
  () => location.pathname.startsWith('/vue-app1'),
  {
    domElement: '#child-apps > div',
  },
);

registerApplication(
  'vueApp2',
  () => import('@apps/vue-app2'),
  // eslint-disable-next-line no-restricted-globals
  () => location.pathname.startsWith('/vue-app2'),
  {
    domElement: '#child-apps > div',
  },
);

start();

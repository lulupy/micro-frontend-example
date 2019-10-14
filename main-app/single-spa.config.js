import {registerApplication, start} from 'single-spa';

registerApplication(
  'rootApp', 
  () => import('./root-app/singleApp'),
  () => true,
  {
    mountDomElement: 'main',
  },
);

registerApplication(
  'reactApp1',
  () => import('@apps/react-app1'),
  () => location.pathname.startsWith('/react-app1'),
  {
    domElementGetter: () => {
      return document.getElementById('main');
    },
  },
);

registerApplication(
  'vueApp1',
  () => import('@apps/vue-app1'),
  () => location.pathname.startsWith('/vue-app1')
);

start();

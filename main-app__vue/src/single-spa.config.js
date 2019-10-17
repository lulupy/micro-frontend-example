import * as singleSpa from 'single-spa';
import store from './store';

singleSpa.registerApplication(
  'rootApp',
  () => import('./singleApp'),
  () => true,
  {
    domElement: '#app',
  },
);

singleSpa.registerApplication(
  'reactApp1',
  () => import('@apps/react-app1'),
  // eslint-disable-next-line no-restricted-globals
  () => location.pathname.startsWith('/react-app1'),
  {
    domElementGetter: () => document.querySelector('#child-apps > div'),
  },
);

singleSpa.registerApplication(
  'vueApp1',
  () => import('@apps/vue-app1'),
  // eslint-disable-next-line no-restricted-globals
  () => location.pathname.startsWith('/vue-app1'),
  {
    domElement: '#child-apps > div',
  },
);

singleSpa.registerApplication(
  'vueApp2',
  () => import('@apps/vue-app2')
    .then(m => m.default)
    .then((appCreater) => {
      const vueApp2Config = {
        apiUrl: '自定义apiUrl',
      };
      const props = {
        config: vueApp2Config,
        userInfo: store.state.user,
      };
      // 在子应用启动时传递信息给子应用
      // 可以一些静态的配置比如config
      // 也可以是主应用需要和子应用共享的数据, 之后如果该数据有变化, 可以通过事件通知到子应用进行同步
      return appCreater(props);
    }),
  // eslint-disable-next-line no-restricted-globals
  () => location.pathname.startsWith('/vue-app2'),
  {
    domElement: '#child-apps > div',
  },
);
window.singleSpa = singleSpa;

singleSpa.start();

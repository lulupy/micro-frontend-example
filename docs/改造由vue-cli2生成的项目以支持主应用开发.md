### 1. webpack配置修改

对于`主应用`, webpack配置上面的修改就很少了, 只需要将node_modules/@apps拷贝到'dist/apps', 使用`子应用`中的静态资源能够被正常访问, 对应与`子应用`的`publicPath`选项.

```js
const CopyPlugin = require('copy-webpack-plugin');
const path = require('path');

module.exports = {
  configureWebpack: {
    plugins: [
      new CopyPlugin([
        { from: path.resolve(__dirname, 'node_modules/@apps'), to: path.resolve(__dirname, 'dist/apps') },
      ]),
    ],
  },
};
```

### 2. 修改代码


#### 注册应用(single-spa)

关于single-spa注册应用请参考[Starting From Scratch](https://single-spa.js.org/docs/starting-from-scratch.html)

新增src/single-spa.config.js文件:

```js
import { registerApplication, start } from 'single-spa';


// rootApp就可以看成是我们的主应用, 虽然它在single-spa中跟其他子应用没有什么不同
registerApplication(
  'rootApp',
  () => import('./singleApp'), // src/singlgeApp.js为rootApp的入口
  () => true, // 一直挂载
  {
    domElement: '#app',
  },
);

registerApplication(
  'reactApp1',
  () => import('@apps/react-app1'),
  () => location.pathname.startsWith('/react-app1'),
  {
    domElementGetter: () => document.querySelector('#child-apps > div'),
  },
);

registerApplication(
  'vueApp1',
  () => import('@apps/vue-app1'),
  () => location.pathname.startsWith('/vue-app1'),
  {
    domElement: '#child-apps > div',
  },
);

registerApplication(
  'vueApp2',
  // 我们安装了@apps/vue-app2, 我们直接引入, 对应的是vue-app2/src/single-spa.js文件
  () => import('@apps/vue-app2'),
  // 当浏览器地址栏中url的pathname以`/vue-app2`开头时, 挂载该子应用
  () => location.pathname.startsWith('/vue-app2'),
  {
    // 挂载点为`#child-apps > div`, 关于`#child-apps > div`结构存在与main-app__vue/src/App.vue代码中
    // 至于为什么要挂载在`#child-apps > div`这样的结构而不是`#child-apps`, 是因为在vue2中挂载元素会被 Vue 生成的 DOM 替换
    // 如果指定为`#child-apps`, 该子应用挂载后, `#child-apps`节点后被替换掉, 下次挂载时就会应为找不到`#child-apps`而报错
    domElement: '#child-apps > div',
  },
);

start();
```

#### rootApp入口

新增src/singleSpa.js文件:

```js
import Vue from 'vue';
import singleSpaVue from 'single-spa-vue';
import App from './App.vue';
import router from './router';

const vueLifecycles = singleSpaVue({
  Vue,
  appOptions: {
    render: h => h(App),
    router,
  },
});

export const { bootstrap } = vueLifecycles;
export const { mount } = vueLifecycles;
export const { unmount } = vueLifecycles;
```

#### 调整App.vue

src/App.vue:

```html
<div>
  <!-- 主应用的路由挂载点 -->
  <router-view />
  <!-- 上文提到的子应用挂载点 -->
  <div id="child-apps">
    <div />
  </div>
</div>
```




## 使用vue-cli3创建应用

### 使用的版本

Vue CLI v3.11.0

### 安装

```shell
yarn global add @vue/cli
```

### 创建项目

```shell
vue create vue-app
```

选择手动选择安装特性:

```shell
? Please pick a preset: 
  default (babel, eslint) 
❯ Manually select features 
```

选择 Babel, Router, Linter / Formatter, Unit Testing:

```shell
? Check the features needed for your project: 
 ◉ Babel
 ◯ TypeScript
 ◯ Progressive Web App (PWA) Support
 ◉ Router
 ◯ Vuex
 ◯ CSS Pre-processors
 ◉ Linter / Formatter
❯◉ Unit Testing
 ◯ E2E Testing
```

Esline选择Airbnb:

```shell
? Pick a linter / formatter config: 
  ESLint with error prevention only 
❯ ESLint + Airbnb config 
  ESLint + Standard config 
  ESLint + Prettier 
```

单元测试框架选择Jest:

```shell
? Pick a unit testing solution: 
  Mocha + Chai 
❯ Jest 
```

可以根据自己的需要重新选择相应配置


## 修改项目


### 1. package.json文件的改动

```shell
{


-  "name": "vue-app2",
-  "version": "0.1.0",
-  "private": true,
+  "name": "@apps/vue-app2", 
+  "version": "0.1.9",
+  "files": ["*"],


   "scripts": {
+    "publish-sciprt": "yarn build && cp package.json dist/ && yarn publish dist",
   },

-  "dependencies": {
-    "core-js": "^2.6.5",
-    "vue": "^2.6.10",
-    "vue-router": "^3.0.3"
-  },
   "devDependencies": {

+    "core-js": "^2.6.5",
+    "single-spa-vue": "^1.5.4",
+    "vue": "^2.6.10",
+    "vue-router": "^3.0.3",
   },

   "eslintConfig": {
-    "rules": {},
+    "rules": {
+      "import/no-extraneous-dependencies": "off"
+    },



+  "publishConfig": {
+    "registry": "http://localhost:4873"
+  },
```

#### 改动说明

```shell
-  "name": "vue-app2",
+  "name": "@apps/vue-app2", 
```

将包名改为`scoped packages`命名的方式, 这里我们统一`apps`为我们的组织名, 只要是子应用都以`@apps/子应用名`这种方式命名.


```shell
-  "version": "0.1.0",
```

```shell
-  "private": true,
+  "version": "0.1.9",
```

每次发布都需要指定一个新的版本号, 该版本号只能比已发布到npm仓库中最新的版本还要高.


需要发布的npm不能是私有的包.


```shell
+  "files": ["*"],
```

发布的时候将dist目录下所有的文件都进行发布. 为什么是dist目录下的所有文件, 请查看publish-sciprt命令

```shell
   "scripts": {
+    "publish-sciprt": "yarn build && cp package.json dist/ && yarn publish dist",
   },
```

添加打包发布命令.

```shell
-  "dependencies": {
-    "core-js": "^2.6.5",
-    "vue": "^2.6.10",
-    "vue-router": "^3.0.3"
-  },
   "devDependencies": {

+    "core-js": "^2.6.5",
+    "single-spa-vue": "^1.5.4",
+    "vue": "^2.6.10",
+    "vue-router": "^3.0.3",
   },
```

需要将dependencies中的依赖移动到devDependencies或peerDependencies, 避免在`主应用`中安装该npm包时安装它的依赖.

```shell
   "eslintConfig": {
-    "rules": {},
+    "rules": {
+      "import/no-extraneous-dependencies": "off"
+    },
```

对应上面的dependencies中没有依赖了, `import/no-extraneous-dependencies`规则必然会导致报错.

```shell
+  "publishConfig": {
+    "registry": "http://localhost:4873"
+  },
```

指定发布的npm仓库地址, 这里为本地的私有仓库.

### 2. 修改webpack配置

vue-cli3 没有暴露webpack的配置文件, 但是可以通过修改vue.config.js来修改webpack的配置.

vue.config.js:

```js
/* eslint-disable no-param-reassign */
module.exports = {
  // 关于[publickPath](https://webpack.docschina.org/configuration/output/#output-publicpath)
  // 这里为什么打包之后要设置为/apps/vue-app2/, 因为我们在主应用中是通过/apps/vue-app2/来决定显示我们的子应用vue-app2的
  // publicPath还可以设置为'.', 但是我还没有测试过
  publicPath: process.env.NODE_ENV === 'production'
    ? '/apps/vue-app2/'
    : '/',
  configureWebpack: (config) => {
    if (process.env.NODE_ENV === 'production') {
      // 生成环境中, 我们的入口文件为./src/singleApp.js
      config.entry = {
        index: './src/sinlgeApp.js',
      };
      config.output.filename = '[name].js';
      // 暴露 library, 关于如何创建 library, 请查看[创建 library](https://www.webpackjs.com/guides/author-libraries/)
      config.output.libraryTarget = 'umd';
      // 这步是可选的, 设置成false, 打包只有的代码不会被压缩和混淆
      // 需要分析打包只有的代码时请设置为false
      config.optimization.minimize = false;
      // 不将runtime和manifest拆分出来
      // 这样我们就只有一个entry chunck
      config.optimization.splitChunks = false;
    }
  },
};
```

### 3. single-spa适配

src/singleSpa.js:

```js
import Vue from 'vue';
import singleSpaVue from 'single-spa-vue';
import router from './router';

// 注意: App.vue必须是懒加载的方式导入
// 不然有的css不会在主应用中生效
// 这是应为mini-css-extract-plugin插件会将直接import的css作为entry chunk
// htmlWebpackPlugin可以识别并加载这些entry chunk
// 我们打包出来的dist/index.js也是一个entry chunk, 我们在使用的时候会通过`import vueApp2 from '@apps/vue-app2'`主动导入它
const App = () => import('./App.vue');

const vueLifecycles = singleSpaVue({
  Vue,
  appOptions: {
    el: '#main',
    render: h => h(App),
    router,
  },
});

export const { bootstrap } = vueLifecycles;
export const { mount } = vueLifecycles;
export const { unmount } = vueLifecycles;
```

src/router.js:

```js
import Vue from 'vue';
import Router from 'vue-router';
- import Home from './views/Home.vue';

Vue.use(Router);

export default new Router({
  // mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      // 和上面一样, Router中的组件也都是通过懒加载的方式导入
      - component: Home,
      + component: () => import(/* webpackChunkName: "Home" */ './views/Home.vue'),
    },
    {
      path: '/about',
      name: 'about',
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue'),
    },
  ],
});
```
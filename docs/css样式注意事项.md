# css样式注意事项

因为现在是多个应用, 并且每个应用独立开发, 所有各个应用的css冲突的可能性会很大.

### 1. 组件库中的处理

我们首先要解决的就是引入的ui组件库导致的样式冲突(比如antd, element-ui), 不同的组件库冲突的可能性不大, 因为都多前缀作为区分,
但是同一个主键库的不同版本可能会导致冲突. 所以对于同一个ui库, 各个应用需要提前约定好版本.

同时我们只在主应用下导入组件库的样式文件, 子应用中我们如下处理:

vue-app2/src/App.vue

```js

// 只在开发环境下引入组件库样式文件
if (process.env.NODE_ENV === 'development') {
  // eslint-disable-next-line
  require('normalize.css');
  // eslint-disable-next-line
  require('element-ui/lib/theme-chalk/index.css');
}
```

### 2. 子应用中的样式处理

如果是通用组件, 建议加上前缀, 并使用BEM命名方式.

如果是一般组件, 比如pages, 使用css module:

```js
<template>
  <div :class="main" />
</template>

<style module>
.main{
  padding: 20px;
  text-align: center;
}
</style>

```
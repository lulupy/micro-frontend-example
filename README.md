# 微前端架构实现示例

## 动机

希望找到一种方式共用代码, 避免重复开发, 并且不限制技术栈(包括vue和react);

如果使用的是同一个技术栈, 组件化应该是更好的方式.

## 使用到的框架或工具

- [single-spa](https://single-spa.js.org/) 一个用于前端微服务化的JavaScript前端解决方案
- [verdaccio](https://github.com/verdaccio/verdaccio) 用于搭建npm仓库

如果对single-spa不熟悉, 请先查看single-spa文档

## 启动项目

### 搭建私有npm仓库

私有npm仓库用于存放子应用npm包, 关于什么是子应用, 后面会讲到

本示例使用docker安装在本地, 正式的项目中, 私有npm仓库应该在服务器上:

```shell
# 拉取verdaccio
docker pull verdaccio/verdaccio

# 启动verdaccio
docker run --name verdaccio -p 4873:4873 -v $(pwd)/storage:/verdaccio/storage -v $(pwd)/conf:/verdaccio/conf verdaccio/verdaccio
```

conf中的文件可以从[docker-local-storage-volume](https://github.com/verdaccio/docker-examples/tree/master/docker-local-storage-volume)中得到.


更多安装方式请访问: [verdaccio](https://github.com/verdaccio/verdaccio) 

#### 安装子应用依赖并发布到私有npm仓库

```shell
# termail 1
cd react-app1
yarn
yarn publish-script 
# 发布地址由项目的package.json文件中的publishConfig.registry字段指定
# 这里我们指定为我们搭建的私有npm仓库的地址
```

```shell
# termail 2
cd vue-app1
yarn
yarn publish-script
```


```shell
# termail 3
cd vue-app1
yarn
yarn publish-script
```

### 主应用安装依赖并启动
 
```shell
cd main-app__vue
# 需要拉取子应用npm包, 所以需要设置registry
yarn --registry=http://127.0.0.1:4873
yarn serve
```


打开浏览器, 访问`http://127.0.0.1:8080`

## 应用说明

- main-app__vue (vue应用, 使用vue-cli3生成)
- react-app1 (app应用, 使用create-react-app生成)
- vue-app1 (vue应用, 使用vue-cli2生成)
- vue-app2 (vue应用, 使用vue-cli3生成)

main-app__vue我们这里称它为`主应用`, react-app1、 vue-app1、vue-app2我们称为`子应用`.

`子应用`可以理解为一个晓得模块, `主应用`负责使用和协调`子应用`.

它们之间就使用关系结构如下:

![20191017102428.png](https://raw.githubusercontent.com/lulupy/image-hosting/master/images/20191017102428.png)


页面中或者说代码的关系如下:


![20191017103332.png](https://raw.githubusercontent.com/lulupy/image-hosting/master/images/20191017103332.png)

 
## 文档

1. [`子应用`发布及集成进`主应用`流程](./docs/子应用发布及集成进主应用流程.md)
2. [改造由vue-cli2生成的项目以支持`子应用`开发](./docs/改造由vue-cli2生成的项目以支持子应用开发.md)
3. [改造由vue-cli2生成的项目以支持`主应用`开发](./docs/改造由vue-cli2生成的项目以支持主应用开发.md)
4. [`主应用`与`子应用`如何通信](./docs/主应用与子应用如何通信.md)
5. [`主应用`传递参数给`子应用`](./docs/主应用传递参数给子应用.md)
6. [css样式注意事项](./docs/css样式注意事项.md)






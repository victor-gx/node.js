# 初识 Express

## Express 简介

### 什么是 Express

官方给出的概念：Express 是基于 Node.js 平台，快速、开放、极简的 Web 开发框架。

通俗的理解：Express 的作用和 Node.js 内置的 `http` 模块类似，是专门用来创建 Web 服务器的。

Express 的本质：就是一个 npm 上的第三方包，提供了快速创建 Web 服务器的便捷方法。

Express 的中文官网： http://www.expressjs.com.cn/

### 进一步理解 Express

思考：不使用 Express 能否创建 Web 服务器？

答案：能，使用 Node.js 提供的原生 `http` 模块即可。

思考：既生瑜何生亮（有了 `http` 内置模块，为什么还有用 Express）？

答案：`http` 内置模块用起来很复杂，开发效率低；Express 是基于内置的 `http` 模块进一步封装出来的，能够极大的提高开发效率。

思考：`http` 内置模块与 Express 是什么关系？

答案：类似于浏览器中 Web API 和 jQuery 的关系。后者是基于前者进一步封装出来的。

### Express 能做什么

对于前端程序员来说，最常见的两种服务器，分别是：

- Web 网站服务器：专门对外提供 Web 网页资源的服务器。
- API 接口服务器：专门对外提供 API 接口的服务器。

使用 Express，我们可以方便、快速的创建 Web 网站的服务器或 API 接口的服务器

##  Express 的基本使用

### 安装

在项目所处的目录中，运行如下的终端命令，即可将 express 安装到项目中使用：

```sh
npm i express@4.17.1
```

### 创建基本的 Web 服务器

```js
// 1. 导入 express
const express = require('express')
// 2. 创建 web 服务器
const app = express()

// 3. 启动 web 服务器
app.listen(1111, () => {
    console.log('express server running at http://127.0.0.1:1111')
})
```

### 监听 GET 请求

通过 `app.get()` 方法，可以监听客户端的 GET 请求，具体的语法格式如下：

```js
app.get('请求URL', (req, res) => { /*处理函数*/ })
```

### 监听 POST 请求

通过 `app.post()` 方法，可以监听客户端的 POST 请求，具体的语法格式如下：

```js
app.post('请求URL', (req, res) => { /*处理函数*/ })
```

### 把内容响应给客户端

通过 `res.send()` 方法，可以把处理好的内容，发送给客户端：

```js
// 4. 监听客户端的 GET 和 POST 请求，并向客户端响应具体的内容
app.get('/user', (req, res) => {
  // 调用 express 提供的 res.send() 方法，向客户端响应一个 JSON 对象
  res.send({ name: 'zs', age: 20, gender: '男' })
})
app.post('/user', (req, res) => {
  // 调用 express 提供的 res.send() 方法，向客户端响应一个 文本字符串
  res.send('请求成功')
})
```

### 获取 URL 中携带的查询参数

通过 `req.query` 对象，可以访问到客户端通过查询字符串的形式，发送到服务器的参数：

```js
app.get('/', (req, res) => {
    // 通过 req.query 可以获取到客户端发送过来的 查询参数
    // 注意：默认情况下，req.query 是一个空对象
    console.log(req.query)
    res.send(req.query)
})
```

### 获取 URL 中的动态参数

通过 `req.params` 对象，可以访问到 URL 中，通过 **:** 匹配到的动态参数：

```js
// 注意：这里的 :id 是一个动态的参数
app.get('/user/:ids/:username', (req, res) => {
    // req.params 是动态匹配到的 URL 参数，默认也是一个空对象
    console.log(req.params)
    res.send(req.params)
})
```


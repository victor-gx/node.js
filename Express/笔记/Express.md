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

## 托管静态资源

### express.static()

express 提供了一个非常好用的函数，叫做 `express.static()`，通过它，我们可以非常方便地创建一个静态资源服务器，例如，通过如下代码就可以将 public 目录下的图片、CSS 文件、JavaScript 文件对外开放访问了：

```js
app.use(express.static('public'))
```

现在，你就可以访问 public 目录中的所有文件了：

http://localhost:3000/images/bg.jpg

http://localhost:3000/css/style.css

http://localhost:3000/js/login.js

注意：Express 在指定的静态目录中查找文件，并对外提供资源的访问路径。

因此，存放静态文件的目录名不会出现在 URL 中

###  托管多个静态资源目录

如果要托管多个静态资源目录，请多次调用 `express.static()` 函数：

```js
app.use(express.static('public'))
app.use(express.static('files'))
```

访问静态资源文件时，`express.static()` 函数会根据目录的添加顺序查找所需的文件。

### 挂载路径前缀

如果希望在托管的静态资源访问路径之前，挂载路径前缀，则可以使用如下的方式：

```js
app.use('/public', express.static('./public'))
```

现在，你就可以通过带有 /public 前缀地址来访问 public 目录中的文件了：

http://localhost:3000/public/images/kitten.jpg

http://localhost:3000/public/css/style.css

http://localhost:3000/public/js/app.js

## nodemon

### 为什么要使用 nodemon

在编写调试 Node.js 项目的时候，如果修改了项目的代码，则需要频繁的手动 close 掉，然后再重新启动，非常繁琐。现在，我们可以使用 nodemon（https://www.npmjs.com/package/nodemon） 这个工具，它能够监听项目文件的变动，当代码被修改后，nodemon 会自动帮我们重启项目，极大方便了开发和调试。

### 安装 nodemon

在终端中，运行如下命令，即可将 nodemon 安装为全局可用的工具：

```sh
npm install -g nodemon
```

### 使用 nodemon

当基于 Node.js 编写了一个网站应用的时候，传统的方式，是运行 node app.js 命令，来启动项目。这样做的坏处是：代码被修改之后，需要手动重启项目。

现在，我们可以将 node 命令替换为 nodemon 命令，使用 nodemon app.js 来启动项目。这样做的好处是：代码被修改之后，会被 nodemon 监听到，从而实现自动重启项目的效果。

```sh
node app.js
# 将上面的终端命令，替换为卜面的终端命令，即可实现自动重启项目的效果
nodemon app.js
```

# Express 路由

## 路由的概念

###  什么是路由

广义上来讲，路由就是映射关系。

### 现实生活中的路由

![image-20230120214238373](https://victor-gx.oss-cn-beijing.aliyuncs.com/img/2023/202301202142445.png)

按键 1 -> 业务查询

按键 2 -> 手机充值

按键 3 -> 业务办理

按键 4 -> 密码服务与停复机

按键 5 -> 家庭宽带

按键 6 -> 话费流量

按键 8 -> 集团业务

按键 0 -> 人工服务

在这里，路由是按键与服务之间的映射关系

###  Express 中的路由

在 Express 中，路由指的是客户端的请求与服务器处理函数之间的映射关系。

Express 中的路由分 3 部分组成，分别是请求的类型、请求的 URL 地址、处理函数，格式如下：

```js
app.METHOD(PATH, HANDLER)
```

### Express 中的路由的例子

```js
// 挂载路由
app.get('/', (req, res) => {
  res.send('hello world.')
})
app.post('/', (req, res) => {
  res.send('Post Request.')
})
```

### 路由的匹配过程

每当一个请求到达服务器之后，需要先经过路由的匹配，只有匹配成功之后，才会调用对应的处理函数。

在匹配时，会按照路由的顺序进行匹配，如果请求类型和请求的 URL 同时匹配成功，则 Express 会将这次请求，转交给对应的 function 函数进行处理。

![image-20230120214416757](https://victor-gx.oss-cn-beijing.aliyuncs.com/img/2023/202301202144806.png)

路由匹配的注意点：

- 按照定义的先后顺序进行匹配
- 请求类型和请求的URL同时匹配成功，才会调用对应的处理函数

## 路由的使用

### 最简单的用法

在 Express 中使用路由最简单的方式，就是把路由挂载到 app 上，示例代码如下：

```js
const express = require('express')
const app = express()

// 挂载路由
app.get('/', (req, res) => {
  res.send('hello world.')
})
app.post('/', (req, res) => {
  res.send('Post Request.')
})

app.listen(1111, () => {
  console.log('http://127.0.0.1:1111')
})
```

### 模块化路由

为了方便对路由进行模块化的管理，Express **不建议**将路由直接挂载到 app 上，而是推荐将路由抽离为单独的模块。

将路由抽离为单独模块的步骤如下：

1. 创建路由模块对应的 `.js` 文件
2. 调用 `express.Router()` 函数创建路由对象
3. 向路由对象上挂载具体的路由
4. 使用 `module.exports`向外共享路由对象
5. 使用 `app.use()` 函数注册路由模块

### 创建路由模块

```js
// 这是路由模块
// 1. 导入 express
const express = require('express')
// 2. 创建路由对象
const router = express.Router()

// 3. 挂载具体的路由
router.get('/user/list', (req, res) => {
  res.send('Get user list.')
})
router.post('/user/add', (req, res) => {
  res.send('Add new user.')
})

// 4. 向外导出路由对象
module.exports = router
```

### 注册路由模块

```js
// 1. 导入路由模块
const router = require('./5.router')
// 2. 注册路由模块
app.use(router)
```

### 为路由模块添加前缀

类似于托管静态资源时，为静态资源统一挂载访问前缀一样，路由模块添加前缀的方式也非常简单：

```js
// 1. 导入路由模块
const router = require('./5.router')
// 2. 注册路由模块
app.use('/api', router)
```

# Express 中间件

## 中间件的概念

### 什么是中间件

中间件（Middleware ），特指业务流程的中间处理环节。

### 现实生活中的例子

在处理污水的时候，一般都要经过三个处理环节，从而保证处理过后的废水，达到排放标准。

![image-20230120214733785](https://victor-gx.oss-cn-beijing.aliyuncs.com/img/2023/202301202147831.png)

处理污水的这三个中间处理环节，就可以叫做中间件。

### Express 中间件的调用流程

当一个请求到达 Express 的服务器之后，可以连续调用多个中间件，从而对这次请求进行预处理。

![image-20230120214838858](https://victor-gx.oss-cn-beijing.aliyuncs.com/img/2023/202301202148908.png)

### Express 中间件的格式

Express 的中间件，本质上就是一个 function 处理函数，Express 中间件的格式如下：

![image-20230120214921681](https://victor-gx.oss-cn-beijing.aliyuncs.com/img/2023/202301202149757.png)

注意：中间件函数的形参列表中，必须包含 next 参数。而路由处理函数中只包含 req 和 res。

### next 函数的作用

next 函数是实现多个中间件连续调用的关键，它表示把流转关系转交给下一个中间件或路由。

![image-20230120215018517](https://victor-gx.oss-cn-beijing.aliyuncs.com/img/2023/202301202150565.png)

## Express 中间件的初体验

### 定义中间件函数

可以通过如下的方式，定义一个最简单的中间件函数：

```js
// 定义一个最简单的中间件函数
const mw = function (req, res, next) {
  console.log('这是最简单的中间件函数')
  // 把流转关系，转交给下一个中间件或路由
  next()
}
```

### 全局生效的中间件

客户端发起的任何请求，到达服务器之后，都会触发的中间件，叫做全局生效的中间件。

通过调用 `app.use`(中间件函数)，即可定义一个全局生效的中间件，示例代码如下：

```js
// 定义一个最简单的中间件函数
const mw = function (req, res, next) {
    console.log('这是最简单的中间件函数')
    // 把流转关系，转交给下一个中间件或路由
    next()
}

// 将 mw 注册为全局生效的中间件
app.use(mw)
```

### 定义全局中间件的简化形式

```js
// 这是定义全局中间件的简化形式
app.use((req, res, next) => {
    console.log('这是最简单的中间件函数')
    next()
})
```

### 中间件的作用

多个中间件之间，共享同一份 req 和 res。基于这样的特性，我们可以在上游的中间件中，统一为 req 或 res 对象添加自定义的属性或方法，供下游的中间件或路由进行使用。

![image-20230120215234670](https://victor-gx.oss-cn-beijing.aliyuncs.com/img/2023/202301202154733.png)

### 定义多个全局中间件

可以使用 `app.use()` 连续定义多个全局中间件。客户端请求到达服务器之后，会按照中间件定义的先后顺序依次进行调用，示例代码如下：

```js
// 定义第一个全局中间件
app.use((req, res, next) => {
    console.log('调用了第1个全局中间件')
    next()
})
// 定义第二个全局中间件
app.use((req, res, next) => {
    console.log('调用了第2个全局中间件')
    next()
})

// 定义一个路由
app.get('/user', (req, res) => {
    res.send('User page.')
})
```

### 局部生效的中间件

不使用 `app.use()` 定义的中间件，叫做局部生效的中间件，示例代码如下：

```js
// 1. 定义中间件函数
const mw1 = (req, res, next) => {
    console.log('调用了局部生效的中间件')
    next()
}

// 2. 创建路由
app.get('/', mw1, (req, res) => {
    res.send('Home page.')
})
app.get('/user', (req, res) => {
    res.send('User page.')
})
```

### 定义多个局部中间件

可以在路由中，通过如下两种等价的方式，使用多个局部中间件：

```js
app.get('/', mw1, mw2, (req, res) => { res.send('Home page.')})
app.get('/', [mw1, mw2], (req, res) => { res.send('Home page.')})
```

### 了解中间件的5个使用注意事项

1. 一定要在路由之前注册中间件
2. 客户端发送过来的请求，可以连续调用多个中间件进行处理
3. 执行完中间件的业务代码之后，不要忘记调用 `next()` 函数
4. 为了防止代码逻辑混乱，调用 `next()` 函数后不要再写额外的代码
5. 连续调用多个中间件时，多个中间件之间，共享 `req` 和 `res` 对象

## 中间件的分类

为了方便大家理解和记忆中间件的使用，Express 官方把常见的中间件用法，分成了 5 大类，分别是：

1. 应用级别的中间件
2. 路由级别的中间件
3. 错误级别的中间件
4. Express 内置的中间件
5. 第三方的中间件

### 应用级别的中间件

通过` app.use()` 或 `app.get()` 或 `app.post()` ，绑定到 app 实例上的中间件，叫做应用级别的中间件，代码示例如下：

```js
app.use((req, res, next) => {
    next()
})

app.get('/', mw1, (req, res) => {
    res.send('Home page.')
})
```

### 路由级别的中间件

绑定到 `express.Router()` 实例上的中间件，叫做路由级别的中间件。它的用法和应用级别中间件没有任何区别。只不过，应用级别中间件是绑定到 app 实例上，路由级别中间件绑定到 router 实例上，代码示例如下：

```js
var app = express()
var router = express.Router()

router.use(function (req, res, next) {
    next()
})

app.use('/', router)
```

### 错误级别的中间件

错误级别中间件的作用：专门用来捕获整个项目中发生的异常错误，从而防止项目异常崩溃的问题。

格式：错误级别中间件的 `function` 处理函数中，必须有 4 个形参，形参顺序从前到后，分别是 `(err, req, res, next)`。

```js
// 1. 定义路由
app.get('/', (req, res) => {
    // 1.1 人为的制造错误
    throw new Error('服务器内部发生了错误！')
    res.send('Home page.')
})

// 2. 定义错误级别的中间件，捕获整个项目的异常错误，从而防止程序的崩溃
app.use((err, req, res, next) => {
    console.log('发生了错误！' + err.message)
    res.send('Error：' + err.message)
})
```

注意：错误级别的中间件，必须注册在所有路由之后！

### Express内置的中间件

自 Express 4.16.0 版本开始，Express 内置了 3 个常用的中间件，极大的提高了 Express 项目的开发效率和体验：

1. `express.static` 快速托管静态资源的内置中间件，例如： HTML 文件、图片、CSS 样式等（无兼容性）
2. `express.json` 解析 JSON 格式的请求体数据（有兼容性，仅在 4.16.0+ 版本中可用）
3. `express.urlencoded` 解析 URL-encoded 格式的请求体数据（有兼容性，仅在 4.16.0+ 版本中可用）

```js
// 通过 express.json() 这个中间件，解析表单中的 JSON 格式的数据
app.use(express.json())
// 通过 express.urlencoded() 这个中间件，来解析 表单中的 url-encoded 格式的数据
app.use(express.urlencoded({ extended: false }))
```

### 第三方的中间件

非 Express 官方内置的，而是由第三方开发出来的中间件，叫做第三方中间件。在项目中，大家可以按需下载并配置第三方中间件，从而提高项目的开发效率。

例如：在 express@4.16.0 之前的版本中，经常使用 body-parser 这个第三方中间件，来解析请求体数据。使用步

骤如下：

1. 运行 `npm install body-parser` 安装中间件
2. 使用 `require` 导入中间件
3. 调用 `app.use()` 注册并使用中间件

注意：Express 内置的 `express.urlencoded` 中间件，就是基于 body-parser 这个第三方中间件进一步封装出来的。

# 初识 Node.js

## 回顾与思考

### 浏览器中的 JavaScript 的组成部分

![image-20230111222341550](https://victor-gx.oss-cn-beijing.aliyuncs.com/img/2023/202301112223617.png)

### 为什么 JavaScript 可以在浏览器中被执行

![image-20230111222430878](https://victor-gx.oss-cn-beijing.aliyuncs.com/img/2023/202301112224920.png)

不同的浏览器使用不同的 JavaScript 解析引擎：

- Chrome 浏览器 => V8
- Firefox 浏览器 => OdinMonkey（奥丁猴）
- Safri 浏览器 => JSCore
- IE 浏览器 => Chakra（查克拉）

其中，Chrome 浏览器的 V8 解析引擎性能最好！

### 为什么 JavaScript 可以操作 DOM 和 BOM

![image-20230111222540238](https://victor-gx.oss-cn-beijing.aliyuncs.com/img/2023/202301112225278.png)

每个浏览器都**内置了** DOM、BOM 这样的 API 函数，因此，浏览器中的 JavaScript 才可以调用它们。

### 浏览器中的 JavaScript 运行环境

运行环境是指**代码正常运行所需的必要环境**

![image-20230111222630741](https://victor-gx.oss-cn-beijing.aliyuncs.com/img/2023/202301112226779.png)

总结：

1. V8 引擎负责解析和执行 JavaScript 代码。

2. 内置 API 是由运行环境提供的特殊接口，只能在所属的运行环境中被调用。

## Node.js 简介

### 什么是 Node.js

Node.js is a JavaScript runtime built on Chrome's V8 JavaScript engine.

Node.js 是一个基于 Chrome V8 引擎的 JavaScript 运行环境。

Node.js 的官网地址： https://nodejs.org/zh-cn/

### Node.js 中的 JavaScript 运行环境

![image-20230111222850686](https://victor-gx.oss-cn-beijing.aliyuncs.com/img/2023/202301112250933.png)

注意：

1. 浏览器是 JavaScript 的前端运行环境。

2. Node.js 是 JavaScript 的后端运行环境。

3. Node.js 中无法调用 DOM 和 BOM 等浏览器内置 API。

### Node.js 可以做什么

Node.js 作为一个 JavaScript 的运行环境，仅仅提供了基础的功能和 API。然而，基于 Node.js 提供的这些基础能，很多强大

的工具和框架如雨后春笋，层出不穷，所以学会了 Node.js ，可以让前端程序员胜任更多的工作和岗位：

1. 基于 Express 框架（http://www.expressjs.com.cn/），可以快速构建 Web 应用

2. 基于 Electron 框架（https://electronjs.org/），可以构建跨平台的桌面应用

3. 基于 restify 框架（http://restify.com/），可以快速构建 API 接口项目

4. 读写和操作数据库、创建实用的命令行工具辅助前端开发、etc…

总之：Node.js 是大前端时代的“大宝剑”，有了 Node.js 这个超级 buff 的加持，前端程序员的行业竞争力会越来越强！

### Node.js 好学吗

好学！会 JavaScript，就能学会 Node.js！！！

### Node.js 怎么学

浏览器中的 JavaScript 学习路径：

JavaScript 基础语法 + 浏览器内置 API（DOM + BOM） + 第三方库（jQuery、art-template 等）

Node.js 的学习路径：

JavaScript 基础语法 + Node.js 内置 API 模块（fs、path、http等）+ 第三方 API 模块（express、mysql 等）

## Node.js 环境的安装

如果希望通过 Node.js 来运行 Javascript 代码，则必须在计算机上安装 Node.js 环境才行。

安装包可以从 Node.js 的官网首页直接下载，进入到 Node.js 的官网首页（https://nodejs.org/en/），点击绿色的按钮，下载所需的版本后，双击直接安装即可。

![image-20230111223139958](https://victor-gx.oss-cn-beijing.aliyuncs.com/img/2023/202301112249876.png)

### 区分 LTS 版本和 Current 版本的不同

LTS 为长期稳定版，对于追求稳定性的企业级项目来说，推荐安装 LTS 版本的 Node.js。

Current 为新特性尝鲜版，对热衷于尝试新特性的用户来说，推荐安装 Current 版本的 Node.js。但是，Current 版本中可能存在隐藏的 Bug 或安全性漏洞，因此不推荐在企业级项目中使用 Current 版本的 Node.js。

### 查看已安装的 Node.js 的版本号

打开终端，在终端输入命令 `node –v` 后，按下回车键，即可查看已安装的 Node.js 的版本号。

### 在 Node.js 环境中执行 JavaScript 代码

1. 打开终端
2. 输入 node 要执行的js文件的路径

# fs 文件系统模块

## 什么是 fs 文件系统模块

`fs` 模块是 Node.js 官方提供的、用来操作文件的模块。它提供了一系列的方法和属性，用来满足用户对文件的操作需求。

例如：

- `fs.readFile()` 方法，用来读取指定文件中的内容
- `fs.writeFile()` 方法，用来向指定的文件中写入内容

如果要在 JavaScript 代码中，使用 `fs` 模块来操作文件，则需要使用如下的方式先导入它：

```js
const fs = require('fs')
```

## 读取指定文件中的内容

### fs.readFile() 的语法格式

使用 `fs.readFile()` 方法，可以读取指定文件中的内容，语法格式如下：

```js
fs.readFile(path, [options, ]callback)
```

参数解读：

- 参数1：必选参数，字符串，表示文件的路径。
- 参数2：可选参数，表示以什么编码格式来读取文件。
- 参数3：必选参数，文件读取完成后，通过回调函数拿到读取的结果。

### fs.readFile() 的示例代码

以 utf8 的编码格式，读取指定文件的内容，并打印 `err` 和 `dataStr` 的值：

```js
// 1. 导入 fs 模块，来操作文件
const fs = require('fs')

// 2. 调用 fs.readFile() 方法读取文件
//    参数1：读取文件的存放路径
//    参数2：读取文件时候采用的编码格式，一般默认指定 utf8
//    参数3：回调函数，拿到读取失败和成功的结果  err  dataStr
fs.readFile('./files/1.txt', 'utf8', function(err, dataStr) {
  // 2.1 打印失败的结果
  // 如果读取成功，则 err 的值为 null
  // 如果读取失败，则 err 的值为 错误对象，dataStr 的值为 undefined
  console.log(err)
  console.log('-------')
  // 2.2 打印成功的结果
  console.log(dataStr)
})
```

### 判断文件是否读取成功

可以判断 `err` 对象是否为 `null`，从而知晓文件读取的结果

```js
const fs = require('fs')

fs.readFile('./files/1.txt', 'utf8', function(err, dataStr) {
  if (err) {
    return console.log('读取文件失败！' + err.message)
  }
  console.log('读取文件成功！' + dataStr)
})
```

## 向指定的文件中写入内容

### fs.writeFile() 的语法格式

使用 `fs.writeFile()` 方法，可以向指定的文件中写入内容，语法格式如下：

```js
fs.readFile(file, path, [options, ]callback)
```

参数解读：

- 参数1：必选参数，需要指定一个文件路径的字符串，表示文件的存放路径。
- 参数2：必选参数，表示要写入的内容。
- 参数3：可选参数，表示以什么格式写入文件内容，默认值是 utf8。
- 参数4：必选参数，文件写入完成后的回调函数

### fs.writeFile() 的示例代码

向指定的文件路径中，写入文件内容：

```js
// 1. 导入 fs 文件系统模块
const fs = require('fs')

// 2. 调用 fs.writeFile() 方法，写入文件的内容
//    参数1：表示文件的存放路径
//    参数2：表示要写入的内容
//    参数3：回调函数
fs.writeFile('./files/2.txt', 'abcd', function(err) {
    // 2.1 如果文件写入成功，则 err 的值等于 null
    // 2.2 如果文件写入失败，则 err 的值等于一个 错误对象
    console.log(err)
})
```

### 判断文件是否写入成功

可以判断 `err` 对象是否为 `null`，从而知晓文件写入的结果：

```js
// 1. 导入 fs 文件系统模块
const fs = require('fs')

// 2. 调用 fs.writeFile() 方法，写入文件的内容
//    参数1：表示文件的存放路径
//    参数2：表示要写入的内容
//    参数3：回调函数
fs.writeFile('./files/2.txt', 'abcd', function(err) {
    // 2.1 如果文件写入成功，则 err 的值等于 null
    // 2.2 如果文件写入失败，则 err 的值等于一个 错误对象
    //console.log(err)

    if (err) {
        return console.log('文件写入失败' + err.message)
    }
    console.log('文件写入成功')
})
```

## 练习 - 考试成绩整理

使用 `fs` 文件系统模块，将`src`目录下`score.txt`文件中的考试数据，整理到`score-ok.txt`文件中。

整理前，`score-ok.txt`文件中的数据格式如下：

```
小红=99 小白=100 小黄=70 小黑=66 小绿=88
```

整理完成之后，希望得到的`score-ok.txt`文件中的数据格式如下：

```
小红:99
小白:100
小黄:70
小黑:66
小绿:88
```

**核心实现步骤**

1. 导入需要的 `fs` 文件系统模块
2. 使用 `fs.readFile()` 方法，读取素材目录下的 成绩.txt 文件
3. 判断文件是否读取失败
4. 文件读取成功后，处理成绩数据
5. 将处理完成的成绩数据，调用 `fs.writeFile()` 方法，写入到新文件`score-ok.txt`中

## fs 模块 - 路径动态拼接的问题

在使用 `fs` 模块操作文件时，如果提供的操作路径是以` ./ `或` ../` 开头的相对路径时，很容易出现路径动态拼接错误的问题。

原因：代码在运行的时候，会以执行 node 命令时所处的目录，动态拼接出被操作文件的完整路径。

解决方案：在使用 `fs` 模块操作文件时，直接提供完整的路径，不要提供 `./` 或 `../ `开头的相对路径，从而防止路径动态拼接的问题。

```js
const fs = require('fs')

// 出现路径拼接错误的问题，是因为提供了 ./ 或 ../ 开头的相对路径
// 如果要解决这个问题，可以直接提供一个完整的文件存放路径就行
// fs.readFile('./files/1.txt', 'utf8', function(err, dataStr) {
//     if (err) {
//       return console.log('读取文件失败！' + err.message)
//     }
//     console.log('读取文件成功！' + dataStr)
// })

// 移植性非常差、不利于维护
// fs.readFile('H:\\codes\\node.js\\node.js\\初识Node.js与内置模块\\code\\files\\1.txt', 'utf8', function(err, dataStr) {
//     if (err) {
//       return console.log('读取文件失败！' + err.message)
//     }
//     console.log('读取文件成功！' + dataStr)
// })

// __dirname 表示当前文件所处的目录
// console.log(__dirname)
fs.readFile(__dirname + '/files/1.txt', 'utf8', function(err, dataStr) {
    if (err) {
      return console.log('读取文件失败！' + err.message)
    }
    console.log('读取文件成功！' + dataStr)
  })
```

# path 路径模块

## 什么是 path 路径模块

`path` 模块是 Node.js 官方提供的、用来处理路径的模块。它提供了一系列的方法和属性，用来满足用户对路径的处理需求。

例如：

- `path.join() `方法，用来将多个路径片段拼接成一个完整的路径字符串
- `path.basename()` 方法，用来从路径字符串中，将文件名解析出来

如果要在 JavaScript 代码中，使用 `path` 模块来处理路径，则需要使用如下的方式先导入它：

```js
const path = require('path')
```

## 路径拼接

### path.join()的语法格式

使用 `path.join()` 方法，可以把多个路径片段拼接为完整的路径字符串，语法格式如下：

```js
path.join([...paths])
```

参数解读：

- `...paths <string>` 路径片段的序列
- 返回值:` <string>`

### path.join()的代码示例

使用 `path.join()` 方法，可以把多个路径片段拼接为完整的路径字符串：

```js
const path = require('path')
const fs = require('fs')

// 注意：  ../ 会抵消前面的路径
// const pathStr = path.join('/a', '/b/c', '../', './d', 'e')
// console.log(pathStr)  // \a\b\d\e

// fs.readFile(__dirname + '/files/1.txt')
fs.readFile(path.join(__dirname, '/files/1.txt'), 'utf8', function(err, dataStr) {
    if (err) {
        console.log(err.message)
    }
    console.log(dataStr)
})
```

注意：今后凡是涉及到路径拼接的操作，都要使用 `path.join()` 方法进行处理。不要直接使用 `+ `进行字符串的拼接。

## 获取路径中的文件名

### path.basename() 的语法格式

使用 `path.basename()` 方法，可以获取路径中的最后一部分，经常通过这个方法获取路径中的文件名，语法格式如下：

```js
path.basename(path[, ext])
```

参数解读：

- `path <string>` 必选参数，表示一个路径的字符串
- `ext <string>` 可选参数，表示文件扩展名
- 返回: `<string>` 表示路径中的最后一部分

### path.basename() 的代码示例

使用 `path.basename()` 方法，可以从一个文件路径中，获取到文件的名称部分：

```js
const path = require('path')

// 定义文件的存放路径
const fpath = '/a/b/c/index.html'

// const fullName = path.basename(fpath)
// console.log(fullName)

const nameWithoutExt = path.basename(fpath, '.html')
console.log(nameWithoutExt)
```

## 获取路径中的文件扩展名

### path.extname() 的语法格式

使用 `path.extname()` 方法，可以获取路径中的扩展名部分，语法格式如下：

```js
path.extname(path)
```

参数解读：

- `path <string>`必选参数，表示一个路径的字符串
- 返回: `<string>` 返回得到的扩展名字符串

### path.extname() 的代码示例

使用 `path.extname()` 方法，可以获取路径中的扩展名部分

```js
const path = require('path')

// 这是文件的存放路径
const fpath = '/a/b/c/index.html'

const fext = path.extname(fpath)
console.log(fext)
```

## 综合案例 - 时钟案例

### 案例要实现的功能

![image-20230111233826793](https://victor-gx.oss-cn-beijing.aliyuncs.com/img/2023/202301112338955.png)

将素材目录下的` index.html `页面，拆分成三个文件，分别是：

- `index.css`
- `index.js`
- `index.html`

并且将拆分出来的 3 个文件，存放到 `clock` 目录中。

### 案例的实现步骤

1. 创建两个正则表达式，分别用来匹配 `<style> `和 `<script> `标签
2. 使用` fs` 模块，读取需要被处理的 `HTML` 文件
3. 自定义 `resolveCSS` 方法，来写入 `index.css` 样式文件
4. 自定义 `resolveJS` 方法，来写入 `index.js` 脚本文件
5. 自定义 `resolveHTML` 方法，来写入 `index.html` 文件

#### 步骤1 - 导入需要的模块并创建正则表达式

```js
// 1.1 导入 fs 模块
const fs = require('fs')
// 1.2 导入 path 模块
const path = require('path')

// 1.3 定义正则表达式，分别匹配 <style></style> 和 <script></script> 标签
//      其中\s表示空白字符； \S表示非空白字符； * 表示匹配任意次
const regStyle = /<style>[\s\S]*<\/style>/
const regScript = /<script>[\s\S]*<\/script>/
```

#### 步骤2 - 使用 fs 模块读取需要被处理的 html 文件

```js
// 2.1 调用 fs.readFile() 方法读取文件
fs.readFile(path.join(__dirname, 'src/index.html'), 'utf8', (err, dataStr) => {
    if (err) return console.log('读取HTML文件失败！' + err.message)

    // 2.3 读取文件成功后，调用对应的三个方法，分别拆解出 css, js, html 文件
    resolveCSS(dataStr)
    resolveJS(dataStr)
    resolveHTML(dataStr)
})
```

####  步骤3 – 自定义 resolveCSS 方法

```js
// 3.1 定义处理 css 样式的方法
function resolveCSS(htmlStr) {
    // 3.2 使用正则提取需要的内容
    const r1 = regStyle.exec(htmlStr)
    // 3.3 将提取出来的样式字符串，进行字符串的 replace 替换操作
    const newCSS = r1[0].replace('<style>', '').replace('</style>', '')
    // 3.4 调用 fs.writeFile() 方法，将提取的样式，写入到 clock 目录中 index.css 的文件里面
    fs.writeFile(path.join(__dirname, './clock/index.css'), newCSS, (err) => {
        if (err) return console.log('写入css样式失败' + err.message)
        console.log('写入成功')
    })
}
```

#### 步骤4 – 自定义 resolveJS 方法

```js
// 4.1 定义处理 js 脚本的方法
function resolveJS(htmlStr) {
    // 4.2 通过正则，提取对应的 <script></script> 标签内容
    const r2 = regScript.exec(htmlStr)
    // 4.3 将提取出来的内容，做进一步的处理
    const newJS = r2[0].replace('<script>', '').replace('</script>', '')
    // 4.4 将处理的结果，写入到 clock 目录中的 index.js 文件里面
    fs.writeFile(path.join(__dirname, '/clock/index.js'), newJS, (err) => {
        if (err) return console.log('写入css样式失败' + err.message)
        console.log('写入成功')
    })
}
```

#### 步骤5 – 自定义 resolveHTML 方法

```js
// 5.1 定义处理 HTML 结构的方法
function resolveHTML(htmlStr) {
    // 5.2 将字符串调用 replace 方法，把内嵌的 style 和 script 标签，替换为外联的 link 和 script 标签
    const newHTML = htmlStr.replace(regStyle, '<link rel="stylesheet" href="./index.css" />').replace(regScript, '<script src="./index.js"></script>')

    // 5.3 写入 index.html 这个文件
  fs.writeFile(path.join(__dirname, './clock/index.html'), newHTML, (err) => {
    if (err) return console.log('写入 HTML 文件失败！' + err.message)
    console.log('写入 HTML 页面成功！')
  })
}
```

### 案例的两个注意点

- `fs.writeFile()` 方法只能用来创建文件，不能用来创建路径
- 重复调用 `fs.writeFile()` 写入同一个文件，新写入的内容会覆盖之前的旧内容

# http 模块

## 什么是 http 模块

回顾：什么是客户端、什么是服务器？

在网络节点中，负责消费资源的电脑，叫做客户端；负责对外提供网络资源的电脑，叫做服务器。

`http` 模块是 Node.js 官方提供的、用来创建 web 服务器的模块。通过 `http` 模块提供的 `http.createServer()` 方法，就能方便的把一台普通的电脑，变成一台 Web 服务器，从而对外提供 Web 资源服务。

如果要希望使用 `http` 模块创建 Web 服务器，则需要先导入它：

```js
const http = require('http')
```

## 进一步理解 http 模块的作用

服务器和普通电脑的区别在于，服务器上安装了 web 服务器软件，例如：IIS、Apache 等。通过安装这些服务器软件，就能把一台普通的电脑变成一台 web 服务器。

在 Node.js 中，我们不需要使用 IIS、Apache 等这些第三方 web 服务器软件。因为我们可以基于 Node.js 提供的`http` 模块，通过几行简单的代码，就能轻松的手写一个服务器软件，从而对外提供 web 服务。

## 服务器相关的概念

### IP 地址

IP 地址就是互联网上每台计算机的唯一地址，因此 IP 地址具有唯一性。如果把“个人电脑”比作“一台电话”，那么“IP地址”就相当于“电话号码”，只有在知道对方 IP 地址的前提下，才能与对应的电脑之间进行数据通信。

IP 地址的格式：通常用“点分十进制”表示成（`a.b.c.d`）的形式，其中，a,b,c,d 都是 0~255 之间的十进制整数。例如：用点分十进表示的 IP地址（`192.168.1.1`）

注意：

1. 互联网中每台 `Web` 服务器，都有自己的 IP 地址，例如：大家可以在 Windows 的终端中运行 `ping www.baidu.com `命令，即可查看到百度服务器的 IP 地址。
2. 在开发期间，自己的电脑既是一台服务器，也是一个客户端，为了方便测试，可以在自己的浏览器中输入 `127.0.0.1` 这个IP 地址，就能把自己的电脑当做一台服务器进行访问了。

###  域名和域名服务器

尽管 IP 地址能够唯一地标记网络上的计算机，但IP地址是一长串数字，不直观，而且不便于记忆，于是人们又发明了另一套字符型的地址方案，即所谓的域名（Domain Name）地址。

IP地址和域名是一一对应的关系，这份对应关系存放在一种叫做域名服务器(DNS，Domain name server)的电脑中。使用者只需通过好记的域名访问对应的服务器即可，对应的转换工作由域名服务器实现。因此，域名服务器就是提供 IP 地址和域名之间的转换服务的服务器。

注意：

1. 单纯使用 IP 地址，互联网中的电脑也能够正常工作。但是有了域名的加持，能让互联网的世界变得更加方便。
2. 在开发测试期间， `127.0.0.1` 对应的域名是 `localhost`，它们都代表我们自己的这台电脑，在使用效果上没有任何区别。

### 端口号

计算机中的端口号，就好像是现实生活中的门牌号一样。通过门牌号，外卖小哥可以在整栋大楼众多的房间中，准确把外卖送到你的手中。

同样的道理，在一台电脑中，可以运行成百上千个 web 服务。每个 web 服务都对应一个唯一的端口号。客户端发送过来的网络请求，通过端口号，可以被准确地交给对应的 web 服务进行处理。

![image-20230111234650763](https://victor-gx.oss-cn-beijing.aliyuncs.com/img/2023/202301112346811.png)

注意：

- 每个端口号不能同时被多个 web 服务占用。
- 在实际应用中，`URL` 中的 `80 `端口可以被省略。

## 创建最基本的 web 服务器

###  创建 web 服务器的基本步骤

1. 导入 `http` 模块
2. 创建 `web` 服务器实例
3. 为服务器实例绑定 `request` 事件，监听客户端的请求
4. 启动服务器

#### 步骤1 - 导入 http 模块

如希望在自己的电脑上创建一个 web 服务器，从而对外提供 web服务，则需要导入 `http` 模块：

```js
const http = require('http')
```

#### 步骤2 - 创建 web 服务器实例

调用 `http.createServer()` 方法，即可快速创建一个 web 服务器实例：

```js
const server = http.createServer()
```

#### 步骤3 - 为服务器实例绑定 request 事件

为服务器实例绑定 `request` 事件，即可监听客户端发送过来的网络请求：

```js
server.on('request', function (req, res) {
  console.log('Someone visit our web server.')
})
```

#### 步骤4 - 启动服务器

调用服务器实例的 `.listen()` 方法，即可启动当前的 web 服务器实例：

```js
server.listen(1111, () => {  
    console.log('server running at http://127.0.0.1:1111')
})
```

### req 请求对象

只要服务器接收到了客户端的请求，就会调用通过 `server.on()` 为服务器绑定的 `request` 事件处理函数。如果想在事件处理函数中，访问与客户端相关的数据或属性，可以使用如下的方式：

```js
const http = require('http')
const server = http.createServer()
// req 是请求对象，包含了与客户端相关的数据和属性
server.on('request', req => {
  // req.url 是客户端请求的 URL 地址
  const url = req.url
  // req.method 是客户端请求的 method 类型
  const method = req.method
  const str = `Your request url is ${url}, and request method is ${method}`
  console.log(str)
})
server.listen(1111, () => {
  console.log('server running at http://127.0.0.1:1111')
})
```

### res 响应对象

在服务器的 `request` 事件处理函数中，如果想访问与服务器相关的数据或属性，可以使用如下的方式：

```js
const http = require('http')
const server = http.createServer()
// req 是请求对象，包含了与客户端相关的数据和属性
server.on('request', (req, res) => {
  // req.url 是客户端请求的 URL 地址
  const url = req.url
  // req.method 是客户端请求的 method 类型
  const method = req.method
  const str = `Your request url is ${url}, and request method is ${method}`
  console.log(str)
  // 调用 res.end() 方法，向客户端响应一些内容
  res.end(str)
})
server.listen(1111, () => {
  console.log('server running at http://127.0.0.1:1111')
})
```

### 解决中文乱码问题

当调用 `res.end()` 方法，向客户端发送中文内容的时候，会出现乱码问题，此时，需要手动设置内容的编码格式：

```js
const http = require('http')
const server = http.createServer()

server.on('request', (req, res) => {
  // 定义一个字符串，包含中文的内容
  const str = `您请求的 URL 地址是 ${req.url}，请求的 method 类型为 ${req.method}`
  // 调用 res.setHeader() 方法，设置 Content-Type 响应头，解决中文乱码的问题
  res.setHeader('Content-Type', 'text/html; charset=utf-8')
  // res.end() 将内容响应给客户端
  res.end(str)
})

server.listen(1111, () => {
  console.log('server running at http://127.0.0.1:1111')
})
```


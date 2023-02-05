// 导入数据库操作模块
const db = require('../db/index')
// 导入 bcryptjs 这个包
const bcrypt = require('bcryptjs')

// 注册用户的处理函数
exports.regUser = (req, res) => {
  // 接收表单数据
  const userinfo = req.body
  // console.log(userinfo)
  // 判断数据是否合法
  if (!userinfo.username || !userinfo.password) {
    return res.send({ status: 1, message: '用户名或密码不能为空！' })
  }
  // res.send('reguser OK')

  // 定义 SQL 语句，查询用户名是否被占用
  const sql = 'select * from ev_users where username=?'
  db.query(sql, [userinfo.username], function (err, results) {
    // 执行 SQL 语句失败
    if (err) {
      // return res.send({ status: 1, message: err.message })
      return res.cc(err)
    }
    // 用户名被占用
    if (results.length > 0) {
      // return res.send({ status: 1, message: '用户名被占用，请更换其他用户名！' })
      return res.cc('用户名被占用，请更换其他用户名！')
    }
    // 调用 bcrypt.hashSync() 对密码进行加密
    // console.log(userinfo)
    userinfo.password = bcrypt.hashSync(userinfo.password, 10)
    // console.log(userinfo)

    // 定义插入新用户的 SQL 语句
    const sql = 'insert into ev_users set ?'
    // 调用 db.query() 执行 SQL 语句
    db.query(sql, { username: userinfo.username, password: userinfo.password }, (err, results) => {
      // 判断 SQL 语句是否执行成功
      // if (err) return res.send({ status: 1, message: err.message })
      if (err) return res.cc(err)
      // 判断影响行数是否为 1
      // if (results.affectedRows !== 1) return res.send({ status: 1, message: '注册用户失败，请稍后再试！' })
      if (results.affectedRows !== 1) return res.cc('注册用户失败，请稍后再试！')
      // 注册用户成功
      // res.send({ status: 0, message: '注册成功！' })
      res.cc('注册成功！', 0)
    })
  })
}

// 登录的处理函数
exports.login = (req, res) => {
  // 接收表单的数据
  const userinfo = req.body
  // 定义 SQL 语句
  const sql = `select * from ev_users where username=?`
  // 执行 SQL 语句，根据用户名查询用户的信息
  db.query(sql, userinfo.username, (err, results) => {
    // 执行 SQL 语句失败
    if (err) return res.cc(err)
    // 执行 SQL 语句成功，但是获取到的数据条数不等于 1
    if (results.length !== 1) return res.cc('登录失败！')

    // TODO：判断密码是否正确
    const compareResult = bcrypt.compareSync(userinfo.password, results[0].password)
    if (!compareResult) return res.cc('登录失败！')

    // TODO：在服务器端生成 Token 的字符串
    res.send("login OK")
  })
}
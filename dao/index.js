
const mysql = require("mysql");

//配置mysql参数，建立连接
const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "123456",
  database: "firstDatabase"
})
db.connect((err)=>{
  if(err) throw err;
  console.log("mysql 连接成功")
})

const getList = function(){
  return new Promise(resolve =>{
    const sql = "SELECT * FROM myTable";
    db.query(sql,(err,result)=>{
      if(err){
        console.log("get list failed",err);
      }else{
        console.log("get list success",result);
        resolve(result);
      }
    });
  });
}
const insertUser = function(user){
  return new Promise(resolve =>{
    const sql = "INSERT INTO myTable SET ?";
    db.query(sql,user,(err,result)=>{
      if(err){
        console.log("get list failed",err);
      }else{
        console.log("get list success",result);
        resolve(result);
      }
    });
  });
}
const getTitleByName = function(){
  return new Promise(resolve => {
    const sql = "SELECT * FROM myTable WHERE username= ? OR username= ?";
    db.query(sql,['tom','jack'],(err,result)=>{
      if(err){
        console.log("get list failed",err);
      }else{
        console.log("get list success",result);
        resolve(result);
      }
    });
  });
}
module.exports = {
  getList,
  insertUser,
  getTitleByName
}
//收到 创建数据库的请求
// app.get("/createFirstDatabase",(req,res) =>{
//   let sql = "CREATE DATABASE firstDatabase";
//   db.query(sql,(err,result)=>{
//     if(err){
//       console.log("创建失败:",err);
//     }else{
//       console.log("创建成功:",result)
//       res.send("firstDatabase数据库创建成功...")
//     }
//   })
// })
// // 创建表名为myTable，id自增，title字符串长度为255，username字符串长度为255， 主键ID
// app.get("/createmyTable",(req,res)=>{
//   let sql = "CREATE TABLE myTable(id int AUTO_INCREMENT,title VARCHAR(255), username VARCHAR(255), PRIMARY KEY(ID))";
//   db.query(sql,(err,result) =>{
//     if(err){
//       console.log("create myTable failed:",err);
//     }else{
//       console.log("create myTable success:",result);
//       res.send("myTable表创建成功");
//     }
//   })
// })
// //在表myTable中新增插入一条数据
// app.get("/add",(req,res)=>{
//   const sql = "INSERT INTO myTable SET ?";
//   const user = {title:"one",username:"tom"};
//   db.query(sql,user,(err,result)=>{
//     if(err){
//       console.log("insert user failed:",err);
//     }else{
//       console.log("insert user success:",result);
//       res.send("myTable表新增插入一条数据成功");
//     }
//   })
// })
// //查询myTable表中所有数据
// app.get("/getmyTable",(req,res)=>{
//   const sql = "SELECT * FROM myTable";
//   db.query(sql,(err,result)=>{
//     if(err){
//       console.log("get list failed",err);
//     }else{
//       console.log("get list success",result);
//       res.send("查村成功");
//       // 如果要把查村的结果返回到页面，使用res.json(reslut)
//       // res.json(result);
//     }
//   })
// })
// // 查村单条内容
// app.get("/get/:id",(req,res)=>{
//   let sql = `SELECT * FROM myTable WHERE id = ${req.params.id}`;
//   db.query(sql,(err,result)=>{
//     if(err){
//       console.log("get post by id failed:",err);
//     }else{
//       console.log("get post by id  success:",result);
//       res.json(result);
//     }
//   })
// })
// // 根据id获取数据
// app.get("/getbyid",(req,res)=>{
//   // console.log(req)
//   let sql = `SELECT * FROM myTable WHERE id = ${req.query.id}`;
//   db.query(sql,(err,result)=>{
//     if(err){
//       console.log("get user failed:",err);
//     }else{
//       console.log("get user  success:",result);
//       res.json(result);
//     }
//   })
// })

// //更新内容
// app.get("/updatepost/:id",(req,res)=>{
//   let newTitle = "updatedTitle";
//   let sql = `UPDATE myTable SET title = '${newTitle}' WHERE id = ${req.params.id}`;
//   db.query(sql,(err,result)=>{
//     if(err){
//       console.log("update user failed:",err);
//     }else{
//       console.log("update user  success:",result);
//       res.send(`update ${req.params.id} suceess`)
//     }
//   })
// })

// //更新内容
// app.get("/update",(req,res)=>{
//   const myTable = {username: "jack"}
//   const id = req.query.id;
//   const sql = `UPDATE myTable SET ? WHERE id = ?`;
//   db.query(sql,[myTable,id],(err,result)=>{
//     if(err){
//       console.log("update user failed:",err);
//     }else{
//       console.log("update user  success:",result);
//       res.send(`update ${req.query.id} suceess`)
//     }
//   })
// })

// //删除内容
// app.get("/delete/",(req,res)=>{
//   const sql = `DELETE FROM myTable WHERE id = ${req.query.id}`;
//   db.query(sql,(err,result)=>{
//     if(err){
//       console.log("delet usesr failed:",err);
//     }else{
//       console.log("delet user  success:",result);
//       res.send(`delet ${req.params.id} suceess`)
//     }
//   })
// })

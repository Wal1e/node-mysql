
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
//收到 创建数据库的请求
const createDatabase = function(){
  return new Promise(resolve => {
    const sql = "CREATE DATABASE firstDatabase";
    db.query(sql, (err,result) => {
      if(err){
        console.log("创建失败:",err);
      }else{
        console.log("创建成功:",result);
        resolve(result);
      }
    })
  })
}
// 创建表名为myTable，id自增，title字符串长度为255，username字符串长度为255， 主键ID
const createTable = function(){
  return new Promise(resolve => {
    const sql = "CREATE TABLE userInfo(id int AUTO_INCREMENT, hobby VARCHAR(255), age int(10), food VARCHAR(255), city VARCHAR(255), PRIMARY KEY(ID))";
    db.query(sql,(err,result) =>{
      if(err){
        console.log("create myTable failed:",err);
      }else{
        console.log("create myTable success:",result);
        resolve(result);
      }
    })
  })
}
module.exports = {
  createDatabase,
  createTable,
  getList,
  insertUser,
  getTitleByName
}

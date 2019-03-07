const express = require("express");
const mongoose = require("mongoose");

const userRouter = require("./user");
// 命令行mongod开启服务，mongo连接数据库
//连接mongdb数据库
const DB_URL = "mongodb://localhost:27017/imooc";
mongoose.connect(DB_URL);
mongoose.connection.on("connected", () => {
    console.log("数据库连接成功！")
});
//创建表结构
const User = mongoose.model("user", new mongoose.Schema({
    user: {type: String, require: true},
    age: {type: Number, require: true}
}));
const app = new express();
app.all('*', function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    res.header('Access-Control-Allow-Methods', '*');
    res.header('Content-Type', 'application/json;charset=utf-8');
    next();
});
//新增
// User.create({
//    user:"hqy1",
//    age:18
// },(err,doc)=>{
//     console.log(err,doc)
// });
//删除
// User.remove({user:"hqy"},(err,doc)=>{
//     console.log(err,doc)
// });
//更新
// User.update({user:"hqy1"},{"$set":{age:123456}},(err,doc)=>{
//     console.log(err,doc);
// });
// app.get("/app", (req, res) => {
//     //查看
//     User.find({}, (err, doc) => {
//         res.json(doc)
//     })
// });
app.use("/user",userRouter);
app.listen(8090, () => {
    console.log("端口开启成功！")
});
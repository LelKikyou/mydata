const mongoose = require("mongoose");
const serveUrl = require("../package").serveUrl;
// 命令行mongod开启服务，mongo连接数据库
//连接mongdb数据库
mongoose.connect(serveUrl, {useNewUrlParser: true});
mongoose.connection.on("connected", () => {
    console.log("数据库连接成功！")
});
const moudles = {
    user: {
        "user": {type: String, "require": true},
        "pwd": {type: String, "require": true},
        "type": {type: String, "require": true},
        //头像
        "avatar": {type: String, "require": true},
        //简历
        "desc": {type: String, "require": true},
        //职位名
        "title": {type: String, "require": true},
        //如果是boss 还有公司和招聘金额
        "company": {type: String, "require": true},
        "money": {type: String, "require": true},
    },
    chat: {}
};
//创建表结构
for (var m in moudles) {
    mongoose.model(m, new mongoose.Schema(moudles[m], {versionKey: false}))
}
module.exports = {
    getModel: function (name) {
        return mongoose.model(name)
    }
};
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
//     //查看  findOne 查找一个
//     User.find({}, (err, doc) => {
//         res.json(doc)
//     })
// });
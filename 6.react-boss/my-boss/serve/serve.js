const express = require("express");
const expressParser = require("body-parser");
const cookieParser = require("cookie-parser");
const userRouter = require("./user");
const app = new express();
app.all('*', function (req, res, next) {
    res.header("Access-Control-Allow-Origin", req.headers.origin); //需要显示设置来源
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
    res.header("Access-Control-Allow-Credentials", true); //带cookies
    res.header("Content-Type", "application/json;charset=utf-8");
    next();
});
app.use(expressParser.json());
app.use(cookieParser());
app.use("/user", userRouter);
app.listen(8090, () => {
    console.log("端口开启成功！")
});
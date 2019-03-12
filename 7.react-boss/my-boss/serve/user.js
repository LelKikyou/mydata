const express = require("express");
const router = express.Router();
const moudle = require("./moudle");
const userMoudle = moudle["getModel"]("user");
router.get("/info", (req, res) => {
    userMoudle.find({},(e,d)=>{
        return res.json({
            data: d
        })
    })
});
//注册接口
router.post("/register", (req, res) => {
    let {user, pwd, type} = req.body;
    userMoudle.findOne({"user":user},(err,doc)=>{
        if(!!doc){
            return res.json({
                code:1,
                mes:"改用户已存在"
            })
        }else {
            userMoudle.create({user,pwd,type},(err,doc)=>{
                if(err){
                    return res.json({
                        code:1,
                        mes:"服务器异常"
                    })
                }else {
                    return res.json({
                        code:0,
                        mes:"创建成功",
                        data:doc
                    })
                }
            })
        }
    })
});
module.exports = router;

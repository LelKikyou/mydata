const express = require("express");
const router = express.Router();
const moudle = require("./moudle");
const userMoudle = moudle["getModel"]("user");
const filterUser = {
    pwd: 0
};
router.get("/info", (req, res) => {
    let {userId} = req.cookies;
    if (!userId) {
        return res.json({
            code: 1,
            msg: "未登录"
        })
    }
    userMoudle.findOne({_id: userId}, filterUser, (e, d) => {
        if (e) {
            return res.json({
                code: 1,
                msg: "服务器异常"
            })
        } else {
            if (d) {
                return res.json({
                    code: 0,
                    msg: "Success",
                    data: d
                })
            } else {
                return res.json({
                    code: 1,
                    msg: "用户不存在"
                })
            }
        }
    })
});
//注册接口
router.post("/register", (req, res) => {
    let {user, pwd, type} = req.body;
    userMoudle.findOne({user}, filterUser, (err, doc) => {
        if (!!doc) {
            return res.json({
                code: 1,
                msg: "改用户已存在"
            })
        } else {
            userMoudle.create({user, pwd, type}, (err, doc) => {
                if (err) {
                    return res.json({
                        code: 1,
                        msg: "服务器异常"
                    })
                } else {
                    let {user, type, _id} = doc;
                    res.cookie('userId', _id);
                    return res.json({
                        code: 0,
                        msg: "创建成功",
                        data: {user, type, _id}
                    })
                }
            })
        }
    })
});
//登录接口
router.post("/login", (req, res) => {
    let userData = req.body;
    userMoudle.findOne(userData, filterUser, (err, doc) => {
        if (err) {
            return res.json({
                code: 1,
                msg: "服务器异常"
            })
        }
        if (!!doc) {
            let {_id} = doc;
            res.cookie('userId', _id);
            return res.json({
                code: 0,
                msg: "登录成功",
                data: doc
            })
        }
        return res.json({
            code: 1,
            msg: "账号或密码错误！"
        })
    })
});
//更新信息
router.post("/updata", (req, res) => {
    let {userId} = req.cookies;
    if (!userId) {
        return res.json.dumps()
    }
    userMoudle.findByIdAndUpdate({_id: userId}, req.body, (err, doc) => {
        if (err) {
            return res.json({
                code: 1,
                msg: "服务器异常"
            })
        } else {
            return res.json({
                code: 0,
                msg: "更新成功",
                data: Object.assign({
                    type: doc.type,
                    user: doc.user
                }, req.body)
            })
        }
    });
})
module.exports = router;

const express = require("express");
const router = express.Router();
router.get("/info", (req, res) => {
    return res.json({
        code: 1
    })
});
router.post("/register", (req, res) => {
    return res.json({
        status:200,
        data:{
            code:1
        }
    })
});
module.exports = router;

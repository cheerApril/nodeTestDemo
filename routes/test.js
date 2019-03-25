const express = require(`express`);
const router = express.Router();

router.get(`/`, function (req, res, next) {
    if(!req.session.isLogin){
        req.session.isLogin = true;
    }
    res.success(`测试增加session 成功`);
});


module.exports = router;

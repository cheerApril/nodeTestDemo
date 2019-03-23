const modelAdminUser = require(`../model/adminUser.js`);

module.exports = {
    login: function (req, res, next) {
        const {account, password, name} = req.body;
        console.log(`account: ${account}`);

    },
    
    test: function (req, res, next) {
        const body = req.body;

        res.success(body.name);
    }
};

const modelUser = require('../model/user.js');

module.exports = {
    list: function (req, res, next) {
        const query = req.query;
        modelUser.find().then((user) =>{
            res.success(user);
        }).catch((err) =>{
            next(err);
        });
    },
    
    create: function (req, res, next) {
        
    },
    
    update: function (req, res, next) {
        
    },
    
    delete: function (req, res, next) {
        
    }
};
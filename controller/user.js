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
        let createData = {};
        for(let [index, value] of  createData){
            switch (index) {
                case "name":
                    createData[index] = value;
                    break;
                case "age":
                    createData[index] = value;
                    break;
                default:
                    break;
            }
        }
        modelUser.create(createData).then((result) =>{
            res.success(result);
        }).catch((err) =>{
            next(err);
        })
    },
    
    update: function (req, res, next) {
        const id = req.params.id;
        let updateData = {};
        for(let [index, value] of  req.body){
            switch (index) {
                case "name":
                    updateData[index] = value;
                    break;
                case "age":
                    updateData[index] = value;
                    break;
                default:
                    break;
            }
        }
        modelUser.update(updateData,
            {
                where: {
                    id: id
                }
            }
        ).then((result) =>{
            res.success(result);
        }).catch((err) =>{
            next(err);
        })
    },
    
    delete: function (req, res, next) {

    }
};
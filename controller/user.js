const modelUser = require('../model/user.js');

module.exports = {
    list: function (req, res, next) {
        const {page = 1, pageSize = 5} = req.query;
        const offset = (page - 1) * pageSize;
        modelUser.findAndCountAll({
            offset: offset,
            limit: parseInt(pageSize)
        }).then(function (user) {
            res.success(user);
        }).catch(function (e) {
            next(e);
        });
    },
    
    create: function (req, res, next) {
        const body = req.body;
        let createData = {};

        for(let [index, value] of  Object.entries(body)){
            switch (index) {
                case "account":
                    createData[index] = value;
                    break;
                case "password":
                    createData[index] = value;
                    break;
                case "name":
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
        const id = req.query.id;
        const body = req.body;
        let updateData = {};
        for(let [index, value] of Object.entries(body)){
            switch (index) {
                case "account":
                    updateData[index] = value;
                    break;
                case "password":
                    updateData[index] = value;
                    break;
                case "name":
                    updateData[index] = value;
                    break;
                default:
                    break;
            }
        }

        modelUser.update(updateData,{ where: {id:id}}).then((result) =>{
            res.success(result);
        }).catch((err) =>{
            next(err);
        })
    },
    
    delete: function (req, res, next) {
        const id = req.query.id;

        modelUser.destroy({
            where:{
                id: id
            }
        }).then(function (result) {
            res.success(result);
        }).catch(function (err) {
            next(err);
        });
    }
};
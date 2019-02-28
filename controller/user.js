const modelUser = require('../model/user.js');
module.exports = {

    list: function (req, res, next) {
        const query = req.query;
        const queryData = {};
        for(let [index, value] of Object.entries(query)){
            switch (index){
                case "name":
                    queryData[index] = value;
                    break;
                case "age":
                    queryData[index] = value;
                    break;
                case "address":
                    queryData[index] = value;
                    break;
                default:
                    break;
            }
        }
        modelUser.find(queryData, function (err, result) {
            if(err) throw err;
            res.status(200).send(result);
        });
    },

    create: function (req, res, next) {
        const body = req.body;
        const createData = {};
        for(let [index, value] of Object.entries(body)){
            switch (index){
                case "name":
                    createData[index] = value;
                    break;
                case "age":
                    createData[index] = value;
                    break;
                case "address":
                    createData[index] = value;
                    break;
                default:
                    break;
            }
        }
        modelUser.create(createData, function (err) {
            if(err) throw err;
            res.status(200).send();
        });
    },

    update: function (req, res, next) {
        const id = req.query.id;
        if(!id) throw "id 不能为空";
        const body = req.body;
        console.log(body);
        const updateData = {};
        for(let [index, value] of Object.entries(body)){
            switch (index){
                case "name":
                    updateData[index] = value;
                    break;
                case "age":
                    updateData[index] = value;
                    break;
                case "address":
                    updateData[index] = value;
                    break;
                default:
                    break;
            }
        }
        modelUser.findOne({_id:id}, function (err, result) {
            if(err || result === null) {
                throw "user 不存在";
            }else{
                modelUser.updateOne({updateData}, function (err, result) {
                    if(err) throw err;
                    res.status(200).send();
                })
            }

        });
    },

    delete: function (req, res, next) {
        modelUser.findOne({}, function (err, result) {
            if(err) throw err;
            if(result) res.status(200).send(result);
            res.status(200).send("暂无数据");
        });
    }
};
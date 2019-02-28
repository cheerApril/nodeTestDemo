const mongoose = require("mongoose");
const db = mongoose.createConnection
("mongodb://localhost:27017/koa_novel", {
    useNewUrlParser : true
});
const schema = mongoose.Schema;

const ObjectId = schema.Types.ObjectId;

const userSchema = new schema({
    name: String,       // 用户名字
    age: Number,        // 用户年龄
    address: String,    // 用户地址
}, {
    versionKey: false,
    timestamps: {
        createdAt: 'createTime',
        updatedAt: 'updateTime'
    }
});


const modelUser = db.model('user', userSchema);

module.exports = modelUser;

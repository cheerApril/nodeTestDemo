const db = require('../db/database.js');
const sequelize = db.sequelize;
const Sequelize = db.Sequelize;
const constants = require('../utils/constants.js');

module.exports = sequelize.define(
    constants.MODEL_NAME.USER,
    {
        id: {
            type: Sequelize.INTEGER(11),
            primaryKey: true,
            autoIncrement: true,
            comment: 'ID'
        },
        account: {
            type: Sequelize.STRING(11),
            allowNull: false,
            comment: '名字'
        },
        password: {
            type: Sequelize.INTEGER(50),
            allowNull: false,
            comment: '年龄'
        },
        name: {
            type: Sequelize.STRING(6),
            allowNull: false,
            comment: "名字"
        },
        created_time: {
            type: Sequelize.DATE,
            allowNull: false,
            defaultValue: sequelize.literal('CURRENT_TIMESTAMP')
        },
        updated_time: {
            type: Sequelize.DATE,
            allowNull: false,
            defaultValue: sequelize.literal(`CURRENT_TIMESTAMP`)
        }

    },
    {
        underscored: true, //  将自动设置所有属性的字段选项为下划线命名方式.不会覆盖已经定义的字段选项
        freezeTableName: true,
        timestamps: false //
    }
);

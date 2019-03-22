const {Sequelize, sequelize} = require(`../db/database.js`);
const constant = require(`../utils/constants.js`);

module.exports = sequelize.define(
    constant.MODEL_NAME.ADMIN_USER,
    {
        id: {
            type: Sequelize.INTEGER(11),
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        account: {
            type: Sequelize.STRING(50),
            allowNull: false,
            comment: `登录账号`
        },
        password: {
            type: Sequelize.STRING(50),
            allowNull: false
        },
        name: {
            type: Sequelize.STRING(50),
            allowNull: false,
            comment: `管理员名字`
        },
        created_tim2222e: {
            type: Sequelize.DATE,
            allowNull: false,
            defaultValue: sequelize.literal(`CURRENT_TIMESTAMP`)
        },
        updated_time: {
            type: Sequelize.DATE,
            allowNull: false,
            defaultValue: sequelize.literal(`CURRENT_TIMESTAMP`)
        }
    },
    {
        freezeTableName: true,
        underscore: true,
        timestamps: false
    }
);

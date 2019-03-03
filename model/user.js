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
        name: {
            type: Sequelize.STRING,
            allowNull: true,
            comment: '名字'
        },
        age: {
            type: Sequelize.INTEGER(11),
            allowNull: false,
            comment: '年龄'
        }
    },
    {
        underscored: true,
        freezeTableName: true
    }
);
const Sequelize = require('sequelize');
const dbconfig = require('../config/dbconfig.json');
const delelopmentConfid  = dbconfig.delelopment;
const sequelize = new Sequelize(delelopmentConfid.database, delelopmentConfid.name ,
    delelopmentConfid.password, {
    host: delelopmentConfid.host,
    dialect:delelopmentConfid.dialect,
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    },
});

// sequelize 连接判断
sequelize.authenticate(
    ).then(() => {
        console.log('Connection has been established successfully.');
    }).catch(err => {
        console.error('Unable to connect to the database:', err);
    });

module.exports = {
    sequelize,
    Sequelize
};
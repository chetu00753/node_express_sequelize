const Sequelize = require('sequelize');
const config = require('../config/db.config.js');

const sequelize = new Sequelize(config.DB, config.USER, config.PASSWORD, {
    host: config.HOST,
    dialect: config.dialect,
    port: config.port,
    pool: {
        max: config.pool.max,
        min: config.pool.min,
        acquire: config.pool.acquire,
        idle: config.pool.idle,
    },
});
const db={};
db.sequelize=sequelize;

db.user=require('../models/user.model')(sequelize,Sequelize);

//db.tweet=require('../models/tweets.model')(sequelize,Sequelize);

// db.tweet.belongsTo(db.user,{
//     foreignKey:{
//         name:'user_id',
//         allowNull:false,
//         onDelete:'CASCADE'
//     }
// })
// db.user.hasMany(db.tweet,{
//     foreignKey:{
//         name:'tweet_id',
//         allowNull:false,
//     }
// })

module.exports = db
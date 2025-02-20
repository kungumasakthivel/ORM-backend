const sequelize = require('../config/db.config');
const User = require('./user.model');

const db = {};
db.sequelize = sequelize;
db.User = User;

const initializeDB = async () => {
    try {
        await sequelize.sync({ alter: true });
        console.log('Database synced successfully.');
    } catch (error) {
        console.error('Database sync error:', error);
    }
};

module.exports = { db, initializeDB };

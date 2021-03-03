const seedUsers = require('./user-seeds');
const seedGoals = require('./goal-seeds');
const seedProgress = require('./progress-seeds');

const sequelize = require('../config/connection');

const seedAll = async () => {
    await sequelize.sync({ force: true });

    await seedUsers();

    await seedGoals();

    await seedProgress();

    process.exit(0);
};

seedAll();
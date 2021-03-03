const sequelize = require('../config/connection');
const { User, Goals, Progress } = require('../models');

const userData = [
    {
        username: 'doctor',
        password: 'tardisBlue123'
    },
    {
        username: 'amypond',
        password: 'raggedyman123'
    },
    {
        username: 'rorywilliams',
        password: 'centurion2000'
    },
    {
        username: 'riversong',
        password: 'hellosweetiespoilers345'
    },
    {
        username: 'daleks',
        password: 'exterminate!'
    },
    {
        username: 'cybermen',
        password: 'youwillbeupgraded1234'
    }
];

const seedUsers = () => User.bulkCreate(userData, { individualHooks: true });

module.exports = seedUsers;
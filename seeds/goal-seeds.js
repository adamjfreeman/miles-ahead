const { post } = require('../controllers');
const { Goals } = require('../models');

const goalData = [
    {
        run: 18,
        walk: 5,
        bike: 50,
        user_id: 1
    },
    {
        run: 5,
        walk: 2,
        bike: 10,
        user_id: 2
    },
    {
        run: 10,
        walk: 10,
        bike: 25,
        user_id: 3
    },
    {
        run: 0,
        walk: 15,
        bike: 0,
        user_id: 4
    },
    {
        run: 0,
        walk: 0,
        bike: 100,
        user_id: 5
    },
    {
        run: 1,
        walk: 20,
        bike: 0,
        user_id: 6
    }
];

const seedGoals = () => Goals.bulkCreate(goalData);

module.exports = seedGoals;
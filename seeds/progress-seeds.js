const { Progress } = require('../models');

const progressData = [
    {
        runProgress: 6,
        walkProgress: 0,
        bikeProgress: 15,
        user_id: 1
    },
    {
        runProgress: 2,
        walkProgress: 1,
        bikeProgress: 0,
        user_id: 2
    },
    {
        runProgress: 7,
        walkProgress: 9,
        bikeProgress: 12,
        user_id: 3
    },
    {
        runProgress: 0,
        walkProgress: 3,
        bikeProgress: 0,
        user_id: 4
    },
    {
        runProgress: 0,
        walkProgress: 0,
        bikeProgress: 20,
        user_id: 5
    },
    {
        runProgress: 0,
        walkProgress: 12,
        bikeProgress: 0,
        user_id: 6
    }
];

const seedProgress = () => Progress.bulkCreate(progressData);

module.exports = seedProgress;
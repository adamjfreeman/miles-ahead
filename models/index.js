const User = require("./User");
const Goals = require("./Goals");
const Progress = require('./Progress');

User.hasMany(Goals, {
    foreignKey: 'user_id'
});

Goals.belongsTo(User, {
    foreignKey: 'user_id',
    onDelete: 'SET NULL'
});

User.hasMany(Progress, {
    foreignKey: 'user_id'
});

Progress.belongsTo(User, {
    foreignKey: 'user_id',
    onDelete: 'SET NULL'
});

module.exports = { User, Goals, Progress };
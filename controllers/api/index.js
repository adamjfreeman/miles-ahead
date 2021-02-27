const router = require('express').Router();

const userRoutes = require('./user-routes.js');
const goalRoutes = require('./goal-routes.js');

router.use('/users', userRoutes);
router.use('/goals', goalRoutes);

module.exports = router;

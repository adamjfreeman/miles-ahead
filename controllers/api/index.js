const router = require('express').Router();

const userRoutes = require('./user-routes.js');
const goalRoutes = require('./goal-routes.js');
const progressRoutes = require('./progress-routes.js');

router.use('/users', userRoutes);
router.use('/goals', goalRoutes);
router.use('/progress', progressRoutes);

module.exports = router;

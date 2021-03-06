const router = require('express').Router();
const sequelize = require('../config/connection');
const { User, Goals, Progress } = require('../models');
const withAuth = require('../utils/auth');

router.get('/', (req, res) => {
    res.render('homepage');
});


router.get('/goals', withAuth, (req, res) => {
    res.render('goals', { loggedIn: true});
});

router.get('/goals/:id', withAuth, (req, res) => {
    Goals.findByPk(req.params.id, {
        atrributes: ['id', 'run', 'walk', 'bike', 'user_id'],
        include: [
            {
                model: User,
                attributes: ['username']
            }
        ]
    })
        .then(dbGoalsData => {
            if (dbGoalsData) {
                const goals = dbGoalsData.get({ plain: true });

                res.render('activity', {
                    goals,
                    loggedIn: true
                });
            } else {
                res.status(404).end();
            }
        })
        .catch(err => {
            res.status(500).json(err);
        });
});

router.get('/activity', withAuth, (req, res) => {
    Goals.findOne(req.params.id, {
        atrributes: ['id', 'run', 'walk', 'bike', 'user_id'],
        include: [
            {
                model: User,
                attributes: ['username']
            }
        ]
    })
        .then(dbGoalsData => {
            console.log(dbGoalsData);
            const goals = dbGoalsData.get({ plain: true });
            Progress.findOne(req.params.id, {
                atrributes: ['id', 'runProgress', 'walkProgress', 'bikeProgress', 'user_id'],
                include: [
                    {
                        model: User,
                        attributes: ['username']
                    }
                ]
            })
                .then(dbProgressData => {
                    console.log(dbProgressData);
                    const progress = dbProgressData.get({ plain: true });
                    res.render('activity', { progress, goals, loggedIn: true });
                })
                .catch(err => {
                    console.log(err);
                    res.status(500).json(err);
                });
            
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

router.get('/milesentry', (req, res) => {

    res.render('milesentry', { loggedIn: true });
});

router.get('/newuser', (req, res) => {
    res.render('newuser');
});


module.exports = router;
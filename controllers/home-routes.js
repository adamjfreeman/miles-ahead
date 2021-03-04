const router = require('express').Router();
const sequelize = require('../config/connection');
const { User, Goals, Progress } = require('../models');
const withAuth = require('../utils/auth');

router.get('/', (req, res) => {
    res.render('homepage');
});

router.get('/login', (req, res) => {
    if (req.session.loggedIn) {
        res.redirect('/');
        return;
    }

    res.render('/');
});

router.get('/goals', withAuth, (req, res) => {
    res.render('goals');
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
            const goals = dbGoalsData.get({ plain: true });
            res.render('activity', {goals, loggedIn: true});
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });


});

router.get('/milesentry', (req, res) => {

    res.render('milesentry');
});

router.get('/newuser', (req, res) => {
    res.render('newuser');
});


module.exports = router;
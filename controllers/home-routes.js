const router = require('express').Router();
const sequelize = require('../config/connection');
const { User, Goals, Progress } = require('../models');
const withAuth = require('../utils/auth');

router.get('/', withAuth, (req, res) => {
    
    if (req.session.loggedIn) {
        Goals.findOne({
            where: {
                user_id: req.session.user_id
            },
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
                Progress.findOne({
                    where: {
                        user_id: req.session.user_id
                    },
                    atrributes: ['id', 'runProgress', 'walkProgress', 'bikeProgress', 'user_id'],
                    include: [
                        {
                            model: User,
                            attributes: ['username']
                        }
                    ]
                })
                    .then(dbProgressData => {
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
    }
    else {
        res.render('login');
    }
    
});

router.get('/login', (req, res) => {
    if (req.session.loggedIn) {
        res.redirect('/');
        return;
    }

    res.render('login');
});


router.get('/goals', withAuth, (req, res) => {
    userid = req.session.user_id;
    res.render('goals', { loggedIn: true, userid: userid});
});


router.get('/milesentry', (req, res) => {
    if (req.session.loggedIn) {
        res.render('milesentry', { loggedIn: true });
    }
    else {
        res.render('login')
    }
});

router.get('/newuser', (req, res) => {
    res.render('newuser');
});


module.exports = router;
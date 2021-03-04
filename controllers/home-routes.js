const router = require('express').Router();
const sequelize = require('../config/connection');
const { User, Goals, Progress } = require('../models');

router.get('/', (req, res) => {
    res.render('homepage');
});

router.get('/login', (req, res) => {
    if (req.session.loggedIn) {
        res.redirect('/');
        return;
    }

    res.render('login');
});

router.get('/goals', (req, res) => {

    res.render('goals');
});

router.get('/activity', (req, res) => {

    res.render('activity');
});

router.get('/milesentry', (req, res) => {

    res.render('milesentry');
});

router.get('/progress', (req, res) => {

    res.render('progress');
});

router.get('/newuser', (req, res) => {
       res.render('newuser');
});


module.exports = router;
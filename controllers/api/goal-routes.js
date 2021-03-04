// Dependencies
const router = require('express').Router();
const { Goals, User } = require('../../models');
const withAuth = require('../../utils/auth');


// Get All Goals
router.get('/', (req, res) => {
    Goals.findAll({
      attributes: ['id', 'run', 'walk', 'bike', 'user_id'],
    })
      .then(dbGoalsData => res.json(dbGoalsData))
      .catch(err => {
        console.log(err);
        res.status(500).json(err);
      });
  });


// Get Specific Goal
router.get('/:id', (req, res) => {
    Goals.findOne({
      where: {
        id: req.params.id
      }
    })
      .then(dbGoalsData => {
        if (!dbGoalsData) {
          res.status(404).json({ message: 'No goal found with this ID!' });
          return;
        }
        res.json(dbGoalsData);
      })
      .catch(err => {
        console.log(err);
        res.status(500).json(err);
      });
  });


// -----------------------------          Route to grab all goals for specific user (.where userid)?


// Create New Goal -- Primary key auto? Pass all goals?
router.post('/', withAuth, (req, res) => {
    Goals.create({
      run: req.body.run,
      walk: req.body.walk,
      bike: req.body.bike,
      user_id: req.body.user_id
    })
      .then(dbGoalsData => res.json(dbGoalsData))
      .catch(err => {
        console.log(err);
        res.status(500).json(err);
      });
  });


// Edit Existing Goal
router.put('/:id', withAuth, (req, res) => {
    Goals.update(req.body, {
      individualHooks: true,
      where: {
        id: req.params.id
      }
    })
      .then(dbGoalsData => {
        if (!dbGoalsData[0]) {
          res.status(404).json({ message: 'No goal found with this ID!' });
          return;
        }
        res.json(dbGoalsData);
      })
      .catch(err => {
        console.log(err);
        res.status(500).json(err);
      });
  });


// Delete Existing Goal
router.delete('/:id', withAuth, (req, res) => {
    Goals.destroy({
      where: {
        id: req.params.id
      }
    })
      .then(dbGoalsData => {
        if (!dbGoalsData) {
          res.status(404).json({ message: 'No goal found with this ID!' });
          return;
        }
        res.json(dbGoalsData);
      })
      .catch(err => {
        console.log(err);
        res.status(500).json(err);
      });
  });


module.exports = router;
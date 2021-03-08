// Dependencies
const router = require('express').Router();
const { Progress, User } = require('../../models');
const withAuth = require('../../utils/auth');


// Get All Progress
router.get('/', (req, res) => {
    Progress.findAll({
        attributes: ['id', 'runProgress', 'walkProgress', 'bikeProgress', 'user_id'],
    })
        .then(dbProgressData => res.json(dbProgressData))
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});


// Get Specific progress
router.get('/:id', (req, res) => {
    Progress.findOne({
        where: {
            id: req.params.id
        },
        attributes: ['id', 'runProgress', 'walkProgress', 'bikeProgress', 'user_id']
    })
        .then(dbProgressData => {
            if (!dbProgressData) {
                res.status(404).json({ message: 'No progress found with this ID!' });
                return;
            }
            res.json(dbProgressData);
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});


// -----------------------------          Route to grab all Progress for specific user (.where userid)?


// Create New Progess -- Primary key auto? Pass all Progress?
router.post('/', withAuth, (req, res) => {
    Progress.create({
        runProgress: req.body.runProgress,
        walkProgress: req.body.walkProgress,
        bikeProgress: req.body.bikeProgress,
        user_id: req.body.user_id
    })
        .then(dbProgressData => res.json(dbProgressData))
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});


// Edit Existing Progress
router.put('/:id', withAuth, (req, res) => {
    console.log('++++++++++++++++++++++++++++++++++++++');
    console.log(req.body.progressObject);
    Progress.update(req.body.progressObject, {
        individualHooks: true,
        where: {
            id: req.params.id
        }
    })
        .then(dbProgressData => {
            console.log(dbProgressData[1]);
            if (!dbProgressData[1]) {
                res.status(404).json({ message: 'No progress found with this ID!' });
                return;
            }
            res.json(dbProgressData[1]);
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});


// Delete Existing Progress
router.delete('/:id', withAuth, (req, res) => {
    Progress.destroy({
        where: {
            id: req.params.id
        }
    })
        .then(dbProgressData => {
            if (!dbProgressData) {
                res.status(404).json({ message: 'No progress found with this ID!' });
                return;
            }
            res.json(dbProgressData);
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});


module.exports = router;
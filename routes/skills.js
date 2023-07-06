var express = require('express');
var router = express.Router();
var skillsCtrl = require('../controllers/skills');

// Get Skills
router.get('/', skillsCtrl.index);

// Get New
router.get('/new', skillsCtrl.new);

// GET /skills/:id
router.get('/:id', skillsCtrl.show);

// POST /skills
router.post('/', skillsCtrl.create);

// DELETE /skills/:id
router.delete('/:id', skillsCtrl.delete);

router.put('/:id/increase', skillsCtrl.increase);

router.put('/:id/decrease', skillsCtrl.decrease);

module.exports = router;
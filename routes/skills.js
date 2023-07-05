var express = require('express');
var router = express.Router();
var skillsCtrl = require('../controllers/skills');

// Get Skills
router.get('/', skillsCtrl.index);

// GET /skills/:id
router.get('/:id', skillsCtrl.show);


module.exports = router;
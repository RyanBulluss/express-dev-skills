const Skill = require('../models/skill');

function index(req, res) {
    res.render('skills/index', {
        skills: Skill.getAll(),
        title: 'My Skills:' 
    })
}

function increase(req, res) {
    Skill.increaseScore(req.params.id);
}

function decrease(req, res) {
    Skill.decreaseScore(req.params.id);
}

function show(req, res) {
    res.render('skills/show', {
        skill: Skill.getOne(req.params.id),
        title: 'Skill Details'
      });
}

function newSkill(req, res) {
    res.render('skills/new', { title: 'New Skill' })
}

function deleteSkill(req, res) {
    Skill.deleteOne(req.params.id);
    res.redirect('/skills');
}

function create(req, res) {
    console.log(req.body)

    Skill.create(req.body);

    res.redirect('/skills')
}

module.exports = {
    index,
    show,
    new: newSkill, 
    delete: deleteSkill,
    create,
    increase,
    decrease
}

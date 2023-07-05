const skills = [
    {id: 0, skill: 'HTML', score: 8},
    {id: 1, skill: 'CSS', score: 6},
    {id: 2, skill: 'JavaScript', score: 6},
    {id: 3, skill: 'Node JS', score: 3}
  ];

  function increaseScore(id) {
    id.parseInt(id);
    const skill = skills.find(skill => skill.id === id);
    skill.score++;
  }

  function decreaseScore(id) {
    id.parseInt(id);
    const skill = skills.find(skill => skill.id === id);
    skill.score--;
  }

  function getOne(id) {
    id = parseInt(id);
    return skills.find(skill => skill.id === id);
  }

  function getAll() {
    return skills;
  }

  function deleteOne(id) {
    id = parseInt(id);
    const idx = skills.findIndex(skill => skill.id === id);
    skills.splice(idx, 1);
  }

  function create(skill) {
    skill.id = skills.length;
    skill.score = 0;
    skills.push(skill)
  }

  module.exports = {
    getAll,
    getOne,
    deleteOne,
    create,
    increaseScore,
    decreaseScore
  }
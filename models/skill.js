const skills = [
    {id: 10, skill: 'HTML', score: 8},
    {id: 11, skill: 'CSS', score: 6},
    {id: 12, skill: 'JavaScript', score: 6},
    {id: 13, skill: 'Node JS', score: 3},
    {id: 14, skill: 'Python', score: 0}
  ];

  function getOne(id) {
    id = parseInt(id);
    return skills.find(skill => skill.id === id);
  }

  function getAll() {
    return skills;
  }

  module.exports = {
    getAll,
    getOne
  }
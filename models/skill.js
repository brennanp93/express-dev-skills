const skills = [
    {id: 125223, skill: 'HTML', mastered: false},
    {id: 127904, skill: 'CSS', mastered: false},
    {id: 139608, skill: 'Javascript', mastered: false}
  ];

  module.exports = {
    getAll, 
    getOne
};  

function getOne(id) {
    id = parseInt(id);
    return skills.find(skill => skill.id ===id);
}

function getAll() {
    return skills;
}
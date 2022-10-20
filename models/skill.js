const skills = [
    {id: 125223, skill: 'HTML', mastered: false},
    {id: 127904, skill: 'CSS', mastered: false},
    {id: 139608, skill: 'Javascript', mastered: false}
  ];

  module.exports = {
    getAll, 
    getOne,
    create,
    deleteOne,
};  

function deleteOne(id) {
    id = parseInt(id);
    const idx = skills.findIndex(skill => skill.id === id);
    skills.splice(idx, 1);
}

function create(skill) {
    skill.id = Date.now() % 1000000;
    skill.mastered = false;
    skills.push(skill);
}

function getOne(id) {
    id = parseInt(id);
    return skills.find(skill => skill.id ===id);
}

function getAll() {
    return skills;
}
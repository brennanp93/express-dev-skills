const skills = [
    {id: 125223, skill: 'Feed Dogs', },
    {id: 127904, skill: 'Learn Express'},
    {id: 139608, skill: 'Buy Milk'}
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
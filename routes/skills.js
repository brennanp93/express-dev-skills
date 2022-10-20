var express = require('express');
var router = express.Router();
var skillsController = require('../controllers/skills');


/* GET users listing. */
//GET /todos
router.get('/', skillsController.index);
// GET /todos/new <-- define BEFORE show route
router.get('/new', skillsController.new);
//GET /todos/:id
router.get('/:id', skillsController.show);
// GET/todos/:id/edit
// POST /todos
router.post('/', skillsController.create);
// DELETE/todos/:id
router.delete('/:id', skillsController.delete);
// PUT/todos/:id





module.exports = router;
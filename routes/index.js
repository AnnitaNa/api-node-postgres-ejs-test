var express = require('express');
var router = express.Router();
const carController = require('../controller/car.controller')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Home' });
});


router.get('/car', carController.getAll)
router.get('/car/:id', carController.getById)
router.post('/car', carController.create)
router.patch('/car/:id', carController.update)
router.delete('/car/:id', carController.remove)

module.exports = router;


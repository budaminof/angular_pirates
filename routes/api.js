var express = require('express');
var router = express.Router();
var knex = require('knex')(require('../knexfile')[process.env.DB_ENV]);

router.get('/', function(req, res, next) {
  knex('pirates')
  .then(function(data){
    res.json(data);
  })

});

router.post('/add', function (req, res, next) {
  knex('pirates')
  .insert(req.body)
  .returning('*')
  .then(function (newPirate) {
    res.json(newPirate);
  })
})

module.exports = router;
